// 체크리스트(매일 업무)와 팀 일정. 일정은 Apps Script가 구글 캘린더와 5분마다 주고받는다.
// deno-lint-ignore-file no-explicit-any
import { cardFromEvent, pushItems, setCardDone, updateCardFromEvent } from "./board.ts";
type Sql = any;
type Out = { status: number; body: unknown };
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const isDate = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
const isTime = (v: unknown) => typeof v === "string" && /^\d{2}:\d{2}$/.test(v);
const iso = (v: unknown) => { const t = typeof v === "string" ? new Date(v) : null; return t && !isNaN(t.getTime()) ? t.toISOString() : null; };
const kstDate = (isoStr: string) => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date(isoStr));
const taskCardTitle = (t: { title: string; owner: string }) => t.owner ? `${t.title} (${t.owner})` : t.title;

// 기한이 있는 할 일 중 아직 카드가 없는 것을 보드 카드로 만든다(일정에 보이는 할 일은 모두 보드에도 있게).
async function linkTasks(sql: Sql, key: string, me: string, ids?: number[]): Promise<number[]> {
  const rows = await sql`select id, title, owner, to_char(due, 'YYYY-MM-DD') as due, done from portal.task
    where project_key = ${key} and not removed and due is not null and board_item_id is null ${ids ? sql`and id = any(${ids})` : sql``} order by id limit 50`;
  const made: number[] = [];
  for (const t of rows) {
    const cardId = await cardFromEvent(sql, key, me, taskCardTitle(t), t.due, "체크리스트 할 일에서 만든 카드");
    await sql`update portal.task set board_item_id = ${cardId} where id = ${t.id}`;
    if (t.done) await setCardDone(sql, key, me, cardId, true);
    made.push(cardId);
  }
  return made;
}

// ---------- 체크리스트 ----------
// 안 끝난 일은 날이 바뀌어도 남고, 끝낸 일은 끝낸 날까지만 보인다.
async function taskList(sql: Sql, key: string, today: string): Promise<Out> {
  const rows = await sql`select id, title, owner, to_char(due, 'YYYY-MM-DD') as due, done, done_by, to_char(done_at at time zone 'Asia/Seoul', 'YYYY-MM-DD') as done_on,
      meeting_id, created_by, to_char(created_at at time zone 'Asia/Seoul', 'YYYY-MM-DD') as created_on
    from portal.task where project_key = ${key} and not removed
      and (not done or (done_at at time zone 'Asia/Seoul')::date >= ${today}::date)
    order by done, due nulls last, id limit 300`;
  return { status: 200, body: { tasks: rows } };
}

export async function taskAction(sql: Sql, key: string, me: string, action: string, b: Record<string, unknown>, today: string): Promise<Out> {
  if (action === "task.list") return taskList(sql, key, today);
  if (action === "task.add") {
    const items = Array.isArray(b.items) ? b.items.slice(0, 30) : [b];
    let added = 0;
    const newIds: number[] = [];
    for (const it of items as Record<string, unknown>[]) {
      const title = clip(it.title, 300);
      if (!title) continue;
      const due = isDate(it.due) ? it.due : null, owner = clip(it.owner, 20), mid = Number(it.meetingId) || null;
      const [row] = await sql`insert into portal.task (project_key, title, owner, due, meeting_id, created_by) values (${key}, ${title}, ${owner}, ${due}, ${mid}, ${me}) returning id`;
      newIds.push(Number(row.id));
      added++;
    }
    if (!added) return { status: 422, body: { error: "REQUIRED" } };
    await pushItems(sql, key, me, await linkTasks(sql, key, me, newIds));
    return taskList(sql, key, today);
  }
  if (action === "task.toggle") {
    const done = !!b.done;
    const [t] = await sql`update portal.task set done = ${done}, done_at = ${done ? sql`now()` : null}, done_by = ${done ? me : null} where id = ${Number(b.id) || 0} and project_key = ${key} returning board_item_id`;
    if (t?.board_item_id && await setCardDone(sql, key, me, Number(t.board_item_id), done)) await pushItems(sql, key, me, [Number(t.board_item_id)]);
    return taskList(sql, key, today);
  }
  if (action === "task.remove") {
    await sql`update portal.task set removed = true where id = ${Number(b.id) || 0} and project_key = ${key}`;
    return taskList(sql, key, today);
  }
  return { status: 400, body: { error: "UNKNOWN_ACTION" } };
}

// ---------- 일정 ----------
export async function calendarAction(sql: Sql, key: string, me: string, action: string, b: Record<string, unknown>, today: string): Promise<Out> {
  if (action === "calendar.list") {
    const from = isDate(b.from) ? String(b.from) : today;
    const days = Math.min(Math.max(Number(b.days) || 42, 1), 120);
    const events = await sql`select id, title, starts_at, ends_at, all_day, location, description, source, pending
      from portal.cal_event where project_key = ${key} and not deleted
        and starts_at < (${from}::date + ${days}::int) and coalesce(ends_at, starts_at) >= ${from}::date - 1
      order by starts_at limit 400`;
    const dues = await sql`select id, title, owner, to_char(due, 'YYYY-MM-DD') as due, status from portal.board_item
      where project_key = ${key} and not removed and due between ${from}::date and ${from}::date + ${days}::int
        and id not in (select board_item_id from portal.task where project_key = ${key} and board_item_id is not null)
        and id not in (select board_item_id from portal.cal_event where project_key = ${key} and board_item_id is not null) order by due`;
    const tasks = await sql`select id, title, owner, to_char(due, 'YYYY-MM-DD') as due from portal.task
      where project_key = ${key} and not removed and not done and due between ${from}::date and ${from}::date + ${days}::int order by due`;
    const [p] = await sql`select cal_synced_at from portal.project where key = ${key}`;
    return { status: 200, body: { events, dues, tasks, syncedAt: p.cal_synced_at } };
  }
  if (action === "calendar.add") {
    const title = clip(b.title, 200), date = b.date;
    if (!title || !isDate(date)) return { status: 422, body: { error: "REQUIRED" } };
    const allDay = !isTime(b.start);
    const start = allDay ? `${date}T00:00:00+09:00` : `${date}T${b.start}:00+09:00`;
    const end = allDay ? null : `${date}T${isTime(b.end) ? b.end : b.start}:00+09:00`;
    const [ev] = await sql`insert into portal.cal_event (project_key, title, starts_at, ends_at, all_day, location, description, source, pending, created_by)
      values (${key}, ${title}, ${start}, ${end}, ${allDay}, ${clip(b.location, 200)}, ${clip(b.description, 2000)}, 'site', true, ${me}) returning id`;
    const cardId = await cardFromEvent(sql, key, me, title, String(date), "일정에서 만든 카드" + (allDay ? "" : ` (${b.start})`) + (b.location ? ` · ${clip(b.location, 200)}` : ""));
    await sql`update portal.cal_event set board_item_id = ${cardId} where id = ${ev.id}`;
    await pushItems(sql, key, me, [cardId]);
    return calendarAction(sql, key, me, "calendar.list", { from: b.listFrom, days: b.listDays }, today);
  }
  return { status: 400, body: { error: "UNKNOWN_ACTION" } };
}

// Apps Script가 부른다: 구글 캘린더의 일정을 받아 저장하고, 사이트에서 만든 일정을 돌려준다.
export async function calendarSync(sql: Sql, key: string, b: Record<string, unknown>): Promise<Out> {
  const from = iso(b.from), to = iso(b.to);
  if (!from || !to) return { status: 422, body: { error: "REQUIRED" } };
  // 앞서 돌려준 사이트 일정이 구글에 만들어졌으면 연결한다.
  for (const c of (Array.isArray(b.created) ? b.created : []).slice(0, 50) as Record<string, unknown>[]) {
    const gid = clip(c.gcalId, 300);
    if (gid) await sql`update portal.cal_event set gcal_id = ${gid}, pending = false, updated_at = now() where id = ${Number(c.localId) || 0} and project_key = ${key} and pending`;
  }
  const seen: string[] = [], toPush: number[] = [];
  for (const e of (Array.isArray(b.events) ? b.events : []).slice(0, 500) as Record<string, unknown>[]) {
    const gid = clip(e.id, 300), start = iso(e.start);
    if (!gid || !start) continue;
    seen.push(gid);
    const title = clip(e.title, 200) || "(제목 없음)";
    const [row] = await sql`insert into portal.cal_event (project_key, gcal_id, title, starts_at, ends_at, all_day, location, description, source, updated_at)
      values (${key}, ${gid}, ${clip(e.title, 200) || "(제목 없음)"}, ${start}, ${iso(e.end)}, ${!!e.allDay}, ${clip(e.location, 200)}, ${clip(e.description, 2000)}, 'google', now())
      on conflict (project_key, gcal_id) do update set title = excluded.title, starts_at = excluded.starts_at, ends_at = excluded.ends_at, all_day = excluded.all_day,
        location = excluded.location, description = excluded.description, deleted = false, updated_at = now()
      returning id, board_item_id`;
    // 일정과 보드 잇기: 이어진 카드가 없으면(지난 일정 제외) 카드를 만들고, 있으면 제목·날짜를 맞춘다.
    if (row.board_item_id) {
      if (await updateCardFromEvent(sql, key, "google-calendar", Number(row.board_item_id), title, kstDate(start))) toPush.push(Number(row.board_item_id));
    } else if (new Date(start).getTime() >= Date.now() - 86400000) {
      const cardId = await cardFromEvent(sql, key, "google-calendar", title, kstDate(start), "구글 캘린더 일정에서 만든 카드");
      await sql`update portal.cal_event set board_item_id = ${cardId} where id = ${row.id}`;
      toPush.push(cardId);
    }
  }
  // 다른 경로로 들어온 할 일(기한 있음)도 5분마다 보드 카드로 맞춘다.
  toPush.push(...await linkTasks(sql, key, "checklist"));
  await pushItems(sql, key, "google-calendar", toPush);
  // 받은 기간 안에 있었는데 이번에 안 온 일정은 구글에서 지워진 것이다.
  await sql`update portal.cal_event set deleted = true, updated_at = now() where project_key = ${key} and gcal_id is not null and not deleted
    and starts_at >= ${from} and starts_at < ${to} and not (gcal_id = any(${seen}))`;
  await sql`update portal.project set cal_synced_at = now() where key = ${key}`;
  const pending = await sql`select id, title, starts_at, ends_at, all_day, location, description from portal.cal_event
    where project_key = ${key} and pending and not deleted order by id limit 50`;
  return { status: 200, body: { ok: true, pending } };
}

// ---------- 지출 ----------
// 누구나 적고, 지운 것은 숨기기만 한다(정산 때 확인할 수 있게 서버에는 남는다).
async function expenseList(sql: Sql, key: string): Promise<Out> {
  const rows = await sql`select id, to_char(spent_on, 'YYYY-MM-DD') as spent_on, item, amount, method, receipt_url, memo, created_by
    from portal.expense where project_key = ${key} and not removed order by spent_on desc, id desc limit 500`;
  return { status: 200, body: { expenses: rows } };
}

export async function expenseAction(sql: Sql, key: string, me: string, action: string, b: Record<string, unknown>): Promise<Out> {
  if (action === "expense.list") return expenseList(sql, key);
  if (action === "expense.add") {
    const item = clip(b.item, 200), amount = Math.round(Number(b.amount));
    if (!item || !isDate(b.date) || !Number.isFinite(amount) || amount < 0 || amount > 100000000) return { status: 422, body: { error: "REQUIRED" } };
    const url = clip(b.receipt, 500);
    await sql`insert into portal.expense (project_key, spent_on, item, amount, method, receipt_url, memo, created_by)
      values (${key}, ${b.date as string}, ${item}, ${amount}, ${clip(b.method, 40)}, ${/^https?:\/\//.test(url) ? url : null}, ${clip(b.memo, 500)}, ${me})`;
    return expenseList(sql, key);
  }
  if (action === "expense.remove") {
    await sql`update portal.expense set removed = true where id = ${Number(b.id) || 0} and project_key = ${key}`;
    return expenseList(sql, key);
  }
  return { status: 400, body: { error: "UNKNOWN_ACTION" } };
}
