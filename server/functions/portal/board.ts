// 보드: GitHub Projects와 버튼으로 주고받는다(가져오기, 올리기). 자동으로 맞추지 않는다.
// deno-lint-ignore-file no-explicit-any
type Sql = any;
type Out = { status: number; body: unknown };

// 비밀값 이름이 `github token`으로 들어간 경우도 읽는다.
const ghToken = () => (Deno.env.get("GITHUB_TOKEN") ?? Deno.env.get("github token") ?? "").trim();
export const githubReady = () => ghToken().length > 0;

// soft: 일부만 실패해도(예: 지워진 카드를 물었을 때) 받은 데이터는 돌려준다.
async function gh(query: string, variables: Record<string, unknown>, soft = false) {
  const r = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `Bearer ${ghToken()}`, "User-Agent": "team-portal", "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const j = await r.json().catch(() => null);
  if (soft && r.ok && j?.data) return j.data;
  if (!r.ok || !j || j.errors) throw new Error("GITHUB " + (j?.errors?.[0]?.message ?? r.status));
  return j.data;
}
const ITEM_AT = `query($id:ID!){ node(id:$id){ ... on ProjectV2Item{ updatedAt isArchived } } }`;
const ms = (v: unknown) => new Date(v as string).getTime();

// GitHub 필드 이름 → 우리 칸
const FIELD: Record<string, "status" | "area" | "owner" | "due"> = { Status: "status", "상태": "status", "영역": "area", "담당": "owner", "마감": "due" };
const SELECTS = ["status", "area", "owner"] as const;
const clip = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const isDate = (v: unknown) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);

async function projectRow(sql: Sql, key: string) {
  const [p] = await sql`select github_owner_type, github_owner, github_project_number, board_fields, board_pulled_at from portal.project where key = ${key}`;
  return p;
}

async function list(sql: Sql, key: string, report?: unknown): Promise<Out> {
  const p = await projectRow(sql, key);
  const items = await sql`select id, content_type, title, body, status, area, owner, to_char(due, 'YYYY-MM-DD') as due, url, dirty, conflict, github_item_id is null as local_only, updated_by, updated_at
    from portal.board_item where project_key = ${key} and not removed order by due nulls last, id`;
  const f = p.board_fields ?? {};
  const names = (k: string) => (f[k]?.options ?? []).map((o: any) => o.name);
  return { status: 200, body: {
    ready: githubReady() && !!p.github_project_number, pulledAt: p.board_pulled_at,
    options: { status: names("status"), area: names("area"), owner: names("owner"), hasDue: !!f.due },
    items, dirty: items.filter((i: any) => i.dirty && !i.conflict).length, conflicts: items.filter((i: any) => i.conflict).length, report: report ?? null,
  } };
}

async function event(sql: Sql, key: string, itemId: number, actor: string, field: string, oldV: unknown, newV: unknown) {
  await sql`insert into portal.board_event (project_key, item_id, actor, field, old_value, new_value) values (${key}, ${itemId}, ${actor}, ${field}, ${oldV == null ? null : String(oldV)}, ${newV == null ? null : String(newV)})`;
}

async function events(sql: Sql, key: string, b: Record<string, unknown>): Promise<Out> {
  const rows = await sql`select e.at, e.actor, e.field, e.old_value, e.new_value from portal.board_event e join portal.board_item i on i.id = e.item_id
    where e.item_id = ${Number(b.id) || 0} and i.project_key = ${key} order by e.at desc, e.id desc limit 40`;
  return { status: 200, body: { events: rows } };
}

// ---------- 가져오기 ----------
async function pull(sql: Sql, key: string): Promise<Out> {
  const p = await projectRow(sql, key);
  if (!githubReady() || !p.github_project_number) return { status: 409, body: { error: "GITHUB_NOT_READY" } };
  const root = p.github_owner_type === "org" ? "organization" : "user";
  const q = `query($login:String!,$num:Int!,$after:String){ ${root}(login:$login){ projectV2(number:$num){ id
    fields(first:40){ nodes{ __typename ... on ProjectV2SingleSelectField{ id name options{ id name } } ... on ProjectV2Field{ id name dataType } } }
    items(first:100, after:$after){ pageInfo{ hasNextPage endCursor } nodes{ id updatedAt isArchived
      content{ __typename ... on DraftIssue{ id title body } ... on Issue{ title url } ... on PullRequest{ title url } }
      fieldValues(first:20){ nodes{ __typename
        ... on ProjectV2ItemFieldSingleSelectValue{ name field{ ... on ProjectV2SingleSelectField{ name } } }
        ... on ProjectV2ItemFieldDateValue{ date field{ ... on ProjectV2Field{ name } } } } } } } } } }`;
  const remote: any[] = [];
  let after: string | null = null, meta: any = null;
  for (let page = 0; page < 5; page++) {
    const d = await gh(q, { login: p.github_owner, num: p.github_project_number, after });
    const pr = d[root]?.projectV2;
    if (!pr) throw new Error("GITHUB project not found");
    if (!meta) {
      meta = { projectId: pr.id };
      for (const f of pr.fields.nodes) {
        const k = FIELD[f?.name];
        if (!k) continue;
        if (k === "due") { if (f.dataType === "DATE") meta.due = { id: f.id }; }
        else if (f.options) meta[k] = { id: f.id, options: f.options };
      }
    }
    remote.push(...pr.items.nodes.filter((n: any) => !n.isArchived && n.content));
    if (!pr.items.pageInfo.hasNextPage) break;
    after = pr.items.pageInfo.endCursor;
  }

  const locals = await sql`select id, github_item_id, title, body, status, area, owner, to_char(due, 'YYYY-MM-DD') as due, dirty, removed, github_updated_at from portal.board_item where project_key = ${key}`;
  const byId = new Map<string, any>(locals.filter((l: any) => l.github_item_id).map((l: any) => [l.github_item_id, l]));
  const seen = new Set<string>();
  const rep = { added: 0, updated: 0, conflicts: 0, removed: 0 };

  for (const n of remote) {
    seen.add(n.id);
    const v: any = { status: "", area: "", owner: "", due: null };
    for (const fv of n.fieldValues.nodes) {
      const k = FIELD[fv?.field?.name];
      if (!k) continue;
      if (k === "due") v.due = fv.date ?? null; else v[k] = fv.name ?? "";
    }
    const type = n.content.__typename, title = n.content.title ?? "", body = type === "DraftIssue" ? (n.content.body ?? "") : "";
    const url = n.content.url ?? null, contentId = type === "DraftIssue" ? n.content.id : null;
    const l = byId.get(n.id);
    if (!l) {
      const [row] = await sql`insert into portal.board_item (project_key, github_item_id, github_content_id, content_type, title, body, status, area, owner, due, url, github_updated_at, created_by, updated_by)
        values (${key}, ${n.id}, ${contentId}, ${type}, ${title}, ${body}, ${v.status}, ${v.area}, ${v.owner}, ${v.due}, ${url}, ${n.updatedAt}, 'github', 'github') returning id`;
      await event(sql, key, row.id, "github", "created", null, title);
      rep.added++; continue;
    }
    // GitHub 목록은 방금 올린 변경을 늦게 보여 줄 때가 있다. 우리가 아는 것보다 오래된 내용이면 건너뛴다.
    if (l.github_updated_at && ms(n.updatedAt) < ms(l.github_updated_at)) continue;
    const remoteNewer = !l.github_updated_at || ms(n.updatedAt) > ms(l.github_updated_at);
    if (l.dirty) {
      if (remoteNewer) { await sql`update portal.board_item set conflict = true where id = ${l.id}`; rep.conflicts++; }
      continue;
    }
    const next: any = { title, body, status: v.status, area: v.area, owner: v.owner, due: v.due };
    let changed = false;
    for (const f of Object.keys(next)) if ((l[f] ?? "") !== (next[f] ?? "")) { changed = true; if (f !== "body") await event(sql, key, l.id, "github", f, l[f], next[f]); }
    await sql`update portal.board_item set github_content_id = ${contentId}, content_type = ${type}, title = ${title}, body = ${body}, status = ${v.status}, area = ${v.area}, owner = ${v.owner}, due = ${v.due}, url = ${url},
      github_updated_at = ${n.updatedAt}, removed = false, conflict = false, updated_by = ${changed ? "github" : sql`updated_by`}, updated_at = ${changed ? sql`now()` : sql`updated_at`} where id = ${l.id}`;
    if (changed) rep.updated++;
  }

  // 목록에 없는 카드는 하나씩 다시 물어 정말 없어졌을 때만 숨긴다(목록이 늦게 따라오는 경우 대비).
  const missing = locals.filter((l: any) => l.github_item_id && !seen.has(l.github_item_id) && !l.dirty && !l.removed);
  for (let i = 0; i < missing.length; i += 50) {
    const part = missing.slice(i, i + 50);
    const d = await gh(`query($ids:[ID!]!){ nodes(ids:$ids){ ... on ProjectV2Item{ id isArchived } } }`, { ids: part.map((l: any) => l.github_item_id) }, true);
    const alive = new Set((d.nodes ?? []).filter((n: any) => n?.id && !n.isArchived).map((n: any) => n.id));
    for (const l of part) if (!alive.has(l.github_item_id)) {
      await sql`update portal.board_item set removed = true where id = ${l.id}`;
      await event(sql, key, l.id, "github", "removed", null, null);
      rep.removed++;
    }
  }
  await sql`update portal.project set board_fields = ${sql.json(meta)}, board_pulled_at = now() where key = ${key}`;
  return list(sql, key, { kind: "pull", ...rep });
}

// ---------- 사이트에서 고치기 ----------
async function save(sql: Sql, key: string, me: string, b: Record<string, unknown>): Promise<Out> {
  const p = await projectRow(sql, key);
  const f = p.board_fields ?? {};
  const pick = (k: "status" | "area" | "owner") => {
    const v = clip(b[k], 40);
    const names = (f[k]?.options ?? []).map((o: any) => o.name);
    return !v || !names.length || names.includes(v) ? v : null;   // 보드에 없는 선택지는 거부
  };
  const status = pick("status"), area = pick("area"), owner = pick("owner");
  if (status === null || area === null || owner === null) return { status: 422, body: { error: "BAD_OPTION" } };
  const due = b.due ? (isDate(b.due) ? String(b.due) : undefined) : null;
  if (due === undefined) return { status: 422, body: { error: "BAD_DATE" } };
  const title = clip(b.title, 200), body = clip(b.body, 4000);

  if (b.id) {
    const [l] = await sql`select id, content_type, title, body, status, area, owner, to_char(due, 'YYYY-MM-DD') as due from portal.board_item where id = ${Number(b.id)} and project_key = ${key} and not removed`;
    if (!l) return { status: 404, body: { error: "NOT_FOUND" } };
    const editable = l.content_type === "DraftIssue";   // 이슈·PR의 제목과 설명은 GitHub에서만 고친다
    const next: any = { title: editable ? title : l.title, body: editable ? body : l.body, status, area, owner, due };
    if (!next.title) return { status: 422, body: { error: "REQUIRED" } };
    let changed = false;
    for (const k of Object.keys(next)) if ((l[k] ?? "") !== (next[k] ?? "")) { changed = true; if (k !== "body") await event(sql, key, l.id, me, k, l[k], next[k]); }
    if (changed) await sql`update portal.board_item set title = ${next.title}, body = ${next.body}, status = ${status}, area = ${area}, owner = ${owner}, due = ${due}, dirty = true, updated_by = ${me}, updated_at = now() where id = ${l.id}`;
  } else {
    if (!title) return { status: 422, body: { error: "REQUIRED" } };
    const [row] = await sql`insert into portal.board_item (project_key, content_type, title, body, status, area, owner, due, dirty, created_by, updated_by)
      values (${key}, 'DraftIssue', ${title}, ${body}, ${status}, ${area}, ${owner}, ${due}, true, ${me}, ${me}) returning id`;
    await event(sql, key, row.id, me, "created", null, title);
  }
  return list(sql, key);
}

// ---------- 올리기 ----------
async function push(sql: Sql, key: string, me: string, onlyIds?: number[]): Promise<Out> {
  const p = await projectRow(sql, key);
  const f = p.board_fields;
  if (!githubReady() || !f?.projectId) return { status: 409, body: { error: "PULL_FIRST" } };
  const rows = await sql`select id, github_item_id, github_content_id, content_type, title, body, status, area, owner, to_char(due, 'YYYY-MM-DD') as due, github_updated_at
    from portal.board_item where project_key = ${key} and dirty and not conflict and not removed ${onlyIds ? sql`and id = any(${onlyIds})` : sql``} order by id limit 40`;
  const rep = { kind: "push", pushed: 0, created: 0, conflicts: 0, errors: [] as string[] };
  const setField = `mutation($p:ID!,$i:ID!,$f:ID!,$v:ProjectV2FieldValue!){ updateProjectV2ItemFieldValue(input:{projectId:$p,itemId:$i,fieldId:$f,value:$v}){ projectV2Item{ id } } }`;
  const clearField = `mutation($p:ID!,$i:ID!,$f:ID!){ clearProjectV2ItemFieldValue(input:{projectId:$p,itemId:$i,fieldId:$f}){ projectV2Item{ id } } }`;

  for (const r of rows) {
    try {
      let itemId = r.github_item_id as string | null, contentId = r.github_content_id as string | null;
      if (itemId) {
        const d = await gh(ITEM_AT, { id: itemId }, true);
        const remoteAt = d.node?.isArchived ? null : d.node?.updatedAt;
        if (!remoteAt) { await sql`update portal.board_item set removed = true, dirty = false where id = ${r.id}`; await event(sql, key, r.id, "github", "removed", null, null); rep.errors.push(r.title + ": GitHub에서 사라진 카드"); continue; }
        if (r.github_updated_at && ms(remoteAt) > ms(r.github_updated_at)) { await sql`update portal.board_item set conflict = true where id = ${r.id}`; rep.conflicts++; continue; }
        if (r.content_type === "DraftIssue" && contentId) await gh(`mutation($d:ID!,$t:String!,$b:String){ updateProjectV2DraftIssue(input:{draftIssueId:$d,title:$t,body:$b}){ draftIssue{ id } } }`, { d: contentId, t: r.title, b: r.body });
      } else {
        const d = await gh(`mutation($p:ID!,$t:String!,$b:String){ addProjectV2DraftIssue(input:{projectId:$p,title:$t,body:$b}){ projectItem{ id content{ ... on DraftIssue{ id } } } } }`, { p: f.projectId, t: r.title, b: r.body });
        itemId = d.addProjectV2DraftIssue.projectItem.id; contentId = d.addProjectV2DraftIssue.projectItem.content?.id ?? null;
        await sql`update portal.board_item set github_item_id = ${itemId}, github_content_id = ${contentId} where id = ${r.id}`;
        rep.created++;
      }
      for (const k of SELECTS) {
        if (!f[k]) continue;
        const opt = (f[k].options ?? []).find((o: any) => o.name === r[k]);
        if (opt) await gh(setField, { p: f.projectId, i: itemId, f: f[k].id, v: { singleSelectOptionId: opt.id } });
        else if (!r[k]) await gh(clearField, { p: f.projectId, i: itemId, f: f[k].id });
      }
      if (f.due) {
        if (r.due) await gh(setField, { p: f.projectId, i: itemId, f: f.due.id, v: { date: r.due } });
        else await gh(clearField, { p: f.projectId, i: itemId, f: f.due.id });
      }
      const d2 = await gh(ITEM_AT, { id: itemId }, true);
      await sql`update portal.board_item set dirty = false, github_updated_at = ${d2.node?.updatedAt ?? null} where id = ${r.id}`;
      await event(sql, key, r.id, me, "pushed", null, null);
      rep.pushed++;
    } catch (e) {
      rep.errors.push(r.title + ": " + (e as Error).message.slice(0, 120));
    }
  }
  return list(sql, key, rep);
}

// 양쪽에서 바뀐 카드: 어느 쪽을 남길지 고른다.
async function resolve(sql: Sql, key: string, me: string, b: Record<string, unknown>): Promise<Out> {
  const [l] = await sql`select id, github_item_id from portal.board_item where id = ${Number(b.id) || 0} and project_key = ${key} and conflict`;
  if (!l) return { status: 404, body: { error: "NOT_FOUND" } };
  if (b.keep === "mine") {
    const d = await gh(ITEM_AT, { id: l.github_item_id }, true);
    await sql`update portal.board_item set conflict = false, github_updated_at = ${d.node?.updatedAt ?? null} where id = ${l.id}`;
    await event(sql, key, l.id, me, "resolved", null, "사이트 내용을 남김");
    return list(sql, key);
  }
  await sql`update portal.board_item set conflict = false, dirty = false, github_updated_at = null where id = ${l.id}`;
  await event(sql, key, l.id, me, "resolved", null, "GitHub 내용을 남김");
  return pull(sql, key);
}

export async function boardAction(sql: Sql, key: string, me: string, action: string, b: Record<string, unknown>): Promise<Out> {
  try {
    if (action === "board.list") return await list(sql, key);
    if (action === "board.pull") return await pull(sql, key);
    if (action === "board.save") return await save(sql, key, me, b);
    if (action === "board.push") return await push(sql, key, me);
    if (action === "board.resolve") return await resolve(sql, key, me, b);
    if (action === "board.events") return await events(sql, key, b);
    return { status: 400, body: { error: "UNKNOWN_ACTION" } };
  } catch (e) {
    const m = (e as Error).message ?? "";
    console.error("board error", action, m);
    return { status: m.startsWith("GITHUB") ? 502 : 500, body: { error: m.startsWith("GITHUB") ? "GITHUB_FAILED" : "SERVER" } };
  }
}

// ---------- 일정과 보드 잇기 ----------
// 일정이 생기면 보드에 '할 일' 카드를 만들고(마감 = 일정 날짜), 바로 GitHub에 올린다.
export async function cardFromEvent(sql: Sql, key: string, me: string, title: string, due: string, note: string): Promise<number> {
  const p = await projectRow(sql, key);
  const first = (p.board_fields?.status?.options ?? [])[0]?.name ?? "";
  const [row] = await sql`insert into portal.board_item (project_key, content_type, title, body, status, due, dirty, created_by, updated_by)
    values (${key}, 'DraftIssue', ${clip(title, 200)}, ${clip(note, 4000)}, ${first}, ${due}, true, ${me}, ${me}) returning id`;
  await event(sql, key, row.id, me, "created", null, title + " (일정에서)");
  return Number(row.id);
}

// 일정이 바뀌면 이어진 카드의 제목과 마감도 바꾼다(카드를 사이트에서 따로 고치는 중이면 건드리지 않는다).
export async function updateCardFromEvent(sql: Sql, key: string, me: string, itemId: number, title: string, due: string): Promise<boolean> {
  const [l] = await sql`select id, title, to_char(due, 'YYYY-MM-DD') as due, dirty, removed, content_type from portal.board_item where id = ${itemId} and project_key = ${key}`;
  if (!l || l.removed || l.content_type !== "DraftIssue" || (l.title === title && l.due === due)) return false;
  if (l.title !== title) await event(sql, key, l.id, me, "title", l.title, title);
  if (l.due !== due) await event(sql, key, l.id, me, "due", l.due, due);
  await sql`update portal.board_item set title = ${clip(title, 200)}, due = ${due}, dirty = true, updated_by = ${me}, updated_at = now() where id = ${l.id}`;
  return true;
}

export async function pushItems(sql: Sql, key: string, me: string, ids: number[]) {
  if (!ids.length || !githubReady()) return;
  try { await push(sql, key, me, ids); } catch (e) { console.error("push from calendar", (e as Error).message); }
}

// 체크리스트 할 일을 끝내거나 되돌리면 이어진 카드의 상태도 바꾼다(끝냄 = '완료' 또는 마지막 상태, 되돌림 = 첫 상태).
export async function setCardDone(sql: Sql, key: string, me: string, itemId: number, done: boolean): Promise<boolean> {
  const p = await projectRow(sql, key);
  const opts = (p.board_fields?.status?.options ?? []).map((o: any) => o.name);
  if (!opts.length) return false;
  const target = done ? (opts.find((n: string) => /완료|done/i.test(n)) ?? opts[opts.length - 1]) : opts[0];
  const [l] = await sql`select id, status, removed from portal.board_item where id = ${itemId} and project_key = ${key}`;
  if (!l || l.removed || l.status === target) return false;
  await event(sql, key, l.id, me, "status", l.status, target);
  await sql`update portal.board_item set status = ${target}, dirty = true, updated_by = ${me}, updated_at = now() where id = ${l.id}`;
  return true;
}
