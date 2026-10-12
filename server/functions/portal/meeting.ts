// 회의록: 구글 미트(Gemini 메모)가 Apps Script로 보내 주는 것과 사이트에서 직접 쓴 것.
// deno-lint-ignore-file no-explicit-any
type Sql = any;
type Out = { status: number; body: unknown };

const enc = new TextEncoder();
const hex = (b: ArrayBuffer) => Array.from(new Uint8Array(b)).map((x) => x.toString(16).padStart(2, "0")).join("");
const sha256 = async (s: string) => hex(await crypto.subtle.digest("SHA-256", enc.encode(s)));
const same = (a: string, b: string) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const isDate = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
const MIN_KEY = 16;

// Apps Script가 세션 없이 부를 때 쓰는 확인. 프로젝트 + 연결 키(해시 비교). 같은 IP에서 10번 틀리면 15분 막는다.
// PROJECT 칸에는 영문 키(team1)나 사이트 이름(남뀨)을 모두 쓸 수 있다. 성공하면 영문 키를, 실패하면 응답을 돌려준다.
export async function checkKey(sql: Sql, b: Record<string, unknown>, ip: string): Promise<string | Out> {
  const project = clip(b.project, 40), key = typeof b.key === "string" ? b.key : "";
  const [fails] = await sql`select count(*)::int as n from portal.login_attempt where project_key = ${project} and ip = ${ip} and kind = 'ingest' and not ok and at > now() - interval '15 minutes'`;
  if (fails.n >= 10) return { status: 429, body: { error: "LOCKED" } };
  const [p] = project ? await sql`select key, ingest_hash from portal.project where key = ${project} or name = ${project}` : [null];
  const ok = !!p?.ingest_hash && key.length >= MIN_KEY && same(await sha256(key), p.ingest_hash);
  if (!ok) { await sql`insert into portal.login_attempt (project_key, ip, kind, ok) values (${project || "?"}, ${ip}, 'ingest', false)`; return { status: 401, body: { error: "BAD_KEY" } }; }
  return p.key as string;
}

export async function ingest(sql: Sql, b: Record<string, unknown>, ip: string): Promise<Out> {
  const p = await checkKey(sql, b, ip);
  if (typeof p !== "string") return p;
  const docId = clip(b.docId, 120), title = clip(b.title, 200) || "회의록", body = clip(b.text, 60000), url = clip(b.url, 400);
  if (!docId || !body) return { status: 422, body: { error: "REQUIRED" } };
  await sql`insert into portal.meeting (project_key, source, doc_id, title, held_on, body, url, created_by)
    values (${p}, 'meet', ${docId}, ${title}, ${isDate(b.date) ? b.date : null}, ${body}, ${url || null}, 'google-meet')
    on conflict (doc_id) do update set title = excluded.title, held_on = coalesce(excluded.held_on, portal.meeting.held_on), body = excluded.body, url = excluded.url, updated_at = now()`;
  return { status: 200, body: { ok: true } };
}

async function list(sql: Sql, key: string): Promise<Out> {
  const [p] = await sql`select ingest_hash is not null as ingest_set from portal.project where key = ${key}`;
  const rows = await sql`select id, source, title, to_char(held_on, 'YYYY-MM-DD') as held_on, body, url, created_by, updated_at
    from portal.meeting where project_key = ${key} and not removed order by held_on desc nulls last, id desc limit 100`;
  return { status: 200, body: { ingestSet: p.ingest_set, meetings: rows } };
}

export async function meetingAction(sql: Sql, key: string, me: string, isAdmin: boolean, action: string, b: Record<string, unknown>, today: string): Promise<Out> {
  if (action === "meeting.list") return list(sql, key);
  if (action === "meeting.save") {
    const title = clip(b.title, 200), body = clip(b.body, 60000), heldOn = isDate(b.date) ? String(b.date) : today;
    if (!title || !body) return { status: 422, body: { error: "REQUIRED" } };
    if (b.id) {
      const r = await sql`update portal.meeting set title = ${title}, held_on = ${heldOn}, body = ${body}, updated_at = now() where id = ${Number(b.id) || 0} and project_key = ${key} and source = 'manual' returning id`;
      if (!r.length) return { status: 404, body: { error: "NOT_FOUND" } };
    } else {
      await sql`insert into portal.meeting (project_key, source, title, held_on, body, created_by) values (${key}, 'manual', ${title}, ${heldOn}, ${body}, ${me})`;
    }
    return list(sql, key);
  }
  // 미트 연결 키: 관리자가 사이트에서 정한다. Apps Script에도 같은 값을 넣는다.
  // 지우기는 숨기기만 한다. 구글 드라이브의 원본 문서는 그대로 둔다.
  if (action === "meeting.remove") {
    await sql`update portal.meeting set removed = true, updated_at = now() where id = ${Number(b.id) || 0} and project_key = ${key}`;
    return list(sql, key);
  }
  }
  return { status: 400, body: { error: "UNKNOWN_ACTION" } };
}
