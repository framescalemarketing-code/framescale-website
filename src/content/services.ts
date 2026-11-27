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
    title: "Strategy Before Spending",
    summary: "I study your customers, your competitors and your numbers before I recommend a single purchase.",
    body:
      "Before I recommend any spending, I look at who buys from your practice, what the practices you compete " +
      "with offer and charge, and what your numbers show. Then I list the fixes in the order I would make them.",
    included: [
      "Who your customers are today, and who you want more of",
      "What nearby and online competitors offer and charge",
      "A list of fixes in the order I would make them",
      "A budget that fits a practice your size",
    ],
    bestFor: "You are working flat out and it is not showing up in the numbers.",
    phase: "S",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "A Website That Books Appointments",
    summary: "A fast, clear site built around how your practice takes appointments and sells frames.",
    body:
      "A website earns its keep when a visitor turns into an appointment. I build around how you take bookings " +
      "now, and I design for the phone first because that is where most people will see it.",
    included: [
      "A site designed for your practice from the start",
      "Fast and easy to use on a phone",
      "Contact forms that reach you the way you prefer",
      "Page titles, headings and structure that search engines can read",
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
      "Most people begin with a search engine, and a growing number ask an AI assistant instead. I work on the " +
      "pages and wording that decide whether your practice gets mentioned at all.",
    included: [
      "Pages written around the questions people ask about eyewear and eye care",
      "Titles, descriptions and structured data that search engines read",
      "Reviews and a way of asking for them that feels natural",
      "Answers on your site that an AI assistant can quote accurately",
    ],
    bestFor: "You want new customers to find you, and right now they find somebody else.",
    phase: "A",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Reports You Can Read",
    summary: "Tracking and a monthly report that shows which marketing brought in appointments.",
    body:
      "I set up tracking you can open and read on your own, so you do not have to take my word for what is " +
      "working. I recommend ads only when the numbers say they can pay for themselves.",
    included: [
      "A report you can read without me on the phone",
      "Ads, but only where the numbers support them",
      "Follow-up for the people who get in touch and then go quiet",
      "A monthly report and a review every 90 days of what is working and what is not",
    ],
    bestFor: "Money goes out every month and nobody can tell you what came back.",
    phase: "E",
  },
];
