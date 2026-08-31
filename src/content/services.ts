import { BarChart3, Compass, MapPin, Monitor, type LucideIcon } from "lucide-react";
import { location } from "@/lib/site";

export type Service = {
  /** Anchor id. Linked from the home page and the footer, so keep these stable. */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** The home page overview row. Two or three sentences, not a single line. */
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
    summary:
      "Work out the real problem before you spend money fixing the wrong one. I look at who's actually buying from " +
      "you and what the businesses near you are doing. You get a list of what to fix and the order I'd fix it in.",
    body:
      "Most owners I work with don't realize how much depends on who they're marketing to and what they actually " +
      "say to them. So before I recommend anything I go and look at your customers and the businesses you're up " +
      "against.",
    included: [
      "Who your customers really are, as opposed to who you assume they are",
      "What the businesses near you are offering and charging",
      "A list of what to fix, in the order I would fix it",
      "A budget that fits a business your size",
      "A short written summary you can keep and work through on your own",
    ],
    bestFor: "You're working flat out and it isn't showing up in the numbers.",
  },
  {
    id: "websites",
    number: "02",
    icon: Monitor,
    title: "Websites That Work",
    summary:
      "A site built around the way you actually take work in. It has to be quick on a phone and make getting in " +
      "touch obvious, because that's where most people will see it. When it's done it sits in your own accounts.",
    body:
      "A website is only worth anything if it turns someone looking into someone calling. I build around the way " +
      "you take work in now, and it has to be quick and easy on a phone, because that's where most people will " +
      "see it.",
    included: [
      "Put together for your business from scratch",
      "Works properly on a phone",
      "Forms that reach you however you want to be reached",
      "Set up so Google can read it",
      "Handed over in your own hosting and your own accounts",
    ],
    bestFor: "Your site is old, slow, or it just doesn't ring the phone.",
  },
  {
    id: "local-seo",
    number: "03",
    icon: MapPin,
    title: "Getting Found On Google",
    summary:
      "Come up when someone nearby goes looking for what you sell. That means your listing, your reviews, and the " +
      "wording on your site all pulling the same way. Most businesses never touch any of it.",
    body:
      `Most people looking for you in ${location.city} start on Google or Maps, and a growing number ask an AI ` +
      "instead. I work on the things that decide whether your name comes up at all.",
    included: [
      "Your Google listing, set up properly and kept up to date",
      "Reviews, and a way of asking for them that isn't awkward",
      "Wording on your site that matches what people type",
      "Turning up when someone asks an AI rather than searching",
      "The photos, hours, and details that decide whether somebody clicks",
    ],
    bestFor: "You need local customers and right now they're finding somebody else.",
  },
  {
    id: "analytics",
    number: "04",
    icon: BarChart3,
    title: "Ads And Straight Answers",
    summary:
      "Only spend where it pays, and check that yourself. I set up tracking you can open and read on your own. " +
      "Money goes into ads once the numbers say they'll pay for themselves.",
    body:
      "You shouldn't have to take my word for what's working. I set up tracking you can open and read on your " +
      "own, and I don't put money into ads until the numbers say they'll pay for themselves.",
    included: [
      "Reports you can read without me on the phone",
      "Ads, but only when they make sense",
      "Follow-up for the people who get in touch and then go quiet",
      "A regular look at what's working and what isn't",
      "A number I can point at that tells you whether the spend earned its place",
    ],
    bestFor: "Money goes out every month and nobody can tell you what came back.",
  },
];
