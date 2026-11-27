import { BarChart3, Compass, Monitor, Search, type LucideIcon } from "lucide-react";

export type Service = {
  /** Anchor id. Linked from the home page and the footer, so keep these stable. */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One short line for the home page overview row. */
  summary: string;
  /** Two short sentences at the top of the service on /services. */
  body: string;
  included: string[];
  bestFor: string;
  /** The SCALE phase this service leans on most, linked on /services. */
  phase: string;
};

/**
 * Plain titles on purpose. Optical owners search for websites, visibility and
 * reports, not for "conversion rate optimization", so the page says what the
 * work is. The ids are older than the titles: they stay put because they are
 * anchor targets in links that already exist.
 */
export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    title: "Strategy",
    summary: "I study your customers, your competitors and your numbers before I recommend a purchase.",
    body:
      "I look at who buys from your practice, what competing practices offer and charge, and what your " +
      "numbers show.",
    included: [
      "Who your customers are today, and who you want more of",
      "What nearby and online competitors offer and charge",
      "A list of fixes in the order I would make them",
      "A budget for each fix",
    ],
    bestFor: "You are working flat out and it is not showing up in the numbers.",
    phase: "S",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "Websites",
    summary: "A site built around how your practice takes appointments and sells frames.",
    body: "I build around how you take bookings now, and I design for the phone first.",
    included: [
      "A site designed for your practice from the start",
      "Booking built into the site, or linked to the tool your practice already uses",
      "Contact forms that reach you where you want them",
      "Page titles, headings and structure set up for search",
    ],
    bestFor: "Your site is old, slow, or does not bring in appointments.",
    phase: "L",
  },
  {
    id: "local-seo",
    number: "03",
    icon: Search,
    title: "Search And AI Visibility",
    summary: "Pages and wording that help your practice appear when people search or ask an AI assistant.",
    body:
      "I work on the pages and wording that decide whether your practice gets mentioned in search and by AI " +
      "assistants.",
    included: [
      "Pages written around the questions people ask about eyewear and eye care",
      "Titles, descriptions and structured data that search engines read",
      "A way to ask patients for reviews",
      "Answers on your site that an AI assistant can quote",
    ],
    bestFor: "You want new customers to find you, and right now they find somebody else.",
    phase: "A",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Reports",
    summary: "Tracking and a monthly report that shows which marketing brought in appointments.",
    body:
      "I set up tracking for the calls, the forms and the visits. I recommend ads only when the numbers say " +
      "they can pay for themselves.",
    included: [
      "Follow-up for the people who get in touch and then go quiet",
      "A monthly report and a review every 90 days of what is working and what is not",
    ],
    bestFor: "Money goes out every month and nobody can tell you what came back.",
    phase: "E",
  },
];
