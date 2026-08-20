import { BarChart3, Compass, MapPin, Monitor, type LucideIcon } from "lucide-react";
import { location } from "@/lib/site";

export type Service = {
  /** Anchor id. Linked from the home page and the footer, so keep these stable. */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One short line for the home page overview row. */
  summary: string;
  /** Two short sentences at the top of the section on /services. */
  body: string;
  included: string[];
  bestFor: string;
};

/**
 * Plain titles on purpose. The audience is owners who do not know or care what
 * "conversion rate optimization" means; the longer keyword phrases live in the
 * page metadata instead.
 */
export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    title: "Figuring Out What's Wrong",
    summary: "Find the real problem before you spend money on the wrong fix.",
    body:
      "Most marketing problems turn out to be a different problem underneath. I look at your customers, your " +
      "competition, and your numbers first, then tell you what I found.",
    included: [
      "A look at who your customers really are",
      "A look at what your competition is doing",
      "A plan for what to fix, in order",
      "A budget that makes sense for your size",
    ],
    bestFor: "Your small business is working hard and it isn't turning into growth.",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "Websites That Work",
    summary: "A website built around how you actually do business.",
    body:
      "A website earns its keep when it turns a visitor into a phone call. I build yours around the way you " +
      "actually sell, and it stays fast and easy to use on a phone.",
    included: [
      "Built for you, not from a template",
      "Easy to use on a phone",
      "Forms that reach you the way you want",
      "Set up so Google can read it",
    ],
    bestFor: "Your site looks old, loads slowly, or never brings in calls.",
  },
  {
    id: "local-seo",
    number: "03",
    icon: MapPin,
    title: "Getting Found On Google",
    summary: `Show up when someone nearby searches for what you do.`,
    body:
      `Most ${location.city} customers start on Google or Maps. I work on the things that decide whether you show ` +
      "up there, including your Google listing and your reviews.",
    included: [
      "Your Google listing, set up and looked after",
      "Reviews, and a simple way to get more",
      "Words on your site that match what people search",
      "Showing up in AI answers too",
    ],
    bestFor: "You rely on local customers and you're hard to find.",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Ads And Straight Answers",
    summary: "Spend only where it pays, and see the numbers in plain English.",
    body:
      "You shouldn't have to take anyone's word for what's working. I set up simple tracking you can read " +
      "yourself, and we only run ads once the numbers say they'll pay for themselves.",
    included: [
      "Simple reports you can actually read",
      "Ads only when they make sense",
      "Follow-up emails to people who inquire",
      "A regular check-in on what's working",
    ],
    bestFor: "You're spending on marketing and nobody can tell you what came back.",
  },
];
