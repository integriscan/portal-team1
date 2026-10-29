# Incumbents, AI Platforms, Standards and Analysts on AI Agent Identity, Authorization and Audit (as of 2026-10-29)

Method note: The researcher could not fetch most primary vendor pages from this session (okta.com, aws.amazon.com, workos.com, siliconangle.com and investor.workday.com did not resolve). Only the Microsoft Security blog was fetched in full. Unless a finding says "fetched", it comes from search-engine result snippets or summaries and is marked **[snippet]**. Several facts come from secondary blogs and are flagged as such. Check exact dates and GA status on the vendor pages before publishing.

## Q1. What are the identity vendors and cloud/AI platforms shipping (product, launch date, GA vs preview, pricing)?

### Takeaway
By October 2026, every major identity, cloud and SaaS platform ships some form of agent identity, registry and policy enforcement. Several of these are GA and bundled into existing licenses: Okta Agent SSO is included in core SSO, Microsoft Agent 365 costs $15/user/month or comes in E7, and AWS AgentCore Policy has been GA since March 2026. Consolidation is also fast. ServiceNow bought Veza (~$1.2B), Palo Alto bought CyberArk, and Workday is buying C1.ai. Basic "give agents an identity and gate their tool calls" is turning into a platform feature. Each vendor's coverage is strongest inside its own ecosystem.

### Cited Findings

**Okta / Auth0**
- Okta's August 24, 2026 press release announced GA of **Agent SSO**, which brings the open Cross App Access (XAA) standard to Okta's 20,000+ customers. It is "included in core Okta SSO plans at no additional cost" **[snippet]**. [Okta press release](https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/)
- The same release says **Okta for AI Agents** has been GA since May 2026. It covers resources that XAA does not reach: custom authorization servers, service accounts, secrets and other agents **[snippet]**. [Okta press release](https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/). A June 2026 Okta developer recap also describes Okta for AI Agents as GA **[snippet]**. [Okta Developer blog](https://developer.okta.com/blog/2026/06/09/okta-developer-connect-sf-recap)
- On June 23, 2026, Okta announced an XAA ecosystem of 25+ early adopters, including Anthropic, Asana and Atlassian **[snippet]**. [Okta press release](https://www.okta.com/newsroom/press-releases/okta-announces-cross-app-access-partners/); [SiliconANGLE](https://siliconangle.com/2026/06/23/okta-expands-cross-app-access-ecosystem-secure-ai-agent-connections/)
- XAA (built on the IETF ID-JAG draft) was adopted as MCP's official "Enterprise-Managed Authorization" extension **[snippet, secondary]**. [startwithidentity.com](https://startwithidentity.com/blog/agent-identity-gets-a-protocol/)
- One analysis says Okta, Auth0 and Descope each shipped Cross App Access support between August 24 and September 1, 2026 **[snippet, secondary]**. [guptadeepak.com](https://guptadeepak.com/ciam-compass/changelog/cross-app-access-converges-2026/)
- Earlier history: Okta announced AI-agent lifecycle security and Cross App Access at Oktane in September 2025 **[snippet]**. [SiliconANGLE 2025-09-25](https://siliconangle.com/2025/09/25/okta-expands-identity-fabric-ai-agent-lifecycle-security-cross-app-access-verifiable-credentials/); [Okta Launch Week '25](https://www.okta.com/blog/product-innovation/launch-week-oktane-edition-september25/)
- The 2026 Okta Identity Engine release notes list several August 2026 "expected" dates for features such as unified agent identity, so exact GA dates vary by feature **[snippet]**. [Okta release notes](https://developer.okta.com/docs/release-notes/2026-okta-identity-engine/)

**Microsoft (Entra Agent ID / Agent 365)**
- **Agent 365 became GA on May 1, 2026** for commercial customers. It is described as a control plane to "observe, govern, and secure agents", covering both Microsoft-built and partner agents **[fetched]**. [Microsoft Security blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)
- GA status by agent type: agents acting on behalf of users (delegated) are GA, agents with their own access are GA, and agents in team workflows with their own access are Public Preview **[fetched]**. [Microsoft Security blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)
- **Cross-cloud registry sync with AWS Bedrock and Google Cloud is in public preview** (discovery and inventory; start/stop/delete is planned). Defender and Intune discover local Windows agents, starting with OpenClaw, with "GitHub Copilot CLI and Claude Code" named as coming soon. Intune can block unmanaged agents. Runtime blocking was slated for public preview in June 2026 **[fetched]**. [Microsoft Security blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)
- Pricing: **$15 per user per month standalone, or included in Microsoft 365 E7**. A license covers each person who manages, sponsors or uses agents. Agents are not licensed individually **[fetched]**. [Microsoft Security blog](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/). E7 is listed at $99/user/month **[snippet, secondary]**. [newclawtimes](https://newclawtimes.com/articles/microsoft-agent-365-ga-may-2026-15-dollars-per-user-ai-agent-governance/); [samexpert](https://samexpert.com/agent-365/)
- Entra Agent ID is described as GA and delivered through Agent 365 and E7. Conditional Access for agents reportedly needs Entra ID P1, and ID Protection for agents needs P2 **[snippet, secondary licensing blogs]**. [samexpert Entra guide](https://samexpert.com/entra-id-licensing-guide/); [licenseq](https://licenseq.com/agent-365-licensing/). An older analysis lists pre-GA prerequisites (a Copilot license and the Frontier program), which are probably outdated. It also argues that Entra Agent ID "only works inside Microsoft". [Aethyr Research](https://aethyrresearch.com/blog/microsoft-entra-agent-id)
- The fetched GA blog does not mention Purview audit/DLP for agents. This researcher did not verify Purview's agent-audit specifics (see Gaps).

**AWS (Bedrock AgentCore)**
- AgentCore, including Identity and Gateway, became **GA in October 2025** **[snippet]**. [AWS What's New 2025-10](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-available)
- **AgentCore Policy became GA on March 3, 2026**. It runs outside agent code: policies live in a policy engine attached to an AgentCore Gateway, which checks every tool call and allows or denies it. It launched in 13 regions **[snippet]**. [AWS What's New 2026-03](https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/). Policies use Cedar with a default-deny design **[snippet, secondary]**. [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/amazon_bedrock_agentcore_policy_implementation_guide.html); [clawaws](https://clawaws.com/blog/agentcore-policy-review/)
- Policy and quality evaluations were first announced together in preview, at re:Invent according to this researcher's prior knowledge **[snippet]**. [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-bedrock-agentcore-adds-quality-evaluations-and-policy-controls-for-deploying-trusted-ai-agents/)
- AgentCore Identity on-behalf-of (OBO) token exchange is said to have gone GA on April 30, 2026 in 14 regions. This comes from a third-party source only and is **unverified**. [aperion.ai](https://aperion.ai/blog/aws-bedrock-agentcore-governance-guide/)
- AWS also publishes an open-source "MCP Gateway and Registry" project that can ingest agents from a Workday tenant and federate with the Anthropic MCP Registry **[snippet]**. [AWS Open Source blog](https://aws.amazon.com/blogs/opensource/governing-ai-assets-at-scale-with-mcp-gateway-and-registry/)

**Google (Gemini Enterprise Agent Platform, formerly Vertex AI)**
- Vertex AI was renamed **Gemini Enterprise Agent Platform** in April 2026 **[snippet]**. [SiliconANGLE 2026-04-22](https://siliconangle.com/2026/04/22/google-brings-agentic-development-optimization-governance-one-roof-gemini-enterprise-agent-platform/); [Google Cloud docs overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/overview)
- **Agent Identity** is a fully managed, unique identity per agent with a **SPIFFE-formatted ID**, so administrators can grant IAM permissions to the agent itself rather than to a shared service account **[snippet]**. [Google Cloud docs - Agents](https://docs.cloud.google.com/gemini-enterprise-agent-platform/agents). Google's Gemini at Work 2026 post says each agent gets "a cryptographically attested identity" with least privilege, and that every agent action is attributed to the agent in an audit trail **[snippet]**. [Google Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/welcome-to-gemini-at-work-2026)
- **Agent Gateway** governs tool calls. Semantic governance policies, which check a proposed tool call against user intent, entered **Preview on June 29, 2026**. IAM governance policies are in Private Preview. **Agent Registry** (agents, tools, MCP servers) is in Public Preview **[snippet]**. [Google Cloud release notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)
- Futurum notes that coworker agents get their own Workspace identity and spend caps, and that "most of the announced features lacked availability dates or pricing" **[snippet]**. [Futurum](https://futurumgroup.com/insights/google-collapses-enterprise-ai-into-a-single-gemini-agent-at-gemini-at-work-2026/)

**ServiceNow (AI Control Tower + Veza)**
- ServiceNow announced the Veza acquisition on December 2, 2025 and **closed it on March 2, 2026 for about $1.2B, mostly cash** (10-Q) **[snippet]**. [ServiceNow press release](https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-to-Expand-Security-Portfolio-With-Acquisition-of-Vezas-Leading-AI-native-Identity-Security-Platform/default.aspx); [SEC 10-Q Q3 FY2026](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000096/now-20260930.htm)
- Veza positions itself as the "Enterprise Agent Identity Control Plane" inside AI Control Tower. Its Access Graph maps effective permissions across human, machine and AI identities **[snippet]**. [Veza blog](https://veza.com/blog/veza-servicenow-the-enterprise-agent-identity-control-plane/). Veza is reported as integrated into AI Control Tower, Context Engine and the orchestration layer **[snippet]**. [CRN Asia](https://www.crnasia.com/news/2026/cybersecurity/servicenow-s-veza-integration-fuels-identity-security-push-f)

**Workday (Agent System of Record + C1.ai)**
- On **October 13, 2026**, Workday announced it will acquire **C1.ai**, which describes itself as "a leading agentic identity platform for people and agents". C1.ai is meant to extend Workday's Agent System of Record, which already gives a single place to see and manage agents. Close is expected in Q4 of Workday FY2027 **[snippet]**. [Workday IR press release](https://investor.workday.com/news-and-events/press-releases/news-details/2026/Workday-to-Acquire-C1-ai-a-Leading-Agentic-Identity-Platform-for-People-and-Agents/default.aspx); [Workday newsroom](https://newsroom.workday.com/2026-10-13-Workday-to-Acquire-C1-ai,-a-Leading-Agentic-Identity-Platform-for-People-and-Agents?es_id=5c0f70a1fe); [iTWire](https://itwire.com/business-it-news/data/workday-rising-2026-bhusri-buys-c1-ai-to-govern-ai-agents-as-sana-takes-over-the-home-screen)
- This researcher could not confirm from these sources whether C1.ai is the renamed ConductorOne.

**SailPoint**
- At **Navigate 2026** (reported as October 6; another outlet dates its coverage October 14), SailPoint announced "Agentic Fabric". It discovers AI agents, MCP servers and credentials using endpoint and browser sensors, and adds prompt monitoring, runtime authorization, one-click lifecycle controls, an **agent kill switch** and **Agent Audit**. Most of these capabilities are expected to be GA by November 1 or by year-end **[snippet]**. [Futurum](https://futurumgroup.com/insights/sailpoint-bets-on-identity-to-govern-ai-agents-at-navigate-2026/); [MarketBeat](https://www.marketbeat.com/instant-alerts/event-sailpoint-unveils-ai-identity-agents-runtime-controls-at-navigate-2026-10-14/); [SailPoint PR](https://www.sailpoint.com/press-releases/sailpoint-unlocks-a-secure-agentic-era-with-autonomous-identity-security)

**Palo Alto Networks / CyberArk ("Idira")**
- Palo Alto **completed the CyberArk acquisition in February 2026** and reportedly **renamed the CyberArk platform "Idira" in May 2026**. Idira brings zero standing privilege to agents **[snippet, secondary landscape report]**. [IDSync State of AI Agent Identity 2026](https://idsync.com/reports/state-of-ai-agent-identity-2026). No specific Idira AI-agent product launch was found.

**Saviynt, Ping Identity**
- Saviynt launched **"Zuma"** in July 2026, combining AI agent discovery, runtime access checks and agent governance. A separate snippet says Saviynt launched "Identity Security for AI" in March. The relationship between the two is unclear **[snippet, secondary]**. [IDSync report](https://idsync.com/reports/state-of-ai-agent-identity-2026); [Linx Security](https://www.linx.security/blog/top-saviynt-alternatives)
- Ping Identity is listed with **"Identity for AI (GA Mar 2026)"**. This rests on a single secondary source and is **unverified**. [IDSync report](https://idsync.com/reports/state-of-ai-agent-identity-2026)

**Salesforce / MuleSoft**
- **MuleSoft Agent Fabric** is marketed as a control plane that "discovers agents, MCP servers and APIs across cloud AI platforms and governs what they can do" **[snippet]**. [MuleSoft](https://www.mulesoft.com/). A third-party guide breaks it into Registry, Scanners, AI Gateway, Broker and MCP Bridge **[snippet, secondary]**. [salesforcedictionary.com](https://salesforcedictionary.com/blogs/mulesoft-agent-fabric-complete-2026-guide)
- Most third-party agents still reach Salesforce as a shared integration user or as the user who clicked "Allow". Salesforce recommends one integration user per integration **[snippet, secondary]**. [StackOne](https://www.stackone.com/blog/ai-agent-identity-salesforce-workday/)

**Gateways: Cloudflare, Docker, Kong**
- **Cloudflare MCP Server Portals** with Cloudflare Access: a managed Zero Trust option that puts multiple MCP servers behind one endpoint, with per-user OAuth and logging. Cloudflare's AI Gateway mainly handles model traffic **[snippet, secondary]**. [MintMCP](https://www.mintmcp.com/blog/agent-gateways-tool-calling-scale); [Morph](https://www.morphllm.com/best-enterprise-mcp-gateway-platforms)
- **Docker MCP Gateway**: open source. Each server runs in an isolated container with credentials injected centrally. It is positioned for individual or local use and does not address multi-tenancy **[snippet, secondary]**. [StackOne](https://www.stackone.com/blog/best-mcp-gateways/)
- **Kong**: added an MCP Registry in Konnect (February 2026). AI Gateway 3.14 (April 2026) added agent-to-agent traffic management. Its MCP OAuth plugin, per-tool ACLs and audit logs are in the **enterprise tier with sales-led pricing** **[snippet, secondary]**. [MintMCP](https://www.mintmcp.com/blog/agent-gateways-tool-calling-scale); [Tray.ai](https://tray.ai/blog/best-mcp-gateways/)

### Inferences
- **Commoditized or bundled**: agent identity objects (Entra Agent ID, Google Agent Identity, AgentCore Identity, Okta), agent SSO and token brokering (Okta Agent SSO at no extra cost), agent registries, and gateway-level allow/deny on tool calls (AgentCore Policy GA, Google Agent Gateway in preview, Kong, Cloudflare). A startup cannot charge for these as standalone features.
- **Lock-in is the hyperscalers' main weakness.** Microsoft's AWS/Google registry sync is preview-only and inventory-only, Claude Code endpoint discovery is "coming soon", and analysts say Entra Agent ID works best inside Microsoft. Google and AWS policy engines govern traffic only through their own gateways. Neutral governance across clouds, SaaS apps and coding agents is still contested. Identity/IGA vendors (Okta, SailPoint, Veza/ServiceNow, Saviynt, Idira) and MuleSoft are all aiming at it, so a startup would compete with funded incumbents there too.
- **Acquisitions show buyers will pay for agent identity.** Veza (~$1.2B), CyberArk (Palo Alto) and C1.ai (Workday) were all bought within about 11 months. This both validates the category and removes independent challengers. A small startup's realistic exit may be acquisition rather than a standalone category.
- **Agent-level licensing is cheap or bundled.** Microsoft charges per human, not per agent. Okta bundles Agent SSO. A startup charging per agent would be undercut by these bundles.

### Gaps
- Microsoft Purview audit/DLP for agents and Copilot Studio governance: specific features and GA status were not verified (the GA blog does not cover them).
- Auth0 for AI Agents: exact GA date and pricing not confirmed from Auth0 docs. Only the "shipped XAA by Sept 1, 2026" snippet was found.
- AgentCore Policy and Identity pricing (per-request) was not retrieved. AgentCore Observability status was not checked.
- Ping Identity, Saviynt and Palo Alto Idira agent products rest on single secondary sources. Dates and names need confirmation.
- No results were found on GitHub MCP Registry enterprise allowlist governance. Cloudflare, Docker and Kong details come from comparison blogs, not vendor docs.
- Salesforce Agentforce Trust Layer and native agent identity for Agentforce agents were not researched in depth.

## Q2. What permission and audit controls do the AI labs (Anthropic, OpenAI) ship natively?

### Takeaway
Both labs now ship enterprise admin controls: connector/MCP allowlists, per-tool approval modes, RBAC/SSO/SCIM, and Compliance APIs for exporting activity. Coverage is limited to each lab's own surfaces, and action-level audit is incomplete. OpenAI says individual agent actions do not appear in its compliance logs. Anthropic's audit logs contain IDs rather than content, and Claude Code transcripts are local unless pulled through the Compliance API. A cross-vendor, action-level record of what agents did under whose authority is not provided by either lab.

### Cited Findings
- The Claude Enterprise plan lists SSO, SCIM, RBAC, audit logs, a **Compliance API** for programmatic access to activity logs, chats, files and projects, **OpenTelemetry** monitoring and an Analytics API **[snippet]**. [Claude Enterprise plan](https://claude.com/solutions/enterprise)
- Anthropic support: "Transcripts of local CLI and Desktop sessions are available through the Compliance API for Enterprise plans" **[snippet]**. [Claude support - Console to Enterprise migration](https://support.claude.com/en/articles/14128775-claude-code-on-console-to-enterprise-migration)
- Connector controls: an Owner must enable a connector before anyone can use it, and can set each tool to **always allow, needs approval, or blocked**. Audit log exports cover 180 days and contain IDs rather than chat titles or content **[snippet, secondary]**. [dope.security](https://dope.security/post/claude-enterprise-controls-govern-claude-at-work)
- Claude Code **managed settings** (deployed via MDM, not overridable by developers) enforce tool permissions, file-access restrictions and `allowedMcpServers` / `deniedMcpServers`. Local session logs under `~/.claude/` are not centrally aggregated **[snippet, secondary]**. [TrueFoundry](https://www.truefoundry.com/blog/claude-code-governance-building-an-enterprise-usage-policy-from-scratch); [TrueFoundry enterprise security](https://www.truefoundry.com/blog/claude-enterprise-security)
- Anthropic is listed as an early adopter of Okta Cross App Access **[snippet]**. [Okta press release](https://www.okta.com/newsroom/press-releases/okta-announces-cross-app-access-partners/)
- OpenAI's ChatGPT Enterprise page offers "Compliance API visibility for conversations and agent activity" **[snippet]**. [ChatGPT Enterprise](https://chatgpt.com/business/enterprise/). However, the ChatGPT agent help article says individual agent actions (virtual computer usage, app requests, chain of thought) **will not appear in those logs** **[snippet]**. [OpenAI Help - ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent)
- OpenAI release notes: **workspace agents are GA** in Business, Enterprise and Edu. Admins can view workspace-agent activity and usage and control which roles may publish agents. Enterprise workspaces with EKM can connect custom MCP servers. Workspace agents are off by default **[snippet]**. [ChatGPT Enterprise release notes](https://help.openai.com/en/articles/10128477-chatgpt-enterprise-and-edu-release-notes)
- One blog references an OpenAI product called "Dots" (September 2026) powered by "GPT-6 Astra". This could not be corroborated and should be **treated as unreliable**. [NeuralTrust](https://neuraltrust.ai/blog/chatgpt-agent-security)

### Inferences
- The labs are commoditizing **in-product** controls: which connectors are allowed, approval modes per tool, and exporting their own logs. A startup should not rebuild these. It should consume them, for example by pulling the Compliance APIs and OpenTelemetry streams.
- The gaps the labs leave are **(a) action-level audit of agent tool calls**, which OpenAI explicitly excludes from compliance logs, **(b) cross-vendor normalization** of Claude, ChatGPT, Copilot and custom agents into one evidence trail, and **(c) policy authored once and enforced everywhere**. These are possible wedges for a startup, but gateways and IGA vendors (SailPoint "Agent Audit", Veza) are targeting the same space.

### Gaps
- The OpenAI AgentKit/Agent Builder guardrails and connector registry admin features were not verified from primary docs.
- Anthropic's official admin docs (exact managed-settings keys, Compliance API latency and scope) were not fetched. Details come from secondary blogs plus a support snippet.
- An unverified claim that Claude in Chrome turns on by default for Enterprise from September 10, 2026 was found and not included as fact.

## Q3. How mature are the standards (MCP auth, A2A, IETF, OpenID, SPIFFE, NIST), and do they expand or shrink startup room?

### Takeaway
Standards matured quickly in 2026. The MCP authorization spec now uses OAuth 2.1 with RFC 9728/8707 audience binding and CIMD (DCR deprecated). Its Enterprise-Managed Authorization extension (XAA / ID-JAG) is reportedly stable and already shipped by Okta, Auth0 and Descope. **Delegation chains, multi-hop agent-to-agent authorization, and enforceable audit of actor chains** remain drafts or open problems: transaction tokens for agents is an individual draft, the OBO-for-agents draft expired, RFC 8693 actor claims are only informational, A2A has documented security flaws, and NIST is still at concept-paper stage. Standardized auth plumbing shrinks the "we do auth for MCP" opportunity. The unsolved chain-of-custody and policy semantics leave room.

### Cited Findings
- The MCP spec revision **2026-07-28** reportedly **deprecates Dynamic Client Registration in favor of Client ID Metadata Documents (CIMD)**, keeping DCR for backward compatibility. The draft spec lists the registration options in order: CIMD, pre-registration, DCR **[snippet, secondary + spec draft]**. [WorkOS](https://workos.com/blog/mcp-2026-spec-agent-authentication); [SSOJet](https://ssojet.com/blog/mcp-authentication-oauth-tokens-security-ai-connections); [MCP spec draft - Authorization](https://modelcontextprotocol.io/specification/draft/basic/authorization)
- MCP servers MUST publish Protected Resource Metadata (RFC 9728) and reject tokens not issued for them. Clients send the RFC 8707 `resource` parameter and validate `iss` per RFC 9207 **[snippet, secondary]**. [Scalar](https://scalar.com/learn/mcp/mcp-oauth); [Aembit](https://aembit.io/blog/mcp-oauth-2-1-pkce-and-the-future-of-ai-authorization/)
- The MCP **Enterprise-Managed Authorization** extension reportedly reached **Stable in June 2026** (one source says June 18). The underlying **ID-JAG draft (draft-ietf-oauth-identity-assertion-authz-grant) is an OAuth WG document, not yet an RFC**, at -04 as of 2026-05-21 **[snippet, secondary]**. [WorkOS ID-JAG](https://workos.com/blog/mcp-enterprise-managed-authorization-id-jag); [dev.to](https://dev.to/kanywst/the-three-layers-of-ai-agent-authentication-what-id-jag-transaction-tokens-and-wif-actually-1mbk); [hidekazu-konishi](https://hidekazu-konishi.com/entry/where_ai_agent_authorization_standards_stand.html)
- **Transaction Tokens for Agents** (draft-araut-oauth-transaction-tokens-for-agents, Amazon author) is an individual draft, not WG-adopted **[snippet]**. [IETF datatracker](https://datatracker.ietf.org/doc/draft-araut-oauth-transaction-tokens-for-agents/); [IETF draft -06](https://www.ietf.org/archive/id/draft-oauth-transaction-tokens-for-agents-06.html). An October 2026 overview says the base Transaction Tokens draft is at "WG Consensus: Waiting for Write-Up" and Identity Chaining is in the RFC Editor queue. This conflicts with older listings **[snippet, secondary]**. [hidekazu-konishi](https://hidekazu-konishi.com/entry/where_ai_agent_authorization_standards_stand.html)
- An individual draft "OAuth 2.0 Extension: On-Behalf-Of User Authorization for AI Agents" reached -02 and **expired February 27, 2026**. RFC 8693 treats prior actors as **informational, not enforced** **[snippet, secondary]**. [WorkOS OBO](https://workos.com/blog/oauth-on-behalf-of-ai-agents)
- The OpenID Foundation's AI Identity Management Community Group published **"Identity Management for Agentic AI"** in October 2025 (arXiv 2510.25819). It warns that agents look like regular users, making it impossible to tell who actually did what, and recommends building on OAuth 2.0 and MCP **[snippet]**. [arXiv](https://arxiv.org/abs/2510.25819); [Digit.fyi](https://www.digit.fyi/ai-agent-security/); [OpenID tag page](https://openid.net/tag/ai-identity-management/)
- **A2A security**: a 2025 academic analysis found insufficient token-lifetime control, overbroad scopes and missing consent flows. **A2ABreak (2026)** reports 11 new vulnerabilities exploitable by spec-compliant adversaries, including credential harvesting via multi-hop identity loss in delegation chains **[snippet]**. [arXiv 2505.12490](https://arxiv.org/pdf/2505.12490); [arXiv A2ABreak](https://arxiv.org/pdf/2609.10871)
- **SPIFFE for agents**: Google's Agent Identity uses SPIFFE-formatted IDs **[snippet]**. [Google Cloud docs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/agents)
- **NIST NCCoE**: concept paper "Accelerating the Adoption of Software and AI Agent Identity and Authorization" (February 5, 2026; Booth, Fisher, Galluzzo, Roberts). It proposes a demonstration that applies existing standards (OAuth 2.0/2.1, OIDC, SPIFFE/SPIRE) to agents. **Comments closed April 2, 2026**. The planned deliverable is a practice guide with a reference implementation, and nothing in it is a compliance requirement yet **[snippet]**. [NCCoE news](https://www.nccoe.nist.gov/news-insights/new-concept-paper-identity-and-authority-software-agents); [NCCoE project](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization); [Biometric Update](https://www.biometricupdate.com/202603/nist-concept-paper-explores-identity-and-authorization-controls-for-ai-agents). NIST CAISI separately launched an AI Agent Standards Initiative in February 2026 **[snippet, secondary]**. [CSA Labs](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-standards-federal-framework/)

### Inferences
- **Standards shrink the room** at the authentication and token layer. MCP OAuth, CIMD and XAA/ID-JAG are shipped by identity providers at no extra cost, so "auth for MCP servers" is no longer a moat.
- **Standards leave room** where they are immature or explicitly unenforced:
  - multi-hop delegation and actor-chain enforcement (transaction tokens for agents is an individual draft; RFC 8693 actors are informational)
  - intent- or semantic-level authorization (Google's semantic policies are only in preview)
  - A2A trust (documented vulnerabilities)
  - audit evidence formats (no standard found)
- A startup that implements the emerging drafts early, without its own proprietary token format, could be positioned well. This is speculative.
- NIST's practice guide is likely to be a 2027+ deliverable (an inference from the April 2026 comment close). Compliance-driven demand ("map to NIST") may grow, which favors vendors with evidence and reporting features.

### Gaps
- The official MCP changelog for the 2025-06-18, 2025-11-25 and 2026-07-28 revisions was not fetched. The 2026-07-28 date and EMA "Stable" status come from secondary sources.
- No primary source was found on a specific IETF "OAuth for AI agents" working-group charter or WIMSE status for agents.
- The A2A spec's current auth requirements (Linux Foundation governance version) were not checked.

## Q4. What do analysts (Gartner, Forrester, IDC) say: platform feature or standalone category?

### Takeaway
Gartner created a "guardian agents" category (first Market Guide in February 2026) and added AI agent identity, CIAM for AI agents and intent-based access control to the 2026 Digital Identity Hype Cycle. It sizes guardian agents as a small but growing share of agentic AI spend. Forrester's AEGIS framework treats agent IAM as one of six domains within broader security. Both frame agent identity as an **extension of IAM/security platforms**, with supervision ("guardian") as the more distinct emerging segment. No IDC data was found.

### Cited Findings
- Gartner published its **first Market Guide for Guardian Agents on February 25, 2026**. It defines guardian agents as systems that supervise AI agents so their actions stay within goals and boundaries **[snippet]**. [Gartner document 7509053](https://www.gartner.com/en/documents/7509053); [The Hacker News](https://thehackernews.com/2026/03/5-learnings-from-first-ever-gartner.html)
- Sizing conflicts: a June 2025 Gartner forecast put guardian agents at 10-15% of the agentic AI market by 2030. The Market Guide, as quoted by a vendor, says "at least 6%" by 2030 **[snippet, secondary]**. [The Hacker News](https://thehackernews.com/2026/03/5-learnings-from-first-ever-gartner.html); [agilepoint](https://www.agilepoint.com/gartner-guardian-agents)
- Spending today is under 1% of agentic AI budgets, and Gartner expects 5-7% by 2028. Gartner also expects that through 2028, at least 80% of unauthorized AI agent transactions will stem from **internal policy violations rather than malicious attacks** **[snippet, secondary]**. [IT Brew](https://www.itbrew.com/stories/2026/03/06/guardian-agents-are-here-and-ready-to-disrupt-the-market); [The Hacker News](https://thehackernews.com/2026/03/5-learnings-from-first-ever-gartner.html)
- **Gartner Hype Cycle for Digital Identity, 2026**: according to vendor summaries, new profiles include **AI agent identity, workload access management, intent-based access control and CIAM for AI agents**. CIAM for AI Agents is "On the Rise / Emerging / High benefit". Gartner's 2025 survey found 94% of organizations had more machine identities, driven largely by AI and agents **[snippet, vendor-reported]**. [Descope](https://www.descope.com/blog/post/2026-gartner-hype-cycle-digital-identity); [Radiant Logic](https://www.radiantlogic.com/?p=8098)
- Gartner's own article on the **2026 Hype Cycle for Agentic AI** says governance, security and cost profiles sit alongside core agentic technologies, which signals early concern about accountability **[snippet]**. [Gartner article](https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai.html)
- A vendor cites an April 2026 Gartner note, "IAM for AI Agents and Other Workloads", that names Authorization Management Platforms as a control layer. This is **unverified**. [Descope / vendor summary via search](https://www.descope.com/blog/post/2026-gartner-hype-cycle-digital-identity)
- **Forrester AEGIS** (Agentic AI Enterprise Guardrails for Information Security) has six domains. Its IAM domain treats agents as first-class managed identities with human owners, vaulted per-session credentials, OBO delegation and JIT permissions. One summary counts 39 controls plus a 12-month plan. Forrester predicted that an agentic AI deployment would cause a publicly disclosed breach in 2026 **[snippet, secondary]**. [beri.net](https://www.beri.net/article/forrester-aegis-framework-6-guardrails-ai-agent-breach)
- Gartner's 2026 security spending forecast is $244.2B, with commentary that enterprises spend about 17x more on AI tools than on securing AI **[snippet, secondary]**. [Software Strategies Blog](https://softwarestrategiesblog.com/2026/03/24/information-security-spending-2026/)

### Inferences
- Analysts treat **agent identity as part of IAM**: Hype Cycle profiles inside Digital Identity, and AEGIS's IAM domain. This matches vendor bundling, so selling "agent identity" alone puts a startup against the platforms.
- The **guardian-agent / runtime supervision and policy-violation** framing is a distinct, Gartner-recognized category with a stated reason to exist: 80% of unauthorized transactions come from internal policy violations. That favors permission-intent checking plus audit over raw authentication. It is still small (under 1% of spend today), so budgets may be thin.

### Gaps
- No IDC predictions on agent identity or governance were found.
- The full text of Gartner's Hype Cycle for Digital Identity 2026 and the Guardian Agents Market Guide could not be accessed. The figures come from vendor and trade summaries.
- Forrester's primary AEGIS report and any 2026 Forrester Wave on agent identity were not accessed.

## Synthesis: Commoditization map for an "AI agent permission & audit" startup

### Takeaway
Agent identity issuance, SSO/token brokering for MCP, in-product connector allowlists and single-ecosystem gateway policy are **commoditized or bundled**. Cross-ecosystem discovery and inventory, lifecycle and kill switch, and IGA-style access reviews for agents are **partially covered** by fast-moving, well-funded incumbents. The **remaining gaps** are cross-vendor, action-level audit evidence with delegation-chain provenance, intent/semantic authorization across heterogeneous agents, and coverage of coding and local agents. Each gap has at least one incumbent pointing at it.

### Cited Findings
- **Built-in or free (bundled):**
  - Okta Agent SSO / XAA, at no extra cost in core SSO [Okta](https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/)
  - Google per-agent SPIFFE identity [Google docs](https://docs.cloud.google.com/gemini-enterprise-agent-platform/agents)
  - AgentCore Identity and Gateway, GA October 2025 [AWS](https://aws.amazon.com/about-aws/whats-new/2025/10/amazon-bedrock-agentcore-available)
  - MCP OAuth/CIMD in the spec [MCP spec](https://modelcontextprotocol.io/specification/draft/basic/authorization)
  - Lab admin connector controls and Compliance APIs [Claude Enterprise](https://claude.com/solutions/enterprise); [OpenAI release notes](https://help.openai.com/en/articles/10128477-chatgpt-enterprise-and-edu-release-notes)
- **Paid platform features, GA:**
  - Microsoft Agent 365, $15/user/month or in E7 [Microsoft](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)
  - AgentCore Policy (Cedar, gateway-enforced) [AWS](https://aws.amazon.com/about-aws/whats-new/2026/03/policy-amazon-bedrock-agentcore-generally-available/)
  - Okta for AI Agents [Okta](https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/)
  - Kong MCP ACLs and audit, enterprise tier [Tray.ai](https://tray.ai/blog/best-mcp-gateways/)
- **Partial, preview or rolling out:**
  - Microsoft cross-cloud registry sync (preview, inventory only) and Claude Code / Copilot CLI discovery ("soon") [Microsoft](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/)
  - Google semantic governance policies (Preview) and Agent Registry (Public Preview) [Google release notes](https://docs.cloud.google.com/gemini-enterprise-agent-platform/release-notes)
  - SailPoint runtime authorization, kill switch and Agent Audit (GA by Nov 1 or year-end) [Futurum](https://futurumgroup.com/insights/sailpoint-bets-on-identity-to-govern-ai-agents-at-navigate-2026/)
- **Open gaps (standards level):**
  - Enforceable delegation chains (RFC 8693 actors informational; OBO-for-agents draft expired) [WorkOS](https://workos.com/blog/oauth-on-behalf-of-ai-agents)
  - Agent transaction tokens (individual draft) [IETF](https://datatracker.ietf.org/doc/draft-araut-oauth-transaction-tokens-for-agents/)
  - A2A multi-hop identity loss [A2ABreak](https://arxiv.org/pdf/2609.10871)
  - Action-level logs missing from OpenAI compliance logs [OpenAI Help](https://help.openai.com/en/articles/11752874-chatgpt-agent)
  - NIST guidance still in the concept stage [NCCoE](https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization)

### Inferences
- **Do not build:** agent IdP or SSO, MCP OAuth servers, single-cloud gateway policy, or a basic agent registry. These are bundled by Okta, Microsoft, AWS, Google and the labs.
- **Contested (crowded):** cross-platform agent discovery and inventory, IGA-style reviews and kill switch. SailPoint, Veza/ServiceNow, Saviynt, Okta, MuleSoft and Microsoft are all moving here, and a startup would need a clear wedge.
- **Plausible startup ownership (with caveats):**
  - a neutral, tamper-evident **action-level audit / evidence ledger** spanning Claude, ChatGPT, Copilot, Bedrock, Vertex and custom MCP agents, which ingests the vendor Compliance APIs, OTel streams and gateway logs
  - **delegation-chain provenance** (who authorized which agent to do what, across hops), built early on transaction tokens and ID-JAG
  - **intent/semantic permission checks** and policy-as-code that compiles down to each platform's native engine (Cedar for AgentCore, Entra Conditional Access, Google IAM governance) instead of replacing them
  - **coding/local agent governance**, where Microsoft says Claude Code discovery is "soon" and Claude Code logs are local by default
  - **compliance mapping** to Gartner guardian-agent, Forrester AEGIS and the forthcoming NIST guidance
- **Window risk:** given the pace (Okta, Microsoft and AWS all went GA in about six months of 2026, plus three acquisitions in 11 months), any gap above could be closed or acquired within 12-18 months. Acquisition is a realistic exit path for a startup (Veza, C1.ai and CyberArk precedent).

### Gaps
- None of the vendors' per-agent or per-call pricing (AgentCore Policy, Google Agent Gateway) was confirmed, so a TCO comparison against a startup's pricing is not possible from these notes.
- No customer-adoption data was found (how many enterprises actually run Agent 365 or AgentCore Policy in production).
