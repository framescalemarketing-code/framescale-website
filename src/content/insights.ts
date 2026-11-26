import type { ContentBlock } from "@/content/blocks";

type PublicationState =
  | {
      /**
       * Gate for the whole article. `false` means a draft: it is left off the index
       * and the sitemap, carries `noindex`, and returns a 404 on the production
       * deployment. Jonathan flips this to `true` after editing the piece in his
       * own voice.
       */
      published: false;
      datePublished?: string;
    }
  | {
      published: true;
      /** ISO date. Required once published, because Article schema uses it. */
      datePublished: string;
    };

export type InsightArticle = PublicationState & {
  slug: string;
  /** Title tag and H1. Kept under 60 characters so it is not truncated in results. */
  title: string;
  /** Meta description and the page lead. Under 155 characters. */
  description: string;
  /** The one service this piece points to, besides the method and contact pages. */
  service: { label: string; href: string };
  blocks: ContentBlock[];
};

/**
 * DRAFTS FOR JONATHAN TO EDIT. Written on 2026-11-26 from general marketing
 * practice, with no statistics, benchmarks, client results or vendor claims, so
 * nothing here needs a source. They are still first-person pieces under his
 * name: each one should be read, corrected and put into his own words before
 * `published` is set to `true`.
 */
export const insightArticles: InsightArticle[] = [
  {
    slug: "what-optical-practice-marketing-includes",
    title: "What Optical Practice Marketing Actually Includes",
    description:
      "Optical practice marketing covers more than social media. These are the five parts I look at, in the order I work through them.",
    published: false,
    service: { label: "Strategy Before Spending", href: "/services#strategy" },
    blocks: [
      {
        kind: "paragraph",
        text:
          "Most owners I meet were told that marketing means posting online. Posting is one small part of a longer " +
          "list, and it is often not the part holding a practice back. This is how I split the work when I look at " +
          "an independent optical practice.",
      },
      { kind: "heading", text: "Who Your Customer Is" },
      {
        kind: "paragraph",
        text:
          "Everything else depends on this. A practice with a loyal base of families needs different marketing from " +
          "one near a cluster of offices with plenty of walk-in traffic. I start by writing down who buys from you " +
          "now and who you would like more of.",
      },
      { kind: "heading", text: "How You Compare" },
      {
        kind: "paragraph",
        text:
          "Patients choose between you and the chain down the road, the warehouse club and the online seller. I look " +
          "at what those competitors offer and charge, so you can decide where you stand and what you want to be " +
          "known for.",
      },
      { kind: "heading", text: "What Your Website Says" },
      {
        kind: "paragraph",
        text:
          "A patient decides quickly whether to book. The site has to say what you offer, who it is for and how to " +
          "reach you, and it has to work on a phone, because that is where most people will see it.",
      },
      { kind: "heading", text: "Whether People Can Find You" },
      {
        kind: "paragraph",
        text:
          "Search engines and AI assistants now answer questions about glasses and eye care directly. The pages and " +
          "wording on your site decide whether your practice gets mentioned in those answers.",
      },
      { kind: "heading", text: "Which Numbers Matter" },
      {
        kind: "paragraph",
        text:
          "A report should tell you whether the marketing brought in appointments. If yours does not, you are paying " +
          "for activity and guessing at the result.",
      },
      {
        kind: "paragraph",
        text: [
          { text: "I cover all five in " },
          { text: "the services I offer", href: "/services" },
          { text: ", and I follow the same order each time, which I explain on " },
          { text: "the method page", href: "/method" },
          { text: ". If you want to talk through where your own practice stands, " },
          { text: "book a free call", href: "/contact" },
          { text: "." },
        ],
      },
    ],
  },
  {
    slug: "numbers-to-track-optical-practice",
    title: "Five Numbers To Track For Your Optical Practice",
    description:
      "Five numbers show an optical practice owner whether marketing works: new patient share, capture rate, site conversion, cost per patient and recall.",
    published: false,
    service: { label: "Reports You Can Read", href: "/services#analytics" },
    blocks: [
      {
        kind: "paragraph",
        text:
          "You can run a marketing report with fifty numbers in it and still not know whether it is working. I keep " +
          "the list short. These five are the ones I ask for first, and I explain each in plain terms. I leave out " +
          "benchmarks on purpose, because they vary a lot between practices. Compare yourself with last year before " +
          "you compare yourself with anyone else.",
      },
      { kind: "heading", text: "New Patient Share" },
      {
        kind: "paragraph",
        text:
          "Out of everyone who had an exam this month, how many had never been to you before? It shows whether you " +
          "are growing the base or only serving the people you already have.",
      },
      { kind: "heading", text: "Capture Rate" },
      {
        kind: "paragraph",
        text:
          "Of the patients who had an exam, how many bought their glasses or contacts from you? A practice can fill " +
          "the exam schedule and still lose the sale at the front desk, which is why this one often matters more " +
          "than a new advertisement.",
      },
      { kind: "heading", text: "Website Conversion Rate" },
      {
        kind: "paragraph",
        text:
          "Of the people who visit your website, how many book or call? If plenty of people visit and few act, the " +
          "problem is the site and not the traffic.",
      },
      { kind: "heading", text: "Cost To Acquire A Patient" },
      {
        kind: "paragraph",
        text:
          "Take what you spent on marketing in a period and divide it by the new patients you gained in the same " +
          "period. The answer is rough. It is still far more useful than a list of clicks.",
      },
      { kind: "heading", text: "Recall Rate" },
      {
        kind: "paragraph",
        text:
          "Of the patients who were due back, how many came? Bringing back someone who already trusts you costs " +
          "less than finding a new patient, so this number tells you how much room you have before you spend on " +
          "anything else.",
      },
      {
        kind: "paragraph",
        text: [
          { text: "I set up tracking for these in the evaluate phase of " },
          { text: "my method", href: "/method#phase-e" },
          { text: ". If you would like to see where your own numbers stand, " },
          { text: "tell me about your practice", href: "/contact" },
          { text: "." },
        ],
      },
    ],
  },
  {
    slug: "read-a-marketing-report",
    title: "How To Read A Marketing Report From An Agency",
    description:
      "A plain checklist for reading a marketing report: what was spent, what changed, which new patients came from which work, and what the report leaves out.",
    published: false,
    service: { label: "Reports You Can Read", href: "/services#analytics" },
    blocks: [
      {
        kind: "paragraph",
        text:
          "A good marketing report can be read without the person who wrote it on the phone. Many are not. If you " +
          "have a report in front of you now, these are the questions I would ask of it.",
      },
      { kind: "heading", text: "What Was Spent?" },
      {
        kind: "paragraph",
        text:
          "Look for a single figure for the period, split by where the money went. If you cannot find it, ask for " +
          "it before you read anything else.",
      },
      { kind: "heading", text: "What Changed?" },
      {
        kind: "paragraph",
        text:
          "A report should say what was done this period and what moved as a result. A page of charts with no " +
          "sentence beside them leaves you to work out the story yourself.",
      },
      { kind: "heading", text: "Which New Patients Came From Which Work?" },
      {
        kind: "paragraph",
        text:
          "This is the one that counts. Clicks, impressions and followers describe attention. Appointments describe " +
          "your business. If the report cannot connect the two, ask how they are tracking calls and bookings.",
      },
      { kind: "heading", text: "What Is Missing?" },
      {
        kind: "paragraph",
        text:
          "Every report leaves something out. Ask what the numbers cannot tell you yet, and whether anything was " +
          "left out because it looked bad. An honest answer here is a good sign.",
      },
      { kind: "heading", text: "What Happens Next?" },
      {
        kind: "paragraph",
        text:
          "You should finish the report knowing what is planned for next month and why. If you finish it with " +
          "only a feeling that things are busy, the report has not done its job.",
      },
      {
        kind: "paragraph",
        text: [
          { text: "This is how I write my own reports, and it is one of the " },
          { text: "services I offer", href: "/services#analytics" },
          { text: ". If you would like a second opinion on a report you already have, " },
          { text: "send it to me", href: "/contact" },
          { text: "." },
        ],
      },
    ],
  },
];

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}

export function getPublishedInsights(): InsightArticle[] {
  return insightArticles.filter((article) => article.published);
}

/**
 * Drafts are visible on the local dev server and on Vercel preview deployments
 * so Jonathan can read them. Everything else, including a production build
 * anywhere, hides them. Static pages read this at build time.
 */
export function canShowDrafts(): boolean {
  return process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview";
}
