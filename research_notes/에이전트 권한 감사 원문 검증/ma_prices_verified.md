# AI security / agent identity / NHI acquisitions 2024–2026: price and deal facts checked against original sources

**How this was checked (updated after network access opened, 2026-10-29).**
- **Pass 1** used WebSearch extracts only, because direct fetches were blocked then.
- **Pass 2** opened the documents directly:
  - SEC filings via curl from www.sec.gov with a User-Agent contact string. HTML was converted to text and the business-combination notes read.
  - News articles from calcalistech.com, en.globes.co.il, ynetnews.com, techcrunch.com, itbrief.co.uk, trendingtopics.eu, netokracija.com, split-techcity.com and startwithidentity.com. Body text was taken from each page's JSON-LD `articleBody` or the rendered HTML.
  - cyera.com via Playwright, since the page is rendered in JavaScript.
  - Still blocked (403): globenewswire.com (the Momentum release was read via Yahoo Finance and Manila Times syndication instead), timesofisrael.com, cybermagazine.com, medium.com. businesswire.com failed with an HTTP/2 stream error.

**Verification labels used in every row.**
- **✅F** = figure read in the opened SEC filing.
- **✅B** = read in the opened buyer press release.
- **✅N** = read in the opened news article (Calcalist/Globes/TechCrunch etc.). The figure is still a *press report*, but I confirmed the article says it.
- **🔎S** = seen only in a search-engine extract, not opened.
- **n/v** = not verified.

Price-type labels: **[F]** filed, **[B]** buyer-stated, **[R]** press report citing sources.

---

## Q1. Corrected deal table: press price vs filed price

### Takeaway
I opened these SEC filings directly and confirmed every key figure: Zscaler–SPLX, Tenable–Apex, Okta–Axiom, SentinelOne–Prompt, Snowflake–Natoma, PANW–Koi, PANW–Portkey and **SailPoint–Entro**. Entro's **$122.6M cash + up to $7.3M restricted stock** is now verified from the 10-Q.

Filed consideration routinely **leaves out retention or replacement equity**:
- Koi: $61M
- Natoma: $54.4M
- SPLX: $16.6M
- Entro: up to $7.3M
- Portkey: $2M
- Apex: 187,304 restricted shares

So part of the "press vs filed" gap is accounting, not press error. The biggest gaps are:
- **Apex:** filed $47.8M vs press ">$105M"
- **Koi:** $231M (+$61M) vs ~$400M
- **Entro:** $122.6M (+$7.3M) vs ~$200M
- **Axiom:** $54M vs ~$100M

Cisco's FY2026 10-K reports only **$550M total consideration for all FY2026 acquisitions combined**, with no individual deal named. That puts a hard ceiling on Astrix if it closed before 25 Jul 2026.

### Cited Findings

**A. Deals with an SEC-filed figure**

| # | Deal | Press price | Filed price (status) | Announced / closed | Age at deal | Headcount | Document(s) opened |
|---|---|---|---|---|---|---|---|
| 1 | Tenable → Apex Security | **">$105M"** (Calcalist, 29 May 2025, ✅N); ~$100M (Globes, 🔎S) | **$47.8M ✅F**: "total consideration of $47.8 million, including $47.7 million in cash, net of $2.0 million cash acquired, and $0.1 million fair value of replacement equity". Allocation: intangibles $6.8M, goodwill $41.3M. **Plus 187,304 restricted shares issued 17 Jun 2025 to "certain key Apex employees"**, unvested and subject to forfeiture (✅F) | Ann. 29 May 2025; closed Jun 2025 | **Founded 2023 → ~2y** (✅N) | n/v | [Tenable 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm) (Note 6 and Item 5); [CTech](https://www.calcalistech.com/ctechnews/article/6wcqhdv35) |
| 2 | SentinelOne → Prompt Security | ~$250M (Calcalist, ✅N) | **$160.2M ✅F**: cash $133,614K + stock $17,196K (1,555,099 shares) + assumed options $854K + indemnity holdback $8,559K = $160,223K. Goodwill $131.3M; intangibles $21.6M (dev tech $20M with a 2-yr life, customers $1.6M). Post-closing adjustment cancelled 1,952 shares | Ann. 5 Aug 2025; **closed 5 Sep 2025** ✅F | **Founded Aug 2023 → ~2y** ✅N | ~50 (🔎S; not in the opened article) | [S 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/1583708/000158370826000055/s-20260731.htm) (Note 4); [CTech](https://www.calcalistech.com/ctechnews/article/te0d99mpu) |
| 3 | Okta → Axiom Security | ~$100M (Calcalist, ✅N); $75M (Dealroom, 🔎S) | **$54M cash ✅F**: "acquisition date fair value of purchase consideration of $54 million was paid in cash". Dev tech $16M (3-yr life), goodwill $40M "primarily attributed to the assembled workforce" | Ann. 26 Aug 2025; **closed 4 Sep 2025** ✅F | **Founded 2021 → ~4y** ✅N | "<30" (🔎S) | [Okta 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm) (Note 16); [CTech](https://www.calcalistech.com/ctechnews/article/ryzs3xstgl) |
| 4 | F5 → CalypsoAI | $180M (F5 PR, 🔎S) | **$145.2M cash** (🔎S from the 10-K; not opened in pass 2) | Closed 26 Sep 2025 | n/v | n/v | [F5 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1048695/000104869525000157/ffiv-20250930.htm) |
| 5 | CrowdStrike → Pangea | ~$260M | **~$222.7M** (🔎S: $212.1M cash net + $10.6M replacement awards; ties to the allocation) | Closed in quarter to Oct 2025 | n/v | n/v | [CRWD 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001535527/000153552726000031/crwd-20260731.htm) |
| 6 | CrowdStrike → SGNL | $740M | **~$637.1M** (🔎S: $627.9M cash + $9.2M replacement equity; ties to the allocation) | Closed 20 Feb 2026 | n/v | n/v | [CRWD 10-Q Apr-2026](https://www.sec.gov/Archives/edgar/data/0001535527/000153552726000025/crwd-20260430.htm) |
| 7 | Zscaler → SPLX (SPLXAI Inc.) | Undisclosed | **$40.6M ✅F**: "total cash purchase price consideration of $40.6 million". **$16.6M** restricted stock for SPLX employees "contingent upon their continued employment", treated as post-combination SBC. Intangibles **cut from $14.1M to $3.3M** after "transitioning from a benchmarking valuation approach to a replacement cost approach". Goodwill $32.2M → $39.2M, "primarily attributable to the assembled workforce" | **Closed 31 Oct 2025** ✅F | "early-stage technology company incorporated in the United States" ✅F | n/v | [Zscaler 10-Q Jan-2026](https://www.sec.gov/Archives/edgar/data/1713683/000171368326000048/zs-20260131.htm) (Note 6) |
| 8 | Twilio → Stytch | Undisclosed | **$104.1M** (🔎S; $58.5M net of $45.6M cash) | Closed 14 Nov 2025 | n/v | n/v | [Twilio 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1447669/000144766926000021/twlo-20251231.htm) |
| 9 | ServiceNow → Veza | ">$1B" | **~$1.2B, substantially cash** (🔎S; net assets $1,237M, goodwill $826M) | Closed 2 Mar 2026 | n/v | n/v | [NOW 10-Q Q1-2026](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000056/now-20260331.htm) |
| 10 | **Palo Alto Networks → Koi Security** | **~$400M** (Calcalist 26 Feb 2026, ✅N; Globes) | **$231M ✅F**, "substantially all of which is comprised of cash". **Plus $61M of replacement equity awards** "allocated to future services", including 0.3M restricted shares vesting over 3 years. Goodwill $169M, intangibles $35M (dev tech, 5 yr), cash $20M, net assets $7M | Ann. Feb 2026; **closed 14 Apr 2026** ✅F | **Founded mid-2024 → <2y** ✅N | **60** (Calcalist ✅N); 102 (BankInfoSecurity, 🔎S) | [PANW 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1327567/000132756726000023/panw-20260731.htm); [CTech](https://www.calcalistech.com/ctechnews/article/skmxgutuwx) |
| 11 | **Palo Alto Networks → Portkey** | $120–140M (press, 🔎S) | **$117M ✅F**, "substantially all … cash". **Plus $2M replacement awards.** Goodwill $110M, intangibles $15M, cash $17M, net liabilities −$25M. PANW launched "Prisma AIRS Gateway" with Portkey's technology on 16 Jul 2026, about 7 weeks after close ✅F | Ann. 30 Apr 2026; **closed 29 May 2026** ✅F | Founded 2023 (🔎S) | n/v | [PANW 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1327567/000132756726000023/panw-20260731.htm) |
| 12 | **Snowflake → Natoma (Natoma Labs, Inc.)** | ~$110M (Start with Identity, ✅N; this counts only the stock) | **$128.3M ✅F** = stock $110,523K (~0.5M shares at $241.28) + cash $17,748K. **Plus ~0.2M shares ($54.4M)** to Natoma employees, vesting over 3 years as post-combination SBC. Acquired "primarily for its developed technology and talent". Dev tech $17.4M (3 yr); goodwill $101.8M | Ann. 27 May 2026; **closed 3 Jun 2026** ✅F | **Founded 2024 → ~2y** (✅N, SWI) | **27** (✅N, SWI community blog; single low-authority source) | [SNOW 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000037/snow-20260731.htm) (Note 7); [Start with Identity](https://startwithidentity.com/blog/2026-05-27-snowflake-to-acquire-natoma-mcp-agent-governance/); [IT Brief](https://itbrief.co.uk/story/snowflake-buys-natoma-deepens-aws-tie-with-usd-6bn) |
| 13 | Akamai → LayerX | $205M (Akamai PR, 🔎S) | **~$205.0M cash** (🔎S from the 10-Q; not opened) | Closed Jul 2026 | n/v | n/v | [AKAM 10-Q Jun-2026](https://www.sec.gov/Archives/edgar/data/0001086222/000108622226000086/akam-20260630.htm) |
| 14 | **SailPoint → Entro Security** | ~$200M (CTech via SecurityWeek, 🔎S) | **$122.6M cash ✅F (now verified)**: "total purchase consideration of approximately $122.6 million in cash". **Plus up to $7.3M restricted stock** to key employees and former shareholders who joined, in **three annual tranches of ~$2.4M** (at closing, and on the 1st and 2nd anniversaries), each vesting quarterly over 1 year. Excluded from consideration. Allocation: dev tech $15.8M, customers $5.0M, tradename $0.4M, goodwill $98.7M, net assets $2.7M | Ann. 15 Jun 2026; **closed 29 Jun 2026** ✅F | n/v | n/v | [SailPoint 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/2030781/000203078126000021/sail-20260731.htm) (Note 5 and MD&A) |

**B. Deals without an individual filed figure**

| # | Deal | Price | Announced / closed | Age | Headcount | Funding / founders | Document(s) opened |
|---|---|---|---|---|---|---|---|
| 15 | Cisco → Astrix Security | **~$400M "final purchase price"** (Calcalist, ✅N, 4 May 2026). **Ceiling from the filing (✅F):** Cisco's FY2026 10-K (FY ended 25 Jul 2026) shows total purchase consideration for **all** FY2026 acquisitions of **$550M** (net tangible $10M, intangibles $190M, goodwill $350M). No individual deal is named, and "Astrix" does not appear anywhere in the 10-K | Calcalist (4 May 2026) says Cisco "announced on Monday the completion". Start with Identity (🔎S) says closed 29 Jun. Either way it is inside FY2026, so it is inside the $550M | Founded 2021 → ~5y ✅N | 80–121 (prior notes, n/v) | Founders Alon Jackson and Idan Gour (8200). $85M total raised; Series B $45M (Dec 2024) led by **Menlo's Anthology Fund (with Anthropic)**, with **Workday Ventures**, Bessemer, CRV, F2 ✅N | [CTech](https://www.calcalistech.com/ctechnews/article/dy5obf581); [Cisco 10-K FY2026](https://www.sec.gov/Archives/edgar/data/858877/000085887726000132/csco-20260725.htm) (Note 4) |
| 16 | Workday → C1.ai | Undisclosed | Signed 13 Oct 2026; close expected by 31 Jan 2027. **Not closed** (🔎S, Workday PR) | n/v | n/v | n/v | [Workday PR](https://newsroom.workday.com/2026-10-13-Workday-to-Acquire-C1-ai,-a-Leading-Agentic-Identity-Platform-for-People-and-Agents) (search only) |
| 17 | Cyera → Oasis Security | **"valued at $1 billion"** (✅B). Calcalist: mostly cash, cash portion ~$700M (✅N) | LOI 28 Jul 2026 (✅N); **completed 3 Sep 2026** (✅B) | Founded 2022 → ~4y ✅B | n/v | ~$195M raised; $120M Series B (Craft) in Mar 2026; founders Danny Brickman and Amit Zimerman ✅N | [Cyera PR](https://www.cyera.com/press-releases/cyera-completes-acquisition-of-oasis-security) (Playwright); [CTech](https://www.calcalistech.com/ctechnews/article/8115vtsb5) |
| 18 | Okta → Permiso Security | **"just under $200 million … almost all-cash"** per a source; Okta spokesperson "did not dispute" (TechCrunch, 30 Jul 2026, ✅N) | Signed 30 Jul 2026; **closed 26 Aug 2026** ✅F. Okta "is currently evaluating the measurement of consideration transferred", so no amount was filed yet | Emerged from stealth 2022 → ~4y ✅N | n/v | ~$29M raised; $18.5M Series A (Altimeter, Apr 2024) at ~$80M post; founders ex-FireEye Paul Nguyen and Jason Martin ✅N | [TechCrunch](https://techcrunch.com/?p=3148308); [Okta 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/1660134/000166013426000069/okta-20260731.htm) (Note 12) |
| 19 | 1Password → Apono | ~$250–300M [R] | Jun 2026 | not re-verified | 80 (prior notes) | — | not opened |
| 20 | Cyera → Ryft | **$100–130M estimate** (Calcalist, ✅N) | Ann. **23 Apr 2026** ✅N | Founded 2024 → ~2y ✅N | **~15**, mostly Israel ✅N | $8M seed led by **Index Ventures and Bessemer**; customers Sonos, Unity, Voodoo ✅N | [CTech](https://www.calcalistech.com/ctechnews/article/rjni88wawl) |
| 21 | Cyera → Genie Security | **~$50M estimate** (Calcalist, ✅N) | **20 May 2026** ✅N | **5 months** ✅N | **5** ✅N | $3M seed (Mensch Capital, Dynamic Loop); angels include Wiz CEO Assaf Rappaport and Okta/Elastic execs ✅N | [CTech](https://www.calcalistech.com/ctechnews/article/hke7g7jjfl) |
| 22 | Check Point → Cyata (with Cyclops, Rotate's staff) | Cyata alone undisclosed; all three ">$150 million" (market sources, Globes ✅N) | **12 Feb 2026** (with FY2025 results) ✅N | Founded 2024 → ~1.5y ✅N | **~20** ✅N | **$8.5M seed led by TLV Partners** (+ Kedem, ex-Cellebrite CEO Yossi Carmil) ✅N | [Globes](https://en.globes.co.il/en/article-check-point-buys-3-israeli-startups-for-over-150m-1001534878) |
| 23 | Silverfort → Fabrix Security | Undisclosed; "estimated to be in the tens of millions" (Calcalist, ✅N) | **28 Apr 2026** ✅N | Founded 2025 → ~1y ✅N | **14** ✅N | **$8M seed from Norwest, toDay Ventures, Jibe Ventures** + angels (founders/execs at Google, PANW, Cyera, Microsoft, Tenable, Nvidia) ✅N | [CTech](https://www.calcalistech.com/ctechnews/article/sjht00x0awx) |
| 24 | Upwind → Aegis | Undisclosed; stock deal "tens of millions", Globes est. **~$30M** (Ynet, ✅N) | Ann. ~23 Sep 2026 | **Founded early 2026 → ~9 months** ✅N | **12** in the new Labs (Aegis + Upwind staff), target ~25 in 3 months and up to 35 ✅N | Founders Omri Limor and Saar Ankonina (8200, offensive cyber) ✅N. "No customers or revenue" is from Globes via Beri (🔎S only) | [Ynet](https://www.ynetnews.com/business/article/sj5iuc11qgx) |
| 25 | Temporal + Tiny → Oso | Undisclosed | Oct 2026 (🔎S) | n/v | "most of the current Oso team" (🔎S) | — | not opened |

**Corrections to prior notes (`에이전트 권한 감사 경쟁 분석/ai_security_ma.md`)**
- **Koi:** $231M filed (+$61M replacement awards), not ~$400M.
- **Portkey:** $117M filed (+$2M).
- **Natoma:** $128.3M filed (+$54.4M).
- **Entro:** $122.6M is now **verified**. The restricted stock is three ~$2.4M tranches.
- **Apex:** also issued 187,304 restricted shares to key employees, outside the $47.8M.
- **Oasis:** completed 3 Sep 2026 (Cyera PR).
- **Permiso:** the price source is TechCrunch; the close is confirmed by Okta's 10-Q.
- **Cyata:** ~20 staff and an $8.5M seed (TLV Partners), not "n/v".
- **Ryft:** the seed was led by Index and Bessemer; announced 23 Apr 2026.
- **Astrix:** capped by Cisco's $550M FY2026 total for all acquisitions.

### Inferences
- **Why filed figures are lower.** There are three mechanisms:
  1. Press over-estimation: Apex, Axiom, and probably Entro.
  2. Retention and replacement equity booked as compensation: Koi, Natoma, SPLX, Entro, Apex.
  3. Net-of-cash presentation: Stytch.

  For a founder, the economically relevant number is **purchase price + retention package**. Including retention: Koi $292M, Natoma $182.7M, SPLX $57.2M, Entro ≤$129.9M.
- **Astrix.** If the ~$400M Calcalist figure is right, Cisco's other FY2026 acquisitions together cost ≤$150M. That is possible but tight. Alternatively, part of the reported $400M was retention equity booked outside consideration, as with Koi. Treat ~$400M as an upper-end headline. The filed ceiling is $550M across all of Cisco's FY2026 deals.
- **What buyers say they bought.** In five of the opened filings (Okta–Axiom, Zscaler–SPLX, SentinelOne–Prompt, PANW–Koi, PANW–Portkey), goodwill is described as "primarily attributable to the assembled workforce". Snowflake says it bought Natoma "primarily for its developed technology and talent". SPLX's technology was re-valued down to **replacement cost ($3.3M)**. Accounting-wise, buyers value small AI-security startups mainly for **team plus time-to-market**, not the code.

### Gaps
- Not opened in pass 2: F5 (CalypsoAI), CrowdStrike (Pangea, SGNL), Twilio (Stytch), ServiceNow (Veza), Akamai (LayerX). Their figures rest on pass-1 search extracts. Those extracts quoted exact thousands and tied out arithmetically, so they are probably reliable.
- The Astrix close date is still conflicting: Calcalist says completion was announced 4 May; another source says 29 Jun. Cisco's own completion release was not opened.
- Headcount for SPLX, Apex, Portkey and Prompt is unconfirmed from opened sources. Natoma's 27 staff comes from one community blog that also misread the filed price.
- 1Password–Apono, Workday–C1 and Temporal–Oso were not re-opened.

---

## Q2. Recomputed medians

### Takeaway
The **median of 21 priced deals is $145.2M** (CalypsoAI), using the filed figure where one exists. That is down from ≈$195M in the prior notes. The **filed-only median (14 deals) is $136.8M**; Entro is now verified, so all 14 are filed. For the same 12 deals, the **median press price was ~$202.5M vs ~$152.7M filed (~25% lower)**. The **median per-deal haircut is ≈ −16.5%**. Small deals under $60M have a **median of $47.8M**.

### Cited Findings
- **All 21 priced deals, best figure in $M** (Q1 sources):
  30 (Aegis R), 40.6 (SPLX ✅F), 47.8 (Apex ✅F), 50 (Genie R), 54 (Axiom ✅F), 104.1 (Stytch F🔎), 115 (Ryft R mid), 117 (Portkey ✅F), 122.6 (Entro ✅F), 128.3 (Natoma ✅F), **145.2 (CalypsoAI F🔎) ← median**, 160.2 (Prompt ✅F), 195 (Permiso R ✅N), 205 (LayerX F🔎), 222.7 (Pangea F🔎), 231 (Koi ✅F), 275 (Apono R), 400 (Astrix R ✅N; capped by $550M), 637.1 (SGNL F🔎), 1,000 (Oasis ✅B), 1,200 (Veza F🔎).
- **Filed-only (14 deals):** 40.6, 47.8, 54, 104.1, 117, 122.6, 128.3, 145.2, 160.2, 205, 222.7, 231, 637.1, 1,200 → **median $136.8M**.
- **Press vs filed for the same 12 deals** (press midpoints):

| Deal | Press | Filed | Change |
|---|---|---|---|
| Apex | 102.5 (Calcalist said ">105") | 47.8 | −53% |
| Koi | 400 | 231 | −42% |
| Entro | 200 | 122.6 | −39% |
| Axiom | 87.5 | 54 | −38% |
| Prompt | 250 | 160.2 | −36% |
| CalypsoAI | 180 | 145.2 | −19% |
| Pangea | 260 | 222.7 | −14% |
| SGNL | 740 | 637.1 | −14% |
| Portkey | 130 | 117 | −10% |
| LayerX | 205 | 205 | 0% |
| Natoma | 110 | 128.3 | +17% |
| Veza | ~1,000 | 1,200 | +20% |
| **Median** | **202.5** | **152.7** | **≈ −16.5%** |

- **Including retention or replacement equity:** Koi 292, Natoma 182.7, SPLX 57.2, Portkey 119, Entro 129.9. The overall median stays at $145.2M; the small-deal median rises to ~$50M.
- **Small priced deals (<$60M):** Aegis 30, SPLX 40.6, Apex 47.8, Genie 50, Axiom 54 → **median $47.8M**. Three of these are opened filings; Genie and Aegis are opened press estimates.
- **Age at deal** (from opened sources): Genie 5 months, Aegis ~9 months, Fabrix ~1y, Cyata ~1.5y, Koi <2y, Apex ~2y, Prompt ~2y, Ryft ~2y, Natoma ~2y, Axiom ~4y, Oasis ~4y, Permiso ~4y, Astrix ~5y. **Median ≈ 2 years.**
- **Headcount** (from opened sources): Genie 5, Aegis 12, Fabrix 14, Ryft 15, Cyata ~20, Natoma 27 (weak source), Koi 60. **Median ≈ 15.**

### Inferences
- Treat any Calcalist or Globes headline as an **upper bound**. Filed totals were 10–53% lower in 9 of 12 deals.
- Even including retention, filed figures for small public-buyer deals (Apex, Axiom, SPLX) sit at **$40–60M**. That is the realistic anchor for a small team with a real product.

### Gaps
- Only 6 deals under 2 years old have any price, so the small-deal median is fragile.
- None of the private-buyer deals (Cyera, Upwind, Silverfort) has a filed price.

---

## Q3. Momentum Cyber market statistics

### Takeaway
I opened Momentum's Q3 2026 release (GlobeNewswire syndicated via Yahoo Finance and Manila Times). It confirms **"AI Security recorded 40 M&A transactions in 2026 through Q3, compared with just 10 deals across all of 2025."** Momentum's own website confirms **219 deals and $9.1B disclosed value in H1 2026**. The **$38.3B H1 2025** comparison is still seen only via a search extract attributed to Axios Pro (🔎S).

### Cited Findings
- **Q3 2026 release (✅, opened syndications of the 1 Oct 2026 GlobeNewswire release):**
  - 336 M&A transactions and 564 financing rounds through Q3 2026; total disclosed M&A value $15.4B.
  - "Strategic acquirers accounted for 92% of M&A capital deployed."
  - McAlpine: "a five-fold increase in AI-related acquisitions" and "multi-billion-dollar megadeals have been less frequent in 2026".
  - "AI Security recorded 40 M&A transactions in 2026 through Q3, compared with just 10 deals across all of 2025."
  - Sources: [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/momentum-cyber-releases-q3-2026-150000718.html); [Manila Times](https://www.manilatimes.net/2026/10/01/tmt-newswire/globenewswire/momentum-cyber-releases-q3-2026-cybersecurity-market-review-ai-reshapes-cybersecurity-economics-as-ma-activity-reaches-record-pace/2437389/amp).
- **H1 2026 (✅, Momentum site):**
  - "219 M&A transactions and $9.1B in disclosed deal value across H1 2026, capped by June's landmark $4.175B Accenture acquisition of Dragos, NetRise, and runZero."
  - Also: "subscale or undifferentiated point solutions are losing ground, while scaled, platform-aligned vendors are commanding significant premiums"; strategic acquirers "are no longer buying features — they're buying architectural players".
  - Source: [Momentum Cyber](https://momentumcyber.com/momentum-cyber-mid-year-2026-review-cybersecurity-ma-on-track-for-highest-deal/).
- **H1 2025 = $38.3B (🔎S only):** Axios Pro Deals, citing Momentum, says H1 2026 value was "less than a quarter of the $38.3 billion recorded in H1 2025". The deal count was up 3% year on year. The $9.1B covers only 36 deals with disclosed values (🔎S, H1 PDF).

### Inferences
- Momentum's commentary that "subscale point solutions are losing ground" sits awkwardly with the many tiny team-buys in Q4. A reasonable reconciliation is that small deals are happening, but they are priced as **team acquisitions in the tens of millions, not as product premiums**.

### Gaps
- The $38.3B figure and the 36-deal disclosure split were not read from an opened document.
- Momentum's definition of an "AI Security" deal is not public in the opened text.

---

## Q4. Comparable small exits (<$60M, <30 staff, or <2 years) and how buyers found them

### Takeaway
The opened articles show **how the buyer and target met** for several deals:
- **Ryft:** Cyera's CTO knew the founders from Unit 8200 and approached them before a planned funding round.
- **Aegis:** Aegis approached Upwind for a partnership or investment; months of joint work turned into an acquisition.
- **Apex:** Tenable surveyed the AI-security field and picked the leader.
- **Cyata:** the CEO is ex-Check Point.
- **Koi:** grew from a viral security-research stunt.
- **Prompt:** Okta and F5 were investors; the founders had built AI groups at Check Point and Orca.

The common thread is a **pre-existing relationship or visible proof of expertise**. Revenue was rarely the trigger.

### Cited Findings (all ✅ opened unless marked)

- **Cyera → Genie** (20 May 2026, ~$50M est.).
  - "Five months after it was founded and with just five employees".
  - Seed of $3M (Mensch Capital, Dynamic Loop). Angels include Wiz CEO Assaf Rappaport and Okta/Elastic executives.
  - CEO Nadav Noy (30, 8200); CTO Noam Dotan (31, Matzov), who was on Legit Security's founding team. They founded Genie after reserve duty following Oct 7.
  - Product deployed on "hundreds of endpoints" in Israel and the US.
  - Calcalist notes that "like many founders of startups acquired by Cyera, Noy is a veteran graduate of Unit 8200". Cyera was on a 5-company spree and had tripled its staff to ~1,500.
  - How they met: not stated.
  - Source: [CTech](https://www.calcalistech.com/ctechnews/article/hke7g7jjfl).
- **Cyera → Ryft** (23 Apr 2026, $100–130M est.).
  - ~15 staff; $8M seed (Index, Bessemer).
  - **How they met:** "We were not planning to sell … **Cyera approached us before a significant fundraising round** … Tamar [Bar-Ilan, Cyera CTO] came to Israel, and **given our long-standing relationship from our days in Unit 8200, discussions about collaboration quickly evolved into acquisition talks**." (CEO Yossi Reitblat).
  - Cyera VP R&D: "The value of a company is not measured by headcount or the amount it has raised … speed to market was essential … also exploring additional acquisitions of high-quality teams."
  - Source: [CTech](https://www.calcalistech.com/ctechnews/article/rjni88wawl).
- **Upwind → Aegis** (Sep 2026, ~$30M stock, Globes est.).
  - Founded early 2026 by Omri Limor and Saar Ankonina (8200 offensive cyber; once commander and subordinate).
  - **How they met:** "Aegis initially approached Upwind about a strategic partnership and potential investment while developing its technology. After several months of collaboration, Upwind moved to acquire the startup." Limor: "After spending several months working together with Upwind, it became clear that joining forces … would allow us to move much faster."
  - Upwind's CEO said the team brings "deep understanding of the challenges around securing agents, skills and plugins".
  - Source: [Ynet](https://www.ynetnews.com/business/article/sj5iuc11qgx).
- **Silverfort → Fabrix** (28 Apr 2026, "tens of millions").
  - Founded 2025; 14 employees.
  - CEO Raz Rotenberg was a founding engineer at Run:ai (acquired by Nvidia). CTO Ofir Yakovian was ex-Orca Security and Microsoft Entra. VP R&D Roee Oz was ex-chief architect of Microsoft Defender for Cloud and led Microsoft's AI security incubation.
  - $8M seed (Norwest, toDay, Jibe) plus angels who are founders or executives at Google, PANW, Cyera, Microsoft, Tenable and Nvidia.
  - Silverfort's second acquisition, after Rezonate (Nov 2024).
  - How they met: not stated. A dense network of security-company angels is visible.
  - Source: [CTech](https://www.calcalistech.com/ctechnews/article/sjht00x0awx).
- **Check Point → Cyata** (12 Feb 2026, undisclosed; >$150M for three companies).
  - Founded 2024 by **CEO Shahar Tal, "who formerly worked for Check Point"**, with Baruch Weitzman and Dror Roth (all 8200).
  - $8.5M seed (TLV Partners); **about 20 employees**.
  - Product: "a platform for managing identities and permissions of AI Agents … continuously maps all active agents, identifies their permission level, analyzes activity patterns and enables real-time control and policy enforcement". This is the **closest product match to "agent permission & audit."**
  - Source: [Globes](https://en.globes.co.il/en/article-check-point-buys-3-israeli-startups-for-over-150m-1001534878).
- **Tenable → Apex** ($47.8M filed vs ">$105M" press).
  - **How they met:** "After evaluating companies in the AI security space, Tenable identified Apex as the market leader in the field." That was a buyer-led market scan.
  - Founded 2023 by Matan Derman (Lt. Col., 8200) and Tomer Avni (Captain); Stanford and Harvard master's degrees.
  - Seed co-led by Sequoia and Index, with angels Sam Altman and Clem Delangue. Raised $8.6M; already had Fortune 500 clients.
  - Tenable's 6th Israeli acquisition.
  - Sources: [CTech](https://www.calcalistech.com/ctechnews/article/6wcqhdv35); [Tenable 10-K](https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm).
- **Okta → Axiom** ($54M filed vs ~$100M press).
  - Founded 2021 (IAF veterans Itay Mesika and Ilan Dardik).
  - Raised $10M: a $7M seed led by S Capital, with angels from the Armis, Demisto and Torq founders, plus $3M unannounced.
  - "Dozens of global clients" (Navan, Varonis, Orca …).
  - Team folded into Okta's Israel R&D centre, which was created by the Spera acquisition.
  - Sources: [CTech](https://www.calcalistech.com/ctechnews/article/ryzs3xstgl); [Okta 10-K](https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm).
- **Zscaler → SPLX** ($40.6M cash + $16.6M retention, filed).
  - Founders Kristian Kamber (CEO) and Ante Gojsalić (CTO). US HQ, Croatian (Split) engineering team.
  - $7M round led by LAUNCHub (with Inovo, SCV, DNV, Runtime, Rain Capital), which "backed founders … shortly after they launched their platform and secured initial customers".
  - Netokracija: its open-source **Agentic Radar** (maps dependencies in agentic workflows and flags missing safeguards) "is apparently exactly the part Zscaler recognized it was missing".
  - Kamber's prior role as a Zscaler Regional Director (2022–24) is **🔎S only** (Crunchbase/LinkedIn not opened).
  - Sources: [Trending Topics](https://www.trendingtopics.eu/zscaler-acquires-ai-security-startup-splxai-launchub-ventures-secures-an-exit/); [Netokracija](https://www.netokracija.com/americki-gigant-zscaler-kupio-splitski-splxai-239491); [Split Tech City](https://en.split-techcity.com/splx-enters-the-big-league-becomes-part-of-a-global-cybersecurity-giant/).
- **Snowflake → Natoma** ($128.3M + $54.4M, filed).
  - Founded 2024; 27 people; $7M seed from **Greylock and Index** (SWI blog only).
  - Snowflake's CEO cited "Natoma's expertise in identity governance and privileged access management" for AI-agent actions.
  - Sources: [SNOW 10-Q](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000037/snow-20260731.htm); [IT Brief](https://itbrief.co.uk/story/snowflake-buys-natoma-deepens-aws-tie-with-usd-6bn); [SWI](https://startwithidentity.com/blog/2026-05-27-snowflake-to-acquire-natoma-mcp-agent-governance/).
- **Upper-mid context, Koi.**
  - Founders built a fake VSCode theme extension, "Darcula Official", that infected 300+ organizations in a week. That became "ExtensionTotal" and then the Koi platform.
  - Series A at a $135M valuation in late 2025.
  - **Only the first ~10 of 60 employees had options** when the deal was signed. Each founder held ~12% (~$50M pre-tax) and funded bonuses for staff.
  - Source: [CTech](https://www.calcalistech.com/ctechnews/article/skmxgutuwx).
- **Upper-mid context, Prompt.**
  - Investors included **Okta and F5**.
  - Founders previously founded the AI divisions at Check Point and Orca.
  - Calcalist reported that Lasso, Aim and Pillar had received offers, with Check Point, Zscaler and F5 among the suitors.
  - Source: [CTech](https://www.calcalistech.com/ctechnews/article/te0d99mpu).

### Inferences (lessons for a 3-person team)
1. **Price band.** For teams under 15 people and under 18 months old, opened evidence puts exits at **~$30–60M**, often stock or retention-heavy (Aegis, Genie, SPLX, Apex, Axiom).
   - Ryft ($100–130M with 15 people) and Natoma ($128M + $54M with 27 people) are outliers.
   - Both sat squarely on a buyer's urgent roadmap (agent data access, MCP governance), and both had tier-1 seed investors (Index/Bessemer, Greylock/Index).
2. **How deals start.** Each opened case shows a concrete channel:
   - **Partnership first:** Aegis → Upwind, after "several months of collaboration".
   - **Personal network inside the buyer:** Ryft (Cyera CTO from 8200); Cyata (CEO ex-Check Point); possibly SPLX (CEO ex-Zscaler, not confirmed from an opened source).
   - **Buyer market scan for "the leader":** Apex → Tenable.
   - **Strategic investor or angel ties:** Prompt (Okta and F5 invested). Fabrix and Genie had angels at Cyera, PANW, Okta and Wiz.
   - **Public proof of expertise:** Koi's VSCode stunt; SPLX's open-source Agentic Radar.

   For a 3-person team, the actionable version is two steps. First, **ship a visible open-source tool or research finding in agent permissions or audit**. Second, **run a design-partner or integration pilot with 2–3 likely acquirers** (identity or platform vendors without an agent-authorization layer), treating the Aegis "partnership → acquisition" path as the template.
3. **Buyers book these as team purchases.** Goodwill is "primarily attributable to the assembled workforce" (Okta, Zscaler, SentinelOne, PANW). SPLX's code was valued at a $3.3M replacement cost. Cyera's R&D head said value "is not measured by headcount or the amount raised… speed to market was essential". Aegis sold with no customers (🔎S).
4. **Negotiate retention together with price.** Examples: Entro's three $2.4M tranches, Natoma's $54.4M over 3 years, Koi's $61M, SPLX's $16.6M, Apex's 187,304 restricted shares. Koi shows the risk of not having employee options in place before talks start.
5. **Profile bias.** Every small comparable except SPLX is Israeli, mostly 8200-trained, with tier-1 seed investors or security-insider angels. SPLX, a Croatian team with US incorporation and an open-source tool, is the main precedent for a team outside that network.
6. **Closest product comparables for "agent permission & audit".**
   - Cyata (~20 staff, $8.5M seed, inside the ~$150M three-deal package).
   - Fabrix (14 staff, $8M seed, "tens of millions").
   - Natoma (27 staff, $128M + $54M).
   - Oso (team-only acqui-hire).

   The NHI category leaders have been absorbed: Astrix, Entro, Oasis, Permiso, Veza, SGNL, Apono, plus C1 (pending). Remaining demand is for capability tuck-ins.

### Gaps
- No opened source states how Genie, Fabrix or Axiom first came to the buyer's attention.
- Kamber's ex-Zscaler role and Aegis having "no customers" are search-extract only.
- Exact prices for Cyata, Fabrix, Oso and Aegis are undisclosed or estimated. No buyer confirmed the Genie or Ryft prices.
- No Korean or other non-Israeli small agent-security exit was found apart from SPLX.
