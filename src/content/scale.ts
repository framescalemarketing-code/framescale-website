import { BarChart3, Rocket, Search, Target, Users, type LucideIcon } from "lucide-react";

export type ScalePhase = {
  /** The letter this phase contributes to the acronym. */
  letter: string;
  number: string;
  icon: LucideIcon;
  title: string;
  /** One short line for the condensed treatment. */
  summary: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export const scaleIntro = {
  name: "The SCALE Method",
  lead: "I work the same way every time, and you see each step before we move on.",
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
    summary: "Who is buying, and who else they could buy from.",
    description:
      "I start wide. Who is buying in your area, what else they could pick instead of you, and what tips them one " +
      "way or the other.",
    activities: [
      "Look at who is buying near you",
      "See what the competition charges and how they talk about it",
      "Work out what makes someone pick one over the other",
    ],
    deliverables: [
      "A clear picture of the market you're in",
      "Where the gaps are",
      "What I would do first, given your budget",
    ],
  },
  {
    letter: "C",
    number: "02",
    icon: Users,
    title: "Clarify The Client View",
    summary: "See the business the way a customer sees it.",
    description:
      "You know your business from the inside. Customers only ever see the outside, and the two rarely match. This " +
      "is where we close that gap.",
    activities: [
      "Talk to you, and to whoever deals with customers day to day",
      "Read your reviews properly, including the bad ones",
      "Compare how the competition describes itself",
    ],
    deliverables: [
      "A plain description of your best kind of customer",
      "What genuinely sets you apart, if anything does",
      "The first things worth changing",
    ],
  },
  {
    letter: "A",
    number: "03",
    icon: Target,
    title: "Align The Strategy",
    summary: "Agree what to say and where to say it.",
    description: "Now we turn what I found into a plan, and we decide it together rather than me handing it over.",
    activities: [
      "Settle on what you're saying and who you're saying it to",
      "Pick the handful of places worth showing up",
      "Match it to your goals and what you can spend",
    ],
    deliverables: [
      "A plan built for your business, not a template",
      "Which pages and which channels are worth it",
      "A short list of numbers worth watching",
    ],
  },
  {
    letter: "L",
    number: "04",
    icon: Rocket,
    title: "Launch The System",
    summary: "Build the website and the tracking the plan needs.",
    description:
      "Then I build the thing. If the website or the tracking doesn't exist yet, that gets built too, rather than " +
      "handed to someone else.",
    activities: [
      "Build or fix the website and the pages that matter",
      "Put tracking in so we can see what happens",
      "Go through the whole thing before it goes live",
    ],
    deliverables: [
      "A website built for the plan",
      "Tracking and reporting in one place",
      "Everything ready to switch on",
    ],
  },
  {
    letter: "E",
    number: "05",
    icon: BarChart3,
    title: "Evaluate And Improve",
    summary: "Watch what people do, then change what isn't working.",
    description:
      "Once it's live I watch how people move through it and how the business responds. Then we change the parts " +
      "that aren't pulling their weight.",
    activities: [
      "Track the calls, the forms, and the visits",
      "Find where people give up and leave",
      "Adjust the message, the pages, and the spend",
    ],
    deliverables: [
      "A clear view of what's working",
      "Updates you can read without a translator",
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
    description: "I look at your market and your customers before I suggest you spend anything.",
  },
  {
    title: "Built Around You",
    description: "The plan has to fit your team, your budget, and how you already work. Otherwise nobody follows it.",
  },
  {
    title: "Everything Connected",
    description: "The website, the tracking, and the reporting live in one place instead of five.",
  },
  {
    title: "Reports You Can Use",
    description: "A report is only worth reading if it tells you what to do next.",
  },
];
