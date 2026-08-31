import { Eye, MapPin, Monitor, Ruler, type LucideIcon } from "lucide-react";
import { location } from "@/lib/site";

/**
 * Copy for `/optical`. Every biographical claim on this page is already made on
 * `/about`: the lab job, the move out front, managing the store, and the run
 * through corporate, franchise, and independent shops. Nothing beyond that is
 * asserted, because inventing practice detail on the one page that trades on
 * first-hand experience would undo the point of the page.
 *
 * This page is third in line to tell that story, after the home hero and the
 * /about chapters, so it does not retell it. It states the experience once, in
 * the vocabulary of the reader's own shop, and links out for the rest.
 */

export const opticalHero = {
  headline: "Marketing help for optical practices",
  lead:
    "I spent my first career in optical. I worked in the lab, sold on the floor, and managed the store. You " +
    "won't have to explain your business to me.",
} as const;

export const opticalBackground = {
  title: "My Background In Optical",
  body: [
    "I started in the lab making the product, moved out front to sell it, and ended up managing the store with " +
      "a number to hit every month. I did that in corporate stores, in franchises, and in small independents.",
    "So when you tell me the frame board isn't moving, or the store was busy all month and you still missed " +
      "your number, I know what you mean.",
  ],
  image: {
    src: "/photos/story/cartier-rimless.webp",
    alt: "A gold rimless Cartier frame on a white surface, the panther detail on the temple in focus.",
  },
} as const;

export type OpticalProblem = {
  title: string;
  body: string;
};

/**
 * Written from what is true of small practices generally, not from a claim about
 * any particular one. No named client, no invented local detail.
 */
export const opticalProblems: OpticalProblem[] = [
  {
    title: "Your Website Looks Dated",
    body:
      "The room is calm, the frames are good, and your staff know what they're doing. Then the site is a template " +
      "from years ago, and it's the first thing a new patient sees.",
  },
  {
    title: "Hard To Find On Google",
    body:
      "Someone looking for an eye exam searches on their phone and picks from what comes up nearby. If your " +
      "listing is thin or your hours are wrong, you're not on that list.",
  },
  {
    title: "Nobody Can See Your Frames",
    body:
      "You pick the frame board carefully and nobody sees it until they walk in. The part of the business with " +
      "the best margin is the part nobody can look at first.",
  },
  {
    title: "Reports You Can't Use",
    body:
      "A report arrives with impressions on it. Nobody tells you whether it booked any exams, and you shouldn't " +
      "have to call someone to get your own numbers explained.",
  },
];

export type OpticalStep = {
  icon: LucideIcon;
  title: string;
  body: string;
  /** Anchor on `/services`, so the detail lives in one place. */
  href: string;
};

export const opticalSteps: OpticalStep[] = [
  {
    icon: Ruler,
    title: "Find The Real Problem",
    body:
      "It's rarely the thing you called about. I look at who's walking in, who isn't, and what the practices near " +
      "you are offering before I tell you to spend anything.",
    href: "/services#strategy",
  },
  {
    icon: Monitor,
    title: "Fix The Website",
    body:
      "It should look like the practice, load fast on a phone, and make booking an exam easy to find.",
    href: "/services#websites",
  },
  {
    icon: MapPin,
    title: "Get Found On Google",
    body:
      "Your listing, your hours, your reviews, and the pages that put you in front of someone searching in " +
      `${location.city}.`,
    href: "/services#local-seo",
  },
  {
    icon: Eye,
    title: "Show You The Numbers",
    body:
      "I go through the numbers with you as we go. By the end you can tell what's working without calling me, " +
      "and all of it sits in your accounts.",
    href: "/services#analytics",
  },
];

export const opticalClosing = {
  title: "You Keep It",
  body:
    "I'm not trying to be a bill you pay forever. I want the practice easier to find, easier to book, and the " +
    "numbers simple enough that you can read them yourself.",
} as const;
