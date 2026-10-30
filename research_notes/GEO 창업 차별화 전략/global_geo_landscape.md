# Global GEO / AEO Startup and Tool Landscape (as of 2026-10-30)

Source-handling legend: **[opened]** means the page was fetched and read directly in this session (via curl text extraction, because WebFetch could not resolve most hosts). **[snippet]** means the fact comes only from search-result snippets or summaries and was not verified on the page itself. Where a secondary source (such as Value Add VC) cites a primary outlet (TechCrunch, Fortune, Adweek), the secondary page is the one I opened, and the primary outlet is named.

---

## Q1. Who are the players and how does the market segment?

### Takeaway
The market has split into roughly seven layers:
1. A capital-heavy enterprise tier: Profound (~$335M raised, $1.8B valuation), Bluefish, Brandlight and Evertune. These vendors are moving from dashboards to "agentic marketing" and AI ads.
2. A crowded self-serve monitoring tier priced at $29–$600/month: Peec, Otterly, Rankscale, Knowatoa, Promptwatch, Trakkr, Searchable and others.
3. SEO and DXP incumbents that have bundled GEO. Adobe has absorbed Semrush, and Sitecore has absorbed Scrunch.
4. Content and action layers: AirOps, Writesonic, Gauge, Sitefire and Goodie.
5. Crawler and agent infrastructure: Cloudflare, Scrunch AXP and TollBit.
6. An emerging agentic-commerce layer: Wildcard, plus Goodie and Profound shopping modules.
7. A newer YC wave aimed at "discovered and used by AI agents" (Prompting Company, Scope, Armature, Sitefire).

### Cited Findings

**Market-level funding and consolidation**
- Value Add VC counted about $619M of disclosed funding across 10 GEO/AEO startups as of Oct 16, 2026. Profound holds about $335M of it, roughly 55%. **[opened]** — [Value Add VC, Oct 16 2026](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Note: the page title and search snippet say "$604M", while the body says "$619M". The page was evidently updated, so use ~$604–619M.
- Funding is accelerating: 19 dated rounds total about $576M, with $178M in all of 2025 and $375M in Q1–Q3 2026. Profound's Series C and Series D make up $276M of the 2026 total. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- No lead investor appears in two of these companies. "Each top-tier firm has made one bet on the category." Strategic investors are arriving: Salesforce Ventures and Amex Ventures in Bluefish, and Sitecore as Scrunch's buyer. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- Value Add VC's opinion: GEO is "splitting into two businesses." One is enterprise (Profound, Bluefish, Brandlight) moving to agents. The other is price and self-serve volume (Peec, Otterly, Searchable). "The middle, a monitoring dashboard with neither enterprise depth nor a low price, looks like the place a company gets acquired from." **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- Everything-PR, a PR-agency-owned outlet, counts "$300M+ across roughly two dozen startups in eighteen months." It predicts an incumbent buying a funded pure-play within 12 months, naming Adobe, Salesforce, HubSpot and Semrush as likely acquirers. It also flags a structural risk: if AI platforms offer native "Search Console"-style visibility analytics, third-party measurement gets squeezed. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- PR-side M&A: in June 2026 the London luxury PR firm Mazarine acquired Bacchus and named GEO as the reason. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)

**Exits and acquisitions**
- **Sitecore acquired Scrunch** (press release June 3, 2026).
  - Bloomberg reported the deal at about $225M, as cited by Adweek and MediaCopilot. Neither company confirmed the price.
  - Scrunch had raised about $26M, including a $15M Series A led by Decibel with Mayfield and Homebrew. That is roughly 8.7x capital returned, per Value Add VC's arithmetic.
  - Named Scrunch clients: Lenovo, Skims, Headspace and Penn State.
  - **[opened]** — [MediaCopilot](https://mediacopilot.ai/sitecore-acquires-scrunch-geo-startup-225m/); [Shopifreaks, Jun 5 2026](https://www.shopifreaks.com/sitecore-buys-ai-visibility-startup-scrunch-in-a-deal-reportedly-worth-up-to-225m-to-help-brands-get-found-and-cited-by-ai-agents/); [Sitecore press release](https://www.sitecore.com/de-de/company/newsroom/press-releases/2026/06/sitecore-acquires-scrunch-to-help-brands-influence-discovery--and-buying-decisions) [snippet]
- Scrunch's own FAQ says Sitecore "has $1.23 billion in funding and has surpassed $500 million in ARR." **[opened]** — [Scrunch FAQ](https://scrunch.com/faqs/what-are-the-most-well-funded-ai-visibility-startups-for-aeo-geo-monitoring)
- **Adobe acquired Semrush.** The deal was announced Nov 19, 2025 at about $1.9B ($12/share) and closed around Apr 28, 2026. Semrush is being folded into Adobe "CX Enterprise." **[snippet]** — [Semrush customer FAQ](https://www.semrush.com/news/455963-faq-for-customers-adobe-acquires-semrush/); [Cyprus Mail](https://cyprus-mail.com/2025/11/21/adobe-agrees-to-buy-digital-marketing-firm-semrush-for-1-9bn); [Shopifreaks](https://www.shopifreaks.com/adobe-acquires-semrush-to-extend-brand-visibility-into-ai-search-and-agentic-discovery-within-cx-enterprise/)
  - One outlier source says $1.5B. Treat ~$1.9B as the consensus.
- Conductor acquired Searchmetrics to position itself as a unified traditional-plus-generative platform. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)

**Segment map**

| Segment | Players (evidence) |
|---|---|
| Enterprise visibility and agentic marketing | Profound, Bluefish, Brandlight, Evertune, Scrunch (now Sitecore), AthenaHQ (enterprise tier), Daydream (agency-plus-software hybrid) |
| SMB / self-serve monitoring | Peec AI, Otterly.ai, Rankscale, Knowatoa, Promptwatch, Trakkr, Searchable, Am I On AI, Goodie (Core tier), LLM Pulse, Siftly |
| SEO / DXP incumbents | Semrush (Adobe), Ahrefs Brand Radar, Conductor, BrightEdge AI Catalyst, Adobe LLM Optimizer, HubSpot AEO Grader plus a $50/mo module, Sitecore (Scrunch), Similarweb, seoClarity, Yext, G2 (AI performance analytics) |
| Content / action layer | AirOps, Writesonic, Gauge, Sitefire, Goodie, Profound Agents, Evertune agentic workflows, Trakkr Managed |
| Crawler / agent infrastructure | Cloudflare (AI Crawl Control → Pay Per Use, Attribution Business Insights), Scrunch AXP / Agent Pages, TollBit, Profound and Otterly "Agent Analytics" |
| Agentic commerce | Wildcard (YC W25), Goodie Agentic Commerce Suite, Scrunch Shopping, Profound ChatGPT Shopping, Writesonic "Shopping & Agentic Commerce", Bluefish (Alexa for Shopping) |
| "Discovered and used by agents" (newer YC) | The Prompting Company (S25), Sitefire (W26), Scope (Spring 2026), Armature (Spring 2026) |

**Incumbent moves**
- **Ahrefs** launched Brand Radar in 2025 at $199/month per index. CMO Tim Soulo published a March 2026 Medium post arguing Brand Radar beats Peec AI and that prompt tracking is "table stakes, easily built." **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
  - Soulo's Medium post itself was blocked by Cloudflare: [Medium](https://medium.com/@timsoulo/peec-ai-alternatives-why-i-think-ahrefs-brand-radar-is-the-better-choice-acf828b79cc9)
- **Ahrefs Brand Radar page:** Prompt Tracking "starts at $50/mo" and is tied to the Lite plan and above. The AI Visibility Index covers 516 million prompts and starts at $199/mo. **[opened]** — [Ahrefs Brand Radar](https://ahrefs.com/brand-radar)
- **Semrush pricing page:** the SEO plan is $139/mo. The "SEO + AI Search" Starter is $199/mo ($165.17 billed annually) and includes AI visibility reports, AI sentiment and custom-prompt monitoring. Semrush also sells Semrush One, an Enterprise plan and Semrush MCP. **[opened]** — [Semrush prices](https://www.semrush.com/prices/); [Semrush AI Visibility Toolkit KB](https://www.semrush.com/kb/1493-ai-toolkit)
- Semrush offers "direct data integration with Profound Agents," which reads as coexistence rather than head-to-head competition. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- **Other incumbents** **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions):
  - BrightEdge extended DataMind with an "AI Catalyst" module.
  - Adobe launched LLM Optimizer.
  - HubSpot offers a free AEO Grader plus a $50/month monitoring module.
  - Conductor serves Citibank, Visa and Zoom.
- G2 launched "AI-powered performance analytics" to turn AI search visibility into pipeline. **[snippet]** — [G2 press](https://company.g2.com/news/g2-launches-new-ai-powered-performance-analytics-to-turn-ai-search-visibility-into-increased-pipeline)

**YC GEO companies (2024–2026 batches)**
YC pages were opened directly. Team sizes come from the yc-oss mirror of YC directory data (https://yc-oss.github.io/api/companies/all.json).
- **AthenaHQ** (Winter 2025, team 12): "AI SEO across SEO, GEO & AEO." The founders are Andrew, an ex-PM on Google Search's information acquisition team who also worked at DeepMind, and Alan. **[opened]** — [YC AthenaHQ](https://www.ycombinator.com/companies/athenahq)
- **Wildcard** (Winter 2025): "AEO/GEO for E-Commerce and Retail." **[opened]** — [YC Wildcard](https://www.ycombinator.com/companies/wildcard)
  - It covers ChatGPT, Google AIO, Gemini, Amazon Rufus/Alexa and Walmart Sparky, and supports ACP and UCP.
  - Its pitch: "A brand and retailer's unit of AEO is the catalog, not a homepage."
  - It claims 20+ brands live and "5X increase in AI search revenue after 30 days" (self-reported).
  - The founder is an ex-Scale AI engineering manager who built an e-commerce enrichment engine (2.4M attributes across 400K SKUs).
- **The Prompting Company** (Summer 2025, team 7): "We help products get discovered & used by AI agents." It covers both discovery and agent usability testing. A TechCrunch headline on its YC page says it "snags $6.5M." **[opened]** — [YC The Prompting Company](https://www.ycombinator.com/companies/the-prompting-company)
- **Sitefire** (Winter 2026, team 2, Munich): "Marketing suite for the agentic web." **[opened]** — [YC Sitefire](https://www.ycombinator.com/companies/sitefire)
  - It analyzes query fan-out, sourced pages and cited pages, then recommends third-party and UGC outreach (YouTube, Reddit).
  - It writes AI-optimized posts delivered straight into the CMS.
  - It claims BMW, Xtrackers and DWS as customers.
- **Scope** (Spring 2026, team 2): "We help software companies get discovered and used by AI agents." **[yc-oss data]** — [YC Scope](https://www.ycombinator.com/companies/scope)
- **Armature** (Spring 2026, team 3): "We get your product picked by coding agents." **[yc-oss data]** — [YC Armature](https://www.ycombinator.com/companies/armature)
- **Cheers** (Summer 2024, team 5): "Helping AI choose the best local business." **[yc-oss data]** — [YC Cheers](https://www.ycombinator.com/companies/cheers)
- **Tell if AI** (Fall 2025, team 2): "AI agents on real phones, growing brands across every platform." **[yc-oss data]**
- **Siftly** (YC; Indian founders, one ex-Microsoft and Flipkart): "Get your brand discovered and recommended by ChatGPT," for B2B, B2C, D2C and e-commerce. **[opened]** — [YC Siftly](https://www.ycombinator.com/companies/siftly)
  - A snippet says W22, so this is likely a pivot.
- **Writesonic** (an older YC company) has repositioned as a GEO platform. **[snippet]** — [YC Writesonic](https://www.ycombinator.com/companies/writesonic)
- A secondary blog also lists Bear, Mimos, Relixir, Anvil, Unusual and Riveter AI as YC GEO companies. These are unverified. **[snippet]** — [AdMesh blog](https://useadmesh.com/blog/why-y-combinator-is-betting-big-on-geo-and-what-it-means-for-admesh/)

### Inferences
- The newest YC GEO bets (2026 batches) are not "monitoring." They are "agents choose you": coding agents picking a dev tool, software being usable by agents, and products being purchasable by agents. This suggests YC partners see classic brand-mention tracking as saturated.
- Two exits so far (Scrunch to Sitecore, Semrush to Adobe) were both bought by content and DXP platforms that wanted an "act on it" layer. That is the most plausible acquirer profile for a 2–3 year exit: CMS, DXP, commerce platform, SEO suite or agency holdco.

### Gaps
- I could not run a full YC directory search programmatically (Algolia query blocked), so the YC list may be incomplete. In particular, several Summer and Fall 2026 GEO startups may be missing.
- The Dealroom GEO market chart was not retrieved.

---

## Q2. Key player profiles: founding, HQ, funding, valuation, team, pricing, customers, tech

### Takeaway
Pricing has converged on prompt × engine × frequency metering. Self-serve entry sits at $29–$125/month for 15–100 prompts, mid tiers at $245–$600 for 150–600 prompts, and enterprise is custom. Differentiators claimed in late 2026 are:
- statistical sampling (Evertune at 100x per prompt per model)
- real-user prompt panels (Evertune EverPanel at 150M prompts; Ahrefs at 516M prompts; Profound "Prompt Volumes")
- UI vs. API answer collection (Rankscale labels engines "GUI" vs "API")
- agent and crawler analytics, AI-readable page serving (Scrunch AXP)
- content agents and AI-ads tracking
- commerce engines (Alexa, Sparky, Rufus, ChatGPT Shopping)

### Cited Findings

**Enterprise tier**
- **Profound** (founded 2024; seed of $3.5M announced Aug 12, 2024)
  - Rounds: $20M Series A (Kleiner, Jun 2025); $35M Series B (Sequoia, Aug 2025; total $58.5M); $96M Series C at $1B (Lightspeed, Feb 2026; total $155M, 700+ enterprise customers, 10% of the Fortune 500); $180M Series D at $1.8B on Sep 15, 2026, co-led by Sequoia and Kleiner with Lightspeed, Khosla and South Park Commons.
  - It told TechCrunch revenue tripled in the 6 months before the round, with 1,000+ enterprise customers including Comcast, Estée Lauder and Walmart.
  - **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors), citing TechCrunch, Fortune and Adweek
- **Profound pricing** **[opened]** — [Profound pricing](https://www.tryprofound.com/pricing):
  - The brand page shows only a free Trial (50 prompts run daily for 7 days on ChatGPT, Gemini and Google AIO; limited "AI Marketer" credits; one language and one region; no history, exports or API) and Enterprise (custom).
  - Enterprise covers up to 9 engines: ChatGPT, Perplexity, Google AI Mode, Gemini, Microsoft Copilot, DeepSeek, Claude, Google AIO and Exa Search.
  - Enterprise also adds ChatGPT Shopping tracking, "Agent Analytics" (AI-sourced traffic and attribution, with integrations for Akamai, AWS, Cloudflare, Fastly, GA, GCP, Netlify, Vercel and WordPress), "Prompt Volumes," Profound Sheets, agents at scale and SSO/SOC 2.
  - A self-serve "Agency Growth" plan gives 400 credits per month per client workspace.
  - Inference: Profound has moved away from a low self-serve brand tier.
- **Bluefish** (New York)
  - $20M Series A (NEA and Salesforce Ventures; total $24M), then a $43M Series B on Apr 14, 2026 (Threshold and NEA, with Amex Ventures, TIAA Ventures, Salesforce Ventures and Bloomberg Beta; total $68M). **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Its site: "Agentic Marketing Platform for the Fortune 500"; "Trusted by over 10% of the Fortune 500"; new "Bluefish Agentic Ads"; "10+ LLMs tracked daily including Alexa for Shopping"; "static prompts, model-drift controls, MCP, and Agents"; plus a full-service team. **[opened]** — [Bluefish](https://www.bluefishai.com/)
- **Brandlight** (founded Oct 2024)
  - Came out of stealth in Apr 2025 with $5.75M, then a $30M Series A on Feb 11, 2026 led by Pelion (total $36M).
  - Customers: Kimberly-Clark, LG, The Hartford and Estée Lauder. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Site modules: Visibility & Measurement, Impact Tracking & Attribution, Content Optimization and Creation, AI Ads, AI Commerce. **[opened]** — [Brandlight](https://www.brandlight.ai/)
- **Evertune**
  - Launched Oct 2024 with a $4M seed (Eniac), then a $15M Series A (Felicis, Aug 2025). **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Its site claims 700+ advertisers and agencies (Porsche shown).
  - Its tech claims: "EverPanel," a proprietary panel of 150M+ real user prompts; "sampling each prompt up to 100x per model" for "statistically significant insights" across 11 models; agentic workflows that "create content, set up ChatGPT ads campaigns." **[opened]** — [Evertune](https://www.evertune.ai/)
- **Scrunch** (acquired; see Q1)
  - Pre-acquisition pricing: Core $250/mo with 125 prompts, 5,000 responses/month, 4 LLMs (ChatGPT, Perplexity, AIO, Copilot), 1 brand and 5 users.
  - Enterprise adds AXP (Agent Experience Platform), 9 LLMs (including Meta AI, Grok and AI Mode), API and SSO.
  - Product nav: Agent Pages ("deliver an optimized experience to AI agents"), Agent Traffic, Site Optimization, Monitoring & Citations, and Shopping ("AI search performance at the product level").
  - **[opened]** — [Scrunch pricing](https://scrunch.com/pricing); [Scrunch FAQ](https://scrunch.com/faqs/what-are-the-most-well-funded-ai-visibility-startups-for-aeo-geo-monitoring)
  - Third-party research by Akamai: AXP-enabled pages saw a "364% lift in brand presence" for non-branded prompts and a 218% increase in citations. **[opened]** — [MediaCopilot](https://mediacopilot.ai/sitecore-acquires-scrunch-geo-startup-225m/)
- **AthenaHQ** (San Francisco, YC W25)
  - Launched Jun 17, 2025 with $2.2M from YC, FCVC, Red Bike and Amino. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Team of about 12. **[yc-oss]**
  - Pricing: Free ($25 credit, 300 credits); Starter $295/mo (3,600 credits); Enterprise custom. It covers 11 models (ChatGPT, Perplexity, AIO, AI Mode, Gemini, Claude, Copilot, Grok, Mistral and others), with "Athena Citation Engine (ACE)," a content optimization agent, and API as a paid add-on. **[opened]** — [AthenaHQ pricing](https://www.athenahq.ai/pricing)
  - The YC listing names Coinbase and SoFi as brands. **[snippet]**
- **Daydream** (daydream Labs, Inc.): a hybrid of "proven methodology with AI agents and dedicated experts," with a free AI visibility dashboard and testimonials of "1M+ visits/mo, 6X ROI." **[opened]** — [Daydream](https://www.withdaydream.com/)
  - Funding not found in my sources.

**Self-serve / SMB tier**
- **Peec AI** (Berlin)
  - Pre-seed €1.8M (Apr 2025) **[snippet]**; seed €5.2M led by 20VC (Jul 2025) **[snippet]**; $21M Series A led by Singular (Nov 2025) at a valuation above $100M, when it had $4M+ ARR 10 months after launch and 1,300 companies and agencies. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - By June 2026: $10M+ ARR, reportedly in talks to raise about $10M at a $200M pre-money (TNW citing Sifted). **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors); [Sifted](https://sifted.eu/articles/peec-ai-fundraise-new-valuation) [snippet]
  - Sacra estimates $11.5M ARR in June 2026. **[snippet]** — [Sacra](https://sacra.com/c/peec/)
  - Value Add VC lists Peec's total as $40M, which suggests a further round had closed by Oct 2026. Its text is truncated at "the financing has since close…", so the details are unconfirmed.
- **Peec pricing** **[opened]** — [Peec pricing](https://peec.ai/pricing):
  - Starter $95/mo: 50 prompts, choose 3 models, daily, 1 project, unlimited users.
  - Pro $245/mo: 150 prompts, 2 projects.
  - Advanced $495/mo: 350 prompts, 5 projects, multi-country, Looker Studio.
  - Enterprise: unlimited, API, SSO, up to 13 LLMs.
  - Selectable models include ChatGPT, AI Mode, AI Overviews, Copilot, Gemini, **Naver AI** and Perplexity, plus API models (Claude Sonnet 4, GPT-5 Search, Grok, DeepSeek, Qwen, Mistral).
  - Other features: an "Ads library" of prompts where AI answers carry sponsored placements, prompt fact-checking against brand facts, and agency pricing.
  - Its metering is explicit: answers = prompts × models × days.
  - Value Add VC describes Peec as "from €75 a month," so EUR and USD list prices differ.
- **Otterly.ai** (Austria; funding undisclosed; "more than 40,000 marketing professionals use it," per an Oct 2026 release). **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- **Otterly pricing** **[opened]** — [Otterly pricing](https://otterly.ai/pricing):
  - Lite $29/mo: 15 prompts.
  - Standard $189/mo: 100 prompts, API, MCP, Agent Analytics.
  - Premium $489/mo: 400 prompts.
  - Enterprise from 1,000 prompts.
  - Four base engines (ChatGPT, AIO, Perplexity, Copilot). Claude, AI Mode and Gemini are paid add-ons: Gemini and AI Mode cost $9/$59/$149 per month by tier, and Claude costs $29/$109/$439.
  - Extra 100 prompts cost $99/mo. It includes "ChatGPT Ads Tracking," GEO URL audits (1k–10k/month) and an agency partner program with white-label.
- **Rankscale** pricing is credit-based **[opened]** — [Rankscale pricing](https://rankscale.ai/pricing):
  - From $20/mo (yearly).
  - Pro $99 (1,200 credits, about 4,800 answers).
  - Pro+ $229 (REST API).
  - Growth $385 (agency white-label).
  - Enterprise $780 (12,000 credits, about 48,000 answers).
  - It covers 17+ engines and labels them as **GUI engines** (AI Overview GUI, Copilot GUI) vs **API engines** (Perplexity Sonar, GPT-5.x, Gemini 3.x, Claude 5.5, Meta Muse Spark). Credit costs differ by engine.
  - Features include query fan-out, ChatGPT follow-up forms, local results, shopping analysis and ad analytics.
- **Knowatoa**: Starter $59/mo, Growth $199/mo, Enterprise custom. **[opened]** — [Knowatoa pricing](https://knowatoa.com/pricing)
- **Promptwatch** **[opened]** — [Promptwatch pricing](https://www.promptwatch.com/pricing):
  - Essential $95/mo: 50 prompts, 6,000 responses, all models, MCP and API.
  - Professional $245: 150 prompts, 18,000 responses, content writing and refresh, Agent Analytics.
  - Business $579: 350 prompts, 42,000 responses, up to hourly tracking.
- **Trakkr** **[opened]** — [Trakkr pricing](https://trakkr.ai/pricing):
  - Growth $100/mo: 1 brand, 50 prompts, 8 models daily, "fixes shipped to your site." Extra brands cost $50/mo each.
  - Scale $500/mo: 10 brands, aimed at agencies, with client portals.
  - Managed (done-for-you "fixes, pages, pitches and listings every working day") from $2,500/mo, and from $6,000/mo for larger brands.
- **Searchable** (New York and London)
  - $4M pre-seed (Freestyle, Dec 2025), then $14M led by Headline at an $85M valuation (May 18, 2026). It claimed $2M revenue in 4.5 months with nearly 1,000 customers. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Pricing: Pro $125/mo (100 prompts per model, 3 models: ChatGPT, AIO, Perplexity; 20 articles/month); Scale $400 (500 prompts, white-label); Enterprise $999+ (1,250 prompts). Claude, AI Mode, Grok and Meta Muse are paid add-ons. **[opened]** — [Searchable pricing](https://www.searchable.com/pricing)
- **Am I On AI**: free audit, "loved by 10,000+ marketers & agencies," weekly action items, category "Index" leaderboards, and AIO tracking included in all plans. **[opened]** — [Am I On AI](https://www.amionai.com/)
  - Prices did not render in the static HTML.
- **geoSurge**: $12M seed led by AlbionVC (Jul 2026), positioned on "how models remember brands." **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- **LLM Pulse** offers a **Naver AI Briefing tracking add-on** covering share of voice, sentiment, sources, and daily or weekly cadence. Its banner claims "$0 raised." **[opened]** — [LLM Pulse Naver AI](https://llmpulse.ai/ai-models/naver-ai)

**Content / action layer**
- **AirOps** (founded 2021)
  - $15.5M Series A (Oct 2024, originally for AI content generation), then a $40M Series B led by Greylock at a $225M valuation (Nov 10, 2025). Total $62.5M. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
  - Pricing is task-metered (Solo free; $0.025 per extra task; 1,000 or 10,000 tasks/month tiers). **[opened]** — [AirOps pricing](https://www.airops.com/pricing)
- **Writesonic** (YC) **[opened]** — [Writesonic pricing](https://writesonic.com/pricing):
  - Starter $79/mo billed annually (ChatGPT, Gemini, AIO; 15 AI articles; site audits).
  - Basic $199.
  - Growth tier adds sentiment, Action Center and agentic workflows.
  - Enterprise adds "Shopping & Agentic Commerce" and SOC 2 / HIPAA.
- **Gauge**: Growth $599/mo for 600 prompts daily on 3 platforms (ChatGPT, AI Mode, Copilot), which is 54,000 answers/month. It includes 18 publish-ready articles/month, GA4/GSC/DataForSEO integrations and a "local CLI" mode where the customer's own agent subscription does execution. **[opened]** — [Gauge pricing](https://www.withgauge.com/pricing)
- **Goodie** (funding undisclosed) **[opened]** — [Goodie pricing](https://higoodie.com/pricing):
  - Core $295/mo: 110 prompts, 5 models, 2 countries, 50 "action credits."
  - Pro $999/mo: 250 prompts, 8 models, MCP.
  - Enterprise: 500+ prompts, 14 engines including Alexa, Walmart Sparky, Meta Muse, DeepSeek and Grok; "custom revenue modeling."
  - It also sells an "Agentic Commerce Suite" (ChatGPT, Perplexity, AI Mode, Alexa, Sparky) and "Brand Command," which checks AI claims against brand facts and reports an inaccuracy rate.
  - "Every plan includes the full action layer, not just monitoring."

### Inferences
- **Effective price per tracked answer is falling fast.** Gauge's 54,000 answers for $599 is about $0.011 per answer. Peec Starter is 50 × 3 × 30 = 4,500 answers for $95, about $0.021. Otterly Lite is 15 × 4 × 30 = 1,800 answers for $29, about $0.016. Because the underlying API calls are cheap, this metric will keep compressing.
- **Engine coverage is now a checkbox.** Most vendors list 8–17 engines and charge add-ons for Claude, Gemini and AI Mode. Coverage of commerce surfaces (Rufus, Sparky, Alexa, ChatGPT Shopping) and regional engines (Naver, Qwen) is the new frontier.
- **Peec already tracks Naver AI** on its standard model list, and LLM Pulse sells a Naver AI Briefing add-on. "Korean-engine coverage" alone is therefore not a moat against global tools.
- Pure monitoring vendors are all bolting on content generation (articles/month), MCP and API. MCP and API access are becoming standard because buyers want to pipe data into Claude or ChatGPT agents.

### Gaps
- Team sizes (beyond YC data) and founding years for Peec, Otterly, Goodie, Knowatoa, Gauge, Promptwatch, Rankscale and Daydream were not found. LinkedIn and Crunchbase were not accessible.
- Funding was not found for Daydream, Gauge, Knowatoa, Promptwatch, Rankscale, Trakkr and Am I On AI.
- Similarweb, seoClarity, Yext Scout, Moz and BrightEdge pricing pages were not opened.
- I did not verify how each vendor collects answers (scraping the consumer UI vs. calling the API) beyond Rankscale's GUI/API labeling.

---

## Q3. What do buyers pay for, what churns, and is monitoring commoditized?

### Takeaway
There is strong evidence that pure monitoring is being commoditized:
- Ahrefs' CMO says prompt tracking is "table stakes, easily built."
- HubSpot sells a $50/month module, and Otterly starts at $29.
- IAB counts more than 20 measurement vendors using inconsistent methods.

Measurement credibility is the category's main weakness. SparkToro found that AI brand lists repeat less than 1% of the time, and Growth Memo reports that only about 2% of sources are cited consistently across runs. Buyer money is moving toward execution (content, technical fixes, PR and earned media), attribution to traffic and revenue, and agents and ads. I found no hard churn data.

### Cited Findings

**Measurement reliability**
- Rand Fishkin (SparkToro) and Patrick O'Donnell (Gumshoe.ai) ran 12 prompts across ChatGPT, Claude and Google AI, about 2,961 runs in total. They found "<1 in 100 chance" that any two responses give the same brand list. The order and the number of items also vary. Frequency of appearance was more stable than rank.
  - Fishkin advised against paying for rank-tracking products that lack public, reviewable research.
  - Caveat: the study was not peer-reviewed, and Gumshoe is itself a tracking startup.
  - **[snippet]** — [Search Engine Land](https://searchengineland.com/ai-recommendation-lists-rarely-repeat-study-468076); [Search Engine Journal](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242); [WARC](https://www.warc.com/content/feed/llms-produce-random-results-when-listing-brand-recommendations/en-GB/11352)
- **IAB, "Measuring Visibility in the AI Era"** (released Aug 2026): "more than 20 companies now sell AI visibility measurement tools, each using different methodologies that can produce different answers for the same brand." **[opened]** — [IAB](https://iab.com/guidelines/measuring-visibility-in-the-ai-era)
  - It introduces a "Decision-Grade vs. Directional" data distinction, provider disclosure requirements and stability/reproducibility guidance.
  - It explicitly says providers can now "differentiate on methodological rigor rather than marketing claims."
- **B&T opinion piece** (Connected Media CEO) **[opened]** — [B&T](https://www.bandt.com.au/ai-visibility-may-be-real-but-the-measurement-still-isnt/):
  - It criticizes "Your brand is invisible on ChatGPT" cold-email audits built on badly designed prompt sets.
  - It cites a University of Toronto study in which overlap with Google's top 10 ranged from 4% (GPT-4o) to 15.2% (Perplexity).
  - It cites a study of 167,551 AI citations across 128 brands, 12 markets and 13 languages: only 14.3% pointed to the brand's own site and 85.7% went to third-party sources.
  - It notes that Google published its first official guidance on generative AI search in May 2026, saying SEO remains relevant.
  - Its quote: "anyone can build a cheap AI visibility tool; the real value is in … writing the right prompts … connecting AI visibility to … commercial outcomes."
- **Growth Memo (Kevin Indig)**, secondhand **[snippet]** — [Growth Unhinged](https://www.growthunhinged.com/p/how-to-measure-the-impact-of-ai-search-the-right-way):
  - In a survey of 599 marketers, more than 40% said unreliable measurement and attribution is their #1 AEO challenge.
  - Only 2.2% of sources are cited consistently across three runs.
  - Profound data: 40–60% of cited domains change month to month.
  - Another write-up attributes to Growth Memo (May 2026, Omnia data) that across 3.7M URLs and 20k prompts, 91% of citations appeared in only one engine. **[snippet]**
- **Earned media dominates sources.** Muck Rack found 82% of AI citations come from earned media. Profound's research is cited as finding that most citations come from non-Tier-1 earned media. Everything-PR argues "monitoring tools track mentions. They do not help brands earn placement in the sources that generate citations." **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- **Citation and referral are decoupled.** Reuters and The Guardian get less than 1% of referral traffic from AI despite being heavily cited (Similarweb 2026 GenAI Brand Visibility Index). **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)

**Commoditization and price**
- Ahrefs CMO Tim Soulo: prompt tracking is "table stakes, easily built, and not a defensible product category." Ahrefs prices prompt tracking from $50/mo. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions); [Ahrefs Brand Radar](https://ahrefs.com/brand-radar)
- Value Add VC's "where we could be wrong": visibility tracking "may become a feature inside larger SEO and marketing suites, not a company." TNW made the same point about Peec's $200M price. **[opened]** — [Value Add VC](https://valueaddvc.com/blog/ai-search-optimization-startups-2026-geo-aeo-funding-investors)
- An agency-focused review says the mechanics are "largely commoditized," with differentiation coming from coverage, measurement quality, reporting and price. Entry prices run from $29/mo (Otterly Lite) to $499 flat (Moistur). **[snippet]** — [Moistur](https://www.moistur.ai/blog/best-ai-visibility-tools)
- Price bands: GEO agency services cost $10k–$50k+/month, and tracking tools cost $29–$1,000+/month. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- Japanese domestic tools run from ¥450/mo to over ¥100k/mo, while overseas specialist tools cost $99–$800/mo. **[opened]** — [Arch Inc. column](https://archcorp.jp/columns/llmo-geo-tracking-tools/)

**What buyers pay for (demand signals)**
- Conductor's CMO report: 97% of digital marketing leaders saw positive AEO impact in 2025, and 94% plan to increase investment in 2026.
- Fortune 500 companies are hiring GEO managers; Citizens Bank lists $171k.
- **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- Pricing pages show the bundle buyers now expect: content articles/month (Searchable, Gauge, Writesonic), action credits (Goodie), done-for-you fixes (Trakkr Managed from $2,500/mo), agent and crawler analytics (Profound, Otterly, Promptwatch), and ChatGPT ads tracking (Otterly, Peec "Ads library"). **[opened]** — pricing pages linked in Q2
- Scrunch claimed AI-search visitors convert 3–5x better than organic, citing its own unverified data. **[opened]** — [MediaCopilot](https://mediacopilot.ai/sitecore-acquires-scrunch-geo-startup-225m/)

### Inferences
- **"Snake oil" risk is concentrated in single-run, rank-style scores.** Vendors that publish sample sizes, run-to-run variance, and confidence intervals (Evertune's 100x sampling is the lone explicit example) can sell to skeptical buyers. IAB's "decision-grade" label creates a certification-style wedge.
- **Monitoring-only products face a price floor near $30–$100/mo** and bundling by suites (Semrush/Adobe, Ahrefs, HubSpot). Churn is likely high once the initial "are we visible?" curiosity is satisfied, but this is not evidenced by data.
- **Durable spend appears to attach to three things:** (a) execution (content, technical fixes, earned media), (b) attribution to traffic, pipeline or revenue, and (c) commerce surfaces where AI answers directly drive transactions.

### Gaps
- No churn or net revenue retention figures for any GEO vendor were found.
- No G2 star ratings or review counts were retrieved.
- No Reddit (r/SEO, r/bigseo) or Hacker News threads were retrieved. Searches returned only vendor content, so practitioner sentiment is under-sampled.
- The original Growth Memo article was not opened.

---

## Q4. Where is the market underserved?

### Takeaway
The most open spaces are:
1. Non-English and local engines combined with execution (Naver AI Briefing, Japanese LLMO). Monitoring exists here, but done-for-you execution and native-language source graphs are thin.
2. E-commerce catalog-level visibility and agentic-commerce readiness. YC's Wildcard notes that "existing tools were built for SaaS."
3. Attribution of AI answers to revenue.
4. Local businesses that cannot afford $300+ tools.
5. Agent-usability and readiness infrastructure for sites and software.

Generic multi-engine brand monitoring for English-speaking SaaS is the most crowded segment.

### Cited Findings

**Non-English markets**
- **Korea, 에이올로 (Aeolo)**: a GEO startup whose CEO 강지혁 is 26, studied computer science at Seoul National University, and previously worked at Toss. **[opened]** — [딜사이트](https://dealsite.co.kr/articles/170371)
  - It has about 20 customers paying $99–699/month (₩130k–940k), and revenue is growing about 3x per month.
  - It says its own technology lowers the cost of collecting AI answers. It analyzes about 300k–400k samples to see which sources each model cites, then recommends content fixes.
  - The CEO's claim: "GEO 업체 가운데 기술 창업자는 거의 없다" ("almost no GEO firms have technical founders").
  - It is a finalist in the 정주영 창업경진대회.
- **Korea, global coverage**: Peec lists "Naver AI" among selectable models, and LLM Pulse sells a Naver AI Briefing add-on. **[opened]** — [Peec pricing](https://peec.ai/pricing); [LLM Pulse](https://llmpulse.ai/ai-models/naver-ai)
- **Korea, market structure**: a Korean Brunch article splits the market into global SaaS covering English-language engines, Korean marketing agencies, and "K-GEO" services that cover global engines plus Naver AI Briefing and extend into execution. **[snippet]** — [Brunch](https://brunch.co.kr/@ec4ecbc183d2473/5)
- **Japan, crowded low-price tools**: the market uses the term "LLMO." Domestic tools include:
  - ArchAIO at ¥4,800–39,800/mo
  - Mieruca GEO (Faber, TSE-listed) at ¥49,800/¥99,800 plus an initial fee, with AI share monitoring from ¥50,000
  - GMO NIKKO "AI最適化ブースト" at ¥100k/mo on a 12-month contract
  - Litera LLMO Compass at ¥450–27,000, with a patent filed
  - **[opened]** — [Arch Inc.](https://archcorp.jp/columns/llmo-geo-tracking-tools/)
- **Japan, foreign competition**: Scrunch is described as the only overseas tool that officially states it serves Japanese customers. **[snippet]** — [SourceForge / Japanese comparisons via search](https://sourceforge.net/software/generative-engine-optimization-geo/japan/)
- **Japan, SMB pain point**: a Japanese industry survey (ALTERA, May 2026) says overseas tools are "structured so that small and medium-sized businesses cannot afford" them. It highlights local-business queries (clinics, gyms) where ChatGPT returns nothing or hallucinated or closed businesses. **[opened]** — [ALTERA note](https://note.com/altera_works/n/ne1f80e578e49?hl=en)
  - Caution: its competitor table contains errors, such as calling Profound "YC W24." Do not use it for funding facts.

**E-commerce and agentic commerce**
- **Wildcard (YC W25)** **[opened]** — [YC Wildcard](https://www.ycombinator.com/companies/wildcard):
  - "Existing tools were built for SaaS. They hand you a score and stop. That playbook breaks the moment you have 5,000 SKUs."
  - It focuses on catalog enrichment, ACP and UCP support, Rufus and Sparky.
- **OpenAI scaled back Instant Checkout in early/March 2026.** **[snippet]** — [CNBC, Mar 20 2026](https://www.cnbc.com/2026/03/20/open-ai-agentic-shopping-etsy-shopify-walmart-amazon.html); [OpenAI ACP launch](https://openai.com/index/buy-it-in-chatgpt/); [Digital Silk](https://www.digitalsilk.com/digital-trends/digital-trends-chatgpt-ecommerce/)
  - Forrester reportedly found only about 30 Shopify merchants live by February 2026.
  - The Agentic Commerce Protocol was expanded toward product discovery and feeds. Walmart, Target, Best Buy, Sephora, Nordstrom and Home Depot reportedly feed live product data.
  - Google announced the Universal Commerce Protocol (UCP) at NRF 2026 with 20+ retailers.
  - The details conflict between sources, so verify them.
- **Commerce traffic is growing fast.** Adobe reported AI traffic to US retail sites up 693% in 2025. Bluefish's Black Friday 2025 report showed +805% YoY AI-driven retail traffic. **[opened]** — [Everything-PR](https://everything-pr.com/ahrefs-semrush-and-conductor-push-back-as-geo-pure-plays-raise-hundreds-of-millions)
- **Incumbents are adding commerce modules**, but mostly at Enterprise or upper tiers: Goodie's Agentic Commerce Suite, Scrunch Shopping, Profound ChatGPT Shopping (Enterprise only), Writesonic Shopping (Enterprise), Rankscale shopping analysis. **[opened]** — pricing pages in Q2

**Attribution and revenue**
- Attribution is the top unmet need: more than 40% of 599 marketers cite measurement and attribution as their #1 challenge. **[snippet]** — [Growth Unhinged / Growth Memo](https://www.growthunhinged.com/p/how-to-measure-the-impact-of-ai-search-the-right-way)
- Vendors claiming attribution do so mainly at enterprise tiers: Profound Agent Analytics (CDN and log integrations), Brandlight "Impact Tracking & Attribution," Goodie "custom revenue modeling" (Enterprise), Gauge with GA4 and GSC. **[opened]** — pricing pages

**AI-ready site infrastructure and crawlers**
- **Cloudflare** **[opened]** — [IT Brief](https://itbrief.com.au/story/cloudflare-tightens-ai-crawler-controls-for-publishers):
  - It is moving from Pay Per Crawl to "Pay Per Use," with partners Ceramic.ai and You.com.
  - It launched an "Attribution Business Insights" dashboard showing which pages bots consume and how much human traffic AI sends back.
  - It reports that more than 50% of AI crawler traffic re-fetches unchanged pages.
  - It will block mixed-use crawlers by default on ad-supported pages.
  - Cloudflare now gives away crawler analytics to its customers.
- **Scrunch AXP / Agent Pages** serve AI-optimized versions of pages to agents. This was a key asset in the Sitecore deal. **[opened]** — [MediaCopilot](https://mediacopilot.ai/sitecore-acquires-scrunch-geo-startup-225m/); [Scrunch](https://scrunch.com/pricing)
- **TollBit** charges per-retrieval tolls and serves alternate content to bots across 3,000+ publisher sites. **[snippet]** — search summary only, no page opened

**Agent usability (newest wave)**
- The Prompting Company tests "whether AI agents can actually use your product." Armature targets "picked by coding agents." Scope targets "software discovered and used by AI agents." **[opened / yc-oss]** — [YC The Prompting Company](https://www.ycombinator.com/companies/the-prompting-company); [YC Armature](https://www.ycombinator.com/companies/armature); [YC Scope](https://www.ycombinator.com/companies/scope)

**Agencies**
- White-label and agency tiers are already common: Otterly agency partners, Rankscale Growth white-label at $385, Searchable Scale white-label, Trakkr Scale for 10 brands at $500, Profound Agency Growth, Peec agency pricing. Agency white-label is crowded, not open. **[opened]** — pricing pages in Q2

### Inferences
- **For a Korean team:**
  - Naver coverage is a necessary but insufficient wedge, since Peec and LLM Pulse already cover it.
  - The more defensible angle is Korean-source graph intelligence: which Naver Blog, Cafe, KIN, news and commerce (Coupang, Musinsa, Olive Young) sources each engine cites.
  - Pair that with done-for-you execution in those channels, which global SaaS will not do.
  - This competes directly with 에이올로's "which sources each model cites" approach, so differentiation would need to come from vertical focus or commerce.
- **E-commerce catalog-level GEO plus agentic-commerce feed readiness** is the least crowded segment with a clear buyer (merchants, Cafe24/Shopify-type platforms) and clear acquirers (commerce platforms, DXPs).
  - For Korea specifically: Naver Shopping, Coupang, Cafe24, Kakao, and K-beauty brands selling into US ChatGPT, Rufus and Sparky.
  - This is an inference from Wildcard's positioning and from enterprise-only commerce tiers elsewhere.
- **Measurement rigor as a product.** Publishing variance, sample sizes and confidence intervals, and aligning to IAB's "decision-grade" standard, could separate a newcomer from "snake-oil" scores. This is a cheap differentiator for a technical founding team.
- **Exit logic.** Both confirmed exits went to content and DXP platforms that needed an execution layer. An action-oriented, vertical or commerce-specific product is more acquirable than a monitoring dashboard. In Korea and Japan, plausible acquirers include SEO and ad-tech firms, agency holdcos (for example GMO, Faber, Korean ad holdcos) and commerce platforms. Acquirer appetite in Korea specifically is unverified.

### Gaps
- No data was found on Korean GEO market size, other Korean GEO SaaS competitors beyond 에이올로, or Naver's own plans for brand-facing AI Briefing analytics.
- No verified data was found on vertical-specific GEO players in healthcare, finance or travel, and none on vertical regulatory needs (for example medical-advertising rules in AI answers).
- Agentic-commerce facts (Instant Checkout status, ACP feed requirements, UCP adoption) come from secondary blogs and snippets. Verify them against OpenAI, Stripe and Google developer docs.
- TollBit and Cloudflare pricing for crawler analytics was not verified on primary pages.
- Valuation of the Mazarine/Bacchus deal and any other 2026 GEO M&A (for example by HubSpot or Salesforce) was not found.
