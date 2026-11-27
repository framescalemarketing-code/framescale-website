import type { FaqItem } from "@/content/faq";

/**
 * The vertical page. This is the only page on the site written for one industry,
 * and it exists because Jonathan worked in that industry rather than
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
    "I work with independent optical practices on their message, website, search visibility and reports. I " +
    "worked in a full service optical lab, then sold on the sales floor and managed stores.",
} as const;

/** Heading and lead over the differences below. */
export const opticalDifferencesIntro = {
  title: "My Background In Optical",
} as const;

export type OpticalDifference = {
  title: string;
  body: string;
};

/**
 * The credibility payload. Every card here comes from what Jonathan did and
 * said himself (2026-11-26): the sales floor, the full service lab, and telling
 * real marketing from upsell marketing. The earlier insurance, exam schedule,
 * frame board and recall cards were the author's own research, not his, and were
 * removed. Add nothing here that he has not said.
 */
export const opticalDifferences: OpticalDifference[] = [
  {
    title: "The Sales Floor",
    body:
      "I worked the sales floor and managed stores, so I have seen how an exam turns into glasses bought, and " +
      "where it does not. I look at that part of your practice alongside the marketing.",
  },
  {
    title: "The Lab",
    body:
      "I worked in a full service lab and repaired the machinery it ran on. Before a promise goes on your " +
      "website, I check it against how the work gets done.",
  },
  {
    title: "Honest Selling",
    body:
      "On the floor I learned to ask customers what they need and talk it through. I work with practices the " +
      "same way: we start with your problem and I recommend only what it needs.",
  },
];

/** Heading and lead over the FAQ block on the optical page. */
export const opticalFaqIntro = {
  title: "Questions From Optical Owners",
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
      "I worked in a full service optical lab and did maintenance and repairs on its heavy machinery. After that I moved " +
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
      "I worked in a full service lab, on the sales floor and in store management. We can spend the first call " +
      "on your practice.",
  },
  {
    question: "How is an independent practice different from a chain?",
    answer:
      "A chain focuses on bringing in as many people as it can. An independent practice depends on keeping its " +
      "patients, so I work on better workflows and follow-up systems, clear communication and consistency.",
  },
  {
    question: "How long before the schedule starts filling?",
    answer:
      "Follow-up with patients you already have can move within weeks. Search work usually takes a " +
      "few months because search engines are slow to notice a change. You get a report every month and a " +
      "review at 90 days.",
  },
  {
    question: "What will I get each month?",
    answer:
      "A monthly report on which marketing brought in appointments. Every 90 days we review the results " +
      "together and agree what to do next.",
  },
  {
    question: "Do you work with optometrists, opticians, or optical retail?",
    answer:
      "Yes, I work with all three, and I have worked in all three. Tell me which one you are and we will talk " +
      "through where to start.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Half an hour on the phone, then access to your website, your analytics and whatever numbers you already " +
      "have. After that we talk through what looks wrong and where to start. If I am not the right " +
      "person, I will say so.",
  },
];

/**
 * Third-person summary for the Service node in JSON-LD. The hero lead is
 * written in Jonathan's voice for the page; schema wants a plain description.
 */
export const opticalSchemaDescription =
  "Marketing for independent optical practices, covering strategy, websites, search and AI visibility, " +
  "patient follow-up, and reporting. Delivered remotely across the United States by a consultant who worked in a " +
  "full service optical lab, on the sales floor and in store management.";
