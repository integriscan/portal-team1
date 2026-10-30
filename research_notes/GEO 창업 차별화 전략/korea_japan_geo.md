# Korea (and briefly Japan) GEO / AEO market: brand visibility in AI answers (as of 2026-10-30)

Notes on sourcing: "(opened)" means I loaded the page and read the text, through Playwright or WebFetch. "(snippet-only)" means the fact comes only from a search-result snippet or summary and the page itself was not verified. Most Korean pricing and market claims come from vendors and are self-reported.

---

## 1. Korean GEO/AEO players: startups, SaaS, agencies (with 에이올로 in depth)

### Takeaway
By October 2026 the Korean GEO market is crowded and splitting into three groups. (a) At least 17 Korean measurement/SaaS tools, priced from about ₩13k to ₩1.5M per month. (b) Content and PR agencies such as 엘리펀트컴퍼니 and 리드젠랩 selling consulting and retainers. (c) Every major ad-agency group now has a branded GEO offering. 에이올로 sits at the cheap, self-serve, "agent that writes and publishes" end, priced in USD. It is one of the few founder-engineer teams, but no funding has been disclosed. Its closest Korean venture-backed analog is 체인시프트 (Antler, TIPS, ₩350M cumulative revenue by Jan 2026).

### Cited Findings

**에이올로 (Aeolo): everything found publicly**
- Dealsite article dated 2026-10-11 (opened; full text was readable despite the paywall flag). 강지혁 (26) left Toss after about 6 months as a developer, having turned down an offer to work in San Francisco. Earlier he worked at 셀렉트스타. He studied Computer Science at Seoul National University and was still a 4th-year student at the time. At Toss he worked on privacy and then ad marketing. Aeolo tracks "which information each AI model retrieves and uses." Its in-house tech "greatly reduced AI response collection cost," and it analyzes a sample of about 300k–400k answers. Pricing is subscription, $99–699/month (₩130k–940k). It has about 20 customers, and revenue is growing about 3x per month. Customers offered to pay before the product was finished. He visited San Francisco three times. He first spent 3 months building a product that turned out similar to something Cursor shipped, then pivoted. Aeolo was a finalist in the 정주영 창업경진대회 Beginner track, with the final pitch on 10/28 at COEX (total prize pool ₩370M). He claims "almost no GEO companies have a technical founder." — [Dealsite](https://dealsite.co.kr/articles/170371) (opened)
- Aeolo received a special prize in the Beginner track of the 2026 정주영 창업경진대회. The prize money was donated by the previous year's winner, 펄스애드 CEO 윤거성. — [더나은미래](https://futurechosun.com/archives/164859) and [벤처스퀘어](https://www.venturesquare.net/1123950) (snippet-only; the page did not render)
- Website positioning: "Bring customers from AI answers." The product finds questions where the brand is missing, writes and publishes sourced content, and measures visibility, traffic and revenue through GA4 and Search Console. Engines tracked: ChatGPT, Perplexity, Gemini, Google AI Mode/AI Overviews, **Amazon Rufus, Naver, DeepSeek**. Other features: auto-publish per channel, a public GitHub repo of its question and evidence logic, and a CLI/MCP server for agent stacks (`curl -fsSL https://skills.aeolo.io | sh`). Customer case: a **K-beauty brand** went from "not mentioned" to #1 in Google AI Overviews for "Best sunstick for sports" in 3 months, with 30-day revenue +10% measured in GA4. — [tryaeolo.com](https://www.tryaeolo.com/) (opened)
- Pricing page:
  - Free plan.
  - Starter $99/mo: 1 market, 30 weekly questions, 5 engines, 120 credits, about 8 articles.
  - Pro $299/mo: 2 markets, 100 questions, 500 credits, about 33 articles.
  - Max $699/mo: 5 markets, 300 questions, 6 engines, 1,400 credits, about 93 articles, 3 publishing channels.
  - Custom: includes **"medical and beauty ad-regulation review (Korea, Japan, US)"**, onboarding, Google registration, and a dedicated manager.
  - Annual billing saves 17%. Credit costs: one article = 15 credits; a re-check costs 2 credits per question per engine.
  - Business registration: sole proprietorship (개인사업자) no. 728-14-02796, **opened 2026-04-01**, address 관악구 봉천동 큐타워.
  - [Aeolo pricing](https://www.tryaeolo.com/pricing) (opened)
- Aeolo's own blog (author "Joey Kang, 에이올로 대표," 2026-09-14) ranks itself #1 against Profound, Peec AI, Otterly, Scrunch and Ahrefs/Semrush on a 5-step "citation chain" (detect → decide → draft → publish → attribute). It publishes to a hosted blog, **Shopify, WordPress, Cafe24** or a site feed. The second domain is aeolo.io. — [Aeolo blog](https://www.aeolo.io/ko/blog/%EC%9D%B8%EC%9A%A9-%EC%82%AC%EC%8A%AC-5%EB%8B%A8%EA%B3%84%EB%A1%9C-%EC%B1%84%EC%A0%90%ED%95%9C-geo-%EB%8F%84%EA%B5%AC-6%EC%A2%85-%EB%B9%84%EA%B5%90) (opened)
- Not found: any disclosed funding round, investor, team size or named customer (apart from the anonymous K-beauty case).

**체인시프트 (ChainShift): the closest venture-backed SaaS analog**
- Came out of Antler Korea's generator program, batch 6. Raised pre-seed, then was selected for **TIPS** 4 months after incorporation. **Cumulative revenue ₩350M** from paid PoCs that converted into contracts with large electronics and beauty companies. Founders: CEO 한용희 (10 years in Johnson & Johnson brand marketing, led multiple brands across 9 Asian countries), COO 주민건 (ex-Cafe24 platform strategy), CTO 김진용 (ex-Naver Cloud). 2026 plans: open the product to SMBs and agencies, raise a seed round, expand to Australia and APAC. Data comes from "real user environments," not APIs. — [Tech42 interview, 2026-01-07](https://www.tech42.co.kr/%EC%9D%B8%ED%84%B0%EB%B7%B0-%ED%95%9C%EC%9A%A9%ED%9D%AC-%EC%B2%B4%EC%9D%B8%EC%8B%9C%ED%94%84%ED%8A%B8-%EB%8C%80%ED%91%9C-%EC%A0%9C%EB%A1%9C%ED%81%B4%EB%A6%AD-%EC%8B%9C%EB%8C%80-ai/) (opened)
- The product tracks ChatGPT, Gemini, Google AI Mode, **Naver AI Briefing and Naver AI Tab**. Example plan: 25 questions × 6 engines × daily = 4,500 asks per month. It says it uses "not the official API, but the answers customers actually read." — [trychainshift.ai](https://www.trychainshift.ai/en/) (opened)
- Starter costs ₩143,000/mo, with ChatGPT, Google AIO and Naver AI Briefing shown on the Starter card. Pro adds Google AI Mode, Gemini and Naver AI Tab. Collection is daily from the real UI. — [브레인드 comparison on segama.co.kr](https://segama.co.kr/blog/27220/) (opened). Another comparison says Chainshift starts at $89/mo (snippet-only, conflicting).
- Chainshift's blog says it spent more than ₩10M subscribing to domestic and foreign GEO tools for research. It argues that most tools allow only 20–100 prompts, so one-off "GEO success" screenshots are statistically meaningless. — [Chainshift blog](https://www.chainshift.co/blog/geo-success) (opened)

**Other Korean SaaS/measurement tools (pricing as published)**
- A 브레인드-authored comparison updated 2026-10-27 covers 17 Korean and 8 foreign tools. It lists the Korean tools as: 도슨티 GEO, 라임라이트AI, 브레인드, 블루닷 인텔리전스, 애니모프, 온더AI, 체인시프트, 팀하이, 플루랭크, AIRank, BaRam, FrostAI, GEOcare, HaloX, NNT Insights, OPTIGEO (넥스트티), and RanketAI. The cheapest paid tiers run from **₩12,900/mo (RanketAI) to ₩1.5M/mo (온더AI)**. Only 8 of the 25 tools state that they measure Naver AI Briefing. Only 5 include it in their lowest paid tier: 브레인드, 체인시프트, 플루랭크, NNT Insights and Peec AI (Peec added Naver on 2026-09-11). 11 tools collect from the real UI and 3 use APIs. — [segama.co.kr](https://segama.co.kr/blog/27220/) (opened; the author is a competitor, 브레인드)
- Selected prices from that table:
  - 브레인드 Starter ₩180k/mo (Naver AIB, Google AIO, ChatGPT; Business plan ₩700k for 2 brands).
  - 블루닷 인텔리전스 Starter ₩490k (Naver AIB from Pro, ₩990k).
  - 애니모프 from ₩1.1M (browser automation; 10 engines including Naver AI Tab).
  - 플루랭크 ₩590k (₩490k if paid annually; ghostwriting packages from ₩1.49M/mo).
  - NNT Insights ₩500k.
  - 팀하이 ₩99k; AIRank ₩99k (has agency white-label); BaRam ₩199k; FrostAI ₩79k; GEOcare about ₩50k/mo equivalent (no Naver); HaloX ₩59k.
  - OPTIGEO ₩800k plus ₩3,000 per draft.
  - [segama.co.kr](https://segama.co.kr/blog/27220/) (opened)
- 도슨티's comparison, checked 2026-09-23:
  - Bluedot Starter ₩490k / Pro ₩990k.
  - Villion: free audit; Standard by inquiry (2,000 prompts, SDK); also covers Naver AI summary.
  - Onthe AI: Pro ₩500k / Agent ₩1.5M.
  - OPTIGEO/Next-T: self-serve ₩0.8–3M/mo; hybrid ₩3–5M/mo; **dedicated GEO agency service ₩5–20M/mo**; one-off GEO consulting ₩6–20M; SEO+GEO consulting ₩10–30M.
  - Docenty: ₩150k/mo for 100 questions.
  - [Docenty GEO](https://geo.docenty.ai/en/pub/geo/geo-solution/geo-solrusyeon-gagyeoggwa-gineung-bigyopyo-hangugeo-ai-geomsaeg-coejeoghwa-doguwa-daehaeng-seobiseu) (opened; vendor-authored)
- 서치오에스에이아이 (Search OS AI): founded June 2025, **seed from FuturePlay in March 2026** (amount undisclosed). Sells automated GEO infrastructure: crawl and rendering fixes for CSR sites ("up to 300x faster" AI crawler collection), and auto-generated or edited pages. Targets large ecommerce, media and travel sites. — [Platum](https://platum.kr/archives/283665) (opened)
- 지오키 (GEOKey): GEO SaaS with an AI visibility simulation, a site GEO audit, an LLMs.txt generator, and JSON-LD content creation, plus content for external "authority channels." — [GTT Korea, 2026-05-23](https://www.gttkorea.com/news/articleView.html?idxno=25784) (opened)
- 비즈스프링: GEO consulting packages starting at ₩5M for a 4–6 week project. — [bizspring.co.kr](https://bizspring.co.kr/geo_consulting) (snippet-only)

**Agencies and consultancies**
- 엘리펀트컴퍼니: "SEO·GEO content marketing" firm, CEO 김예지. Hosted the "GEO Roadmap 2026" seminar on 7/2 (100 seats, sold out). Speakers came from 어센트AI (리스닝마인드), 함샤우트글로벌, 대홍기획, 블루닷에이아이 and 헤일로X. At the event it released a "대한민국 GEO 대응 현황 리포트" analyzing 548 companies. — [VentureSquare](https://www.venturesquare.net/1095130/) (opened). Average score was 46.4, and 40.4% of large companies were in the risk/caution band; the data comes from self-diagnoses with its free GEO calculator, so it is not representative. — [Daum/ditoday](https://v.daum.net/v/BgERwHu5hf) (snippet-only)
- 엘리펀트컴퍼니 case studies, from a 10/21 seminar: 아정당 (9,000+ SEO content pieces), SK브로드밴드 (B world site GEO project), and 리틀리 (**+358% AI-channel traffic in 8 months**; AI visitors' sign-up click rate about 2x average). — [Byline Network, 2026-10-14](https://byline.network/2026/10/14_281263/); [ditoday](https://ditoday.com/?p=154832) (both opened)
- 엘리펀트컴퍼니 size: founded May 2021, seed in October 2021, **5 employees (Sept 2026)**, categorized as a performance-marketing agency. — [THE VC](https://thevc.kr/elephant) (opened)
- 리드젠랩 (Lead Gen Lab): calls itself a "GEO 실험실" and an AX firm for large companies, global brands and large hospitals. Runs its own AI citation platform, "SOHA." Offers four engagement models: full-service, internal training, technical SEO spec, and external-source/PR management. Named customers: **삼성생명, GS리테일, 두산 디지털이노베이션, GC녹십자 (제놀; medical ad review), 한컴, 로보락**. — [lead-gen.team](https://lead-gen.team) (opened)
- 원포인트 (1point.kr): **not a dedicated GEO company**. It is a platform that matches companies with vetted freelance marketers and publishes GEO and Naver AI Briefing content guides. — [1point.kr](https://1point.kr); [1point blog](https://1point.kr/blog/insights/naver-ai-briefing-content-design/) (opened)
- 디스럽트 (CEO 김진희): presented a "GEO for D2C sites" strategy at Dealsite's K-Beauty roundtable on 2026-05-28. Claims GEO work on **COSRX** products improved visibility, citation rate, conversion and sales compared with non-optimized products. — [Dealsite](https://dealsite.co.kr/articles/162685) (opened)
- Others seen only in listings: 에이넥트 (GEO diagnosis and consulting), GrowthAI (SMB GEO packages), ZEST COMPANY (publishes "GEO 대행사 TOP5"), 이비웹. — [ainnect.co.kr](https://ainnect.co.kr/), [zestcompany](https://zestcompany.co.kr/blog/geo-agency-top5-2026/), [ebiweb](https://www.ebiweb.co.kr/service/geo) (snippet-only)

### Inferences
- Measurement is commoditizing. 17+ Korean dashboards exist, and many cost under ₩200k/month. A "tracking-only" product would be a me-too. The differentiators vendors are now competing on are: (1) Naver AI Briefing/AI Tab coverage collected from the real UI, (2) statistical rigor (sample size and repetition; this is the pitch of 체인시프트 and 에이올로), (3) execution, meaning content drafting and publishing, and (4) attribution to GA4 revenue.
- 에이올로's moat claims are low-cost answer collection at scale and an engineering-led agent loop. Its weak points: no disclosed funding, a sole-proprietor entity, and USD self-serve pricing that targets small and D2C brands (K-beauty) rather than enterprises.
- Agencies (리드젠랩, 엘리펀트, HSAD, Cheil) take enterprise and regulated verticals such as insurance, pharma and finance through people-heavy retainers. A tiny 5-person firm like 엘리펀트컴퍼니 can win mindshare through seminars and reports. Content-led go-to-market is cheap in this market.

### Gaps
- No public funding, investors, headcount, or named customers for 에이올로. The only legal entity found is the 2026-04-01 sole-proprietor registration. The outcome of the 10/28 정주영 contest final was not verified beyond a snippet about a special prize.
- 체인시프트's 2026 seed round, if it closed, was not found.
- No reliable revenue figures for any Korean GEO SaaS other than 체인시프트's ₩350M cumulative (as of January 2026) and 에이올로's growth-rate claim.

---

## 2. Big Korean ad and marketing groups entering GEO

### Takeaway
Between spring and autumn 2026 every major agency group launched a branded GEO product or practice: 제일기획, HSAD, 대홍기획, 플레이디. Most are diagnosis, strategy and content offerings bundled with their creative and media work, not standalone SaaS. Several were built with startups, for example 대홍기획 with 어크로스. I found no GEO product announcement from 이노션, 나스미디어, 메조미디어, 에코마케팅, 와이즈버즈 or 오픈애즈. 인크로스 and 나스미디어 only publish trend content.

### Cited Findings
- **제일기획**: unveiled the "제일 GEO 오케스트레이터" at "제일 테크 쇼케이스 2026" (5/27–29). It is billed as an all-in-one GEO service covering diagnosis, strategy, execution and analysis. It designs the channel and content mix by consumer question type, covering campaign assets, social and PR. It sits alongside the "커넥트AI" platform (8 AI agents). — [머니투데이, 2026-05-27](https://www.mt.co.kr/tech/2026/05/27/2026052714513990301) (opened). It analyzes brand exposure in ChatGPT, Gemini and Perplexity. — [Daum](https://v.daum.net/v/20260527170908703) (snippet-only)
- **HSAD (LG group)**: expanding GEO starting with the finance and public sectors. Won a GEO consulting pitch at a financial company against global consulting firms. Has an MOU with the Korea Tourism Organization for the AI-search competitiveness of tourism content. Uses its own GEO scoring dashboard and AI content tool. Receives **at least one GEO inquiry per week** this year from finance, home appliances, consumer goods and B2B. Cites MarketsandMarkets: global GEO market $390M (2025) → $4.25B (2032), 41% CAGR, APAC 43%. — [헤럴드경제](https://biz.heraldcorp.com/article/10872173) and [English version](https://biz.heraldcorp.com/article/10872177) (opened)
- **대홍기획 (Lotte)**: launched "GEO BOOST" on 2026-05-11, co-developed with AI startup **어크로스**. It monitors major LLMs in real time and manages AI-search share of voice through an "AI-based hub channel and automation." Claims the pilot raised brand SOV by **21 percentage points in 4 weeks**. — [Digital iNSIGHT](https://ditoday.com/?p=144847) (opened)
- **플레이디 (KT group performance agency)**: launched "스파이더 (SpAIder)," a GEO strategy consulting solution with four steps: fact-based diagnosis with a GEO grade, AI-crawler technical setup, authority content, and monitoring. It provides role-specific action guides and scripts. Run by an "AI X팀." The launch date is reported as the 9th of a month; the page is roughly April 2026 (exact month not printed in the text I extracted). — [매드타임스](https://www.madtimes.co.kr/news/articleView.html?idxno=27332) (opened)
- **인크로스**: named GEO as keyword #4 of its "Digital Marketing Trend 2026" (C-A-P-X keywords). This is content, not a product. — [오픈애즈](https://www.openads.co.kr/content/contentDetail?contsId=18114) (opened)
- **나스미디어**: covers Naver AI Briefing in its monthly "NAS PICK" and NPR reports. No GEO product found. — [나스미디어 blog](https://blog.nasmedia.co.kr/entry/2604naspick) (opened)
- TBWA코리아 runs a GEO guide microsite. — [seo.tbwakorea.com](https://seo.tbwakorea.com/website-geo/guide/) (snippet-only)
- Industry context: ad agencies are under pressure from AI ad automation and are diversifying into film, ticketing and IP. — [한국경제, 2026-10-27](https://www.hankyung.com/article/2026102787241) (snippet-only)

### Inferences
- Agency groups will capture large-brand budgets through existing retainers. A startup's realistic paths are either to supply agencies with data and tooling, as 어크로스 does for 대홍기획 and white-label tools like AIRank and 플루랭크 do, or to serve the long tail of SMB, D2C and cross-border sellers that agencies won't touch.
- Agencies are making a "content + PR + creative" pitch. That suggests the Korean buyer sees GEO as a content and earned-media problem, not a software problem.

### Gaps
- No GEO announcements found for 이노션 (HQ), 메조미디어, 에코마케팅, 와이즈버즈 or 오픈애즈. This could reflect search coverage rather than true absence.
- No published pricing for any agency-group GEO product.

---

## 3. Korean AI answer surfaces and how "GEO for Naver" differs

### Takeaway
Korea is the one major market where a domestic portal's own AI answer layer is the biggest "AI search" surface. Naver AI Briefing launched in March 2025 and covered about 20% of searches by December 2025, about 27% by July 2026, with a 40% target. It draws mostly from Naver's own UGC: **about 70% of cited content is blogs, cafés and 지식iN**. Naver pays creators based on AI-Briefing citation counts, and since July 2026 it sells ads inside the Briefing. ChatGPT is huge in Korea: 2nd largest paying market, about 20M app users, and ChatGPT for Kakao has 13M sign-ups. Gemini caught up fast in 2026. So Korean GEO has to cover two quite different source ecosystems: the Naver walled garden (UGC and Smart Place) and the open web plus Google (ChatGPT, Gemini, AIO).

### Cited Findings

**Naver AI Briefing / AI Tab / Shopping agent**
- AI Briefing was announced 2025-03-24 for launch on 3/27, for all users with no opt-in. Formats include official/multi-source, 숏텐츠, Place and Shopping. It shows source links to creators' original documents, with stated aims of "4천만 users, 330만 SMEs." — [Naver press release](https://navercorp.com/media/pressReleasesDetail?seq=32374) (opened)
- By December 2025 coverage reached 20% of all search results, and 30M+ users per month have used it at least once. The 2026 target is about 40%. Some 180,000 restaurants using AI Briefing saw more reservations; small venues with fewer than 5 reservations a month saw +105%. Naver's search share was 65.12% in February and 63.83% in March 2026, against Google's 28.11% and 28.67% (Internet Trend). AI Tab was positioned as a separate conversational, personalized surface that can complete reservations. Naver said blog and café review data is "Naver's unique asset." Plan: an integrated vertical agent ecosystem (shopping, local, finance, entertainment, health) by 2027. — [더팩트, 2026-04-16](https://news.tf.co.kr/read/economy/2313941.htm) (opened)
- AI Briefing reached the year-end-2025 20% target early. After launch, related-question clicks rose 6x or more, queries of 15+ characters 2x, question-form queries 3x, and request-form queries 5x. There were about 22 updates by early 2026. Naver's search share was 64.39% from 1/1 to 3/7/2026, an 8-year high. — [나스미디어 NAS PICK, 2026-04-15](https://blog.nasmedia.co.kr/entry/2604naspick) (opened)
- About 27% of Naver searches showed AI Briefing as of July 2026. — [원포인트 blog, 2026-07-22](https://1point.kr/blog/insights/naver-ai-briefing-content-design/) (opened; secondary source)
- AI Tab: beta for Naver Plus members on 2026-04-28, full launch on 2026-06-26. — [RanketAI explainer](https://www.ranketai.com/en/blog/explainer-ranketai-guide-09-naver-ai-search-vs-google-ai-overview-2026-05-20) (snippet-only). On 5/28 Naver said AI Tab would open to everyone "next month." — [뉴시스](https://www.newsis.com/view/NISX20260528_0003647569) (opened)
- **Naver Mate / UGC dependence** (announced 2026-05-28):
  - UGC made up **70% of content cited in AI Briefing (as of January 2026)**.
  - About 20M creators produce 630M+ pieces of content a year.
  - About 3,000 creators from blog, café, 지식iN and premium content are selected **using AI Briefing citation counts**. Payments are ₩300k/month base, ₩3M/month for the top 100, and ₩10M/month for the top 10 per field, about ₩20B a year in total.
  - **Creators can see their AI-Briefing citation statistics in their profiles.**
  - ₩1T will go into the content ecosystem over 5 years. Clip (short-form video) data is now being used in AI Briefing.
  - [뉴시스](https://www.newsis.com/view/NISX20260528_0003647569) (opened)
- Naver's published citation criteria (from its AI Briefing help): expertise and first-hand experience, topical consistency, authenticity and transparency (disclosing sponsorship), readability, and activity and freshness. — [원포인트 blog](https://1point.kr/blog/insights/naver-ai-briefing-content-design/) (opened; summarizes Naver help pages)
- **Ads in AI Briefing**: Naver began contextual text ads in AI Briefing on 7/21/2026 through **ADVoost Max** (advertiser center opened 7/15). Ads are on by default for extended-match advertisers. **Finance, insurance, health supplements and medical are restricted from running them.** — [아이보스 news clipping, 7/10](https://www.i-boss.co.kr/ab-2877-17600&tag=AI%EB%B8%8C%EB%A6%AC%ED%95%91) (opened)
- **Naver Shopping AI agent** beta 1.0 in the 네이버플러스 스토어 app: summarizes and compares products, analyzes reviews, and recommends using personalized history. It started with digital, living and household categories, with **beauty and food planned for H1 2026**. — [Naver press release](https://navercorp.com/media/pressReleasesDetail?seq=34353) (opened; date 2026-02-26 per snippet). Q1 AI-recommendation GMV was +50% quarter over quarter. — (snippet-only, via search summary of i-boss/nasmedia)
- **Independent measurement of Naver AI Briefing sources**: a 50-query panel × 7 runs (343 valid observations, 2026-07-16) found AI Briefing appeared in 100% of observations, with 91 unique cited domains. **blog.naver.com appeared in 44.0%** of observations, then i-boss 22.7%, ranketai 12.2%, developers.google.com 11.1%, openads 10.2%. Only 3 of 9 panel brands were mentioned. The same publisher's Korean Google AIO test (50 queries × 14 runs) found AIO triggered in 96% of runs, brand mention 41.5%, and citation 9.6%. In a Korean **dermatology/plastic-surgery clinic** grid (9 clinics × 6 AI surfaces including Naver AIB), the median mention rate was **0–1.4%**, and 5 of 9 clinics were never named. — [CiteAngle dataset v1.1](https://citeangle.com/datasets/ai-visibility-aggregates) (opened; small vendor sample, and its panel queries look marketing-topic heavy)
- Chainshift's data from 2026-01-01 to 09-17 (non-branded questions): news media were only **3.3%** of Naver AI Briefing citations. — [Chainshift blog via search summary](https://www.chainshift.co/blog/geo-success) (snippet-only for this number)
- A ditoday headline says "YouTube cited 42% in Google AI Overviews vs 0 cases in Naver." — [Digital iNSIGHT](https://ditoday.com/?p=154832) (headline seen in a sidebar only; snippet-level)

**Google in Korea**
- AI Overviews launched in Korean in Korea on **2024-12-05**. — [Google Korea blog](https://blog.google/intl/ko-kr/products/explore-get-answers/aio_kr/) (opened)
- AI Mode became available in Korea without Labs (Gemini 2.5, query fan-out), rolling out from the announcement on **2025-09-08**. — [Google Korea blog](https://blog.google/intl/ko-kr/products/explore-get-answers/ai-mode-in-korean) (opened; date from the [아주경제](https://www.ajunews.com/view/20250908155104007) snippet)

**ChatGPT, Gemini, Kakao, Perplexity/SKT, Wrtn**
- Korea is the **#2 country for ChatGPT paid subscribers** after the US (Microsoft report, January 2026). Gen-AI usage among people aged 15–64 is 40.6% (June 2026), 12th in the world, rising about 15 points in a year. — [파이낸셜뉴스/뉴시스, 2026-09-28](https://www.fnnews.com/news/202609281339387227) (opened). Sensor Tower puts Korea at 5.4% of ChatGPT revenue, 2nd behind the US at 35.4%. — (snippet-only, via search summary)
- ChatGPT has 20M+ Korean app users (WiseApp). — [리드젠랩 blog](https://blog.lead-gen.team/korea-ai-search-statistics-2026) (opened; secondary)
- **Opensurvey AI 검색 트렌드 리포트 2026 H2** (July 2026, n=1,000, ages 10–59):
  - Used as a search service in the last 3 months: Gemini **52.2%** (up from 28.9% in December 2025), ChatGPT 58.1% (up from 54.5%).
  - Main search service #1: Naver, Google, YouTube, then Gemini 9.1% and ChatGPT 8.7%.
  - Naver is used first for news (60.5%) and everyday-life information (67.1%).
  - Satisfaction: Gemini 77.3%, ChatGPT 70.6%.
  - [뉴시스, 2026-07-13](https://www.newsis.com/view/NISX20260713_0003707523) (opened)
  - ChatGPT's 3-month usage was 39.6% in March 2025 and 54.5% in December 2025. Opensurvey said the use of traditional channels (Naver, KakaoTalk search) declined. — [뉴시스](https://mobile.newsis.com/view/NISX20260130_0003497399) (snippet-only)
- **ChatGPT for Kakao** (inside KakaoTalk): 2M sign-ups in November 2025, the first month; 8M by February 2026; 11M by May; **13M cumulative by end of June 2026**. Kanana in KakaoTalk (on-device) proactively suggests places and products, with revisit rate rising from 70% to 80%. Kakao announced an "intent economy" push, starting with a Coupang Eats ordering partnership. — [네이트/아시아경제, 2026-08-21](https://m.news.nate.com/view/20260821n24540) (opened)
- The standalone Kanana app shut down 2026-10-15. Kakao is focusing on Kanana in KakaoTalk, ChatGPT for Kakao and PlayMCP. — [전자신문, 2026-09-15](https://www.etnews.com/20260915000317) (opened). Kanana app MAU fell from 69.6k in May to 17k in July. — [시장경제](https://www.meconomynews.com/news/articleView.html?idxno=202342) (snippet-only)
- **ChatGPT ads in Korea** started on 6/19/2026 for adult Free and Go users, shown as "Sponsored" cards under answers. — [뉴시스](https://mobile.newsis.com/view/NISX20260619_0003676377) (snippet-only)
- Perplexity: an SKT MOU in 2024, A.dot integration, a free Perplexity Pro promotion for SKT customers, and plans to co-develop Korean AI search. Korean MAU reportedly 1.51M (WiseApp; article date unclear). — [SKT newsroom](https://news.sktelecom.com/208055), [Dealsite](https://dealsite.co.kr/articles/127890), [헤럴드](https://heraldk.com/?p=2563551) (all snippet-only; the heraldk page I opened showed unrelated content)
- Wrtn (뤼튼): I found no current 2026 MAU or source-selection information.

### Inferences
- **How "GEO for Naver" differs**:
  - (1) The citation pool is mostly Naver-hosted UGC (blog, café, 지식iN, Clip) plus Smart Place and Shopping data, not the open web. A brand's own website matters less, and seeded blog reviews, café threads, 지식iN answers and Place listings matter more. This blurs into the existing Korean "블로그 체험단/바이럴" industry and its disclosure risks.
  - (2) Naver now exposes citation counts to creators and pays for them. That creates a measurable, gameable KPI and probably an influencer-style "AI-citation creator" market.
  - (3) Measurement must scrape the logged-in or real UI. There is no API, and AI Tab is personalized.
  - (4) Since July 2026 paid ads compete in the same answer surface, but medical, finance, insurance and supplements are excluded. That pushes those verticals toward organic GEO.
  - (5) Google AIO, AI Mode, ChatGPT and Gemini cite the open web and YouTube heavily. A Korean brand needs two playbooks.
- Kakao is a distribution channel for ChatGPT, not its own answer engine with distinct sourcing. Optimizing for ChatGPT effectively covers ChatGPT for Kakao.
- Clinics and local businesses are almost invisible in LLM answers (CiteAngle grid) while Naver Place drives reservations. Local SMB GEO in Korea is mostly a Naver Place and blog-review game.

### Gaps
- Naver has not published official source-type shares beyond "70% UGC," and did not disclose Smart Place or 지식iN weights.
- Wrtn usage and sourcing in 2026; Perplexity Korea MAU for 2026 (the only figure found has an unclear date).
- No reliable estimate of Google AIO and AI Mode query coverage in Korea.

---

## 4. Korean demand: who buys, budgets, early verticals, cross-border

### Takeaway
Demand is real but early. Agencies report weekly inbound interest, and marketers say they are changing strategy. But most companies have no dedicated GEO budget (about 56% in one small survey) and don't know how to measure GEO. Early buyers are large brands in finance and insurance, consumer electronics and appliances, telecom, pharma, tourism/public, and B2B SaaS, mostly through agencies. Price-sensitive D2C and **K-beauty** brands, including cross-border sellers, are buying self-serve tools. Korean pricing runs from about ₩100k to ₩1M/month for SaaS, ₩3–20M/month for agency retainers, and ₩5–30M for one-off consulting.

### Cited Findings
- HSAD gets at least one GEO inquiry a week from finance, home appliances, consumer goods and B2B. — [헤럴드경제](https://biz.heraldcorp.com/article/10872173) (opened)
- Named Korean buyers:
  - 리드젠랩: 삼성생명, GS리테일, 두산 DI, GC녹십자, 한컴, 로보락. — [lead-gen.team](https://lead-gen.team) (opened)
  - 엘리펀트컴퍼니: 아정당, SK브로드밴드, 리틀리. — [Byline](https://byline.network/2026/10/14_281263/) (opened)
  - HSAD: an unnamed financial company and the Korea Tourism Organization. — [헤럴드경제](https://biz.heraldcorp.com/article/10872173) (opened)
  - 체인시프트: unnamed large electronics and beauty companies. — [Tech42](https://www.tech42.co.kr/%EC%9D%B8%ED%84%B0%EB%B7%B0-%ED%95%9C%EC%9A%A9%ED%9D%AC-%EC%B2%B4%EC%9D%B8%EC%8B%9C%ED%94%84%ED%8A%B8-%EB%8C%80%ED%91%9C-%EC%A0%9C%EB%A1%9C%ED%81%B4%EB%A6%AD-%EC%8B%9C%EB%8C%80-ai/) (opened)
  - 디스럽트: COSRX. — [Dealsite](https://dealsite.co.kr/articles/162685) (opened)
  - 에이올로: an unnamed K-beauty brand. — [tryaeolo.com](https://www.tryaeolo.com/) (opened)
- **Brafton white paper** (n=142 marketers, 2026-04-07 to 06-22, reported by Korean trade press; Brafton is a US content firm, so respondents may not be Korea-only):
  - 64% changed SEO strategy for AI search (19.7% substantially, 44.4% partly).
  - Only 9% "know GEO very well."
  - **Budget: 19% have a dedicated GEO budget, 25.4% are considering one, 55.6% have none.**
  - Measurement: 41.5% use third-party tools, 31.7% don't know how to measure, 23.2% don't measure.
  - Only 7% tie GEO to purchases or leads.
  - Effect on organic traffic: 33.1% "don't know," 28.2% "slight decrease."
  - Surfaces that matter: ChatGPT 85.9%, Google AIO/AI Mode 68.3%, Gemini 53.5%, Claude 46.5%, Perplexity 24.6%.
  - [매드타임스](https://www.madtimes.co.kr/news/articleView.html?idxno=29064) (opened)
- **플러스제로 survey** (n=200 Korean marketers at an AI conference, 2026-09-03):
  - Top GEO difficulty: "don't know how to respond" 32%, then "hard to grasp customer needs" 28%, then re-explaining the brand to AI 20% and content production time 20%.
  - Biggest factor in AI brand recommendation: **real user reviews and reputation 46.7%**, SEO 30%, ad spend 8%, don't know 15.3%.
  - [스타트업엔](https://www.startupn.kr/news/articleView.html?idxno=59687) (opened)
- Budget timing: Korean companies are weighing AI-search response while setting 2027 budgets. — [Digital iNSIGHT](https://ditoday.com/?p=154832) (opened)
- Medical, finance, insurance and supplements are barred from Naver's AI Briefing ads, which leaves organic GEO as their AI-answer route. — [아이보스](https://www.i-boss.co.kr/ab-2877-17600&tag=AI%EB%B8%8C%EB%A6%AC%ED%95%91) (opened). Hospital GEO packages are being sold, for example about ₩5M a year for 52 posts plus technical setup, and vendors call it "시장 초입" (the very start of the market). — [search summary of i-boss/kmong listings](https://kmong.com/gig/784657) (snippet-only). 에이올로 sells medical and beauty ad-regulation review for Korea, Japan and the US as an add-on. — [Aeolo pricing](https://www.tryaeolo.com/pricing) (opened)
- **Cross-border K-beauty**: Amazon reported (at Beauty in Seoul, 2026-10-27) that Korean sellers' Amazon beauty sales doubled year over year in January–September 2026, and that Amazon accounts for 44% of US K-beauty purchases. It plans to grow 50 new K-beauty sellers to $1M in year one, and to help about 100 K-beauty brands enter Europe ("Project Autobahn"). — [국민일보](https://www.kmib.co.kr/article/20261027501250), [마이데일리](https://www.mydaily.co.kr/page/view/2026102808221585871) (snippet-only). 에이올로 tracks Amazon Rufus and multi-market plans (1/2/5 markets). — [tryaeolo.com](https://www.tryaeolo.com/) (opened). 체인시프트 targets Australia and APAC. — [Tech42](https://www.tech42.co.kr/%EC%9D%B8%ED%84%B0%EB%B7%B0-%ED%95%9C%EC%9A%A9%ED%9D%AC-%EC%B2%B4%EC%9D%B8%EC%8B%9C%ED%94%84%ED%8A%B8-%EB%8C%80%ED%91%9C-%EC%A0%9C%EB%A1%9C%ED%81%B4%EB%A6%AD-%EC%8B%9C%EB%8C%80-ai/) (opened)
- 디스럽트's pitch to K-beauty: 42% of gen-AI users ask AI for shopping recommendations; AI-referred traffic converts 183% better (vendor-cited stats); ChatGPT ads are coming to Korea. — [Dealsite](https://dealsite.co.kr/articles/162685) (opened; the stats are cited without primary sources)

### Inferences
- Willingness to pay is splitting in two. Enterprises in regulated or high-consideration categories (insurance, pharma, telecom, appliances) buy people-heavy retainers from agencies. D2C, K-beauty and B2B SaaS buy ₩100k–1M/month tools that must show revenue attribution. The 55.6% "no budget" figure and the 7% "measure business impact" figure suggest **attribution to revenue** is the unlock for budget.
- Cross-border K-beauty (Amazon US/EU, Japan via Qoo10 and others) is a clear wedge. Brands already spend on Amazon and Qoo10 listings. They need English and Japanese AI-answer visibility, including on Rufus, plus ad-regulation compliance across Korea, Japan and the US. This is where 에이올로 is positioned. A new entrant would compete head-on there unless it specializes, for example in Japan-market GEO for K-brands or in a vertical.
- Medical and plastic surgery: strong need (no Naver AI ads, near-zero LLM visibility) but heavy regulatory risk under Korean medical advertising law, plus a market crowded with existing viral agencies.

### Gaps
- No Korea-only, statistically robust survey of GEO budgets was found. The 오픈서베이 marketer-side, 메조미디어 and 나스미디어 NPR budget figures were not found.
- No figures on Korean organic traffic loss from AI Briefing (publisher or brand side).
- I searched for Qoo10 Japan / K-beauty AI-search demand specifically and found nothing beyond Amazon.

---

## 5. Japan (brief): LLMO market

### Takeaway
Japan calls the category "LLMO" (also AIO, for Google AI Overviews). It has a deeper agency market than Korea: outsourced LLMO typically costs ¥300k–500k per month. Domestic SaaS tools run from about ¥15k to ¥120k per month. In autumn 2026 the big holding companies launched adjacent offerings: Hakuhodo's publisher-tie-up "Shomei AIO," Dentsu Digital's "Agentic Commerce Optimization," and CyberAgent, Dentsu and Hakuhodo as ChatGPT-ads launch partners.

### Cited Findings
- **PRIZMA survey** (n=418 companies outsourcing LLMO; 30+ employees and ¥500M+ revenue; 2026-07-23 to 27):
  - Most common actual monthly spend: **¥400k (18.4%)**, then ¥500k (17.2%) and ¥300k (15.1%). More than half pay ¥300k–500k/month.
  - 65.8% buy a single specialized service and 34.2% full support.
  - Top services: expert content creation 46.4%, AI-citation monitoring 44.3%, rewriting 40.7%.
  - Billing: initial fee plus monthly 31.3%, monthly only 29.2%; performance-based only 1.9%.
  - [PR TIMES](https://prtimes.jp/main/html/rd/p/000000201.000149156.html) (opened)
- Vendor cost guides: diagnosis ¥100k–500k, monthly consulting ¥100k to ¥1M+; Bakuri plans at ¥300k trial, then ¥500k and ¥750k a month. — [media-growth](https://media-growth.co.jp/llmo-cost/), [bakuri](https://www.bakuri.co.jp/aio-lab/llmo-cost/) (snippet-only)
- **Hakuhodo "Shomei AIO"** (announced 2026-10-26): works with newspapers and publishers on tie-up articles built around the "questions" consumers ask AI, framed by category entry points and clearly labeled as ads. It is also developing "Shomei AIO Planner," a tool to visualize and prove AI citations. — [Web担当者Forum](https://webtan.impress.co.jp/n/2026/10/27/53513) (opened)
- **Dentsu Digital ACO**: "Agentic Commerce Optimization" support from 2026-09-15. It designs purchase-scenario test prompts, audits whether AI correctly understands price, stock, shipping and returns, and defines a master "正本" data source. — [Web担当者Forum](https://webtan.impress.co.jp/n/2026/09/16/53302) (opened)
- CyberAgent, Dentsu-group and Hakuhodo-group firms began pilot operation of ChatGPT ads in Japan (around June 2026). — [rtbsquare](https://rtbsquare.work/archives/60650), [Yahoo!ファイナンス](https://finance.yahoo.co.jp/news/detail/8385511eafdf147ca3661d64593432092a9e26c7) (snippet-only). I found no CyberAgent LLMO or visibility product.
- Domestic Japanese tools and prices:
  - CINC "SEARCH WRITE" (SEO + LLMO): ¥100k/month.
  - Media Reach "DolphinX AIO": from ¥30k/month.
  - A one-off diagnosis product: ¥300k, plus ¥100k each to add AI Mode or AIO.
  - Others listed: ipe "AKARUMI," BringFlower, オロパス "Pascal" (¥450–27,000), PLAN-B, Feedforce, Faber Company "ミエルカGEO."
  - [CINC LLMO tool comparison](https://www.cinc-j.co.jp/service/analytics/column/llmo-tools/) (opened). プラッタ "SUPER ACT" ¥15k/month for 5 AIs. — (snippet-only)
- Other entrants: AnyReach "AnyLLMO" (launched 2026-05-12; ChatGPT, Claude, Gemini, Perplexity, Copilot dashboard plus consulting); Nyle "LLM marketing" consulting; Digital Identity (positions LLMO as an extension of SEO). — [ecnomikata](https://ecnomikata.com/ecnews/50480/), [Nyle](https://nyle.co.jp/news/250424-01), [minkabu](https://minkabu.jp/news/4228336) (snippet-only)

### Inferences
- In Japan, typical outsourced spend (about ¥400k/month, roughly ₩3.7M) is several times what Korean SaaS charges, and buyers prefer narrow, specialized outsourcing. A Korean team with a cheap collection engine could sell Japan-market LLMO monitoring and content to K-brands entering Japan, and possibly to Japanese SMBs. They would compete with many domestic SEO firms that are relabeling as LLMO.
- The big Japanese agencies are moving toward commerce data quality (Dentsu) and paid publisher content (Hakuhodo), not self-serve SaaS. That leaves room for tooling, as in Korea.

### Gaps
- No Japan LLMO market-size estimate, and no funding rounds for Japanese LLMO startups, were found.
- No data on how Japanese AI answers (Google AIO/AI Mode in Japanese, ChatGPT, Yahoo! JAPAN) cite K-beauty or Qoo10 content.
