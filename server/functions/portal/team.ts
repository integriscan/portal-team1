// 팀 탭(결정 103): 핵심 가치, 프로젝트, 조직도와 역할, 핵심 업무, 처음 왔을 때·떠날 때.
// 사람이 바뀌어도 이 탭 하나로 넘겨받게 한다. 누구나 고칠 수 있고, 고칠 때마다 바뀐 기록을 남긴다.
// deno-lint-ignore-file no-explicit-any
type Sql = any;
type Out = { status: number; body: unknown };
const SECTIONS = ["values", "project", "core", "org", "work", "join", "leave"];
const MAX_BODY = 8000;

async function page(sql: Sql, key: string): Promise<Out> {
  const rows = await sql`select section, body, updated_by, to_char(updated_at at time zone 'Asia/Seoul', 'YYYY-MM-DD HH24:MI') as updated_at
    from portal.team_page where project_key = ${key}`;
  return { status: 200, body: { sections: rows } };
}

export async function teamAction(sql: Sql, key: string, me: string, action: string, b: Record<string, unknown>): Promise<Out> {
  if (action === "team.get") return page(sql, key);
  const section = String(b.section ?? "");
  if (!SECTIONS.includes(section)) return { status: 422, body: { error: "BAD_SECTION" } };
  if (action === "team.save") {
    const body = typeof b.body === "string" ? b.body.replace(/\r\n/g, "\n").trim().slice(0, MAX_BODY) : "";
    await sql.begin(async (tx: Sql) => {
      await tx`insert into portal.team_page (project_key, section, body, updated_by, updated_at) values (${key}, ${section}, ${body}, ${me}, now())
        on conflict (project_key, section) do update set body = excluded.body, updated_by = excluded.updated_by, updated_at = now()`;
      await tx`insert into portal.team_page_rev (project_key, section, body, updated_by) values (${key}, ${section}, ${body}, ${me})`;
    });
    return page(sql, key);
  }
  if (action === "team.history") {
    const rows = await sql`select id, body, updated_by, to_char(updated_at at time zone 'Asia/Seoul', 'YYYY-MM-DD HH24:MI') as updated_at
      from portal.team_page_rev where project_key = ${key} and section = ${section} order by id desc limit 20`;
    return { status: 200, body: { history: rows } };
  }
  return { status: 400, body: { error: "UNKNOWN_ACTION" } };
}
