// 팀 기록 사이트 API. 자체 인증(팀 비밀번호 → 개인 가입·로그인 → 세션 토큰)을 쓰므로 verify_jwt는 끈다.
// 표는 portal 스키마에 있고 API에 노출하지 않는다. 이 함수만 DB에 직접 붙는다.
import postgres from "npm:postgres@3.4.4";
import { boardAction, githubReady } from "./board.ts";
import { checkKey, ingest, meetingAction } from "./meeting.ts";
import { calendarAction, calendarSync, expenseAction, taskAction, tasksFromLog } from "./work.ts";
import { teamAction } from "./team.ts";

const sql = postgres(Deno.env.get("SUPABASE_DB_URL")!, { prepare: false, max: 2, idle_timeout: 20 });

// 주소마다 들어갈 수 있는 프로젝트. localhost는 개발 미리보기용.
const ORIGINS: Record<string, string[]> = { "http://localhost:8765": ["orderless", "team1"] };
for (const domain of ["feeler.kr", "pozy.kr"]) for (const scheme of ["https", "http"]) {
  ORIGINS[`${scheme}://orderless.${domain}`] = ["orderless"];
  ORIGINS[`${scheme}://team1.${domain}`] = ["team1"];
}
const SESSION_DAYS = 30;
const MAX_FAILS = 5;       // 15분 안에 5번 틀리면 잠근다
const LOCK_MINUTES = 15;
const PBKDF2_ITER = 150000;
const MAX_TEXT = 4000;
const MIN_PASSWORD = 6;

const enc = new TextEncoder();
const hex = (b: ArrayBuffer | Uint8Array) => Array.from(b instanceof Uint8Array ? b : new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
const unhex = (s: string) => new Uint8Array((s.match(/.{2}/g) ?? []).map((h) => parseInt(h, 16)));
async function sha256(s: string) { return hex(await crypto.subtle.digest("SHA-256", enc.encode(s))); }
async function pbkdf2(pass: string, salt: Uint8Array, iter: number) {
  const key = await crypto.subtle.importKey("raw", enc.encode(pass), "PBKDF2", false, ["deriveBits"]);
  return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: iter }, key, 256));
}
async function makeHash(pass: string) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return `pbkdf2$${PBKDF2_ITER}$${hex(salt)}$${await pbkdf2(pass, salt, PBKDF2_ITER)}`;
}
async function checkHash(pass: string, stored: string | null) {
  if (!stored) return false;
  const [kind, iter, salt, want] = stored.split("$");
  if (kind !== "pbkdf2" || !iter || !salt || !want) return false;
  const got = await pbkdf2(pass, unhex(salt), Number(iter));
  if (got.length !== want.length) return false;
  let diff = 0;
  for (let i = 0; i < got.length; i++) diff |= got.charCodeAt(i) ^ want.charCodeAt(i);
  return diff === 0;
}

const kstToday = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());
// 하루 기록의 날짜: 다음 날 오전 9시까지는 전날 기록으로 친다(마감이 자정이 아니라 다음 날 9시).
const LOG_CUTOFF_HOURS = 9;
const logDay = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date(Date.now() - LOG_CUTOFF_HOURS * 3600000));
const addDays = (d: string, n: number) => { const t = new Date(d + "T00:00:00Z"); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
const dow = (d: string) => new Date(d + "T00:00:00Z").getUTCDay(); // 0=일
const mondayOf = (d: string) => addDays(d, -((dow(d) + 6) % 7));
const isWeekday = (d: string) => dow(d) >= 1 && dow(d) <= 5;

function cors(origin: string | null) {
  const ok = origin && ORIGINS[origin] ? origin : "https://orderless.feeler.kr";
  return { "Access-Control-Allow-Origin": ok, "Vary": "Origin", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "content-type", "Access-Control-Max-Age": "86400" };
}
function reply(origin: string | null, status: number, body: unknown) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors(origin), "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });
}
const text = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX_TEXT) : "");

async function locked(project: string, ip: string, kind: string) {
  const [r] = await sql`select count(*)::int as n from portal.login_attempt where project_key = ${project} and ip = ${ip} and kind = ${kind} and not ok and at > now() - make_interval(mins => ${LOCK_MINUTES})`;
  return r.n >= MAX_FAILS;
}
const attempt = (project: string, ip: string, kind: string, ok: boolean) => sql`insert into portal.login_attempt (project_key, ip, kind, ok) values (${project}, ${ip}, ${kind}, ${ok})`;
async function newSession(project: string, isAdmin: boolean, memberId: number | null) {
  const token = hex(crypto.getRandomValues(new Uint8Array(32)));
  await sql`insert into portal.session (token_hash, project_key, is_admin, member_id, expires_at) values (${await sha256(token)}, ${project}, ${isAdmin}, ${memberId}, now() + make_interval(days => ${SESSION_DAYS}))`;
  return token;
}
async function sessionOf(token: unknown) {
  if (typeof token !== "string" || token.length !== 64) return null;
  const [s] = await sql`select s.project_key, s.is_admin, s.member_id, m.name from portal.session s left join portal.member m on m.id = s.member_id and m.is_active
    where s.token_hash = ${await sha256(token)} and s.expires_at > now()`;
  if (!s) return null;
  return { project: s.project_key as string, isAdmin: s.is_admin as boolean, memberId: (s.name ? Number(s.member_id) : null) as number | null, name: (s.name ?? null) as string | null };
}

// 연속 제출(결정 104). 쓴 날은 주말도 1일로 센다. 평일을 빠뜨리면 끊기고, 주말에 안 쓴 날은 건너뛴다(끊지 않는다).
// 오늘 아직 안 썼으면 어제까지로 센다.
function streak(dates: Set<string>, today: string) {
  let d = dates.has(today) ? today : addDays(today, -1);
  let n = 0;
  for (let i = 0; i < 400; i++) {
    if (dates.has(d)) n++;
    else if (isWeekday(d)) break;
    d = addDays(d, -1);
  }
  return n;
}

// 개인 가입 전 단계: 프로젝트 이름과 이름 목록만 준다.
async function gate(project: string) {
  const [p] = await sql`select key, name from portal.project where key = ${project}`;
  const members = await sql`select name, pass_hash is not null as joined from portal.member where project_key = ${project} and is_active order by sort_order, id`;
  return { needMember: true, project: { key: p.key, name: p.name }, members: members.map((m) => ({ name: m.name, joined: m.joined })) };
}

async function bootstrap(project: string, isAdmin: boolean, me: string) {
  const today = kstToday(), day = logDay();
  const week = mondayOf(today);
  const [p] = await sql`select key, name, calendar_url, admin_hash is not null as admin_set, ingest_hash is not null as ingest_set from portal.project where key = ${project}`;
  const members = await sql`select name from portal.member where project_key = ${project} and is_active and pass_hash is not null order by sort_order, id`;
  const todays = await sql`select author, did, why, good, regret, next, updated_at from portal.daily_log where project_key = ${project} and log_date = ${day} order by updated_at`;
  const recent = await sql`select author, to_char(log_date, 'YYYY-MM-DD') as d from portal.daily_log where project_key = ${project} and log_date > ${addDays(today, -200)}`;
  const weekly = await sql`select author from portal.weekly_review where project_key = ${project} and week_start = ${week}`;
  const byAuthor = new Map<string, Set<string>>();
  for (const r of recent) { if (!byAuthor.has(r.author)) byAuthor.set(r.author, new Set()); byAuthor.get(r.author)!.add(r.d); }
  const weeklyDone = new Set(weekly.map((w) => w.author));
  return {
    project: { key: p.key, name: p.name, calendarUrl: p.calendar_url, adminSet: p.admin_set, ingestSet: p.ingest_set },
    me, isAdmin, today, logDay: day, weekStart: week,
    isMonday: dow(today) === 1,
    isFirstWeek: Number(week.slice(8, 10)) <= 7,   // 그 달의 첫 월요일이 든 주
    githubReady: githubReady(),
    members: members.map((m) => ({ name: m.name, streak: streak(byAuthor.get(m.name) ?? new Set(), day), wroteToday: todays.some((t) => t.author === m.name), wroteWeekly: weeklyDone.has(m.name) })),
    todayLogs: todays,
  };
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin");
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
  if (req.method !== "POST") return reply(origin, 405, { error: "METHOD" });
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return reply(origin, 400, { error: "BAD_JSON" }); }
  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  const action = String(b.action ?? "");

  try {
    if (action === "login") {
      const project = String(b.project ?? "");
      const allowed = origin ? ORIGINS[origin] : undefined;
      if (allowed && !allowed.includes(project)) return reply(origin, 403, { error: "WRONG_SITE" });
      if (await locked(project, ip, "team")) return reply(origin, 429, { error: "LOCKED", minutes: LOCK_MINUTES });
      const [p] = await sql`select pass_hash from portal.project where key = ${project}`;
      const ok = !!p && await checkHash(String(b.passcode ?? ""), p.pass_hash);
      await attempt(project, ip, "team", ok);
      if (!ok) return reply(origin, 401, { error: "WRONG_PASSCODE" });
      return reply(origin, 200, { token: await newSession(project, false, null), ...(await gate(project)) });
    }
    // 구글 미트 회의록 받기: Apps Script가 세션 없이 연결 키로 부른다.
    if (action === "meeting.ingest") { const out = await ingest(sql, b, ip); return reply(origin, out.status, out.body); }
    if (action === "calendar.sync") {
      const key = await checkKey(sql, b, ip);
      if (typeof key !== "string") return reply(origin, key.status, key.body);
      const out = await calendarSync(sql, key, b);
      return reply(origin, out.status, out.body);
    }

    const s = await sessionOf(b.token);
    if (!s) return reply(origin, 401, { error: "NO_SESSION" });
    const today = kstToday();
    const password = typeof b.password === "string" ? b.password : "";

    // ---- 개인 가입과 로그인 (팀 비밀번호로 들어온 뒤) ----
    if (action === "member.signup") {
      const name = text(b.name).slice(0, 20);
      if (!name) return reply(origin, 422, { error: "NAME_REQUIRED" });
      if (password.length < MIN_PASSWORD || password.length > 200) return reply(origin, 422, { error: "TOO_SHORT" });
      const hash = await makeHash(password);
      // 미리 넣어 둔 이름이면 그 자리를 차지하고, 없는 이름이면 새로 만든다. 이미 가입된 이름은 막는다.
      const claimed = await sql`update portal.member set pass_hash = ${hash}, joined_at = now() where project_key = ${s.project} and name = ${name} and pass_hash is null and is_active returning id`;
      let id = claimed[0]?.id;
      if (!id) {
        const made = await sql`insert into portal.member (project_key, name, pass_hash, joined_at, sort_order) values (${s.project}, ${name}, ${hash}, now(), 99) on conflict (project_key, name) do nothing returning id`;
        id = made[0]?.id;
      }
      if (!id) return reply(origin, 409, { error: "NAME_TAKEN" });
      return reply(origin, 200, { token: await newSession(s.project, false, Number(id)), ...(await bootstrap(s.project, false, name)) });
    }
    if (action === "member.login") {
      if (await locked(s.project, ip, "member")) return reply(origin, 429, { error: "LOCKED", minutes: LOCK_MINUTES });
      const name = text(b.name);
      const [m] = await sql`select id, pass_hash from portal.member where project_key = ${s.project} and name = ${name} and is_active`;
      const ok = !!m && await checkHash(password, m.pass_hash);
      await attempt(s.project, ip, "member", ok);
      if (!ok) return reply(origin, 401, { error: "WRONG_PASSWORD" });
      return reply(origin, 200, { token: await newSession(s.project, false, Number(m.id)), ...(await bootstrap(s.project, false, name)) });
    }
    if (action === "logout") {
      await sql`delete from portal.session where token_hash = ${await sha256(String(b.token))}`;
      return reply(origin, 200, { ok: true });
    }

    // 여기부터는 개인 로그인이 끝난 세션만.
    if (action === "bootstrap" && !s.name) return reply(origin, 200, await gate(s.project));
    if (!s.name) return reply(origin, 401, { error: "NO_MEMBER" });
    const me = s.name;

    if (action === "bootstrap") return reply(origin, 200, await bootstrap(s.project, s.isAdmin, me));

    if (action.startsWith("board.")) {
      const out = await boardAction(sql, s.project, me, action, b);
      return reply(origin, out.status, out.body);
    }
    if (action.startsWith("task.")) {
      const out = await taskAction(sql, s.project, me, action, b, today);
      return reply(origin, out.status, out.body);
    }
    if (action.startsWith("team.")) {
      const out = await teamAction(sql, s.project, me, action, b);
      return reply(origin, out.status, out.body);
    }
    if (action.startsWith("expense.")) {
      const out = await expenseAction(sql, s.project, me, action, b);
      return reply(origin, out.status, out.body);
    }
    if (action.startsWith("calendar.")) {
      const out = await calendarAction(sql, s.project, me, action, b, today);
      return reply(origin, out.status, out.body);
    }
    if (action.startsWith("meeting.")) {
      const out = await meetingAction(sql, s.project, me, s.isAdmin, action, b, today);
      return reply(origin, out.status, out.body);
    }

    if (action === "log.save") {
      const did = text(b.did), next = text(b.next);
      if (!did || !next) return reply(origin, 422, { error: "REQUIRED" });
      const day = logDay();
      await sql`insert into portal.daily_log (project_key, author, log_date, did, why, good, regret, next)
        values (${s.project}, ${me}, ${day}, ${did}, ${text(b.why)}, ${text(b.good)}, ${text(b.regret)}, ${next})
        on conflict (project_key, author, log_date) do update set did = excluded.did, why = excluded.why, good = excluded.good, regret = excluded.regret, next = excluded.next, updated_at = now()`;
      // '내일 할 일'을 체크리스트·보드·일정으로 보낸다. 실패해도 기록 저장은 성공으로 돌려준다.
      try { await tasksFromLog(sql, s.project, me, day, next); } catch (e) { console.error("log tasks", (e as Error).message); }
      return reply(origin, 200, await bootstrap(s.project, s.isAdmin, me));
    }

    if (action === "log.history") {
      const author = text(b.author);
      const rows = await sql`select author, to_char(log_date, 'YYYY-MM-DD') as date, did, why, good, regret, next from portal.daily_log
        where project_key = ${s.project} and log_date > ${addDays(today, -90)} ${author ? sql`and author = ${author}` : sql``}
        order by log_date desc, updated_at limit 300`;
      return reply(origin, 200, { logs: rows });
    }

    if (action === "weekly.save") {
      const did = text(b.did);
      if (!did) return reply(origin, 422, { error: "REQUIRED" });
      await sql`insert into portal.weekly_review (project_key, author, week_start, did, good, regret, next)
        values (${s.project}, ${me}, ${mondayOf(today)}, ${did}, ${text(b.good)}, ${text(b.regret)}, ${text(b.next)})
        on conflict (project_key, author, week_start) do update set did = excluded.did, good = excluded.good, regret = excluded.regret, next = excluded.next, updated_at = now()`;
      return reply(origin, 200, { ok: true });
    }

    if (action === "weekly.list") {
      const rows = await sql`select author, to_char(week_start, 'YYYY-MM-DD') as week_start, did, good, regret, next from portal.weekly_review
        where project_key = ${s.project} and week_start > ${addDays(today, -120)} order by week_start desc, updated_at limit 200`;
      return reply(origin, 200, { reviews: rows, weekStart: mondayOf(today) });
    }

    // 분석 화면용 비밀번호는 사이트에서 직접 정한다. 아직 없을 때 한 번만.
    return reply(origin, 400, { error: "UNKNOWN_ACTION" });
  } catch (e) {
    console.error("portal error", action, (e as Error).message);
    return reply(origin, 500, { error: "SERVER" });
  }
});
