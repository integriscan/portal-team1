# Korean competitor landscape for "AI agent permission control + audit trail": original-source verification (as of 2026-10-29)

## Q1. Company-by-company verification against original sources

### Takeaway
Only one Korean product is **shipping, documented and priced** for agent tool-call (MCP) authorization plus audit: **QueryPie ACP "MCP Access Control (MAC)"**. It has been GA since ACP 11.6.1 (2026-03-23). SoftCamp's SHIELD AI Gateway has the most complete *design* (agent NHI, delegation, credential brokering, per-call "on whose authority" logging), but it has only been shown at events. Kuntech ASH (announced 2026-10-27), RaonSecure OneAccess/AAM, MonitorLab MCP control and Netz+Softfreak are all announced, roadmap or in development. Several claims in the earlier snippet-based census were wrong or unverifiable:
- Tynapse is a runtime trust and audit layer for answers and actions, not an authorization product. Its ₩4.5bn seed is now verified.
- "SAISS" does not appear in the cited Newsis original or any other source.
- Kuntech EndForce *does* claim allow / ask-human / block. However, the CEO says runtime control is still in preparation.
- Shinhan is a QueryPie investor, not a customer, and nothing supports "company-wide".
- AIM Intelligence's own product pages claim per-agent, per-tool authorization plus per-action audit, so it moves up to B.
- No vendor claims mapping to the 금융보안원 (FSI) criteria.

### Cited Findings

**Source access (read first).**
- Pass 1: the session network allowed only querypie.com, docs.querypie.com, etnews, boannews, dailysecu, ddaily and hankyung.
- Pass 2: the coordinator opened the network. I then also loaded:
  - Media: zdnet.co.kr, newsis.com, mt.co.kr, fnnews.com, sedaily.com, byline.network, platum.kr, wowtale.net.
  - Startup database: thevc.kr (summary only; funding fields are behind a paywall).
  - Vendor sites: aim-intelligence.com (home, /starfort, /agentic, /ko/about), cremit.io (home, /product, /customers, /changelog), raonsecure.com (home), samsungsds.com (home).
- **Still unreachable in pass 2:** softcamp.co.kr (HTTP 502), kuntech.co.kr (tunnel failure), eroun.ai (403), monitorlab.co.kr (no connection).
- Every finding below comes from a full page I actually loaded. The only exceptions are items explicitly marked "NOT verified".

**1. QueryPie (쿼리파이): ACP + MCP Access Control (MAC), AI Pack, AIP**
- The ACP docs describe MAC as role- and policy-based control over which users or groups can reach which registered MCP servers and **which tools** on them. It is "available in 11.6.1 and later", and role expiry times can be set — [QueryPie docs: MCP Access Control](https://docs.querypie.com/ko/administrator-manual/mcp-server/mcp-access-control)
- Release notes record "[MAC] MCP Access Control 기능 추가" in the 11.6.1 release dated 2026-03-23. Later releases add:
  - 2026-04-21: "MCP를 통해 DAC/SAC/KAC 감사 로그를 조회할 수 있는 도구"
  - 2026-07-02: allow/deny policy YAML; "[AI Chat] MCP tool 호출 시 사용자 승인 기반 실행과 자동 실행 모드"; "[MAC] Claude Code/Cursor 등 MCP Client 인증 및 등록 흐름 오류 수정"
  - 2026-08-25: "[MAC] MCP Server 사용 시 사유 입력을 강제하는 정책 지원" and "MCP Request Audit 및 SIEM 연동"
  - Source: [QueryPie release notes 11.6.x](https://docs.querypie.com/ko/release-notes/11.6.0-11.6.6)
- Users connect their MCP client to a QueryPie proxy endpoint instead of the upstream server. The docs give the example `claude mcp add --transport http querypie-mac "https://<FQDN>/mac/mcp"`. Users see only the tools their role and policy allow. A MAC licence is required. The docs say "현재 관리자만 Role을 부여할 수 있고 workflow를 통한 권한 신청은 할 수 없습니다" (page last updated 2026-08-26) — [QueryPie docs: Using remote MCP servers through MAC](https://docs.querypie.com/ko/user-manual/mcp-access-control/using-remote-mcp-servers-through-mac)
  - The 11.6.6 notes (2026-08-25) mention a "Workflow 신청 목록" for MCP roles, so workflow support may be newer than the docs page.
- Audit:
  - Request Audit logs client-originated requests and PROXY_UPSTREAM requests, including server, transport, upstream endpoint and target tool name. Each request is recorded as ALLOW/deny with a separate status, and the payload is stored as JSON — [Request Audit](https://docs.querypie.com/ko/administrator-manual/audit/mcp/request-audit)
  - Role grant/revoke history is kept in "MCP Server Role History". Client audit and payload capture are on by default. MCP responses can be masked with regex (25 preset patterns), and a forward proxy is available for closed networks — [MAC General Configurations](https://docs.querypie.com/ko/administrator-manual/mcp-server/mac-general-configurations)
- Deployment: ACP runs on cloud **and on-prem** (Docker). A free Community Edition supports up to 5 users — [QueryPie ACP docs home](https://docs.querypie.com/ko)
- **Pricing (published):**
  - ACP Community is free (5 users).
  - ACP Standard is **$50/user/month**, minimum 10 users, annual billing only. It includes "MCP 액세스 제어" and "요청 및 승인 워크플로우".
  - ACP Enterprise is quote-based.
  - AIP Business is **$650/month** (20,000 credits, 30 custom agents, audit log up to 90 days, MCP access control, agent access control).
  - AIP Enterprise is quote-based (audit log up to 180 days).
  - Sources: [ACP plans](https://www.querypie.com/ko/plans/acp); [AIP plans](https://www.querypie.com/ko/plans/aip)
- AI Pack (2026) exposes ACP access control as MCP for "클로드, 커서, 사내 AI 에이전트". Through it agents can query data, request access and read audit logs within existing policy. Extra approvals follow existing workflows, and all requests and results are written to the audit log — [Dailysecu (QueryPie AI Pack)](https://www.dailysecu.com/news/articleView.html?idxno=207358)
- Company timeline and funding:
  - 2018: Kakao Investment funding.
  - 2020: Y Combinator funding; "Delivered QueryPie to Yanolja, KakaoPay, Dunamu".
  - 2021: "$17.75M in Preferred Seed Round".
  - 2023: "$5.81M funding by Korea Credit Guarantee Fund".
  - 2024: strategic investment from Salesforce Ventures, Z Venture Capital, Murex Partners and Shinhan Venture Investment.
  - 2025: AIP launched. 2026: ACP AI Pack launched.
  - Source: [QueryPie About Us (EN)](https://www.querypie.com/en/about-us)
- Cumulative funding was ₩38bn as of May 2024. The company was founded as Chequer in 2016 in Silicon Valley — [Digital Daily 2024-06-10](https://m.ddaily.co.kr/page/view/2024061016515847357)
- Customers:
  - The site's VOC (customer voice) links name LG U+ (Daniel Ku), quoted on cloud infra access control — [QueryPie KO home, VOC links](https://www.querypie.com/ko)
  - Sedaily (2025-05-07) reports "130여곳의 고객사" as of end-April 2025. Named customers: Kakao, HYBE, LG U+, KakaoPay, SK Shieldus, Toss, Musinsa, Dunamu, Yanolja, Allganize, Superb AI and Uprise. Other figures in the same article:
    - Cumulative funding ₩39bn, from Atinum, Murex, Kakao Investment, KB Investment, Mirae Asset Venture, Shinhan Venture Investment, Saje Partners and YC.
    - 2024 revenue ₩6.5bn, with a 2025 target of ₩13bn.
    - Enterprise "AI 허브" launching mid-May 2025, with MAC as its core ("요청을 사전에 검증하고, 실행 결과도 실시간으로 추적 감사").
    - Source: [Sedaily 2025-05-07](https://www.sedaily.com/article/14062889)
  - **Corrections:**
    - "Shinhan" is an *investor* (Shinhan Venture Investment), not a named customer.
    - "Company-wide" deployment is not stated for Kakao or Toss.
    - No named customer of the **MCP/MAC** module specifically was found, and no named bank customer at all.
- FSI criteria mapping: none found on any QueryPie page opened.

**2. SoftCamp (소프트캠프): SHIELD AI Gateway (실드 AI 게이트웨이)**
- First unveiled at Solution Day 2026 on 2026-07-02 as one of two new solutions, alongside Security365 Compliance Studio. It "manages internal AI agents' tool calls", so that what AI may do is set by security policy, not by the AI — [etnews 2026-07-02](https://www.etnews.com/20260702000290); [Digital Daily 2026-07-02](https://www.ddaily.co.kr/page/view/2026070215402500272)
- Most detailed vendor description (Boannews zero-trust report, published 2026-10-27):
  - "이 게이트웨이는 에이전트에게 열쇠를 주지 않는다". It verifies agent identity per request, calls the target on the agent's behalf and returns only the result.
  - Functions: central credential management; NHI-based **delegation verification**; per-permission tool exposure and least privilege (**patent pending**).
  - Logs "누구의 권한으로 무엇에 접근했는지도 호출 단위로".
  - Cutting the identity on resignation or transfer blocks access.
  - An LLM classifies MCP tools as read or write and drafts policy, which admins review and approve in bundles. Unauthorized tools are hidden from the agent rather than blocked.
  - Source: [Boannews 2026 Zero Trust report](https://www.boannews.com/news/articleView.html?idxno=146775)
- At CSK 2026 (Sept 16–18) it was shown as a control point that protects credentials when agents call internal systems, APIs and MCP, and evaluates requester, tool, data and action risk. SoftCamp demoed it at its booth — [Boannews 2026-09-16](https://www.boannews.com/news/articleView.html?idxno=145893); [Dailysecu 2026-09-16](https://www.dailysecu.com/news/articleView.html?idxno=208508)
- In a CEO interview on 2026-07-02 he said "올해 이같은 보안 체계로 전환 및 관련 솔루션을 출시할 계획" (launch planned for 2026) and "벌써부터 몇몇 고객들이 전화를 주고 있는 상황". SoftCamp's *existing* financial customers (for its other products) include Hana, KB and Shinhan financial groups — [ZDNet 2026-07-02 (CEO)](https://zdnet.co.kr/view/?no=20260702214329); [ZDNet 2026-07-02](https://zdnet.co.kr/view/?no=20260702150401)
- On the same day SoftCamp also launched:
  - **SHIELD ID** (extended with non-human identity authentication for agents)
  - **AI Agent Sandbox** (controls whether a local agent can read encrypted DRM documents)
  - The gateway itself "사용자 PC나 AI 에이전트에 시크릿 키를 직접 넘기지 않고" decides which MCP/API an agent may call.
  - Sources: [Newsis 2026-07-02](https://www.newsis.com/view/NISX20260702_0003693406); [MT 2026-07-02](https://www.mt.co.kr/article/2026070211141870538); [FN 2026-09-16](https://www.fnnews.com/news/202609161316455734)
- Status: "공개", "시연" and "소개" only. No GA date, pricing or named customer appeared in any opened article. Supported agents, on-prem support and FSI mapping are not stated.
- **"SAISS (SOFTCAMP AI Security Suites)": NOT found.** The name is absent from the Newsis original that the earlier census cited, and from ZDNet, MT, FN, etnews and Digital Daily. Treat it as an error. The products are SHIELD AI Gateway, SHIELD ID (NHI), AI Agent Sandbox and SHIELD Gate.
- Partnership: MOU with AIM Intelligence on 2026-01-26 to co-develop and market enterprise AI security, centred on SHIELD Gate (RBI) plus AIM guardrails — [Dailysecu 2026-01-27](https://www.dailysecu.com/news/articleView.html?idxno=204677)

**3. Kuntech (쿤텍): ASH (애쉬), AEZIZ, NEXA**
- Strategy and products presented 2026-10-27:
  - ASH evaluates AI decisions and execution requests in real time and controls risky actions **before execution**.
  - Components: ModelGate (model verification), RunWatch (real-time agent behaviour monitoring), EndForce (controls policy-violating actions) and Enterprise ("자산과 기록을 관리").
  - Source: [Dailysecu 2026-10-27](https://www.dailysecu.com/news/articleView.html?idxno=209089)
- Press conference detail:
  - Kuntech **completed** a static-analysis tool that identifies the models, tools and external services connected to an agent. It scores the risk of granted permissions (file access, command execution, external calls) and checks whether only approved MCP/external tools and allowed folder/file permissions are used.
  - ASH policy evolution: "현재는 검증된 정책을 담당자가 승인한 뒤 적용하는 구조". Auto-applied self-evolving policy is still in development.
  - Target sectors: public, defence, finance and manufacturing.
  - Source: [Boannews 2026-10-27](https://www.boannews.com/news/articleView.html?idxno=146773)
- RunWatch "운영 중인 AI 에이전트 동작과 도구 호출을 실시간 관찰". ASH is pitched together with NEXA for the public-sector AI Act — [Digital Daily 2026-10-08](https://www.ddaily.co.kr/page/view/2026100815403026790)
- ASH is described as an "엔터프라이즈 AI 에이전트 보안 플랫폼" shown at a demo booth — [Dailysecu 2026-10-06](https://www.dailysecu.com/news/articleView.html?idxno=208740)
- Japan push: ASH, AEZIZ and NEXA are offered there, with a partner contract "목전" — [Boannews 2026-10-23](https://www.boannews.com/news/articleView.html?idxno=146677)
- Funding: Series A from Hyosung Ventures, NH Venture Investment and NH Investment & Securities (amount not disclosed). The company says it grew without outside investment before this round — [Dailysecu 2025-08-20](https://www.dailysecu.com/news/articleView.html?idxno=168927)
- ZDNet original: ASH = "Agentic Security Harness".
  - EndForce "정책에 따라 실행을 허용하거나 **사람의 승인을 요청하거나** 차단". Per-action human approval is **confirmed as a claimed feature**.
  - Enterprise manages "기업 내 AI 현황과 실행 기록".
  - ModelGate outputs a CycloneDX AI-BOM.
  - Kuntech has done open-source/SBOM work for financial customers.
  - Source: [ZDNet 2026-10-27](https://zdnet.co.kr/view/?no=20261027165145)
- CEO Q&A on the same day:
  - Works with external and **on-prem** models.
  - Monitors "LLM과 MCP의 입출력 통신"; accounts are pre-registered ("회사가 모르는 AI 에이전트가 없어야"); goal is to keep activity records and block on risk.
  - Controls inputs and outputs, not model internals; built on 2.5M+ red-team cases.
  - Claims to be "90% 이상" of global competitors' features.
  - "운영 단계의 모니터링과 통제는 아직 **준비 단계**이며 내년에 시장이 형성될 것". Some financial firms use its AI-BOM, but ASH runtime is not yet deployed.
  - Source: [ZDNet 2026-10-27 (Q&A)](https://zdnet.co.kr/view/?no=20261027131832)
- Not stated anywhere: customers for ASH, pricing, specific agents supported (Claude Code, Cursor, Codex) and FSI mapping.

**4. RaonSecure (라온시큐어): OneAccess (원억세스), AAM, OneShield (원쉴드)**
- AAM gives each agent a verifiable identity and role scope and restricts it to allowed permissions, using DID from the national mobile ID. The article says "개발도 진행하고 있다" (in development) — [etnews 2026-05-27](https://www.etnews.com/20260527000064)
- Roadmap:
  - 2026-02-24: the company reorganised into an 80-person AI business division. It announced an agentic security automation platform "연내 출시" and an "에이전틱 AI 가드레일" against command hijacking and privilege abuse, with AAM developed in parallel — [Boannews 2026-02-24](https://www.boannews.com/news/articleView.html?idxno=142343); [Dailysecu 2026-02-24](https://www.dailysecu.com/news/articleView.html?idxno=205355)
  - 2026-04-02: MOU with Upstage (Solar LLM). AAM development "착수" — [Boannews 2026-04-02](https://www.boannews.com/news/articleView.html?idxno=142986); [etnews 2026-04-02](https://www.etnews.com/20260402000197)
- At SecuUp on 2026-09-30, RaonSecure introduced OneAccess ("AI 에이전트와 로봇에 고유 신원을 부여하고 권한과 위임 범위를 관리"), OneHacker, OneTag, OneSoar and OneShield. Status was not given as GA — [Digital Daily 2026-09-30](https://www.ddaily.co.kr/page/view/2026093015222449217); [Dailysecu 2026-09-30](https://www.dailysecu.com/news/articleView.html?idxno=208653)
- OneShield is an input/output guardrail between users and genAI/agents (prompt injection, PII masking). It received the KOSA "AI product/service confirmation" — [Boannews (OneShield KOSA)](https://www.boannews.com/news/articleView.html?idxno=146392)
- RaonSecure leads the MSIT/NIPA physical-AI multi-layer security R&D project (2026–2030, 7 organisations). Its role is robot/agent identity and permission management, integrated permission and activity history, and execution-time blocking of out-of-scope commands — [Dailysecu 2026-10-15](https://www.dailysecu.com/news/articleView.html?idxno=208883)
- RaonSecure's homepage markets an "Agentic AI Platform / ONE AI" with:
  - "AI 에이전트·로봇 신분증 발급 및 권한 관리(AAM)"
  - "에이전트 간 상호 인증"
  - real-time verification of agent behaviour and policy
  - No GA date or docs — [RaonSecure home](https://www.raonsecure.com)
- FN confirms the R&D scope: "권한과 위임 관계, 활동 이력을 통합 관리" — [FN 2026-10-15](https://www.fnnews.com/news/202610150924562649)
- No named customers, pricing or FSI mapping found.

**5. Netz (넷츠) + Softfreak (소프트프릭)**
- On 2026-08-11 Netz acquired management control of Softfreak. It plans to extend IAM/SSO to machine/service accounts and **AI agents** as non-human identities, linking authentication, permissions, server/OS access control and API security. Softfreak's references are public-sector (TS, Korea Medical Device Safety Information Institute) — [etnews 2026-08-11](https://www.etnews.com/20260811000248)
- On 2026-10-12 Softfreak announced a **registered** patent, "AI 게이트웨이가 실행하는 프롬프트 및 시스템 행위에 대한 보안 제어 방법". Its function is to control and **trace** prompts, permissions and data/system use. The patent will become a feature of an LLM/AI gateway "개발 중" and is still under technical validation — [Digital Daily 2026-10-12](https://www.ddaily.co.kr/page/view/2026101209470207946)
- Status: roadmap. No customers for the agent product.

**6. Tynapse (티냅스): Runtime Trust Layer ("AI Trust Layer")**
- The startup was 7 months old as of 2026-03-24. It is developing a "런타임 트러스트 레이어", a compliance layer that applies each financial institution's rules in real time. It works in three stages (detect, judge, **audit**) and blocks or edits responses while generating **audit evidence**. Focus: hallucinations and policy-violating *responses*. PoC with "국내 주요 시중은행" (unnamed). AWS AI Pitch Competition top-6 at NVIDIA GTC 2026 — [Boannews 2026-03-24](https://www.boannews.com/news/articleView.html?idxno=142788)
- Partnership with Everspin on AI Trust Security, including red-teaming — [Dailysecu 2026-07-07](https://www.dailysecu.com/news/articleView.html?idxno=207486)
- **Seed ₩4.5bn verified** (2026-04-28): lead Mirae Asset Venture Investment, with Mirae Asset Capital, Murex Partners and Kakao Ventures. Earlier funding: ₩0.2bn angel and a Mashup Ventures pre-seed. Cumulative **₩4.9bn**.
  - The "AI 트러스트 레이어" "AI 에이전트의 답변과 행동을 실행 단계에서 검증·통제". A two-stage detect/judge design targets hallucination, data leakage and jailbreak.
  - "모든 의사결정 과정을 **법적 효력을 갖춘 감사 기록(Audit Trail)** 형태로 저장".
  - PoC with a commercial bank. CEO is a former financial-sector CTO.
  - Sources: [MT 2026-04-28](https://www.mt.co.kr/future/2026/04/28/2026042808505174281); [Platum](https://platum.kr/archives/285962)

**7. AIM Intelligence (에임인텔리전스): Stinger, Starport/Starfort (Guardian), AIM Guard, AIM Supervisor**
- **Series A ₩10bn** (2026-04-10): Samsung Venture Investment led, with Mirae Asset Capital, Forest Ventures and Smilegate Investment. Cumulative about ₩12bn. Positioning: red-team plus guardrail — [etnews 2026-04-10](https://www.etnews.com/20260410000082)
- **Strategic round** about a month later from LG Electronics, Hyundai Motor Group ZER01NE Ventures and Naver D2SF. The company says it has supplied "금융·통신·제조·공공 분야 국내외 20여개 고객사" — [Digital Daily 2026-06-10](https://m.ddaily.co.kr/page/view/2026061009333525382)
- Pre-A (2025-08): Mirae Asset Capital led, with the Bluepoint LG U+ strategic fund, Z Venture Capital and Mashup Ventures. Cumulative ₩1.85bn.
  - "KB국민카드, KB증권, 우리은행 등이 보안 진단을 거쳐 … AI 보안 솔루션을 도입".
  - KT and LG AI Research appear as **reliability-evaluation project** partners. LG U+ is an investor and pilot partner, not a stated buyer.
  - Products at that time: AIM Red, AIM Guard (I/O filtering) and AIM Supervisor ("AI 에이전트의 판단 구조를 감시").
  - Sources: [etnews 2025-08-06](https://www.etnews.com/20250806000358); [Dailysecu 2025-08-06](https://www.dailysecu.com/news/articleView.html?idxno=168586)
- Starfort "AI의 입출력과 도구 호출, 시스템 실행 과정에서 발생하는 위험을 탐지하고 제어", in an "AIM Control Loop" with Stinger. The company says it is "developing enterprise products" — [Hankyung 2026-09-23](https://www.hankyung.com/article/202609233087i)
- Boannews spells the defence platform "스타포트(Starport)" with guardrail model "가디언" — [Boannews 2026-09-07](https://www.boannews.com/news/articleView.html?idxno=145701). Naming is inconsistent (Starport vs Starfort).
- **Vendor product pages (pass 2) make A-level claims:**
  - Starfort "Control abnormal API calls by autonomous agents".
  - "Tool-Call Interception & Authorization": inspects every tool call and its arguments before execution; Guardian "validates privileges … blocks unauthorized actions"; "Privilege validation per tool & per agent".
  - Supports MCP servers, APIs, code execution and DB access.
  - "Per-action audit trails with timestamps", chain-of-thought logging, Opticon dashboard.
  - "Per-agent, per-tool policy configuration".
  - Sources: [AIM /agentic](https://www.aim-intelligence.com/agentic); [AIM /starfort](https://www.aim-intelligence.com/starfort)
- Deployment and coverage claims:
  - Deploys via API/SDK, as a self-hosted server proxy (Bedrock, Azure, Vertex, local models via LiteLLM/Kong), or a "Desktop Agent: endpoint control for ChatGPT, Claude, Gemini, Cursor, Copilot" (Windows/Mac).
  - Homepage claims coverage of "coding agents like Claude Code and GitHub Copilot".
  - Sources: [AIM /starfort](https://www.aim-intelligence.com/starfort); [AIM home](https://www.aim-intelligence.com)
- Missing from the product pages: human-approval step, agent identity issuance, public pricing, docs and GA date of the agent module.
- Customer statements:
  - The company has "규모 있는 유료 고객사" in enterprise, finance and public sectors — [Byline 2026-06-10](https://byline.network/2026/06/10-650/)
  - "주요 금융권 및 통신업계에 보안 솔루션을 제공" — [ZDNet 2026-04-10](https://zdnet.co.kr/view/?no=20260410125429)
- The Korean about page names the products Stinger and **Starfort** ("Starport" in Boannews is a misspelling) — [AIM 회사 소개](https://www.aim-intelligence.com/ko/about)

**8. Samsung SDS (삼성SDS): FabriX 2.0**
- At the AX Summit (2026-05-29) a October launch of FabriX 2.0 was announced. Features:
  - Agent Directory Service and multi-agent orchestration.
  - Marketplace where skills and MCP are registered "권한 있는 사용자가" use.
  - Agent lifecycle management and security governance.
  - "에이전트 등록 시점부터 사용 도구·시스템 접근 권한·리스크 여부를 지속 모니터링하는 가드레일 체계". Red-team and guardrail are mandatory for finance and public deployments.
  - Woori Bank is building about 300 agents for 27 tasks on FabriX.
  - Source: [Digital Daily 2026-05-29](https://www.ddaily.co.kr/page/view/2026052915241437388)
- 2026-10-29 earnings call: FabriX 2.0 launches "이번 주"; "사용량, 비용, 권한을 한눈에 관리" — [Digital Daily 2026-10-29](https://www.ddaily.co.kr/page/view/2026102915155666454)
- Samsung SDS disclosed R&D projects "AI 에이전트를 위한 적응형 안전 기술" and "AI 에이전트를 위한 보안기술 연구". The same article notes that LG CNS (harness engineering, AgenticWorks permission governance) and SK AX (per-agent least privilege, human approval for high-risk tasks, decision tracing) offer comparable *methodologies* — [etnews 2026-08-19](https://www.etnews.com/20260819000269)
- ZDNet confirms the launch "금주 내". Samsung SDS will roll out to affiliates first and to external customers after validation — [ZDNet 2026-10-29](https://zdnet.co.kr/view/?no=20261029145947)
- Governance is embedded in Samsung SDS's own platform, not a standalone control layer for third-party agents.

**9. MonitorLab (모니터랩): verified as MonitorLab, separate from SoftCamp**
- GenAI Security update (2026-07-16):
  - 26 sensitive-topic categories.
  - Controls extended to native apps and **CLI** environments.
  - Access control for ChatGPT, Gemini and Claude.
  - **Planned** MCP control that identifies caller, target server and arguments, blocks non-whitelisted calls, and keeps all call history as audit logs ("설계된다").
  - Source: [Dailysecu 2026-07-16](https://www.dailysecu.com/news/articleView.html?idxno=207640)
- The Boannews report confirms "모니터랩은 MCP … 트래픽을 통제해 허용된 도구만 호출되도록 하고, 호출 기록을 감사 로그로 남기는 기능을 준비하고 있다". In that report this is a MonitorLab paragraph; SHIELD AI Gateway appears in a *separate* SoftCamp paragraph. MonitorLab supports both SaaS and on-prem — [Boannews 2026-10-27](https://www.boannews.com/news/articleView.html?idxno=146775)
- The CEO said GenAI Security ships in both on-prem and subscription models and that the company will "선제적으로 대비" for MCP agent security — [Boannews 2026-09-09](https://www.boannews.com/news/articleView.html?idxno=145746)

**10. PRIBIT AI (프라이빗에이아이, formerly 프라이빗테크놀로지)**
- Renamed on 2026-07-09 to become an "AI 실행 통제 플랫폼" company for public, finance and defence. No product name, spec or customer was given — [etnews 2026-07-09](https://www.etnews.com/20260709000333); [Dailysecu 2026-07-09](https://www.dailysecu.com/news/articleView.html?idxno=207522)
- The Boannews report describes only PacketGo ZTNA (user, device and app access), with no agent product — [Boannews 2026-10-27](https://www.boannews.com/news/articleView.html?idxno=146775)

**11. Cremit (크리밋)**
- The CEO presented on non-human identity risk at FISCON 2025: NHI outnumber humans 45x; 70% of API keys have no expiry; discovery is the first step — [Boannews 2025-11-20](https://www.boannews.com/news/articleView.html?idxno=140464)
- THE VC: founded April 2023, unlisted. Funding fields are behind a paywall, so the amount is still **NOT verified** — [THE VC Cremit](https://thevc.kr/cremit)
- Product:
  - Secret and NHI discovery across code, collaboration tools and cloud.
  - Validity checks; AWS/GCP "Permission Analyzer"; vault inventory.
  - Its own MCP tools for the platform, plus a Codex connection guide.
  - Homepage states a direction toward "common credential controls to CLI, desktop and agent workflows", citing its MCP study ("of 22,027 remote MCP servers opened a session with no header authentication").
  - Sources: [Cremit home](https://www.cremit.io/); [Cremit product](https://www.cremit.io/product); [Cremit changelog](https://www.cremit.io/changelog)
- Customer stories include **Next Securities** (넥스트증권), 8Percent (regulated lending) and SBSi — [Cremit customers](https://www.cremit.io/customers); [Next Securities story](https://www.cremit.io/customers/next-securities)
- No agent-runtime authorization product.

**12. Eroun & Company (이로운앤컴퍼니): SAIFE X**
- Pre-A **₩2bn** from KB Investment (August 2025). SAIFE X lets only approved AI be used, blocks PII and secrets in prompts, and provides monitoring and **audit trails** for all AI use — [etnews 2025-10-23](https://www.etnews.com/20251023000276)
- SAIFE X v1.0 is listed on the PPS Digital Service Mall and holds GS grade 1. Its "AI Control Tower" logs AI use by user, department and model — [Dailysecu 2026-05-07](https://www.dailysecu.com/news/articleView.html?idxno=206617)
- The CEO says bot and agent **LLM API calls** are routed through the same gateway, recording which department's agent called which model, with per-API-key quotas. This logs model calls, not tool or action calls — [Dailysecu 2026-09-13](https://www.dailysecu.com/news/articleView.html?idxno=208414)
- The CEO says SAIFE X was supplied to "국내 주요 금융기관", and that a major bank's AI assistant was red-teamed before launch (bank unnamed) — [Dailysecu 2026 New Year interview](https://www.dailysecu.com/news/articleView.html?idxno=203985)

**13. Saltware (솔트웨어): Sapie-Guardian (사피가디언)**
- Patent for a sensitive-data detection system and a **supply contract with a financial company** (unnamed). It inspects prompts and attachments before they reach external genAI and "Claude Code, Codex CLI, Gemini CLI 같은 AI 개발 도구를 통한 유출 위험에도 대응". It is DLP, not action authorization — [Dailysecu 2026-10-26](https://www.dailysecu.com/news/articleView.html?idxno=209075)

**14. Newly surfaced players (not in the earlier census)**
- **Somansa (소만사) Privacy-i AIDR** (2026-08-26):
  - An AIDR feature added to its EDR. It provides asset management, visibility and **permission management** for "shadow AI agents" on PCs (Claude, OpenAI and Gemini agents, Hugging Face downloads, in-house agents).
  - The company expects EDR to secure **audit logs** of agent activity and control them in real time.
  - PoCs at large Korean enterprises; next-gen version due **Q4 2026**.
  - Source: [Dailysecu 2026-08-26](https://www.dailysecu.com/news/articleView.html?idxno=208197)
- **WINS (윈스테크넷) SNIPER AIVAX**: prompt-security product described as "프롬프트 보안 △MCP 보안 △네트워크 보안" with audit and history management, on-prem or cloud. The MCP part is not specified — [Boannews AI security report 2026-09-25](https://www.boannews.com/news/articleView.html?idxno=146038)
- **AIDEEP (에이아이딥) DeepGenGuard**: genAI gateway with RBAC on vector-DB retrieval and an integrated audit dashboard. Guardrail/DLP class — [Boannews AI security report 2026-09-25](https://www.boannews.com/news/articleView.html?idxno=146038)
- **Logpresso AIP**: a SOC agent platform in which irreversible commands (account lock, IP block) need human approval. This is "AI for security", not control of third-party agents — [Boannews AI security report 2026-09-25](https://www.boannews.com/news/articleView.html?idxno=146038)
- **Sparrow MCP** is an AI code-security assistant, not an agent-control product — [Boannews 2026-10-19](https://www.boannews.com/news/articleView.html?idxno=146488)
- **Crowdworks / Suresoft consortium**: MSIT/NIA project to build an AI-agent safety and reliability **evaluation** framework, including MCP tool-call sequence validation and a 7,000+ item dataset, due end-2026 — [Digital Daily 2026-09-03](https://www.ddaily.co.kr/page/view/2026090308573576655)
- **Build-it-yourself signal:** Samsung Electronics DS has 10,000+ developers using Claude Code via Amazon Bedrock. Samsung DS and AWS Korea built their **own** "agent gateway": short-lived keys, per-team model and call limits, token and cost logging. No Korean vendor was involved — [Digital Daily 2026-09-30](https://www.ddaily.co.kr/page/view/2026093016340947942)

**15. FSI (금융보안원) criteria, for mapping checks**
- 「금융분야 AI 에이전트 보안 평가기준」 has **6 areas and 17 items**. Inspection now covers the execution layer:
  - execution permission and isolation
  - external tool execution and approval procedures
  - task scope and result verification
  - autonomy limits and emergency stop
- New items include tool-permission control, sandbox, human approval and kill switch. It will be piloted through end-2026 and become the formal standard from **2027**. Final criteria will be published in the 2026 "AI REDTEAM REPORT".
- Sources: [Dailysecu 2026-10-07](https://www.dailysecu.com/news/articleView.html?idxno=208760); [Boannews 2026-10-07](https://www.boannews.com/news/articleView.html?idxno=146243); [etnews 2026-10-07](https://www.etnews.com/20261007000233)
- Newsis confirms "6개 분야, 17개 점검항목" — [Newsis 2026-10-07](https://www.newsis.com/view/NISX20261007_0003816900)
- No opened vendor article or page claims mapping to these criteria. A targeted search on accessible Korean security media found none either.

### Inferences
- QueryPie is the clear Korean front-runner on shipping evidence: GA date, versioned docs, published per-user price and on-prem. Its model is **"the human's role governs the agent"**: the MCP client authenticates as the user, with no separate agent identity. This is PAM extended to MCP, not agent-native identity.
- SoftCamp's design is the most agent-native (NHI plus delegator, credential brokering, call-level "on whose authority" logs). Without a GA date or customers it should be treated as a credible near-term entrant, not an installed competitor.
- Most "A-class" Korean activity clusters in mid-to-late 2026 and comes from incumbents adding a module (PAM, RBI, DID, SBOM, SASE, EDR). The startups (AIM, Tynapse, Eroun) sit in guardrail, response-compliance and usage-audit territory.

### Gaps
- Still could not open the SoftCamp, Kuntech, Eroun and MonitorLab vendor sites, so there are no first-party product pages or docs for those four.
- Cremit funding amount (THE VC paywall) is unverified.
- Innoforest was not tried.
- THE VC and Innoforest category searches for 2026-founded "AI 에이전트 권한 / MCP 보안" startups could not be run. A sweep of accessible security media found no additional dedicated startup.

## Q2. Corrected comparison table (closeness grade)

### Takeaway
Grades: **A** = core is agent authorization plus audit; **B** = substantial feature; **C** = adjacent guardrail or DLP; **D** = marginal.

Main changes from the earlier census:
- Tynapse falls from B to **C+** (runtime trust layer with an audit trail, but no authorization).
- AIM Intelligence stays **B**. Its own pages claim per-agent, per-tool authorization and audit, but there are no docs, GA date or approval step.
- MonitorLab's MCP item is confirmed as MonitorLab's own roadmap.
- QueryPie's A is upgraded to **A (GA, documented, priced)**.
- Somansa (**B**) is added.

### Cited Findings

Column key: **Agent ID** = separate agent identity. **Approval** = human approval.

| Company | Product | Agent ID | Tool/MCP authz | Approval | Audit log | On-prem | Agents named | Status | Price | Named customers (fin.) | Funding | FSI map | Grade |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| QueryPie | ACP MCP Access Control (MAC); AI Pack; AIP | No: user role/policy governs the MCP client | **Yes**: per server/tool, allow/deny YAML, role expiry | Partial: forced reason input (Aug 2026); approval mode in its own AI Chat; ACP request/approval workflow | **Yes**: per request incl. payload, upstream tool name, role history, SIEM | Yes | Claude Code, Cursor, VS Code, LibreChat (docs and releases) | **GA** since 11.6.1 (2026-03-23) | ACP Std $50/user/mo; AIP Biz $650/mo | No MAC-specific customer; company-level Yanolja, KakaoPay, Dunamu (2020), LG U+ (VOC) | $17.75M seed (2021), KCGF $5.81M, 2024 SIs; ₩38bn cumulative (May 2024) | None | **A** |
| SoftCamp | SHIELD AI Gateway (+ SHIELD ID NHI, AI Agent Sandbox) | **Yes**: NHI plus delegator verification | **Yes**: per-permission tool exposure, credential brokering | Admin approves LLM-drafted policies (not per call) | **Yes**: call-level "whose authority, what" | Not stated | Not stated | Unveiled 2026-07-02; CEO: launch "올해"; demoed Sept 2026 | n/a | None for gateway (SoftCamp overall: Hana, KB, Shinhan groups) | Listed | None | **A** (pre-GA) |
| Kuntech | ASH (Agentic Security Harness: ModelGate, RunWatch, EndForce, Enterprise) + AEZIZ agent scan | Pre-registered agent accounts | **Yes**: pre-execution allow/block on LLM and MCP I/O; approved-tool checks (AEZIZ) | **Yes (claimed)**: EndForce can request human approval | "AI 현황과 실행 기록" (Enterprise) | Yes (on-prem models) | Not named | Announced 2026-10-27; runtime control "준비 단계" | n/a | None for ASH (AI-BOM used by some financial firms) | Series A 2025 (Hyosung, NH; amount n/d) | None | **A** (announced) |
| RaonSecure | OneAccess / AAM (+ OneShield guardrail) | **Yes**: DID per agent, delegation scope | Planned (restrict unallowed system and data requests) | Not stated | "권한과 활동 이력 통합 관리" (R&D) | n/a | n/a | In development; shown at SecuUp 2026-09-30; gov R&D 2026–2030 | n/a | None | Listed | None | **B** |
| Samsung SDS | FabriX 2.0 agent governance | Agent registry and lifecycle | Tool/system access permissions monitored from registration | Not stated | Usage, cost, permission dashboard | (Platform) | FabriX agents; MCP in marketplace | Launch "this week" (2026-10-29) | n/a | Woori Bank (FabriX agents, not specifically governance) | Listed | None | **B** |
| Somansa | Privacy-i AIDR | Discovers agents on PCs | Permission management claimed | n/a | Agent activity audit logs (stated direction) | Endpoint | Claude, OpenAI, Gemini agents; in-house | Launched Aug 2026; next-gen Q4 2026 | n/a | Large-enterprise PoCs (unnamed) | Private | None | **B** |
| Netz + Softfreak | LLM/AI gateway (patent) on IAM/SSO + API security | NHI incl. agents (plan) | Planned | n/a | "통제·추적" (patent) | n/a | n/a | Roadmap; patent registered Oct 2026 | n/a | Public-sector (API security, not agents) | Private (acquisition) | None | **B** (roadmap) |
| MonitorLab | GenAI Security (AIONCLOUD) + planned MCP control | No | **Planned**: whitelist on caller, server, args | n/a | Planned for MCP; exists for genAI use | Yes (on-prem + SaaS) | ChatGPT, Gemini, Claude; CLI | DLP live; MCP "준비" | n/a | N2SF pilot (public) | Listed | None | **C** now (A-roadmap) |
| AIM Intelligence | Starfort (Guardian) + Stinger; Desktop Agent | "Per agent" policies (no identity issuance) | **Claimed**: tool-call interception and authorization per tool and per agent; MCP, API, code, DB | Not claimed | **Claimed**: per-action audit trails, CoT logging | Self-hosted proxy option | Claude Code, Cursor, Copilot, ChatGPT, Gemini (vendor page) | Guardrail products live; agent features vendor-page only, no docs or GA date | n/a | **KB국민카드, KB증권, 우리은행** (2025 company claim, guardrail/red-team) | Series A ₩10bn (Samsung VI); strategic round (LG Electronics, ZER01NE, D2SF); ~₩12bn + | None | **B** |
| Tynapse | AI Trust Layer (runtime) | No | No authorization; verifies answers and actions (hallucination, leak, jailbreak) | n/a | **Yes (claimed)**: "법적 효력을 갖춘 감사 기록" | n/a | n/a | In development; bank PoC | n/a | Unnamed commercial bank (PoC) | Seed ₩4.5bn (Mirae Asset VI lead); cum. ₩4.9bn | None | **C+** (borderline B) |
| Eroun & Co. | SAIFE X | No | No (model-call gateway) | n/a | **Yes**: prompts and answers by user, department, model, agent API key | n/a | GPT, Claude, Gemini (models) | GA; on PPS mall | n/a | "주요 금융기관" (unnamed) | Pre-A ₩2bn (KB Investment) | None | **C** |
| Saltware | Sapie-Guardian | No | No (DLP) | n/a | n/a | n/a | Claude Code, Codex CLI, Gemini CLI (DLP) | Live; financial order | n/a | Unnamed financial firm | Listed | None | **C** |
| WINS | SNIPER AIVAX | No | "MCP 보안" (unspecified) | n/a | Audit and history | Yes | Global LLMs | Live | n/a | None | Listed | None | **C** |
| AIDEEP | DeepGenGuard | No | RBAC on RAG | n/a | Dashboard | Yes | n/a | Live | n/a | None | n/a | None | **C** |
| PRIBIT AI | (rebrand; PacketGo ZTNA) | No | No product | n/a | n/a | n/a | n/a | Vision only | n/a | None | Private | None | **D** |
| Cremit | NHI/secret discovery, Permission Analyzer | Key/secret inventory | No | n/a | Platform audit log | n/a | Codex guide (for its own MCP) | Live (NHI) | n/a | Next Securities, 8Percent (secret scanning) | Unverified (paywall) | None | **D** |

Sources for each row are the Q1 citations: QueryPie docs, release notes and plan pages; [Boannews 146775](https://www.boannews.com/news/articleView.html?idxno=146775); [Dailysecu 209089](https://www.dailysecu.com/news/articleView.html?idxno=209089); [Boannews 146773](https://www.boannews.com/news/articleView.html?idxno=146773); [etnews 20260527000064](https://www.etnews.com/20260527000064); [Dailysecu 208883](https://www.dailysecu.com/news/articleView.html?idxno=208883); [Digital Daily FabriX](https://www.ddaily.co.kr/page/view/2026052915241437388); [Dailysecu Somansa](https://www.dailysecu.com/news/articleView.html?idxno=208197); [Digital Daily Softfreak](https://www.ddaily.co.kr/page/view/2026101209470207946); [Dailysecu MonitorLab](https://www.dailysecu.com/news/articleView.html?idxno=207640); [etnews AIM](https://www.etnews.com/20250806000358); [Hankyung AIM](https://www.hankyung.com/article/202609233087i); [Boannews Tynapse](https://www.boannews.com/news/articleView.html?idxno=142788); [Dailysecu Eroun](https://www.dailysecu.com/news/articleView.html?idxno=208414); [Dailysecu Saltware](https://www.dailysecu.com/news/articleView.html?idxno=209075); [Boannews AI report](https://www.boannews.com/news/articleView.html?idxno=146038).

### Inferences
- Shipping today: one A-grade product (QueryPie MAC).
- Announced or pre-GA: three more A-grade products (SoftCamp, Kuntech, and MonitorLab's roadmap item).
- The other agent-related players are platform-embedded (Samsung SDS) or identity-in-development (RaonSecure).
- Competitive pressure through 2027 will come mainly from **QueryPie (installed PAM base, on-prem, Claude Code support) and SoftCamp (public/N2SF channel, agent-native design)**.

### Gaps
- No pricing for any player except QueryPie. No named customer for any agent-authorization module (including QueryPie MAC).

## Q3. What NO Korean player currently offers (verified gaps)

### Takeaway
Across all opened sources, no Korean vendor ships the following:
1. Agent-native identity combined with a delegation chain, working for third-party coding agents.
2. Per-action human approval at a gateway for third-party agents.
3. Control of local, non-MCP agent actions (shell, file edits) with an audit trail.
4. Audit evidence mapped to the FSI's 17 items.
5. A referenceable financial-sector deployment of agent tool-call authorization.

### Cited Findings
- **Agent identity distinct from the human, at GA.**
  - QueryPie MAC grants MCP access through *user/group roles* — [QueryPie MCP Access Control](https://docs.querypie.com/ko/administrator-manual/mcp-server/mcp-access-control)
  - SoftCamp's NHI delegation is not GA — [Boannews 146775](https://www.boannews.com/news/articleView.html?idxno=146775)
  - RaonSecure AAM/OneAccess is in development or R&D — [etnews](https://www.etnews.com/20260527000064); [Dailysecu](https://www.dailysecu.com/news/articleView.html?idxno=208883)
- **Per-call human approval for third-party agents' high-risk tool calls.**
  - QueryPie's approval mode exists inside its *own* AI Chat. MAC adds forced reason input, not approver sign-off — [QueryPie release notes](https://docs.querypie.com/ko/release-notes/11.6.0-11.6.6)
  - Kuntech EndForce *claims* ask-human approval, but the CEO says runtime control is still in preparation and its market will form "next year" — [ZDNet Q&A](https://zdnet.co.kr/view/?no=20261027131832)
  - AIM's agent pages do not claim an approval step — [AIM /agentic](https://www.aim-intelligence.com/agentic)
  - The FSI criteria explicitly test "외부 도구 실행과 승인 절차" and "인적 승인 체계" — [Dailysecu FSI](https://www.dailysecu.com/news/articleView.html?idxno=208760); [Boannews FSI](https://www.boannews.com/news/articleView.html?idxno=146243)
- **Control of local coding-agent actions (Claude Code, Codex CLI, Cursor running shell commands or editing files) with authorization and audit.**
  - Saltware and MonitorLab cover these tools only for prompt-level DLP — [Dailysecu Saltware](https://www.dailysecu.com/news/articleView.html?idxno=209075); [Dailysecu MonitorLab](https://www.dailysecu.com/news/articleView.html?idxno=207640)
  - Somansa AIDR covers discovery and permission management on endpoints, with the next-gen version due Q4 2026 — [Dailysecu Somansa](https://www.dailysecu.com/news/articleView.html?idxno=208197)
  - Samsung DS built its own Claude Code gateway with AWS, covering keys, quotas and cost, not tool actions — [Digital Daily](https://www.ddaily.co.kr/page/view/2026093016340947942)
  - AIM's marketing is the exception. Its Desktop Agent claims endpoint control for Claude, Cursor and Copilot, and its agentic page claims tool-call interception for "coding assistants". The described endpoint function is data inspection and masking, and there are no docs or customer evidence for tool-action control — [AIM /starfort](https://www.aim-intelligence.com/starfort)
- **Evidence packs mapped to FSI's 6 areas and 17 items, including kill switch, sandbox and agent-to-agent communication security.** No vendor claim found. The criteria become formal in 2027 — [etnews FSI](https://www.etnews.com/20261007000233)
- **A named Korean financial institution running agent tool-call authorization plus audit in production.**
  - AIM's named banks and card companies bought guardrail/red-team tools in 2025 — [etnews](https://www.etnews.com/20250806000358)
  - Tynapse's bank deal is an unnamed PoC of a response guardrail — [Boannews](https://www.boannews.com/news/articleView.html?idxno=142788)
  - Eroun's finance reference is red-teaming — [Dailysecu](https://www.dailysecu.com/news/articleView.html?idxno=203985)
- **Self-serve, transparent pricing for agent control.** Only QueryPie publishes prices — [ACP plans](https://www.querypie.com/ko/plans/acp)

### Inferences
- The most defensible white space is a product that does all of the following, and is the first to publicly map itself to the FSI 2027 checklist:
  - gives every agent session its own identity tied to a delegating human
  - enforces per-tool and per-action policy, including for local CLI agent actions, not just remote MCP
  - routes high-risk actions to a human approver
  - emits tamper-evident, regulator-mapped audit evidence
- QueryPie could close parts of this gap quickly (it already has approval workflows in ACP), so this window is probably measured in quarters, not years.

### Gaps
- QueryPie MAC may already support workflow-based role requests (the 2026-08-25 notes mention them). Whether that amounts to per-call approval is unconfirmed.
- Kuntech EndForce approval is claimed (ZDNet) but not documented. kuntech.co.kr could not be opened.
- AIM Starfort's agent-authorization features exist only on marketing pages. No docs or release notes were found.
- The final FSI criteria text (2026 AI REDTEAM REPORT) has not been published yet.

## Q4. Fresh scan: any Korean startup launched or funded in 2026 specifically for agent permissions, MCP security or agent audit logs?

### Takeaway
No dedicated Korean startup with a 2026 round **for agent authorization or MCP security** was found in accessible originals. The 2026 rounds in adjacent space are AIM Intelligence (guardrail/red-team) and Tynapse (response trust layer; amount unverified). New 2026 entrants into agent control are incumbents (Somansa, WINS, AIDEEP, PRIBIT AI) or acquisitions (Netz–Softfreak).

### Cited Findings
- KISIA held a 2026 promising-security-startup investment fair with 8 startups and 2 cyber funds. Participants were not named — [Boannews 2026-10-27](https://www.boannews.com/news/articleView.html?idxno=146766)
- A search of accessible Korean security media for "MCP 보안 스타트업 투자 유치 2026" found only Sparrow MCP (code security) — [Boannews 146488](https://www.boannews.com/news/articleView.html?idxno=146488)
- Tynapse ₩4.5bn seed (2026-04-28) for "AI 에이전트 런타임 보안 인프라" is now verified. It is the only 2026 seed found for an agent-runtime security startup, and it sits on the trust/guardrail side, not authorization — [MT](https://www.mt.co.kr/future/2026/04/28/2026042808505174281); [Platum](https://platum.kr/archives/285962)
- Korean coverage of overseas agent-security rounds (Multifactor, Natoma-type agent IAM) shows the category is funded abroad. Korean equivalents did not surface — [etnews 2026-03-22](https://www.etnews.com/20260320000229)

### Inferences
- The agent-IAM/MCP-PAM layer in Korea is still occupied by incumbents and a PAM scale-up rather than venture-backed pure plays. This is consistent with the earlier "why gap" analysis.

### Gaps
- Platum, Wowtale and THE VC opened only for specific pages. No category sweep of THE VC or Innoforest was done (paywall, and time), so a seed-stage startup listed only there could still have been missed.
