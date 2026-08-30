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
  /** Two short sentences at the top of the card on /services. */
  body: string;
  included: string[];
  bestFor: string;
};

/**
 * Plain titles on purpose. The audience does not know or care what "conversion
 * rate optimization" means; the keyword phrasing lives in the page metadata.
 *
 * Each `body` opens on the claim rather than warming up to it, and `bestFor`
 * is written as the sentence an owner would use about themselves, not as a
 * category they have to file themselves under.
 */
export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    icon: Compass,
    title: "Figuring Out What's Wrong",
    summary: "Find the real problem before you spend money on the wrong one.",
    body:
      "Half the time the marketing is not the problem. It is who you are talking to, or what you are saying to " +
      "them. So I go and look at your customers and the businesses you are up against before I recommend a thing.",
    included: [
      "Who your customers really are, as opposed to who you assume they are",
      "What the businesses near you are offering and charging",
      "A list of what to fix, in the order I would fix it",
      "A budget that fits a business your size",
    ],
    bestFor: "You are working flat out and it is not showing up in the numbers.",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "Websites That Work",
    summary: "A site built around the way you actually take work in.",
    body:
      "A website earns its keep by turning someone looking into someone calling. I build around the way you take " +
      "work in now, and it has to be fast on a phone, because that is where most people will see it.",
    included: [
      "Built for you, not pulled off a shelf",
      "Works properly on a phone",
      "Forms that reach you however you want to be reached",
      "Set up so Google can read it",
    ],
    bestFor: "Your site is old, slow, or it just doesn't ring the phone.",
  },
  {
    id: "local-seo",
    number: "03",
    icon: MapPin,
    title: "Getting Found On Google",
    summary: "Come up when someone nearby goes looking for what you sell.",
    body:
      `Most people looking for you in ${location.city} start on Google or Maps, and a growing number ask an AI ` +
      "instead. I work on the things that decide whether your name comes up at all.",
    included: [
      "Your Google listing, set up properly and kept up to date",
      "Reviews, and a way of asking for them that isn't awkward",
      "Wording on your site that matches what people type",
      "Turning up when someone asks an AI rather than searching",
    ],
    bestFor: "You need local customers and right now they are finding somebody else.",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Ads And Straight Answers",
    summary: "Only spend where it pays, and check that yourself.",
    body:
      "You should not have to take my word for what is working. I set up tracking you can open and read on your " +
      "own. I do not put money into ads until the numbers say they will pay for themselves.",
    included: [
      "Reports you can read without me on the phone",
      "Ads, but only when they make sense",
      "Follow-up for the people who get in touch and then go quiet",
      "A regular look at what's working and what isn't",
    ],
    bestFor: "Money goes out every month and nobody can tell you what came back.",
  },
];
