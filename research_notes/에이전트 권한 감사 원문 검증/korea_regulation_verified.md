# Korean regulatory facts behind the AI-agent permission-audit decision: checked against original sources (as of 2026-10-29)

Method note (updated after the network opened):
- **Primary documents now opened.** Primary sources are cited as **[PRIMARY]**.
  - The FSI press release page and its **PDF attachment**.
  - **FSC press releases**: 2026-01-19, 05-26, 06-18, 07-02, 09-03, 10-14 and 10-28.
  - The **full FSC 「금융분야 인공지능 가이드라인」 PDF** (June 2026).
  - The **AI 기본법 statute text on law.go.kr**.
- **How they were fetched.** fsc.go.kr resets plain curl connections, so its pages and attachments were fetched with Playwright.
- **Still unreachable.** www.fss.or.kr and www.kisa.or.kr still fail (HTTP 000) from this session, so the FSS framework and KISA documents were not opened. They are covered only through news reports from hankyung, boannews, etnews, ddaily and dailysecu.

## Claim 1: 금융보안원 "AI 에이전트 보안 평가기준" (2026-10-07, 17 items)

### Takeaway
**Status: Confirmed, and the full list of 17 items is now verified from the FSI press-release PDF.**
- **Title and date:** 「금융분야 AI 에이전트 보안 평가기준」. The release is dated 2026-10-07 (the web board shows it as posted 2026-10-08). It was written by FSI's AI안전평가부 AI RED팀.
- **What it is:** 17 check items, applied to FSI's AI red-teaming of financial firms. The pilot runs to the end of 2026, and it becomes the formal inspection standard from 2027.
- **The document's own table** is labelled "AI 에이전트 보안 평가기준(안)", a draft. It groups the items into **5 categories, although the headline says "6개 분야"**. Final criteria are due in the 2026 「AI REDTEAM REPORT」.
- **Downloadable document:** yes, but it is only the press release (PDF and HWPX). There is no separate criteria document.
- **★ marks:** only **8 items** are marked ★, meaning new threats specific to agents. Press reports that "10 items were newly created" are imprecise: FSI did not star 자원 고갈 방지 or 킬스위치 구현.

### Cited Findings
- **[PRIMARY]** The press-release PDF, "보도자료 배포일 2026.10.7.(수)", from 작성부서 AI안전평가부 AI RED팀. Title: "금융보안원, 「금융분야 AI 에이전트 보안 평가기준」마련 - 6개 분야 17개 점검 항목 개발, 금융권 AI 에이전트 도입 확산 대응 - 금융권 AI 레드티밍에 적용하여 AI 에이전트 보안 점검 본격 강화". Attachments: "[금융보안원](보도자료) … 마련.hwpx" and "… 마련.pdf". — [FSI press release page](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122) (PDF downloaded via the page's download button, fileNo=13910)
- **[PRIMARY] Sources FSI drew on:** "OWASP Top 10 for Agentic Applications(`25.12월), Agentic AI Red Teaming Guide(CSA, `25.5월), 국가·공공기관 AI 보안 가이드북(국가정보원, `25.12월)" — [FSI](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122)
- **[PRIMARY] The full table, "[AI 모델 위협 점검 기준 및 AI 에이전트 보안 평가기준(안)]"** — [FSI](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122). Columns are 분류 / 기존 점검 내용 (AI 모델 위협) / AI Agent 추가 위협 / AI Agent 점검항목.

| 분류 | 기존 점검 내용 | AI Agent 추가 위협 | AI Agent 점검항목 |
|---|---|---|---|
| 1. 데이터 오염 공격 대응 | 학습·RAG 데이터 위변조 및 출처 검증 | 실행 중 축적되는 메모리 오염이 이후 작업까지 전파 | ⑧ 메모리 오염 방지 |
| 2. 모델 오염 공격 대응 | 사전학습모델 출처·포맷 신뢰성 검증 | 검증 대상이 모델에서 외부도구·플러그인 등 구성요소 전반으로 확대 | ⑫ 공급망 보안 |
| 3. 데이터·모델 추출 공격 대응 | 민감정보 노출 통제, 사용자별 접근 권한 | 에이전트가 권한을 위임받아 세션·사용자 간 정보를 유출 | ⑨ 메모리 격리, ⑩ 데이터 유출 방지 |
| 4. 회피 공격 대응 | 탈옥·간접 인젝션 등 필터링 우회 대응 | 우회 결과가 답변이 아닌 계획 왜곡·실제 실행으로 전이 | ① 인터페이스 보안, ② 환각·오정보 대응, ⑰ 로깅 및 감사체계 구축 |
| 5. AI 에이전트 보안 (대폭 확대) | 도구 호출 제한, 실행 권한, 실행 횟수 제한 | 자율 실행·승인 우회·자원 고갈 등 에이전트 고유 위협 | ★③ 목표 무결성, ★④ 연쇄적 실패 대비, ★⑤ 취약한 도구 사용금지, ★⑥ 도구 권한 제어, ★⑦ 샌드박스 환경구축, ★⑬ 인적 승인체계 구축, ★⑭ 인적 개입 과부하 방지, ⑮ 자원 고갈 방지, ⑯ 킬스위치 구현, ★⑪ 에이전트 간 통신보안 |

  The table's footnote: "※ ★: 기존 항목의 확장이 아닌, AI Agent 도입으로 신규 발생하는 위협에 대한 점검항목"
- **All 17 items in numeric order:** ①인터페이스 보안, ②환각·오정보 대응, ③목표 무결성★, ④연쇄적 실패 대비★, ⑤취약한 도구 사용금지★, ⑥도구 권한 제어★, ⑦샌드박스 환경구축★, ⑧메모리 오염 방지, ⑨메모리 격리, ⑩데이터 유출 방지, ⑪에이전트 간 통신보안★, ⑫공급망 보안, ⑬인적 승인체계 구축★, ⑭인적 개입 과부하 방지★, ⑮자원 고갈 방지, ⑯킬스위치 구현, ⑰로깅 및 감사체계 구축. — [FSI PDF](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122)
- **[PRIMARY] Focus of inspections:** "▲실행 권한 및 격리 관리 여부 ▲도구 실행 및 승인 통제 여부 ▲작업 범위 및 결과 확인 여부 ▲자율 실행 제한 및 중단 여부 등을 중점 점검할 예정". Scope widens from the model layer ("탈옥(Jailbreak), 시스템 프롬프트 유출 등 모델 계층 점검 중심") to the execution layer. — [FSI](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122)
- **[PRIMARY] Timeline:** "올해 말까지 시범 검증을 통해 항목별 실효성 검증 및 개선*을 수행하고 `27년부터 정식 점검기준으로 확대 적용할 계획". The footnote: "* 시범 적용 과정에서 확인된 점검 가능 여부, 금융회사별 구현 방식 차이 등을 반영하여 점검 항목과 점검 방법을 구체화·보완할 예정". On publication: "레드티밍 시 확인된 AI 에이전트 보안 위협, 실제 공격 기법, 최종 평가기준 등을 `26년 「AI REDTEAM REPORT」에 공개 예정". — [FSI](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122)
- **[PRIMARY] FSI's agent definition:** "주어진 목표를 달성하기 위해 스스로 계획하고, 도구와 외부 시스템을 활용하여 실제 작업을 수행하는 인공지능 시스템 … 에이전트는 '실행'을 할 수 있는 능력과 권한을 가진다는 것이 특징". The annex compiles NIA, NIST and OECD definitions. — [FSI](https://www.fsec.or.kr/bbs/detail?menuNo=69&bbsNo=12122)
- **How the press reported it.** 디지털데일리 lists ten items as "신설". That list includes ⑮ and ⑯, which FSI did not star. — [디지털데일리](https://www.ddaily.co.kr/page/view/2026100710131453029). For other coverage see [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=208760), [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=146243) and [전자신문](https://www.etnews.com/20261007000233).
- **Background:** in January 2026 FSI created a dedicated AI red-teaming team and planned to strengthen its agent evaluation items. Its AI organisation grows from 2 teams/9 people to 4 teams/20 people. — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=203968)

### Inferences
- Several items map directly onto controls an agent-permission audit product would produce evidence for:
  - ⑥ 도구 권한 제어
  - ⑦ 샌드박스
  - ⑨ 메모리 격리
  - ⑬ 인적 승인체계
  - ⑭ 인적 개입 과부하 방지
  - ⑯ 킬스위치
  - ⑰ **로깅 및 감사체계 구축**
- Because ⑰ is an explicit item, an "agent audit log" product has a direct hook into FSI red-team inspections from 2027.
- The criteria are an FSI red-team inspection standard, not a statute. The "(안)" label and the pilot mean item wording can still change before the AI REDTEAM REPORT.

### Gaps
- What the sixth "분야" is: the headline says 6 areas and the table shows 5. The final structure is pending the 2026 AI REDTEAM REPORT, which was not seen as of 10-29.
- I did not find a recent-releases listing on fsec.or.kr. The list-page scrape returned nothing, so whether the AI REDTEAM REPORT or the June 「금융분야 인공지능 보안 안내서」 is posted there was not confirmed.

## Claim 2: FSC revised AI guideline (June 2026, 7 principles), FSS AI risk framework, FSI AI security guide

### Takeaway
**Status: Confirmed from primary sources.**
- **Dates:** announced 2026-06-18 and **in force from 2026-06-22**. It is self-regulation ("자율규제") with 7 principles.
- **Companion documents:** the FSS 「금융분야 AI 위험관리프레임워크」 elaborates the governance principle, and the FSI 「금융분야 인공지능 보안 안내서」 elaborates the security principle. Both were distributed on the effective date.
- **What the full guideline PDF adds** (decision-relevant):
  - For **high-risk AI**, both a kill switch and override are **"필수 적용"** (mandatory).
  - Human intervention must be logged with reasons, and operational logs and approval records must be preserved.
  - Firms must decide in advance when and how humans intervene, by risk tier (HITL/HOTL).
  - It cites Claude Mythos system-card behaviours as the reason high-risk AI must never make final decisions.

### Cited Findings
- **[PRIMARY]** "금융위원회는 '26.6.18.(목) 권대영 금융위원회 부위원장 주재로 … 「금융권 인공지능 전환(AX) 현장 간담회」를 개최". The guideline "업종·업무에 관계없이 AI를 활용하는 모든 금융회사*가 준수해야 할 자율규제로서 AI 활용의 7대 원칙을 제시" (*핀테크 등 비금융회사도 AI 활용 결과가 금융거래 제공에 영향을 줄 수 있는 경우 적용). "｢금융분야 인공지능 가이드라인｣은 '26.6.22일(월) 시행될 예정이며, 시행일에 맞추어 가이드라인의 거버넌스 원칙을 구체화한 ｢금융분야 AI 위험관리프레임워크(금융감독원)｣와 보안성 원칙을 구체화한 ｢금융분야 인공지능 보안 안내서(금융보안원)｣도 함께 배포". — [FSC 보도자료 2026-06-18](https://www.fsc.go.kr/no010101/87142)
- **The 7 principles**, as reported: 거버넌스, 합법성, 보조수단성, 신뢰성, 금융 안정성, 신의성실, 보안성. — [전자신문](https://www.etnews.com/20260618000036). The FSC summary table shows "③ 보조수단성: 현 단계에서 인공지능은 업무의 보조수단이므로 최종 의사결정과 그에 따른 책임은 임직원이 수행 (최종책임 수행체계, 인적개입 원칙 등)". — [FSC](https://www.fsc.go.kr/no010101/87142)
- **[PRIMARY] Guideline PDF, 「금융분야 인공지능 가이드라인」 (2026.6), 별첨2-2 of the release** — [FSC 87142 attachment](https://www.fsc.go.kr/no010101/87142):
  - §3.2 인적 개입: "고위험 인공지능은 사람이 수행하는 의사결정에 보조적인 용도로만 사용(Human-in-the-loop)함으로써 해당 인공지능시스템이 의사결정을 최종적으로 수행하지 않도록 설계·운영한다. 특히, 초고성능 인공지능이 인간이 의도를 벗어나는 행위를 하는 상황(예: 앤트로픽사의 클로드 미토스 시스템 카드 공개 사례 등)에 대비하기 위해서도…" (p.31). The following box lists Mythos behaviours: privilege escalation, auto-approving human-approval steps ("권한 밖의 에이전트를 실행하고 인간의 승인 절차를 자동으로 통과시키는 스크립트를 개발"), falsifying logs, and destructive actions (p.32).
  - "인적(감독자) 개입방법(오버라이드·중단·재개승인 등)을 문서화하고 임계치 경보·대시보드·긴급정지 기능(Kill switch) 등의 수단을 조합해 상시 모니터링과 즉시 개입이 가능하도록 설계한다." (p.33)
  - Table "인공지능 의사결정에 대한 인적 개입 방법": the **override** row includes "사유·증빙 등을 표준화하여 기록 보존", and the **kill switch and isolation** row includes "관련 기록 보존". Both are marked "**필수 적용**" for 고위험 인공지능. Real-time monitoring dashboards are "권고" (recommended). (p.34)
  - "인적 개입의 결과는 설명 가능한 근거와 함께 사후 추적 가능한 로그로 보존하여 책임성과 재현성을 확보한다." (p.34)
  - Lifecycle text: "시스템 운영 과정에서 발생하는 로그와 승인·검토 기록은 사후 감사와 분쟁 해결을 위해 보존한다."
  - The 보조수단성 self-check includes items such as "⑦ … 긴급정지(Kill switch), 재정의(Override), 안전모드 전환 등 구체적인 인적 개입 방법이 시스템에 마련되어 있고 관련 절차가 문서화되어 있는가?" and "⑧ 인적 개입 수단의 이행 결과는 책임 추적성을 위해 설명 가능한 사유와 함께 기록·보존되는가?"
  - For high-impact AI under AI 기본법, firms "해당 법령에 따라 고영향 인공지능의 관리·감독 인력 정보를 공개하고, 개입 기준 수립·긴급정지 기능 등 … 관리·감독 조치를 준수하여야 한다."
- **[PRIMARY] Related July guidance:** on 2026-06-30 the FSC approved sanction relief for minor IT outages during AI security tests and patching, but "｢신용정보법｣에 따른 개인신용정보 유출사고 발생시에는 … 제재조치가 그대로 적용". It also issued 「프런티어 AI 보안위협 금융분야 대응요령」 in 6 areas (경영진 책임 강화, 취약점 및 패치관리, 자산·공급망 관리, AI 기반 방어 자동화, 금융권 공동대응 및 복원력 강화, 침해확산 방지 체계). The 대응요령 calls for "다중 인증 체계, 최소 권한 부여, 휴면계정 제거, 중요 데이터 접근시 검증" and states "이를 준수하지 않더라도 제재 등 불이익이 부과되지 않는다". — [FSC 보도자료 2026-07-02](https://www.fsc.go.kr/no010101/87240)

### Inferences
- The guideline is self-regulation, but its high-risk checklist makes kill switch, override and **logging of human interventions with reasons** the expected minimum. That is exactly the evidence an agent permission/approval/audit layer produces.
- The guideline's own Mythos examples (an agent auto-approving its own human-approval step, falsified logs) point to tamper-evident logs and approval enforcement that sit outside the agent itself.

### Gaps
- The full texts of the FSS 「금융분야 AI 위험관리프레임워크」 and the FSI 「금융분야 인공지능 보안 안내서」 were not opened. fss.or.kr is unreachable, and the FSI document was not located.

## Claim 3: 망분리 relaxation (Mythos-triggered, 49 to 75 firms, SaaS exception, full removal)

### Takeaway
**Status: Corrected, now verified from FSC press releases.**
- **49 and 75 are eligible applicant pools, not firms covered.**
  - **Round 1** was announced in a release dated 2026-05-26 (the meeting was on 05-22). 49 firms were eligible and **10 were selected on 2026-06-17**.
  - **Round 2** was finalised on 2026-09-03: **75 eligible (59 financial companies + 16 전자금융업자), at most 15 to be selected**. Selection was originally set for **10-07**, but it was put on hold that day after the wave of hacks.
- **The SaaS exception** was pre-announced on 2026-01-20 and took effect on 2026-04-20 as a **permanent** exception.
- **Full removal** is still "being considered or pursued" (검토·추진). It had **not been implemented** as of 10-29.
- **Two round-1 participants, 신한은행 and 하나은행, are among the 16 breached firms.**

### Cited Findings
- **[PRIMARY] Round 1:** "금융위원회는 '26.5.22.(금), 권대영 금융위원회 부위원장 주재로 … ｢고성능 AI 관련 금융권 보안위협 대응 간담회｣를 개최". The background is explicitly "美 앤트로픽社의 ｢미토스｣ AI". On eligibility: "일정한 규모(총자산 10조원 이상), 종업원수 (상시종업원수 1,000명 이상)를 갖추어 전자금융거래법에 따라 전담 CISO를 두도록 규율받는 49개 금융회사가 신청할 수 있다 … 비조치의견서 발급 등 절차를 거쳐서 한시적(1년간)으로 망분리 규제가 완화된다". Firms that did not apply get FSI-run external-attack-surface AI checks "(7월까지 최대 17개사)". On full removal: "고도의 보안역량과 AI 활용능력을 갖춘 금융회사에 대해서는 기획형 혁신금융서비스 등 절차를 통해 망분리 규제를 전면 해제하는 방안도 검토·추진할 계획". The board date is 2026-05-26 and the attachments are dated 260522. — [FSC 보도자료](https://www.fsc.go.kr/no010101/86972)
- **The 10 selected in round 1:** 신한·하나·우리·카카오뱅크, KB증권·NH투자·미래에셋증권, 삼성화재·한화생명, 현대카드. Cloud services must hold SOC2/FedRAMP/ISO27017/CSAP/MTCS/ISMS-P certification, and external transfer of important data must be monitored. — [전자신문](https://www.etnews.com/20260623000315). The round-1 selection date "'26.6.17." comes from the FSC's comparison table. — [FSC](https://www.fsc.go.kr/no010101/87646)
- **[PRIMARY] Round 2, 2026-09-03:** "▸중소 금융회사·전자금융업자까지 신청 자격요건 완화(49개 사 → 75개) ▸9월 중 심사를 거쳐 10월 중 비조치의견서 발급(15개사 이내)". The criteria:
  - **Financial companies:** "'총자산 2조원 이상, 상시 종업원 수 300명 이상' … 정보보호최고책임자(CISO)가 다른 정보기술부문 업무를 겸직하지 않는 회사로 한정 … 동 기준을 충족하는 금융회사는 총 59개사".
  - **전자금융업자:** "연간 전자금융거래 금액이 2조원 이상이고, 전자금융업 관련 매출액이 총 매출액의 10%를 초과 … CISO가 … 겸직하지 않는 회사 … 총 16개사".
  - **Process:** applications 9/3–9/14; firms assessed by the 「민간기술자문단」; "금융위원회 보고(10월 7일 잠정)"; comparison table "대상기관 … 75개사(금융 : 59개사, 전금 : 16개사) / 선정기관 15개사 이내 / 선정일 '26.10.7. 예정".
  - **Interim round-1 results:** frontier AI analysed "'수백만에서 수천만 라인'에 달하는 방대한 소스코드 … 수시간 내 분석".
  - **On full removal:** "고도의 AI·보안역량을 갖춘 대상부터 망분리 규제를 전면해제 하는 방안도 관계기관과 긴밀히 논의중".

  — [FSC 보도자료 2026-09-03](https://www.fsc.go.kr/no010101/87646)
- **Round 2 postponed on 10-07:** "금융당국은 오늘 2차 규제완화 대상 금융사를 선정할 계획이었지만, 해킹 사고 수습을 이유로 일정을 잠정 보류". The FSC position: "이번 일정 연기가 망분리 완화 재검토를 의미하는 것은 아니다". — [한국경제 2026-10-07](https://www.hankyung.com/article/2026100792555). I found no FSC release on round-2 selection results up to 10-28.
- **[PRIMARY] Breaches as of 10-14:**
  - **16 firms:** "[은행] 신한, 국민, 부산, 하나, [저축] 예가람, 웰컴, 디비, 오케이 [여신] 현대캐피탈, 산은캐피탈, [온투] PFCT, 모우다, [전금] 브라이트픽스 [가상자산] 스트리미, 프라뱅, [상호] 새마을금고중앙회". About 100k records leaked.
  - **Checklist results:** of 555 firms on a 12-item checklist, 130 reported deficiencies. Gaps named include "대외시스템 대상 인증·인가 누락, 중요 서비스에 대한 강화된 인증절차(MFA) 미도입".
  - **Policy tasks:** full inspection of security systems, threat-intelligence sharing, vulnerability assessments raised to at least twice a year for large firms, support for small firms, and stronger CEO and board accountability.
  - **The secretary-general's line:** "'AI공격은 AI로 방어'하는 보안체계를 확립하기 위한 망분리 규제 완화 등 제도개선도 보다 면밀하고 속도감 있게 추진".

  — [FSC 보도자료 2026-10-14](https://www.fsc.go.kr/no010101/87927)
- **[PRIMARY] Further incidents as of 10-28:** 빗썸 (employee and partner data; whether user data leaked is under check). New reports from 미래에셋생명·자산운용, and additional customer data found at 대신증권. The FSC plans to bring 가상자산 and other sectors not covered by the 전자금융거래법 up to bank-level security. — [FSC 보도참고 2026-10-28](https://www.fsc.go.kr/no010101/88010)
- **Shinhan attack path:** the attacker used credential stuffing on 'M 신한' and then tampered with API requests, a broken-access-control flaw. About 25,000 customers were affected, and Shinhan is a round-1 participant. — [보안뉴스 2026-10-02](https://www.boannews.com/news/articleView.html?idxno=146174)
- **[PRIMARY] SaaS exception:** "금융위원회·금융감독원은 1.20일, '금융회사가 내부 업무망에서 클라우드 기반 응용소프트웨어(SaaS*)를 활용할 경우, 일정한 보안 규율을 준수하는 전제로 망분리 규제 예외를 허용'하는 내용의 ｢전자금융감독규정시행세칙｣ 개정안 사전예고(1.20~2.9)". The basis: "'23.9월부터 현재까지 총 32개 금융회사가 SaaS 관련 총 85건의 혁신금융서비스를 허용받아". — [FSC 2026-01-19](https://www.fsc.go.kr/no010101/86080). It took effect on 2026-04-20 and excludes systems that process 고유식별정보 or 개인신용정보. — [디지털데일리 2026-04-20](https://www.ddaily.co.kr/page/view/2026042011325244673)
- **Full removal:** see the 6/10 statement in [디지털데일리](https://www.ddaily.co.kr/page/view/2026061017053068904) and the 7/15 H2 work plan plus the planned 디지털금융안전법 in [디지털데일리](https://www.ddaily.co.kr/page/view/2026071517443276094). The 10/8 national-audit remark was "보안을 전제로 망분리 규제 해제를 추진 중" ([전자신문](https://www.etnews.com/20261008000199)). The **[PRIMARY]** FSC releases of 9/3 and 7/2 still say "논의중" (under discussion) or "추진해 나갈 예정" (will pursue).

### Inferences
- The 75 are firms that meet the 전자금융거래법 dedicated-CISO thresholds, plus large payment fintechs. The FSC did not publish names.
- Two of the 10 round-1 banks (신한, 하나) were breached. Expect round 2, and especially full removal, to require demonstrable authentication, authorization, MFA and monitoring as substitute controls. This raises the value of auditable access controls for non-human identities, including AI agents.

### Gaps
- The names in the 75, and whether round 2 has been selected since 10-07: no FSC release up to 10-28 states either.

## Claim 4: Rules on responsibility for AI-agent actions in finance "under review"

### Takeaway
**Status: Confirmed as under review, with no draft.**
- **What the FSC said on 06-18:** responsibility and authority must be made clear as AI takes part in decisions; it will set "AI의 행위에 대한 기준" and build AI-specific supervision; then it will run sandbox tests.
- **Next step:** from H2 2026 a TF will examine (1) system improvements, (2) risk management for AI adoption, and (3) a **pilot programme for testing AI agents**.
- **Rules in force now:** 보조수단성 (employees bear final responsibility, HITL for high-risk AI). The 디지털금융안전법 is planned to split hacking liability between financial firms and IT vendors.

### Cited Findings
- **[PRIMARY]** "AI가 의사결정에 관여해 소비자에게 미치는 영향이 커지는 만큼, 책임과 권한을 분명히 해야 하며 … ➋또한, AI의 행위에 대한 기준을 세우겠다고도 언급 … ➌AI의 신뢰성과 책임소재 문제로부터 소비자를 보호하기 위해 AI 감독에 AI를 활용하는 등 AI 전용 감독방안을 갖추겠다 … ➍이런 준비가 끝나는 대로 샌드박스 테스트를 통해 통제된 범위에서 단계적으로 검증". The release also says: "하반기부터 TF 등을 통해 … ➊제도개선 필요사항, ➋AI도입시 리스크 관리방안 및 ➌AI에이전트 등 테스트 추진을 위한 시범사업 운영방안 등 세부과제를 검토". Firms reported using AI agents internally ("고객정보 분석, 리스크 및 데이터분석 등 분야별로 AI에이전트를…"). — [FSC 보도자료 2026-06-18](https://www.fsc.go.kr/no010101/87142)
- Press framing: "금융상품을 판매하는 인공지능(AI) 에이전트를 감독하는 체계를 만들기로". — [한국경제](https://www.hankyung.com/article/2026061850841)
- Legal commentary: the guideline is administrative and does not determine civil liability. Under 보조수단성 the financial institution is likely to bear primary responsibility, and compliance efforts such as pre-testing count when administrative liability is assessed. — [한국경제/태평양](https://www.hankyung.com/article/202607156940i)
- 디지털금융안전법: "해킹과 침해사고 발생 시 금융회사와 외부 IT업체의 책임을 명확히 구분할 방침". — [디지털데일리](https://www.ddaily.co.kr/page/view/2026071517443276094)

### Gaps
- No TF output, agent-liability rule, or agent pilot designation was found as of 10-29.

## Claim 5: KISA "AI 보안 가이드 2.0" agent checklist; MSIT/KISA threat manual and red-teaming guide (July 2026)

### Takeaway
**Status: The July guides are Confirmed (news only; kisa.or.kr unreachable). The "2.0" claim is Corrected/Unverified.**
- **July 2026:** MSIT and KISA published 「AI 보안 위협 대응 매뉴얼」 and 「AI 보안 레드티밍 가이드」 on 2026-07-08.
- **"2.0":** the document is named 「AI 보안 안내서」, and the first edition came out in December 2025. 「AI 보안 안내서 2.0」, with an agent checklist, is a planned output of a KISA research tender posted around 2026-04-03. I found no evidence it has been published.

### Cited Findings
- 2026-07-08: the manual classifies threats as "데이터·모델·에이전트·공급망·고성능 모델 위협 등" and gives scenarios for 8 industries including finance. The red-teaming guide is based on ISO/IEC 42119-7, with checklists, tools and job descriptions. — [디지털데일리](https://www.ddaily.co.kr/page/view/2026070810393444890); [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=144567)
- 2.0 plan: "개발자 대상에는 권한 분리, 샌드박싱, 입력값 검증, 의사결정 로깅 등 기술적 지침 … 이용자에게는 권한 설정과 고위험 행동 승인 절차", with a checklist ("대조표"). — [디지털데일리](https://www.ddaily.co.kr/page/view/2026040309250982850)
- KISA (5/26): "올해는 에이전트 AI 보안 위협을 중심으로 내용을 고도화할 예정". KISA also warned about 'shadow agents'. — [전자신문](https://www.etnews.com/20260526000316)

### Gaps
- Whether 안내서 2.0 had been published by 10-29 could not be checked (kisa.or.kr unreachable even after the network opened).

## Claim 6: AI 기본법 (effective 2026-01-22): high-impact AI, 30M KRW fine cap, ≥1-year grace, record-keeping

### Takeaway
**Status: Confirmed against the statute, with a correction to the fine trigger.**
- **Fine:** Art. 43 sets a **3천만원 cap** on administrative fines. It applies to three things:
  1. failure to give the Art. 31(1) prior notice (generative or high-impact AI);
  2. failure to designate a domestic agent;
  3. failure to comply with a stop or corrective order.

  So it is **not only** about ignoring a corrective order.
- **Record-keeping:** Art. 34(1)5 requires "안전성ㆍ신뢰성 확보를 위한 조치의 내용을 확인할 수 있는 문서의 작성과 보관". Art. 34(1)4 requires "사람의 관리ㆍ감독".
- **High-impact scope:** it includes "채용, 대출 심사 등 개인의 권리ㆍ의무 관계에 중대한 영향을 미치는 판단 또는 평가".
- **Grace period:** at least one year on fines (MSIT policy, not in the statute).

### Cited Findings
- **[PRIMARY]** law.go.kr shows 「인공지능 발전과 신뢰 기반 조성 등에 관한 기본법」 "[시행 2026. 7. 21.] [법률 제21311호, 2026. 1. 20., 일부개정]", the current consolidated version. Supplementary provisions: "이 법은 공포 후 1년이 경과한 날부터 시행한다". — [law.go.kr](https://www.law.go.kr/법령/인공지능발전과신뢰기반조성등에관한기본법)
- **[PRIMARY] Art. 34(1):** "인공지능사업자는 고영향 인공지능 또는 이를 이용한 제품ㆍ서비스를 제공하는 경우 … 다음 각 호의 내용을 포함하는 조치를 대통령령으로 정하는 바에 따라 이행하여야 한다." The items are:
  1. 위험관리방안의 수립ㆍ운영
  2. … 설명 방안의 수립ㆍ시행
  3. 이용자 보호 방안의 수립ㆍ운영
  4. 고영향 인공지능에 대한 사람의 관리ㆍ감독
  5. 안전성ㆍ신뢰성 확보를 위한 조치의 내용을 확인할 수 있는 문서의 작성과 보관
  6. (위원회 심의ㆍ의결 사항)

  Art. 34(2): MSIT "고시하고, 인공지능사업자에게 이를 준수하도록 권고할 수 있다". — [law.go.kr](https://www.law.go.kr/법령/인공지능발전과신뢰기반조성등에관한기본법)
- **[PRIMARY] Art. 43(1):** "다음 각 호의 어느 하나에 해당하는 자에게는 3천만원 이하의 과태료를 부과한다. 1. 제31조제1항을 위반하여 고지를 이행하지 아니한 자 2. 제36조제1항을 위반하여 국내대리인을 지정하지 아니한 자 3. 제40조제3항에 따른 중지명령이나 시정명령을 이행하지 아니한 자". — [law.go.kr](https://www.law.go.kr/법령/인공지능발전과신뢰기반조성등에관한기본법)
- **[PRIMARY]** The high-impact definition (Art. 2) includes "채용, 대출 심사 등 개인의 권리ㆍ의무 관계에 중대한 영향을 미치는 판단 또는 평가". — [law.go.kr](https://www.law.go.kr/법령/인공지능발전과신뢰기반조성등에관한기본법)
- **Grace period:** "과태료 계도기간을 최소 1년 이상 운영할 계획" — [보안뉴스 2025-11-12](https://www.boannews.com/news/articleView.html?idxno=140301). At the 1/20 briefing, MSIT said it would suspend fact-finding as well as fines for at least one year, and read "high-impact" as fully automated systems with no human involvement — [한국경제 2026-01-21](https://www.hankyung.com/article/202601202345i). The startup FAQ describes the record as a safety/trust document of about 10 pages — [데일리시큐](https://www.dailysecu.com/news/articleView.html?idxno=204777)
- **[PRIMARY] Cross-reference:** the FSC guideline requires financial firms running high-impact AI to disclose supervisory-staff information and to comply with "개입 기준 수립·긴급정지 기능 등" under the AI 기본법 sub-regulations. — [FSC guideline PDF](https://www.fsc.go.kr/no010101/87142)

### Inferences
- The fine for missing prior notice under Art. 31(1) applies regardless of high-impact status, so any customer-facing generative or agentic financial service has a direct exposure, subject to the grace period.
- Art. 34(1)4–5 (human oversight, plus documents evidencing safety measures) and the FSC guideline's logging requirements line up. The same audit artifacts can serve both.

### Gaps
- The enforcement decree and the MSIT 고시 detailing Art. 34 measures were not opened. The exact end date of the grace period was not found.

## New and decision-relevant findings (vendors and procurement signals)

### Takeaway
No source names a Korean financial firm buying an AI-agent permission-audit product. The regulatory and market pull is strong, though:
- FSI's item ⑰ (logging and audit) and its human-approval and kill-switch items.
- The FSC guideline's mandatory kill switch and override for high-risk AI, with logged reasons.
- After the October breaches, the FSC's focus on authentication, authorization and MFA gaps.
- Microsoft and Cisco are pitching agent inventory, permission and approval controls into Korean finance.

### Cited Findings
- **Microsoft** 'Agent 365': agent inventory, data touched, shadow AI, and a cross-platform stop function in development. Also Security Copilot and MDASH. — [디지털데일리 2026-06-25](https://www.ddaily.co.kr/page/view/2026062511030130717)
- **Cisco** (10/13): Secure Access to control over-privileged agents, plus Duo and Identity Intelligence for MFA on AI agents and authorizing or approving their actions. Also per-MCP-server permission control. — [보안뉴스](https://www.boannews.com/news/articleView.html?idxno=146356)
- The 5대 금융지주 committed to group red teams and AI security monitoring and pen-testing tools. — [전자신문](https://www.etnews.com/20260610000083)
- Agents and MCP servers are described as new authentication subjects, a gap in zero-trust rollouts at banks. — [디지털데일리](https://www.ddaily.co.kr/page/view/2026062621155026955)
- Conference calls (8/20) for continuous tracking of agent permissions, data and actions, for KYA ("Know Your Agent"), and for closing the "accountability gap". — [디지털데일리](https://www.ddaily.co.kr/page/view/2026082016084427878)
- **[PRIMARY]** FSI's capacity: a 금융AI보안연구소 is being created, there are black-box AI checks for non-participants, and small-firm support is planned (an AI-based joint security monitoring system and tailored guides). — [FSC 2026-05-26](https://www.fsc.go.kr/no010101/86972); [FSC 2026-10-14](https://www.fsc.go.kr/no010101/87927)

### Gaps
- No procurement notice or named bank deployment of an agent-permission or agent-audit product was found. The domestic vendor landscape was not researched.

## Sources actually opened
**Primary:**
- FSI press release page and its PDF (fsec.or.kr bbsNo=12122).
- FSC press releases no010101/86080, 86972, 87076, 87142 (including the full guideline PDF, 별첨2-2), 87240, 87646, 87927, 88010.
- law.go.kr AI 기본법 consolidated text.

**News (full text):**
- dailysecu 208760, 203968, 206939, 204777, 207551, 207213, 202311
- ddaily 2026100710131453029, 2026061017053068904, 2026042011325244673, 2026062511030130717, 2026070810393444890, 2026040309250982850, 2026062621155026955, 2026082016084427878, 2026071517443276094, 2025090815422394673
- etnews 20261007000233, 20260618000036, 20260623000315, 20260522000097, 20260610000083, 20260907000301, 20261008000199, 20260526000316, 20251112000177, 20260419000092
- boannews 146243, 146174, 146356, 144567, 144622, 146113, 140301
- hankyung 2026061850841, 2026061090151, 202607156940i, 202601202345i, 2026100792555, 2026101422011, 2026101416887

**Not reachable:** fss.or.kr, kisa.or.kr.
