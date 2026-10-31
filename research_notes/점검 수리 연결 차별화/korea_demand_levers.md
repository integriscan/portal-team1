# Korean demand drivers and differentiation levers for an "inspection-to-repair" facility product (as of 2026-10-31)

Method note for the report writer: WebFetch could not resolve any host in this session (DNS ENOTFOUND), so pages were opened with a headless Chromium (Playwright) through the session proxy. law.go.kr and casenote.kr gave back empty pages or errors, and pps.go.kr reset the connection. That means **no statute text was read from the official law portal**. Statutory details below come from opened secondary pages (MOEL notices, law-firm newsletters, Supreme Court commentary, news) or from search snippets. Every finding is tagged one of two ways:
- **[opened]**: I loaded the page and read the cited text myself.
- **[snippet]**: the fact comes only from a search-engine summary. Treat these as lower confidence.

---

## 1. Regulation-driven demand: what records the law forces, how it is enforced, and which inspection regimes require proof that a fix was made

### Takeaway
The strongest legal driver is **not** "do inspections". It is proving that each hazard found was actually fixed.
- MOEL says 92.6% of sites convicted under 중대재해처벌법 (Serious Accidents Punishment Act) violated the hazard identify-and-improve check duty (시행령 제4조 제3호).
- The Supreme Court ruled on 2026-10-20 (2026도7102) that running a 위험성평가 (risk assessment) and receiving its report counts as meeting the procedure and check duties. The **"필요한 조치" (necessary corrective action) duty must still be met separately.**
- From 2026-06-01, the amended 산업안전보건법 제36조 makes 위험성평가 enforceable with fines. Fines start in 2027 for sites with 50+ workers and in 2028 for sites under 50. Separate fines apply for not recording or keeping results, and for not involving workers or not informing them.
- 소방 (fire-system) self-inspection already requires a remediation plan (이행계획) and a completion report (완료보고). 승강기 (elevator) monthly self-inspection has a 10-day e-filing rule and a documented problem with faked inspections.
Together these create demand for timestamped, worker-involved, "issue → fix → proof" records.

### Cited Findings

**중대재해처벌법: which duties actually decide cases**
- MOEL press release of 2026-10-15 [opened]:
  - It published 37 sites whose sentences were finalized in H1 2026, bringing the cumulative total to 81. Earlier batches: 3 sites in 2023, 12 in 2024, 29 in 2025.
  - Across all 81 sites, the most-violated provision was 유해·위험요인 확인·개선에 대한 점검 (check on identifying and improving hazards): **75 sites, 92.6%, 시행령 제4조 제3호**. Next was 안전보건관리책임자 등의 충실한 업무수행을 위한 조치 (measures so safety/health managers can do their job properly): 62 sites, 76.5%, 제4조 제5호.
  - Number of provisions violated per site: 2 provisions at 18.5% of sites, 3 at 38.3%, 4 at 18.5%, 5 at 17.3%, 6 or more at 6.2%.
  - Of the 39 executives in the 37 newly published sites: 1 received a prison term, 35 suspended sentences, 1 a suspended sentence plus a fine, and 2 fines only.
  - [고용노동부 보도자료 2026-10-15](https://moel.go.kr/news/enews/report/enewsView.do?news_seq=20091)
- Example from the same batch, 영풍 석포제련소 (Young Poong Seokpo smelter) [opened]:
  - It was cited for failing 시행령 제4조 items 2, 3, 5 and 9, and also 제5조 제2항 제2호 (budgeting and execution when legally required duties are not met).
  - Its CEO was the first executive arrested and indicted under the Act. The final sentence was 1년6월 (1.5 years) suspended for 3 years.
  - [비즈워치 2026-10-16](https://news.bizwatch.co.kr/article/industry/2026/10/16/0002)
- Supreme Court 2026도7102, decided 2026-10-20 (the 리튬 1차전지 (primary lithium battery) factory fire, 23 deaths) [opened]:
  - The court reads 시행령 제4조 제3호 as three separate duties: ① set up a procedure to identify and improve hazards, ② check at least **once every half-year (반기 1회 이상)** that the procedure is being followed, ③ take the necessary action after the check.
  - When a company sets up a 위험성평가 procedure under 산안법 (the Occupational Safety and Health Act) and runs or commissions an assessment **and receives its results**, duties ① and ② are deemed met. The **필요한 조치 duty must be carried out separately**.
  - In this case the company had risk-assessment rules on paper, but they did not reflect the site's lithium explosion risk, and it had **not actually run an assessment since 2023**.
  - The court also found violations of item 4 (no budget earmarked for heat detectors, segregated storage, or a qualified fire-safety manager) and item 8 (the fire plan lacked a pre-incident response). It found these caused the deaths.
  - Final sentences: CEO 4 years in prison (cut from 15 at first instance after settlement with victims), company fined ₩800M.
  - The commentator concludes: "whether the necessary measures were actually reflected in budget, improvement actions and emergency manuals will be the key issue."
  - [법률신문 판례해설 2026-10-28](https://www.lawtimes.co.kr/news/articleView.html?idxno=228460)
- Lower-court pattern: a risk assessment done without worker participation or opinion-hearing was treated as merely formal. A 2026-09 acquittal turned on checking actual compliance item by item, plus specific proof that the violation caused the harm. [snippet, from search summary of [BKL](https://www.bkl.co.kr/law/insight/newsletter/6731) / [worklaw](https://www.worklaw.co.kr/main2022/view/view.asp?bi_pidx=38803)]
- 대구서부지원 2023고단510 is described as the first acquittal. The court accepted that risk-assessment rules existed and were run regularly, and found no adequate causal link for an unforeseeable accident. [snippet, [한국경제 2025-01-06](https://www.hankyung.com/article/202501069093i)]

**중대재해처벌법: enforcement funnel and sentencing**
- Figures from a 민주노총 (KCTU, a labour federation) statement, cutoff mid-2025 [opened]:
  - 2,986 serious industrial accidents occurred up to 2025-07-24.
  - 1,252 were investigated.
  - 276 were sent to prosecutors with a recommendation to indict.
  - **121 were indicted.**
  - 53 first-instance verdicts up to 2025-07-31: 49 guilty, of which 42 (85.7%) were suspended sentences.
  - Industrial accidents overall rose from 130,348 (2022) to 142,771 (2024).
  - [노컷뉴스 2026-01-27](https://www.nocutnews.co.kr/news/6462594)
- One analysis counted 71 rulings at first instance or above by 2025: 65 guilty (91.5%), 6 acquittals. A court-internal study (2022-01 to 2025-09, 138 guilty verdicts) found 6 of 70 individual defendants got prison terms (8.57%). [snippet, [경향신문 2025-12-16](https://www.khan.co.kr/article/202512162056005); the page returned 403 when opened]
- 국회입법조사처 (National Assembly Research Service) reported an average of 655 days to indictment, and 74% of cases still open more than a year after referral to prosecutors. [snippet, nocutnews/newsis search summary]
- Of 85 executives across the 81 finalized sites, only 3 (3.5%) received prison terms. [snippet, [경향신문 2026-10-15](https://khan.co.kr/article/202610152142005); 403 when opened]

**산업안전보건법 amendment (in force 2026-06-01): risk assessment becomes fineable**
- MOEL 고양지청 (Goyang branch) notice of 2026-08-08 [opened]:
  - 「산업안전보건법」 제36조 amended, in force 2026-06-01.
  - Fines apply from **2027-01-01** for sites with 50+ regular workers (construction: projects ₩5bn or more).
  - Fines apply from **2028-01-01** for sites under 50 workers (construction: under ₩5bn).
  - [고용노동부 고양지청 공지](https://moel.go.kr/local/goyang/news/notice/noticeView.do?bbs_seq=20260800297)
- 율촌 (Yulchon) newsletter [opened]:
  - Fine ceilings: up to ₩10M for not conducting a risk assessment; up to ₩5M for not involving workers or worker representatives, or for not informing workers of the results; **up to ₩3M for not recording and keeping the results**.
  - Workers must be involved through 순회점검, 설문조사, 인터뷰 (walk-round inspections, surveys, interviews).
  - Workers must be told the assessment schedule, the hazards found, the improvement plans, and **"개선대책 이행 계획·결과" (the plan for carrying out improvements, and the results)**. This can be done by education, briefing, posting, or written/electronic means. TBM (pre-work safety meetings) are encouraged for serious hazards.
  - The amendment applies to assessments conducted after 2026-06-01.
  - The same amendment adds an annual **안전보건 현황 공시** (safety/health status disclosure) from 2026-08-01. Under the draft enforcement decree it covers private firms with 500+ workers and builders with ₩120bn+ in annual construction. It must be filed by April 30 each year; non-compliance carries up to ₩10M fine.
  - Yulchon's stated rationale: risk assessments had become paperwork done to avoid 중대재해처벌법 liability.
  - [율촌 Legal Update](https://www.yulchon.com/ko/resources/publications/legal-update-view/44278/page.do)

**Government support budgets: the paid alternative to free tools**
- 2026 클린사업장 조성지원 (Clean Workplace subsidy, run by MOEL and KOSHA (Korea Occupational Safety and Health Agency)) [opened]:
  - **₩533.4bn** total. Process-improvement equipment ₩332bn; construction-site fall/collapse prevention equipment ₩53.4bn; **스마트안전장비 (smart safety equipment, for manufacturing/service firms under 50 workers) ₩37bn**.
  - ₩42.9bn is reserved for sites under 10 workers, which can get up to 90% of costs covered for items that prevent the three main accident types.
  - [파이낸셜뉴스 2026-01-06](https://www.fnnews.com/news/202601061814367113)
- Total 2026 산재예방 (industrial-accident prevention) support budget is ₩2.0723tn. [snippet, search summary citing kbmaeil/heraldk]
- KRAS 2.0, MOEL/KOSHA's free online and mobile risk-assessment system, launched 2025-01-02 [opened]:
  - Offers a 3-level (상·중·하) method and a checklist method, with pre-built templates.
  - Workers can report hazards from a smartphone; results can be shared with workers in real time; a TBM management feature is planned.
  - [KDI 경제정책정보 (MOEL 보도자료)](https://eiec.kdi.re.kr/policy/materialView.do?num=261949)

**소방시설 자체점검 (fire-system self-inspection under 소방시설법)**
- The building's 관계인 (responsible party) must submit the result report **and an 이행계획서 (remediation plan)** to the fire authority within **15 days** of inspection.
  - Within 10 days of submitting, the inspection record must be posted publicly for **30 days or more**.
  - Defective items should be repaired immediately, and a **separate completion-report deadline** applies after the plan is carried out.
  - Common mistake flagged: assuming the inspection contractor handles all reporting.
  - [thecheck.co.kr guide](https://thecheck.co.kr/?p=6595) [opened; this is a secondary guide, not the statute]
- Result-report forms were merged and coded, and online submission through 소방민원센터 (the fire-service e-petition centre) became possible from 2021-04-01. [snippet, [파이낸셜뉴스 2021-03-29](https://www.fnnews.com/news/202103291510108892) / [인천소방](https://www.incheon.go.kr/119/NE030401/2054208)]
- Late or false reports are fined ₩0.5M–2M depending on delay. [snippet, [대구소방](https://www.daegu.go.kr/119/index.do?menu_id=00937680)]
- HADA's own operator (Shopl) explains why chains need this: even when an outside contractor does the inspection, headquarters must keep tracking which site was inspected when, what needs fixing, **and whether the fix was completed**. [opened, [shoplworks blog](https://www.shoplworks.com/blog-insight/fire-inspection-obligation-guide-jun)]
- Exact deadline for the 이행완료 (completion) report: not verified from statute text (see Gaps).
- Reliability warning: an alchera.ai blog claims "2026 real-time digital report linkage" and "blockchain history". It reads like generated content and should **not** be cited as fact. [opened, [alchera blog](https://www.alchera.ai/resource/blog/special-building-fire-inspection-mandatory)]

**승강기 (elevators, under 승강기안전관리법)**
- The managing entity must self-inspect monthly and enter results into 승강기안전종합정보망 (the national elevator safety database) within 10 days. In a July 2026 interpretation, 법제처 (the Ministry of Government Legislation) said weekends and holidays count toward the 10 days. [snippet, search summary of [opinion.lawmaking.go.kr](https://opinion.lawmaking.go.kr/nl4li/lsItptEmp/451021)]
- Price competition drives poor and **false inspections**. Example given: staff who were hospitalized or on leave appear as the inspector of record. [opened, [전북일보 사설](https://www.jjan.kr/article/20240805580169)]
- Gangnam-gu's 2026 special inspection of buildings 15+ years old found issues in 21.8% of elevators (676 units). [snippet, [강남구](https://www.gangnam.go.kr/board/B_000031/1071544/view.do?mid=ID01)]

**공중화장실 (public toilets, under 공중화장실법)**
- The 2021 amendment created duties for central and local government and mandated emergency bells, in full effect from 2023-07-21.
- MOIS (Ministry of the Interior and Safety) guidance requires checking emergency-bell operation and illegal hidden cameras **every half-year**.
- Jeonnam: emergency-bell installation rate of about 60–66%, and 173 bells linked to no responding agency.
- [snippet, [행안부](https://mois.go.kr/frt/sub/a06/b06/safeNconvEC/screen.do) / [서울신문 2024-11-07](https://m.go.seoul.co.kr/news/2024/11/07/20241107500062); the MOIS page returned no text when opened]

**건축물관리법 (Building Management Act) periodic inspection**
- First inspection within 5 years of the use-approval date, then every 3 years. Applies to multi-use buildings (5,000㎡+ of specified uses, or 16+ floors) and semi-multi-use buildings (1,000㎡+). Non-compliance is fined.
- [snippet, [서울시 주택분야](https://news.seoul.go.kr/citybuild/archives/29818) / [강동구](https://www.gangdong.go.kr/web/newportal/press/15499)]

**Public procurement routes**
- 혁신제품 (innovation product designation, run by PPS (조달청, the Public Procurement Service)) [opened]:
  - 60 products designated in the 2nd 2026 round (2026-04-15). The batch included an "온디바이스 AI 연동 스마트 산업재해 예방 시스템" (on-device AI industrial-accident prevention system).
  - Designation allows **sole-source (수의계약) contracting for up to 6 years**, plus 구매목표제 (purchase targets), 구매면책 (purchasing-officer liability waiver), and 시범구매 (PPS buys the product with its own budget for agencies to trial).
  - PPS plans a separate AI evaluation track.
  - [헤럴드경제 2026-04-14](https://www.heraldk.com/article/2026041419295749088)
- 혁신시제품 (pre-commercial innovation product) route: products and services at TRL 7+ (near commercial). Paths are 공급자제안형 (supplier-proposed) and 수요자제안형 (agency-proposed); evaluated on 혁신성·공공성 (innovativeness and public value). [snippet, [조달청](https://pps.go.kr/kor/content.do?key=00648); the page reset the connection]
- 2026 시범구매 budget ₩3.9bn (+60%). [snippet, [보안뉴스](https://m.boannews.com/html/detail.html?idx=140238)]
- 디지털서비스 전문계약제도 (fast-track public contracting for cloud/SaaS) [opened]:
  - Public bodies can buy CSAP-certified (public-sector cloud security certification) SaaS by sole-source or catalogue contract.
  - Cumulative ₩336.1bn across 654 contracts by March 2023.
  - SaaS was 14.9% of 309 listed services (46).
  - The ministry with the most contracts was 과기정통부 (Ministry of Science and ICT) at ₩187.7bn. 고용노동부 (Labour) had ₩2.3bn.
  - [아주경제 2023-03-11](https://www.ajunews.com/view/20230311091704452)
- HADA states it is certified against 과기정통부/KISA (Korea Internet & Security Agency) security standards and markets itself to government and public bodies. [opened, [hadaworks.com](https://www.hadaworks.com/)]

### Inferences
- The legally weakest point for Korean employers is the 필요한 조치 step, now confirmed by the Supreme Court. It is exactly the "dispatch repair → prove completion" half of the product. A QR checklist (HADA's core) records that a check happened. The defensible evidence is a closed loop: hazard → assigned owner/budget → vendor work order → before/after proof → sign-off by the 경영책임자 (accountable executive) or delegate, plus a half-year roll-up to that executive.
- The fine clock (2027-01 for 50+, 2028-01 for under 50) gives a dated selling window. Separate fines for "not recording or keeping" (≤₩3M) and "not informing workers of 이행 결과" (≤₩5M) make built-in worker notification (KakaoTalk/SMS posting of improvement results) a compliance feature, not a nice-to-have.
- KRAS 2.0 is free and covers risk-assessment authoring, worker hazard reporting and TBM. A startup should not compete on 위험성평가 forms. It should integrate with or import from KRAS and own the remediation/vendor/proof layer that KRAS lacks.
- Fire-system 이행계획 → 완료보고 and elevator monthly e-filing are regulated "defect → repair → report" loops already performed by licensed contractors. A product that makes the licensed contractor's completion proof verifiable (geotag, timestamp, staff identity) addresses the documented false-inspection problem.
- Fastest public route is probably 디지털서비스 전문계약 (requires CSAP) or small direct sole-source buys by local governments. 혁신제품 gives up to 6 years of sole-source but needs TRL 7+ and an evaluation process. That is realistic for a 3-person team only with a public-value story, such as public-toilet safety or 지자체 facility complaints.

### Gaps
- Exact statute text of 중대재해처벌법 시행령 제4조/제5조, 소방시설법 시행규칙 (completion-report deadline), 승강기법 시행령 제29조, and 전기안전관리법 remote inspection: law.go.kr and casenote.kr could not be loaded. Needs verification on law.go.kr.
- No reliable 2025 or 2026 official totals for indictments; latest found is KCTU's mid-2025 figure of 121.
- 전기안전관리법 원격점검 (remote electrical inspection): search found only 2021–2023 items (2021 amendment enabling remote monitoring centres; 2023 remote monitoring/control notice). No 2025–2026 change found.
- 식품위생 위생등급제 (food hygiene grading), 시설물안전법 (Facility Safety Act), and school facility inspection rules were not researched in depth (budget limits).
- No evidence of any startup holding a 혁신제품 designation specifically for facility repair-workflow SaaS.

---

## 2. Market size and spend

### Takeaway
- Korean FM is cited at ₩6.8tn by 에스원 (S-1).
- Franchise outlets total about 380k (379,739), across 9,960 franchisors.
- Apartment 장기수선충당금 (long-term repair reserves) total about ₩11tn and are heavily regulated, with disputes reported.
- Hard figures on per-store repair spend and on aging of 시설관리 (facility maintenance) workers are thin.

### Cited Findings
- 에스원 positions itself in a "6조8000억원 규모의 국내 FM 시장" (₩6.8tn domestic FM market) [opened]:
  - Its infrastructure-services segment had ₩771.6bn revenue in 2024, 28% of the total.
  - It claims 300+ buildings under management.
  - It launched "타입별 FM 서비스" (FM tiers priced by floor area, budget and defect-repair needs) and an "Essential Points Modeling" approach.
  - [딜사이트 2025-07-21](https://dealsite.co.kr/articles/144928)
- IMARC estimates the Korean FM market at US$1.5bn in 2024, rising to US$4.0bn by 2033. This definition differs sharply from S-1's figure. [snippet, [IMARC](https://www.imarcgroup.com/report/ko/south-korea-facility-management-market)]
- 공정위 (Fair Trade Commission) 2025 franchise statistics [opened]:
  - End-2025: 9,960 franchisors (+13.2%), 13,725 brands (+10.9%), **379,739 outlets** (+4.0%).
  - Outlet counts and sales are measured on end-2024 disclosure data.
  - Average outlet sales ₩370M (+4.3%); restaurant outlets ₩351M (+6.1%).
  - 차액가맹금 (franchisor's markup on supplies) in restaurants rose 13.0%, to 4.4% of sales.
  - Korean-food (한식) outlets: 43k.
  - [뉴시스 2026-04-11](https://mobile.newsis.com/view/NISX20260411_0003587198)
- 가맹사업법 제12조의2 bans forcing store renovations without just cause; just causes are limited to voluntary consent, hygiene or safety. The franchisor must bear up to 40% of renovation cost. 61% of closed-store owners said they had been forced to renovate (2012 FTC survey). [snippet, [비즈한국](https://bizhankook.com/articles/30711.html) / [뉴데일리 2012](https://biz.newdaily.co.kr/site/data/html/2012/04/10/2012041010002.html)]
- 장기수선충당금 [opened]:
  - Cumulative apartment reserves were **₩11.0924tn** as of May 2026, up from ₩3.17tn at end-2015, passing ₩10tn in 2025.
  - Spending requires a plan approved by the 입주자대표회의 (residents' council), a separate bank account, monthly public disclosure on K-apt (the national apartment management portal), and an annual external audit.
  - The long-term repair plan looks 40 years ahead and is reviewed every 3 years.
  - In May 2026 MOLIT (국토부) announced tougher penalties for misuse.
  - [한국경제 2026-07-30](https://www.hankyung.com/article/2026073063181)
- Another figure, ₩11.168tn as of June 2026, comes from MOLIT audit data. [snippet, [MTN](https://news.mtn.co.kr/news-detail/2026100715233953806)]
- Aging workforce: in the 2023 노인실태조사 (national survey of older adults), 경비·수위·시설관리 (security guard / caretaker / facility maintenance) was the second most common job for people 65+ at **18.1%** (after farming at 24.5%). 31 security guards died of overwork-related cardiovascular disease in 2024 (근로복지공단, the workers' compensation agency). [snippet, [프레시안 2025-07-08](https://pressian.com/pages/articles/2025070811233774104)]
- US multi-site benchmark: Prefix (US) says multi-site operators lose 10%+ of margin to facility-management errors and inefficiency. It serves about 50 customers and ~2,000 locations (Chipotle, Bojangles, Famous Footwear), raised a US$7.5M seed, and reached US$2.5M ARR in 2 years. These are company-reported. [opened, [토큰포스트](https://www.tokenpost.kr/news/tech/349554)]

### Inferences
- A franchise outlet averaging ₩370M in sales will not pay much for SaaS. The economic buyer is the franchisor (9,960 of them, most small). The real target is the few hundred large brands that run multi-site maintenance, where Shopl/HADA already sells.
- 장기수선충당금 is large, but spending is controlled by residents' councils and procurement rules (tenders and disclosure). It suits transparent quote comparison and completion proof for residents, not a fast SaaS wedge for a 3-person team.
- Both the S-1 ₩6.8tn figure and the IMARC figure are positioning numbers. Neither defines the "repair dispatch" spend the product would intermediate.

### Gaps
- No source found for average annual repair/maintenance spend per franchise store in Korea, or for franchisor maintenance budgets.
- No 통계청 or 고용노동부 figure for the age distribution of 시설관리 workers (only the indirect 65+ job-share stat).
- No Korean data on logistics-centre or school maintenance spend (not researched for budget reasons).

---

## 3. Differentiation levers with evidence

### Takeaway
HADA is **not** just a QR checklist.
- It already sells 이슈 & 해결 (photo issue reports through to resolution), QR 민원 (visitor complaints via QR), and a "중대재해·위험성평가 / 조치 내역 관리" (serious-accident / risk-assessment action-record) use case.
- Pricing: free up to 5 facilities, ₩3,000 per facility per month, ₩2,400 per facility at 101–300 facilities.
- Claims 100,000+ facilities under management.
- It is operated by **샤플앤컴퍼니 (Shopl & Company)**, which is also on the acquirer list.

So a defensible wedge has to go past "issue → resolved" status tracking. Candidates:
- (a) Actually **dispatching outside repair vendors and capturing quote/price/completion**, which HADA does not appear to do.
- (b) **Evidentiary-grade, tamper-evident proof** tied to the specific legal duties: 시행령 제4조 제3호 필요한 조치, 산안법 제36조 worker notification, fire-system 이행완료, elevator monthly e-filing.
- (c) **AI triage** that deflects jobs. Global vendor claims put this around 23–30% of requests resolved without a truck.

### Cited Findings

**HADA: what it already does** [opened]
- Pricing:
  - Free: up to 5 facilities, all features.
  - Standard: ₩3,000 per facility per month, rising to ₩2,400 for 101–300 facilities. Includes a free on-site training visit and unlimited free QR stickers.
  - Enterprise: 301+ facilities, custom API/reports/security review.
  - No contract term, no setup fee, VAT extra.
  - Footer: "(주)샤플앤컴퍼니 … hada@shoplworks.com".
  - [하다 요금 안내](https://www.hadaworks.com/pricing)
- Home page:
  - Feature modules: 시설 점검 (inspection), **이슈 & 해결** ("현장 사진으로 정확한 이슈 보고 … 발생부터 해결까지 이슈 내역을 한눈에": photo issue reports, tracked from occurrence to resolution), **민원 관리** (visitor QR complaints).
  - Use-case tiles include 소방 (fire), 승강기 점검 (elevators), 전기 설비 (electrical), and "중대재해 • 위험성 평가 — 위험성 예방 점검 / 조치 내역 관리" (serious accidents / risk assessment: preventive checks and action-record management).
  - Web-based, no app install, ERP integration offered.
  - Named customers: 한국공항공사 (Korea Airports Corporation), 한국해양수산연수원 (Korea Institute of Maritime and Fisheries Technology), 신젠타코리아 (Syngenta Korea), and a local-government sanitation team managing "공중화장실 100곳" (100 public toilets).
  - [hadaworks.com](https://www.hadaworks.com/)
- 한국공항공사 case: 500+ amenity facilities across 14 airports; cleaners input inspections on a live dashboard. Favourite features: photo attachments, statistics, 이슈&해결. [opened, [HADA case](https://www.hadaworks.com/blog-usecases/korea-airports-corporation-convenient-facility-management-for-14-airports-nationwide)]
- 삼천리ENG (Samchully ENG) safety team uses HADA for 중대재해처벌법 response. They previously used paper plus Excel with photos stored separately, and had built their own app, which was costly to maintain and impractical in the field. [opened, [HADA case](https://www.hadaworks.com/blog-usecases/samchullyeng-safety-management)]

**AI triage and deflection (global evidence; all vendor-reported)** [opened]
- Latchel:
  - "Step-by-step fixes with the resident. **23% of requests end here**."
  - "Experts de-escalate **48% of emergencies**."
  - "About **80% of jobs run from request to invoice without a person touching them**."
  - A customer quote claims about 10% lower client maintenance costs per year.
  - [Latchel maintenance services](https://latchel.com/property-management-software-features/property-maintenance-services/)
- Latchel earlier claimed 30% resolved by phone. [snippet, [Latchel podcast](https://podcast.latchel.com/e/ep-14-troubleshoot-maintenance-costs-away-with-our-ultimate-guide)]
- Property Meld offers keyword-triggered auto-troubleshooting instructions but publishes no deflection rate. [snippet, [Property Meld guide](https://propertymeld.com/blog/guide-to-property-maintenance-troubleshooting/)]

**Korean safety and compliance apps (competitors for the "action record" claim)**
- KRAS 2.0 (government, free): risk assessment, mobile hazard reporting by workers, sharing results, TBM. [opened, [KDI/MOEL](https://eiec.kdi.re.kr/policy/materialView.do?num=261949)]
- 안전함 (by 한국스마트안전보건협회, the Korea Smart Safety & Health Association): risk assessment, TBM, digitized statutory documents, worker-participation records; listed free on the App Store. Plan2Do: 1 site free, photo hazard registration, risk assessment and TBM. Paid pricing for neither was found. [snippet, [App Store 안전함](https://apps.apple.com/us/app/%EC%A4%91%EB%8C%80%EC%9E%AC%ED%95%B4-%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%95%88%EC%A0%84tv/id1600012292?uo=4) / [Plan2Do](https://apps.apple.com/us/app/plan2do/id6473452985)]
- Other QR or patrol apps exist: 점검인, 다돈다(DADONDA). [snippet, [App Store 점검인](https://apps.apple.com/kr/app/%EC%A0%90%EA%B2%80%EC%9D%B8-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%8B%9C%EC%84%A4%EB%AC%BC%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C/id6475960901?l=ko) / [다돈다](https://apps.apple.com/kr/app/%EB%8B%A4%EB%8F%88%EB%8B%A4-dadonda-%EC%8B%9C%EC%84%A4-%EC%88%9C%EC%B0%B0-%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C/id1457811521)]

**Repair marketplaces and field-service players in Korea (dispatch side)**
- 마이스터즈 (Meisters), a blue-collar field-service company for appliance installation and repair:
  - Seeking a ₩20bn new round.
  - Building an AI operating system for technician dispatch and fault diagnosis.
  - Joined NVIDIA Inception.
  - [opened, [유니콘팩토리](https://www.unicornfactory.co.kr/hashtag/천홍준)]
- 수리엔 (Surien): B2B equipment after-sales platform (POS, kiosks) connecting businesses with vetted technicians; reported Series A in July 2025. [snippet, [dealroom](https://app.dealroom.co/companies/surien); Cloudflare blocked the page]
- 세컨드유레카 (Second Eureka): franchise-builder platform that also handles store management for franchisors; pre-Series A from 더벤처스 (The Ventures). [snippet, [벤처스퀘어](https://www.venturesquare.net/936096/)]
- US comparables: 86 Repairs (restaurant equipment repair, US$15.2M Series A, McDonald's and Taco Bell franchisees) [snippet, [Built In Chicago](https://www.builtinchicago.org/articles/86-repairs-raises-15m)]; Prefix (above, [opened]).

**Take rate and fee tolerance among small Korean tradespeople**
- 숨고 (Soomgo) charges tradespeople per quote sent (credits), not a percentage of the job.
  - Reported prices: ₩2,700 per quote message (2020) and ₩3,000–4,000 in later analyses.
  - Credits are not refunded if no deal results.
  - Tradespeople pushed back in 2020.
  - In popular categories, quote costs can exceed ₩10,000 a day.
  - Comparison: 크몽 (Kmong) takes 20% of transaction value.
  - [snippet, [일간스포츠 2020](https://isplus.com/article/view/isp202004240015) / [demoday BM 분석](https://demoday.co.kr/bm-analysis/104); the demoday page returned almost no text when opened]

### Inferences
- **The differentiation is not "issue tracking".** HADA has it at ₩3,000 per facility with a free tier. A 3-person team cannot win on QR checklists or issue boards. The gap HADA leaves (per its own pages) is the **outside-vendor leg**: requesting quotes, dispatch, technician-side completion proof, price history, and invoice matching. That is where Latchel, Prefix and 86 Repairs make money.
- **"Legally defensible proof" needs to be specified against the court test:**
  - Each hazard links to an action, a responsible person, budget approval and completion evidence.
  - A half-year summary is delivered to the 경영책임자, with a recorded acknowledgement.
  - Worker notification of 이행 결과 is logged (산안법 제36조).
  - Records are kept for 3 years and are tamper-evident: server timestamp, device GPS, photo hash, immutable audit log.
  - No Korean competitor was found that markets "court-grade" proof explicitly. HADA's "조치 내역 관리" is the closest claim (not verified in depth).
- **AI triage:** the 23% at-intake deflection figure (Latchel, residential) probably overstates what commercial/F&B stores would see, because equipment faults need technicians more often. It is still a plausible pitch to franchisors as cost avoidance. Voice or photo reporting in Korean for older 시설관리 staff (65+ make up 18.1% of the elderly workforce in these jobs) is a usability lever HADA's web QR flow already partly covers with photos. Voice-to-structured-ticket is not advertised by HADA.
- **Take rate:** Korean tradespeople resist pay-to-quote and percentage fees (the 숨고 controversy). A B2B model where the **franchisor or building owner pays a SaaS fee and vendors join free**, perhaps with a small payment-processing fee, fits the market better than a consumer-style marketplace commission.
- **Vertical candidates, by evidence strength:**
  1. Franchise F&B/retail chains. 380k outlets; HQ must track fire inspections and fixes across stores (Shopl's own blog); US proof points (Prefix, 86 Repairs). But HADA/Shopl owns relationships here (이랜드 (E-Land), 샤넬코리아 (Chanel Korea) use Shopl per search snippet).
  2. 50–299-worker manufacturing and logistics sites facing 2027-01 fines. Strongest legal pull, and subsidies exist for smart safety equipment (₩37bn).
  3. Local-government public toilets. Half-year legal checks and emergency-bell failures; HADA already has a reference customer.
  4. Apartments. Large reserve pool but slow and political buyers.

### Gaps
- No Korean data on what share of facility issues are resolved without a technician.
- Paid pricing for 안전함, Plan2Do, and Korean EHS platforms (e.g., 세이프티플러스) not found. Could not confirm a product called "세이프티플러스".
- Did not verify whether HADA's 이슈&해결 supports outside-vendor dispatch or quotes; the home page only shows internal assignment and notifications. Worth a hands-on trial (worker demo password shown on the site: 1234).
- No Korean survey found on whether small repair vendors accept commissions.

---

## 4. Exit angle: potential Korean acquirers

### Takeaway
The most natural strategic buyer, 샤플앤컴퍼니, **already owns the benchmark competitor (HADA)**. That makes it a possible acquirer of a complementary repair-dispatch or proof layer, but also the most direct competitor. 에스원 is actively productizing FM and AI services. No public statement was found from any Korean conglomerate FM arm about acquiring facility-tech startups.

### Cited Findings
- HADA's legal operator is (주)샤플앤컴퍼니 (CEOs 이준승, 장세희), with a shoplworks.com contact email. [opened, [HADA pricing footer](https://www.hadaworks.com/pricing)]
- Shopl's store-operations customers reportedly include 이랜드, 샤넬코리아, 쌤소나이트 (Samsonite), 발뮤다 (Balmuda). Early investors were former Samsung executives. Overseas expansion after a Samsung Electronics Mexico pilot. [snippet, search summary citing 서울경제 / [shoplworks 이랜드 사례](https://www.shoplworks.com/es/blog-usecases/eland-streamlined-everything-managing-hundreds-stores-employee-communication-human-resource)]
- 에스원 [opened]:
  - Launched tiered FM services. At the first site, 도드람타워 (Dodram Tower), it used specialist outsourcing instead of on-site staff for defect repairs.
  - Pursuing AI and IoT smart building management.
  - Q1 2025 revenue ₩674.1bn, operating profit ₩55.1bn.
  - Leadership: the article lists "정해린 삼성물산 사장" (a Samsung C&T president) being named S-1's new CEO.
  - [딜사이트](https://dealsite.co.kr/articles/144928)
- 마이스터즈 is raising ₩20bn for an AI dispatch OS. It is a possible partner, competitor or consolidator on the technician side. [opened, [유니콘팩토리](https://www.unicornfactory.co.kr/hashtag/천홍준)]

### Inferences
- A product that plugs into HADA/Shopl (QR inspection in, repair dispatch and proof out) has a plausible acqui-hire or tuck-in path with Shopl. Head-on competition in QR inspection does not.
- 에스원's shift from on-site FM staff to outsourced specialist repair suggests it needs vendor-dispatch tooling at its 300+ buildings. That supports targeting FM operators as channel partners and later acquirers.

### Gaps
- No public M&A statements found for 삼성물산/KT/한화 FM, 롯데/신세계/CJ FM affiliates, 세콤 (Secom), builders or PropTech players about buying facility-tech (not searched exhaustively for budget reasons).
- Shopl's latest funding, revenue, and HADA's revenue: not found.
