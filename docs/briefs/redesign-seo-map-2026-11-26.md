# SEO map and copy briefs: FrameScale redesign (2026-11-26)

Status: draft for Unit 1. Feeds every page's copy in Units 4 to 8.

## What this is built on (and what it is not)
- Five standard web searches on 2026-11-26 (Google-style results): "optical practice marketing consultant independent optical", "how to market an independent optical store", "optical practice website design", "optometry marketing agency cost per month", "optical practice marketing reporting what to measure new patients".
- **No keyword volume or difficulty data.** There is no DataForSEO or Search Console access in this session, so priority is judged on intent and gap, not numbers. Treat every query below as a hypothesis to check against Search Console after launch.
- Vendor and trade pages made most of those claims. **No statistic, price or outcome from them goes into site copy.** The only facts allowed in copy come from `src/content/*.ts` (Jonathan's own words and credentials) and `src/lib/site.ts`.

## What the results showed
1. **Who ranks:** optometry-focused agencies (Redefine Web, specialty.vision, iMatrix, Healthcare Success, Weave, Ocuco OpticCommerce), trade magazines (Review of Optometry, Vision Monday, Optician Online, CRS Today) and a UK consultancy. Many target OD practices or multi-location groups.
2. **The gap:** nothing in the top results says "independent optical retail, US, one consultant you work with directly, with first-hand optical retail experience and an MBA in marketing." That is the page-one pitch.
3. **Vocabulary owners use:** optical practice, optical store/shop, optician, optometry practice, eyewear retailer, eye care practice. The site leads with "optical practice" and uses the others as secondary terms so the page matches how people search.
4. **Intent split (SXO):** commercial queries ("marketing agency", "consultant", "services") return service pages and "best agencies" listicles. Informational queries ("how to market", "what to measure") return trade articles and vendor guides. So: service pages for the first, `/insights` guides for the second. A guide will not rank for a commercial query and vice versa.
5. **What the visitor asks, in their words:** what does marketing include, how much does it cost, how do I know it works, what should I track, do I need a new website, how do I compete with chains, which channels matter. These become FAQ questions and guide topics.

## Rules carried into every page
- First person, as Jonathan. Collaborative "we" only for working together.
- No em dash, no single-sentence positive/negative flip, no clipped parallel fragments, every line has a subject and a verb.
- All headings and CTAs in Title Case (AGENTS.md rules 4 and 5), including the H1.
- National optical, remote. **No San Diego, no Google Business Profile or local-search framing** (memory: local search is a dead channel for this practice).
- No `LocalBusiness` schema.
- Titles 60 characters or fewer, descriptions 155 or fewer.
- One H1 per page, and the primary query appears in the H1, title and first 100 words.

## Page map
| Route | Primary query | Secondary vocabulary | Intent | Title (<= 60) | H1 |
|---|---|---|---|---|---|
| `/` | optical practice marketing consultant | optical marketing consultant, independent optical marketing, marketing for opticians | Commercial, branded | Optical Practice Marketing Consultant \| Jonathan Mejia | Marketing For Independent Optical Practices, Explained Plainly |
| `/optical-marketing` | optical marketing | optician marketing, optical store marketing, eyewear store marketing | Commercial, vertical page | Optical Marketing For Independent Practices \| Jonathan Mejia | Optical Marketing For Independent Practices |
| `/services` | optical marketing services | optical practice website design, optical practice SEO, marketing reporting | Commercial | Optical Marketing Services: Websites, Search, Reports | Four Ways I Help Optical Practices Grow |
| `/method` | marketing plan for an optical practice | SCALE method, marketing process, marketing roadmap | Commercial, process | The SCALE Method: A Five-Phase Marketing Process | The SCALE Method: How I Work With Your Practice |
| `/about` | Jonathan Mejia MBA | optical marketing consultant background, marketing consultant with optical experience | Entity, trust | About Jonathan Mejia, MBA \| FrameScale Inc | Hi, I'm Jonathan |
| `/contact` | book an optical marketing consultation | contact marketing consultant | Transactional | Book A Free Call With Jonathan Mejia \| FrameScale | Tell Me About Your Practice |
| `/insights` | optical practice marketing guides | optical marketing blog, optical marketing advice | Informational hub | Optical Marketing Guides \| Jonathan Mejia, MBA | Optical Marketing Guides |

Meta descriptions are written with the copy in Units 4 to 8, each leading with the page's primary query and ending on a plain next step.

## Internal links
- Home links to each of `/optical-marketing`, `/services`, `/method`, `/about`, `/contact` in body copy, not only nav.
- `/optical-marketing` links to `/services`, `/method`, `/insights`, `/contact`.
- `/services` links each service to the matching SCALE phase on `/method`.
- `/method` links back to `/services` and `/contact`.
- Each insights article links to one service page, `/method` and `/contact`. `/about` links to `/optical-marketing` and `/contact`.
- Anchor text is descriptive ("how I scope a website project"), never "click here".

## Schema plan (JSON-LD, built in `src/lib/schema.ts`)
- Site-wide: Person + ProfessionalService + WebSite (kept). No `LocalBusiness`.
- `/`: no extra type beyond the site graph; FAQPage for the home FAQ.
- `/services`: Service per offering + FAQPage.
- `/optical-marketing`: WebPage + FAQPage.
- `/method`: HowTo is not used (Google dropped the rich result). WebPage + a plain ordered list in the markup.
- `/about`: AboutPage with the Person.
- `/contact`: ContactPage.
- `/insights/[slug]`: Article (author Person, datePublished) + BreadcrumbList. Unpublished articles carry `noindex` and are omitted from the sitemap.
- BreadcrumbList on every page below the home page.

## FAQ questions (real phrasing, answers from existing content only)
- What does an optical marketing consultant do?
- Do you only work with optical practices?
- How much does optical marketing cost? (answer follows `pricing.ts`; no invented price)
- How long until I see results?
- Can you promise I'll be number one on Google?
- What happens on the first call?
- Do I need a new website?
- How will I know the marketing is working?

## Insights launch articles (drafts, `published: false` until Jonathan approves)
All three are explanatory, sourced from public trade guidance, written to be edited into his voice. None states a statistic, price or result as fact.
1. **What Optical Practice Marketing Actually Includes.** Supports the site's core point that owners think marketing means social media. Links to `/services`, `/method`.
2. **Five Numbers To Track For Your Optical Practice.** New-patient share, capture rate, conversion rate on the website, cost to acquire a patient, recall rate. These metric names are standard in trade sources (Review of Optometry, Ocuco, Optometric Management). Links to `/method` (Reporting phase) and `/contact`.
3. **How To Read A Marketing Report From An Agency.** Plain-language checklist: what was spent, what changed, which new patient came from what. No claims about any named vendor. Links to `/services`, `/contact`.
Backlog (not built): website checklist for optical practices; how to compare marketing proposals; competing with chains without discounts.

## Needs Jonathan (not invented, not in copy until supplied)
- Real client results, testimonials or case studies, with permission. Until then none appear.
- Any prices or price ranges he wants public (current copy explains scoping only).
- Confirmation that "nationwide, remote" and the credentials strip (MBA, UC Riverside, optical background) stay as written.
- Additional first-hand stories for the About page and for editing the Insights drafts.
- Search Console access check after launch to replace the hypotheses above with real queries.

## Sources used for research only (not for copy)
Search result pages from 2026-11-26: Ocuco OpticCommerce blog, Review of Optometry, Optometric Management, Vision Monday, Optician Online, specialty.vision, Redefine Web, iMatrix, WebFX, CRS Today. Vendor material, read as marketing.

Coverage: five searches, results lists only (no page bodies fetched); not read: the pages behind the links; unverified: keyword volume, difficulty, current rankings of framescale site.
