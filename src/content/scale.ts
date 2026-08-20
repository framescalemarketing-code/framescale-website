import { BarChart3, Rocket, Search, Target, Users, type LucideIcon } from "lucide-react";

export type ScalePhase = {
  /** The letter this phase contributes to the acronym. */
  letter: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One short line for the condensed home page treatment. */
  summary: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export const scaleIntro = {
  name: "The SCALE Method",
  headline: "Five steps, in order",
  lead: "I work the same way every time, and you see the results of each step before we move on.",
} as const;

/**
 * The letters are spelled out here. The previous site used these five titles
 * but never explained the acronym anywhere, so a reader had to work it out.
 */
export const scalePhases: ScalePhase[] = [
  {
    letter: "S",
    number: "01",
    icon: Search,
    title: "Study The Market",
    summary: "Who your customers are and who else they could pick.",
    description:
      "First I look at the bigger picture. Who is buying, what else they could choose, and what makes them decide.",
    activities: [
      "Look at who is actually buying in your area",
      "Look at what your competitors offer and charge",
      "Work out what makes someone choose or walk away",
    ],
    deliverables: [
      "A clear picture of your market",
      "Where the gaps are",
      "What I would do first, on your budget",
    ],
  },
  {
    letter: "C",
    number: "02",
    icon: Users,
    title: "Clarify The Client View",
    summary: "See your business the way your customers see it.",
    description:
      "You know your business inside out. I help you see it the way a customer does, which is usually different.",
    activities: [
      "Talk with you and the people who deal with customers",
      "Read your reviews and what customers already say",
      "Compare how competitors talk about themselves",
    ],
    deliverables: [
      "A simple profile of your best customer",
      "What actually makes you different",
      "The first things worth improving",
    ],
  },
  {
    letter: "A",
    number: "03",
    icon: Target,
    title: "Align The Strategy",
    summary: "Decide together what to say and where to show up.",
    description: "Now we turn what I found into a plan. We decide together what to say and where to show up.",
    activities: [
      "Settle on the message for the right customer",
      "Pick the few places worth being",
      "Match the plan to your goals and budget",
    ],
    deliverables: [
      "A plan built for your business",
      "Which pages and places to focus on",
      "A short list of numbers to watch",
    ],
  },
  {
    letter: "L",
    number: "04",
    icon: Rocket,
    title: "Launch The System",
    summary: "Build the website and tools the plan needs.",
    description: "Then I build what the plan needs. If the website or the tracking does not exist yet, I build it.",
    activities: [
      "Build or fix the website and the pages that matter",
      "Set up tracking so we can see what happens",
      "Check the whole thing works before it goes live",
    ],
    deliverables: [
      "A website built for the plan",
      "Tracking and reports in one place",
      "Everything ready to go live",
    ],
  },
  {
    letter: "E",
    number: "05",
    icon: BarChart3,
    title: "Evaluate And Improve",
    summary: "Watch what happens, then fix what the numbers show.",
    description: "Once it is live I watch what people do and how the business responds, then we improve it.",
    activities: [
      "Track calls, forms, and visits",
      "See where people drop off",
      "Adjust the message, the pages, and the spend",
    ],
    deliverables: [
      "A clear view of what is working",
      "Updates you can actually read",
      "A short list of what to do next",
    ],
  },
];

export type WorkingStandard = {
  title: string;
  description: string;
};

export const workingStandards: WorkingStandard[] = [
  {
    title: "Homework Comes First",
    description: "I look at your market and your customers before I recommend spending anything.",
  },
  {
    title: "Built Around You",
    description: "The plan has to fit your team, your budget, and the way you already work.",
  },
  {
    title: "Everything Connected",
    description: "The website, the tracking, and the reports all live in one place instead of five.",
  },
  {
    title: "Reports You Can Use",
    description: "A report only matters if it tells you what to do next.",
  },
];
