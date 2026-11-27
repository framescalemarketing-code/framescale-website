# Page content map (research, 2026-11-26)

Why this exists: Jonathan said every heading and paragraph must do its job for the person using the site, and that facts about him belong on About and appear elsewhere only when they help. This note records what the research found and what each page is for. It changes no code. The copy follows once he approves the map.

## How strong the evidence is

- Web: 8 searches (standard mode). I read the search summaries, not the full pages. Most sources are marketing blogs and agency sales pages, so they are practice, not proof. Where a number is quoted it comes from one source and is not independently checked.
- GitHub: three repos cloned read only to `~/repo-refs` (not installed): `coreyhaines31/marketingskills` (62,850 stars, MIT, the source of the `copywriting` skill already installed), `boringmarketer/boring-marketing-skills` (866 stars, MIT) and `miqdadbadjuber/anti-slop` (10,236 stars, MIT).
- Not found: any survey of what independent optical owners want from a marketing consultant. The optical points below come from trade press and agency sites.

## What the research says (and where)

1. **The top of a page answers three things: what you do, who it is for, what they get.** A vague line ("We help companies with strategy") loses to a named client type plus an outcome. Test it by saying the headline to a stranger. Sources: [Knapsack Creative](https://knapsackcreative.com/blog-industry/consulting-website-value-proposition), [Orbit Media](https://www.orbitmedia.com/blog/what-to-put-on-your-homepage/). The `copy-frameworks.md` reference adds the "Now you can" test (prefix the line with "Now you can"; keep it only if it is compelling and true) and a three-beat hero: the felt problem, the better state, the next step. The repo's own Home H1 already passes the first test.
2. **Headings are what people scan.** Usability guidance says most visitors scan and few read every word, so headings must say what the section is about and prose on the homepage should be short. The figures are old (2002 era). Sources: [NN/g layer-cake pattern](https://www.nngroup.com/articles/layer-cake-pattern-scanning/), [NN/g homepage guidelines](https://www.nngroup.com/articles/113-design-guidelines-homepage-usability/).
3. **For answer engines, the format matters more than markup.** Put the answer in the first 40 to 80 words under a heading that matches the question. Name people and companies in full. One original number beats a polished summary. Schema is attribution hygiene, not a strategy, and Google says its AI features need nothing special beyond normal SEO. Sources: `ai-search/references/aeo-judgment.md` in the boring-marketing repo, [HubSpot](https://blog.hubspot.com/marketing/content-structuring-themes-ai-search), [Search Engine Journal](https://www.searchenginejournal.com/answer-engine-optimization/459047/). Most citation statistics in the vendor posts are weak.
4. **About pages carry the story, and credentials support it.** Guides put a converting About page at roughly 600 to 1,200 words, with proof and a call to action in context, and say credentials matter only after the reader believes you understand them. No source gave a clear rule for bios on other pages. The rule here is my judgment: other pages get a bio line only when it backs the claim that page is making. Sources: [searchlab.nl](https://searchlab.nl/en/guides/about-page-that-sells), [Podia](https://podia.com/articles/write-an-about-page).
5. **Service pages lead with the outcome, name who they are for, show how it starts, and carry proof on the related page.** Sources: [DreamHost](https://www.dreamhost.com/blog/how-to-write-a-services-page-that-converts/), [Zoho Academy](https://www.zoho.com/academy/quick-reads/book-more-clients-services-page.html). Thin on pricing signals and FAQs.
6. **The first screen has to hold the promise, the proof the business already has, and a way to act.** From `first-screen-check`: check it at 390 by 664 on a phone, make the headline say the service in plain words, show the rating when it is strong, and keep anything from covering the call button.
7. **Optical agencies sell concrete outcomes and name them in the headline** ("Fills Exam Chairs And Sells Frames"), promise reporting tied to booked exams, and list the vision plans accepted on the site. These are vendor claims. Sources: [o360](https://o360.com/?p=87832), [Redefine Web](https://redefineweb.com/industries/optometrist-marketing/).
8. **What owners deal with, from trade press.** Flat vision plan reimbursement. VSP and EyeMed patients can exceed 75% of a practice's customers. Some owners dropped plans while others use coordination of benefits. Inflation strain reported by 74% of eye care providers (Vision Council, 2026). Online retail pressure. Sources: [Review of Optometry](https://reviewob.com/challenges/), [Independent Strong](https://independentstrong.reviewob.com/index.php/2026/04/22/coordination-of-benefits-the-independent-advantage-no-one-talks-about/), [Insurance Business](https://www.insurancebusinessmag.com/us/news/benefits/when-vision-coverage-lapses-so-do-eye-exams--and-early-disease-detection-595103.aspx). This supports the Optical page's "Insurance Decides What You Can Offer" block.
9. **Slop tells to keep out** (anti-slop repo, 40+ named patterns): not-X-but-Y, staccato fragments, triads, one-line closers, self-answered questions, colon-reveal headings, "template section names". The repo's AGENTS.md copy rules already ban most of these.

## What each page is for

| Page | Job for the visitor | Bio allowed | Heading rule |
|---|---|---|---|
| Home | In five seconds: what I do, who it is for, what they get. Then how to start. | One short pointer to About, plus the credential strip. | H1 stays "Marketing For Independent Optical Practices". Each H2 names what the section gives the visitor. |
| Optical | Prove I understand how an independent practice makes money, and what marketing changes there. | Yes, briefly. This is the one page where the lab and the sales floor are the evidence. | Lead with the direct answer to "What does optical marketing for independent practices involve?". |
| Services | Exactly what I deliver, who each part is for, how it starts. | No. | Outcome first in each title. |
| Method | What happens in what order and what the owner gets at each phase. | No. | Phase names plus what you get. No invented durations. |
| About | Who I am, why optical, how I work, proof, next step. | Everything. Store names appear here only. | Story-shaped, 600 to 1,200 words. |
| Case study | Evidence for one engagement, with sources and dates. | Role only. | Plain, factual. |
| Contact and Book | Remove friction: what happens on the call, how long, what to bring. | No. | Verbs. |
| Insights | Answer one question per article, answer first. | No. | The question as the heading. |

## Proposed Home outline

1. Hero: H1 as is. Subhead stays "From The Lab To The Sales Floor" because Jonathan chose it. The lead says what I do and what the owner gets, with no biography. The credential strip keeps the MBA, the degree, "you work with me directly" and "remote across the United States".
2. "What Does Optical Marketing Include?" stays. It already answers a question owners ask.
3. "Four Ways I Help Optical Practices" stays.
4. The method preview becomes a visitor-facing title ("How Working With Me Goes", in five phases) instead of the method's brand name first.
5. "Work I Have Done" (the case study band) stays and only shows while the case study switch is on.
6. "What Working With Me Looks Like" replaces "Who Is Jonathan Mejia?". It holds the signed note and the four reasons, plus one short paragraph and a "Read My Story" button.
7. "Questions I Get A Lot" stays. Each answer opens with the answer.
8. Closing call to action stays.

## What owners say they want from an outside marketer (searched 2026-11-26)

Evidence is weak. No survey of independent optical owners on this question turned up. What exists is vendor material, one sponsored owner column and agency opinion. Use it to choose which questions the pages answer first, never as a stat.

- **Booked patients, not traffic.** An agency column for eye surgeons (CRSToday, Nov/Dec 2022) and an optometrist's sponsored column (Women in Optometry, Nov 2019) both say owners want appointments and new patients, not visits or impressions. The owner says earlier vendors pointed to vanity metrics.
- **Someone who already knows optical.** The same owner wanted a company that knows optical workflow (capture rate, recall) so she did not have to explain the basics. A first-hand lab and store background answers this directly. It belongs on About and in one line on Home, as already planned.
- **A responsive person, not a ticket queue.** She wants a dedicated consultant who acts as a growth partner and still lets her keep control of her brand. This backs the "you work with me directly" line.
- **Agreed goals and a fixed review rhythm.** The agency column recommends agreeing the patient target and budget first, then reviewing every 90 days. This fits the SCALE reporting phase and gives the Method page a concrete cadence to describe (as a way of working, not as a promised result).
- **Reporting that does not hide problems.** Agency blogs complain of vague reports and lock-in. Plain reporting and owning your own accounts are the fair counter. I should only state those on the site where they are true of how I work. Needs Jonathan's confirmation.
- **Not covered by any page I could read:** fees, contract length, who owns the website and accounts, realistic timelines. These stay as open questions, answered from how Jonathan actually works.
- **Owner pressure, from older sources (Bain 2010 to 2011 data, Optician surveys):** chains grow, and independents' edge is personal service. This supports "compete without discounts" as a guide topic, not as a claim.
- **Spend:** one 2025 report (543 North American optometrists, via IDOC and Eyes On Eyecare, press release) says about 60% spend under $500 a month on marketing. The sponsor sells to practices, so treat it as unverified. Not for site copy.

Not read: Optician Online, "Maximising the potential of your practice, part 2" (HTTP 403).

## What the three skill repos add (all 143 files read in full, 2026-11-26)

Full notes per folder: scratchpad `skill-notes/R1.md` to `R7.md`. Nothing was installed. These are ideas to apply by hand, since every repo's own examples break our copy rules (dashes, "not X, it's Y", sentence-case headings, invented numbers).

Worth using:
1. **Claim gate.** Every shipped line traces to a written fact. A claim without one gets `[NEED: ...]`, never an invented proof (boring-marketing positioning-angles, marketingskills copywriting).
2. **Answer block.** Each question-style heading is followed by a self-contained 40 to 80 word paragraph whose first sentence answers it and names FrameScale, Jonathan and independent optical practices in full (boring-marketing ai-search, marketingskills seo-audit).
3. **Swap test.** Run every headline, subhead and section heading through "could any marketing agency write this exact line?" (marketingskills copywriting).
4. **One owning page per fact,** stated as plain visible text with a date. Pricing and scope as visible text is the best-supported AEO finding (marketingskills ai-seo).
5. **Paste test.** Give a browsing AI the Services page and ask what the practice offers, for whom and at what range. Move whatever it misses into plain sentences (marketingskills pricing teardown).
6. **Named engagements** with an Included and Not Included list and a first-milestone gate, for Services and Method (marketingskills offers). A guarantee, capacity or price needs Jonathan to confirm it first.
7. **Read-aloud audit with a pattern list.** The antislop-copywriting catalogue adds patterns we do not scan for yet: "Whether you're a... or...", "serves as" and "boasts", "countless", participial tack-ons, "at its core", straw-man openers, generic CTAs. Exact list is in `R7.md`, to add to `copyscan.mjs`.
8. **Title pattern** [Category] For [Audience] | [Brand], with title, H1 and description on the same topic.
9. **Free AEO checks:** Bing Webmaster Tools, Brave submit-url, and 3 to 5 sampled prompts run by hand.
10. **Schema checklist** (already mostly true here): FAQPage is semantic only, JSON-LD must match visible text, stable `@id` values, escape `<`.

Skip: pricing tricks, scarcity, bonus stacks, "vs" pages, local and Business Profile material, the LocalBusiness schema samples, paid scrapers and trackers, every statistic the repos quote (all unverified), and the anti-slop installer (it edits CLAUDE.md and writes settings; `antislop-human` ships an MCP server and would need skill-inspector first).

## Open for Jonathan

- Subhead on Home: keep the tagline (recommended) or replace it with a line that says what I do.
- Whether the Optical page keeps the lab story in its lead or moves it below the first answer.

Coverage: skill folders, 143 of 143 files read to the last line by seven readers (27 folders: marketingskills 14, boring-marketing-skills 10, anti-slop 3, plus antislop.md and rules); not read: the rest of the three repos (tools, tests, integrations, CLIs, other skills, about 120,000 lines, outside the scope he chose) and anti-slop GUIDE.md; web, 11 searches read as summaries plus 3 of 4 trade pages read in full (Optician Online returned 403); unverified: every statistic in the repos and in the searches, and whether the skills' dated 2026 AEO claims are current.
