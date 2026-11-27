import type { FaqItem } from "@/content/faq";

/**
 * The vertical page. This is the only page on the site written for one industry,
 * and it exists because Jonathan actually worked in that industry rather than
 * because the keyword looked available. See the one-vertical rule in README.md
 * before adding a second one.
 *
 * Voice matches the rest of the site: first person, plain, every line a real
 * sentence. No promise of a specific ranking, revenue, or patient count. The
 * practice is remote and national, so nothing here frames the work as local
 * search or names a city. Store names appear on /about only.
 */
export const opticalHero = {
  headline: "Optical Marketing For Independent Practices",
  subhead: "From The Lab To The Sales Floor",
  lead:
    "Optical marketing for an independent practice covers who your patients are, what your website says, " +
    "whether people find you in search and AI answers, and which numbers show appointments. I made glasses in " +
    "an optical lab, then sold on the sales floor and managed stores, so you will not spend the first month " +
    "explaining your week to me.",
} as const;

/** Heading and lead over the four differences below. */
export const opticalDifferencesIntro = {
  title: "What Makes Optical Different",
  lead: "These are the things you will not have to teach me.",
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
    title: "Insurance Decides What You Can Offer",
    body:
      "A practice billing VSP or EyeMed cannot run the promotions a cash retailer runs. Much of the margin sits " +
      "in lens upgrades and the second pair, and the exam brings less of it. An ad that fills the schedule with " +
      "exam-only patients can leave you busier and no better off.",
  },
  {
    title: "The Exam Schedule Is The Real Ceiling",
    body:
      "Sending more people to a practice that has no open lanes just creates a waiting list and a bad review. I " +
      "look at how many exam slots you actually have, and what happens to a patient between the exam and the " +
      "dispensing table, before I try to bring you anyone new.",
  },
  {
    title: "The Frame Board Is Inventory",
    body:
      "Boards go stale and quietly stop earning. What sells, what sits for a year, and what you reorder out of " +
      "habit all change what is worth advertising, and none of it shows up in a marketing report that only counts " +
      "clicks.",
  },
  {
    title: "Recall Costs Less Than Advertising",
    body:
      "You already have the patient list. A recall that reaches patients who are due for their yearly exam or a " +
      "new pair costs far less than advertising to strangers. It also works faster, because those patients " +
      "already trust you.",
  },
];

/** Heading and lead over the FAQ block on the optical page. */
export const opticalFaqIntro = {
  title: "Questions From Optical Owners",
  lead: "The ones that come up before we talk about money.",
} as const;

/**
 * REVIEW BEFORE LAUNCH. Drafted from Jonathan's own account of his career and
 * from general optical industry knowledge. Claims about how he works (monthly
 * report, 90-day review) are the ones he confirmed on 2026-11-26. The
 * competing-practice policy and the "first thing I fix" claim were cut because
 * he could not stand behind them. Specific,
 * first-hand answers are the whole point of this block: generic ones rank for
 * nothing and get skipped by answer engines, which is the surface this page is
 * built for. Each answer opens with the direct answer, runs 60 words or fewer,
 * and is emitted verbatim into FAQPage JSON-LD.
 */
export const opticalFaqs: FaqItem[] = [
  {
    question: "What optical experience do you have?",
    answer:
      "I made glasses in an optical lab and did maintenance and repairs on its heavy machinery. After that I moved " +
      "to the sales floor and into store management, and then I earned an MBA in marketing.",
  },
  {
    question: "Do you work with practices anywhere in the United States?",
    answer:
      "Yes. I work remotely with independent optical practices across the United States. The work happens on your " +
      "website, your reports and your patient list, so I do not need to be in your waiting room.",
  },
  {
    question: "How is this different from hiring a general marketing agency?",
    answer:
      "I already know the business, so you do not pay for me to learn it. I know what a second-pair attach rate " +
      "is and why a January schedule looks different from a September one. You can spend the first call on your " +
      "practice instead of on the basics.",
  },
  {
    question: "My buying group already gives me a website. Is that enough?",
    answer:
      "Sometimes. If it books appointments and loads quickly on a phone, keep it. A template shared by every " +
      "member says nothing specific about your practice and can be hard to change.",
  },
  {
    question: "How long before the schedule starts filling?",
    answer:
      "Recall can move within weeks because it reaches people who already know you. Search work usually takes a " +
      "few months because search engines are slow to notice a change. You get a report every month and a " +
      "review at 90 days, so you see the trend as it forms.",
  },
  {
    question: "What will I get each month?",
    answer:
      "A report you can read without a translator, built around which marketing brought in appointments. Every " +
      "90 days we review the results together and agree what to do next.",
  },
  {
    question: "Do you work with optometrists, opticians, or optical retail?",
    answer:
      "Yes, all three, and the work differs for each. A practice with exam lanes has a schedule to fill. A " +
      "dispensary without an OD depends on the frame board and the lab. Tell me which one you are and I will say " +
      "where I would start.",
  },
  {
    question: "There is a chain a mile away. Is that hopeless?",
    answer:
      "No. Do not try to match a chain on price or hours. An independent practice can compete on what a chain " +
      "has trouble staffing: the exam itself, frames nobody else carries and one person who remembers the " +
      "patient next year.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Half an hour on the phone, then access to your website, your analytics and whatever numbers you already " +
      "have. After that I tell you what I think is wrong and what I would do about it. If I am not the right " +
      "person, I will say so.",
  },
];

/**
 * Third-person summary for the Service node in JSON-LD. The hero lead is
 * written in Jonathan's voice for the page; schema wants a plain description.
 */
export const opticalSchemaDescription =
  "Marketing for independent optical practices, covering strategy, websites, search and AI visibility, " +
  "patient recall, and reporting. Delivered remotely across the United States by a consultant who worked in an " +
  "optical lab, on the sales floor and in store management.";
