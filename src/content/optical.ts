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
    "I spent my first career in optical. The lab, the sales floor, and a number to hit at the end of every " +
    "month. You will not be explaining any of it to me.",
} as const;

export const opticalBackground = {
  title: "Same Side Of The Counter",
  body: [
    "I started in the lab making the product, moved out front to sell it, and ended up managing the store with a " +
      "number to hit every month. I did that in corporate stores, in franchises, and in small independents.",
    "So when you tell me the frame board is not moving, or that the floor was busy all month and the month still " +
      "came up short, I am not taking notes on what those words mean.",
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
    title: "A Site That Undersells You",
    body:
      "The room is calm, the frames are good, and the staff know what they are doing. Then the site is a template " +
      "from years ago, and it is the first thing a new patient sees.",
  },
  {
    title: "Invisible On Maps",
    body:
      "Someone looking for an eye exam searches on their phone and picks from what comes up nearby. A thin " +
      "listing or the wrong hours keeps you off that shortlist entirely.",
  },
  {
    title: "The Frame Board Nobody Sees",
    body:
      "You choose the frame board carefully and it stays invisible until somebody walks in. The part of the " +
      "business with the best margin is the part nobody can look at first.",
  },
  {
    title: "Reports Without Answers",
    body:
      "A report arrives with impressions on it. Nobody tells you whether it produced exams, and you should not " +
      "have to call someone to have your own numbers read back to you.",
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
    title: "Diagnosis First",
    body:
      "It is rarely the thing you called about. I look at who is walking in, who is not, and what the practices " +
      "near you are offering before I recommend spending a dollar.",
    href: "/services#strategy",
  },
  {
    icon: Monitor,
    title: "A Site That Pulls Its Weight",
    body:
      "It should look like the practice, load fast on a phone, and make booking an exam obvious.",
    href: "/services#websites",
  },
  {
    icon: MapPin,
    title: "Local Visibility",
    body:
      "Your listing, your hours, your reviews, and the pages that put you in front of someone searching in " +
      `${location.city}.`,
    href: "/services#local-seo",
  },
  {
    icon: Eye,
    title: "Reading The Numbers",
    body:
      "I go through the numbers with you as we go. By the end you can tell what is working without me on the " +
      "phone, and all of it sits in your accounts.",
    href: "/services#analytics",
  },
];

export const opticalClosing = {
  title: "The Handoff",
  body:
    "I am not trying to become a line item you pay forever. I am trying to leave the practice easier to find, " +
    "easier to book, and legible to you when you sit down and look at it.",
} as const;
