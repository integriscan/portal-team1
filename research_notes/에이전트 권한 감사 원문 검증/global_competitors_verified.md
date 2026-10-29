# Global Competitive Facts, Verified Against Original Sources: Neutral Audit and Policy Layer for AI Agents (coding agents and MCP), as of 2026-10-29

> **How these notes were made. Read this first.**
> - **Network.** The proxy let through only a few hosts: ycombinator.com, code.claude.com, platform.claude.com, www.microsoft.com, cloud.google.com, raw.githubusercontent.com, registry.npmjs.org, pypi.org and news.crunchbase.com. Every other host returned **HTTP 403 at CONNECT**. That includes all six startups' own websites, okta.com, aws.amazon.com, cursor.com, openai.com, developers.openai.com, endorlabs.com, zenity.io, lasso.security, knostic.ai, docs.stepsecurity.io, learn.microsoft.com, docs.cloud.google.com, techcrunch.com, securityweek.com and all press-wire sites. The built-in WebFetch tool failed DNS on every host, so pages were fetched with curl through the proxy. Playwright/Chromium could not tunnel at all.
> - **Evidence tags.**
>   - **[OPENED]** means I fetched and read the original page myself.
>   - **[SNIPPET]** means the fact comes only from a WebSearch result summary. Those summaries usually quote the vendor page or press release, but I could not open it.
> - **Status labels used per item:** **Confirmed**, **Corrected** or **Unverified**.
> - **Crunchbase News** was reachable (I queried it through its WordPress JSON API). Its 2026 posts do not mention Zenity, Onyx, Arcade or Keycard rounds, so the funding facts rest on press snippets.

---

## Q1. Six YC companies in scope, plus other YC agent-auth, audit and MCP-security companies (2025–2026 batches)

### Takeaway
All six exist on YC's directory. Five batches are confirmed; **Clawvisor is corrected to Spring 2026 (P26), not S26**. All six are tiny (1–6 people). None of them is primarily a coding-agent governance product:
- **Clawvisor** and **Executor** explicitly plug into Claude Code (and Executor also into Cursor).
- Both of those can be **self-hosted**: Clawvisor as a Go daemon, Executor under the MIT license via Docker or Cloudflare.
- The other four target business-tool and SaaS agents or in-house agents.

None publishes list pricing on a page I could open. A scan of about 920 YC companies on industry pages found at least **10 more** 2025–2026 YC companies in agent control, audit or approval. The YC field is crowded, but every one of these companies is 1–3 people.

### Cited Findings

**Per-company verification table.** "YC page" means `https://www.ycombinator.com/companies/<slug>` [OPENED]. Batch, team size, founded year and description are copied from the page's embedded JSON.

| Company | Batch (status) | Team | Exact product (YC text) | Target customer | Coding agents? | On-prem / self-host? | Pricing |
|---|---|---|---|---|---|---|---|
| **Agentic Fabriq** | Winter 2026 (**Confirmed**) | 2 (founded 2025; Paulina Xu, Matthew Xu, both MIT dropouts) | "The control plane for AI agents… We give each agent an identity, scoped permissions, approval flows, and audit logs, so employees and customer-facing workflows can use agents without relying on shared API keys, overbroad service accounts…" [OPENED YC page](https://www.ycombinator.com/companies/agentic-fabriq). Launch post (Nov 6, 2025) "Okta for Agents": per-user connections, org-wide controls, least privilege, "every action is logged for audit & compliance", prebuilt connectors [OPENED](https://www.ycombinator.com/launches/OmE-agentic-fabriq-okta-for-agents) | IT/admins at companies that deploy internal agents over business tools and data | **Not mentioned** (business tools only) | Not stated (Unverified) | Not public. A third-party listing says $500K raised [SNIPPET, neuronfeed/cybersectools] |
| **Multifactor** | Fall 2025 (**Confirmed**) | 6 (founded 2025; YC page lists Vivek Nair, ex-CIA, Berkeley PhD) | "Zero-trust authentication, authorization, and auditing for AI agents… securely and revocably share online accounts with agents while maintaining fine-grained permissions and a detailed event history"; "patented AI security technology… thwart attacks like prompt injection"; early partners run "$7.5+ billion manufacturing supply chains" [OPENED](https://www.ycombinator.com/companies/multifactor) | Enterprise CISOs and users sharing web accounts with agents | **Not mentioned** | Not stated | $15M seed (Dec 2025), led by Nexus Venture Partners. A third-party review says free for individuals, custom enterprise pricing. Co-founder Colin Roberts [SNIPPET: [idtechwire](https://idtechwire.com/multifactor-raises-15-million-dollar-seed-round-to-secure-online-accounts-for-humans-and-ai-agents/), [makerstack](https://makerstack.co/reviews/multifactor-review/)] |
| **Alter** | Summer 2025 (**Confirmed**) | 2 (founded 2025; Srikar Dandamuraju ex-Goldman, Kevan Dodhia ex-Compute.ai) | "Privileged Access Management for AI Agents… wraps every tool call in strong authentication, fine-grained authorization… verified at the parameter level… fully audited in real time… issuing ephemeral, scope-narrowed access" [OPENED](https://www.ycombinator.com/companies/alter). Launch post (Aug 15, 2025): "Host or connect to all their tools. We support MCP and Native tools (A2A coming soon)"; "Approve or deny any agent request in real time"; parameter-level RBAC & ABAC; "CISO-ready dashboard"; beta at **alterai.dev** (the YC website field says alterauth.com) [OPENED](https://www.ycombinator.com/launches/OCi-alter-identity-and-access-control-platform-to-secure-agents) | Regulated enterprises (finance, healthcare, government); infosec teams | **Not mentioned**; MCP-tool oriented | Only a HackerNoon profile says it works "whether a company uses AWS, GCP, or on-prem" (**Unverified**) [SNIPPET](https://hackernoon.com/lang/lo/kevan-dodhias-builder-journey-to-creating-the-new-policy-layer-for-ai-agents) | Not public |
| **Clawvisor** | **Corrected: Spring 2026 ("P26")**, not S26. The YC page says "Spring 2026" and the founder bio says "Founder of Clawvisor (P26)" | 1 (founded 2026; Eric Levine, co-founder of Berbix (S18, acquired by Socure), ex-Airbnb, former YC Visiting Group Partner) | "The Authorization Layer for AI Agents… use apps like Gmail, Slack, and Google Drive without going rogue or ever seeing your credentials. You approve tasks once. Clawvisor enforces them on every request." [OPENED](https://www.ycombinator.com/companies/clawvisor). The GitHub README describes task-scoped approval, per-request approval queue (dashboard, Telegram or phone push), LLM intent verification, credential injection and a "Gateway log — searchable audit trail of every gateway request". It also warns: "experimental… has not been audited for security" [OPENED README](https://raw.githubusercontent.com/clawvisor/clawvisor/main/README.md) | Individuals and teams whose agents use SaaS APIs | **Yes, partially.** `clawvisor-server connect-agent claude-code` installs a skill plus env vars for Claude Code; also Claude Desktop (MCP), Hermes, OpenClaw and generic HTTP. It governs SaaS API calls, not shell or file actions [OPENED README] | **Yes.** Self-host daemon via install script, from source, or Docker. The README warns the agent must run on a separate host or it "can bypass the gateway" [OPENED README] | Self-host free and open-core; cloud "Solo" free; "Cloud Org" custom price with SSO/RBAC [SNIPPET, vendor compare page [clawvisor.com/compare](https://clawvisor.com/compare/clawvisor-vs-humanlayer)] |
| **Executor** | Summer 2026 (**Confirmed**) | 1 (founded 2026; Rhys Sullivan, ex-Vercel/Microsoft) | "The open source tool gateway… an MCP gateway that allows you to sign in once to all of your integrations and use them with any client" [OPENED](https://www.ycombinator.com/companies/executor). README: "Each tool is allowed, gated behind approval, or blocked"; integrations cover MCP, OpenAPI, GraphQL and Google Discovery; license **MIT**. The README makes **no audit-log claim** [OPENED README](https://raw.githubusercontent.com/UsefulSoftwareCo/executor/main/README.md). npm `executor` v2.0.0-beta.32 was published 2026-10-29 [OPENED](https://registry.npmjs.org/executor) | Developers and teams wiring many agents to many tools | **Yes.** The README names Claude Code, Cursor, ChatGPT and OpenCode as MCP clients | **Yes.** Local CLI, desktop app, self-host Docker, self-host Cloudflare Worker, or Executor Cloud [OPENED README] | Executor Cloud "Free tier"; no paid price listed [OPENED README] |
| **Armorer Labs** | Fall 2026 (**Confirmed**) | 2 (founded 2026; Daniel Begimher, ex-AWS AppSec field lead; Cristian Leo, ex-AWS AI security science) | "Continuous security verification for AI agents in regulated industries… simulates attacks… creates a verified fix… ready for your approval in about 4 hours. In production, Armorer checks every agent action in milliseconds, with no GPU needed… then allows, holds or denies the action"; claims "22% more accurate than JEV while being 88x faster"; backed by Paul Vixie [OPENED](https://www.ycombinator.com/companies/armorer-labs). PyPI `armorer` 0.1.14 is MIT-licensed, "A secure installer for agentic applications" [OPENED](https://pypi.org/pypi/armorer/json) | Regulated enterprises shipping **their own** agents | Not stated on YC. Third-party pages call it a local control plane for agents with sandboxes, approvals and logs, plus a Claude plugin listing (**Unverified**) [SNIPPET: [claudepluginhub](https://claudepluginhub.com/plugins/secureneural-armorer), [pypi](https://pypi.org/project/armorer/)] | Open-source local components exist; no stated on-prem SKU | Not public |

**Other YC agent control, audit and authorization companies in 2025–2026 batches.** These come from YC industry pages [OPENED] (security, identity, cybersecurity, devsecops, developer-tools ×11 pages, infrastructure ×6, ai-assistant ×3; about 923 companies). Batch codes: W=Winter, P=Spring, S=Summer, F=Fall.
- **Golf (P25, team 1, golf.dev)**: "visibility into shadow AI and control over AI agents and MCP. See what's connected, enforce policies, and generate audit trails." This is the closest YC match to the idea's MCP-governance part. [YC](https://www.ycombinator.com/companies/golf)
- **Stacktrace (F26, team 3)**: "the control layer for every agent: it sees every action, detects risky behavior, enforces the bounds your team sets, and steps in when an agent drifts from intent." [YC](https://www.ycombinator.com/companies/stacktrace)
- **Traceforce (S26, team 2)**: "CrowdStrike for AI Agents". Gives security teams visibility into AI app use on company devices and detects or prevents unsafe actions. [YC](https://www.ycombinator.com/companies/traceforce)
- **Decawork (S26, team 2)**: "Training company-specific models that approve AI actions" in real time. [YC](https://www.ycombinator.com/companies/decawork)
- **Salus (W26, team 2)**: an API that "checks its actions at run time, blocking incorrect ones." [YC](https://www.ycombinator.com/companies/salus)
- **ContextFort (S25, team 2)**: a Chrome extension that detects browser-agent takeover, "Records every action during the session" and adds controls. [YC](https://www.ycombinator.com/companies/contextfort)
- **GrayPass (F26, team 2)**: returns an allow/challenge/hold/deny decision with "short-lived, signed proof tied to the exact action", including actions where "an AI agent [acts] on someone's behalf". [YC](https://www.ycombinator.com/companies/graypass)
- **Codag (S26, team 1)**: "The AI gateway for cheaper, faster, permissioned agents". [YC](https://www.ycombinator.com/companies/codag)
- **truthsystems (S25, team 6)**: real-time governance agents that block non-compliant AI actions. [YC](https://www.ycombinator.com/companies/truthsystems)
- **Omnara (S25, team 4)**: an open-source, self-hostable control plane for managed agents. [YC](https://www.ycombinator.com/companies/omnara)
- **Pangolin (S25)**: open networking and security for the workforce, AI agents and infra. [YC](https://www.ycombinator.com/companies/pangolin)
- **Adjacent coding-agent tools:** Agent Relay (F26; coding agents in Claude Code, Codex and Cursor message each other, with "shared, searchable history", self-hostable open source) and Agent 37 (F26; cloud sandbox preloaded with Claude Code). [YC](https://www.ycombinator.com/companies/agent-relay)

### Inferences
- **Coding agents.** None of the six names coding-agent governance (shell, file edit, git push, package install) as its core. Clawvisor and Executor touch Claude Code and Cursor only as MCP or skill clients for SaaS and API tools. On the YC side, a "coding-agent-first, cross-vendor (Claude Code + Cursor + Codex) audit + policy" positioning is not taken. On the broader market it is contested (see Q2).
- **On-prem.** Self-hosting is cheap to offer: two 1-person YC companies already ship it (Executor under MIT, Clawvisor open-core). On-prem by itself is therefore not a moat. Packaged, supported on-prem for regulated buyers is still unclaimed by these YC companies.
- **Tamper evidence.** None of the YC descriptions claims a tamper-evident or cryptographically verifiable audit log. GrayPass's "signed proof tied to the exact action" is the nearest concept.

### Gaps
- None of the six company websites could be opened (proxy 403). Pricing pages, docs and on-prem SKUs come from YC text or third-party snippets only.
- YC directory search (Algolia) was not used. My scan covered only YC industry-listing pages (about 923 companies), so YC companies tagged only "AI" or "B2B" may be missing.
- Traceforce, Stacktrace and Golf were not checked for coding-agent support.

---

## Q2. Coding-agent governance competitors: what do they cover?

### Takeaway
Hook-based governance of coding agents is **already a product category**, not a gap:
- **Endor Labs** (Agent Governance; hooks for Claude Code and Cursor, with configs also for Codex and Copilot per its docs index; audit-only mode; MDM rollout)
- **Zenity** (claims Claude Code, Cowork, Codex, Copilot and Cursor through native hooks plus its MCP gateway)
- **Knostic Kirin** (Claude Code, Cursor, Windsurf, Copilot; Off/Monitor/Enforce; audit logs and SIEM on higher tiers)
- **Lasso** (Claude Code hooks; open-source claude-hooks repo)
- **SentinelOne/Prompt Security** (Claude and Cursor visibility, MCP gateway, an **on-prem** version)
- **StepSecurity Dev Machine Guard** (inventory of Claude Code, Codex, Cursor and skills)
- **Microsoft Defender** (discovery and runtime protection of local agents, in preview)

All evidence for these vendors is [SNIPPET]; every vendor domain was blocked.

### Cited Findings
- **Endor Labs.** Positions hooks as "a deterministic, auditable, out-of-band layer". Policy can "allow, block, or escalate an action before it happens". Claude Code hooks send session, prompt, tool-call, shell and file events. The docs flag gaps: Cursor Cloud does not fire stop or response events, Cursor CLI does not fire prompt, file-edit or stop events, and Claude Cowork is unsupported, failing silently. An env flag downgrades blocks to alerts (audit-only rollout). Configs can be generated for **Cursor, Claude Code, Codex, GitHub Copilot** with macOS MDM profiles. [SNIPPET: [Endor blog](https://endorlabs.com/learn/introducing-agent-governance-using-hooks-to-bring-visibility-to-ai-coding-agents), [docs/claude-code](https://docs.endorlabs.com/agent-governance/claude-code), [docs/mdm-deployment](https://docs.endorlabs.com/agent-governance/mdm-deployment), [docs/copilot](https://docs.endorlabs.com/agent-governance/copilot)]
  - A second Endor post launches "Agent Governance and Package Firewall" on its AURI platform, naming Cursor, Claude Code and Google Antigravity, with "policy and an audit trail on every agent". The solution brief is dated Jul 27, 2026 (updated Aug 31, 2026). [SNIPPET: [Endor blog](https://www.endorlabs.com/blog/introducing-security-for-ai-coding-agents-and-workstations)]
  - **Conflict on Codex/Copilot:** the docs index lists a Copilot page, but the launch post does not name Codex or Copilot.
  - Endor also claims a feature in "Gartner research on Claude Code permissions and agent governance". [SNIPPET](https://www.endorlabs.com/learn/endor-labs-featured-in-gartner-research-on-claude-code-permissions-and-agent-governance)
  - Pricing and on-prem: not found.
- **Zenity.** Claims it protects "Cursor, Claude Code, and GitHub Copilot – from build-time to runtime". A device page says it "enforces hard boundaries across Anthropic's Claude Code and Cowork, ChatGPT Codex, GitHub Copilot, and Cursor" via "native agent hooks and the Zenity MCP gateway". It monitors code read, commands run, installs and data sent to models, and discovers coding assistants and local MCP across endpoints. [SNIPPET: [Zenity blog](https://zenity.io/blog/from-ide-to-cli-securing-agentic-coding-assistants), [Zenity device-based](https://www.zenity.io/use-cases/agent-type/device-based)] Zenity has also announced a Claude Compliance API integration. [SNIPPET](https://pipelinepub.com/news/zenity-extends-ai-agent-security-and-governance)
- **Knostic Kirin.**
  - Supported agents: Claude Code CLI, Claude Desktop/Cowork, Cursor, Windsurf, and VS Code with Copilot, on macOS and Windows (Linux beta).
  - Controls: inspects MCP connections in real time, quarantines unverified MCP servers, and allow/block-lists extensions. Policies run in Off, Monitor or Enforce mode and can block secret-file reads or sanitize secrets.
  - Pricing: a free tier for 1–5 users; "Audit logs and SIEM integrations" on higher tiers.
  - [SNIPPET: [Knostic Kirin](https://www.knostic.ai/ai-coding-security-solution-kirin), [Knostic coding](https://www.knostic.ai/coding-assistants-agents-mcp)]
- **Lasso.** "Connects directly to Claude Code's lifecycle hooks via the enterprise management platform". Scans tool outputs before the agent acts and keeps an audit trail. The open-source repo `lasso-security/claude-hooks` (~222 stars, last push Jan 8, 2026) provides prompt-injection defenses. [SNIPPET: [Lasso use case](https://www.lasso.security/use-cases/ai-coding-assistants), [gittrend](https://gittrend.io/repo/lasso-security/claude-hooks)]
- **Prompt Security (SentinelOne).** SentinelOne agreed to acquire it (about $250M reported by CTech; no official price). The release names Claude and Cursor among monitored tools. It describes an MCP gateway covering 13,000+ known MCP servers. A SHI public-sector listing sells "AI code assistant" licenses at an MSRP of **$300 per developer**. A Korean report mentions a **Prompt Security On-Premise** version. [SNIPPET: [silicon.co.uk release](https://www.silicon.co.uk/press-release/sentinelone-to-acquire-prompt-security-to-advance-genai-security-and-agent-security-strategy), [SHI listing](https://www.publicsector.shidirect.com/product/50907997/PROMPT-SEC.-AI-CODE-ASSISTANT-A1-PER-DEVELOPER), [digitaltoday](https://www.digitaltoday.co.kr/cn/view/42723/sentinelone-snyk-unveil-ai-agent-security-tools)]
- **StepSecurity Dev Machine Guard.**
  - Inventory: an org-wide inventory of AI agents on developer laptops. CLI tools include Claude Code, Codex, Gemini CLI, Amazon Q/Kiro, Copilot CLI and Aider; IDEs include Cursor, Windsurf and Claude Desktop. It also covers MCP configs and agent skills (flagging hooks or shell in skills), with CSV export.
  - Deployment: an MDM/EDR loader with a signed manifest. It is open-source Go.
  - Scope: this is **inventory and posture**, not inline policy enforcement.
  - [SNIPPET: [StepSecurity docs](https://docs.stepsecurity.io/dev-machine-guard/ai-agents), [daily.dev](https://daily.dev/posts/dev-machine-guard-now-inventories-ai-agent-skills-on-developer-machines-dxyxw4plf)]
- **Socket.** I found only supply-chain tooling (Socket Firewall) and a Socket MCP server you add to Claude Code or Cursor. No coding-agent governance product was found. [SNIPPET: [Socket docs](https://docs.socket.dev/docs/remote-socket-mcp)]
- **Pillar Security.** I found only a secondary mention of July 20, 2026 research on sandbox bypasses in Cursor, Codex CLI, Gemini CLI and Antigravity. No product coverage was verified. [SNIPPET: [wikidocs](https://wikidocs.net/blog/@goodhosup/?tag=12491)]
- **Others seen in passing:**
  - Ceros (Beyond Identity): on-machine runtime policy and audit for Claude Code. [SNIPPET, [The Hacker News](https://thehackernews.com/2026/03/how-ceros-gives-security-teams.html)]
  - Rubrik: Claude Code execution-time governance webinar. [SNIPPET, [Rubrik](https://www.rubrik.com/resources/webinars/26/securing-claude-code-at-scale)]
  - MintMCP: Cursor hooks for MCP governance. [SNIPPET, [MintMCP](https://www.mintmcp.com/blog/mcp-governance-cursor-hooks)]
  - JFrog: governed MCP for Cursor. [SNIPPET, [JFrog](https://docs.jfrog.com/ai-ml/docs/cursor-enforce-jfrog-governed-mcp-usage)]
  - Akto: datasheet for AI coding assistants. [SNIPPET, [Akto](https://www.akto.io/resources/akto-for-ai-coding-datasheet)]
- **Microsoft Defender for Endpoint.**
  - Discovery: Defender discovers local agents and their MCP configs on Windows and macOS. The support matrix lists Claude Code, Cursor, Codex CLI and Gemini CLI.
  - Runtime protection: inspects at prompt submission, pre-tool-call and post-tool-response. Claude Code is documented as exposing those hooks. Cursor runtime protection is unconfirmed.
  - Status: discovery and runtime protection are both in **preview**.
  - [SNIPPET: [MS Learn support matrix](https://learn.microsoft.com/defender-endpoint/ai-agent-support-matrix), [runtime protection](https://learn.microsoft.com/defender-endpoint/ai-agent-runtime-protection-overview), [eWeek](https://www.eweek.com/news/microsoft-defender-shadow-ai/)]

### Inferences
- **What is covered.** "Hooks-based allow/deny/escalate on Claude Code and Cursor, plus inventory, plus SIEM export" is covered by at least four funded vendors (Endor, Zenity, Knostic, Lasso) and Microsoft (preview).
- **What is not.** No vendor I found markets a **tamper-evident (hash-chained or signed) evidence ledger** that is neutral (not tied to an AppSec, EDR or SSPM suite) and **on-prem by default**. Prompt Security's on-prem version is the nearest, and it is now a SentinelOne product.
- **Hook coverage gaps.** Endor documents its own gaps: Cursor CLI and Cloud do not fire some events, and Cowork is unsupported. Hook coverage across vendors is uneven. Normalizing it, and proving completeness ("which sessions were not covered"), is a real technical problem.

### Gaps
- I could not open any vendor page, so I could not confirm hooks fidelity, pricing (except the SHI $300/dev listing), on-prem availability (except the Prompt Security mention), or GA versus preview status for Endor, Zenity, Knostic or Lasso.
- I found no source for a dedicated Socket or Pillar coding-agent governance product.

---

## Q3. What the agent vendors ship natively: Anthropic (Claude Code), Cursor, OpenAI Codex

### Takeaway
Anthropic's native stack is **much deeper than earlier notes assumed**, and it shrinks the room for a standalone startup:
- **Policy:** managed settings with allow/ask/deny rules, MCP allow/deny lists, lockdown of hooks and permissions, and a sandbox network allowlist.
- **Delivery:** server-managed settings, or a **self-hosted Claude apps gateway** with IdP-group policies and a per-request audit log.
- **Telemetry:** OTel tool-level events that admins can lock to a collector.
- **Compliance API with Claude Code local-session transcripts** (6-year retention, Enterprise only).
- **Server-side Inference hooks** that can allow or deny prompts and tool calls across Claude Code and other surfaces.

The remaining limits are:
- **Coverage holes.** Transcripts exclude Bedrock, Vertex, Foundry and Console-key sessions, and Claude Code cloud sessions.
- **What transcripts show.** They reflect what reached the API, "not what occurred on the device".
- **Tamper evidence.** No customer-facing tamper-evident proof exists for agent-action records. Merkle proofs exist only for Anthropic's own Access Transparency events.
- **Single vendor.** Everything above covers Claude only.

Cursor has Enterprise audit logs, but they cover **admin events only** ("does not log agent responses or generated code", per its docs), keep 30 days of history via the Admin API, offer streaming on request, and include an MCP allowlist and hooks. Codex has a Compliance API with prompts and responses (30-day retention), OTel events (tool approvals, tool results, MCP usage, network allow/deny) and `requirements.toml` managed hooks. Codex sessions authenticated with an API key are excluded from the Compliance API.

### Cited Findings

**Anthropic / Claude Code**
- **Managed settings and delivery** [OPENED [admin-setup](https://code.claude.com/docs/en/admin-setup)]
  - "Claude Code enforces organization policy through managed settings that take precedence over local developer configuration."
  - Four sources are checked, in priority order: server-managed (claude.ai admin console, *or a self-hosted Claude apps gateway*); plist/registry; file-based `managed-settings.json` (`/Library/Application Support/ClaudeCode/`, `/etc/claude-code/`, `C:\Program Files\ClaudeCode\`); and HKCU. The HKCU registry is "a convenience default rather than an enforcement channel."
  - Server-managed settings are fetched at startup and refreshed hourly. Admin-console delivery requires a Teams or Enterprise plan.
  - "`permissions.allow` and `permissions.deny` merge entries from all sources, so developers can extend managed lists but not remove from them."
- **Controls listed in admin-setup** [OPENED, same page]:
  - Permission rules: `permissions.allow` / `permissions.deny` (allow, ask or deny).
  - Lockdown: `allowManagedPermissionRulesOnly`, `permissions.disableBypassPermissionsMode`, `disableAutoMode`.
  - Sandboxing: `sandbox.enabled`, `sandbox.network.allowedDomains` ("OS-level filesystem and network isolation").
  - MCP control: `allowedMcpServers`, `deniedMcpServers`, `allowManagedMcpServersOnly`, `managedMcpServers`, `managed-mcp.json`.
  - Plugin and marketplace lockdown, and `strictPluginOnlyCustomization`.
  - Hook restrictions: `allowManagedHooksOnly`, `allowedHttpHookUrls`.
  - Login and provider enforcement: `forceLoginMethod`, `allowedProviders`.
  - Version floors and ceilings, model restrictions, and the corporate launcher (`processWrapper`).
  - The docs also warn: "Denying WebFetch blocks Claude's fetch tool, but if Bash is allowed, `curl`… can still reach any URL. Sandboxing closes that gap."
- **MCP allow/deny patterns** [OPENED [managed-mcp](https://code.claude.com/docs/en/managed-mcp)]: an "Approved catalog" (`allowedMcpServers` + `allowManagedMcpServersOnly: true`), a "Soft allowlist", "Denylist only", or exclusive `managed-mcp.json`.
- **Hooks** [OPENED [hooks](https://code.claude.com/docs/en/hooks)]
  - Hooks can be "shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents". They fire "wherever it runs: sessions in the terminal, IDE extensions, the Desktop app, and cloud sessions."
  - Events include `PreToolUse`, `PermissionRequest` and `ConfigChange`.
  - HTTP hooks POST the event JSON and can return a block or deny decision. `onFailure: "block"` makes a hook fail closed.
- **OpenTelemetry** [OPENED [monitoring-usage](https://code.claude.com/docs/en/monitoring-usage)]
  - Admins set `OTEL_*` in managed settings. When managed settings set `OTEL_EXPORTER_OTLP_ENDPOINT`, "Claude Code removes every developer-set per-signal endpoint", which locks the destination.
  - Repo-level `.claude/settings.json` cannot turn telemetry on or redirect it.
  - Events include `claude_code.tool_decision`, which carries `decision` accept/reject, `source` (config, enterprise managed policy and others), `tool_source` (builtin or mcp), and a `tool_use_id` that matches hooks. Others are `tool_result`, `permission_mode_changed`, `mcp_server_connection`, `hook_execution_*` and `managed_settings_resolved`.
  - Content gates: `OTEL_LOG_TOOL_DETAILS` (Bash commands, MCP server and tool names, tool input) and `OTEL_LOG_TOOL_CONTENT`.
  - The page includes a "Send events to a SIEM" recipe "with full tool detail enabled for MCP and Bash auditing".
- **Self-hosted Claude apps gateway** [OPENED [claude-apps-gateway](https://code.claude.com/docs/en/claude-apps-gateway)]
  - "a self-hosted service that sits between your developers' Claude Code clients and your model provider"; "included in the `claude` binary" (`claude gateway --config gateway.yaml`).
  - IdP SSO, IdP groups mapped to model allowlists and managed-settings policies, and OTLP telemetry.
  - "audit events are single-line JSON with an `evt` field".
  - "You control where telemetry, audit logs, managed settings… go, and the gateway sends none of them to Anthropic."
  - admin-setup adds: "a self-hosted Claude apps gateway records a per-request audit log with IdP identity." [OPENED]
- **Compliance API: Claude Code transcripts** [OPENED [compliance-sessions](https://platform.claude.com/docs/en/manage-claude/compliance-sessions)]
  - Enterprise only. Local session endpoints `/v1/compliance/apps/sessions/local` are "stable for Cowork, Claude Code, and Claude for Microsoft 365", with `product_surface: claude_code`.
  - Transcripts are "the sequence of user prompts, assistant responses, and tool calls and [results]". Tool inputs and results are truncated to 10,000 bytes by default (about 1 MiB on request).
  - Retention is "6 years by default", or 30 days with HIPAA readiness.
  - **Exclusions:**
    - "Claude Code sessions authenticated with a Claude Console API key, or run through… Amazon Bedrock, Google Cloud, or Microsoft Foundry"
    - Claude Code cloud sessions and routines
    - ZDR sessions
    - Transcripts never include "thinking blocks or tool definitions"
  - "Local session transcripts show what Claude was asked to do and what it returned, **not what occurred on the device**." [OPENED [compliance-faq](https://platform.claude.com/docs/en/manage-claude/compliance-faq)]
- **Activity Feed and audit logs** [OPENED [activity feed](https://platform.claude.com/docs/en/manage-claude/compliance-activity-feed), [compliance-api](https://platform.claude.com/docs/en/manage-claude/compliance-api)]
  - The feed records authentication, chat, file, project, administrative and platform activity. Events are queryable within 1 minute and retained 6 years. It is "not retroactive" and records "resource events but not prompt or response text".
  - The separate "audit log export" CSV has "a capped lookback window, CSV download only, and no access to chat, file, or project content."
  - On Enterprise, GitHub App link and unlink events appear as Compliance activities. [OPENED admin-setup]
- **Inference hooks (server-side)** [OPENED [inference-hooks](https://platform.claude.com/docs/en/manage-claude/inference-hooks)]
  - Enterprise only. Anthropic POSTs the transcript to "your AI security server" for an allow or deny verdict. The `tool_call` event fires "before any of them runs" when "Validate tool calls" is on.
  - "One hook governs conversations across all Claude products… including… Claude Code… in the CLI". "Not available on Amazon Bedrock or Google Cloud."
  - Denials are recorded in the Activity Feed. Shadow mode is available. The Inference-hooks system stores only verdict metadata.
- **Tamper evidence**
  - The only Merkle or signed-checkpoint log is the **Access Transparency transparency log (beta)**. It verifies "that no Access Transparency event was removed or altered". It covers Anthropic-personnel access events, not customer agent actions, and is "not self-serve". [OPENED [access-transparency-log](https://platform.claude.com/docs/en/manage-claude/access-transparency-log)]
  - Security docs say cloud sessions have "Audit logging: All operations in cloud sessions are logged for compliance and audit purposes." [OPENED [security](https://code.claude.com/docs/en/security)]
- **Partner ecosystem.** In May 2026 Anthropic expanded Compliance API integrations to **28 partners**, including CrowdStrike, Okta, Wiz, Palo Alto, Netskope, Zscaler, SailPoint, Snyk, Microsoft Purview and Rubrik. Onyx and Zenity have Compliance API integrations. [SNIPPET: [Security Boulevard](https://securityboulevard.com/2026/05/anthropic-expands-claude-compliance-api-with-28-enterprise-security-integrations/), [Onyx](https://www.onyx.security/integrations/anthropic)]

**Cursor (all [SNIPPET]; cursor.com was blocked)**
- **Audit logs** are Enterprise-only and viewed in the team dashboard. Events cover repository management, cloud-agent environment changes, directory groups, privacy settings, team rules and commands, and MCP authentication.
  - Cursor "does not log agent responses or generated code" and recommends hooks to log prompts and code.
  - Streaming to SIEM, webhook or S3 requires contacting hi@cursor.com.
  - [Cursor docs: compliance-and-monitoring](https://cursor.com/docs/enterprise/compliance-and-monitoring)
- **Admin API retention.** It retains audit events for only the last 30 days. [Elastic integration](https://www.elastic.co/docs/reference/integrations/cursor)
- **MCP allowlist.** Set in the team dashboard ("MCP Configuration"); only matching servers run. `~/.cursor/permissions.json` can be distributed via MDM with `server:tool` syntax. Allowlisting does not push servers to users. [Cursor docs: model-and-integration-management](https://cursor.com/docs/enterprise/model-and-integration-management)
  - Forum reports describe precedence bugs, and say local `approvalMode: "unrestricted"` bypasses the team list. [forum](https://forum.cursor.com/t/mcp-allowlist-entries-are-written-but-never-matched-every-mcp-call-re-prompts/169566)
- **Hooks** (`beforeSubmitPrompt`, `beforeShellCommand`, `beforeMCPExecution`) are described in Cursor's enterprise blog. [cursor.com/blog/enterprise](https://cursor.com/de/blog/enterprise), [MintMCP](https://www.mintmcp.com/blog/mcp-governance-cursor-hooks)
- **Self-hosted cloud agents** keep code and tool execution in the customer network. [Wiz comparison](https://www.wiz.io/academy/ai-security/claude-code-vs-cursor)

**OpenAI Codex**
- The Codex open-source repo documents an admin-only `requirements.toml` with `allow_managed_hooks_only = true`, which ignores user, project and session hooks. [OPENED [openai/codex docs/config.md](https://raw.githubusercontent.com/openai/codex/main/docs/config.md)]
- **Codex governance page:** Dashboard, Analytics API and **Compliance API** ("export detailed activity logs for audit, monitoring, and investigations"). Exports include prompt text, responses, workspace/user/timestamp/model and token usage. ChatGPT-authenticated Codex logs are "retained for up to 30 days". "API-key-authenticated usage… is not included in Compliance API exports." [SNIPPET: [developers.openai.com/codex/enterprise/governance](https://developers.openai.com/codex/enterprise/governance)]
- **"Running Codex safely":** OTel log export for "user prompts, tool approval decisions, tool execution results, MCP server usage, and network proxy allow or deny events". Codex activity logs are also in the OpenAI Compliance Platform for Enterprise and Edu. [SNIPPET: [openai.com](https://openai.com/index/running-codex-safely/)]
- **Compliance Logs Platform** offers "immutable, time-windowed JSONL log files". Elastic lists Codex tool calls among its exportable categories. [SNIPPET: [OpenAI](https://openai.com/index/new-tools-for-chatgpt-enterprise), [Elastic](https://www.elastic.co/docs/reference/integrations/openai_chatgpt_enterprise)]
- **Conflict:** an earlier session's note said "OpenAI says individual agent actions do not appear in its compliance logs". That was likely about ChatGPT agent or connectors. For Codex, the current sources say tool calls are exported. Treat as **Corrected for Codex**, and unverified for ChatGPT agent mode.

### Inferences
- **Claude-only shops.** For an organization standardized on Claude Enterprise, the native stack already provides policy, MCP allowlists, approvals (ask rules plus PermissionRequest/HTTP hooks), server-side tool-call veto, SIEM-ready OTel, 6-year transcripts and an on-prem gateway. A startup selling only "audit + policy for Claude Code" competes with free built-ins plus 28 integrated security partners.
- **The remaining room is structural:**
  - (a) **Cross-vendor** normalization (Claude + Cursor + Codex + Copilot + in-house MCP agents) under one policy and one evidence store.
  - (b) **Coverage of the paths Anthropic excludes:** Bedrock, Vertex, Foundry and Console-key Claude Code, cloud sessions, and ZDR orgs. This matters for regulated, on-prem-leaning buyers who often use Bedrock.
  - (c) **On-device ground truth** (what actually executed) correlated with model-side transcripts.
  - (d) **Customer-verifiable tamper evidence:** hash chains, signed checkpoints and WORM export. No vendor documents this for agent actions; Anthropic offers it only for Access Transparency.
  - (e) **Cursor's weak audit:** admin events only, 30 days, no agent content.

### Gaps
- Cursor and OpenAI pages could not be opened; all their facts are [SNIPPET].
- I did not open Claude Code's `permissions` and `server-managed-settings` pages in detail beyond grep. Claims about the `ask` rule and approval dialogs rest on admin-setup and hooks.
- I did not check GitHub Copilot's native governance.

---

## Q4. Incumbent built-ins: Okta, Microsoft Agent 365, AWS AgentCore, Google, SailPoint

### Takeaway
- **Okta Agent SSO:** GA on Aug 24, 2026, "included in core Okta SSO plans at no additional cost" (Confirmed via snippet).
- **Microsoft Agent 365:** GA on May 1, 2026, at $15/user/month or in E7 (Confirmed, [OPENED]). Claude Code discovery was only announced as "expanding soon" and is still **preview** in later sources, so "Agent 365 discovers Claude Code" is **Corrected to preview, not GA**.
- **AWS AgentCore Policy:** GA on March 3, 2026 (Confirmed via snippet). AgentCore Identity and Gateway have been GA since Oct 13, 2025.
- **Google:** Agent Identity and Agent Gateway were reported GA on Jul 30, 2026 (secondary source only).
- **SailPoint:** Agentic Fabric GA on Aug 4, 2026 (snippet).

All of these govern agents inside their own ecosystems. None targets developer-endpoint coding-agent action audit, except Microsoft Defender in preview.

### Cited Findings
- **Okta.** The press release "Okta brings first-class identity to AI agents with Agent SSO" is dated August 24, 2026. It announces Agent SSO as **generally available**, bringing the open Cross App Access standard into core Okta SSO, "included in core Okta SSO plans at no additional cost". Okta for AI Agents covers discovery, onboarding, protection and governance, including agents that do not support XAA. The release cites a stat: only 34% of organizations apply the same controls to agents as to humans. [SNIPPET: [Okta press release](https://okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/), [SecurityBrief UK](https://securitybrief.co.uk/story/okta-launches-agent-sso-to-manage-enterprise-ai-agent-access)]
  - **Conflict:** an Auth0 docs page labels XAA for the *Resource App* as Early Access, on Enterprise, B2B Pro and B2B Essential plans. That is the Auth0 (CIAM) side, not Okta workforce SSO.
  - XAA was first announced Jun 23, 2025. [SNIPPET: [Okta JP release](https://www.okta.com/ja-jp/newsroom/press-releases/cross-app-access/)]
  - **Status: Confirmed (snippet-level).** The okta.com page could not be opened.
- **Microsoft Agent 365** [OPENED [Microsoft Security blog, 2026-05-01](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)]
  - "Microsoft Agent 365, now generally available… Now generally available for commercial customers."
  - Price: "Agent 365 is now available in Microsoft 365 E7 or standalone at USD15 per user per month. Each Agent 365 license covers an individual who manages or sponsors agents, or uses agents to do work on their behalf." (**Confirmed**)
  - On Claude Code: "Users are installing agents like OpenClaw and Claude Code on their devices…"; "discover and manage local AI agents running on Windows devices, **starting with OpenClaw agents and expanding soon to other widely used agents like GitHub Copilot CLI and Claude Code**." Discovery is listed under "Public Preview".
  - "Context mapping capabilities, policy-based controls, plus runtime blocking and alerts will be available in Agent 365 through Intune and Defender **public preview in June 2026**."
  - Defender will "block coding agents in runtime".
  - Registry sync with AWS Bedrock and Google Cloud is in public preview.
  - Entra network controls for local agents are GA.
  - **Status: Corrected.** Claude Code discovery was not GA at launch. Later sources say Defender discovery now lists Claude Code, Cursor and Codex CLI on Windows and macOS, still **in preview**. [SNIPPET: [MS Learn support matrix](https://learn.microsoft.com/defender-endpoint/ai-agent-support-matrix), [eWeek](https://www.eweek.com/news/microsoft-defender-shadow-ai/)]
  - A secondary analysis claims "discovery for 60 local AI agent types on October 19, 2026", and notes that a listing in Defender does not mean runtime protection applies. It is single-source and unverified. [SNIPPET: [generalanalysis](https://generalanalysis.com/guides/microsoft-defender-local-agent-coverage)]
- **AWS**
  - AgentCore Policy is **GA, March 3, 2026**. It runs outside agent code. Policies live in a policy engine attached to an AgentCore Gateway, which "intercepts agent-to-tool traffic and checks each request against the policies before allowing or denying". Rules can be written in natural language and converted to Cedar. Modes are enforce or log-only. It launched in 13 regions. [SNIPPET: [AWS What's New (pt/de/jp versions)](https://aws.amazon.com/pt/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/), [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-bedrock-agentcore-adds-quality-evaluations-and-policy-controls-for-deploying-trusted-ai-agents/)]
  - On June 17, 2026, Bedrock Guardrails became usable inside AgentCore policies. [SNIPPET: [AWS JP](https://aws.amazon.com/jp/about-aws/whats-new/2026/06/amazon-bedrock-agentcore-policy-guardrails-generally-available/)]
  - **AgentCore (incl. Identity and Gateway) GA: Oct 13, 2025.**
    - Identity gained identity-aware authorization and a refresh-token vault.
    - Gateway connects to existing MCP servers and offers IAM authorization alongside OAuth.
    - [SNIPPET: [AWS What's New 2025-10](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-available)]
  - **Status: Confirmed (snippet).**
- **Google**
  - Gemini Enterprise Agent Platform (the Vertex AI successor) was announced Apr 22, 2026 at Next '26. Agent Identity gives each agent a unique cryptographic ID.
  - Agent Gateway "uses agent identities as the principal for authorization decisions"; Agent Runtime and Gemini Enterprise route traffic through it.
  - Model Armor on Agent Gateway is GA as of June 2026.
  - IT Brief (Jul 30, 2026) lists Agent Identity, Agent Gateway, Agent Registry and Agent Observability as newly GA.
  - [SNIPPET: [Google docs Agent Gateway overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/gateways/agent-gateway-overview), [IT Brief](https://itbrief.com.au/story/google-cloud-expands-gemini-enterprise-agent-controls), [Infosecurity](https://infosecurity-magazine.com/news/google-ai-agent-identities-gemini)]
  - The cloud.google.com product page I opened had no governance detail. [OPENED](https://cloud.google.com/products/gemini-enterprise-agent-platform)
  - **Status: GA dates Unverified** (secondary source only).
- **SailPoint.** An August 4, 2026 release says "SailPoint Agentic Fabric, now generally available", combined with Human Fabric into SailPoint Identity Security, sold standalone or in the Agentic Business and Agentic Business Plus suites. A separate undated item mentions GA of "SailPoint Agent Identity Security (AIS)". The naming relationship is unclear. SailPoint is also a Claude Compliance API partner. [SNIPPET: [IT Brief UK](https://itbrief.co.uk/story/sailpoint-launches-unified-identity-security-for-ai-agents), [investor PDF](https://investor.sailpoint.com/node/8171/pdf)] **Status: Partially confirmed (snippet).**

### Inferences
- **Identity and token brokering:** commoditized and free (Okta).
- **Gateway policy for agents built on a hyperscaler:** GA and bundled (AWS, Google).
- **Endpoint discovery of coding agents:** Microsoft is moving in, still in preview, Windows/macOS, and requires Defender P2/E7 licensing. That threatens any "discover Claude Code/Cursor on laptops" pitch for Microsoft-standardized buyers.
- **What no incumbent offers:** a neutral, per-action, tamper-evident evidence record spanning Claude Code, Cursor and Codex, deployable fully on-prem.

### Gaps
- No primary Okta, AWS, Google or SailPoint page could be opened (403).
- Per-call pricing for AgentCore Policy and Google Agent Gateway was not retrieved.
- Microsoft Defender's licensing for local-agent discovery (P2 vs E7) is not confirmed from Microsoft text.

---

## Q5. Funding facts: Zenity, Onyx, Arcade.dev, Keycard

### Takeaway
All four figures are **Confirmed at snippet level by multiple independent outlets**: Zenity $125M Series C (Aug 2026), Onyx $113M Series B (late Jul 2026), Arcade.dev $60M Series A (Jun 2026) and Keycard $38M combined seed + A (Oct 2025). No primary press release or Crunchbase page could be opened. Crunchbase News's 2026 posts did not cover any of these rounds.

### Cited Findings
- **Zenity: $125M Series C.** Led by Norwest. New investors: Qumra, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures. Existing investors: Vertex, Third Point, DTCP and Intel Capital. Total raised is about $180M. The product analyzes agent intent and can allow, modify or block actions. Dates come from URLs: Foley 2026/08 and fintech.global 2026-08-04. **Status: Confirmed (Aug 2026).** [SNIPPET: [SecurityWeek](https://www.securityweek.com/zenity-raises-125-million-in-series-c-funding/amp/), [Foley](https://www.foley.com/news/2026/08/foley-represents-lg-ventures-as-investor-in-125m-series-c-for-zenity/), [Fenwick](https://www.fenwick.com/insights/experience/fenwick-represents-zenity-125m-series-c-funding)]
- **Onyx Security: $113M Series B.**
  - Investors: led by Bessemer, with Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared.
  - Totals: $153M raised; about $640M valuation, reported but not disclosed by the company.
  - Timing: about four months after a $40M stealth launch. The fintech.global URL is dated 2026-07-30.
  - Product: sets permissions, monitors agent activity and flags risks; also has an Anthropic Compliance API integration.
  - **Status: Confirmed (late Jul 2026).** [SNIPPET: [SecurityWeek](https://www.securityweek.com/onyx-security-raises-113-million-to-control-ai-agents-in-the-enterprise/), [Globes](https://en.globes.co.il/en/article-1001550885), [Calcalist](https://calcalistech.com/ctechnews/article/b1fsjydszg)]
- **Arcade.dev: $60M Series A.** Led by SYN Ventures, with Morgan Stanley and Wipro participating. It is positioned as the "secure action layer" or agent authorization for production agents. Dates: Jun 12, 2026 (API Evangelist) and Jun 16, 2026 (Business Wire syndication). CEO Alex Salazar. **Status: Confirmed (Jun 2026).** Beware unrelated companies also called "Arcade" with $60M Series A rounds. [SNIPPET: [Fenwick](https://www.fenwick.com/insights/experience/fenwick-represents-arcade-60m-series-funding), [API Evangelist](https://blogs.apievangelist.com/blogs/arcade-2026-06-12-arcade-dev-raises-60m-series-a/)]
- **Keycard: $38M.** Made up of an $8M seed co-led by a16z and Boldstart, plus a $30M Series A led by Acrew. It emerged from stealth on Oct 21–22, 2025. Founders: Ian Livingstone (CEO), Matthew Creager and Jared Hanson. It contributes to MCP, WIMSE and OAuth agent extensions. **Status: Confirmed. Note this is 2025, not 2026.** [SNIPPET: [Help Net Security](https://www.helpnetsecurity.com/2025/10/22/keycard-ai-agents-identity-access-platform/), [fintech.global](https://fintech.global/2025/10/23/keycard-secures-38m-to-advance-ai-agent-security/), [Pulse 2.0](https://pulse2.com/keycard-launched-with-38-million-to-transform-identity-and-access-for-ai-agents)]
  - Crunchbase News (Jul 1, 2026) mentions Tapestry VC's "renewed focus around AI security with investments in Tracebit, Maze and Keycard". [OPENED via WP API](https://news.crunchbase.com/venture/80m-repeat-founders-fund-europe-na-tapestry/)

### Inferences
- The well-funded independents (Zenity, Onyx) are runtime "agent control" platforms that already ingest the Claude Compliance API and, for Zenity, coding-agent hooks. A new entrant would face $100M+ competitors on any horizontal "agent security platform" pitch.

### Gaps
- Exact announcement days for Zenity and Onyx come from article URLs, not the press releases.
- Crunchbase profiles (crunchbase.com) returned 403 at the root; www.crunchbase.com responded but I did not try profile pages.

---

## Q6. Conclusion: which gaps remain open for a coding-agent + MCP neutral audit/policy product, and which are covered?

### Takeaway
"Policy + allowlists + approvals + logging for Claude Code" is **covered**: natively by Anthropic, and by Endor, Zenity, Knostic, Lasso and Microsoft (preview). "MCP gateway with allow/approve/block" is **covered and even open-sourced** by 1-person YC companies (Executor under MIT, Clawvisor) and incumbents (AWS, Google, Prompt Security). The **genuinely open** space is narrower:
1. A customer-verifiable, **tamper-evident evidence ledger** for agent actions.
2. **Cross-vendor normalization** of Claude Code, Cursor, Codex and in-house MCP agents into one record and one policy.
3. **Coverage of the paths the vendors' own compliance tools exclude**, especially Claude Code on Bedrock/Vertex/Foundry and API-key Codex.
4. **On-device ground truth** correlated with model-side transcripts.
5. **Packaged on-prem or air-gapped** delivery for regulated buyers.

### Cited Findings
**Already covered (do not build as the core):**
- Org policy (allow/ask/deny), MCP allow/deny, hook lockdown and sandbox egress allowlists for Claude Code: native managed settings. [OPENED [admin-setup](https://code.claude.com/docs/en/admin-setup), [managed-mcp](https://code.claude.com/docs/en/managed-mcp)]
- Human approval inside Claude Code: ask rules, plus `PermissionRequest`/HTTP hooks that route decisions to an external service. [OPENED [hooks](https://code.claude.com/docs/en/hooks)]
- Server-side veto of Claude tool calls across surfaces (Enterprise): Inference hooks with "Validate tool calls". [OPENED [inference-hooks](https://platform.claude.com/docs/en/manage-claude/inference-hooks)]
- Claude Code transcripts with 6-year retention (Enterprise, claude.ai login): Compliance API. [OPENED [compliance-sessions](https://platform.claude.com/docs/en/manage-claude/compliance-sessions)]
- SIEM-bound tool events with an admin-locked destination: Claude Code OTel. [OPENED [monitoring-usage](https://code.claude.com/docs/en/monitoring-usage)]
- Self-hosted gateway with an IdP-attributed per-request audit log: Claude apps gateway. [OPENED [claude-apps-gateway](https://code.claude.com/docs/en/claude-apps-gateway)]
- Hook-based coding-agent governance across Claude Code, Cursor (plus Codex and Copilot per some docs), inventory and audit-only rollout: Endor, Zenity, Knostic, Lasso; Microsoft Defender (preview). [SNIPPET, see Q2]
- Laptop inventory of coding agents, MCP configs and skills: StepSecurity, Microsoft Defender (preview), Zenity. [SNIPPET, see Q2]
- MCP gateway with per-tool allow/approval/block: Executor (MIT, self-host), Clawvisor (self-host), Alter, Agentic Fabriq, AWS AgentCore Policy (GA), Google Agent Gateway, Prompt Security. [OPENED YC/README + SNIPPET]
- Agent identity and SSO: Okta Agent SSO (free in core SSO), Entra Agent ID / Agent 365 ($15/user), AgentCore Identity, Google Agent Identity. [OPENED MS + SNIPPET]

**Genuinely open or weakly covered:**
1. **Tamper-evident action evidence.** Anthropic's only Merkle/signed-checkpoint log covers Access Transparency, not agent actions, and is beta and not self-serve. [OPENED [access-transparency-log](https://platform.claude.com/docs/en/manage-claude/access-transparency-log)] OpenAI's Compliance Logs are "immutable… JSONL" files on OpenAI's side [SNIPPET], not customer-verifiable chains. No YC company or coding-agent vendor in Q1/Q2 documents hash-chained or signed per-action records.
2. **Coverage holes in vendor-native audit:**
   - Claude Code via Bedrock, Vertex or Foundry, Console API keys, cloud sessions and ZDR orgs are excluded from transcripts.
   - Inference hooks are "not available on Amazon Bedrock or Google Cloud".
   - Codex API-key usage is excluded from the Compliance API, and ChatGPT-authenticated Codex logs keep only 30 days.
   - Cursor audit logs cover admin events only (no agent responses or code), with 30-day Admin API retention.
   - [OPENED Anthropic docs; SNIPPET Cursor/OpenAI]
3. **Model-side versus device-side truth.** "Local session transcripts show what Claude was asked to do and what it returned, not what occurred on the device." [OPENED [compliance-faq](https://platform.claude.com/docs/en/manage-claude/compliance-faq)] Joining the hook/OTel record (what ran) with the vendor transcript (what was asked) by `tool_use_id` is possible, since Anthropic exposes `tool_use_id` in both OTel and hooks [OPENED]. No vendor markets this reconciliation as completeness proof.
4. **Cross-vendor single policy and evidence store.** Each native tool covers one vendor. Endor and Zenity are cross-vendor, but they sit inside AppSec or agent-security suites (cloud SaaS), and their hook coverage has documented holes (Cursor CLI/Cloud, Cowork). [SNIPPET]
5. **Neutral, packaged on-prem.** Native on-prem exists only for Claude (apps gateway). Prompt Security's on-prem version is now SentinelOne. YC self-hostable tools are developer-grade: Clawvisor is "experimental… not audited". [OPENED README]

### Inferences
- **Defensible wedge.** Collect from hooks, OTel and vendor compliance APIs, normalize per action, and seal the result into a customer-held, hash-chained or signed, WORM-exportable ledger. Add reconciliation ("these sessions or actions were not captured"), human approval routing for high-risk actions, and fully on-prem or air-gapped deployment. Pitch it as the **evidence layer** that complements, rather than replaces, Anthropic's controls and Endor's or Zenity's enforcement.
- **Do not lead with** identity, SSO, MCP gateway or basic allow/deny. These are free or bundled (Okta, AWS, Google, Anthropic) or open-sourced by 1-person YC teams.
- **Biggest risks:**
  - Anthropic extends tamper-evident logs from Access Transparency to activity or session records.
  - Zenity or Endor add signed ledgers.
  - Microsoft Defender's local-agent runtime protection reaches GA, which would cover Windows-centric buyers.

### Gaps
- No vendor documentation (Endor, Zenity, Knostic, Lasso) could be opened to rule out an existing signed or hash-chained audit feature. This "open gap" is an absence-of-evidence finding and should be checked with demos.
- GitHub Copilot coding agent and Windsurf native governance were not examined.
- No buyer-side evidence (RFPs, analyst text) was gathered here to confirm that tamper-evidence is a purchase driver rather than a nice-to-have.
