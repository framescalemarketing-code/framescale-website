import type { FaqItem } from "@/content/faq";

/**
 * The vertical page. This is the only page on the site written for one industry,
 * and it exists because Jonathan actually worked in that industry rather than
 * because the keyword looked available. See the one-vertical rule in README.md
 * before adding a second one.
 *
 * Voice matches the rest of the site: first person, plain, every line a real
 * sentence. No promise of a specific ranking, revenue, or patient count.
 */
export const opticalHero = {
  headline: "Marketing for independent optical practices",
  lead:
    "I worked in optical for years before I did this. I started in the back making the product, moved out front " +
    "to sell, and ended up managing a store with a number to hit every month. I already know what your week " +
    "looks like, so you will not spend the first month explaining it to me.",
} as const;

export type OpticalDifference = {
  title: string;
  body: string;
};

/**
 * The credibility payload. Anyone can claim a vertical; these are the details
 * that are difficult to fake without having stood behind the counter.
 */
export const opticalDifferences: OpticalDifference[] = [
  {
    title: "Insurance Decides What You Can Even Offer",
    body:
      "A practice billing VSP or EyeMed cannot run the promotions a cash retailer runs. Most of the margin sits " +
      "in lens upgrades and the second pair rather than the exam, so an ad that fills the schedule with exam-only " +
      "patients can leave you busier and no better off.",
  },
  {
    title: "The Exam Schedule Is The Real Ceiling",
    body:
      "Sending more people to a practice that has no open lanes just creates a waiting list and a bad review. I " +
      "look at how many exam slots you actually have, and what happens to a patient between the exam and the " +
      "dispensing table, before I try to bring you anyone new.",
  },
  {
    title: "The Frame Board Is Inventory, Not Decoration",
    body:
      "Boards go stale and quietly stop earning. What sells, what sits for a year, and what you reorder out of " +
      "habit all change what is worth advertising, and none of it shows up in a marketing report that only counts " +
      "clicks.",
  },
  {
    title: "Recall Costs Less Than Any Advertising",
    body:
      "You already have the patient list. Most independents I meet have never set up a proper annual recall, and " +
      "it is usually the first thing I fix. Bringing back someone who already trusts you is cheaper than buying a " +
      "stranger, and it works faster.",
  },
];

/**
 * REVIEW BEFORE LAUNCH. These are drafted from general optical industry
 * knowledge and should be replaced with Jonathan's own answers. Specific,
 * first-hand answers are the whole point of this block: generic ones rank for
 * nothing and get skipped by answer engines, which is the surface this page is
 * built for. Answers are emitted verbatim into FAQPage JSON-LD.
 */
export const opticalFaqs: FaqItem[] = [
  {
    question: "Do I have to be near you for this to work?",
    answer:
      "No. I work remotely with practices anywhere in the country. An independent optical in Ohio has the same " +
      "problems as one in California, and everything I do happens on your website, your Google listing, and your " +
      "patient list rather than in your waiting room.",
  },
  {
    question: "How is this different from hiring a general marketing agency?",
    answer:
      "An agency will learn your business on your budget. I already know what a second-pair attach rate is, why " +
      "a January schedule looks different from a September one, and what happens when a chain opens up the road. " +
      "You are not paying me to get up to speed.",
  },
  {
    question: "My buying group already gives me a website. Is that enough?",
    answer:
      "Sometimes it is fine, and I will tell you if it is. The common problem is that those sites are the same " +
      "template every other member got, so they say nothing specific about you and they are hard to change. If " +
      "yours books appointments and loads quickly on a phone, keep it.",
  },
  {
    question: "Will you work with a practice that competes with mine?",
    answer:
      "No. If I am working with a practice, I will not take another one close enough to compete with it. If you " +
      "ask and I already have someone in your area, I will say so on the first call rather than after you have " +
      "paid me.",
  },
  {
    question: "How long before the schedule starts filling?",
    answer:
      "Recall and the Google listing can move within weeks because they use people who already know you. Anything " +
      "that depends on ranking in search takes a few months, because that is how long it takes search engines to " +
      "notice a change. Anyone promising faster is guessing.",
  },
  {
    question: "Do you work with optometrists, opticians, or optical retail?",
    answer:
      "All three, and the work is different for each. A practice with exam lanes has a schedule to fill. A " +
      "dispensary without an OD lives entirely on the board and the lab. Tell me which one you are and I will " +
      "tell you where I would start.",
  },
  {
    question: "There is a chain a mile away. Is that hopeless?",
    answer:
      "No, but you should not fight them on price or on hours, because you will lose both. Independents win on " +
      "the things a chain cannot staff for, which is usually the exam itself, the frames nobody else carries, and " +
      "the fact that the same person remembers the patient next year.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Half an hour on the phone, then access to look at your website, your Google listing, and whatever numbers " +
      "you already have. I will tell you what I think is wrong and what I would do about it. If I am not the right " +
      "person, I will say that instead.",
  },
];

/**
 * Third-person summary for the Service node in JSON-LD. The hero lead is
 * written in Jonathan's voice for the page; schema wants a plain description.
 */
export const opticalSchemaDescription =
  "Marketing for independent optical practices and eyewear retailers, covering websites, local search, " +
  "patient recall, and reporting. Delivered remotely across the United States.";
