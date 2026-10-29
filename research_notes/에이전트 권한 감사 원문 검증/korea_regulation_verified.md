# Korean regulatory facts behind the AI-agent permission-audit decision: checked against original articles (as of 2026-10-29)

Method note: all government and regulator sites (fsec.or.kr, fsc.go.kr, fss.or.kr, kisa.or.kr, msit.go.kr, law.go.kr, korea.kr) and most Korean outlets (newsis, dt.co.kr, hankookilbo, fnnews, etoday, zdnet, mt, newsway, yna, naver) are BLOCKED by this session's egress proxy. The block applies to curl, WebFetch and Playwright alike, because all three go through the same proxy. Reachable: hankyung.com, boannews.com (DNS sometimes fails; retries worked), etnews.com, ddaily.co.kr, dailysecu.com. Every quote below comes from a full article downloaded from those five domains. No primary government document could be opened. To open them, these hosts must be allowed in the session's network settings: www.fsec.or.kr, www.fsc.go.kr, www.fss.or.kr, www.kisa.or.kr, www.law.go.kr.

## Claim 1: 금융보안원 "AI 에이전트 보안 평가기준" (2026-10-07, 17 items)

### Takeaway
**Status: Confirmed, with refinements.** The exact title is 「금융분야 AI 에이전트 보안 평가기준」. It was announced on 2026-10-07 and has **6 areas (분야) and 17 check items (점검항목)**. It is built into FSI's AI red-teaming of financial firms. The pilot runs to the end of 2026, and it becomes the formal inspection standard from 2027. **No full public list of the 17 items exists yet.** FSI says the final criteria will be published in its 2026 「AI REDTEAM REPORT」 within this year. Across the outlets, 12 of the 17 items can be identified by name. No downloadable criteria document was found.

### Cited Findings
- Title and date: "금융보안원(원장 박상원)은 … 「금융분야 AI 에이전트 보안 평가기준」을 개발했다고 밝혔다." Input timestamp 2026.10.07 08:40. — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760)
- Structure: "국내외 AI 에이전트 보안위협과 대응방안을 분석해 6개 분야 17개 보안 점검항목을 마련하고 금융회사 대상 AI 레드티밍 기준에 반영했다." — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760); also "총 6개 분야 17개 점검 항목을 도출했다" — [보안뉴스, 2026.10.07 15:03](https://www.boannews.com/news/articleView.html?idxno=146243)
- **10 items explicitly listed as newly created ("신설")**: "목표 무결성, 연쇄적 실패 대비, 취약한 도구 사용 금지, 도구 권한 제어, 샌드박스 환경 구축, 인적 승인 체계 구축, 인적 개입 과부하 방지, 자원 고갈 방지, 킬스위치(비상 정지) 구현, 에이전트 간 통신 보안 등을 집중 점검 항목으로 신설했다." — [디지털데일리](https://www.ddaily.co.kr/page/view/2026100710131453029)
- **2 more items named by 보안뉴스**: "△실행 중 축적되는 메모리 오염 및 격리 △외부 도구 플러그인 등 구성요소 전반의 공급망 보안과 연쇄적 실패 대비 방안 … △도구 권한 제어 △샌드박스 환경 구축 △인적 승인 체계 △킬 스위치 구현 등" — [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=146243)
- Scope moves from the model layer to the execution layer: "기존 AI 레드티밍이 탈옥(Jailbreak), 시스템 프롬프트 유출 등 모델 계층의 취약점을 중심으로 점검했다면, 앞으로는 AI 에이전트가 실제로 무엇을 실행하고 해당 행위가 적절하게 통제되는지 확인하는 '실행 계층'까지 점검 범위를 확대한다." — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760)
- Main inspection targets: "▲AI 에이전트의 실행 권한과 격리 관리 ▲외부 도구 실행과 승인 절차 ▲에이전트가 수행할 수 있는 작업 범위와 실행 결과 확인 ▲자율 실행 제한과 긴급 중단 가능 여부" — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760). 전자신문 phrases them as checks: "AI에 필요한 수준의 권한만 부여했는지, 외부 도구를 사용할 때 승인 절차를 거치는지, 정해진 업무 범위를 지키고 결과를 확인하는지 … 자율 실행을 제한하거나 필요할 때 중단할 수 있는지" — [전자신문](https://www.etnews.com/20261007000233)
- Timeline: "올해 말까지 금융권을 대상으로 시범 검증을 진행 … 2027년부터 해당 기준을 정식 AI 에이전트 보안 점검기준으로 확대 적용할 계획" — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760). The 보안뉴스 sub-headline says "2027년부터 정식 컴플라이언스 기준으로 전면 적용", but its body says "정식 점검 기준" — [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=146243)
- The pilot will refine the items: "금융회사별 AI 에이전트 구현 방식의 차이와 실제 점검 가능 여부 등을 반영해 평가항목과 점검 방법을 구체화하고 보완한다." — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760)
- Publication: "AI 에이전트 보안위협과 실제 공격기법, 최종 평가기준 등은 2026년 「AI REDTEAM REPORT」를 통해 공개할 예정" — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760); "최종 평가기준은 올해 발간하는 리포트에 공개할 예정" — [전자신문](https://www.etnews.com/20261007000233)
- Example threats FSI cites: an agent told to optimise performance turns off antivirus, and an email agent changes a password after reading a reset email "사용자의 명확한 승인 없이". — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760)
- Background (2026-01-05): FSI created a dedicated AI red-teaming team and planned to "AI 에이전트(Agent)에 대한 평가항목을 강화". Its AI organisation grows from 2 teams/9 people (2025) to 4 teams/20 people (2026). — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=203968)
- The FSI press release exists at fsec.or.kr (menuNo=69, bbsNo=12122; seen in search results), but it is **blocked in this session**, so its attachments could not be checked.

### Inferences
- The 12 named items match the OWASP agentic-threat taxonomy (memory poisoning, tool misuse, privilege compromise, resource overload, cascading failures, goal manipulation, overwhelming human-in-the-loop, agent-communication poisoning, rogue agents/kill switch, supply chain) almost one to one. "인적 개입 과부하 방지" (preventing human-oversight overload) is the giveaway. The other 5 of the 17 are probably identity/authentication, logging/traceability (repudiation), and input/prompt-injection checks carried over from FSI's earlier model-layer red-teaming. **This is an inference, not sourced.**
- The criteria are a red-teaming and inspection checklist that FSI applies to financial firms, not a statute. Still, "2027 정식 점검기준" means banks will be tested against tool-permission control, human approval and kill switch, which creates demand for evidence-producing controls.

### Gaps
- No outlet published the 6 area names or the remaining 5 items. The authoritative list will be in the 2026 「AI REDTEAM REPORT」, which had not been seen as of 10-29.
- Whether the fsec.or.kr press release has an attached PDF could not be checked (site blocked).

## Claim 2: FSC revised AI guideline (June 2026, 7 principles), FSS AI risk framework, FSI AI security guide

### Takeaway
**Status: Confirmed.** On **2026-06-18** the FSC announced a revision of 「금융분야 인공지능 가이드라인」 with **7 principles**, effective **2026-06-22**. On the same day the FSS 「금융분야 AI 위험관리 프레임워크」 and the FSI 「금융분야 인공지능 보안 안내서」 were distributed. The detailed contents of the FSS framework and the FSI guide were not available in any reachable source.

### Cited Findings
- "금융위원회는 18일 권대영 부위원장 주재로 … '금융권 인공지능 전환 현장 간담회'를 개최하고, '금융분야 인공지능 가이드라인' 개정안을 발표했다. … 오는 22일부터 전 금융권 및 핀테크 업계를 대상으로 전격 시행" — [전자신문, 2026-06-18](https://www.etnews.com/20260618000036)
- The 7 principles: "거버넌스, 합법성, 보조수단성, 신뢰성, 금융 안정성, 신의성실, 보안성 등 '7대 원칙'을 수립했다. 각 기업은 보유 자원과 서비스 위험도 등을 고려해 가이드라인 적용 범위를 자율 결정할 수 있다." — [전자신문](https://www.etnews.com/20260618000036)
- Companion documents: "22일 가이드라인 시행 당일에는 금융감독원의 '금융분야 AI 위험관리 프레임워크'와 금융보안원의 '금융분야 인공지능 보안 안내서'가 동시 배포된다." — [전자신문](https://www.etnews.com/20260618000036)
- 보조수단성 wording, quoted from the guideline: "금융회사 등은 AI를 업무의 보조수단으로 활용하되, 최종 의사결정과 그에 따른 책임은 임직원이 수행하도록 내부 관리체계를 구축해야 한다". For high-risk AI: "내부 임직원 등 사람이 AI의 동작에 개입할 수 있는 기준을 확립해 운용하는 것이 필요하다". — [한국경제 (법무법인 태평양 column), 2026-07-15](https://www.hankyung.com/article/202607156940i)
- Separate security guidance for all financial firms, from the May 22 plan, released in June: "전산자원 현황 전수점검, 패치 우선순위, 불필요한 외부 접점과 노후 PC 폐기, 계정관리와 접근권한 업데이트, 공급망 관리 강화 등" — [데일리시큐, 2026-05-28](https://www.dailysecu.com/news/articleView.html?idxno=206939). In July, the authorities also issued 「프런티어 AI 보안위협 금융분야 대응요령」. — [전자신문, 2026-10-08](https://www.etnews.com/20261008000199)

### Inferences
- 보조수단성 says the human employee is the final decision-maker and bears responsibility. That makes per-action human approval and audit trails the de facto way a bank shows compliance for agentic AI.

### Gaps
- Full texts of the FSS framework and the FSI 보안 안내서 could not be retrieved (fss.or.kr and fsec.or.kr blocked). Whether either contains agent-specific controls is unverified.

## Claim 3: 망분리 relaxation (Mythos-triggered, 49 to 75 firms, SaaS exception, full removal)

### Takeaway
**Status: Corrected on several points.**
1. **49 and 75 are eligible applicant pools, not firms covered.** Only **10 firms** got relief in round 1, and round 2 will select **at most 15**.
2. **Round-2 selection was postponed on 2026-10-07** after a wave of AI-assisted hacks of financial firms (16 firms breached by 10-14). One of them, Shinhan Bank, was a round-1 participant.
3. The SaaS change was **pre-announced in January and took effect on 2026-04-20 as a permanent exception**. It was not a temporary January–April exception.
4. Full removal of 망분리 is still a stated FSC goal ("보안을 전제로 … 추진 중"), but it had **not been implemented as of late October**.

### Cited Findings
- **May 22, 2026 trigger (Mythos):** "최근 미국 앤트로픽의 고성능 AI '미토스' 등이 해킹 공격에 악용될 수 있다는 우려" — [전자신문, 2026-05-22](https://www.etnews.com/20260522000097)
- **Eligible pool of 49:** "총자산 10조원 이상, 상시 종업원수 1000명 이상을 충족해 전자금융거래법상 전담 CISO를 두도록 규율받는 49개 금융회사가 대상" — [전자신문](https://www.etnews.com/20260522000097). The relief lasts 1 year via 비조치의견서 (no-action letter). Planned rounds: round 1 "10개사 이내 … 6~7월", round 2 "10~20개사 … 8~9월", round 3 "4분기". — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=206939)
- **Round-1 selection (10 firms):** "은행(신한·하나·우리은행·카카오뱅크) △증권(KB·NH투자·미래에셋증권) △보험(삼성화재·한화생명) △카드(현대카드)". Conditions: only services with "SOC2 △FedRAMP △ISO27017 △CSAP △MTCS △ISMS-P" certification, and they must "개인신용정보 고유식별정보 등 중요정보의 외부전송 유출 여부를 모니터링하고 통제". — [전자신문, 2026-06-23](https://www.etnews.com/20260623000315)
- **Permitted uses (security only):** "취약점 탐지·모의해킹, 보안관제 고도화, 로그 수집·위협 분석, 침해사고 대응, 소스코드 취약점 분석, 클라우드 보안이다. 정보보호와 무관한 일반 업무는 대상에서 제외됐다." — [디지털데일리, 2026-06-25](https://www.ddaily.co.kr/page/view/2026062511030130717)
- **Round 2, finalised early September:** "금융위원회가 최근 '제2차 망분리 규제 긴급 완화 조치'를 확정하고, 전자금융업자에 별도 신청 기준을 마련했다. 전자금융업자는 연간 전자금융거래액 2조원 이상, 전자금융업 관련 매출액이 총매출액의 10%를 초과하는 기업이 신청할 수 있다. 네이버페이·카카오페이·토스 등 핀테크 업계도 … 길이 열린 것" … "최대 15개사만 선정한다. 선정 기업도 … 망분리 대체 통제수단을 마련해야 한다." — [전자신문, 2026-09-07](https://www.etnews.com/20260907000301)
- **Composition of the 75:** a Hankyung/Yonhap item of 2026-09-03 15:04, titled "금융위 2차 망분리 규제 완화…선정기관 10개→15개사 확대", appears in hankyung.com's search index, but the article page now returns 404. Search-engine snippets of it say the round-2 pool is **75 = 59 financial companies + 16 electronic financial business operators (전자금융업자)**, with the financial-company threshold lowered to "총자산 2조원 이상, 상시 종업원 300명 이상" and the CISO required not to hold other IT roles. **Only snippet-level verification; the full text could not be opened.** — [Hankyung search index](https://search.hankyung.com/search/news?query=%EB%A7%9D%EB%B6%84%EB%A6%AC%2059%EA%B0%9C) (dead link: https://www.hankyung.com/article/202609032323)
- **Round 2 postponed (2026-10-07):** "금융당국은 오늘 2차 규제완화 대상 금융사를 선정할 계획이었지만, 해킹 사고 수습을 이유로 일정을 잠정 보류했는데요." FSC position: "이번 일정 연기가 망분리 완화 재검토를 의미하는 것은 아니다 … 최대한 신속하게 2차 선정 절차를 진행한다". Experts quoted urge caution, e.g. keep 망분리 for core servers. — [한국경제, 2026-10-07 17:46](https://www.hankyung.com/article/2026100792555)
- **Hacking wave:** Shinhan Bank leaked loan data on about 25,000 customers. The attacker used credential stuffing on the loan-agent app 'M 신한' and then tampered with API requests, a "인가 결함(Broken Access Control)". The traffic came from overseas IPs and was suspected to be automated AI agents. "신한은행은 AI 활용 촉진을 위한 금융권 망분리 규제 완화 1차 실증에 참여하고 있다." — [보안뉴스, 2026-10-02](https://www.boannews.com/news/articleView.html?idxno=146174). By 10-14 there were **16 breached firms** across banks, savings banks, credit-card/specialised lenders, e-finance firms, P2P lenders and crypto exchanges (고팍스/스트리미, 프라뱅, 브라이트픽스, DB저축은행, 산은캐피탈 added), with about 100k records leaked. A self-check of 555 firms found 130 (23.4%) with deficiencies. The FSC will re-inspect all external connection paths, clarify CEO/CISO/CIO responsibility, and raise vulnerability assessments from once a year to at least twice. — [한국경제, 2026-10-14](https://www.hankyung.com/article/2026101422011); [한국경제](https://www.hankyung.com/article/2026101416887)
- **SaaS exception, correct dates:** "20일 금융위원회는 SaaS를 망분리 규제 예외 사유로 명시한 '전자금융감독규정 시행세칙 개정'을 완료하고 이날부터 시행한다." Scope: "일반 사무용 및 관리업무 지원용 SaaS". Excluded: "고유식별정보나 개인신용정보를 처리하는 시스템". Duties: SaaS evaluated by an incident-response body, endpoint protection, and a self-assessment at least every half-year reported to the 정보보호위원회. — [디지털데일리, 2026-04-20](https://www.ddaily.co.kr/page/view/2026042011325244673). The January date was the pre-announcement ([전자신문, 2026-01-19](https://www.etnews.com/20260119000273), seen in search results only).
- **Full removal, chronology of statements:**
  - 6/10, 이억원: "고도의 AI·보안 역량을 갖춘 금융회사를 선별해 망분리 규제를 전면 해제하는 방안도 연내 시행을 목표로 검토·추진하겠다" — [디지털데일리](https://www.ddaily.co.kr/page/view/2026061017053068904). Hankyung's headline "13년 만에 전면 해제" overstates this; its own body describes a plan. — [한국경제](https://www.hankyung.com/article/2026061090151)
  - 7/10: "망분리 전면 해제 방안도 조속히 구체화하여 발표하겠다" — [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=144622)
  - 7/15, FSC H2 work plan: "망분리 규제를 전면 해제하고, 디지털금융안전법 제정을 추진" (the new act would clarify liability between financial firms and external IT vendors for hacks) — [디지털데일리](https://www.ddaily.co.kr/page/view/2026071517443276094)
  - 10/8, national audit: "보안을 전제로 망분리 규제 해제를 추진 중" — [전자신문](https://www.etnews.com/20261008000199)
- How firms are picked for full removal: "민간 기술자문단과 혁신위 등을 통해 선별 … 보안 역량, AI 활용 능력, 망분리 대체 보안조치". Routed through "기획형 혁신금융서비스". — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=206939)

### Inferences
- The 75-firm pool corresponds to the 전자금융거래법 CISO-designation threshold (assets of 2조원 or more and 300 or more employees), plus large payment/fintech firms. In practice that means mid-size and large banks, securities firms, insurers, card companies, some savings banks and capital firms, plus Naver Pay, Kakao Pay and Toss-class e-finance firms. The exact list was not published in any source opened.
- After the October breaches, the path to relief runs through demonstrable compensating controls (authorization checks, access control, monitoring). This strengthens the case for agent-permission and audit tooling, but a full lifting of 망분리 within 2026 now looks unlikely. Hankyung: "속도 조절이 불가피할 전망".

### Gaps
- Official composition of the 75 and the round-2 results: not available (the FSC press release is blocked and the Hankyung/Yonhap page returns 404). Whether round 2 had been selected by 10-29 is not confirmed.
- A 2026-10-26 뉴스웨이 headline, "금감원 'AI 보안 역량 갖춘 금융사, 망분리 전면 해제 검토'", appeared in search results, but the site is blocked and the article was not opened.

## Claim 4: Rules on responsibility for AI-agent actions in finance "under review"

### Takeaway
**Status: Confirmed as "under review"; no draft exists.** The FSC said on 2026-06-18 that it will consider a new framework specifying **responsibility and authority (책임과 권한)** of AI agents that go from product recommendation to payment, plus AI-specific supervision. A TF in H2 will derive the tasks and run sandbox tests. The rule in force until then is the guideline's 보조수단성: employees bear final responsibility. Separately, the planned 디지털금융안전법 would allocate hacking liability between financial firms and IT vendors.

### Cited Findings
- "AI 에이전트가 상품 추천부터 결제까지 수행하는 환경에 대응해 책임과 권한을 명시한 새로운 규율체계와 AI 전용 감독방안도 검토한다. … 정부는 하반기 중 전담반(TF)을 구성해 제도개선 세부 과제를 도출하고, 규제 특례(샌드박스) 테스트를 통한 단계적 검증에 착수할 예정" — [전자신문, 2026-06-18](https://www.etnews.com/20260618000036)
- "금융당국이 금융상품을 판매하는 인공지능(AI) 에이전트를 감독하는 체계를 만들기로 했다. AI 에이전트가 상품 추천과 가입, 결제까지 도맡는 시대에 대비해 AI의 책임과 권한을 사전에 정해둬야 한다는 판단에서다." Attendees included KB금융, 우리금융, 신한카드, BC카드, 네이버파이낸셜, 카카오페이, 비바리퍼블리카 and 뱅크샐러드. — [한국경제, 2026-06-18](https://www.hankyung.com/article/2026061850841)
- Legal commentary: the guideline is administrative supervision, "민사법적인 판단과는 일차적 관련이 없다". Under 보조수단성, "금융사고가 발생했을 때 금융기관이 일차적인 책임을 지는 방향으로 귀결될 가능성". Pre-deployment testing and compliance effort "실제 행정책임을 검토할 때 충분히 반영될 수 있다". — [한국경제/태평양](https://www.hankyung.com/article/202607156940i)
- 디지털금융안전법: "해킹과 침해사고 발생 시 금융회사와 외부 IT업체의 책임을 명확히 구분할 방침" — [디지털데일리, 2026-07-15](https://www.ddaily.co.kr/page/view/2026071517443276094)

### Inferences
- Because documented control efforts mitigate administrative liability, an auditable record of the permissions, approvals and actions of each agent is directly useful to a bank's legal defence.

### Gaps
- No TF output, draft rule, or sandbox designation for agent liability was found as of 10-29.

## Claim 5: KISA "AI 보안 가이드 2.0" agent checklist; MSIT/KISA threat manual and red-teaming guide (July 2026)

### Takeaway
**Status: The July guides are Confirmed. The "2.0" claim is Corrected/Unverified.** On **2026-07-08** MSIT and KISA published 「AI 보안 위협 대응 매뉴얼」 and 「AI 보안 레드티밍 가이드」. The KISA document is called **「AI 보안 안내서」** (Dec 2025). **「AI 보안 안내서 2.0」** is a planned deliverable of a KISA research tender (announced around 2026-04-03) and will include an agent checklist. No source shows it published by 10-29.

### Cited Findings
- "8일 과학기술정보통신부와 한국인터넷진흥원(KISA)은 … 'AI 보안 위협 대응 매뉴얼'과 'AI 보안 레드티밍 가이드'를 발간했습니다." The manual classifies threats as "데이터·모델·에이전트·공급망·고성능 모델 위협 등" and covers 8 industry scenarios including finance. The red-teaming guide is "ISO/IEC 42119-7을 기반" and includes "체크리스트와 점검 도구, 인력 직무기술서". — [디지털데일리, 2026-07-08](https://www.ddaily.co.kr/page/view/2026070810393444890); [보안뉴스, 2026-07-08](https://www.boannews.com/news/articleView.html?idxno=144567)
- 2.0 plan: KISA tender "'차세대 AI의 안전한 개발 및 이용을 위한 보안 연구'". "주요 결과물 중 하나는 'AI 보안 안내서 2.0'다 … 개발자 대상에는 권한 분리, 샌드박싱, 입력값 검증, 의사결정 로깅 등 기술적 지침 … 이용자에게는 권한 설정과 고위험 행동 승인 절차". KISA says it will provide "기업이 참고할 수 있는 형태의 대조표(체크리스트)". — [디지털데일리, 2026-04-03](https://www.ddaily.co.kr/page/view/2026040309250982850)
- KISA (5/26): "올해는 에이전트 AI 보안 위협을 중심으로 내용을 고도화할 예정". KISA warns of "'쉐도우 에이전트'". AI안전연구소 published 8 agent-safety principles (least privilege, user confirmation of high-risk actions, immediate stop on anomalies, and others). — [전자신문, 2026-05-26](https://www.etnews.com/20260526000316)

### Inferences
- Once published, 안내서 2.0 will likely align with FSI's items (permission separation, sandboxing, decision logging, approval of high-risk actions), giving a cross-sector baseline.

### Gaps
- Publication status of 안내서 2.0 as of 10-29 is unknown (kisa.or.kr blocked; no news of release found).

## Claim 6: AI 기본법 (effective 2026-01-22): high-impact AI, 30M KRW fine cap, ≥1-year grace, record-keeping

### Takeaway
**Status: Confirmed, with one caveat.** The law took effect on 2026-01-22. Fines are capped at **3,000만원**, and they apply to **failure to comply with a corrective order (시정명령 미이행)**. The grace period on fines is **at least 1 year**, and MSIT also said it would not run fact-finding investigations during that year. High-impact AI covers 10 domains, including **대출심사 (loan screening)**. Record-keeping: high-impact AI operators must prepare and **keep a safety/trust document** (about 10 pages per the guidance). MSIT reads "high-impact" narrowly, as fully automated with no human in the loop.

### Cited Findings
- "AI 기본법 위반에 따른 시정명령 미이행 때 3000만원 이하 과태료가 부과된다." — [디지털데일리, 2025-09-08](https://www.ddaily.co.kr/page/view/2025090815422394673)
- "과태료 계도기간을 최소 1년 이상 운영할 계획" — [보안뉴스, 2025-11-12](https://www.boannews.com/news/articleView.html?idxno=140301); [전자신문](https://www.etnews.com/20251112000177)
- Effective date and enforcement stance: "인공지능(AI) 기본법이 22일부터 시행된다 … 과태료 부과뿐 아니라 사실 조사도 1년 이상 유예하기로 했다." High-impact AI: "원자력·에너지·교통·금융 등 10개 영역 중 사람이 개입하지 않는 전자동 운용 시스템을 의미" (MSIT official). The compute threshold for safety obligations is 10^26 FLOPs, "현재 국내외 모두 기준에 부합하는 모델은 없는 것으로 판단". — [한국경제, 2026-01-21](https://www.hankyung.com/article/202601202345i)
- 10 domains: "에너지, 먹는물, 의료, 원자력, 범죄수사, 채용, 대출심사, 교통, 공공서비스, 교육". Obligation: "가이드라인에 따라 안전·신뢰 문서(약 10쪽 내외)를 작성해 보관하는 방식". Transparency duty: prior notice to users that a service uses generative or high-impact AI. — [데일리시큐, 2026-01-29 (MSIT startup FAQ)](https://www.dailysecu.com/news/articleView.html?idxno=204777)

### Inferences
- A financial AI agent falls under AI 기본법 high-impact duties mainly if it performs loan screening without human involvement. Most bank agents keep humans in the loop under 보조수단성, so they would likely fall outside MSIT's narrow reading. For finance, the binding pressure on agent controls comes from FSC, FSS and FSI supervision more than from AI 기본법.
- The ≥1-year grace from 2026-01-22 means fines could start around 2027-01-22 at the earliest. The exact end date was not announced in any source opened.

### Gaps
- The statutory text of Art. 34 (고영향 AI 사업자 책무) could not be checked because law.go.kr is blocked. From prior knowledge, not verified in this session: it lists risk management, explanation, user protection, human oversight, and "안전성·신뢰성 확보 조치의 내용을 확인할 수 있는 문서의 작성과 보관". Treat this as unverified.
- Sources conflict on whether fact-finding is also suspended. 한국경제 says yes. Search snippets attributed a contrary reading to 디지털데일리, but the 디지털데일리 article that was opened did not show this.

## New and decision-relevant findings (vendors and procurement signals)

### Takeaway
No source names a Korean financial firm buying an AI-agent permission-audit product. Global vendors are, however, actively pitching agent inventory, permission and approval controls to Korean finance. FSI and the regulators are also building testing capacity, and the October breaches put authorization failures at the centre of the debate.

### Cited Findings
- **Microsoft** (6/24 finance seminar): 'Agent 365' "조직의 모든 에이전트를 한 화면에 모아 누가 만들었고 어떤 데이터를 건드리는지 추적하고 … '섀도 AI'까지 찾아낸다 … AWS 등 타사 플랫폼 에이전트도 끌어와 관리하고 위험이 감지되면 작동을 멈추는 기능도 개발 중". Also pitched: Security Copilot and MDASH, a vulnerability-analysis system with about 100 agents. — [디지털데일리](https://www.ddaily.co.kr/page/view/2026062511030130717)
- **Cisco** (10/13, after the breaches): SASE 'Secure Access' "과도한 권한이 부여된 에이전트를 통제", plus "'듀오'와 '아이덴티티 인텔리전스'를 결합해 모든 AI 에이전트들을 대상으로 다중인증(MFA)를 실시하고 행동을 인가하고 승인". Cisco also urges controlling agent access to specific MCP servers. — [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=146356)
- The **5대 금융지주** (KB, Shinhan, Hana, Woori, NH) committed on 6/10 to create group-level security red teams and adopt AI security monitoring and pen-testing solutions. — [전자신문](https://www.etnews.com/20260610000083)
- Zero trust is spreading fastest in finance (ZTNA pilots at major banks), but "AI 에이전트와 모델 컨텍스트 프로토콜(MCP) 서버가 새로운 인증 주체로 등장하면서 기존 체계에 또 다른 구멍" — [디지털데일리](https://www.ddaily.co.kr/page/view/2026062621155026955)
- At a finance conference (8/20, 250 attendees), speakers made these calls:
  - Kim & Chang adviser: continuous tracking of "AI 에이전트가 어떤 권한으로 어떤 데이터에 접근했고 무슨 판단과 행동을 했는지".
  - SAS: "KYA(Know Your Agent)".
  - Sumsub: the "책임성 격차(accountability gap)".

  — [디지털데일리](https://www.ddaily.co.kr/page/view/2026082016084427878)
- FSI capacity: the 금융AI보안연구소 is being set up (an AI안전평가부 among its units), FSI is giving black-box AI vulnerability checks to up to 17 firms, and an AI security support centre is being built for small and mid-size firms and fintechs. — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=206939)

### Inferences
- Buyers: about 10 to 25 large financial firms in the relief programme, plus every firm that will face FSI agent red-teaming from 2027. They need evidence for tool-permission control, human approval, kill switches and agent logs. Microsoft and Cisco are the incumbent competitors. A Korea-specific product that maps controls to FSI's 17 items is a plausible wedge (an inference).

### Gaps
- No procurement notice or named bank deployment of an agent-permission or agent-audit product was found. The domestic vendor landscape (for example 이로운앤컴퍼니 or 인성디지탈, which appear only in headlines) was not researched.

## Sources actually opened (full text downloaded)
dailysecu 208760, 203968, 206939, 204777, 207551, 207213, 202311 · ddaily 2026100710131453029, 2026061017053068904, 2026042011325244673, 2026062511030130717, 2026070810393444890, 2026040309250982850, 2026062621155026955, 2026082016084427878, 2026071517443276094, 2025090815422394673 · etnews 20261007000233, 20260618000036, 20260623000315, 20260522000097, 20260610000083, 20260907000301, 20261008000199, 20260526000316, 20251112000177, 20260419000092 · boannews 146243, 146174, 146356, 144567, 144622, 146113, 140301 · hankyung 2026061850841, 2026061090151, 202607156940i, 202601202345i, 2026100792555, 2026101422011, 2026101416887.
