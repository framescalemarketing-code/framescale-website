# Copy rewrite: before and after draft (U1)

Brief: `copy-rewrite-plan-2026-11-26.md`. Nothing here is in the site yet. Mark any line you want changed, in your own words, and I apply your version. Every "After" is a draft in my words, not yours.

## Corrections to my own plan (found while reading the exact lines)
1. **`contactSteps` are complete sentences, not fragments.** "I read it myself." has a subject and a verb. The real problem is four clipped sentences of 4 to 6 words in a row. The fix below changes the rhythm and keeps your facts (you read it yourself, half an hour, you say whether you can help, you decide, you don't chase).
2. **The Optical lead is two sentences of 29 words each, not one very long sentence.** Both pass the 30 word limit. I still suggest splitting the second one, for rhythm.
3. **The earlier scan did have hits.** Four lines say "decide whether your ..." (Home, Services and two Insights drafts, since removed), which matches the banned "whether you" pattern by substring. None is the "Whether you're A or B" opener the rule targets, so I leave them. The other hits are CSS words like "transform". No dashes and no "not X but Y" anywhere.
4. **Plan item 4 (Home "What Working With Me Looks Like") is dropped.** The overlap with About goes away when About changes, so Home stays as it is.

Baseline numbers saved before any change (scratchpad `baseline\`): the repeat check finds 22 hits and fails on 6 file and phrase pairs outside the allowed list (about page, book page, optical page twice, optical.ts, services page; the hidden insights page is allowed as out of scope). The pagecheck baseline has 13 failures, all of them the hidden "Site footer" landmark heading, which is not copy. The sentence-length listing has 40 rows to review. `/book` is missing from pagecheck's route list, so I add it before the first re-run.

---

## Batch 1: Home, Book, Contact

**1. Home hero lead** (`home.ts`, `hero.lead`)
- Before: "I'm {fullName}. I handle the strategy, the website, the search work and the reporting for independent optical practices, so you can see which marketing brings in appointments. You work with me directly, from the first call to the monthly report."
- After: "I'm {fullName}, and I work with independent optical practices. Each month you get a plain report that shows which of your marketing is bringing in appointments."
- Why: names what you get, drops the job list. 27 words. The four services are one scroll below, so nothing is lost.

**2. Home "What Does Optical Marketing Include?" lead** (`marketingScope.lead`)
- Before: "Marketing covers more than posting online. Posting is one small part of a list that is longer and more useful."
- After: "Many owners hear the word marketing and think of social posts. Posting is one small part. Five other parts sit around it."
- Why: states the wedge plainly. The five parts below it are customer, compare, website, findability and numbers.

**3. Home differentiator titles** (`differentiators`, bodies unchanged)
- Before: "You Work With Me" / "You See The Homework First" / "Built For Your Practice" / "You Will Understand Your Numbers"
- After: "Direct Access To Me" / "Homework Before Spending" / "Made For Optical" / "Numbers In Plain Words"
- Why: three of four began with "You". The bodies already say it: "You call and I answer, and I do the work myself", "I study your market ... before I recommend spending anything", and so on.

**4. Book page lead** (`booking.ts`, `booking.lead`, first sentence only)
- Before: "Half an hour, just the two of us. You tell me what's going on, I ask questions, and you leave knowing what I'd do first. Pick a time and it comes straight to me."
- After: "We talk for half an hour, just the two of us. You tell me what's going on, I ask questions, and you leave knowing what I'd do first. Pick a time and it comes straight to me."
- Why: the first sentence had no verb. /book owns the first-call promise.

**5. Contact steps** (`contact.ts`, `contactSteps`, shown on /book and /contact)
- Before: "I read it myself." / "We talk for half an hour." / "I tell you whether I can help." / "You decide. I won't chase you."
- After: "I read your message myself." / "We talk for half an hour, just the two of us." / "I tell you whether I can help and where I would start." / "You decide what happens next, and I won't chase you."
- Why: same four facts, uneven length (5, 10, 12, 10 words) so it reads like speech. The last step was two sentences stacked.

**6. Contact section default lead** (`contactSection.lead`)
- Before: "Tell me what's going on. Half an hour is enough to work out where to start."
- After: "Tell me what is going on and we will work out where to start."
- Why: the steps beside it already say half an hour. The /contact page passes its own lead, so this default may not render today. I will check before editing.

**7. Book page meta description** (`app/book/page.tsx`)
- Before: "Half an hour on the phone. Pick a time, tell me what's going on, and leave knowing what I'd do first."
- After: "Pick a time and tell me what is going on. You leave the call knowing where I would start."
- Why: fragment opener, and the page body already owns "half an hour". 91 characters, inside the 50 to 155 range.

No change: Home closing ("If I cannot help, I will say so" stays here, it is the owner), Home personal note, aboutStrip, contact page lead and meta.

## Batch 2: Optical, Services, Pricing, FAQs

**8. Optical lead** (`optical.ts`, `opticalHero.lead`)
- Before: "... which numbers show appointments. I made glasses in an optical lab, then sold on the sales floor and managed stores, so you will not spend the first month explaining your week to me."
- After: the first sentence stays. Then: "I made glasses in an optical lab, then sold on the sales floor and managed stores. You will not spend the first month explaining your week to me."
- Why: sentence rhythm only (29, 16, 12 words instead of 29, 29).

**9. Optical closing band** (`optical-marketing/page.tsx`)
- Before: title "Tell Me About Your Practice", lead "Half an hour on the phone. I will tell you where I would start, and whether I am the right person at all."
- After: same title, lead "Tell me whether insurance, the exam schedule, the frame board or recall is where you are stuck."
- Why: ties the band to the four blocks above it and drops the repeated promise.

**10. Services closing band** (`services/page.tsx`)
- Before: title "Not Sure Which One You Need?", lead "That is what the first call is for. Tell me what is going on and I will tell you where I would start."
- After: same title, lead "Tell me which of the four sounds closest to your problem."

No change: Pricing ("What It Costs"), every FAQ answer, the Services titles, the four optical difference blocks.

## Batch 3: About, Method, 404, copy location

**11. About "What You Get" points** (`about.ts`, `workingWithMe.points`)
- Before: "A consultant who has worked a lab bench and a sales floor." / "Business sense and marketing in the same conversation." / "A direct line to me, by phone or email." / "A monthly report and a review every 90 days." / "A straight answer about whether I can help you, including when the answer is no."
- After: "I have worked a lab bench and a sales floor." / "Business and marketing come up in the same conversation." / "You reach me directly by phone or email." / "Everything we build sits in your own accounts, and I explain the work as I do it."
- Why: noun fragments become sentences. The report and the "I can say no" line live with their owners (Method and Home). Both facts are already in your Home personal note.

**12. About closing band** (`about/page.tsx`)
- Before: "Half an hour on the phone, just the two of us."
- After: "Tell me what you are working on and I will say where my background applies."

**13. Method closing band** (`method/page.tsx`)
- Before: "Tell me about the practice on a free call. I will tell you which phase I would start in, and what that would involve."
- After: "Tell me what you want fixed and I will say which phase I would start in."
- Why: this changes my earlier draft, because most owners will not know which phase they are in.

**14. 404 heading** (`not-found.tsx`)
- Before: "That page is not here"
- After: "That Page Is Not Here"

**15. Copy moves out of TSX, no wording change.** The page leads, closing band text, Services section title, "The Background" strip, FAQ default title, "What Happens Next", footer line and 404 text move into `src/content`. I list every string before I touch one.

## Not changed on purpose
The On-Sight case study and figures, legal pages, the receipt email, forms and booking logic, URLs and anchors.

## What I need from you
Reply "apply all" to take these as written, or send changes by number (for example "1: use ... instead"). Anything you want kept as it was, say so by number. I build batch 1 first and show you the preview before batch 2.
