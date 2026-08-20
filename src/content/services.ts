import { BarChart3, Compass, MapPin, Monitor, type LucideIcon } from "lucide-react";
import { location } from "@/lib/site";

export type Service = {
  /** Anchor id. Linked from the home page and the footer, so keep these stable. */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One line, used on the home page overview row. */
  summary: string;
  /** Two or three sentences, used at the top of the section on /services. */
  body: string;
  included: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    title: "Growth Strategy And Consulting",
    summary: "Find out where the growth actually is before you spend anything on reaching it.",
    body:
      "Most marketing problems are really positioning problems. I start by studying your market, your buyers, and the " +
      "alternatives they are weighing against you, then turn that into a plan you can follow. You see the research " +
      "before a dollar goes out the door, and you keep it whether we work together after that or not.",
    included: [
      "Market and competitor research specific to your industry",
      "Customer profiles built on how your buyers actually decide",
      "Positioning and messaging aimed at the buyer worth winning",
      "A growth roadmap with priorities, budget ranges, and KPIs",
      "A clear read on which channels are worth your money and which are not",
    ],
    bestFor: "Owners who are busy but not growing, and cannot tell which part of the funnel is the problem.",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "Websites That Convert",
    summary: "A site built around how your business runs, not pulled off a template shelf.",
    body:
      "A website earns its keep when it turns a visitor into an inquiry. I design and build around your actual sales " +
      "process, which means the pages, the forms, and the follow-up match how you take on work. Everything is built " +
      "to load fast, work on a phone, and stay usable for the people who need accessibility support.",
    included: [
      "Custom design and build, never a purchased template",
      "Conversion paths mapped to how you actually close work",
      "Forms and intake that match your day to day workflow",
      "Fast, mobile-first pages that meet accessibility standards",
      "Content structure that gives search engines something to rank",
    ],
    bestFor: "Businesses whose site looks dated, loads slowly, or brings in traffic that never turns into inquiries.",
  },
  {
    id: "local-seo",
    number: "03",
    icon: MapPin,
    title: "Local SEO And Google Business Profile",
    summary: `Be the business ${location.city} buyers find when they search for what you do.`,
    body:
      `Local search is where most ${location.city} buying decisions start, and it is increasingly where AI assistants ` +
      "pull their answers from too. I work on the parts that decide whether you show up: your Google Business Profile, " +
      "your review flow, the structured data on your site, and content written around how people in your area actually " +
      "search. No guaranteed rankings, because nobody can promise those honestly.",
    included: [
      "Google Business Profile setup, cleanup, and ongoing management",
      "Local keyword research based on real search behavior in your area",
      "Structured data and technical SEO so search engines can read your site",
      "Review generation and response process you can hand to your team",
      "Visibility in AI answer engines, not just the traditional results page",
    ],
    bestFor: "Practices, stores, and firms that depend on nearby customers and are hard to find on Google or Maps.",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Analytics, Tracking And Paid Media",
    summary: "Reporting you can read yourself, and ad spend that has to justify itself.",
    body:
      "You should never have to take a marketer's word for what is working. I set up tracking and dashboards you can " +
      "open and understand without a translator, then use them to decide where budget goes. Paid search and paid " +
      "social only enter the picture once the numbers say they will pay for themselves.",
    included: [
      "GA4 and conversion tracking configured and explained in plain language",
      "Dashboards that answer your questions, not vanity metrics",
      "Paid search and paid social when the math supports the spend",
      "Email and follow-up sequences built around your sales process",
      "Regular reviews tied to the KPIs we set at the strategy stage",
    ],
    bestFor: "Owners who are spending on marketing but cannot say what any of it returned.",
  },
];

export type IndustryFocus = {
  title: string;
  body: string;
};

/**
 * The three verticals that used to be standalone landing pages. They live as a
 * single section now: near-duplicate location and vertical pages are the exact
 * pattern search engines demote as doorway content.
 */
export const industryFocus: IndustryFocus[] = [
  {
    title: "Healthcare And Optical Practices",
    body:
      "I spent the first part of my career in optical, from the manufacturing side of glasses to managing the retail " +
      "floor. I can talk about frame boards, exam scheduling, and managed care without needing it explained. Patients " +
      "decide whether you feel credible long before they call, and that is usually where the work is.",
  },
  {
    title: "Retail And E-commerce",
    body:
      "When sales look fine but profit does not, the answer is usually hiding in the message, the site, or the ad " +
      "spend. I look at all three together so you can see where the money is actually going instead of guessing at it.",
  },
  {
    title: "Professional Services",
    body:
      "Referrals are a great business until they slow down and you are suddenly doing outreach. A credible site, " +
      "visible proof, and a real intake process turn your reputation into inbound inquiries instead of cold calls.",
  },
];
