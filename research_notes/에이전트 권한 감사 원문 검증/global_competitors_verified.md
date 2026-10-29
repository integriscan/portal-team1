# Global Competitive Facts, Verified Against Original Sources: Neutral Audit and Policy Layer for AI Agents (coding agents and MCP), as of 2026-10-29

> **How these notes were made. Read this first.**
> - **Two passes.**
>   - **Pass 1:** only a few hosts were reachable (ycombinator.com, code.claude.com, platform.claude.com, microsoft.com, raw.githubusercontent.com, npm, pypi). Everything else returned HTTP 403 from the proxy.
>   - **Pass 2:** the coordinator opened the network fully. I then **re-opened the primary pages**: all six startup websites and their pricing and enterprise pages, Endor, Zenity, Knostic, Lasso, StepSecurity, Cursor docs, OpenAI Codex docs, Okta, AWS, Microsoft Learn, Google Cloud docs, SailPoint and SecurityWeek.
>   - Pages were fetched with curl, or rendered with Playwright/Chromium for JavaScript-heavy sites.
> - **Evidence tags.**
>   - **[OPENED]** means I read the original page myself.
>   - **[SNIPPET]** means the fact comes only from a search-result summary and could not be opened. Pages still blocked: fenwick.com (403), openai.com/index/running-codex-safely (403).
> - **Status labels used per item:** **Confirmed**, **Corrected** or **Unverified**.
> - **Biggest corrections versus earlier notes:**
>   1. Clawvisor is **Spring 2026 (P26)**, not S26.
>   2. **Agentic Fabriq has a dedicated "Coding Agents" product** for Claude Code, Cursor and Codex.
>   3. **Alter already sells a tamper-evident (append-only, content-hashed) audit trail with an on-prem option.**
>   4. Cursor now has self-serve audit-log streaming, OTel Export and MDM-enforced Enterprise hooks.
>   5. Microsoft Defender's discovery of Claude Code, Cursor and Codex on Windows is documented (macOS discovery and runtime protection are preview).
>   6. Prompt Security was acquired in **Aug 2025**, not 2026.

---

## Q1. Six YC companies in scope, plus other YC agent-auth, audit and MCP-security companies (2025–2026 batches)

### Takeaway
All six are real YC companies with 1–6 people. Five batches are confirmed; Clawvisor is corrected to Spring 2026. **Agentic Fabriq explicitly targets coding agents** (Claude Code, Cursor, Codex) through a credential broker. **Alter** offers **on-prem** deployment and an **append-only, hash-verified audit log**. **Clawvisor** (Elastic License 2.0) and **Executor** (MIT) are self-hostable for free. All six publish usage-based pricing, at **$0 to about $300/month** for self-serve tiers. Every element of the idea (identity, scoped permissions, human approval, audit, on-prem, even tamper evidence) is claimed by at least one of these tiny YC teams. What they cover is **brokered SaaS/API/MCP tool calls**, not local shell or file actions of coding agents.

### Cited Findings

| Company | Batch (status) | Team / founded | Exact product (from opened pages) | Target customer | Coding agents? | On-prem / self-host? | Pricing (opened) |
|---|---|---|---|---|---|---|---|
| **Agentic Fabriq** | Winter 2026 (**Confirmed**) | 2 / 2025 (Paulina and Matthew Xu, MIT dropouts) | YC: "identity, scoped permissions, approval flows, and audit logs" [OPENED [YC](https://www.ycombinator.com/companies/agentic-fabriq)]. Site: "Every agent needs an identity… see every action it takes"; effective access = "agent grants ∩ user permissions"; policies "Enforced at the tool boundary"; "100% of actions logged & audited" [OPENED [site](https://www.agenticfabriq.com)]. Audit page: "A record the agent does not write itself", logging allowed, blocked and refused events [OPENED [audit-trail](https://www.agenticfabriq.com/product/audit-trail)]. A **Shadow AI** product joins your egress logs (CSV/TSV/JSON, ±30 s) against Fabriq records to flag ungoverned AI callers [OPENED [shadow-ai](https://www.agenticfabriq.com/product/shadow-ai)] | Internal agents for employees, plus SaaS products embedding agents | **Yes (Corrected).** "Govern coding agents on developer machines: Claude Code, Cursor, and Codex… brokered, revocable access instead of raw keys". Admins enable each coding agent per org; live sessions are attributed to the developer; there is an org kill switch; "Every call on the same audit trail" [OPENED [coding-agents](https://www.agenticfabriq.com/product/coding-agents)]. Scope is tool calls through the broker (GitHub and similar), not local shell or file ops | Not stated. The enterprise plan lists a "Dedicated realm" (**Unverified** for on-prem) | Free: 20,000 calls/mo. Launch: $50/mo for 200,000. Growth: $300/mo for 2,000,000. Extra calls $2 per 10,000 [OPENED [pricing](https://www.agenticfabriq.com/pricing)] |
| **Multifactor** | Fall 2025 (**Confirmed**) | 6 / 2025 (Vivek Nair; co-founder Colin Roberts per press) | YC: "Zero-trust authentication, authorization, and auditing for AI agents" [OPENED [YC](https://www.ycombinator.com/companies/multifactor)]. Site: share online accounts with humans and AI agents by link; fine-grained permissions ("read transactions" but not "make transfers"). **"Detailed Event History… paired with a digital signature that provides non-repudiable cryptographic proof."** Its "Multi" agent (early access) runs in an isolated cloud browser, and users "approve or deny the request" for new actions [OPENED [site](https://multifactor.com)] | Consumers and teams sharing web accounts; enterprises | No | Not stated | Consumer free; Enterprise custom ("Advanced auditing and compliance… Cloud RBAC and SSO") [OPENED site]. $15M seed (Dec 2025, Nexus) [SNIPPET [idtechwire](https://idtechwire.com/multifactor-raises-15-million-dollar-seed-round-to-secure-online-accounts-for-humans-and-ai-agents/)] |
| **Alter** | Summer 2025 (**Confirmed**) | 2 / 2025 (Srikar Dandamuraju, Kevan Dodhia) | YC: "Privileged Access Management for AI Agents… parameter level… fully audited" [OPENED [YC](https://www.ycombinator.com/companies/alter)]. Site: deny-by-default policy "to the parameter"; per-agent identity; credential vault; human-in-the-loop holds (example: "Refunds over $200 need approval… Approved by J. Lee"); "A **tamper-evident trail** with a name attached to every call"; "Logged and streamed to SIEM" [OPENED [site](https://alterauth.com)]. Enterprise FAQ: "Audit rows are **append-only, blocked from updates at the database layer, and carry content hashes that an integrity check verifies**"; legal hold; SIEM streaming over OCSF or Splunk; a policy simulator; "A SOC 2 audit is in progress"; no SAML SSO for the operator portal yet [OPENED [enterprise](https://alterauth.com/enterprise)] | Teams putting agents on third-party APIs (Stripe, GitHub, Slack and others); regulated enterprises | Not as governed agents. Onboarding uses `claude mcp add … mcp.alterauth.com/mcp` (a docs MCP) [OPENED site] | **Yes (Confirmed):** "Either in Alter's managed cloud or on-premises in your own environment" [OPENED enterprise] | Free: 10K calls/mo, 30-day audit retention. Starter: $50/mo, 100K calls, unlimited retention. Growth: $250/mo, 1M calls. Overage $0.50 per 1K. Enterprise custom ("Custom deployments & networking") [OPENED [pricing](https://alterauth.com/pricing)] |
| **Clawvisor** | **Corrected: Spring 2026 (P26)**. The YC page says "Spring 2026"; the founder bio says "(P26)" | 1 / 2026 (Eric Levine, Berbix co-founder, ex-YC Visiting Group Partner) | "The Authorization Layer for AI Agents… You approve tasks once" [OPENED [YC](https://www.ycombinator.com/companies/clawvisor)]. Site: task-bound access "revoked when done"; "Every request, every purpose declaration, every decision, every credential injection"; risk scoring for prompt injection in tool arguments [OPENED [site](https://clawvisor.com)]. README: approvals via dashboard, Telegram or push; a "Gateway log — searchable audit trail"; warns "experimental… has not been audited for security" [OPENED [README](https://raw.githubusercontent.com/clawvisor/clawvisor/main/README.md)] | Individuals and teams whose agents touch email, calendar, code hosting and SaaS | **Partial.** `connect-agent claude-code` installs a skill; it governs API calls such as "opening a pull request", not shell or file actions [OPENED README, pricing] | **Yes.** "The gateway source is public under the **Elastic License 2.0**, with no seat caps and no call limits." Self-hosting must run on a separate host from the agent [OPENED [pricing](https://clawvisor.com/pricing), [self-host](https://clawvisor.com/self-host)] | Free: $0, 1,000 protected calls/mo. **Pro: $120/mo** billed annually ($150 monthly), 20,000 calls, extended log retention. Packs: $0.025/call (2,000 calls = $50). Teams: quote [OPENED pricing] |
| **Executor** | Summer 2026 (**Confirmed**) | 1 / 2026 (Rhys Sullivan, ex-Vercel/Microsoft) | "The open source tool gateway"; an MCP gateway [OPENED [YC](https://www.ycombinator.com/companies/executor)]. README: integrations cover MCP, OpenAPI and GraphQL; "Each tool is allowed, gated behind approval, or blocked"; MIT license [OPENED [README](https://raw.githubusercontent.com/UsefulSoftwareCo/executor/main/README.md)] | Developers and teams wiring many agents to many tools | **Yes, as an MCP client hub.** Claude Code, Cursor, Codex and Hermes testimonials; "Expose credentials to Claude Code" [OPENED [site](https://executor.sh)] | **Yes.** Local CLI or desktop, Docker, Cloudflare; Enterprise includes "Self-hosted or dedicated cloud deployment support" [OPENED [pricing](https://executor.sh/pricing)] | Free for up to 3 members. **Team: $15/member/month.** Enterprise custom: SSO/SAML/SCIM and "**Audit logs for every tool call**" [OPENED pricing] |
| **Armorer Labs** | Fall 2026 (**Confirmed**) | 2 / 2026 (Daniel Begimher and Cristian Leo, both ex-AWS) | YC: assesses, simulates attacks and writes verified fixes; in production "allows, holds or denies the action" [OPENED [YC](https://www.ycombinator.com/companies/armorer-labs)]. Site: Detect, Assess, Fix ("Your engineers approve it"), Protect. "Armorer Guard… checks every action and blocks the unsafe ones. Available now"; "UNDER 2 MS CPU-BASED GUARDRAIL" [OPENED [site](https://armorerlabs.com)]. Blog (Oct 20, 2026): "How to get an AI agent approved: 12 questions reviewers ask"; "Bring evidence… sample action records" [OPENED [blog](https://armorerlabs.com/blog/ai-agent-governance-approval)]. PyPI `armorer` 0.1.14 under MIT [OPENED [pypi](https://pypi.org/pypi/armorer/json)] | Regulated industries (banks, insurers, hospitals, law firms) building **their own** agents | Not stated | Open-source components exist; no on-prem SKU stated | Not published ("Book a meeting") [OPENED] |

**Other YC 2025–2026 companies in agent control, audit or approval.** These come from YC industry pages [OPENED]: security, identity, cybersecurity, devsecops, developer-tools (11 pages), infrastructure (6), ai-assistant (3); about 923 companies.
- **Golf (P25, team 1)**: "visibility into shadow AI and control over AI agents and MCP… enforce policies, and generate audit trails." [YC](https://www.ycombinator.com/companies/golf)
- **Stacktrace (F26, team 3)**: "sees every action, detects risky behavior, enforces the bounds your team sets." [YC](https://www.ycombinator.com/companies/stacktrace)
- **Traceforce (S26, team 2)**: "CrowdStrike for AI Agents". Gives visibility into AI app use on company devices and prevents unsafe actions. [YC](https://www.ycombinator.com/companies/traceforce)
- **Decawork (S26)**: company-specific models "that approve AI actions" in real time. [YC](https://www.ycombinator.com/companies/decawork)
- **Salus (W26)**: runtime action validation API. [YC](https://www.ycombinator.com/companies/salus)
- **ContextFort (S25)**: browser-agent action recording and controls. [YC](https://www.ycombinator.com/companies/contextfort)
- **GrayPass (F26)**: allow/challenge/hold/deny decisions with "short-lived, signed proof tied to the exact action", including when an AI agent acts for a user. [YC](https://www.ycombinator.com/companies/graypass)
- **Codag (S26)**: "AI gateway for… permissioned agents". [YC](https://www.ycombinator.com/companies/codag)
- **truthsystems (S25)**: governance agents that block non-compliant actions. [YC](https://www.ycombinator.com/companies/truthsystems)
- **Omnara (S25)**: open-source, self-hostable control plane for managed agents. [YC](https://www.ycombinator.com/companies/omnara)
- **Pangolin (S25)**: open networking and security for the workforce, AI agents and infra. [YC](https://www.ycombinator.com/companies/pangolin)
- **Agent Relay (F26)**: messaging between Claude Code, Codex and Cursor agents with shared, searchable history; self-hostable. [YC](https://www.ycombinator.com/companies/agent-relay)

### Inferences
- **Not differentiators by themselves.** "Agent identity + scoped permission + human approval + audit + on-prem" is claimed by Alter (with on-prem and hash-verified append-only logs) and by Agentic Fabriq (with a coding-agent broker). Self-hosting is free in Clawvisor (ELv2) and Executor (MIT).
- **YC price anchors:** $50–$300/month on usage tiers (Alter, Agentic Fabriq), $15/member/month (Executor), $120/month (Clawvisor).
- **What none of the six claims:** governance of **local coding-agent actions** (shell commands, file edits, package installs, git push) through Claude Code, Cursor or Codex hooks or OTel. All six sit in the request path of **brokered tool/API calls**.

### Gaps
- I did not use YC directory search (Algolia). The industry-page scan may miss companies tagged only "AI" or "B2B".
- Alter's on-prem packaging (Kubernetes or air-gapped) and the integrity-check mechanism (per-row hash or chain? externally anchored?) are not documented beyond the FAQ.
- Agentic Fabriq's on-prem availability is unknown.

---

## Q2. Coding-agent governance competitors: what do they cover?

### Takeaway
Hook-based governance of coding agents is an **established, multi-vendor category**. I confirmed it from primary pages for:
- **Endor Labs** (Cursor, Claude Code, Codex, GitHub Copilot)
- **Zenity** (Codex, Claude Code/Cowork/Chat, Cursor, Copilot, via native hooks plus OTel and an MCP gateway)
- **Lasso** (Claude Code, Cursor, Codex, OpenCode)
- **Knostic Kirin** (free tier; $15/user/month tier includes audit logs)
- **StepSecurity** (fleet inventory of coding tools, plugins and MCP servers)
- **Microsoft Defender for Endpoint** (discovery of Claude Code, Cursor and Codex; runtime protection via Claude Code and Copilot hooks, in preview)

### Cited Findings
- **Endor Labs: "AI Coding Agent Governance".** Post dated May 12, 2026, updated Oct 12, 2026. Hooks give "a deterministic, auditable, out-of-band layer". "Centralized audit. Every PreToolUse, every shell exec, every file read can stream to a SIEM." [OPENED [Endor post](https://www.endorlabs.com/learn/introducing-agent-governance-using-hooks-to-bring-visibility-to-ai-coding-agents)]
  - A companion launch with Package Firewall on AURI was made "in collaboration with Cursor and Google". It blocks `rm -rf`, `sudo` and reverse shells; alerts on `git push` and `npm publish`; blocks `.env`, `.pem` and `.ssh/` access; and controls skills. "The Hooks integration we shipped in December in partnership with Cursor was the first step." [OPENED [Endor blog](https://www.endorlabs.com/blog/introducing-security-for-ai-coding-agents-and-workstations)]
  - Docs: "Install hooks for **Cursor, Claude Code, Codex, and GitHub Copilot**" with MDM deployment. It discovers other AI tools "but does not govern them". Claude Cowork is "Not supported while claude-code issue #40495 is open… Cowork sessions are neither monitored nor governed." [OPENED [Endor docs](https://docs.endorlabs.com/agent-governance)]
  - Pricing and on-prem: not found. **Status: Confirmed.** Codex and Copilot support is confirmed by the docs.
- **Zenity.**
  - Jan 28, 2026: "Zenity now protects… Cursor, Claude Code, and GitHub Copilot – from build time to runtime". It enforces approved MCP servers, blocks dangerous runtime MCP invocations and redacts secrets, with Detect mode first and Prevent mode after. [OPENED [Zenity blog](https://zenity.io/blog/product/from-ide-to-cli-securing-agentic-coding-assistants)]
  - Device page: "Continuous security for ChatGPT Codex, Claude Enterprise (Chat, Cowork, and Code), Cursor, and GitHub Copilot… through native hooks and OpenTelemetry… Through native agent hooks and the Zenity MCP gateway, it can block or mo[dify]… unified visibility, audit trails, and enforcement." [OPENED [Zenity device-based](https://www.zenity.io/use-cases/agent-type/device-based)]
  - **Status: Confirmed.**
- **Lasso.** "Claude Code, Cursor, and Codex… Lasso monitors the entire lifecycle"; "Lasso connects directly to Claude Code's lifecycle hooks via the enterprise management platform"; "Compliance-Ready Audit Trail"; also covers OpenCode; "Lasso inspects every tool call before it is executed." [OPENED [Lasso](https://www.lasso.security/use-cases/ai-coding-assistants)] **Status: Confirmed.**
- **Knostic Kirin.** A demo shows Claude Code `npm install` "Blocked… Action blocked by Kirin". It detects and blocks unsafe MCP servers, extensions and plugins, with "Compliance and audit support with detailed logs and reports". [OPENED [Kirin](https://www.knostic.ai/ai-coding-security-solution-kirin)] Pricing: Free $0/month (scanning, configuration enforcement, MCP scanning); **$15/month per user** adds "Audit logs" and "Cross-org MCP, rules, hooks visibility". [OPENED [pricing](https://www.knostic.ai/pricing)] **Status: Confirmed.**
- **StepSecurity Dev Machine Guard.** Fleet inventory of "coding tools, the extensions installed into them, the plugins added to AI agents, the MCP servers… and the skills". This includes "Claude Code and Codex plugins… and the skills, commands, and MCP servers it brings". The navigation includes "Audit Log". This is inventory and posture, not inline blocking. [OPENED [StepSecurity docs](https://docs.stepsecurity.io/developer-machines/ai-agents)] **Status: Confirmed.**
- **Prompt Security (SentinelOne).** **Corrected date:** the acquisition was announced **Aug 5, 2025**. The release says "secure and control employee usage of AI… ChatGPT, Gemini, Claude, Cursor"; it offers "MCP gateway security between AI applications and more than 13,000 known MCP servers" and coverage of "self-hosted or on-prem models". [OPENED [Business Wire via silicon.co.uk](https://www.silicon.co.uk/press-release/sentinelone-to-acquire-prompt-security-to-advance-genai-security-and-agent-security-strategy)] The $300/developer MSRP comes from an SHI listing. [SNIPPET](https://www.publicsector.shidirect.com/product/50907997/PROMPT-SEC.-AI-CODE-ASSISTANT-A1-PER-DEVELOPER)
- **Microsoft Defender for Endpoint.** The AI agent support matrix (last updated **2026-10-09**) separates discovery from runtime protection. [OPENED [MS Learn matrix](https://learn.microsoft.com/defender-endpoint/ai-agent-support-matrix)]
  - **Discovery tables:** the Windows table lists Claude Code, Claude Desktop, Cursor, Codex CLI, Codex Desktop, the Codex Extension, GitHub Copilot CLI, Antigravity and others, with no preview label on Windows. macOS is "(preview)" and WSL is "(preview)".
  - **Runtime protection (Windows, preview):** "Agent-native event inspection" lists Claude Code, GitHub Copilot CLI, the GitHub Copilot app, Claude Desktop (Code), the VS Code Copilot extension and the VS Code Claude Code extension, using each vendor's hooks. "Network inspection" covers OpenClaw, Ollama and ChatGPT. **Cursor and Codex are not listed for runtime protection.**
  - The overview says discovery "is activity based", "isn't a complete inventory", and "Local AI agent discovery on macOS is in preview". [OPENED [MS Learn overview](https://learn.microsoft.com/defender-endpoint/local-agent-discovery-overview)]
- **Socket and Pillar.** No coding-agent governance product was found (search only). [SNIPPET]

### Inferences
- "Hooks → allow/deny/escalate → SIEM" for Claude Code, Cursor, Codex and Copilot is sold by Endor, Zenity, Lasso and Knostic, and Microsoft is entering. Knostic anchors price at **$15/user/month** for audit logs.
- **Coverage holes are documented by the vendors themselves:**
  - Cowork is ungovernable via hooks (claude-code issue #40495, per Endor).
  - Cursor and Codex have no Defender runtime protection.
  - Cursor cloud agents skip some hooks (see Q3).
  - A product that **measures and proves coverage completeness** would address a real pain point.
- **Tamper evidence:** none of these coding-agent vendors' pages claims tamper-evident or hash-chained records. Alter (Q1) does, but for API proxy calls.

### Gaps
- Endor, Zenity and Lasso pricing and on-prem availability are not published.
- I did not check whether any of their audit stores is append-only or signed.

---

## Q3. What the agent vendors ship natively: Anthropic (Claude Code), Cursor, OpenAI Codex

### Takeaway
- **Anthropic** ships policy, MCP allowlists, approvals via hooks, a server-side tool-call veto, admin-locked OTel, 6-year Claude Code transcripts in the Compliance API, and a self-hosted gateway with a per-request audit log. The remaining holes are transcript exclusions (Bedrock, Vertex, Foundry, Console keys, cloud sessions, ZDR), the stated limit that transcripts are "not what occurred on the device", and the absence of customer-verifiable tamper evidence for agent actions. Anthropic's Merkle log covers only Access Transparency.
- **Cursor** (Enterprise) has admin and security audit logs with **self-serve streaming** (Splunk, Sumo, webhook, S3), **OTel Export** of tool-call metrics and hook logs, MDM-enforced **Enterprise hooks** where deny wins, and an MCP allowlist. Its audit logs exclude prompts and code, and OTel export requires a **public-internet collector**.
- **OpenAI Codex** has Compliance API records (`conversation_message`, `codex_log`), separate local OTel events, a policy API and an "Agent Security UI", and admin MCP hooks on the cloud coordinator. OpenAI states these "do not establish a complete record of every local command, file operation… approval, or external action."

### Cited Findings

**Anthropic / Claude Code** (all [OPENED]; unchanged from pass 1)
- **Managed settings**
  - "Claude Code enforces organization policy through managed settings that take precedence over local developer configuration."
  - Sources: server-managed (admin console or a self-hosted Claude apps gateway), plist/HKLM, `managed-settings.json`, and HKCU, which is "not an enforcement channel".
  - Allow and deny arrays merge, "so developers can extend managed lists but not remove from them."
  - Controls include `permissions.allow/deny`, `allowManagedPermissionRulesOnly`, `disableBypassPermissionsMode`, the sandbox network allowlist, MCP `allowedMcpServers/deniedMcpServers/allowManagedMcpServersOnly/managed-mcp.json`, `allowManagedHooksOnly`, `allowedHttpHookUrls`, `allowedProviders` and `processWrapper`.
  - [admin-setup](https://code.claude.com/docs/en/admin-setup), [managed-mcp](https://code.claude.com/docs/en/managed-mcp)
- **Hooks** can be "shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents" and fire in the terminal, IDE, Desktop and cloud sessions. `PreToolUse`, `PermissionRequest` and `ConfigChange` are available; `onFailure: "block"` makes them fail closed. [hooks](https://code.claude.com/docs/en/hooks)
- **OTel**
  - Managed `OTEL_EXPORTER_OTLP_ENDPOINT` "removes every developer-set per-signal endpoint". Repos cannot enable or redirect telemetry.
  - The `claude_code.tool_decision` event carries `decision`, `source` (incl. enterprise managed policy), `tool_source` (builtin or mcp) and `tool_use_id` (which matches hooks).
  - `OTEL_LOG_TOOL_DETAILS` logs Bash commands and MCP tool input. There is a SIEM recipe.
  - [monitoring-usage](https://code.claude.com/docs/en/monitoring-usage)
- **Claude apps gateway**: "self-hosted… included in the `claude` binary"; IdP-group policies; "audit events are single-line JSON"; "records a per-request audit log with IdP identity"; it sends nothing to Anthropic. [claude-apps-gateway](https://code.claude.com/docs/en/claude-apps-gateway)
- **Compliance API: session transcripts**
  - Enterprise only. Stable for Cowork, **Claude Code** and M365. Includes prompts, responses, tool calls and results (10 KB per item by default). Retention is 6 years.
  - Excludes "Claude Code sessions authenticated with a Claude Console API key, or run through… Amazon Bedrock, Google Cloud, or Microsoft Foundry", cloud sessions and routines, and ZDR sessions.
  - "show what Claude was asked to do and what it returned, not what occurred on the device."
  - [compliance-sessions](https://platform.claude.com/docs/en/manage-claude/compliance-sessions), [compliance-faq](https://platform.claude.com/docs/en/manage-claude/compliance-faq)
- **Activity Feed**: 6-year retention, "not retroactive", no prompt text. The CSV audit export has "a capped lookback window". [activity-feed](https://platform.claude.com/docs/en/manage-claude/compliance-activity-feed), [compliance-api](https://platform.claude.com/docs/en/manage-claude/compliance-api)
- **Inference hooks** (Enterprise): server-side allow or deny on prompts, plus `tool_call` "before any of them runs". The hook governs "Claude Code… in the CLI" and is "not available on Amazon Bedrock or Google Cloud". [inference-hooks](https://platform.claude.com/docs/en/manage-claude/inference-hooks)
- **Merkle/signed-checkpoint transparency log**: covers Access Transparency events only; beta; not self-serve. [access-transparency-log](https://platform.claude.com/docs/en/manage-claude/access-transparency-log)

**Cursor** (**Corrected**: now [OPENED])
- **Audit logs** "record who changed what in your team and organization: sign-ins, membership, roles, API keys, settings, integrations, Cloud Agent environments, Grok Bot configuration, and Origin repositories". They do **not** include "Agent responses, prompts, and generated code. Use hooks to log development activity."
  - Viewing requires "an Enterprise plan and admin access", with CSV export.
  - **Streaming** goes to "a Splunk HTTP Event Collector, Sumo Logic, an HTTPS webhook (including Cribl, SentinelOne, Rapid7, Cortex XDR, and Google Chronicle endpoints), or an S3 bucket".
  - This supersedes the earlier snippet that said "contact hi@cursor.com" and "30 days".
  - [compliance-and-monitoring](https://cursor.com/docs/enterprise/compliance-and-monitoring)
- **OpenTelemetry Export (Enterprise)**: metrics (tokens, tool calls, cost) and logs (API requests, errors, skills, **hooks**, plugins, cloud agent lifecycle, Grok Bot actions). "Your endpoint must be reachable from the public internet, because Cursor connects to it from the fixed set of source IPs." [opentelemetry-export](https://cursor.com/docs/enterprise/opentelemetry-export)
- **Hooks**
  - Includes `preToolUse`, `postToolUse`, `beforeMCPExecution` and more. "Enterprise (MDM-managed, system-wide): macOS `/Library/Application Support/Cursor/hooks.json`". "Priority order: Enterprise → Team → Project → User". "Any `deny` wins over `ask`."
  - Cloud agents on Enterprise "run team hooks and enterprise-managed hooks", but `beforeMCPExecution`/`afterMCPExecution` and `sessionStart` are deferred or unavailable in cloud agents.
  - [hooks](https://cursor.com/docs/hooks)
- **MCP Allowlist** and model controls are Enterprise-only, as is blocking members' own API keys. [model-and-integration-management](https://cursor.com/docs/enterprise/model-and-integration-management)

**OpenAI Codex** (**Corrected**: now [OPENED])
- The Codex governance page routes "Export records for audit or investigation" to the Compliance API.
  - "Local computer access with Work Cloud has the same Compliance API support as Work Cloud, with records under `conversation_message` and `codex_log`. Local execution generates separate OpenTelemetry (OTel) events."
  - Policy automation: "Manage Local and Codex Cloud settings in the Agent Security UI."
  - Hook-based auditing: "admin-defined MCP hooks that run on the cloud coordinator (orchestrator)".
  - "Conversation visibility alone does not establish a complete record of local actions."
  - [Codex governance](https://developers.openai.com/codex/enterprise/governance.md)
- The Compliance API guide says the records can "stream immutable compliance events into its SIEM". "These sources do not establish a complete record of every local command, file operation, screenshot, approval, or external action." [Compliance API](https://learn.chatgpt.com/docs/enterprise/compliance-api.md)
- The repo docs describe an admin-only `requirements.toml` with `allow_managed_hooks_only = true`. [openai/codex config.md](https://raw.githubusercontent.com/openai/codex/main/docs/config.md)
- **Unverified (snippet only):** 30-day retention for ChatGPT-authenticated Codex logs, and API-key usage excluded from the Compliance API. The "Running Codex safely" post returned 403.

### Inferences
- **Each vendor now admits its own record is incomplete:**
  - Anthropic: "not what occurred on the device", plus provider exclusions.
  - OpenAI: "do not establish a complete record of every local command, file operation… approval".
  - Cursor: audit excludes prompts and code; OTel needs a public endpoint.
- That is the clearest documented opening for a **neutral, device-side, cross-vendor evidence layer**, especially one that works **on-prem or air-gapped**. Cursor's export model cannot reach a private-only collector.
- Native policy (allow/deny, MCP allowlists, managed hooks) is now strong in all three. A startup should **consume** these controls (hooks, OTel, compliance APIs), not compete with them.

### Gaps
- GitHub Copilot's native governance was not examined.
- OpenAI Compliance API retention and the `codex_log` schema were not opened (they are in the API reference).

---

## Q4. Incumbent built-ins: Okta, Microsoft Agent 365, AWS AgentCore, Google, SailPoint

### Takeaway
- **Okta:** Agent SSO GA on **Aug 24, 2026**, "included in core Okta SSO plans at no additional cost" (**Confirmed, opened**). Okta for AI Agents has been GA since May 2026 and includes approval workflows.
- **Microsoft:** Agent 365 GA on **May 1, 2026** at **$15/user/month** or in E7 (**Confirmed, opened**). Claude Code discovery is **Corrected/clarified**: Defender for Endpoint documents discovery of Claude Code, Cursor and Codex on Windows (macOS preview), while runtime blocking via Claude Code hooks is **preview**. The Agent 365 launch blog itself only promised Claude Code "soon".
- **AWS:** AgentCore Policy GA on **Mar 3, 2026** (**Confirmed, opened**); AgentCore (Identity, Gateway) GA on **Oct 13, 2025** (**Confirmed, opened**).
- **Google:** the Agent Gateway architecture is documented, and Agent Registry went GA on Jun 18, 2026 (opened). The GA dates for Agent Identity and Gateway remain **Unverified**.
- **SailPoint:** Agentic Fabric GA on **Aug 4, 2026** (opened).

### Cited Findings
- **Okta** [OPENED [press release](https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/)]
  - "SAN FRANCISCO, August 24, 2026 — Okta… today announced the general availability of Agent SSO, bringing the open Cross App Access standard into the identity product used by more than 20,000 customers… included in core Okta SSO plans at no additional cost."
  - Agent SSO "applies to AI agents that support Cross App Access… issues short-lived, identity-governed tokens."
  - Example given: "if an organization deploys Anthropic's Claude, security teams govern its access natively."
  - Okta for AI Agents: "Generally available since May 2026… discovers unregistered and shadow AI agents… governs what every agent can do through access certifications, approval workflows, and agent deactivation"; includes "runtime enforcement".
- **Microsoft Agent 365** [OPENED [MS Security blog 2026-05-01](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)]
  - "Now generally available for commercial customers."
  - "available in Microsoft 365 E7 or standalone at USD15 per user per month."
  - Local agents: "starting with OpenClaw agents and expanding soon to other widely used agents like GitHub Copilot CLI and Claude Code" (listed under Public Preview). Runtime blocking was planned for "public preview in June 2026".
  - The current Defender docs list Claude Code, Cursor and Codex in the Windows discovery table, and Claude Code hooks under runtime protection "Windows (preview)" (updated 2026-10-09). [OPENED [MS Learn matrix](https://learn.microsoft.com/defender-endpoint/ai-agent-support-matrix)]
  - Whether this discovery is licensed through Agent 365 or Defender for Endpoint alone is **Unverified**.
- **AWS**
  - "Posted on: Mar 3, 2026 — Policy in Amazon Bedrock AgentCore is now generally available… Policy operates outside your agent code… natural language that automatically converts to Cedar". Available in 13 Regions, including Asia Pacific (Seoul). [OPENED [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/)]
  - "Posted on: Oct 13, 2025 — Amazon Bedrock AgentCore is now generally available… support for VPC, AWS PrivateLink." [OPENED [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-available/)]
- **Google**
  - "Agent Gateway is the governance and security enforcement layer… network entry and exit point for all agentic interactions."
  - Agent Identity assigns "a unique, secure ID (a SPIFFE ID)… secured by default with Context-Aware Access… mTLS and DPoP".
  - Agent Registry is the directory; "IAM Unified Access Policies" govern access.
  - [OPENED [Agent Gateway overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/gateways/agent-gateway-overview)]
  - Release notes: "June 18, 2026 — Agent Registry is generally available (GA)"; "September 30, 2026 — Cloud Trace integration with Agent Gateway (Preview)". [OPENED [release notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)]
  - Agent Identity and Gateway GA (Jul 30, 2026) appears only in IT Brief. [SNIPPET](https://itbrief.com.au/story/google-cloud-expands-gemini-enterprise-agent-controls)
- **SailPoint**: "Tue, 4th Aug 2026… SailPoint has also made Agentic Fabric generally available as a standalone product and as part of the broader identity security package." [OPENED [IT Brief UK](https://itbrief.co.uk/story/sailpoint-launches-unified-identity-security-for-ai-agents)]

### Inferences
- Identity, SSO and token brokering are free in Okta. Gateway policy is GA on AWS and Google. Endpoint discovery of coding agents is shipping in Defender.
- None of these incumbents offers a vendor-neutral, customer-held, tamper-evident record of coding-agent actions. Microsoft's coverage is Windows-first and hooks-dependent (Claude Code and Copilot only for runtime protection).

### Gaps
- Defender licensing for local-agent discovery and runtime protection was not opened.
- Per-call pricing for AgentCore Policy and Google Agent Gateway was not retrieved.

---

## Q5. Funding facts: Zenity, Onyx, Arcade.dev, Keycard

### Takeaway
All four are **Confirmed**, three of them from opened pages.

### Cited Findings
- **Zenity: $125M Series C, Aug 4, 2026.** Total raised $180M. Led by Norwest, with Qumra, SoftBank Vision Fund 2, Hitachi Ventures and LG Technology Ventures; existing investors Vertex, Third Point, DTCP and Intel Capital. [OPENED [SecurityWeek](https://www.securityweek.com/zenity-raises-125-million-in-series-c-funding/)]; [OPENED [Foley, Aug 17, 2026](https://www.foley.com/news/2026/08/foley-represents-lg-ventures-as-investor-in-125m-series-c-for-zenity/)]
- **Onyx Security: $113M Series B, Jul 30, 2026.** Total raised $153M. Led by Bessemer, with Cyberstarts, TCV, Conviction, FirstMark, Vintage, QuantumLight and G Squared. The valuation is "reportedly… an estimated $640 million". [OPENED [SecurityWeek](https://www.securityweek.com/onyx-security-raises-113-million-to-control-ai-agents-in-the-enterprise/)]
- **Arcade.dev: $60M Series A, Jun 12, 2026.** "led by SYN Ventures with Morgan Stanley and Wipro, to own the secure action layer for enterprise AI agents." [OPENED [API Evangelist](https://blogs.apievangelist.com/blogs/arcade-2026-06-12-arcade-dev-raises-60m-series-a/)] Fenwick's page returned 403.
- **Keycard: $38M, Oct 22, 2025.** "Andreessen Horowitz and boldstart ventures co-led the $8 million seed round, and Acrew Capital led the $30 million Series A." [OPENED [Help Net Security](https://www.helpnetsecurity.com/2025/10/22/keycard-ai-agents-identity-access-platform/)] Note this is a 2025 round.

### Inferences
- The well-funded independents (Zenity, Onyx) already cover coding agents (Zenity) and the Claude Compliance API (both). Competing head-on as a horizontal "agent security platform" is a capital mismatch.

### Gaps
- None.

---

## Q6. Conclusion: which gaps remain open for a coding-agent + MCP neutral audit/policy product, and which are covered?

### Takeaway
After pass 2, the gap is **narrower than earlier notes said**. Each element of the idea is now claimed by someone:
- **Coding-agent hooks + SIEM:** Endor, Zenity, Lasso, Knostic.
- **Coding-agent credential broker with audit and kill switch:** Agentic Fabriq.
- **On-prem PAM-for-agents with an append-only, hash-verified audit log and human approval:** Alter.
- **Signed, non-repudiable event history:** Multifactor.
- **Native policy, telemetry and transcripts:** Anthropic, Cursor, OpenAI.

What remains **unclaimed is the combination**: a vendor-neutral, **customer-held, cryptographically verifiable evidence ledger** for coding-agent **local actions** (shell, file, git, package, MCP) across Claude Code, Cursor and Codex. It would reconcile hooks, OTel and vendor compliance APIs into a **completeness report**, and be **deployable fully on-prem or air-gapped**. The vendors themselves document that their own records are incomplete.

### Cited Findings
**Covered (do not lead with these):**
- Policy, MCP allowlists and managed hooks: native in Claude Code (managed settings), Cursor (Enterprise MDM hooks where deny wins; MCP allowlist) and Codex (requirements.toml, Agent Security UI). [OPENED, Q3]
- Hook-based block/alert plus SIEM for coding agents: Endor (Cursor, Claude Code, Codex, Copilot), Zenity, Lasso, Knostic ($15/user/month with audit logs), Defender (preview runtime protection). [OPENED, Q2]
- Brokered coding-agent tool access with per-developer attribution, org kill switch and audit: Agentic Fabriq ($0–$300/month). [OPENED [coding-agents](https://www.agenticfabriq.com/product/coding-agents)]
- On-prem agent PAM with "append-only… content hashes that an integrity check verifies" audit, approvals and SIEM: Alter ($0–$250/month plus enterprise). [OPENED [Alter enterprise](https://alterauth.com/enterprise)]
- Self-hostable MCP or tool gateways with approval: Executor (MIT; enterprise "Audit logs for every tool call") and Clawvisor (ELv2). [OPENED]
- Identity and SSO for agents: Okta (free in core SSO), Entra/Agent 365, AgentCore Identity, Google Agent Identity. [OPENED]

**Still open or weakly covered:**
1. **A complete record of local actions.** OpenAI: "do not establish a complete record of every local command, file operation, screenshot, approval, or external action." [OPENED [OpenAI](https://learn.chatgpt.com/docs/enterprise/compliance-api.md)] Anthropic: transcripts are "not what occurred on the device". [OPENED [Anthropic FAQ](https://platform.claude.com/docs/en/manage-claude/compliance-faq)] Cursor audit excludes prompts and code. [OPENED [Cursor](https://cursor.com/docs/enterprise/compliance-and-monitoring)]
2. **Coverage-completeness proof across vendors.** Documented holes include Cowork (no hooks, per Endor), Cursor cloud agents skipping `beforeMCPExecution`, Defender runtime missing Cursor and Codex, and Anthropic transcripts excluding Bedrock, Vertex, Foundry, Console keys and cloud sessions. No vendor sells "here is what we did not see". [OPENED, Q2/Q3]
3. **Customer-verifiable tamper evidence for coding-agent actions.**
   - Alter's hashed append-only rows cover proxied API calls, not local coding-agent actions, and it does not say whether customers can verify them externally.
   - Anthropic's Merkle log covers only Access Transparency.
   - OpenAI's compliance events are "immutable" on OpenAI's side.
   - [OPENED]
4. **Air-gapped / private-network delivery.** Cursor OTel Export requires a public-internet endpoint. [OPENED] Anthropic's gateway is Claude-only. The YC players are SaaS-first, except Alter (on-prem "talk to us") and self-host-only open-source tools.

### Inferences
- **Defensible wedge.** Build an evidence layer that complements existing enforcement:
  - Collect from Claude Code, Cursor and Codex hooks and OTel, plus the Anthropic and OpenAI compliance APIs.
  - Normalize per action and join on `tool_use_id` or session.
  - Seal into a customer-held hash chain or signed checkpoints with WORM export.
  - Produce a coverage and completeness report.
  - Route high-risk actions to human approval, and run fully on-prem.
- **Positioning.** Present this as the record that auditors and regulators accept, not as yet another policy engine. Armorer's blog shows regulated reviewers ask for "sample action records" as evidence.
- **Risks:**
  - Alter extends to coding-agent hooks (it already has on-prem plus hashed logs).
  - Agentic Fabriq adds local action capture.
  - Zenity or Endor add signed ledgers.
  - Anthropic extends transparency-log proofs to session records.
  - Microsoft runtime protection goes GA.

### Gaps
- I did not test whether Endor, Zenity or Lasso stores are append-only or signed (pages don't say), or whether Alter's integrity check is externally verifiable.
- No buyer-side evidence (RFPs, regulator text) was collected to show that tamper evidence is a purchase driver rather than a nice-to-have.
