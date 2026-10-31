# Korean players connecting facility inspection/issue reporting to repair execution (as of 2026-10-31)

Method note: hadaworks.com, company sites, Korean news articles and Apple's App Store lookup API were fetched directly with curl (WebFetch could not resolve hadaworks.com in this session; curl through the proxy worked). Naver News search was used for discovery. Facts marked **[snippet]** come only from a search-result title or search-engine summary, not from a page I opened. platum.kr, thevc.kr, hankyung.com (some articles) and news1.kr blocked direct fetches, so those facts are snippet-only.

## Q1. Who in Korea does what on the inspection → work order → dispatch → completion proof → payment chain? (player map by category)

### Takeaway
Korea has many inspection/CMMS tools (하다, 터치체크, 체크업, Jump, MintCheck, 노크매니저, 아파트너스 AFMS). All of them stop at **internal** issue tracking or at a list of 협력업체 (partner vendors). I found none that automatically sends an external repair vendor and takes a per-job fee. The "detect → dispatch → complete → settle" chain does exist, but only inside **managed-service operators** that employ or contract their own technicians: 마이스터즈/기술자들 (appliance installation/AS, 400+ engineers), 컨텍터스 둥지 (small and mid-size buildings, hub-based rounds with an in-house construction subsidiary), large FM firms (에스앤아이, 에스원), and captive franchise systems (BGF리테일 통합유지보수 운영시스템, 똑수리). Consumer O2O (숨고, 오늘의집, 당근) runs lead-gen or subscriptions for tradespeople, not work-order dispatch for facility managers. The closest overseas analogs (Prefix, 86 Repairs, ResQ) are US/Canadian. I found no Korean equivalent with funding coverage.

### Cited Findings

**(1) Inspection / CMMS SaaS**
- 하다(HADA), run by (주)샤플앤컴퍼니 (대표 이준승·장세희, 서울 강남구 도곡로 111): QR-sticker inspection with no app install. Modules are 시설 점검, 이슈 & 해결 and 민원 관리 (marked "New" in the nav; some homepage sections still say "출시 예정"). Use cases listed include 제조 5S, 미화, 소방(소화기·소화전), 순찰, 전기(배전함·승강기), and 중대재해 위험성평가 조치 내역 관리. Integrations: "기존 ERP 시스템 연동", "사내 정책 맞춤 개발". — [hadaworks.com (opened)](https://hadaworks.com)
- 하다 "이슈 & 해결" is purely internal. The worker reports with photo or video "담당자에게 바로 접수", the 담당자 gets a real-time alert and "해결 내용도 손쉽게 공유", and the 관리자 sees unresolved issues and can download issue-resolution history. The page never mentions an external vendor, quote, dispatch or payment. — [hadaworks.com/features/issue-resolve (opened)](https://hadaworks.com/features/issue-resolve)
- 하다 민원 관리: visitors submit complaints by QR with a photo, staff get real-time alerts, and complaints are managed by type and facility with comment threads. — [hadaworks.com/features/complaint-management (opened)](https://hadaworks.com/features/complaint-management)
- 하다 pricing: free up to 5 facilities. Standard is ₩3,000 per facility per month (1–100 facilities) and ₩2,400 (101–300, -20%). Enterprise (301+) is quoted separately. No contract, no setup fee, free QR sticker shipping, free on-site training, VAT extra. The Free and Standard plans have the same features. "+100,000개 이상의 시설이 관리". Billing is postpaid and charged on the 10th of each month. — [hadaworks.com/pricing (opened)](https://hadaworks.com/pricing)
- 하다 customer cases named on the homepage: 한국공항공사 (14 airports), 한국해양수산연수원, 신젠타코리아 (5S 3정), and a public-toilet case (100 toilets, 환경미화팀 주무관). The site also claims KISA security certification. — [hadaworks.com (opened)](https://hadaworks.com)
- 하다 was first launched as a "방역, 청소 등 작업 증빙 서비스" (work-proof service). **[snippet: headline only]** — [플래텀](https://platum.kr/archives/148660); [뉴스웍스](http://www.newsworks.co.kr/news/articleView.html?idxno=488441)
- 샤플앤컴퍼니 raised a ₩6B Series A led by IMM인베스트먼트, with TBT, KDB산업은행 and IBX파트너스 participating, 2.5 years after a 2019 Pre-A. The core product is Shopl (a field-staff collaboration tool), and 하다 is described as used by 백화점 and 인천국제공항. THE VC lists founding as Dec 2015. **[snippet]** — [벤처스퀘어](https://www.venturesquare.net/848254/); [THE VC](https://thevc.kr/shoplncompany)
- 샤플 exhibited at the 2023 건물유지관리산업특별전 (KINTEX). **[snippet: headline]** — [시선뉴스](http://www.sisunnews.co.kr/news/articleView.html?idxno=178249)
- 터치체크 (touchcheck.kr): scheduled inspections, assignee scheduling, offline mobile capture, 문제사항 recording, PDF reports, and AI-generated checklist drafts. Verticals are manufacturing, building/facility and construction. No vendor dispatch is described. — [touchcheck.kr (opened)](https://touchcheck.kr/)
- 체크업 (Checkup Co., founded 2012, CEO 신동륜): inspection and FEMS (energy) plus SAPS (중대재해 prevention). Claims "500개 이상의 상업용 빌딩… 호텔, 지자체 시설". Named clients are 롯데마트 (130 stores; it adopted Checkup because the turnover of its FM outsourcing contractors broke continuity of reporting), 토탈셈 (FM outsourcer for 롯데월드몰, 롯데마트, 다이소 and 현대차 showrooms), KT-SNC (FM for KT branch offices) and 동대문구시설관리공단. — [checkupv.com (opened)](https://www.checkupv.com/); [checkupv.com/partners (opened)](https://www.checkupv.com/partners)
- Jump (도란시스템): FMS/CMMS and a hospital FMS. Requesters file repair requests in an app and get plan/result notifications. Facility records cover "일상점검, 법정검사, 외주점검, 유지보수이력". Work orders record materials, labor and cost. It also tracks legal-inspection schedules and does GPS attendance for dispatched staff. It manages outsourced inspections but does not source vendors. — [jumpms.com/fms.php (opened)](https://jumpms.com/fms.php)
- 아파트너스 (APTNERS, a separate company from 아파트너) "시설관리시스템" (AFMS): building info and **협력업체 관리**, repair cycles with 단가 and 수선이력, materials and tools, 공사/민원 tracked by status. App login is limited to AFMS contract customers. — [App Store via iTunes lookup (opened)](https://apps.apple.com/kr/app/%EC%8B%9C%EC%84%A4%EA%B4%80%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C/id1616461155)
- MintCheck (Mint Candi, Inc.): a new QR inspection and work-management app (App Store release 2026-10-19). Workers scan an asset QR, open the checklist, get push notifications for assigned work, and an anomaly persists until resolved. Supports 37 languages, and the web console includes 민원. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/mintcheck-%EC%8B%9C%EC%84%A4-%EC%A0%90%EA%B2%80-%EC%9E%91%EC%97%85-%EA%B4%80%EB%A6%AC/id6794798173)
- 리픽스 REPIX (GrooEmber Inc., app released 2026-06): inspector app for 정보통신·기계설비 성능점검 that auto-generates reports. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/%EB%A6%AC%ED%94%BD%EC%8A%A4-%ED%98%84%EC%9E%A5%EC%A0%90%EA%B2%80%EC%9E%90%EC%9A%A9/id6776461069)
- 도와줘365 (MAKEBIZ): attendance, facility inspection/patrol and complaint handling, with results sent back to the complainant. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/%EB%8F%84%EC%99%80%EC%A4%98365/id1666745903)
- Other inspection apps on the KR App Store that I did not investigate: 세이프허브 시설물점검, 다돈다 (시설·순찰), Moco FM, SH-BMS, 바로 스마트 시설관리, 스페이스투두, 보고서넷. — App Store search results: [세이프허브](https://apps.apple.com/kr/app/%EC%84%B8%EC%9D%B4%ED%94%84%ED%97%88%EB%B8%8C-%EC%8B%9C%EC%84%A4%EB%AC%BC%EC%A0%90%EA%B2%80-%EC%8B%9C%EC%8A%A4%ED%85%9C/id6475960901), [다돈다](https://apps.apple.com/kr/app/%EB%8B%A4%EB%8F%88%EB%8B%A4-dadonda-%EC%8B%9C%EC%84%A4-%EC%88%9C%EC%B0%B0-%EA%B4%80%EB%A6%AC-%EC%8B%9C%EC%8A%A4%ED%85%9C/id1457811521)
- "점검인": no Korean product by this exact name appeared in KR App Store searches or Naver News for "점검인 앱" (Naver results were unrelated). It could not be verified.

**(2) B2B facility maintenance/repair: managed services, marketplaces, FM firms**
- 마이스터즈 (brand "기술자들"; founded 2019; CEO 천홍준, a former #1 AS engineer). It explicitly says it is "not a matching platform". It contracts with enterprises and runs the whole order → assignment → execution → quality verification → **settlement** chain in its own ERP/AI system. It has 25 service centers and 400+ engineers on 도급 (subcontract) agreements with 5-day rotation for 365-day coverage, 300+ corporate clients (쿠팡, 캐리어, 경동나비엔, 전자랜드) and 220k+ cumulative jobs. Revenue: ₩2.4B (2021), ₩3.0B (2022), ₩4.8B (2023), ₩12.3B (2024), ~₩27.6B (2025), with a ₩50B target for 2026. It is pursuing a ~₩20B Series B. — [전자신문 2026-10-14 (opened)](https://www.etnews.com/20261014000387)
- 마이스터즈 has three modes: (a) outsourced installation/AS for manufacturers and retailers, (b) regular maintenance contracts with corporate clients, (c) offline AS centers run with retailers. It planned a B2C "홈플래너" brand for H2 2026, and expansion to construction sites and overseas. Venturesquare gives 2025 revenue as ₩26.8B (CAGR 91%) and 412 engineers, with targets of ₩100B (2027) and ₩300B (2028). The two sources differ slightly on 2025 revenue (₩26.8B vs ~₩27.6B). — [벤처스퀘어 (opened)](https://www.venturesquare.net/1078177/)
- 마이스터즈 was selected for NVIDIA Inception and planned an "AI 기반 주거관리 서비스" launch in Aug 2026. **[snippet: headline]** — [전자신문](https://www.etnews.com/20260729000184)
- 컨텍터스 "둥지" (small and mid-size building management). Its "거점기반 순환출동형" model was finalized in Sep 2022: each hub has a 지점장 plus facility, admin and brokerage staff (~10 people) and manages 50+ buildings across 강남·강북·분당·일산. It bundles FM, LM (leasing) and PM (asset management). The platform keeps 협력업체 contacts; in a leak case the COO looked up a vendor and dispatched within 5 minutes, versus "1–2일" at legacy firms. 2024 revenue was ~₩4.8B, growing 3x+ a year since 2021. It set up a 중개법인 and a **시공 자회사** (construction subsidiary). In 2024 it signed a management contract with a large conglomerate covering ~60 affiliates and is bidding on "대기업 프랜차이즈 관리" contracts. The 2025 focus is reaching BEP. — [벤처스퀘어 (opened)](https://www.venturesquare.net/969920)
- 컨텍터스 raised a ₩2B Series A (Apr 2024) and was selected for 초격차 스타트업 1000+ (2025). **[snippet: headlines]** — [한국경제](https://www.hankyung.com/article/202404010322i); [플래텀](https://platum.kr/archives/225394); [서울경제](https://www.sedaily.com/NewsView/2GRCQUAYTL)
- 똑수리 (WECARE Co., Ltd.): store-focused service ("매장청소, 유지보수, 간판세척"). The customer site lists 식기세척기 A/S, 전문 청소 and 배관 막힘/누수, plus a "긴급 요청" button where "본사 담당자가 작업자를 배정". The worker app limits sign-up to certified pros, pushes job requests by region, shows expected settlement amounts and has an "의뢰 콜 중단" toggle. This is a true dispatch + settlement marketplace for stores, but small: 0 App Store ratings, worker app last updated 2024-04. I found no news coverage. — [ddoksuri.com (opened)](https://ddoksuri.com); [App Store 똑수리 작업자전용 (opened via lookup)](https://apps.apple.com/kr/app/%EB%98%91%EC%88%98%EB%A6%AC-%EC%9E%91%EC%97%85%EC%9E%90%EC%A0%84%EC%9A%A9-%EB%A7%A4%EC%9E%A5%EC%B2%AD%EC%86%8C-%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98-%EA%B0%84%ED%8C%90%EC%84%B8%EC%B2%99/id1625838649)
- 대흥이앤씨 (Daeheung E&C) runs "매장 유지보수 – 지점, 직영, 시설관리" (customer app) and "시설유지보수 – 기사" (technician app), both released Feb 2024. This is a contractor's own two-sided store-maintenance app. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/%EB%A7%A4%EC%9E%A5-%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98-%EC%A7%80%EC%A0%90-%EC%A7%81%EC%98%81-%EC%8B%9C%EC%84%A4%EA%B4%80%EB%A6%AC/id6476572817); [기사앱](https://apps.apple.com/kr/app/%EC%8B%9C%EC%84%A4%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98-%EA%B8%B0%EC%82%AC/id6478195762)
- BGF리테일 (CU) has a captive "통합유지보수 운영시스템" app published by 일진C&S (2022). The franchisor runs its own store-maintenance work-order system through an IT vendor. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/bgfretail-%ED%86%B5%ED%95%A9%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98-%EC%9A%B4%EC%98%81%EC%8B%9C%EC%8A%A4%ED%85%9C/id1615528240)
- K-module (kmodule.co.kr) shows a 하이마트 store maintenance portfolio (투광기 교체, 소방 시설 보수, 타일 교체), which points to regional contractors serving retail chains directly. **[snippet: search result titles]** — [kmodule portfolio](http://www.kmodule.co.kr/business/portfolio.html)
- 에스앤아이코퍼레이션 (ex-LG FM): 2024 revenue ₩851.1B and operating profit ₩48.3B. Its digital efforts include AI CCTV, RMS and the "샌디앱" office platform, with a ₩1T revenue target for 2027. — [조선비즈 2026-02-09 (opened)](https://biz.chosun.com/industry/business-venture/2026/02/09/5IUPIBK4LNHP5OB5YTPXL4UZPU/)
- S&I FM served ~250 buildings and **~1,800 stores** at the 2021 sale. — [대한경제 2021 (opened)](https://www.dnews.co.kr/uhtml/view.jsp?idxno=202110162228062480522)
- 에스원 is positioning as an "AI 기반 보안·시설관리 안전 플랫폼" and launched a BEMS/IoT package for aging buildings. **[snippet: headlines]** — [딜사이트](https://dealsite.co.kr/articles/144928); [뉴스로드](http://www.newsroad.co.kr/news/articleView.html?idxno=62251)
- Other store-adjacent tools: "스마트체커 리모트", a remote POS/kiosk fault-management platform for small merchants (Mar 2026), and 도와조명, an LED maintenance startup. **[snippet: headlines]** — [잇비즈뉴스](https://www.itbiznews.com/news/articleView.html?idxno=206056); [전자신문](https://www.etnews.com/20250801000212)

**(3) Consumer / home repair O2O**
- 숨고 (브레이브모바일) launched "숨고 비즈링크" for business customers across all categories, including 청소 and 인테리어. It offers a 750k-pro pool, a proposal within 24h, a dedicated manager handling matching → contract → **final settlement**, escrow, and support for performance-bond and dispute-arbitration costs. This is project outsourcing, not recurring facility work orders. The article date was not visible on the page; it is likely ~2022 based on the article ID. — [벤처스퀘어 (opened)](https://www.venturesquare.net/842918)
- 오늘의집 (버킷플레이스) is moving from brokerage to direct construction. It set up the subsidiary 오늘의집시공 (2025) and made 7 strategic investments worth ₩20B+. 2025 revenue was ₩321.5B with an operating loss of ₩14.7B and ₩240B+ cash. — [딜사이트 (opened)](https://dealsite.co.kr/articles/168220)
- 오늘의집 "라이트" is a SaaS-like subscription for small interior contractors: profile exposure, an all-in-one tool from lead to schedule, contract and ordering, a 표준계약서-based 책임보장, and a 3D planner. List price is ₩200k/month (₩90k promo until 2026-12-31). It passed 100 subscribers in ~6 weeks with 94% retention or upgrade. Its "스탠다드" service uses standard contracts and standard quotes for price transparency. — [ZDNet Korea 2026-07-09 (opened)](https://zdnet.co.kr/view/?no=20260709091945)
- 당근 reports spikes in local AC install/clean/repair searches and quote requests (Apr–May), i.e. local-business lead-gen. **[snippet: headlines]** — [일간스포츠](https://isplus.com/article/view/isp202405310120); [매일경제](https://www.mk.co.kr/article/12114481)
- 집닥 received a ₩4.5B investment from LG유플러스. Its commercial-interior data shows 카페·식당 at ~32–35% of commercial jobs. **[snippet: headlines]** — [CEO스코어데일리](http://www.ceoscoredaily.com/news/article.html?no=79316); [뉴시스](http://www.newsis.com/view/?id=NISX20230110_0002153757&cID=13001&pID=13000)

**(4) Apartment management platforms**
- 아파트너 (두꺼비세상): ~3,300 complexes and 2.7M households at the time of its ₩8B Series C (Jan 2024, lead 삼천리자산운용), with an IPO goal. 두꺼비세상 grew by acquisition (피터팬, 아파트너, 아파트스토리, 아실, 리버블). — [전자신문 (opened)](https://www.etnews.com/20240130000421)
- 아파트너 관리자 app features: parking, notices, residents, e-voting, **"민원·하자 처리"** (view complaints and update status) and fee lookup. There is no vendor marketplace or repair-dispatch feature. The App Store page claims 3,500 complexes and 2.75M households. — [App Store (opened via lookup)](https://apps.apple.com/kr/app/%EC%95%84%ED%8C%8C%ED%8A%B8%EB%84%88-%EA%B4%80%EB%A6%AC%EC%9E%90/id6503230475)
- Apartment apps (아파트너, 노크타운, 바이비, SLP플러스) covered ~6,000 complexes by Jan 2026. 아파트너 cut complaint handling time ~63% (40 → 15 min) at sites like 반포자이 and 헬리오시티. External-service tie-ins are 세차, 세탁 and 반찬 (lifestyle), not repairs. — [한국경제 2026-02 (opened)](https://www.hankyung.com/article/202602119788i)
- 아파트아이 (이지스엔터프라이즈): ~30,000–33,000 complexes, ~12M households, 1.3M MAU (2024), positioned around fee billing and payment. **[snippet: search summary]** — [벤처스퀘어](https://www.venturesquare.net/1114097/); [혁신의숲](https://www.innoforest.co.kr/company/CP00017731/%EC%95%84%ED%8C%8C%ED%8A%B8%EC%95%84%EC%9D%B4)
- 트러스테이 "노크매니저" (Oct 2026): QR-based inspection for apartments (patrol, cleaning, facilities). It tracks inspection completion separately from **follow-up action status** ("미조치"), has a multi-complex dashboard for 위탁관리업체, and exports to Excel for 입주자대표회의. It is being rolled out at sites like 마곡 힐스테이트. It sits next to the resident app 노크타운. This is a direct 하다-style competitor in apartments, with internal follow-up only. — [벤처스퀘어 (opened)](https://www.venturesquare.net/1121055/)
- 홈체크: residents report common-area defects by QR (no app). 입대의 and the management office track repairs and **contractor (시공사) responses**. New: an expert visit every 2 months plus equipment testing (rebar scanning, concrete strength) as evidence in defect negotiations with the builder. This is defect-warranty tracking toward the original builder, not paid repair dispatch. — [라이브스뉴스 (opened)](https://www.livesnews.com/news/article.html?no=62860)
- 삼성물산 "홈닉 2.0" (2024) added 내부수리 ("못도 박아준다") household-repair services, with plans to expand beyond 래미안. **[snippet: headlines]** — [아시아타임즈](https://www.asiatime.co.kr/article/20240828500405); [한국금융신문](http://www.fntimes.com/html/view.php?ud=2024082817203837805e6e69892f_18)
- 한화테크윈 announced its entry into apartment management apps (2022). **[snippet: headline]** — [뉴데일리](https://biz.newdaily.co.kr/site/data/html/2022/11/03/2022110300080.html)

**(5) Public-sector facility systems**
- FMS (시설물정보관리종합시스템) went live in April 2009 for national Class 1–2 facilities (48,473 at the time). It manages status, inspection/diagnosis results and **보수·보강 이력** (repair/reinforcement history). A 2016 audit found serious-defect facilities neglected for up to 11 years. Failure to register incurs a fine of up to ₩5M. **[snippet: search summary]** — [아주경제 2009](https://www.ajunews.com/view/20090326000159); [아주경제 2016](https://www.ajunews.com/view/20161210163637294); [데일리안](https://www.dailian.co.kr/news/view/1614773/)
- Public buyers also use private SaaS: 하다 (한국공항공사, 한국해양수산연수원, municipal public toilets), 체크업 (동대문구시설관리공단) and Jump (public-agency edition). — [hadaworks.com (opened)](https://hadaworks.com); [checkupv.com/partners (opened)](https://www.checkupv.com/partners); [App Store Jump 공공기관용](https://apps.apple.com/kr/app/jump-%EC%8B%9C%EC%84%A4%EA%B4%80%EB%A6%AC-%EA%B3%B5%EA%B3%B5%EA%B8%B0%EA%B4%80%EC%9A%A9/id1447930475)

**Foreign analogs (for gap framing, not Korea)**
- Prefix Maintenance (US, founded 2022) raised a $7.5M seed. It is a "coordination layer" between multi-site brands, local technicians and existing CMMS, using agentic AI for job assignment, communication and admin. It covers ~50 customers and ~2,000 locations (Bojangles, Chipotle, Famous Footwear), reached $2.5M ARR in 2 years, and offers 24/7 HVAC, refrigeration, plumbing and electrical. The company says multi-site operators lose 10%+ of margin to FM inefficiency. — [토큰포스트 (opened)](https://www.tokenpost.kr/news/tech/349554)
- 86 Repairs (US) raised a $15.2M Series A (total ~$24M; McDonald's, Jimmy John's, Sonic). ResQ (Canada) raised a $39M Series A with a vetted-vendor marketplace. MaintainX is valued at $2.5B. **[snippet: search summary]** — [Restaurant Business](https://www.restaurantbusinessonline.com/technology/automated-repairs-company-86-repairs-raises-another-53m); [Canadian Pizza Magazine](https://www.canadianpizzamag.com/restaurant-repair-and-maintenance-platform-resq-receives-funding-to-grow/); [TradingView/Reuters](https://tr.tradingview.com/news/reuters.com%2C2025%3Anewsml_L4N3T611V%3A0-equipment-maintenance-startup-maintainx-valued-at-2-5-billion-in-latest-fundraise)

### Inferences
- The visible Korean gap is a software-led **coordination layer** (a Prefix/ResQ equivalent) that sits on top of inspection SaaS such as 하다 and routes issues to vetted local contractors with quote, completion photo and settlement, for multi-site chains, small buildings and public facilities. Today that role is filled either by people (컨텍터스 hub managers, 마이스터즈 operators, FM company staff) or by captive franchisor systems (BGF).
- Companies that execute repairs in Korea make money through **managed service with in-house or subcontracted labor and full liability** (마이스터즈, 컨텍터스 with its own 시공 자회사), not by taking a percentage of a pure marketplace transaction. This suggests the market rewards owning quality and liability.
- 노크매니저 (트러스테이) and MintCheck launched in Oct 2026, which shows the QR-inspection layer is commoditizing. "Inspection only" is a weak position. Differentiation will likely come from what happens after an issue is logged.

### Gaps
- I could not open THE VC or 혁신의숲 profiles (403/JS) for 샤플앤컴퍼니 revenue, headcount or the latest round. The Series A date is snippet-only.
- 똑수리 (WECARE) and 대흥이앤씨: no news coverage, funding, pricing or take-rate data found.
- I found no Korean equivalent of Prefix/86 Repairs/ResQ with press coverage. That may be a true gap, or such companies may be under the radar.
- "점검인" could not be identified.
- Public-sector repair procurement (how a 공공시설 민원 becomes a contracted repair, e.g. via 나라장터 or 단가계약) was not researched in depth.

## Q2. Does 하다/샤플 offer vendor dispatch or a repair marketplace? Any partner program for repair vendors?

### Takeaway
No. 하다's "이슈 & 해결" routes issues to an internal 담당자 only. Its "파트너 프로그램" is a **reseller/referral** program paying 30% of subscription revenue for up to 2 years, not a repair-vendor network. 건물·시설 관리 기업 are invited only as referrers.

### Cited Findings
- Partner program: "하다를 소개하고, 도입으로 이어지면 월 이용료의 30%를 최대 2년간 수익 보장". Example: 200 facilities × ₩3,000 × 30% × 24 months = ₩4,320,000. Eligible referrers include 하다 users, "건물·시설 관리 기업 — 고객사에 추천", IT consultancies and freelancers. If the prospect already showed interest within 1 month, the fee is 15%. Payout comes within 60 days of customer settlement. The FAQ frames the program around "근태 관리, 인력 관리, 현장직 관리, 업무 관리" partners. — [hadaworks.com/inquiry/partner (opened)](https://hadaworks.com/inquiry/partner)
- The issue module has no external assignment, quoting or payment features. — [hadaworks.com/features/issue-resolve (opened)](https://hadaworks.com/features/issue-resolve)
- Enterprise options are "추가 개발 및 별도 API 제공 – 별도 협의" and custom reports. — [hadaworks.com/pricing (opened)](https://hadaworks.com/pricing)

### Inferences
- Since 하다 offers an API (Enterprise) and recruits FM companies as referral partners, a repair-dispatch layer could plug into 하다 as a complement (issue → dispatch) rather than compete with it. 샤플 could also add this itself later.
- At ₩3,000 per facility per month, 하다 earns ~₩36k per facility per year. One repair job fee could exceed a year of SaaS revenue per facility, which is the economic logic of the "점검에서 수리까지" idea.

### Gaps
- I could not find whether 샤플 has a roadmap toward vendor dispatch (no interview with that content was found).

## Q3. Business models, pricing, funding, and failures/pivots in Korean repair/O2O

### Takeaway
SaaS sells per facility or per contract (하다 ₩3,000 per facility per month; 아파트너스 AFMS by contract). Execution players use managed-service contracts (마이스터즈 at ~₩27B revenue; 컨텍터스 at ~₩4.8B). Consumer platforms are moving toward subscriptions for pros (오늘의집 라이트 at ₩200k/month) or direct construction subsidiaries (오늘의집시공), away from pure take rate. The 2015–2017 home-services O2O wave (카카오 가사도우미/홈클린, 11번가 홈&카) ended in shutdowns blamed on unclear pricing, hard matching and lack of focus.

### Cited Findings
- 마이스터즈 argues pure matching platforms leave quality, complaints and after-service "개별 기술자의 책임", so it chose full-process management. — [전자신문 (opened)](https://www.etnews.com/20261014000387)
- 마이스터즈 says the old blue-collar market was fragmented into "영세한 인력사무소, 프리랜서, … O2O 매칭 플랫폼", that it was hard to assign liability after accidents, and that large firms classified AS as "휴먼 리스크". — [벤처스퀘어 (opened)](https://www.venturesquare.net/1078177/)
- 컨텍터스 growing pains: "외형 성장에 비해 내부 역량 강화가 따라오지 못했습니다". The 2025 focus shifted to BEP. Early customers were acquired by checking 등기부등본 and visiting owners door to door. — [벤처스퀘어 (opened)](https://www.venturesquare.net/969920)
- 오늘의집: subscription for small contractors, standard contracts and quotes, a direct construction subsidiary, and an operating loss of ₩14.7B in 2025. — [ZDNet (opened)](https://zdnet.co.kr/view/?no=20260709091945); [딜사이트 (opened)](https://dealsite.co.kr/articles/168220)
- 카카오 shut down several O2O services, including 가사도우미, under CEO 임지훈's "잘하는 것에 집중" policy and admitted O2O trial and error. At the 2016 launch, Kakao itself flagged that the home-cleaning market price was unclear and supply-demand matching was hard. **[snippet: search summary]** — [디지털타임스](https://www.dt.co.kr/article/11140130); [디지털데일리](https://www.ddaily.co.kr/page/view/2016051914073732472)
- 11번가 dissolved its lifestyle O2O "홈&카" menu. **[snippet: headline only]** — [뉴스1](https://www.news1.kr/articles/5190561)
- O2O closures surged around 2016, a "보릿고개" for follow-on funding. **[snippet: headline]** — [동아 DBR](http://news.donga.com/3/all/20161113/81312281/1)
- Home-cleaning comparison (미소 vs 청소연구소). **[snippet: title]** — [혁신의숲 리포트](https://www.innoforest.co.kr/report/8/%ED%99%88%ED%81%B4%EB%A6%AC%EB%8B%9D-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B9%84%EA%B5%90%EB%B6%84%EC%84%9D-%EB%AF%B8%EC%86%8C-%EC%B2%AD%EC%86%8C%EC%97%B0%EA%B5%AC%EC%86%8C)
- Apartment apps monetize through in-app ads (main banner, board top, elevator monitors), priced by period or by complex/household count. **[snippet: search summary]** — [AMPM 인사이드](https://inside.ampm.co.kr/item/90)

### Inferences
- The Korean pattern suggests a pure take-rate marketplace for repairs struggles. Winners either own execution and liability or charge vendors subscriptions. A team of 3 would likely need a hybrid: SaaS-attached dispatch with a curated vendor bench, plus a managed coordination fee per job, rather than an open marketplace.

### Gaps
- No verified data on typical take rates in Korean B2B repair, or on 숨고 비즈링크 traction.
- 미소 (Miso) Korea status was not confirmed. Specific Korean repair-dispatch startups that shut down could not be named with sources beyond Kakao and 11번가.

## Q4. Korean repair-trade market structure and what makes B2B repair dispatch hard

### Takeaway
The trades are fragmented and licensed (전기공사업, 소방시설업 and 전문건설 registrations). Work under ₩15M is "경미한 공사" that unregistered firms may do, though exceptions are expanding (roofing). Apartments must follow procurement rules (전자입찰, small 수의계약 thresholds). Dispute and liability risk is high. All of this makes "auto-dispatch" legally and operationally non-trivial.

### Cited Findings
- 전문공사 jobs with an estimated cost under ₩15M are "경미한 건설공사" and may be done without construction-business registration. Above that, registration must be checked. Interior contractors may hold only a "인테리어" business registration, not a 건설업 registration. — [대한전문건설신문 (opened)](https://www.koscaj.com/news/articleView.html?idxno=326248)
- 국토부 proposed excluding roofing from 경미한 공사, so even jobs of ₩15M or less would require registration (to take effect 6 months after promulgation), because of fatal falls. — [대한전문건설신문 (opened)](https://www.koscaj.com/news/articleView.html?idxno=324799)
- Splitting a job to stay under ₩15M does not keep it "경미한 공사" if the total exceeds ₩15M (Supreme Court, 2022). **[snippet: headline]** — [뉴스핌](http://www.newspim.com/news/view/20220322000963)
- Interior disputes: of 2,556 한국소비자원 relief cases (2020 to Aug 2025), 32.3% were quality, 26.3% incomplete performance and 23.6% after-service complaints. When the contracting party differs from the actual installer, liability becomes complex. — [대한전문건설신문 (opened)](https://www.koscaj.com/news/articleView.html?idxno=326248)
- The electrical contracting market suffers "업체 난립과 과당경쟁". Small firms depend on bid brokers. The 전기공사협회 경기도회장 calls for cutting the number of firms through tougher registration-maintenance criteria (technical staff, capital). — [전기신문 (opened)](https://www.electimes.com/news/articleView.html?idxno=373356)
- From 2026, the government and ruling party plan registration cancellation for repeat bid-rigging (2+ times in 5 years) in 전기공사업, 소방시설업, 전력 설계·감리업 and 측량업. Prime contractors say they will screen subcontractors' sanction history, and compliance costs fall on small firms. — [대한경제 2026-09-28 (opened)](https://www.dnews.co.kr/uhtml/view.jsp?idxno=202609281249100260545)
- Electrical works' simplified performance-report threshold rose from ₩5M to ₩10M after 18 years. **[snippet: headline]** — [전기신문](https://www.electimes.com/news/articleView.html?idxno=373490)
- Fire-protection construction: a requirement for the client to provide a payment guarantee is being pursued, and 분리발주 (separate ordering) is debated. These signal payment-default concerns. **[snippet: headlines]** — [기계설비신문](http://www.kmecnews.co.kr/news/articleView.html?idxno=46479); [FPN](http://fpn119.co.kr/229520); [영남일보 (unpaid public fire works)](https://www.yeongnam.com/web/view.php?key=20260720028347034)
- Apartments: the 사업자 선정지침 requires e-bidding via K-apt, 조달 systems or designated private systems. The 수의계약 threshold was raised to ₩5M (VAT excluded) in a 2015 notice, and 2026 comments on a full revision ask to raise it to ₩10M. **[snippet: search summary of MOLIT pages]** — [국토교통부](https://www.molit.go.kr/USR/law/m_46/pop.jsp?r_id=103727); [국토교통부](https://molit.go.kr/USR/law/m_46/dtl.jsp?r_id=4137)
- Vendor heterogeneity is the core pain in the US analog too: brands manage "수백, 수천 개 협력업체" with different communication, pricing and compliance, and many technicians cannot handle CMMS admin. — [토큰포스트 (opened)](https://www.tokenpost.kr/news/tech/349554)
- 롯데마트 reported that high turnover among FM outsourcing contractors broke continuity of reporting. — [checkupv.com/partners (opened)](https://www.checkupv.com/partners)

### Inferences
- A dispatch product must verify licenses by job type (전기 and 소방 jobs need registered firms; ₩15M thresholds for others), keep evidence (photos, completion sign-off) for liability, and handle tax invoices and settlement. Apartments are harder to sell into because of procurement rules. Multi-site chains, small buildings and private B2B customers are easier.
- Price opacity is reported in interior and home cleaning (Kakao, 오늘의집 standard quotes). This supports a "standard price list + completion proof" value proposition, though I found no direct B2B repair price-dispersion data.

### Gaps
- No sourced counts of contractors by trade (전기공사업 registrations, 소방시설업, 기계설비/설비, 냉난방, 방수). Associations (한국전기공사협회, 한국소방시설협회, 대한전문건설협회) publish these, but I did not retrieve them.
- No sourced data on typical B2B payment terms (e.g. 하도급법 60-day rule applicability to small repair jobs) or on insurance requirements.

## Q5. Korean M&A in this space

### Takeaway
M&A is concentrated in **FM service companies** bought by PE or real-estate groups (S&I FM → Macquarie, ~₩360B for 60%; 이도 bought 코어밸류) and in **proptech roll-ups** (두꺼비세상 acquiring 아파트너, 아파트스토리, 아실). I found no Korean FM company acquiring an inspection or CMMS SaaS startup. The global strategic precedent is 존슨콘트롤즈 buying FM:Systems.

### Cited Findings
- 에스앤아이 was spun out of LG's 디앤오 in late 2021. In Feb 2022 맥쿼리자산운용 (via 신코퍼레이션홀딩스) bought 60% for ~₩360B. It refinanced/recapitalized ~₩280B in late 2025 and may be sold in 2026. — [조선비즈 (opened)](https://biz.chosun.com/industry/business-venture/2026/02/09/5IUPIBK4LNHP5OB5YTPXL4UZPU/)
- 이도 (with KB PE) bid for S&I FM. 이도 had acquired 코어밸류 (the manager of 이지스자산운용's assets) in 2018. — [대한경제 (opened)](https://www.dnews.co.kr/uhtml/view.jsp?idxno=202110162228062480522)
- 두꺼비세상 acquired 피터팬, 아파트너, 아파트스토리, 아실 and 리버블, then raised a ₩8B Series C. — [전자신문 (opened)](https://www.etnews.com/20240130000421)
- 버킷플레이스 (오늘의집) bought control of 플랫포인트 (premium furniture) in 2026 and made 7 strategic investments in 2025. — [딜사이트 (opened)](https://dealsite.co.kr/articles/168220)
- Fire-protection contractor 경향이엔지 was put up for sale (2025). **[snippet: headline]** — [파이낸셜뉴스](http://www.fnnews.com/news/202505281508029843)
- 존슨콘트롤즈 acquired FM:Systems (a digital workplace/FM software company) to strengthen OpenBlue. **[snippet: headlines]** — [AI타임스](https://www.aitimes.kr/news/articleView.html?idxno=28649)
- 유닛피아 is moving into building-management outsourcing (PMC) built on fee ERP and e-voting. **[snippet: headline]** — [e2news](http://www.e2news.com/news/articleView.html?idxno=331608)

### Inferences
- Likely acquirers for a Korean "inspection-to-repair" startup: PE-owned FM operators (에스앤아이, possibly under a new owner), security/FM conglomerates (에스원, KT-related FM such as KT-SNC), proptech roll-ups (두꺼비세상, 이지스엔터프라이즈/아파트아이, 트러스테이), and 샤플 itself. Their M&A so far has bought revenue or traffic, not tools, so a target with real transaction volume (jobs dispatched, GMV) would likely be more acquirable than pure SaaS.

### Gaps
- No Korean deal found where an FM company bought software. No disclosed acquisitions of inspection SaaS (하다, 체크업, Jump, 터치체크).
