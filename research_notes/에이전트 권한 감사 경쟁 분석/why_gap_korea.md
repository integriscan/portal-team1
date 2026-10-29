# Why Korea has few dedicated AI-agent permission / audit / security startups (as of 2026-10-29), and why incumbents have been slow — structural barriers vs. enablers

Method note: direct page fetches were blocked in this session (e.g., fnnews.com, news.mtn.co.kr returned DNS/allow-list errors), so **every fact below comes from WebSearch result snippets / search-engine summaries, not from reading the full article**. Treat figures as "snippet-level" and verify against the original before quoting externally. Evidence is listed under "Cited Findings"; my reasoning is kept separate under "Inferences".

---

## Q0. Premise check — is the gap real? Who exists in Korea today?

### Takeaway
The gap is **narrower than "none"** but real for a *dedicated, venture-backed agent identity/permission/audit startup*. As of Oct 2026 the Korean landscape is (a) AI red-team/guardrail startups (에임인텔리전스), (b) incumbents that bolted on agent gateways/sandboxes in mid-2026 (소프트캠프, 라온시큐어), (c) one Korean PAM-heritage vendor pitching "MCP PAM" (QueryPie), and (d) foreign identity vendors entering via Korean distributors (Okta). No Korean startup was found whose core product is agent identity + delegated authorization + audit trail, with a disclosed funding round.

### Cited Findings
- 에임인텔리전스 (AIM Intelligence): pre-A Aug 2025 (Mirae Asset Capital lead; LG U+ strategic fund via Bluepoint; LY Corp's CVC Z Venture Capital), cumulative ₩1.85bn — [Unicorn Factory](https://www.unicornfactory.co.kr/article/2025080610210560810)
- 에임인텔리전스 Series A ₩10bn (Apr 2026, Samsung Venture Investment lead; cumulative ~₩12bn); positions as red-team + guardrail across LLM, agents, physical AI; ~20 customers in finance/telecom/manufacturing; claims to be OpenAI's only APAC guardrail partner — [Unicorn Factory](https://www.unicornfactory.co.kr/article/2026041009060976981)
- 에임인텔리전스 strategic round Jun 2026 from LG Electronics, Hyundai ZER01NE, Naver D2SF (one month after Series A) — [Byline Network](https://byline.network/2026/06/10-650/); [Unicorn Factory "젠슨 황이 만나고 간 대기업들, 'AI 보안' 스타트업에 꽂혔다"](https://www.unicornfactory.co.kr/article/2026061009455630087)
- 소프트캠프 launched "SOFTCAMP AI Security Suites (SAISS)" on 2026-07-02 incl. SHIELD AI Gateway (controls agent access/communication/data use) and SHIELD Agent Sandbox; CEO 배환국: "AI가 회사 시스템까지 접속…권한 통제 없인 위험", advocates delegated auth with least privilege instead of handing agents secrets/tokens — [Newsis](https://www.newsis.com/view/NISX20260702_0003693406); [MT](https://www.mt.co.kr/article/2026070211141870538); [Daum/뉴스1 interview](https://v.daum.net/v/20260702170040396)
- 소프트캠프 also proposed giving each agent a Non-Human Identity (owner, purpose, token, scope) at 정보보호 솔루션 컨퍼런스 — [IT Daily](https://www.itdaily.kr/news/articleView.html?idxno=241495)
- 라온시큐어 "OneShield" (inspects prompts/outputs between users and gen-AI/agents) got KOSA "AI 제품·서비스 확인서" (Oct 2026); in Feb 2026 it announced an agentic-AI security automation platform for within the year and parallel development of "Agentic AI Management (AAM)" for agent identity/permissions — [MTN](https://news.mtn.co.kr/article/2026101409215032282/share-modal); [Digital Today JP](https://www.digitaltoday.co.kr/jp/view/35352/korean-security-industry-gains-momentum-on-ai-first-move)
- QueryPie markets "MCP PAM" — policy-based control layer validating user permission/behavior before an AI calls external tools (vendor white papers) — [QueryPie whitepaper](https://www.querypie.com/whitepapers/17/ai-autonomous-access-control); [GeekNews summary](https://news.hada.io/topic?id=22268)
- 티오리 (Theori) CISO presented "FIGS" (Fine-grained permissions, Identity, Guardrails, Sandboxing) at .HACK 2026; argued agent risk shows up first as permission abuse, and that OAuth/RBAC assume a human with common sense — [Byline Network](https://byline.network/2026/04/9-424/) (framework talk; no dedicated product/funding found)
- z3soft pitching an "Agentic Security Platform" (SafeSecurity) aimed at SMB file/PC security, targeting Japan/US — [VentureSquare JP](https://www.venturesquare.net/jp/1073897/)
- Searches for Korean startups launching MCP security gateways returned none; only in-house builds (e.g., Ably's internal MCP gateway) — [Ably team on Brunch](https://brunch.co.kr/@ably-team/62)
- 넷앤드 (HIWARE) and 피앤피시큐어 (DBSAFER) — the natural PAM/DB-access-control adjacents — showed no AI-agent access-control product in search results; 넷앤드's latest new product found was Kubernetes access control (HIWARE for K8S) — [Byline tag 접근제어](https://byline.network/tag/%ec%a0%91%ea%b7%bc%ec%a0%9c%ec%96%b4/); [Byline tag 계정접근관리](https://byline.network/tag/%ea%b3%84%ec%a0%95%ec%a0%91%ea%b7%bc%ea%b4%80%eb%a6%ac/)

### Inferences
- Korean capital is flowing to **model-layer AI security (red team/guardrail)**, not the **identity/authorization/audit layer**. The guardrail category is easier to sell in Korea because it maps onto the existing DLP/정보유출방지 budget line; agent identity has no existing budget line.
- Incumbents' mid-2026 launches (소프트캠프, 라온시큐어) were framed as extensions of web isolation / DLP / authentication products, i.e., "add a module" rather than "new category."

### Gaps
- No funding data found for QueryPie's agent product line, Theori's agent work, or any Korean seed-stage agent-IAM startup; a THE VC category search would be needed.
- Could not verify whether 소프트캠프/라온시큐어 agent products have paying customers (CEO said "고객사 호평" but no numbers).

---

## Q1 (H1). Demand timing — how many Korean firms run agents in production with tool access?

### Takeaway
**Partially confirmed.** Headline "adoption" numbers for Korea are high (52–78%) but are vendor surveys with loose definitions; deeper indicators (multi-step workflow execution, manufacturing/SME usage, financial-sector agent go-lives) show that **production agents with real tool/system access were rare through mid-2026**, and in finance only became legally feasible during 2026. Demand for agent *permission control* lags agent *pilots* by a cycle.

### Cited Findings
- ServiceNow/ThoughtLab 2026 Enterprise AI Maturity Index (4,500 execs, 19 countries; Korea included first time): Korea maturity 52/100; headline says Korean agentic-AI adoption 52% but multi-step workflow implementation "early stage"; execution score only 40; Korean AI investment +120% YoY — [aimatters](https://aimatters.co.kr/news-report/50679/); [hellot](https://hellot.net/news/article.html?no=114748) (snippet; note 52 score vs 52% may be conflated)
- Workday global study headline: "한국 기업 78% AI 에이전트 도입" — [DI Today](https://ditoday.com/?p=135803) (headline only; definitions unknown — conflicts with other data below)
- AWS/Strand Partners 2026: 58% of Korean firms use AI (up from 48%), but only 24% say they are ready for next-gen AI — [SKAX insight](https://www.skax.co.kr/insight/trend/3874/); [MTN](https://news.mtn.co.kr/news-detail/2026091400343044458)
- 대한상의 (Nov 2025, 504 manufacturers): 82.3% not using AI in management; usage large firms 49.2% vs SMEs 4.2%; 80.7% have no AI specialists; cost burden SMEs 79.7% — [Newsis](https://mobile.newsis.com/view/NISX20251118_0003406965); [NewDaily](https://biz.newdaily.co.kr/site/data/html/2025/11/18/2025111800185.html)
- KIET (Feb 2025): Korean corporate AI adoption 4.5% (2022) → 6.3% (2023); manufacturing 2.7% — [The Fact](https://news.tf.co.kr/read/economy/2181836.htm)
- 한국고용정보원 (summer 2026): actual industrial AI adoption still under 30% — [Dealsite](https://dealsite.co.kr/articles/168119)
- SAS (Nov 2025): only 4% of Korean organizations plan to significantly increase investment in trustworthy AI in response to agentic AI — [Byline Network](https://byline.network/2025/11/12-459/)
- Global comparison: Gartner (May–Jun 2025, n=360) 75% piloting/deploying agents but only 15% considering fully autonomous agents — [CIO Korea](https://www.cio.com/article/4065969/기업-75가-ai-에이전트-도입했지만에이전틱-ai로-못-가.html); McKinsey (Aug 2026): 39% experimenting, 23% scaled in ≥1 function — [SKAX](https://www.skax.co.kr/insight/trend/3904)
- Finance: a 2024–25 report found 85% of disclosed gen-AI use cases in finance were internal-employee-facing — [aimatters / search summary](https://aimatters.co.kr/news-report/ai-report/30739/) (snippet); 한국금융연구원 said that under current rules AI cannot directly execute payments/trades, so near-term agents stay advisory — [Newsway series](https://www.newsway.co.kr/series/issuefocus/939) (snippet)
- 금융분야 AI 가이드라인 "보조수단성 원칙": AI limited to assisting tool; final decisions and legal responsibility on staff; requires human emergency-stop — [Nate/News summary](https://m.news.nate.com/view/20260618n28638) (snippet)
- No search found a Korean commercial bank publicly running an internal-network AI agent with transaction/tool permissions in production as of 2026 — (negative finding; see [NewDaily Jun 2026](https://biz.newdaily.co.kr/site/data/html/2026/06/19/2026061900121.html) describing agent adoption as "본격화" i.e., starting)
- Japan comparator: Gartner Japan Feb 2026 — 59.3% say agent adoption discussion is ahead of security discussion — [@IT](https://atmarkit.itmedia.co.jp/ait/spv/2605/22/news041.html)

### Inferences
- The binding constraint was not "chatbots vs agents" in the abstract but **"agents with write-access to core systems"**, which Korean regulated buyers could not do until 2026. Permission-control demand is proportional to the number of agents holding real credentials; that number was near zero in finance/public until 2026.
- Expect demand to show up first as *compliance-driven* (금보원 evaluation criteria, see Q2) rather than *incident-driven*.

### Gaps
- No 과기정통부/NIA, 한국IDC, or 금융보안원 survey quantifying "agents in production with tool access" in Korea was found. Survey definitions conflict sharply (4.2% SME AI use vs 78% "agent adoption").

---

## Q2 (H2). 망분리 and on-prem — what changed and when?

### Takeaway
**Strongly confirmed, and the barrier is lifting fast in 2026.** Financial 망분리 (since 2013) and public-sector physical separation meant cloud LLM agents were largely illegal/unusable for the two biggest Korean security buyers. 2026 is the inflection year: SaaS in internal networks made a standing exception (Jan–Apr 2026), "Mythos"-triggered emergency relaxation for security-purpose frontier AI (May–Sep 2026), talk of full removal for capable institutions, 금보원 agent-security evaluation criteria (Oct 2026, formal from 2027), and N2SF guideline 1.0 (Sep 2025) with 2026 pilots. This is a **temporary barrier converting into a demand driver**.

### Cited Findings
- Financial 망분리 introduced after the 2013 network-paralysis incident; June 2026 coverage: "13년 만에 망분리 규제 완화 … 금융권 AI 에이전트 도입 본격화" — [NewDaily](https://biz.newdaily.co.kr/site/data/html/2026/06/19/2026061900121.html); [Korea Future](https://koreafuture.co.kr/m/view.php?idx=30015&mcode=)
- Before 2026, SaaS in finance only via 혁신금융서비스 sandbox: since Sep 2023, 32 financial firms received 85 SaaS-related designations — [Herald](https://www.heraldk.com/article/2026011819000007758); [Shin & Kim newsletter](https://shinkim.com/kor/media/newsletter/3105)
- Jan 2026: 전자금융감독규정시행세칙 amendment pre-announced (1/20–2/9) to allow SaaS in internal networks as a standing exception, excluding personal credit / unique ID data; requires SaaS evaluated by 금융보안원 etc., endpoint protection, monitoring of important data I/O; semi-annual self-assessment reported to CISO-chaired committee — [Boannews](https://m.boannews.com/html/detail.html?idx=141557); [Shin & Kim](https://shinkim.com/kor/media/newsletter/3105); Apr 2026 follow-up with commentary guide — [Herald](https://www.heraldk.com/article/2026041913000050844)
- May 2026: FSC announced response to high-performance AI ("Mythos") threats — security-purpose 망분리 exception for 49 large institutions (assets ≥₩10tn, ≥1,000 staff, dedicated CISO), 1st test ≤10 firms in Jun–Jul, and review of full removal for capable firms — [MT](https://www.mt.co.kr/finance/2026/05/24/2026052401530379068); [Daum](https://v.daum.net/v/20260524135702034)
- Sep 2026 "2nd emergency relaxation": eligible firms 49→75 (2nd-tier financials and e-finance firms), selection 10→15; 1-year no-action letters; must implement substitute controls and report AI-security findings to government; 3rd round and "상시 제도화" under review — [FSC press release](https://fsc.go.kr/no010101/87646); [Law Times](https://www.lawtimes.co.kr/news/articleView.html?idxno=227712); [Mediapen](https://www.mediapen.com/news/view/1121164)
- FSC chair (Jul 2026): "망분리 전면 해제 방안 조속히 구체화" — [CEO Score Daily](https://ceoscoredaily.com/page/view/2026071014162144325); [DDaily](https://www.ddaily.co.kr/page/view/2026071517443276094)
- BOK governor (Jan 2026): "AI·망분리 양립 어려워", BOK network-separation improvement by end-March — [Herald](https://www.heraldk.com/article/2026012021371108978)
- 금융보안원 "금융분야 AI 에이전트 보안 평가 기준" (2026-10-07): 17 check items (10 agent-specific new threats), incl. execution-permission & isolation management, tool-execution & approval control; applied to all financial AI red-teaming; pilot through year-end, **formal inspection standard from 2027** — [SBS Biz](https://biz.sbs.co.kr/amp/article/20000338699); [YTN](https://www.ytn.co.kr/_ln/0102_202610071136215426); fnnews (fetch blocked; via search summary). Article counts differ (5 vs 6 domains).
- Market shift noted: security scope moving from physical separation to per-user/device/app access rights and data movement — [MTN on 아톤](https://news.mtn.co.kr/news-detail/2026092310205566590) (snippet)
- Public sector: NIS unveiled MLS in Sep 2024, renamed N2SF; N2SF guideline 1.0 Sep 2025; KISA 2026 N2SF adoption support (₩4.5bn, 6 consortia); allows gen-AI/external cloud from work PCs depending on data grade — [DDaily](https://www.ddaily.co.kr/page/view/2026052009284715637); [MTN](https://news.mtn.co.kr/news-detail/2026031312382799965); [PRIBIT letter](https://maily.so/pribitletter/posts/1gz27pd4r3q)
- Seoul City: N2SF is core of its 2027–2031 cyber plan; **AI agent security measures only "long-term review"** — [Byline Network](https://byline.network/2026/10/7-518/)
- NIS AI 보안 가이드북 (2025-12-10) for public bodies covers gen-AI, agentic AI, physical AI: 15 threats, 30 controls, 57-item checklist; based on survey of 300 public bodies — [CIO Korea](https://www.cio.com/article/4103809/)
- CSAP: internal administrative systems are "상" grade; AWS/Google got only "하" grade — [Byline](https://byline.network/2025/04/1-1292)

### Inferences
- Until 2026, a Korean agent-security startup had **no legal customer** in finance and public sector (the two segments that buy most Korean security software). The window opened only ~6–10 months ago — startup formation lags that by 12–24 months, which alone explains much of the "gap."
- 금보원's criteria explicitly include "실행 권한·격리 관리" and "도구 실행·승인 통제" — this is effectively the first Korean *specification* that an agent permission/audit product can be sold against. Formalization in 2027 makes this **temporary**.
- Public sector remains 2–5 years behind finance (Seoul: agent security "long-term").

### Gaps
- Final text/effective date of the SaaS 시행세칙 amendment not confirmed. Whether full 망분리 removal is announced by end-2026 is unknown.

---

## Q3 (H3). Procurement & certification — is there a buyable category?

### Takeaway
**Confirmed, and likely the most durable structural barrier for public sector; less so for finance/private.** Korean public procurement requires CC certification and/or 보안기능확인서 for listed product types; there is **no AI-agent-security product class** in CC/보안기능확인서 as of Oct 2026. New-tech products historically struggled because evaluation criteria did not exist. The closest substitutes in 2026 are guidance documents (NIS guidebook, MSIT threat manual, KISA red-teaming guide, 금보원 criteria) and KOSA's "AI 제품·서비스 확인서" — none are mandatory procurement certifications.

### Cited Findings
- Some product types require both CC and 보안기능확인서 for national/public agency adoption — [KTR](https://ktr.or.kr/test-evaluation/cybersecurity/contentsid/1999/index.do)
- CC reform plan (2021): change approval for patches instead of re-evaluation, cost ~₩30m→₩5m, period 9 months→<3 weeks (for changes), domestic CC validity 3→5 years — [Boannews](https://m.boannews.com/html/detail.html?idx=129270); [Newsis](https://mobile.newsis.com/view/NISX20210107_0001297261)
- 2022: cloud/new-tech products constrained in obtaining certification due to absence of evaluation criteria; government pursued a "fast track" — [MT "보안 유니콘 가로막던 느림보 규제"](https://www.mt.co.kr/tech/2022/07/11/2022070716301594900)
- KISA free CC consulting: 2023 domestic CC product classes = 17 — [DDaily](https://www.ddaily.co.kr/page/view/2023033115291845473); 2024 consulting for 12 products — [Byline](https://byline.network/2024/04/25-327/)
- No evidence found of a KISA/NIS AI-security or AI-agent-security certification/performance-evaluation class as of Oct 2026; KISA created an AI보안산업본부 (Feb 2026) and runs ₩12.04bn "정보보호 신기술" support (18 projects, 50 firms) incl. AI-based next-gen security commercialization (AX-Sprint; 샌즈랩 consortium) — [Byline](https://byline.network/2026/05/8-457/); [Herald](https://www.heraldk.com/article/2026050716105959332); [Byline KISA reorg](https://byline.network/2026/02/3-369/)
- Guidance-only artifacts in 2026: MSIT "AI 보안 위협 대응 매뉴얼" (2026-07-08, 231 pp, 21 LLM threats); KISA AI red-teaming guide (Jul 2026) — [search summary citing PyTorch KR](https://discuss.pytorch.kr/tag/kisa/8750.md) (snippet)
- 라온시큐어 OneShield obtained KOSA "인공지능 제품·서비스 확인서" (a voluntary industry confirmation, not CC) — [MTN](https://news.mtn.co.kr/article/2026101409215032282/share-modal)
- Public cloud security verification being unified under NIS; KISA said details still being agreed — [Byline](https://byline.network/2025/02/4-261/) (date uncertain)

### Inferences
- For **public sector**, "no certification class → no line item → no purchase" is a strong, multi-year barrier (likely 2–3+ years: a class must be defined, protection profile written, labs accredited, then 6–12 months per product). This favors incumbents with CC labs relationships.
- For **finance**, the gating artifact is not CC but 금보원 evaluation (SaaS evaluation + agent criteria from 2027). That path is shorter and more open to startups that align products to the 17 items.
- For **private large enterprises (chaebol, platforms)**, certification is not required — the barrier there is sales cycle/SI structure (Q4).

### Gaps
- Could not confirm the current CC/보안기능확인서 lead times and fees in 2026 (data found is from 2021 plans). No confirmation of any 2026 discussion to create an "AI 보안" CC product class.

---

## Q4 (H4). Market size, pricing, and VC appetite

### Takeaway
**Confirmed.** The Korean information-security (non-physical) market is ~₩7.1tn with 876 firms, export of info-security is tiny and shrinking, public buyers routinely underpay against official cost guides, domestic maintenance rates are structurally low versus foreign vendors, government cybersecurity funds deploy slowly, and exit routes (IPO/M&A) are weak — the 시큐레터 accounting scandal after a 2023 tech-special listing further chilled the security IPO path. VC money that does go to "AI security" goes to model-layer guardrails with chaebol CVC backing. This is a **semi-permanent** barrier for domestic-only plays.

### Cited Findings
- 2024 Korean information-protection industry revenue ₩18.59tn (+10.5%): info-security ₩7.12tn (+15.9%), physical ₩11.47tn; info-security exports only ₩124.2bn (−15.9%); 1,780 firms (876 info-security) — [Boannews](https://m.boannews.com/html/detail.html?idx=140185); [Byline](https://byline.network/2025/11/6-293/); [Newsis](https://www.newsis.com/view/NISX20251106_0003392271)
- Public security monitoring: no agency ordered at or above the SW cost-guide minimum; one ordered at 42% of minimum; public SW maintenance typically 10–15% of development cost; domestic SW maintenance rates "사실상 무력화" by lowest-price bidding and bundled ordering, vs foreign SW 20–22%/yr of license — [DDaily K-보안 주권⑩ (Jul 2026)](https://www.ddaily.co.kr/page/view/2026070210533905889)
- Historical: domestic vendors ~7.8% public maintenance rate vs SAP/Oracle ~22% — [ETNews 2009](https://m.etnews.com/200905070072) (old)
- ICT SME information-protection support budget cut to ₩2.5bn in 2025 — [Boannews](https://m.boannews.com/html/detail.html?idx=137517) (snippet)
- MSIT cybersecurity fund: total commitment ₩61.2bn; ₩12.7bn invested in 8 companies (~21%) by end-2025 (one article frames this as "fast"); MTN (Mar 2026) says VCs hesitate because Korean security market is public/domestic-centric, revenue can't scale fast, and M&A/IPO exits are hard — [Kyeonggi](https://kyeonggi.com/article/20260323580256); [MTN 사이버 리포트⑥](https://news.mtn.co.kr/news-detail/2026032616393190375) (snippet; the "15%" figure in the brief relates to loss-coverage cap, not deployment)
- 2026 new ₩16bn sub-fund must put ≥50% into AI/zero-trust security, security M&A, or overseas-subsidiary firms — [Byline](https://byline.network/2026/03/23-559/)
- Korean VC 2025 (THE VC): 1,155 deals (−33.2%), ₩6.57tn (−5.3%); AI share of funding 9.4% (2022) → 23.6% (2025) — [THE VC](https://thevc.kr/discussions/korea_startup_funding_2025)
- 2023 survey: ~70% of domestic security firms report funding difficulties for R&D — [MT 2023](https://www.mt.co.kr/tech/2023/05/02/2023043013362817725)
- 시큐레터: listed via tech-special on KOSDAQ Aug 2023, audit-opinion disclaimer (accounting fraud probe) 7 months later, trading halted; still in improvement period per Jul 2026 disclosures — [Boannews](https://m.boannews.com/html/detail.html?idx=128602); [IRGO](https://m.irgo.co.kr/IR-COMP/418250/)
- Contrast — global: VCs put $435m into 12 enterprise AI-agent security/governance companies Apr–Sep 2026 — [Forkast](https://forkast.news/enterprise-ai-agent-funding-surges-to-435m-in-five-months-security-and-governance-lead/); Zenity raised $125m (Aug 2026) — [BusinessWire](https://www.businesswire.com/news/home/20260803963850/en/); Noma $100m — [Globes](https://en.globes.co.il/en/article-1001517758)
- Incumbent scale: 안랩 H1 2026 revenue ₩130.4bn, OP ₩7.3bn — [Byline tag 안랩](https://byline.network/tag/n2sf/); 소프트캠프 2025 revenue ₩25.9bn (+53.4%), ~90% from document security — [Byline](https://byline.network/tag/%ec%9b%b9%ea%b2%a9%eb%a6%ac/); [MT](https://www.mt.co.kr/tech/2026/06/29/2026062910101174138)

### Inferences
- A single Korean global-scale agent security round (Zenity $125m ≈ ₩170bn+) exceeds the entire MSIT cybersecurity fund (₩61.2bn) by ~3x. Korean VCs rationally won't fund a domestic-only security category with ₩ hundreds-of-millions ACVs, 10–15% maintenance and no IPO comps.
- The *permanent* part is market size/pricing; the *temporary* part is that "AI" labels currently unlock capital (AI share 23.6%), which is why 에임인텔리전스 raised while classic security startups did not.

### Gaps
- No Korean security-startup-specific VC totals for 2024–2026 found (THE VC category data not reachable). No current security-sector KOSDAQ valuation multiples found.

---

## Q5 (H5). Incumbent strategy — waiting, building, or reselling?

### Takeaway
**Mixed — partly refuted.** Incumbents are not purely waiting: 소프트캠프 and 라온시큐어 launched agent gateway/sandbox/AAM offerings in 2026, mostly as extensions of existing DLP/isolation/auth products and explicitly tied to N2SF and financial 망분리 relaxation. The PAM/DB-access-control incumbents (넷앤드, 피앤피시큐어) — the most natural owners of "agent permission + audit" — have not visibly moved. Foreign identity vendors (Okta) are entering via Korean distributors rather than Korean vendors building. Many vendors' public 2026 outlooks frame AI as an *attack* threat (AI-powered attacks) rather than *agents-as-insiders*.

### Cited Findings
- 소프트캠프 SAISS (Jul 2026): SHIELD AI Gateway + Agent Sandbox; four principles 추적·통제·인증·검증; CEO says AI permission management is a business expansion — [Daum](https://v.daum.net/v/20260702235501116); [MT](https://www.mt.co.kr/article/2026070211141870538); 소프트캠프 also pitching N2SF "접속 격리" for internal AI agents at CSK 2026 — [Byline tag](https://byline.network/tag/%eb%ac%b8%ec%84%9c-%eb%b3%b4%ec%95%88/)
- MT (Jun 2026): "N2SF·AI보안 '물' 들어온 소프트캠프" — framing that regulation opened the market — [MT](https://www.mt.co.kr/tech/2026/06/29/2026062910101174138)
- 라온시큐어: AI사업본부, agentic security automation platform within 2026, AAM tech for agent identity/permissions; OneShield targets public/finance information leakage — [Digital Today JP](https://www.digitaltoday.co.kr/jp/view/35352/korean-security-industry-gains-momentum-on-ai-first-move); [MTN](https://news.mtn.co.kr/article/2026101409215032282/share-modal)
- 안랩 2026 threat outlook focuses on AI-driven adaptive attacks, prompt injection, data poisoning — [Byline](https://byline.network/2025/11/27-529/); 시큐아이 2026 keywords "AI vs AI", attack agents — [Boannews](https://m.boannews.com/html/detail.html?idx=140996); 삼성SDS proposes AI red team + AI guardrail; 81% of respondents worried about AI-based threats — [Boannews](https://m.boannews.com/html//detail.html?idx=142338)
- 넷앤드 newest product: HIWARE for K8S; positions zero-trust IAM — [Byline](https://byline.network/tag/%EC%A0%91%EA%B7%BC%EC%A0%9C%EC%96%B4); [Boannews ISEC 2025](https://m.boannews.com/html/detail.html?idx=138690); 피앤피시큐어 expanding DBSAFER integrated access control/account management across banks, card, securities — [Byline](https://byline.network/tag/%ea%b3%84%ec%a0%95%ec%a0%91%ea%b7%bc%ea%b4%80%eb%a6%ac/) (no agent product found)
- Okta: 에티버스 signed Okta Korea distribution (Jan 2026) citing autonomous-agent threats; 인성디지탈 (Okta distributor) supported Korean launch of "Okta & Auth0 for AI Agents" incl. Cross App Access demo (webinar 2026-07-15) — [Byline](https://byline.network/2026/01/26-522/); [Byline](https://byline.network/2026/07/16-693/)
- KISIA chair: strategy is cooperation among domestic vendors to counter big-tech/foreign solutions — [Boannews](https://m.boannews.com/html/detail.html?idx=142323)

### Inferences
- Incumbent behavior fits "build when the regulator writes the spec": launches cluster right after N2SF guidance and FSC relaxations; 금보원's 2027 formal criteria will likely trigger a second wave (PAM vendors adding "agent account" features).
- The PAM incumbents' inaction is the most telling gap: their customers (banks) only got permission to run cloud agents in 2026; their products are on-prem, session/proxy-based for human admins. Expect them to extend to "agent accounts" once 금보원 item audits begin — this is a **temporary** gap with a likely incumbent fast-follow, i.e., a trap for a startup that only offers "PAM for agents" in Korean finance.

### Gaps
- No IR/earnings-call statements from 넷앤드, 피앤피시큐어, 지니언스, 파수 on agent security found. SK쉴더스 agent-security product not found. No evidence found of Korean vendors reselling Zenity/Astrix/Noma.

---

## Q6 (H6). Talent & technology

### Takeaway
**Confirmed as a contributing, mostly temporary barrier.** Korean firms report acute shortage of AI-experienced security hires; the domestic IAM tradition is on-prem human-centric (SSO/EAM/PAM/DB access control) rather than OAuth/OIDC/cloud-identity native, which is the technical substrate for agent delegation. But Korea does have top-tier offensive-security talent (Theori, Stealien) already articulating agent-permission frameworks.

### Cited Findings
- Fortinet 2026 Korea survey (n=60): 68% say hardest hiring challenge is finding candidates with specific AI experience (58% in 2024); hardest-to-fill roles cloud security 37%, SecOps 33% — [Byline](https://byline.network/2026/06/246/) (small sample)
- 대한상의: 80.7% of manufacturers lack AI specialists — [NewDaily](https://biz.newdaily.co.kr/site/data/html/2025/11/18/2025111800185.html)
- Korean IAM heritage: 넷앤드 HIWARE = system/DB/AD account & access control + SSH CA — [Byline](https://byline.network/tag/%ec%a0%91%ea%b7%bc%ec%a0%9c%ec%96%b4/); 피앤피시큐어 DBSAFER in banks — [Byline](https://byline.network/tag/%ea%b3%84%ec%a0%95%ec%a0%91%ea%b7%bc%ea%b4%80%eb%a6%ac/)
- Theori: OAuth/RBAC designed for humans; proposes intersection of user and agent permissions, read-only by default — [Byline](https://byline.network/2026/04/9-424/); [IT Daily](https://www.itdaily.kr/news/articleView.html?idxno=241495); 스틸리언 CEO: execution-permission and API control is key — [Byline tag](https://byline.network/tag/%ed%99%94%ec%9d%b4%ed%8a%b8%ed%95%b4%ec%bb%a4/)

### Inferences
- The specific scarce skill set is "OAuth 2.x / token exchange / MCP authorization + LLM tool-calling + audit/log pipelines." Korea's on-prem PAM culture produced proxy/session-recording expertise, which maps to *audit* but not to *delegated authorization*. Temporary (1–2 yrs) as cloud identity adoption rises post-망분리.

### Gaps
- No Korean government statistic on AI-security or IAM engineer supply/demand found.

---

## Q7 (H7). Are global agent-security players serving Korea?

### Takeaway
**Thin, distributor-led presence; little localization.** Okta's agent offering is sold via Korean distributors; Palo Alto opened a Prisma AIRS local cloud in **Japan** (Jun 2026) but not Korea; Microsoft Agent 365 is in Frontier preview with no Korea-specific info; Zenity's named Asian customer is SoftBank (Japan). No evidence found of Zenity/Astrix/Noma Korean partners. Barriers: data residency/망분리, Korean certification, small deal sizes, and Korean-language support.

### Cited Findings
- Palo Alto Networks launched Prisma AIRS local cloud in Japan (Jun 2026) for data residency/low latency; no Korea equivalent found — [Palo Alto AU blog](https://www.paloaltonetworks.com.au/blog/2026/06/prisma-airs-launch-japan.md/); Prisma AIRS 3.0 (Mar 2026) adds agent identity/runtime/governance; >100 customers globally — [PANW IR](https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-secures-agentic-ai-prisma-airs-30); [Nasdaq](https://www.nasdaq.com/articles/prisma-airs-emerging-key-growth-driver-palo-alto-networks)
- Microsoft Agent 365 / Entra Agent ID: early access via Frontier preview; announced Nov 2025; no Korea launch details found — [Microsoft Learn](https://learn.microsoft.com/microsoft-agent-365/overview); [ITWorld Korea](https://www.itworld.co.kr/article/4092606/)
- Zenity: Gartner-named leader in agent governance (Apr 2026), $125m raise Aug 2026, SoftBank Corp. public customer — [fintech.global](https://fintech.global/2026/08/04/zenity-lands-125m-as-ai-agent-security-race-heats-up/); [BusinessWire](https://www.businesswire.com/news/home/20260803963850/en/)
- Okta in Korea via 에티버스 / 인성디지탈 distribution — [Byline](https://byline.network/2026/01/26-522/); [Byline](https://byline.network/2026/07/16-693/)
- Zscaler CEO (Oct 2026): agents must get very limited permissions; no Korea launch found — [fnnews via search](https://www.fnnews.com/news/202610070757006223) (snippet)

### Inferences
- Global vendors prioritize Japan over Korea (larger market, SoftBank/NTT channels). In Korea, regulated buyers need on-prem/air-gapped deployment and 금보원/CC paperwork, which SaaS-first US/Israeli startups won't do at Korean deal sizes. This leaves a **localization moat** that is real but shrinks as 망분리 lifts (more SaaS allowed) — partly temporary.

### Gaps
- Could not confirm Astrix, Noma, Aim Security, or Microsoft Agent 365 commercial availability/customers in Korea.

---

## Q8 (H8). Japan comparison

### Takeaway
**Japan shows a similar pattern** — few domestic agent-identity startups; activity is from large incumbents/SIers (NEC, NTT, Trend Micro, MBSD) and global vendors (Okta, Zenity via SoftBank, Palo Alto local cloud). Japan's agent adoption also lags (BCG 2025: 7% integrated vs 13% global). Difference: Japan has no 망분리-equivalent hard legal ban for finance, a larger market that attracts global vendor localization, and domestic AI-security startups like GMO Flatt Security (AI pentest "Takumi") — still offensive/appsec rather than agent IAM.

### Cited Findings
- Gartner Japan (Feb 2026): 59.3% say agent adoption discussion preceded security discussion; Gartner Japan May 2026 6 priority actions, first = agent lifecycle management (registration, identifiers, owners) — [@IT](https://atmarkit.itmedia.co.jp/ait/spv/2605/22/news041.html)
- SailPoint/ITR: 42% of Japanese firms say agents already increased security risk — [ITmedia](https://www.itmedia.co.jp/enterprise/articles/2606/17/news002.html)
- Japan adoption lag: one survey Japan 32% vs global 51%; BCG 2025 agents integrated into workflow Japan 7% vs global 13%; Gartner Japan hypothesis 60% of Japanese firms automate tasks with agents by 2028 — [@IT](https://atmarkit.itmedia.co.jp/ait/articles/2501/15/news045.html); [Impress Cloud Watch](https://cloud.watch.impress.co.jp/docs/news/2086532.html) (snippet aggregation)
- GMO Flatt Security: joined GMO group Feb 2024 (~¥1bn capital); "Takumi byGMO" security AI agent; domestic inference option from 2026-11-02 — [INITIAL](https://initial.inc/companies/A-28891); [voix.jp](https://voix.jp/?p=136768)
- Trend Micro (TrendAI) extended NVIDIA Agent Safety Platform integration (2026-09-30) — [Trend Micro JP](https://www.trendmicro.com/ja_jp/about/newsroom/press-releases/2026/pr-20260930-01.html)
- MBSD began developing domestic security products to protect AI agents/gen-AI — [search summary](https://www.digitaltoday.co.kr/jp/view/35352/korean-security-industry-gains-momentum-on-ai-first-move) (snippet; attribution uncertain)
- NEC + Microsoft for financial AI governance; NTT Docomo Business + IBM Japan AI governance partnership (2026-10-07); ExaWizards + NTT Docomo Business "closed AI agent" (Aug 2026) — [businessnetwork.jp](https://businessnetwork.jp/article/26950); [NTT](https://www.ntt.com/about-us/press-releases/news/article/2026/1007_2.html)
- IBM (2026-10-27) agent identity + least-privilege features reported in Japan — [Kumanichi](https://kumanichi.com/articles/2051022)

### Inferences
- The absence of dedicated agent-IAM startups is **not uniquely Korean** — it is an East-Asian pattern where enterprise security is bought through SIers/incumbents and global vendors, and startup security VC is thin. Korea's specific accelerants of the gap are 망분리 and CC-driven public procurement; Japan's specific accelerant is SIer dominance.
- A Korean startup could treat Japan as the second market (vendors like 소프트캠프 already earn Japan revenue for 쉴드게이트 — [MT](https://www.mt.co.kr/tech/2026/06/29/2026062910101174138)), but global players already localize there.

### Gaps
- No Japanese startup focused specifically on agent identity/permission (LayerX, Ierae, Shisho) was confirmed in search results.

---

## Q9. Synthesis — which barriers are temporary vs permanent; opportunity or trap?

### Takeaway
Of the eight hypotheses, the **demand-timing (H1) and 망분리 (H2) barriers are temporary and actively lifting in 2026–2027**, with 금보원's agent-security criteria (formal 2027) creating the first sellable specification. **Certification/procurement for public sector (H3), market size/pricing/exit structure (H4) are durable.** Incumbent inertia (H5) and talent (H6) are temporary but cut both ways — incumbents will fast-follow once specs exist. Foreign non-localization (H7) is a moat that erodes as SaaS is permitted. Net: the gap is an opportunity for a narrow window (2026-Q4 to ~2028) in finance and large private enterprises, but a trap if the plan relies on Korean public sector or on domestic revenue alone.

### Cited Findings (key evidence per barrier; see sections above for full sourcing)
| Barrier | Evidence | Direction | Est. horizon |
|---|---|---|---|
| Agent production use is early | ServiceNow: multi-step workflows "early", execution 40/100 ([aimatters](https://aimatters.co.kr/news-report/50679/)); 대한상의 SME AI use 4.2% ([Newsis](https://mobile.newsis.com/view/NISX20251118_0003406965)) | Lifting | 1–2 yrs (large firms/finance) |
| 망분리 (finance) | SaaS standing exception 2026 ([Boannews](https://m.boannews.com/html/detail.html?idx=141557)); 75-firm 2nd relaxation, full removal under review ([FSC](https://fsc.go.kr/no010101/87646)) | Lifting fast | <1–2 yrs |
| Spec / evaluation standard | 금보원 AI agent criteria, 17 items, formal 2027 ([SBS Biz](https://biz.sbs.co.kr/amp/article/20000338699)) | Now an enabler | 2027 |
| Public sector separation | N2SF 1.0 (2025), pilots ₩4.5bn 2026; Seoul agent security "long-term" ([Byline](https://byline.network/2026/10/7-518/)) | Slowly lifting | 3–5 yrs |
| Certification class absent | No AI-agent CC/보안기능확인서 class found; new-tech cert friction ([MT 2022](https://www.mt.co.kr/tech/2022/07/11/2022070716301594900)) | Persistent | 2–4 yrs |
| Small, price-depressed market | Info-sec ₩7.1tn; public ordering at 42% of guide min; 10–15% maintenance ([DDaily](https://www.ddaily.co.kr/page/view/2026070210533905889)) | Permanent-ish | structural |
| Weak VC/exit | Fund ₩61.2bn, VCs cite no M&A/IPO exits ([MTN](https://news.mtn.co.kr/news-detail/2026032616393190375)); 시큐레터 ([Boannews](https://m.boannews.com/html/detail.html?idx=128602)) | Permanent-ish; "AI" label partially offsets | structural |
| Incumbent inertia | 소프트캠프/라온시큐어 launched 2026; PAM vendors silent | Temporary; fast-follow risk | 1–2 yrs |
| Talent | 68% can't find AI-experienced hires ([Byline](https://byline.network/2026/06/246/)) | Easing | 1–3 yrs |
| Foreign vendors not localized | Prisma AIRS local cloud Japan not Korea ([PANW](https://www.paloaltonetworks.com.au/blog/2026/06/prisma-airs-launch-japan.md/)); Okta via distributors ([Byline](https://byline.network/2026/07/16-693/)) | Moat that erodes with SaaS allowance | 1–3 yrs |

### Inferences
- **Opportunity signals:** (1) regulator-authored spec with permission/approval/isolation items arriving 2027; (2) chaebol CVCs actively funding AI security (Samsung, LG, Hyundai, Naver into 에임인텔리전스); (3) foreign agent-IAM vendors not localizing on-prem/Korean compliance; (4) global capital ($435m in 6 months) creates acquirer/partner interest.
- **Trap signals:** (1) incumbents with bank footprints (피앤피시큐어, 넷앤드, 소프트캠프, 라온시큐어) can bundle "agent accounts" into existing PAM/DLP at Korean price points once 금보원 audits start; (2) public sector won't buy until a CC class exists; (3) domestic market ceiling + weak exits mean a Korea-only company is hard to finance beyond Series A; (4) Microsoft/Okta platform features (Entra Agent ID, Auth0 for AI Agents) may commoditize identity basics for cloud-forward private firms.
- A defensible wedge appears to be **audit/evidence generation mapped to 금보원 17 items + on-prem deployment + Korea/Japan go-to-market**, rather than generic agent IAM.

### Gaps
- No direct statement found from Korean VCs specifically on agent-security investing theses. No count of Korean financial institutions that have selected agent-security vendors. Full text of 금보원 17 items not obtained (fetch blocked).
