# 모니터링을 버리고 상품 카탈로그로 GEO를 공략하라

**결론부터 말하면, GEO는 이 팀이 진입할 가치가 있다. 단, 또 하나의 "AI 노출 모니터링 대시보드"로 들어가면 안 된다.** 시장 상태는 세 가지로 요약된다. 투자금은 한 회사에 몰려 있다(Profound가 공개 투자액 약 6.2억 달러 중 약 55%). 모니터링은 답변 1건당 1~2센트까지 가격이 무너졌다. 측정 신뢰성은 IAB와 SparkToro가 공개적으로 문제를 제기할 만큼 약하다. 그래서 순수 추적 도구는 HubSpot($50/월)이나 Ahrefs 같은 스위트에 흡수되는 기능이 되어 가고 있다. 그런데 인수 시장은 의외로 소규모 팀에 열려 있다. 지난 12개월간 확인된 GEO 인수 7건 중 4건이 **3~10명 규모 팀을 110만~3,000만 달러에 사는 턱인(tuck-in)**이었고, 그중 상당수는 **인수자에게 이미 납품하던 벤더·파트너**였다. 이 팀에 권하는 포지션은 다음과 같다. **"카페24·아임웹·스마트스토어 셀러, 특히 아마존·큐텐 재팬으로 나가는 K-뷰티·식품 D2C 브랜드를 위해, SKU 단위 상품 사실을 AI 에이전트가 읽을 수 있게 고치고, 상품별 AI 노출을 신뢰구간과 함께 측정해 주문 데이터에 연결하는 카탈로그 레이어"**다. 이 포지션이 이기는 이유는 분석 단위에 있다. 에이올로는 질문·아티클 단위 콘텐츠 루프를 돌린다. 국내 17개 도구는 브랜드 언급 추적에 머문다. 글로벌 커머스 GEO 모듈은 엔터프라이즈 전용이다. 이와 달리 이 포지션은 SKU라는 다른 분석 단위에서 출발한다. 인수자 후보는 커머스·상품 데이터 플랫폼이다. Coveo는 2026년 10월 AI 커머스용 상품 데이터 보강 기업 Anglera를 인수했다. 그 밖에 Yext, Sitecore(Scrunch Shopping), Wildcard·Profound 같은 동종 업체, 국내 카페24, 일본 Dentsu Digital의 ACO 라인이 있다. 대안은 둘이다. (1) 국내 에이전시에 "의사결정 등급(decision-grade)" 한국어 다중 엔진 측정 패널을 데이터 레이어로 공급하는 Zeta–Senso형 경로, (2) 일본 LLMO 외주 예산(월 ¥30만~50만)을 겨냥한 K-뷰티·의료 규제 대응형 일본 진출 GEO다. 현실적인 엑시트 기대값은 냉정하게 봐야 한다. 3인 팀 그대로라면 **100만~500만 달러 어크하이어**가 기본값이다. 1,500만~3,000만 달러대는 ARR 100만 달러 이상, 인수자와의 사전 상업 관계, 6~10명 수준의 팀이 갖춰져야 열린다.

## 판정: 진입 가치는 있지만 '대시보드 회사'로는 아니다

탑다운으로 거꾸로 짚어 보면 질문은 "무엇을 만들까"가 아니라 "누가, 왜, 얼마에 사는가"가 된다. 지금까지 GEO 팀을 산 쪽은 대부분 **설치 기반(installed base)이 크고 기능을 빨리 붙여야 하는 플랫폼**이었다. 패턴은 이렇다. 고객의 오가닉 트래픽이 27% 줄었다고 공개한 HubSpot이 XFunnel을 사서 4.5개월 만에 AEO 제품으로 출시했다. Yext는 로케이션 단위 Scout을 보완하려고 브랜드 단위 GoShine을 샀다. Zeta는 자사 GEO 상품을 이미 구동하던 Senso를 샀다. 이 패턴을 한국 팀에 대입하면 "한국에 설치 기반을 가진 플랫폼이 빨리 붙이고 싶어 할 기능"이 답이 된다. 국내 대형 에이전시는 GEO를 직접 만들고 있어서(제일기획, 플레이디) 초기 인수자보다는 고객·채널에 가깝다. 상품 데이터라는 단위는 국내외 커머스 플랫폼이 공통으로 원하는 자산이다. 아래 표가 이 판단을 구체화한 것이다.

| 구분 | 고객 | 제품이 하는 일 | 왜 이기는가 | 누가 회사를 사는가 |
|---|---|---|---|---|
| **추천: K-커머스 카탈로그 AI 가독성 + 상품 단위 측정** | 카페24·아임웹·스마트스토어 기반 SKU 100~5,000개 D2C 브랜드(K-뷰티·식품·리빙). 그중 아마존 US·큐텐 재팬 크로스보더 셀러, 그리고 이들을 대행하는 커머스 에이전시 | 스토어를 연동해 SKU별 상품 사실(성분·가격·재고·배송·반품·인증)의 누락과 불일치를 진단한다. 구조화 데이터, Google Merchant Center 피드, 아마존 리스팅 속성을 생성·수정한다. ChatGPT·Gemini·AI Mode·네이버 AI 브리핑·Alexa for Shopping에서 상품별 노출을 반복 샘플링해 신뢰구간으로 보고하고, 주문 API와 조인해 매출 기여를 추정한다 | Wildcard(YC W25)가 말했듯 "브랜드·리테일러의 AEO 단위는 홈페이지가 아니라 카탈로그"다. 그런데 커머스 모듈은 글로벌에서 엔터프라이즈 전용이고, 국내 도구는 질문·브랜드 단위에 머문다. 한국 호스팅 스택에 바로 꽂히는 제품도 드물다 | Coveo(Anglera 선례), Yext, Sitecore/Scrunch Shopping, Wildcard·Profound(동종 통합), 카페24(인수 의향 미확인), 일본 Dentsu Digital ACO 라인 |
| 대안 1: 의사결정 등급 한국어 다중 엔진 측정 패널 | 제일기획·HSAD·대홍기획·플레이디 같은 에이전시, 대기업 브랜드 인하우스 | 네이버 AI 브리핑·AI 탭을 포함한 한국어 질의 패널을 반복 샘플링한다. 결과는 IAB 공개 기준에 맞춘 방법론·신뢰구간 API와 화이트라벨 리포트로 제공한다 | 에이전시는 컨설팅·크리에이티브는 강하지만 통계적 측정은 약하다. 대홍기획이 어크로스와 공동 개발한 사례가 있어 데이터 공급 경로가 열려 있다 | Zeta–Senso처럼 납품받던 에이전시·마테크. 한국 인수 사례가 아직 없다는 점이 약점 |
| 대안 2: 한국→일본 규제 대응형 LLMO | 일본에 진출한 K-뷰티·의료관광 브랜드 | 일본어 AI 답변 노출 측정, 규제 검수를 거친 일본어 콘텐츠·리스팅 | 일본 기업의 절반 이상이 LLMO 외주에 월 ¥30만~50만을 쓴다. 대형 에이전시는 SaaS가 아니라 커머스 데이터·기사 제휴에 집중한다 | 일본 디지털 에이전시·SEO 상장사(예: Faber, GMO 계열). 인수 의향은 미검증 |

이 판정에는 두 가지 전제가 깔려 있다. 첫째, 하루 12시간과 Claude Max 20의 생산성 이점은 진입 장벽이 아니다. GoShine도 "AI 에이전트로 운영하는 3인 팀"이었다 ([Calcalist](https://www.calcalist.co.il/article/s1chttndfl)). 그래서 이 이점은 **통합 개수와 반복 실험 속도**로 바꿔야 해자가 된다. 둘째, 인수자는 기술이 아니라 팀과 출시 시간을 산다. HubSpot은 XFunnel의 기술을 대체원가 기준 **145만 달러**로 평가했고, 영업권은 **1,670만 달러**였다 ([HubSpot 10-K](https://www.sec.gov/Archives/edgar/data/1404655/000119312526046646/hubs-20251231.htm)). 따라서 "인수자가 18개월 안에 직접 만들기 귀찮은 통합·데이터"를 쌓는 것이 핵심이다.

## 돈은 Profound에 몰렸고 모니터링은 답변당 1~2센트가 됐다

### 투자금은 한 회사에 집중되고 중간층은 매각 대상이 된다

Value Add VC 집계로 2026년 10월 16일 기준 GEO/AEO 스타트업 10곳의 공개 투자액은 **약 6.04억~6.19억 달러**다. 이 가운데 **Profound가 약 3.35억 달러(약 55%)**를 가져갔다 ([Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)). Profound는 2026년 9월 15일 Sequoia·Kleiner 공동 주도로 **1.8억 달러 시리즈 D를 기업가치 18억 달러**에 유치했다. 엔터프라이즈 고객은 1,000곳 이상이라고 밝혔다. 투자 속도도 빨라졌다. 2025년 전체가 1.78억 달러였는데 2026년 1~3분기에만 3.75억 달러가 들어왔다. 그러나 그중 2.76억 달러가 Profound 한 곳의 몫이고, 나머지 2026년 라운드를 다 합쳐도 9,900만 달러다. 2등권 업체들의 규모는 다음과 같다. Peec AI는 6월 기준 ARR 1,000만 달러 이상, 프리머니 2억 달러 협상 보도가 있었고 누적 4,000만 달러를 조달했다. Bluefish는 6,800만 달러, AirOps는 6,250만 달러, Brandlight는 3,600만 달러, Evertune은 1,900만 달러, Searchable은 기업가치 8,500만 달러에 약 1,800만 달러를 모았다. Value Add VC는 시장이 엔터프라이즈 에이전트형과 저가 셀프서브형으로 갈라진다고 진단한다. 그러면서 "엔터프라이즈 깊이도 낮은 가격도 없는 중간의 모니터링 대시보드는 인수당하는 자리로 보인다"고 썼다 ([Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)). 이 팀에게 이 말은 "중간층에 서는 것 자체가 엑시트 경로일 수 있다"는 신호다. 동시에 "중간층 가격은 계속 눌린다"는 경고이기도 하다.

### 모니터링 가격표는 이미 바닥을 향하고 있다

| 도구 | 최저 유료 | 중간 | 상위 | 비고 |
|---|---|---|---|---|
| Otterly | $29/월(프롬프트 15개) | $189(100개, API·MCP) | $489(400개) | Claude·Gemini·AI Mode는 유료 애드온 ([Otterly](https://otterly.ai/pricing)) |
| Peec AI | $95(50개, 모델 3개) | $245(150개) | $495(350개) | 선택 모델에 **Naver AI** 포함 ([Peec](https://peec.ai/pricing)) |
| Promptwatch | $95(50개) | $245(150개) | $579(350개) | ([Promptwatch](https://www.promptwatch.com/pricing)) |
| Searchable | $125(모델당 100개) | $400(500개, 화이트라벨) | $999+ | ([Searchable](https://www.searchable.com/pricing)) |
| Trakkr | $100(50개) | $500(브랜드 10개) | 대행형 $2,500~6,000+ | ([Trakkr](https://trakkr.ai/pricing)) |
| AthenaHQ | $295(크레딧 3,600) | — | 맞춤형 | ([AthenaHQ](https://www.athenahq.ai/pricing)) |
| Goodie | $295(110개) | $999(250개) | 엔터프라이즈(Alexa·Sparky 포함) | ([Goodie](https://higoodie.com/pricing)) |
| Gauge | $599(600개×3개 플랫폼 매일) | — | — | 월 54,000개 답변 ([Gauge](https://www.withgauge.com/pricing)) |
| Ahrefs Brand Radar | 프롬프트 추적 $50부터 | AI Visibility Index $199 | — | 실사용자 프롬프트 5.16억 개 ([Ahrefs](https://ahrefs.com/brand-radar)) |
| Semrush | SEO+AI Search $199 | — | 엔터프라이즈 | ([Semrush](https://www.semrush.com/prices/)) |
| HubSpot AEO | 단독 $50 | Marketing Hub Pro+ 번들 포함 | — | ([TechTarget](https://www.techtarget.com/enterprise-software/news/366641773/HubSpot-builds-answer-engine-optimization-into-its-platform), snippet) |
| Profound | 무료 7일 체험 | — | 엔터프라이즈만(엔진 9개, ChatGPT Shopping) | 저가 셀프서브 브랜드 요금제가 없음 ([Profound](https://www.tryprofound.com/pricing)) |

추적 답변 1건당 실효 가격을 계산하면 Gauge가 약 **$0.011**, Otterly Lite가 약 $0.016, Peec Starter가 약 $0.021이다. 원가는 API 호출이므로 이 값은 더 내려간다. Ahrefs CMO Tim Soulo는 프롬프트 추적을 "기본 사양(table stakes)이고, 쉽게 만들 수 있으며, 방어 가능한 제품 범주가 아니다"라고 했다 ([Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)). 엔진 커버리지도 차별점이 아니게 됐다. 대부분이 8~17개 엔진을 지원하고, Peec은 네이버를 기본 목록에 넣었으며, LLM Pulse는 네이버 AI 브리핑 애드온을 판다 ([LLM Pulse](https://llmpulse.ai/ai-models/naver-ai)). 돈이 붙는 쪽은 실행(콘텐츠·기술 수정·대행), 매출 어트리뷰션, 커머스 표면이다. 가격표 구성이 이를 보여 준다. 월 발행 아티클 수, "액션 크레딧", 대행형 플랜, 에이전트 트래픽 분석이 표준 번들이 되고 있다.

### 측정 신뢰성이 이 범주의 가장 약한 고리다

SparkToro와 Gumshoe가 12개 프롬프트를 ChatGPT·Claude·Google AI에 **2,961회** 돌린 결과가 있다. 두 응답이 같은 브랜드 목록을 낼 확률은 **1% 미만**이었고, 같은 순서일 확률은 약 0.1%였다. 반면 상위 브랜드의 등장 빈도는 55~77%로 비교적 안정적이었다. 결론은 "순위는 무의미하고, 수십~수백 개 프롬프트를 여러 번 돌린 노출률만 쓸 만하다"는 것이다. AI가 고려하는 집합을 알려면 "보통 최소 60~100회" 물어야 한다 ([SparkToro](https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/)). 단, 이 연구는 동료 심사를 거치지 않았고 Gumshoe 자신이 추적 벤더다. IAB는 2026년 8월 "Measuring Visibility in the AI Era"를 냈다. 이 문서는 **20개 이상의 벤더가 서로 다른 방법론으로 같은 브랜드에 다른 답을 낸다**고 지적한다. 그리고 데이터를 **"의사결정 등급(Decision-Grade)"과 "방향성(Directional)"으로 구분**하고, 공급자 공개 의무와 재현성 지침을 제시했다. 이제 공급자가 "마케팅 주장 대신 방법론적 엄밀성으로 차별화할 수 있다"고도 명시했다 ([IAB](https://iab.com/guidelines/measuring-visibility-in-the-ai-era)). 이 기준을 제품에 명시적으로 내세우는 벤더는 사실상 Evertune 하나다. Evertune은 실사용자 프롬프트 1.5억 개 패널(EverPanel)을 쓰고 프롬프트당 모델별 최대 100회 샘플링한다고 주장한다 ([Evertune](https://www.evertune.ai/)). Growth Memo 계열 수치도 같은 그림을 그린다. 마케터 599명 중 40% 이상이 측정·어트리뷰션을 AEO의 1번 과제로 꼽았고, 세 번 실행에서 일관되게 인용된 출처는 2.2%에 그쳤다 ([Growth Unhinged](https://www.growthunhinged.com/p/how-to-measure-the-impact-of-ai-search-the-right-way), snippet). 엔진 간 인용 도메인 중복도 9.8~25.2%에 불과하다 ([Trendly](https://blog.trendlyai.com/most-cited-domains-chatgpt)). 그래서 엔진별 측정은 필수이고, 샘플링 비용이 곧 규모의 장벽이 된다. 국내에서는 체인시프트가 "프롬프트 20~100개짜리 도구의 성공 스크린샷은 통계적으로 무의미하다"고 공개 비판했다 ([체인시프트](https://www.chainshift.co/blog/geo-success)). 이미 신뢰성 경쟁이 시작됐다는 뜻이다.

### YC는 '언급 추적'에서 '에이전트가 고르고 쓰는 것'으로 옮겨 갔다

YC 배치를 시간순으로 보면 방향이 선명하다. 2025년 초 AthenaHQ(W25, 12명)는 고전적 가시성 플랫폼이었다. Wildcard(W25)는 이커머스 카탈로그 단위 AEO로 Rufus·Sparky·ACP·UCP를 지원한다 ([YC Wildcard](https://www.ycombinator.com/companies/wildcard)). The Prompting Company(S25, 7명, 650만 달러)는 "AI 에이전트가 제품을 발견하고 사용하게 한다"를 내걸었다 ([YC](https://www.ycombinator.com/companies/the-prompting-company)). 2026년 배치는 더 나아갔다. Sitefire(W26, 2명)는 "에이전틱 웹을 위한 마케팅 스위트"([YC](https://www.ycombinator.com/companies/sitefire)), Scope(Spring 2026, 2명)는 "소프트웨어가 에이전트에게 발견·사용되게"([YC](https://www.ycombinator.com/companies/scope)), Armature(Spring 2026, 3명)는 "코딩 에이전트가 당신 제품을 고르게"([YC](https://www.ycombinator.com/companies/armature))를 내걸었다. 2026년 신규 GEO 베팅 중 "브랜드 언급 모니터링"은 없다. 모두 2~3명 팀이다. 투자자가 소규모 팀의 에이전트 발견·커머스 베팅을 지금 정당한 형태로 본다는 뜻이고, 이 팀의 규모와 정확히 겹친다.

## GEO 인수 시장은 '이미 납품하던 3~10명 팀'을 산다

### 확인된 GEO 거래 7건과 가격대

| 시점 | 인수자 → 대상 | 가격(출처 등급) | 대상 규모·나이 | 사전 관계 |
|---|---|---|---|---|
| 2025.10.17 | Semrush → TopicRanker | **220만 달러** 자산 인수(공시) | 소형 | 기존 스위트에 기술 통합 ([Semrush 10-K](https://www.sec.gov/Archives/edgar/data/1831840/000162828026013259/semr-20251231.htm)) |
| 2025.12.1 종결 | HubSpot → XFunnel(이스라엘) | 헤드라인 약 3,000만 달러 = **인수대금 1,790만 달러**(현금 1,650만 달러 순액) + **3년 근속 조건부 보상 1,220만 달러**. 영업권 1,670만 달러, 기술 145만 달러(대체원가법), 5년 상각(공시) | 약 10명(PitchBook, snippet), 발표 시점 설립 10개월, 시드(Wix Ventures 등) | **고객 → 투자자 → 인수자** ([HubSpot 10-K](https://www.sec.gov/Archives/edgar/data/1404655/000119312526046646/hubs-20251231.htm), [Calcalist](https://www.calcalistech.com/ctechnews/article/h10u7lwg11x)) |
| 2026.4.28 종결 | Adobe → Semrush | **18.7억 달러**(공시), 주당 $12, 77.5% 프리미엄 | ARR 4.6억 달러 이상, AI 제품 ARR 3,800만 달러 | 경매 약 10곳 접촉 중 **8곳이 NDA조차 거절**. 서면 입찰은 Adobe뿐 ([DEFM14A](https://www.sec.gov/Archives/edgar/data/1831840/000162828025059012/semrush-defm14a.htm), [Adobe 10-Q](https://www.sec.gov/Archives/edgar/data/796343/000079634326000156/adbe-20260828.htm)) |
| 2026.6.3 발표 | Sitecore → Scrunch | **약 2.25억 달러**(Bloomberg 보도, 미확인) | 2023년 설립, 누적 2,600만 달러 조달, 500개 이상 브랜드, 조달액 대비 약 8.7배 | 독립 운영 유지 + Sitecore 통합. 핵심 자산은 AXP ([TechTarget](https://www.techtarget.com/searchcustomerexperience/news/366643973/Sitecore-acquires-Scrunch-for-answer-engine-optimization), [B&T](https://www.bandt.com.au/sitecore-acquires-scrunch-in-potential-225-million-deal/)) |
| 2026.6.14 종결 | Yext → GoShine AI(이스라엘) | **110만 달러 현금**(공시; 기술 60만 + 영업권 50만 달러) | **3명**, 2025년 7월 설립, 부트스트랩, "수십 곳" 고객 | 팀 전원 합류. Yext Scout(로케이션 단위)을 브랜드 단위로 보완 ([Yext 10-Q](https://www.sec.gov/Archives/edgar/data/1614178/000162828026059784/yext-20260731.htm), [Calcalist(협찬 기사)](https://www.calcalist.co.il/article/s1chttndfl)) |
| 2026.9 | Searchable → Meridian(뉴욕) | **"7자리 수(seven-figure)"** | 공개 출시 후 약 11개월 | 고객 이관, 제품 흡수. 스타트업 간 첫 GEO 거래 ([PR Newswire](https://www.prnewswire.com/news-releases/ai-visibility-platform-searchable-acquires-new-yorks-meridian-in-seven-figure-deal-302883134.html)) |
| 2026.10.5 발표 | Zeta Global → Senso(YC) | 비공개 | 미공개 | **Senso가 이미 Zeta의 GEO 상품을 구동**. LUMA Partners 자문 ([Zeta](https://www.zetaglobal.com/news/zeta-global-to-acquire-senso-adding-ai-engineering-and-frontier-model-connectivity-to-its-intelligent-ai-infrastructure/)) |

인접 거래로는 Coveo–Anglera(2026.10.29, AI 커머스용 상품 데이터 보강)가 있다. 추천 포지션과 가장 가까운 선례다 ([Morningstar/PRN](https://morningstar.com/news/pr-newswire/20261029mo84953/coveo-acquires-anglera-to-make-product-data-a-competitive-advantage-in-ai-powered-ecommerce), snippet). HubSpot의 다른 AI 턱인도 같은 구조를 따른다. Dashworks는 현금 1,780만 달러 + 근속 660만 달러, Futurepedia는 1,910만 달러 + 860만 달러였다 ([HubSpot 10-Q](https://www.sec.gov/Archives/edgar/data/1404655/000119312526335232/hubs-20260630.htm)).

### 세 가지 패턴: 납품이 인수에 앞서고, 팀값을 치르고, 수요는 얇다

첫째, **상업 관계가 M&A보다 먼저 온다.** XFunnel은 HubSpot의 평가 대상 벤더였다가 투자를 받았고, 이후 인수됐다. Senso는 Zeta의 GEO 상품을 이미 구동하고 있었다. GoShine은 Yext 제품 라인의 빈칸을 정확히 메웠다. 둘째, 소형 대역의 인수자는 **IP가 아니라 팀과 출시 시간에 돈을 낸다.** XFunnel은 헤드라인의 약 40%가 3년 근속 조건이었다. GoShine의 기술 평가액은 60만 달러였다. 투자자 몫으로 돌아가는 지분가치는 헤드라인의 55~60% 수준이라고 봐야 한다. 셋째, **인수 수요는 넓지 않고 소수 전략적 인수자에 몰린다.** 4.6억 달러 ARR의 Semrush조차 접촉한 10곳 중 8곳이 NDA를 거절했고, 서면 입찰자는 Adobe 하나였다. 반대로 데이터를 이미 가진 Wix·Squarespace·Cloudflare·Similarweb은 직접 만들었다 ([guptadeepak.com](https://guptadeepak.com/who-is-buying-building-ai-visibility/), [Similarweb 20-F](https://www.sec.gov/Archives/edgar/data/1842731/000184273126000018/smwb-20251231.htm)). Optimizely는 Conductor를 사지 않고 제휴를 택했다. 이 결과는 "인수자 후보 한두 곳의 제품 로드맵에 처음부터 끼어드는 것"이 엑시트 전략의 거의 전부라는 뜻이다. HubSpot의 배포 성과가 이를 뒷받침한다. 출시 한 분기 만에 Marketing Hub Pro+ 고객의 **32%가 AEO를 활성화**했고, 단독 체험은 **약 1.6만 건**이었다 ([Motley Fool Q2 2026](https://www.fool.com/earnings/call-transcripts/2026/08/12/hubspot-hubs-q2-2026-earnings-call-transcript/)). 소규모 GEO 팀의 가치는 **"설치 기반 × 빨리 붙인 기능"**에서 최대가 된다.

### 이 팀의 현실적 결과 범위

| 시나리오 | 조건(관찰 거래 기준) | 가격대 | 구조 |
|---|---|---|---|
| 하방 | ARR 20만 달러 미만, 전략적 관계 없음 | 0~100만 달러, 또는 폐업 | 자산 매각. Lorelight는 폐업했다 ([guptadeepak.com](https://guptadeepak.com/who-is-buying-building-ai-visibility/)) |
| **기본** | 3~5명, ARR 30만~100만 달러, 인수자 후보와 1개 관계 | **100만~500만 달러**(약 ₩14억~68억, ₩1,350/$ 가정) | 어크하이어·턱인. 근속 조건 비중이 큼(GoShine·TopicRanker·Meridian) |
| 상방 | 8~15명, ARR 100만~300만 달러, 인수자의 벤더·파트너 | **1,500만~3,000만 달러** 헤드라인 | 약 40%가 3년 근속 보상(XFunnel·Dashworks·Futurepedia) |
| 극상방 | 500개 이상 브랜드, 2,000만 달러 이상 조달, 엔터프라이즈 로고 | 1억~2.5억 달러 | Scrunch형. 2~3년 안에 부트스트랩 3인 팀이 닿을 범위는 아님 |

기본 시나리오는 3명이 2~3년간 하루 12시간을 투입한 대가로는 크지 않다. 그래서 탑다운 설계라면 처음부터 **상방 조건 세 가지**를 목표로 잡아야 한다. ARR 100만 달러, 인수자 후보의 공식 파트너 지위, 그리고 인수자가 대체원가로 따질 수 없는 시계열 데이터다.

### 한국·일본의 인수자는 '사지 않고 만드는 중'이다

2026년 10월까지 한국과 일본에서 GEO 전문 M&A는 한 건도 확인되지 않았다. 국내 에이전시 그룹은 직접 만드는 쪽을 택했다. 제일기획은 자회사 피티코리아가 개발한 "제일 GEO 오케스트레이터"를 5월에 공개했다 ([머니투데이](https://www.mt.co.kr/tech/2026/05/27/2026052714513990301)). 플레이디는 AX 조직이 직접 만든 "스파이더(SpAIder)"로 광고주 36곳, 사이트 46곳을 진단했다 ([ZDNet Korea](https://zdnet.co.kr/view/?no=20260629091605)). HSAD는 자체 GEO 스코어링 대시보드를 들고 금융·공공부터 공략하며, 주 1건 이상 문의를 받는다 ([헤럴드경제](https://biz.heraldcorp.com/article/10872173)). 예외는 대홍기획이다. "GEO BOOST"를 AI 스타트업 **어크로스와 공동 개발**해 5월 11일 출시했고, 4주 만에 SOV(점유율)가 21%p 올랐다고 주장한다 ([Digital iNSIGHT](https://ditoday.com/?p=144847)). 나스미디어·에코마케팅·인크로스·이노션 등에서는 GEO 인수·투자를 찾지 못했다. 일본도 비슷하다. Dentsu Digital은 9월 "에이전틱 커머스 최적화(ACO)"를 시작했다. 구매 시나리오 프롬프트로 AI가 가격·재고·배송·반품을 정확히 이해하는지 감사하고, 기준이 되는 "正本" 데이터를 정의하는 서비스다 ([Web担当者Forum](https://webtan.impress.co.jp/n/2026/09/16/53302)). Hakuhodo는 10월 26일 신문·출판사 제휴 기사형 "Shomei AIO"를 발표했다 ([Web担当者Forum](https://webtan.impress.co.jp/n/2026/10/27/53513)). Hakuhodo DY의 Digital Holdings 공개매수는 디지털 에이전시 통합 사례일 뿐 GEO 거래는 아니다 ([AdverTimes](https://www.advertimes.com/20250912/article512766/)). 시사점은 세 가지다. 국내 에이전시는 2~3년 안에 인수자로 기대하기 어렵다. 그러나 대홍기획–어크로스 경로처럼 **데이터·툴 공급처로는 지금 들어갈 수 있다.** 그리고 Dentsu Digital ACO가 정의한 작업(상품 사실의 정본화와 감사)은 추천 포지션과 거의 같은 문제 정의다. 국내 엑시트는 세 경로 중 하나로 나올 가능성이 높다. 한국·네이버 커버리지가 필요한 글로벌 커머스·마테크 인수자, 자체 개발에 지친 국내 에이전시의 후기 턱인, Searchable–Meridian형 스타트업 간 합병이다.

## 한국은 '네이버 UGC'와 '오픈웹'이라는 두 개의 GEO 시장이다

### 에이올로: 엔지니어 창업자의 저가 셀프서브 콘텐츠 루프

| 항목 | 내용 |
|---|---|
| 창업자 | 강지혁(26), 서울대 컴퓨터공학 4학년 재학, 토스 개발자 약 6개월(개인정보·광고 마케팅), 이전 셀렉트스타. 샌프란시스코 오퍼를 거절했다. Cursor와 겹치는 제품을 3개월 만들다 피벗 ([딜사이트](https://dealsite.co.kr/articles/170371)) |
| 법인 형태 | **개인사업자**, 2026-04-01 개업(관악구). 공개 투자·투자자·팀 규모·실명 고객 없음 ([에이올로 요금](https://www.tryaeolo.com/pricing)) |
| 견인력(자체 주장) | 유료 고객 약 20곳, 매출 월 약 3배 성장, 제품 완성 전 선결제 제안. 답변 수집 비용을 자체 기술로 낮췄다고 주장하며 표본 30만~40만 건 분석. "GEO 업체 중 기술 창업자는 거의 없다" ([딜사이트](https://dealsite.co.kr/articles/170371)). 정주영 창업경진대회 Beginner 부문 결선 진출, 특별상 보도(snippet) |
| 요금 | 무료 / Starter **$99**(시장 1개, 주간 질문 30개, 엔진 5개, 아티클 약 8편) / Pro **$299**(시장 2개, 질문 100개, 약 33편) / Max **$699**(시장 5개, 질문 300개, 엔진 6개, 약 93편, 발행 채널 3개) / Custom. 연간 결제 시 17% 할인. 아티클 1편 = 15크레딧 ([에이올로 요금](https://www.tryaeolo.com/pricing)) |
| 엔진 | ChatGPT, Perplexity, Gemini, Google AI Mode/AIO, **Amazon Rufus, 네이버**, DeepSeek ([tryaeolo.com](https://www.tryaeolo.com/)) |
| 실행 | 누락 질문 탐지 → 근거 있는 콘텐츠 작성 → 호스티드 블로그·**Shopify·WordPress·카페24** 자동 발행. 질문·근거 로직 공개 GitHub, CLI/MCP 서버 제공 ([에이올로 블로그](https://www.aeolo.io/ko/blog/%EC%9D%B8%EC%9A%A9-%EC%82%AC%EC%8A%AC-5%EB%8B%A8%EA%B3%84%EB%A1%9C-%EC%B1%84%EC%A0%90%ED%95%9C-geo-%EB%8F%84%EA%B5%AC-6%EC%A2%85-%EB%B9%84%EA%B5%90)) |
| 매출 연결 | GA4·Search Console로 노출·트래픽·매출 측정. K-뷰티 사례: "운동용 선스틱 추천"에서 미언급 → Google AIO 1위(3개월), 30일 매출 +10%(GA4) |
| 규제 | Custom 플랜에 **"의료·뷰티 광고 규제 검수(한국·일본·미국)"** 포함 |
| 자기 포지셔닝 | 자사 블로그의 "인용 사슬 5단계(탐지→결정→초안→발행→어트리뷰션)" 비교에서 Profound·Peec·Otterly·Scrunch·Ahrefs/Semrush 대비 스스로 1위로 평가(자사 기준) |

에이올로를 정면으로 이기기는 어렵다. 이미 크로스보더 K-뷰티, Rufus·네이버 엔진, 카페24 발행, GA4 매출 연결, 3국 규제 검수까지 영역을 넓게 선점했다. 약점은 구조적이다. 분석 단위가 **질문과 아티클**이라서 SKU 수천 개의 상품 사실 정합성, 피드, 마켓플레이스 리스팅은 다루지 않는다. 셀프서브 USD 가격은 소형 D2C용이다. 개인사업자에 외부 투자가 없어 엔터프라이즈 조달에 불리하다. 그리고 "기술 창업자가 드물다"는 우위는 Claude Code 시대에 빠르게 희석된다. 경쟁 상대가 아니라 **보완재로 둘 수 있다**는 점도 기억할 만하다. 에이올로는 콘텐츠를 만들고, 이 팀은 카탈로그를 만든다.

### 체인시프트와 17개 국산 도구: 측정은 이미 레드오션

체인시프트는 가장 가까운 VC 투자형 비교 대상이다. 앤틀러 코리아 6기 출신으로 프리시드를 받았고, 법인 설립 4개월 만에 TIPS에 선정됐다. 2026년 1월 기준 대형 전자·뷰티 기업 유료 PoC가 계약으로 이어져 **누적 매출 ₩3.5억**을 올렸다. 창업진은 J&J 브랜드 마케팅 10년의 CEO, **카페24 플랫폼 전략 출신 COO**, 네이버클라우드 출신 CTO다 ([Tech42](https://www.tech42.co.kr/%EC%9D%B8%ED%84%B0%EB%B7%B0-%ED%95%9C%EC%9A%A9%ED%9D%AC-%EC%B2%B4%EC%9D%B8%EC%8B%9C%ED%94%84%ED%8A%B8-%EB%8C%80%ED%91%9C-%EC%A0%9C%EB%A1%9C%ED%81%B4%EB%A6%AD-%EC%8B%9C%EB%8C%80-ai/)). API가 아닌 실제 UI에서 ChatGPT·Gemini·AI Mode·**네이버 AI 브리핑·AI 탭**을 수집하며, Starter는 ₩143,000/월이다 ([체인시프트](https://www.trychainshift.ai/en/), [segama](https://segama.co.kr/blog/27220/)). COO의 카페24 배경은 추천 포지션에 직접적인 경쟁 위험이다. 카페24와의 채널 관계를 먼저 확보할 수 있기 때문이다.

경쟁사 브레인드가 10월 27일 갱신한 비교표(작성자가 이해당사자임에 유의)는 **국산 도구 17개**를 나열한다. 도슨티, 라임라이트AI, 브레인드, 블루닷, 애니모프, 온더AI, 체인시프트, 팀하이, 플루랭크, AIRank, BaRam, FrostAI, GEOcare, HaloX, NNT Insights, OPTIGEO, RanketAI다. 최저 유료가는 **₩12,900(RanketAI)부터 ₩150만(온더AI)**까지다. 국내외 25개 도구 중 네이버 AI 브리핑을 측정한다고 밝힌 곳은 8개, 최저 유료 티어에 포함한 곳은 5개(브레인드, 체인시프트, 플루랭크, NNT Insights, Peec)다. 실제 UI 수집이 11개, API 수집이 3개다 ([segama](https://segama.co.kr/blog/27220/)).

| 국산 도구 | 최저가(월) | 국산 도구 | 최저가(월) |
|---|---|---|---|
| RanketAI | ₩12,900 | 브레인드 | ₩180,000(네이버 AIB 포함) |
| FrostAI | ₩79,000 | BaRam | ₩199,000 |
| HaloX | ₩59,000 | 블루닷 | ₩490,000(AIB는 Pro ₩990,000부터) |
| 팀하이 / AIRank | ₩99,000(AIRank 화이트라벨) | NNT Insights | ₩500,000 |
| 체인시프트 | ₩143,000 | 플루랭크 | ₩590,000(대필 ₩149만~) |
| 도슨티 | ₩150,000(질문 100개) | OPTIGEO | ₩800,000 + 초안당 ₩3,000, 전담 대행 ₩500만~2,000만 |
| 애니모프 | ₩1,100,000(엔진 10개) | 온더AI | ₩1,500,000 |

출처: [segama](https://segama.co.kr/blog/27220/), [도슨티](https://geo.docenty.ai/en/pub/geo/geo-solution/geo-solrusyeon-gagyeoggwa-gineung-bigyopyo-hangugeo-ai-geomsaeg-coejeoghwa-doguwa-daehaeng-seobiseu)(둘 다 벤더 작성)

**네이버 추적은 해자가 아니다.** Peec이 9월 11일 네이버를 기본 모델 목록에 추가했고 LLM Pulse는 AI 브리핑 애드온을 판다. 국내에서도 5개 도구가 최저 티어에 넣었다. 추천 포지션과 겹치는 국내 업체도 짚어 둔다. 서치오에스에이아이는 2025년 6월 설립, 2026년 3월 퓨처플레이 시드를 받았고, 대형 이커머스·미디어·여행 사이트의 CSR 렌더링·크롤링 문제를 고친다 ([Platum](https://platum.kr/archives/283665)). 지오키는 사이트 감사·JSON-LD 생성을 한다 ([GTT Korea](https://www.gttkorea.com/news/articleView.html?idxno=25784)). 둘 다 사이트·페이지 단위이지 SKU·마켓 리스팅 단위는 아니다. 에이전시 쪽은 사람 중심 리테이너로 대기업과 규제 업종을 가져간다. 5명 규모의 엘리펀트컴퍼니는 세미나와 "548개 기업 GEO 대응 현황 리포트"로 인지도를 얻었다 ([VentureSquare](https://www.venturesquare.net/1095130/), [THE VC](https://thevc.kr/elephant)). 리드젠랩은 삼성생명·GS리테일·GC녹십자(의료광고 검수 포함)를 고객으로 둔다 ([lead-gen.team](https://lead-gen.team)). 이 시장에서는 콘텐츠·리포트 중심의 시장 진입(GTM)이 싸게 먹힌다.

### 네이버 AI 브리핑: 70%가 자사 UGC, 인용 수가 곧 크리에이터 보상

네이버 AI 브리핑은 2025년 3월 27일 전 사용자 대상으로 출시됐다 ([네이버](https://navercorp.com/media/pressReleasesDetail?seq=32374)). 2025년 12월 검색 결과의 **20%**를 덮었고 2026년 목표는 약 40%다 ([더팩트](https://news.tf.co.kr/read/economy/2313941.htm)). 2026년 7월에는 **약 27%**로 추정된다(2차 출처, [원포인트](https://1point.kr/blog/insights/naver-ai-briefing-content-design/)). 핵심은 출처 구조다. 2026년 1월 기준 AI 브리핑이 인용한 콘텐츠의 **약 70%가 블로그·카페·지식iN 등 네이버 UGC**다. 네이버는 5월 28일 "네이버 메이트"를 발표했다. **AI 브리핑 인용 수를 기준으로 크리에이터 약 3,000명을 선정**하고, 기본 월 ₩30만, 분야별 상위 100명 월 ₩300만, 상위 10명 월 ₩1,000만을 지급한다(연 약 ₩200억). 크리에이터는 프로필에서 자기 인용 통계를 본다. 5년간 ₩1조를 투입하고 클립(숏폼) 데이터도 AI 브리핑에 쓰기 시작했다 ([뉴시스](https://www.newsis.com/view/NISX20260528_0003647569)). 독립 측정도 쏠림을 보여 준다. 50개 질의×7회 관찰에서 blog.naver.com이 44.0%에 등장했다. 피부과·성형외과 9곳×6개 AI 표면 격자에서는 중앙값 언급률이 **0~1.4%**였고 5곳은 한 번도 언급되지 않았다 ([CiteAngle](https://citeangle.com/datasets/ai-visibility-aggregates), 소규모 벤더 표본). 7월 21일부터는 ADVoost Max를 통해 **AI 브리핑 안에 문맥 텍스트 광고**가 붙는다. 금융·보험·건강기능식품·의료는 이 광고에서 제외됐다 ([아이보스](https://www.i-boss.co.kr/ab-2877-17600&tag=AI%EB%B8%8C%EB%A6%AC%ED%95%91)). 네이버는 4월 30일 "연관검색어"를 완전히 종료하고 AI 브리핑·AI 탭으로 대체했다 ([The Sync](https://maily.so/thesync/posts/knrj1vl0rld)). AI 탭은 6월 26일 전면 출시됐다. 검색 점유율은 2026년 3월 63.83%로 Google(28.67%)의 두 배를 넘는다 ([더팩트](https://news.tf.co.kr/read/economy/2313941.htm)).

이 구조는 두 가지를 뜻한다. 네이버 GEO는 사실상 **UGC·플레이스·쇼핑 데이터 게임**이다. 그래서 기존 블로그 체험단·바이럴 산업과 경계가 흐릿하고 협찬 표기 위험을 안고 있다. 또한 네이버가 인용 수 KPI를 크리에이터에게 직접 노출하고 돈을 주므로, 여기에 서드파티가 끼어들 여지는 점점 줄어든다. 광고에서 제외된 의료·금융은 오가닉 GEO 수요가 크다. 하지만 의료광고법 리스크와 기존 바이럴 대행사 경쟁이 함께 따라온다.

### 오픈웹 표면: ChatGPT·Gemini·Google·카카오

Google AI Overviews는 2024년 12월 5일 한국어로 출시됐다 ([Google Korea](https://blog.google/intl/ko-kr/products/explore-get-answers/aio_kr/)). AI Mode는 2025년 9월부터 한국에 롤아웃됐다 ([Google Korea](https://blog.google/intl/ko-kr/products/explore-get-answers/ai-mode-in-korean)). 한국은 **ChatGPT 유료 구독자 수 세계 2위** 국가다 ([파이낸셜뉴스](https://www.fnnews.com/news/202609281339387227)). 오픈서베이 2026년 하반기 조사(n=1,000)에서 최근 3개월 검색용 사용률은 ChatGPT 58.1%, **Gemini 52.2%**(2025년 12월 28.9%에서 급등)였다. 다만 주 검색 서비스 1위는 여전히 네이버이고, Gemini 9.1%·ChatGPT 8.7%에 그쳤다 ([뉴시스](https://www.newsis.com/view/NISX20260713_0003707523)). 카카톡 안의 ChatGPT for Kakao는 6월 말 누적 가입 **1,300만**을 기록했다 ([아시아경제/네이트](https://m.news.nate.com/view/20260821n24540)). 단독 카나나 앱은 10월 15일 종료됐다 ([전자신문](https://www.etnews.com/20260915000317)). 카카오는 독자 답변 엔진이 아니라 ChatGPT 유통 채널이므로 ChatGPT 최적화가 곧 카카오 대응이다. 한국 브랜드에는 네이버 폐쇄형 UGC 생태계와 오픈웹+YouTube 생태계라는 **두 개의 플레이북**이 필요하다.

### 수요는 실재하지만 예산은 아직 '매출 증명'을 기다린다

Brafton 조사(n=142, 한국 업계지 보도, 응답자가 한국에 한정되지 않았을 수 있음)를 보면 이렇다. GEO 전용 예산이 있는 곳은 **19%**, 검토 중 25.4%, **없음 55.6%**다. GEO를 구매·리드에 연결해 보는 곳은 **7%**에 불과하다 ([매드타임스](https://www.madtimes.co.kr/news/articleView.html?idxno=29064)). 플러스제로 조사(n=200)에서 AI 브랜드 추천의 최대 요인으로 "실사용자 리뷰·평판"을 꼽은 응답이 46.7%였다 ([스타트업엔](https://www.startupn.kr/news/articleView.html?idxno=59687)). 예산을 여는 열쇠는 매출 어트리뷰션이다. 크로스보더 신호도 강하다. 아마존은 10월 27일 한국 셀러의 뷰티 매출이 1~9월 전년 대비 두 배가 됐고, 미국 K-뷰티 구매의 **44%가 아마존**에서 일어난다고 밝혔다 ([국민일보](https://www.kmib.co.kr/article/20261027501250), snippet).

### 일본: 외주 단가는 한국의 몇 배, 대형사는 SaaS가 아닌 커머스·기사로

PRIZMA 조사(LLMO 외주 기업 n=418)에서 가장 흔한 실지출은 **월 ¥40만(18.4%)**이었다. 그다음이 ¥50만(17.2%), ¥30만(15.1%)이고, 절반 이상이 월 ¥30만~50만(약 ₩280만~460만)을 쓴다. 단일 전문 서비스를 사는 비율이 65.8%이고, 성과보수형은 1.9%뿐이다 ([PR TIMES](https://prtimes.jp/main/html/rd/p/000000201.000149156.html)). 국산 도구 가격은 ArchAIO ¥4,800~39,800, Mieruca GEO ¥49,800/99,800, GMO NIKKO ¥10만(12개월 약정) 등이다 ([Arch](https://archcorp.jp/columns/llmo-geo-tracking-tools/)). CINC SEARCH WRITE는 ¥10만, DolphinX AIO는 ¥3만부터다 ([CINC](https://www.cinc-j.co.jp/service/analytics/column/llmo-tools/)). 중소기업은 해외 도구를 감당하기 어렵다는 현지 지적도 있다 ([ALTERA](https://note.com/altera_works/n/ne1f80e578e49?hl=en)). 앞서 본 대로 대형 에이전시는 Dentsu Digital ACO(상품 데이터 정본화), Hakuhodo Shomei AIO(기사 제휴)로 움직인다. CyberAgent·Dentsu·Hakuhodo 계열은 ChatGPT 광고 일본 파일럿 파트너다 ([rtbsquare](https://rtbsquare.work/archives/60650), snippet).

## 플랫폼은 순위를 광고로 팔고, 기계가 읽는 상품 데이터를 요구한다

ChatGPT 광고는 한국에서 이미 돈다. 뉴시스는 6월 19일 Free·Go 성인 사용자 대상 "Sponsored" 카드 시작을 보도했다(snippet). OpenAI의 8월 11일 업데이트는 영국·멕시코·브라질·일본과 함께 한국 출시를 명시했다. 10월 21일 기준 셀프서브 Ads Manager는 **89개국**에서 쓸 수 있고 Pixel·CAPI·제품 피드·CPA 입찰을 지원한다 ([Digital Applied](https://www.digitalapplied.com/blog/where-chatgpt-ads-are-sold-every-market-and-date)). 다만 광고 연환산 매출은 **10억 달러**로 초기 예상치 24억 달러에 못 미쳤다. 광고주들은 예산을 늘리기 전에 더 나은 측정을 원한다 ([AdExchanger](https://www.adexchanger.com/marketers/chatgpt-ads-is-expanding-to-new-markets-and-exploring-new-ad-formats/)). Similarweb은 ChatGPT 응답의 약 26%에 광고가 들어 있다고 집계했다 ([Similarweb](https://www.similarweb.com/blog/marketing/geo/gen-ai-stats/)). 대화 안에서 결제까지 끝내는 인챗 체크아웃은 생각보다 어려웠다. OpenAI는 2025년 9월 Instant Checkout을 출시했지만 2026년 3월 24일 판매자 자체 결제로 전환했다. 실제로 연동된 Shopify 판매자는 십여~30곳 수준이었다 ([INITE](https://inite.ai/en/blog/agentic-commerce-after-instant-checkout)). 구조적으로 가장 중요한 사실은 OpenAI 피드 스펙에 있다. **피드 하나가 오가닉 노출(`is_eligible_search`, 기본 켜짐), 광고(`is_ads_eligible`), 체크아웃(`is_eligible_checkout`) 세 자격을 동시에 결정한다.** 다만 현재 도착 국가는 US·CA·MX만 표현할 수 있다 ([OpenAI feed spec](https://developers.openai.com/commerce/specs/feed)). Google UCP의 "Buy" 버튼도 미국·캐나다·호주의 일부 판매자 한정이고, Merchant Center가 중심 허브다 ([Google Merchant Center](https://support.google.com/merchants/answer/16837055?hl=en)). Universal Cart는 Sephora·Ulta 등과 함께 미국에서 출시됐다 ([Retail Dive](https://retaildive.com/news/google-launches-cross-retailer-universal-cart/820957/)). 아마존은 5월 13일 Rufus를 "Alexa for Shopping"으로 흡수했다는 보도가 있으나 단일 2차 출처라 브랜딩은 미확정이다 ([FelloAI](https://felloai.com/de/alexa-fuer-shopping/)). 네이버는 쇼핑 AI 에이전트 베타를 운영하며 뷰티·식품으로 확장할 계획이다 ([네이버](https://navercorp.com/media/pressReleasesDetail?seq=34353)).

| 커지는 것 | 줄어드는 것 |
|---|---|
| 피드·상품 사실 품질(오가닉·광고·체크아웃 자격을 동시에 결정) | 오가닉 전용 순위 추적(엔진이 광고 리포트를 직접 판매, 순위 자체가 통계적으로 무의미) |
| 다중 엔진 중립 측정(ChatGPT 점유율 76%→53%로 하락, Gemini·Claude 상승) ([Similarweb](https://www.similarweb.com/blog/marketing/geo/gen-ai-stats/)) | 단일 엔진 의존 도구 |
| 오프사이트 존재감(리뷰·커뮤니티·YouTube; 리뷰 사이트 등재 시 인용 4.6~6.3회 vs 1.8회) ([Contently](https://contently.com/2026/04/29/top-sources-llms-cite/)) | llms.txt·스키마 단독 처방(Google은 "특별한 스키마 불필요", llms.txt 요청은 사실상 0) ([Google](https://developers.google.com/search/docs/appearance/ai-features), [Prosopo](https://prosopo.io/blog/llms-txt/)) |
| 1차 데이터 기반 어트리뷰션(주문·로그 조인) | 인챗 체크아웃 배관(Instant Checkout 종료, 한국 미지원) |
| 광고 제외 업종의 오가닉 GEO(네이버 AIB의 의료·금융) | 봇 전용 페이지 서빙(Scrunch가 이미 상품화, 클로킹 논란 미해소) ([Scrunch FAQ](https://scrunch.com/faqs/is-scrunch-agent-experience-platform-axp-considered-cloaking)) |

이 흐름이 추천 포지션의 근거다. 체크아웃 연동은 한국에서 아직 쓸 수 없다. 반면 **"기계가 읽을 수 있는 상품 데이터"는 모든 엔진에 통하는 후회 없는 투자다.** 정확한 가격·재고·정책·정본 URL·구조화된 속성이 여기에 해당한다. ACP 피드가 미국 밖으로 확장되거나 네이버 쇼핑 에이전트가 커지면 그 가치는 오히려 올라간다.

## 다섯 갈래 차별화 각도 중 커머스 카탈로그가 앞선다

아래 점수는 연구 노트의 증거를 바탕으로 한 팀 내부 판단이다(1=불리, 5=유리). 플랫폼 리스크도 점수가 높을수록 위험이 낮다.

| 각도 | 경쟁 강도 | 방어력 | 3인 Claude Code 팀 적합도 | 매출 속도 | 인수자 적합도(후보) | 플랫폼 리스크 | 합계 |
|---|---|---|---|---|---|---|---|
| (a) 의사결정 등급 측정 + 네이버 포함 한국어 패널, 에이전시·기업용 데이터 레이어 | 2 (국산 17개, 체인시프트·Peec 네이버 커버) | 3 (시계열·방법론, 그러나 복제 가능) | 5 | 3 (에이전시 PoC 주기) | 3 (Zeta–Senso형 납품처, 대홍기획형 에이전시. 국내 인수 0건) | 2 (UI 스크래핑 약관 위험, 엔진 자체 분석 확대) | 18 |
| (b) 네이버 UGC 네이티브 GEO(블로그·카페·지식iN·스마트플레이스, 크리에이터 네트워크) | 1 (바이럴·체험단 산업과 정면 충돌) | 3 (크리에이터 네트워크) | 2 (사람·운영 중심) | 4 (병원 GEO 패키지 연 ₩500만 수준 판매 중) | 1 (기술 인수자 없음, 네이버 메이트가 직접 보상) | 1 (네이버가 규칙·보상·광고를 모두 쥠, 의료광고법) | 12 |
| **(c) K-셀러 카탈로그 AI 에이전트 가독성(카페24·아임웹·스마트스토어 연동, 아마존·큐텐 재팬 크로스보더)** | 4 (국내 SKU 단위 플레이어 부재, 글로벌은 엔터프라이즈 전용) | 4 (통합·SKU별 개선 결과 데이터·앱스토어 유통) | 4 (연동·피드 생성·반복 측정 자동화가 Claude Code와 맞음) | 3 (앱스토어 SMB는 느리고, 크로스보더 브랜드는 예산 있음) | 4 (Coveo–Anglera 선례, Yext, Sitecore/Scrunch Shopping, Wildcard·Profound, 카페24, Dentsu Digital ACO) | 3 (ACP·UCP 한국 미지원, 그러나 상품 데이터는 엔진 공통) | **22** |
| (d) 한국→일본 LLMO, 의료·뷰티 규제 대응 콘텐츠 | 3 (일본 SEO사 다수가 LLMO로 재포장, 에이올로가 3국 규제 검수 제공) | 2 (서비스성, 규제 지식은 사람 의존) | 3 (일본어·규제 전문성 필요) | 4 (월 ¥30만~50만 예산 존재) | 2 (Faber·GMO 계열 등, 의향 미검증) | 3 | 17 |
| (e) AI 답변 → 매출 어트리뷰션 | 3 (Profound·Brandlight·Goodie 엔터프라이즈 티어, 에이올로 GA4) | 4 (1차 데이터 조인은 복제 어려움) | 4 | 2 (데이터 축적·증명에 시간) | 4 (HubSpot·Adobe·Zeta·G2, 측정이 1번 과제) | 3 (엔진의 광고 어트리뷰션 확대, 리퍼러 제거) | 20 |

**(c)를 고르는 이유**는 탑다운 조건 세 가지를 동시에 만족하는 유일한 각도이기 때문이다. 첫째, 인수 선례가 있는 문제 정의다. Wildcard는 "기존 도구는 SaaS용으로 만들어져 점수만 주고 멈춘다. SKU가 5,000개면 그 플레이북은 깨진다"고 했다 ([YC Wildcard](https://www.ycombinator.com/companies/wildcard)). Coveo는 바로 이 상품 데이터 보강 기업을 샀고, Scrunch는 "상품 단위 AI 검색 성과"를 Shopping 모듈로 팔았다. 둘째, 한국 호스팅 스택이 진입 장벽이 된다. 카페24·아임웹·스마트스토어·고도몰은 Cloudflare·Vercel 중심이 아니어서 글로벌 AXP 도구가 바로 꽂히지 않는다(연구 노트의 추론이며 미검증). 셋째, (e) 어트리뷰션을 **커머스 주문 API를 통해 자연스럽게 흡수**한다. 별도 데이터 접근 협상 없이 연동 순간 주문이 들어오기 때문이다. 즉 (c)는 (e)의 방어력과 인수자 적합도를 얹은 형태다. 반대 논리도 따져 봐야 한다. 에이올로가 이미 카페24·Shopify 발행과 Rufus 추적을 갖고 있어 SKU 기능을 빠르게 붙일 수 있다. 체인시프트 COO는 카페24 출신이다. 서치오에스에이아이는 대형 이커머스의 렌더링 문제를 이미 고친다. 그래서 우위는 영구적이지 않다. **12개월 안에 카페24 앱스토어 상위 노출과 SKU별 개선→노출 변화 데이터셋을 먼저 쌓는 속도전**이 승부다.

### 에이올로·글로벌 플레이어와 무엇이 다른가

| 차원 | 에이올로 | 글로벌(Profound·Peec·Wildcard) | 우리(추천안) |
|---|---|---|---|
| 분석 단위 | 질문·아티클 | 브랜드·프롬프트(Wildcard만 카탈로그) | **SKU·카탈로그·마켓 리스팅** |
| 실행 | 콘텐츠 작성·자동 발행 | 콘텐츠·에이전트·엔터프라이즈 쇼핑 모듈 | 상품 사실 정합성 수정, 구조화 데이터·Merchant Center 피드·아마존 속성 생성, 리뷰·Q&A 공백 진단 |
| 측정 | 질문×엔진 재확인(크레딧 과금) | 다수 엔진, Evertune은 100회 샘플링 | SKU별 반복 샘플링, 신뢰구간 공개, **처치 SKU vs 홀드아웃 SKU 비교** |
| 매출 연결 | GA4 | 엔터프라이즈 티어 | 카페24·아임웹 **주문 API 조인** |
| 엔진 | ChatGPT·Perplexity·Gemini·AI Mode/AIO·Rufus·네이버·DeepSeek | 9~17개, 네이버는 Peec·LLM Pulse | ChatGPT·Gemini/AI Mode·네이버 AIB·쇼핑 에이전트·Alexa for Shopping, 일본은 Google 일본어 |
| 유통 | 셀프서브 USD | 셀프서브·엔터프라이즈 영업 | 카페24·아임웹 앱스토어 + 커머스 에이전시 화이트라벨 |
| 법인·신뢰 | 개인사업자, 투자 미공개 | VC 대규모 조달 | 법인 + 공개 방법론·분기 공개 데이터 리포트 |

## 90일 안에 살릴지 죽일지 정하는 실행 계획

### 90일 검증 실험과 중단 기준

| 기간 | 실험 | 성공 기준 | 중단·피벗 기준 |
|---|---|---|---|
| 0~30일 | **K-커머스 AI 노출 패널 v1**: K-뷰티·식품·리빙 상품 의도 질의 300개×엔진 5개(ChatGPT, Gemini, AI Mode/AIO, 네이버 AIB, Perplexity)×질의당 30회 이상 반복. 신뢰구간을 붙인 공개 리포트 발행 | 답변 1건당 수집 원가 $0.01 이하(Gauge 실효가 수준). 노출률 95% 신뢰구간 ±5%p. 리포트 발행 후 브랜드·에이전시 인바운드 5건 이상 | 원가나 안정성 목표 미달, 또는 인바운드 0~1건이면 측정 레이어 단독 사업성 부정 |
| 15~60일 | **카탈로그 가독성 감사기**: 카페24·아임웹 공개 상품 페이지 크롤링으로 30개 스토어 SKU별 "AI 가독성 점수" 무료 감사. 앱스토어 등록 요건과 API 접근 확인 | 감사 받은 셀러의 20% 이상이 미팅 수락. 앱 등록·주문 API 접근 경로 확보 | 미팅 수락 10% 미만, 또는 플랫폼 API·앱 등록이 막히면 (a) 대안으로 전환 |
| 30~75일 | **유료 파일럿 5~10곳**: 크로스보더 K-뷰티(아마존 US·큐텐 재팬) 브랜드와 국내 D2C에 월 ₩50만~150만. 처치 SKU와 홀드아웃 SKU를 나눠 6주간 노출률 비교 | 유료 3곳 이상. 처치군 노출률이 홀드아웃 대비 통계적으로 유의하게 상승 | 유료 3곳 미만, 또는 6주 뒤 유의한 차이가 없으면 "고쳐도 안 움직인다"로 판정하고 측정 전용(a)으로 피벗 |
| 45~90일 | **인수자 측 관계 실험**: 커머스 에이전시 2곳 화이트라벨 파일럿, 카페24·아임웹 파트너 담당자 미팅, Dentsu Digital ACO 같은 일본 측 담당자 접촉 | 에이전시 1곳 이상 재판매 계약 또는 공동 PoC. 플랫폼 1곳에서 공식 파트너 경로 확인 | 에이전시·플랫폼 반응 0이면 탑다운 엑시트 경로가 막힌 것으로 판단 |
| 60~90일 | **어트리뷰션 가능성**: 파일럿 스토어 주문 데이터와 AI 리퍼러·노출률 조인 | AI 유입 세션이 측정 가능한 수준이고 상품별 주문과 연결됨 | AI 유입이 너무 적어 신호가 없으면 매출 연결은 크로스보더(아마존) 지표로 대체 |

90일 종합 기준: MRR ₩500만 이상과 채널 파트너 1곳 이상이면 계속 간다. 둘 다 못 넘으면 (a) 또는 (d)로 전환한다.

### 0~36개월 마일스톤

| 기간 | 제품 | 고객·매출(계획 가정) | 인수자 관계 |
|---|---|---|---|
| 0~3개월 | 패널 v1, 감사기, 파일럿 | MRR ₩500만, 공개 리포트 1호 | 에이전시·플랫폼 첫 미팅 |
| 4~9개월 | 카페24 앱 정식 출시, Merchant Center 피드 생성, 아마존 리스팅 속성 수정 | 유료 셀러 50~100곳, 브랜드 계정 5~10곳, MRR ₩2,000만~3,000만 | 카페24 앱스토어 파트너, 에이전시 화이트라벨 2곳. IAB 공개 기준에 맞춘 방법론 문서 공개 |
| 10~18개월 | 일본(큐텐 재팬·아마존 JP) 확장, 네이버 쇼핑 에이전트 대응, 상품 표시·광고 문구 검수 | ARR ₩5억~8억(약 40만~60만 달러) | 인수자 후보 1곳의 공식 통합 파트너(앱 마켓플레이스·데이터 연동) |
| 19~30개월 | SKU 개선→노출 변화 데이터셋 12개월 이상, API 판매 | ARR ₩13억~20억(약 100만~150만 달러) | 전략적 관계 2곳 이상. 필요 시 팀을 5~8명으로 확대. M&A 자문사 접촉(Senso는 LUMA 자문) |
| 24~36개월 | — | — | 매각 프로세스. 상방 시나리오 조건 점검 |

### 가격 가설

| 플랜 | 대상 | 가격(월) | 근거 |
|---|---|---|---|
| Store | SKU 300개 이하 카페24·아임웹 셀러 | ₩59,000 | 국산 저가 도구 ₩5만~10만 구간 |
| Growth | SKU 3,000개 이하, 피드·구조화 데이터 자동 수정 | ₩190,000 | 체인시프트·브레인드 Starter ₩14만~18만 대비 실행 포함 |
| Cross-border | 아마존 US·큐텐 재팬 다시장, 상품별 노출 신뢰구간, 주문 조인 | ₩790,000~1,500,000 | 에이올로 Max $699(약 ₩94만), 온더AI ₩150만 |
| Agency·Data | 화이트라벨, API, 분기 패널 데이터 | ₩300만~800만 | 국내 대행 ₩300만~2,000만, 일본 외주 ¥30만~50만 |

이 가격은 검증 전 가설이다. 90일 파일럿에서 Cross-border 플랜 지불 의향을 가장 먼저 확인해야 한다.

### 첫 고객 세그먼트와 인수자에게 다가가는 방법

첫 고객은 세 겹으로 잡는다. 1순위는 **아마존 US에 이미 판매 중인 K-뷰티 브랜드**다. 아마존 매출이 두 배로 뛰었고 Rufus/Alexa for Shopping 노출이 매출과 직결된다. 2순위는 SKU 수백~수천 개를 가진 카페24 기반 식품·리빙 D2C다. 3순위는 이들을 대행하는 커머스 에이전시다. 의료·성형은 수요는 크지만 의료광고법과 바이럴 대행사 경쟁 때문에 초기 세그먼트에서 뺀다.

인수자 접근은 XFunnel·Senso 패턴을 그대로 따른다. 처음 6개월 안에 **카페24·아임웹 앱스토어 입점**과 **커머스 에이전시 화이트라벨**을 확보해 "이미 납품하는 벤더" 지위를 만든다. 글로벌 쪽에서는 GEO 인접 기능이 필요한 플랫폼의 생태계를 노린다. 대상은 HubSpot 앱 마켓플레이스, Semrush의 데이터 연동(이미 Profound Agents와 연동 중), Yext(GoShine·Places Scout을 연달아 산 턱인 인수자), Coveo·Sitecore 같은 상품 데이터·DXP 쪽이다. 이들과 연동을 만들어 한국·일본 커머스 데이터 공급자로 자리 잡는다. 신뢰 장치로는 **방법론 오픈소스와 분기별 공개 데이터 리포트**를 쓴다. "K-커머스 AI 노출 지수"를 신뢰구간과 함께 발표하는 방식이다. SparkToro가 요구한 "계산을 보여 달라"와 IAB의 공개 의무에 정면으로 답하는 일이다. 5명짜리 엘리펀트컴퍼니가 리포트와 세미나로 업계 인지도를 얻은 국내 선례도 있다. 에이올로와는 경쟁보다 연동(콘텐츠 ↔ 카탈로그)을 먼저 타진할 만하다.

## 이 보고서가 모르는 것

데이터에는 분명한 한계가 있다. 에이올로의 고객 수·성장률, 체인시프트의 누적 매출, Wildcard의 "AI 검색 매출 5배", 대홍기획의 "SOV +21%p", Scrunch의 "AI 방문자 전환 3~5배"는 모두 **벤더 자체 발표**다. 국내 수요 조사는 n=142(한국 한정 아님)와 n=200의 소표본이다. 엘리펀트컴퍼니의 548개사 리포트는 자가진단 데이터라 대표성이 없다. 일부 사실은 **검색 스니펫으로만 확인**됐다. XFunnel의 10명 인원, ChatGPT 광고 한국 6월 시작 보도, 네이버 AI 브리핑 27% 커버리지(2차 출처), 아마존 K-뷰티 수치, Coveo–Anglera, Rufus→Alexa for Shopping 전환이 여기에 해당한다. Scrunch 2.25억 달러는 비상장사 거래라 공시가 없다. **어떤 GEO 벤더의 이탈률(churn)이나 순매출유지율 데이터도 찾지 못했다.** 모니터링 도구의 이탈이 높을 것이라는 판단은 추론이다. 실제 운영 엔진에서 콘텐츠 수정이 인용을 늘린다는 대규모 인과 연구도 없다(학술 GEO 논문의 "최대 40% 향상"은 통제된 벤치마크 결과다). 따라서 90일 실험의 홀드아웃 설계는 선택이 아니라 필수다. 카페24·아임웹의 GEO 계획과 M&A 의향, 한국 호스팅 스택에서 글로벌 AXP 도구의 호환성, ChatGPT·Gemini·네이버 UI 수집의 약관상 위험, OpenAI 피드의 한국 확장 시점은 모두 확인하지 못했다. 이 항목들이 0~60일 실험에서 직접 확인해야 할 1순위다.

## 결론

이 조사에서 얻은 가장 중요한 통찰은 GEO에서 **"무엇을 측정하느냐"보다 "측정의 단위"가 경쟁 구도를 정한다**는 점이다. 브랜드·질문 단위에는 국내 17개, 글로벌 수십 개 도구와 HubSpot의 $50 기능이 이미 들어차 있다. SKU 단위는 엔진들이 피드 스펙으로 직접 요구하기 시작한 영역이다. 오가닉·광고·체크아웃 자격이 피드 하나로 결정된다. 그런데 한국 셀러를 위해 그 일을 해 주는 소프트웨어는 비어 있다. 두 번째 통찰은 엑시트 가격을 정하는 것이 ARR보다 **"인수자의 로드맵 안에 이미 들어가 있느냐"**라는 점이다. XFunnel은 10개월, GoShine은 11개월 만에 팔렸고, 둘 다 인수자가 직접 만들기보다 사는 편이 빨랐던 사례다.

그래서 이 팀의 진짜 위험은 기술이 아니라 순서다. 제품을 완성한 뒤 인수자를 찾으면 늦다. 첫 90일 안에 카페24·에이전시·글로벌 커머스 데이터 플랫폼 중 최소 한 곳의 생태계에 납품 관계를 박아 넣어야 한다. 그리고 "고쳐서 실제로 움직였다"는 홀드아웃 데이터를 공개적으로 쌓아야 한다. 이 두 가지가 2~3년 뒤 결과를 100만 달러 어크하이어로 끝낼지, 1,500만 달러 이상의 전략적 턱인으로 끌어올릴지를 가른다.
