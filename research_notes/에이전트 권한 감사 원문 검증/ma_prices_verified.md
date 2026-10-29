# AI security / agent identity / NHI acquisitions 2024–2026: price and deal facts checked against original sources

**How this was checked (read first).** The task said network access had been opened, but it had not. Every direct fetch was refused in this session: curl to www.sec.gov, efts.sec.gov, calcalistech.com, globes.co.il, securityweek.com, google.com and example.com all got proxy CONNECT 403. WebFetch also failed with "ENOTFOUND" for www.sec.gov and news.crunchbase.com. Playwright uses the same proxy, so it was not attempted. **No URL was actually opened by me.** Every check below comes from WebSearch result extracts. These are the search engine's own reading of the indexed page, often quoting filing text verbatim, for example "$160,223 thousand".

So each "verified" figure means the search index quoted it from the named SEC filing or press release. It does not mean I read the document myself. The column "URL actually opened" is therefore replaced with **"Source seen (via search extract)"**. To fully close this out, someone must allow www.sec.gov in the session's network settings and re-read the notes listed in Gaps.

Labels used: **[F]** figure in an SEC filing (10-K/10-Q); **[B]** buyer press release or buyer-confirmed; **[R]** press report (Calcalist/Globes/TechCrunch etc.) citing sources; **n/v** not verified.

---

## Q1. Corrected deal table: press price vs filed price

### Takeaway
I confirmed 13 of the 14 SEC-filed figures in prior notes word for word from filing extracts. The Entro filed figure ($122.6M) could not be re-confirmed in this pass. I also found **three new filed figures that change the picture**:
- **Palo Alto–Koi:** $231M in the filing, versus ~$400M in the press.
- **Palo Alto–Portkey:** $117M, versus $120–140M.
- **Snowflake–Natoma:** $128.3M, versus ~$110M.

Akamai–LayerX's $205M is now also in a 10-Q. Filed consideration routinely **leaves out retention or replacement equity**: $61M for Koi, $54.4M for Natoma, $16.6M for SPLX and $2M for Portkey. Part of the "press vs filed" gap is just this accounting split, not inflated press numbers.

### Cited Findings

**A. Deals with an SEC-filed figure**

| # | Deal | Press price | Filed price (verified extract) | Source type | Announced / closed | Age at deal | Headcount | Source seen (via search extract) |
|---|---|---|---|---|---|---|---|---|
| 1 | Tenable → Apex Security | ~$100M (Globes); ">$105M" (Calcalist) | **$47.8M** total = ~$47.7M cash (net of $2.0M cash acquired) + $0.1M replacement equity; $6.8M intangibles | F (10-K FY2025, Note 6) | Ann. 29 May 2025; closed Jun 2025 | Founding year n/v in this pass (prior notes: 2023, ~2y) | n/v | [Tenable 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm); [Tenable PR](https://www.tenable.com/press-releases/tenable-announces-intent-to-acquire-apex-security-to-expand-exposure-management-across-the-ai-attack-surface); [CTech](https://www.calcalistech.com/ctechnews/article/6wcqhdv35); [Globes](https://www.globes.co.il/news/article.aspx?did=1001511715) |
| 2 | SentinelOne → Prompt Security | ~$250M (Calcalist) | **$160.2M** fair value = $133.6M cash + $17.2M stock (1,555,099 Class A shares) + $0.9M assumed options + $8.6M indemnity holdback. Goodwill $131.3M; intangibles $21.6M ($20M dev tech, 2-yr life) | F (10-Qs Apr-2026 and Jul-2026; unchanged) | Ann. Aug 2025 (Black Hat); closed 5 Sep 2025 | Founded Aug 2023 → **~2y** | **~50** (Calcalist) | [S 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001583708/000158370826000055/s-20260731.htm); [Prompt blog](https://prompt.security/blog/prompt-security-sentinelone-a-new-chapter-begins); [Wikipedia](https://en.wikipedia.org/wiki/Prompt_Security) |
| 3 | Okta → Axiom Security | ~$100M (Calcalist); $75M (Globes via Dealroom) | **$54M cash** ("acquisition date cash consideration was $54 million") | F (10-K FY2026) | Ann. 26 Aug 2025; closed 4 Sep 2025 | Founded 2021 → **~4y** | **"<30"** (one outlet) | [Okta 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm); [CTech](https://www.calcalistech.com/ctechnews/article/ryzs3xstgl); [Dealroom note](https://app.dealroom.co/news/note/okta-acquires-axiom-security-for-54m-sec-sep-2025); [Ynet](https://www.ynetnews.com/business/article/skd50m2fee) |
| 4 | F5 → CalypsoAI | $180M (F5 announcement) | **$145.2M cash**: net tangible $14.2M + dev tech $16.9M + goodwill $114.2M = $145,207K (preliminary) | F (10-K FY2025) | Ann. Sep 2025; closed 26 Sep 2025 | n/v | n/v | [F5 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1048695/000104869525000157/ffiv-20250930.htm); [F5 PR](https://f5.com/company/news/press-releases/f5-to-acquire-calypsoai-to-bring-advanced-ai-guardrails-to-large-enterprises) |
| 5 | CrowdStrike → Pangea | ~$260M | **~$222.7M** = $212.1M cash (net of $9.4M cash acquired) + $10.6M replacement awards. Allocation: dev tech $13.2M + goodwill $209.9M − net liabilities $0.4M = $222.7M | F (10-Qs Oct-2025, Apr-2026, Jul-2026) | Ann. Sep 2025; closed in quarter ended Oct 2025 | n/v this pass | n/v | [CRWD 10-Q Oct-2025](https://www.sec.gov/Archives/edgar/data/1535527/000153552725000033/crwd-20251031.htm); [CRWD 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001535527/000153552726000031/crwd-20260731.htm) |
| 6 | CrowdStrike → SGNL | $740M | **~$637.1M** = $627.9M cash (net of $9.4M) + $9.2M replacement equity. Allocation: dev tech $87.9M + goodwill $561.1M − net liabilities $11.9M | F (10-Qs Apr/Jul-2026) | Ann. Jan 2026; closed 20 Feb 2026 | n/v | n/v | [CRWD 10-Q Apr-2026](https://www.sec.gov/Archives/edgar/data/0001535527/000153552726000025/crwd-20260430.htm); [CRWD 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001535527/000153552726000031/crwd-20260731.htm) |
| 7 | Zscaler → SPLX (SplxAI) | Undisclosed | **$40.6M total cash.** Separately, $16.6M restricted stock to ex-SPLX staff, booked as post-combination SBC. Intangibles revalued from **$14.1M to $3.3M** (switch to a "replacement cost approach"); goodwill $32.2M → $39.2M | F (10-Qs Oct-2025, Jan-2026, Apr-2026) | Closed 31 Oct 2025 | n/v ("early-stage") | n/v | [ZS 10-Q Jan-2026](https://www.sec.gov/Archives/edgar/data/1713683/000171368326000048/zs-20260131.htm); [ZS 10-Q Oct-2025](https://www.sec.gov/Archives/edgar/data/1713683/000171368325000205/zs-20251031.htm) |
| 8 | Twilio → Stytch | Undisclosed (management said "<$100M" on Q3-25 call, per secondary source) | **$104.1M** preliminary ($104,061K); $58.5M net of $45.6M cash acquired; intangibles $11.8M; goodwill $48.5M | F (10-K FY2025) | Ann. 30 Oct 2025; closed 14 Nov 2025 | n/v | n/v | [Twilio 10-K FY2025](https://www.sec.gov/Archives/edgar/data/1447669/000144766926000021/twlo-20251231.htm) |
| 9 | ServiceNow → Veza | ">$1B" (press) | **~$1.2B, substantially cash**; net assets $1,237M; goodwill $826M; intangibles $356M (dev tech $190M, customer relationships $150M, backlog $16M) | F (10-Qs Q1–Q3 2026) | Ann. Dec 2025; closed **2 Mar 2026** ✔ | n/v | n/v | [NOW 10-Q Q1-2026](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000056/now-20260331.htm); [NOW 10-Q Q3-2026](https://www.sec.gov/Archives/edgar/data/0001373715/000137371526000096/now-20260930.htm) |
| 10 | **Palo Alto Networks → Koi Security** | **~$400M** (Globes, Calcalist); MarketScreener: $300M agreement on 16 Feb 2026 | **$231M total purchase consideration, mostly cash.** Separately, **~$61M replacement equity awards** expensed as SBC. Goodwill $169M, intangibles $35M, cash $20M, net assets $7M (preliminary) | F (10-K FY2026) | Ann. 17 Feb 2026; closed **14 Apr 2026** | Founded 2024 → **~2y** | **60** (Calcalist) vs **102** (BankInfoSecurity), conflicting | [PANW 10-K FY2026](https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000023/panw-20260731.htm); [Globes](https://en.globes.co.il/en/article-palo-alto-networks-to-buy-israeli-co-koi-security-1001535257); [CTech](https://www.calcalistech.com/ctechnews/article/xpz78znuc); [CTech options story](https://www.calcalistech.com/ctechnews/article/skmxgutuwx); [MarketScreener](https://www.marketscreener.com/news/palo-alto-networks-inc-completed-the-acquisition-of-koi-security-inc-from-a-group-of-shareholders-ce7e50dfdc8ef420) |
| 11 | **Palo Alto Networks → Portkey** | $120–140M (press); $140M "definitive agreement" (Dealroom, n/v) | **$117M, almost all cash.** Separately, $2M replacement awards (SBC). Goodwill $110M, intangibles $15M, cash $17M, net liabilities −$25M | F (10-K FY2026) | Ann. 30 Apr 2026; closed **29 May 2026** | Founded 2023 → **~3y** | n/v | [PANW 10-K FY2026](https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000023/panw-20260731.htm); [Dealroom note](https://app.dealroom.co/news/note/palo-alto-networks-acquires-portkey-for-117m-sec-may-2026) |
| 12 | **Snowflake → Natoma** | ~$110M (blog; appears to count only the stock part) | **$128.3M preliminary** = ~0.5M shares ($110.5M) + $17.7M cash. Separately, ~0.2M shares to Natoma employees under vesting (**$54.4M**, post-combination SBC) | F (10-Q Jul-2026) | Ann. 27 May 2026; closed **3 Jun 2026** | Founded 2024 → **~2y** | **27** (single report) | [SNOW 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000037/snow-20260731.htm); [IT Brief](https://itbrief.co.uk/story/snowflake-buys-natoma-deepens-aws-tie-with-usd-6bn); [Start with Identity](https://startwithidentity.com/blog/2026-05-27-snowflake-to-acquire-natoma-mcp-agent-governance/) |
| 13 | Akamai → LayerX | $205M (Akamai PR) | **~$205.0M cash**, subject to post-closing adjustments; allocation not finalized | F (10-Q Jun-2026) + B | Ann. 14 May 2026; closed **Jul 2026** | n/v this pass | n/v | [AKAM 10-Q Jun-2026](https://www.sec.gov/Archives/edgar/data/0001086222/000108622226000086/akam-20260630.htm); [Akamai PR](https://akamai.com/fr/newsroom/press-release/akamai-technologies-announces-intent-to-acquire-layerx-advancing-its-workforce-security-strategy-with-ai-usage-control) |
| 14 | SailPoint → Entro Security | ~$200M (CTech via SiliconANGLE/SecurityWeek) | **$122.6M cash + ≤$7.3M restricted stock: NOT re-confirmed.** Search could not surface SailPoint's Jul-2026 10-Q note. A secondary blog repeats $122.6M. A 10-Q summary by Autobound says **$118.2M cash used for acquisitions in 6 months to 31 Jul 2026, "primarily Entro"**. That is consistent with ~$122.6M less acquired cash, but not proof | F (claimed, unverified) | Ann. 15 Jun 2026; closed **29 Jun 2026** (SailPoint PR via search) | n/v | n/v | [SecurityWeek](https://www.securityweek.com/sailpoint-to-acquire-entro-in-reported-200-million-deal/amp/); [Autobound 10-Q summary](https://www.autobound.ai/companies/sailpoint/10-q); [guptadeepak blog](https://guptadeepak.com/identity-giants-bought-ai-agent-security/) |

**B. 2026 deals without a filed figure (buyer is private, filing not yet due, or deal not material)**

| # | Deal | Price | Source type | Announced / closed | Age | Headcount | Source seen (via search extract) |
|---|---|---|---|---|---|---|---|
| 15 | Cisco → Astrix Security | ~$400M "final price" (Calcalist); $250–350M during talks (The Information); Cisco did not disclose | R | Ann. 4 May 2026. **Close date conflicting**: Calcalist (4 May) says Cisco announced "completion"; Start with Identity says it closed **29 Jun 2026**. No Cisco completion PR found | Prior notes: 2021 (~5y) | Prior notes: 80–121 | [CTech](https://www.calcalistech.com/ctechnews/article/dy5obf581); [Security Boulevard](https://securityboulevard.com/2026/05/cisco-fortifies-ai-defenses-with-acquisition-of-astrix-security/); [Start with Identity](https://startwithidentity.com/blog/2026-05-04-cisco-announces-intent-to-acquire-astrix-security/); [Cisco 10-K FY2026](https://www.sec.gov/Archives/edgar/data/0000858877/000085887726000132/csco-20260725.htm) (excerpt does not name Astrix) |
| 16 | Workday → C1.ai (ex-ConductorOne) | Undisclosed | B | Definitive agreement **13 Oct 2026** (Workday Rising); close expected in Workday's fiscal Q4 FY2027 (ends 31 Jan 2027). **Not closed** | n/v | n/v | [Workday PR](https://newsroom.workday.com/2026-10-13-Workday-to-Acquire-C1-ai,-a-Leading-Agentic-Identity-Platform-for-People-and-Agents); [Orrick](https://www.orrick.com/en/News/2026/10/Workday-to-Acquire-C1-ai-a-Leading-Agentic-Identity-Platform) |
| 17 | Cyera → Oasis Security | **$1B** (Cyera confirmed the value to SecurityWeek per search summary); ~$700M cash + rest stock (Calcalist, not official) | B/R | LOI 28 Jul 2026 → **completed 3 Sep 2026** (Cyera PR / BusinessWire). This **resolves** the open question in prior notes | n/v | n/v | [Cyera PR](https://www.cyera.com/press-releases/cyera-completes-acquisition-of-oasis-security); [BusinessWire](https://www.businesswire.com/news/home/20260903933820/en/Cyera-Completes-Acquisition-of-Oasis-Security); [CTech](https://www.calcalistech.com/ctechnews/article/8115vtsb5) |
| 18 | Okta → Permiso Security | "Just under $200M", almost all cash (**TechCrunch**, citing a person with knowledge; Okta spokesperson "did not dispute"). Prior notes credited this to BetaNews | R | Signed 30 Jul 2026; **closed 26 Aug 2026** (Okta 10-Q Jul-2026, subsequent-events note; consideration "not yet final", no number) | n/v | n/v | [Okta 10-Q Jul-2026](https://www.sec.gov/Archives/edgar/data/0001660134/000166013426000069/okta-20260731.htm); [TechCrunch](https://techcrunch.com/?p=3148308) |
| 19 | 1Password → Apono | ~$250–300M (R, prior notes) | R | Jun 2026 | not re-verified this pass | 80 (prior notes) | not re-checked |
| 20 | Cyera → Ryft | $100–130M estimate (Calcalist); not officially disclosed | R | ~late Apr 2026 (exact date unclear) | Founded 2024 → **~2y** | **~15**, mostly Israel | [CTech](https://www.calcalistech.com/ctechnews/article/rjni88wawl); [Futurum](https://futurumgroup.com/insights/cyeras-platform-ambition-takes-shape-with-two-more-acquisitions/) |
| 21 | Cyera → Genie Security | ~$50M estimate (Calcalist) | R | ~20 May 2026 | **~5 months** (founded late 2025) | **5** | [CTech](https://www.calcalistech.com/ctechnews/article/hke7g7jjfl); [Ynet](https://www.ynetnews.com/business/article/byjivdjkfg) |
| 22 | Check Point → Cyata (with Cyclops, Rotate) | Cyata alone undisclosed; >$150M for all three (Globes) | R | Feb 2026 (with FY2025 results) | Founded 2024 → ~1.5–2y | n/v | [Globes](https://en.globes.co.il/en/article-check-point-buys-3-israeli-startups-for-over-150m-1001534878); [Times of Israel](https://www.timesofisrael.com/check-point-snaps-up-three-israeli-startups-to-bolster-its-ai-security-arsenal/) |
| 23 | Silverfort → Fabrix Security | Undisclosed; "tens of millions" (Calcalist estimate) | B (deal) / R (price) | 28 Apr 2026 | ~1y (CTech headline "one-year-old") | **14** (single secondary source) | [Silverfort PR](https://www.prnewswire.co.uk/news-releases/silverfort-acquires-fabrix-security-to-deliver-autonomous-runtime-identity-security-for-the-ai-era-302755002.html); [CTech](https://www.calcalistech.com/ctechnews/article/sjht00x0awx); [SiliconANGLE](https://siliconangle.com/2026/04/28/silverfort-acquires-fabrix-security-bring-ai-decisioning-runtime-access-control/) |
| 24 | Upwind → Aegis | ~$30M all-stock (Globes estimate; market range $25–50M); undisclosed | R | 23 Sep 2026 | **~9 months** (founded early 2026) | **12** (to grow to ~25) | [The Next Web](https://thenextweb.com/news/upwind-acquires-aegis-ai-security-labs); [Beri](https://www.beri.net/article/upwind-aegis-acquisition-ai-security-labs-agent-plugin-secret-scanning-roadmap-not-sku); [Beinsure](https://beinsure.com/news/upwind-acquires-aegis-and-launches-ai-labs-for-cybersecurity/) |
| 25 | Temporal (team) + Tiny (product) → Oso | Undisclosed | B | Tiny deal closed 1 Oct 2026 (GitHub note); announced 6 Oct 2026 | n/v | "Most of" the Oso team; no number | [Oso blog](https://www.osohq.com/post/oso-has-been-acquired-by-tiny); [Temporal blog](https://temporal.io/blog/oso-security-joins-temporal-accelerate-ai-agent-security) |

**Corrections to prior notes (`에이전트 권한 감사 경쟁 분석/ai_security_ma.md`)**
- **Koi:** prior "~$400M [REPORTED]" → **$231M filed** + $61M replacement awards outside the purchase price ([PANW 10-K](https://www.sec.gov/Archives/edgar/data/0001327567/000132756726000023/panw-20260731.htm)).
- **Portkey:** prior "$120–140M [REPORTED]" → **$117M filed** + $2M awards.
- **Natoma:** prior "~$110M" → **$128.3M filed** (+ $54.4M employee stock). Founded 2024, 27 staff, $7M seed (single report).
- **Oasis:** prior "LOI / closing unconfirmed" → **closed 3 Sep 2026** per Cyera's press release.
- **Permiso:** the price source is TechCrunch, not BetaNews. The 26 Aug 2026 close is confirmed by Okta's 10-Q.
- **LayerX:** now also confirmed in a filing, Akamai's 10-Q (closed Jul 2026).
- **Entro $122.6M:** downgrade from "[FILED]" to "filed figure claimed, not re-verified".
- **Pangea:** the ~$222.7M total ties exactly to the 10-Q allocation (13.2 + 209.9 − 0.4).
- **SGNL:** the ~$637.1M total ties exactly to the allocation (87.9 + 561.1 − 11.9).

### Inferences
- The "press vs filed" gap has three distinct causes:
  - (a) Press over-estimation, e.g. Apex: $100–105M vs $47.8M.
  - (b) Retention or replacement equity booked as compensation, not as purchase price. Koi's $231M + $61M = $292M; Natoma's $128.3M + $54.4M = $182.7M; SPLX's $40.6M + $16.6M = $57.2M. Headline numbers often blend these in.
  - (c) Net-of-cash presentation, e.g. Stytch's $104.1M gross vs $58.5M net.

  When comparing to a 3-person team's possible exit, the founder-relevant number is roughly **purchase price + retention pool**. The purchase price alone goes mostly to shareholders. The retention pool goes to the people who stay.
- Zscaler re-valuing SPLX's technology at **replacement cost ($3.3M)** shows how a buyer may value the code of a small AI-security startup in accounting: roughly what it would cost to rebuild. Almost all of the $40.6M went to goodwill, meaning team, time-to-market and customers.
- Cisco's FY2026 10-K excerpt reportedly showed only **~$350M of total goodwill across all FY2026 acquisitions**. If that is accurate, it sits uneasily with a $400M Astrix price, since goodwill is usually 70–90% of price in these deals. This is low-confidence: the excerpt was thin and it is unclear which acquisitions or periods it covered.

### Gaps
- None of the SEC documents was opened directly (sec.gov blocked). The full business-combination notes should be re-read once www.sec.gov is allowed, especially:
  - SailPoint's Jul-2026 10-Q (Entro);
  - Cisco's FY2026 10-K (Astrix line item, if one is broken out);
  - Okta's Oct-2026 10-Q, not yet filed (Permiso);
  - Workday's filings (C1.ai, not yet closed).
- news.crunchbase.com could not be reached (DNS refused). No Crunchbase News figures were used.
- The Astrix close date is unresolved: 4 May vs 29 Jun 2026.
- Founding year and headcount not verified in this pass for: Apex, CalypsoAI, Pangea, SGNL, Stytch, LayerX, Permiso, Oasis, C1.

---

## Q2. Recomputed medians

### Takeaway
Using the best available figure per deal (filed where it exists), the **median across 21 priced deals is $145.2M**, which is CalypsoAI. Prior notes said ≈$195M. The drop is mainly because Koi ($400M → $231M) and Portkey moved to filed figures and the set changed. For the 12 deals that have both a press figure and a filed figure, **the median press price is ~$202.5M, while the median filed price is ~$152.7M (~25% lower)**. The median per-deal haircut is **about −16.5%**. Small deals (<$60M) have a **median of $47.8M**.

### Cited Findings
- **All 21 priced deals, best figure in $M, sorted** (sources in Q1 table):
  30 (Aegis R), 40.6 (SPLX F), 47.8 (Apex F), 50 (Genie R), 54 (Axiom F), 104.1 (Stytch F), 115 (Ryft R midpoint), 117 (Portkey F), 122.6 (Entro F-claimed), 128.3 (Natoma F), **145.2 (CalypsoAI F) ← median (11th of 21)**, 160.2 (Prompt F), 195 (Permiso R), 205 (LayerX F), 222.7 (Pangea F), 231 (Koi F), 275 (Apono R midpoint), 400 (Astrix R), 637.1 (SGNL F), 1,000 (Oasis B), 1,200 (Veza F).
- **Filed-only subset (14 deals, including Entro):** 40.6, 47.8, 54, 104.1, 117, 122.6, 128.3, 145.2, 160.2, 205, 222.7, 231, 637.1, 1,200 → **median = (128.3 + 145.2)/2 = $136.8M**. Without Entro (13 deals) the median is $145.2M.
- **Press vs filed for the same 12 deals** (press midpoints used):

| Deal | Press | Filed | Change |
|---|---|---|---|
| Apex | 102.5 | 47.8 | −53% |
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
| Veza | ~1,000 ("over $1B") | 1,200 | +20% |
| **Median** | **202.5** | **152.7** | **≈ −16.5%** |

- **Including retention or replacement equity** (Koi 292, Natoma 182.7, SPLX 57.2, Portkey 119, Entro ≤129.9): the median of all 21 stays at $145.2M (CalypsoAI). The small-deal median rises to ~$50M.
- **Small priced deals (<$60M): Aegis 30, SPLX 40.6, Apex 47.8, Genie 50, Axiom 54 → median $47.8M.** Three of the five are filed figures.
- **Age at deal** (verified this pass): Genie ~5 months, Aegis ~9 months, Fabrix ~1y, Cyata ~1.5–2y, Prompt ~2y, Koi ~2y, Ryft ~2y, Natoma ~2y, Portkey ~3y, Axiom ~4y. **Median ≈ 2 years** for these 10.
- **Headcount** (verified this pass): Genie 5, Aegis 12, Fabrix 14, Ryft 15, Natoma 27, Axiom <30, Prompt ~50, Koi 60 or 102. **Median ≈ 15–27.**

### Inferences
- Using filed figures lowers the "typical" AI-security exit to roughly **$130–150M**, from the ~$200M implied by headlines. For planning, treat any Calcalist or Globes headline price as an upper bound. Filed totals came in **10–50% lower in 9 of the 12 comparable deals**.
- Filed figures are biased toward public buyers and toward larger, material deals. The small deals (Genie, Aegis, Fabrix, Ryft, Cyata) were all bought by private buyers (Cyera, Upwind, Silverfort) or bundled (Check Point), so their prices remain press estimates.

### Gaps
- Medians mix filed and reported figures. The Astrix, Apono, Ryft, Genie and Aegis values have no filing check.
- Under 2 years old, there are 6 data points with any price, which is too few for a robust small-deal median.

---

## Q3. Momentum Cyber market statistics

### Takeaway
**"40 AI-security M&A deals in 2026 through Q3 vs 10 in all of 2025" is confirmed** in Momentum Cyber's own Q3 2026 release (GlobeNewswire, 1 Oct 2026). **H1 2026 disclosed value of $9.1B is confirmed** from Momentum's mid-year release. **The $38.3B H1 2025 comparison** appears only through an Axios Pro Deals article citing Momentum's data, so it is secondary but consistent.

### Cited Findings
- **Q3 2026 release:**
  - 336 M&A transactions and 564 financing rounds through Q3 2026; $15.4B disclosed M&A value.
  - **40 AI-security M&A transactions in 2026 vs 10 in all of 2025.**
  - 142 AI-security financing rounds; strategic buyers deployed 92% of M&A capital; megadeals less frequent.

  Sources: [GlobeNewswire](https://www.globenewswire.com/news-release/2026/10/01/3373122/0/en/momentum-cyber-releases-q3-2026-cybersecurity-market-review-ai-reshapes-cybersecurity-economics-as-m-a-activity-reaches-record-pace.html); [Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/momentum-cyber-releases-q3-2026-150000718.html); [Dark Reading](https://www.darkreading.com/cybersecurity-analytics/ai-scramble-cybersecurity-ma-boom).
- **H1 2026:**
  - Record 219 M&A transactions; **$9.1B disclosed value**. The H1 report PDF attributes the $9.1B to only **36 deals with disclosed value**.
  - Largest deal: Accenture's $4.175B purchase of Dragos/NetRise/runZero.
  - $7.5B financing across 383 deals, 40% to AI security.

  Sources: [Momentum release](https://momentumcyber.com/momentum-cyber-mid-year-2026-review-cybersecurity-ma-on-track-for-highest-deal/); [H1 2026 PDF](https://momentumcyber.com/wp-content/uploads/2026/07/Momentum-Cyber-Cybersecurity-Market-Review-H1-2026.pdf).
- **H1 2025 = $38.3B:** cited by Axios Pro Deals in its piece on the Momentum H1 2026 data ("less than a quarter of the $38.3 billion recorded in H1 2025"). H1 2026's 219 deals were up 3% from H1 2025. Seen only as a search extract; the Axios URL was not returned ([search-surfaced via Momentum mid-year coverage](https://smb.irontontribune.com/article/Momentum-Cyber-Mid-Year-2026-Review-Cybersecurity-MandampA-on-Track-for-Highest-Deal-Count-Ever-Tracked/6a45554d30a7fb1fc5b9097e)).

### Inferences
- Deal count rising 4x while disclosed value collapses fits the pattern in Q1: many tuck-ins at tens of millions to ~$200M with undisclosed terms. Only 36 of 219 H1 deals disclosed a value.

### Gaps
- Momentum's definition of an "AI Security" deal is not public in the extracts, so its 40 deals cannot be mapped to the table above.
- No original Momentum H1 2025 report was found to confirm $38.3B first-hand.

---

## Q4. Comparable small exits (<$60M, <30 staff, or <2 years old) and lessons for a 3-person team

### Takeaway
Seven deals are realistic comparables:
- **Genie** (5 people, 5 months, ~$50M)
- **Aegis** (12 people, 9 months, ~$30M stock, no customers)
- **Fabrix** (14 people, ~1y, "tens of millions")
- **Ryft** (15 people, ~2y, $100–130M)
- **SPLX** ($40.6M cash + $16.6M retention, filed)
- **Apex** ($47.8M filed)
- **Axiom** ($54M filed, <30 staff)

**Natoma** (27 people, ~2y, $128M + $54M retention, filed) is the upside case. Almost every one had a **pre-existing relationship with the buyer**: an ex-employee founder, a partnership, investor overlap, or the buyer's own acquisition spree. Most were Israeli Unit-8200 or ex-big-tech teams.

### Cited Findings
- **Cyera → Genie Security** (~May 2026, ~$50M est.).
  - Founders Nadav Noy (CEO, 30) and Noam Dotan (CTO, 31).
  - 5 employees; ~5 months old; ~$3M seed from Mensch Capital and Dynamic Loop.
  - Endpoint data-loss protection running on "hundreds of endpoints" in Israel and the US.
  - Team joined Cyera's DLP group. Cyera was "in the midst of an aggressive acquisition spree" and was valued at $9B at the time.
  - Sources: [CTech](https://www.calcalistech.com/ctechnews/article/hke7g7jjfl); [Ynet](https://www.ynetnews.com/business/article/byjivdjkfg).
- **Upwind → Aegis** (23 Sep 2026, ~$30M all-stock per Globes, range $25–50M).
  - Founded early 2026 by Omri Limor and Saar Ankonina (Unit 8200).
  - 12 people; **no customers or revenue** (Globes via Beri).
  - **Aegis first approached Upwind about a partnership and possible investment. After several months of working together, Upwind chose to acquire.**
  - Founders now lead "Upwind AI Security Labs" (agents, skills, plugins, secret scanning).
  - Sources: [The Next Web](https://thenextweb.com/news/upwind-acquires-aegis-ai-security-labs); [Beri](https://www.beri.net/article/upwind-aegis-acquisition-ai-security-labs-agent-plugin-secret-scanning-roadmap-not-sku); [Beinsure](https://beinsure.com/news/upwind-acquires-aegis-and-launches-ai-labs-for-cybersecurity/).
- **Silverfort → Fabrix Security** (28 Apr 2026).
  - CEO Raz Rotenberg; founders from Run:ai and Microsoft; 14 employees joined Silverfort's ~600.
  - Product: an identity knowledge graph plus AI agents that decide access at runtime, merged into Silverfort's Runtime Access Protection. This was Silverfort's second acquisition, after Rezonate.
  - Price "tens of millions" (estimate). The $8M seed with Norwest in prior notes was **not re-confirmed** in this pass.
  - Sources: [CTech](https://www.calcalistech.com/ctechnews/article/sjht00x0awx); [SiliconANGLE](https://siliconangle.com/2026/04/28/silverfort-acquires-fabrix-security-bring-ai-decisioning-runtime-access-control/); [DBTA](https://www.dbta.com/Editorial/News-Flashes/Silverfort-to-Acquire-Fabrix-Security-Aims-to-Reshape-the-Identity-Security-Space-174620.aspx).
- **Cyera → Ryft** (~Apr 2026, $100–130M est.).
  - Founded 2024 by Yossi Reitblat (CEO), Yuval Yogev (CTO) and Guy Gadon (VP R&D).
  - ~15 staff, mostly Israel; raised only ~$8M (≈12–16x capital).
  - Product: a data access layer for AI agents. Reitblat now leads Cyera's AI security division.
  - Sources: [CTech](https://www.calcalistech.com/ctechnews/article/rjni88wawl); [Futurum](https://futurumgroup.com/insights/cyeras-platform-ambition-takes-shape-with-two-more-acquisitions/).
- **Zscaler → SPLX** (closed 31 Oct 2025, $40.6M cash filed + $16.6M restricted stock).
  - Co-founders Kristian Kamber (CEO) and Ante Gojsalić. Engineering team in Split, Croatia; US HQ.
  - ~$7M seed; LAUNCHub Ventures exited.
  - **Kamber was a Zscaler Regional Director from Jun 2022 to Apr 2024**, so he founded SPLX straight out of the eventual buyer.
  - Product: AI red-teaming and guardrails.
  - Sources: [ZS 10-Q](https://www.sec.gov/Archives/edgar/data/1713683/000171368326000048/zs-20260131.htm); [Crunchbase person](https://www.crunchbase.com/person/kristian-kamber); [The Recursive](https://www.therecursive.com/zscaler-acquires-splxai-for-advanced-llm-security-and-ai-governance/); [SPLX blog](https://splx.ai/blog/zscaler-acquires-splx).
- **Tenable → Apex Security** (closed Jun 2025, $47.8M filed).
  - Founders Matan Derman (CEO) and Tomer Avni (CPO).
  - Seed co-led by **Sequoia and Index Ventures**, with angels **Sam Altman** and Clem Delangue. Seed size $7M (Globes) or $8.6M (Calcalist).
  - Press said $100–105M; the filing says $47.8M.
  - Sources: [Tenable 10-K](https://www.sec.gov/Archives/edgar/data/1660280/000166028026000005/tenb-20251231.htm); [CTech](https://www.calcalistech.com/ctechnews/article/6wcqhdv35); [Globes](https://www.globes.co.il/news/article.aspx?did=1001511715).
- **Okta → Axiom Security** (closed 4 Sep 2025, $54M cash filed).
  - Founded 2021 by Itay Mesika and Ilan Dardik (met in Israeli Air Force service).
  - Raised $10M, including a $7M seed led by S Capital; "<30 employees".
  - Staff folded into Okta's Israel R&D centre, which was created through the earlier Spera buy. Product: cloud JIT privileged access.
  - Sources: [Okta 10-K](https://www.sec.gov/Archives/edgar/data/1660134/000166013426000020/okta-20260131.htm); [CTech](https://www.calcalistech.com/ctechnews/article/ryzs3xstgl); [Ynet](https://www.ynetnews.com/business/article/skd50m2fee).
- **Snowflake → Natoma** (closed 3 Jun 2026).
  - $128.3M filed, mostly stock ($110.5M), plus $54.4M employee vesting shares.
  - Founded 2024; 27 employees; $7M seed (single report).
  - Product: MCP and agent governance.
  - Sources: [SNOW 10-Q](https://www.sec.gov/Archives/edgar/data/0001640147/000164014726000037/snow-20260731.htm); [IT Brief](https://itbrief.co.uk/story/snowflake-buys-natoma-deepens-aws-tie-with-usd-6bn).
- **Check Point → Cyata** (Feb 2026, price undisclosed).
  - Founded 2024 by CEO **Shahar Tal, formerly of Check Point**, with Baruch Weitzman and Dror Roth.
  - Product: discovers every AI agent, explains what each did and why, and enforces policy. This is the closest product match to "agent permission and audit".
  - Sources: [Globes](https://en.globes.co.il/en/article-check-point-buys-3-israeli-startups-for-over-150m-1001534878); [Times of Israel](https://www.timesofisrael.com/check-point-snaps-up-three-israeli-startups-to-bolster-its-ai-security-arsenal/).
- **Temporal + Tiny → Oso** (Oct 2026).
  - The team went to Temporal (~570 staff) to build agent authorization; the Oso Cloud product and customers went to holding company Tiny.
  - Founder Graham Neray; NYC.
  - Sources: [Oso](https://www.osohq.com/post/oso-has-been-acquired-by-tiny); [Temporal](https://temporal.io/blog/oso-security-joins-temporal-accelerate-ai-agent-security).
- **Upper-mid context:**
  - **Koi:** grew out of founders' published research on a VSCode Marketplace security gap; ex-8200 / Sygnia / Zscaler founders; $48M raised. Most employees beyond the first ~10 had no options when it sold ([CTech](https://www.calcalistech.com/ctechnews/article/skmxgutuwx); [Globes](https://en.globes.co.il/en/article-palo-alto-networks-to-buy-israeli-co-koi-security-1001535257)).
  - **Prompt:** Okta and F5 were investors ([Calcalist via search](https://www.calcalistech.com/ctechnews/article/te0d99mpu)).

### Inferences (lessons for a 3-person team)
1. **Realistic price band.** For a <15-person, <18-month team, the observed band is **~$30–60M**, mostly stock or with heavy retention (Aegis, Genie, SPLX, Apex, Axiom). Ryft ($100–130M with 15 people) and Natoma ($128M + $54M with 27 people) are outliers. Both had a product sitting on a buyer's urgent roadmap: AI data access and MCP governance. Plan on the lower band and treat headlines as ceilings: Apex's filing was less than half its press price.
2. **Relationship before transaction.** Each small exit had a visible pre-deal channel:
   - founder who worked at the buyer (SPLX → Zscaler; Cyata's CEO ex-Check Point);
   - partnership first (Aegis approached Upwind for partnership or investment, then was bought months later);
   - investor or customer overlap (Okta and F5 invested in Prompt; prior notes say CrowdStrike invested in Pangea);
   - public research that got noticed (Koi's VSCode Marketplace finding).

   For a 3-person team, the practical step is a **design-partner or integration relationship with 2–3 named likely buyers** early on. Good candidates are identity platforms that lack an agent-authorization or audit layer.
3. **Buyers on a spree pay for speed, not revenue.** Aegis had no customers. Genie was 5 months old. SPLX's code was booked at a $3.3M replacement cost against a $40.6M price. What buyers are paying for is a credible team that cuts 6–12 months off a roadmap item. Cyera made 5+ acquisitions in months, and Palo Alto Networks, Check Point and Cisco are serial acquirers.
4. **Retention equity is the founders' real pay.** Retention pools of $16.6M (SPLX), $54.4M (Natoma) and $61M (Koi) sit outside the price. For a founder-heavy 3-person cap table, the price and the retention package should be negotiated together. Koi also shows the employee-option risk of selling early.
5. **Profile bias.** Nearly every small comparable is Israeli, often 8200 or ex-big-tech, and backed by tier-1 seed investors: Sequoia/Index for Apex, Norwest (prior notes) for Fabrix. SPLX (a Croatian team with a US HQ and an ex-Zscaler CEO) is the main non-Israeli small exit. It shows that **a founder link inside the buyer** can stand in for the Israeli network.
6. **Product fit is narrowing toward the agent layer.** Cyata (agent discovery, audit and policy), Fabrix (runtime authorization), Oso (agent authorization in execution), Natoma (MCP governance) and Portkey (AI gateway) were all bought in 2026. These are the closest direct comparables for "agent permission and audit". The NHI independents have mostly been absorbed: Astrix, Entro, Oasis, Permiso, Veza, SGNL, C1, Apono. Future small deals will likely be capability tuck-ins into those buyers or into those that missed out.

### Gaps
- Exact prices for Fabrix, Cyata and Oso are undisclosed. The Genie, Aegis and Ryft prices are single-outlet estimates (Calcalist or Globes) with no buyer confirmation.
- How the buyer first noticed the target is documented only for Aegis (partnership-first), SPLX (ex-employee founder, inferred from the CEO's LinkedIn/Crunchbase history) and Koi (research). For Genie, Fabrix, Ryft, Apex and Axiom no source describes the origin of the deal.
- Headcount for SPLX, Apex and Portkey is not found. Natoma's 27 staff and $7M seed come from one report.
- No non-Israeli, non-US small (<$60M) agent-security exit was found apart from SPLX (Croatia). There is no Korean comparable in this set.
