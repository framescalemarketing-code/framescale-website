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
  /** The heading over the five-letter preview on the home page. */
  previewTitle: "How Working With Me Goes In Five Phases",
  lead:
    "I use the same five phases with every practice, and you approve each one before the next begins. You " +
    "always know which phase we are in.",
} as const;

/**
 * The letters are spelled out here. The previous site used these five titles
 * but never explained the acronym anywhere, so a reader had to work it out.
 *
 * Each `description` says what happens in that phase and why it is in this
 * order. A phase that cannot justify its position does not need to be a phase.
 */
export const scalePhases: ScalePhase[] = [
  {
    letter: "S",
    number: "01",
    icon: Search,
    title: "Study The Market",
    summary: "I find out who buys from practices like yours and who else they consider.",
    description:
      "I start wide, because narrowing down too early means fixing the wrong thing. I look at who buys from " +
      "practices like yours, what else they could pick instead of you, and what tips them one way or the other.",
    activities: [
      "Look at who buys from practices like yours",
      "See what the competition charges and how they talk about it",
      "Work out what makes someone pick one practice over another",
    ],
    deliverables: [
      "A clear picture of the market you are in",
      "A list of the gaps I found",
      "What I would do first, given your budget",
    ],
  },
  {
    letter: "C",
    number: "02",
    icon: Users,
    title: "Clarify The Client View",
    summary: "I look at your business the way a customer sees it.",
    description:
      "You know your business from the inside, and customers only see the outside. When the two views differ, " +
      "customers choose based on the one they can see.",
    activities: [
      "Talk to you, and to whoever deals with customers day to day",
      "Read your reviews closely, including the bad ones",
      "Compare how the competition describes itself",
    ],
    deliverables: [
      "A plain description of your best kind of customer",
      "What sets you apart, if anything does",
      "The first things worth changing",
    ],
  },
  {
    letter: "A",
    number: "03",
    icon: Target,
    title: "Align The Strategy",
    summary: "We agree what to say and where to say it.",
    description:
      "Now we turn what I found into a plan. We decide it together, so you know why every piece of it is there.",
    activities: [
      "Settle on what you are saying and who you are saying it to",
      "Pick the handful of places worth showing up",
      "Match it to your goals and what you can spend",
    ],
    deliverables: [
      "A plan built around your business",
      "Which pages and which channels are worth it",
      "A short list of numbers worth watching",
    ],
  },
  {
    letter: "L",
    number: "04",
    icon: Rocket,
    title: "Launch The System",
    summary: "I build the website and the tracking the plan needs.",
    description:
      "Then I build it. If the website or the tracking does not exist yet, I build that too, and I stay on the " +
      "job from start to finish.",
    activities: [
      "Build or fix the website and the pages that matter",
      "Put tracking in so we can see what happens",
      "Go through the whole thing before it goes live",
    ],
    deliverables: [
      "A website built for the plan",
      "Tracking and reporting in one place",
      "A full check of the site and tracking before it goes live",
    ],
  },
  {
    letter: "E",
    number: "05",
    icon: BarChart3,
    title: "Evaluate And Improve",
    summary: "I watch what people do, then we change what is not working.",
    description:
      "Once it is live I watch how people move through it and how the business responds. We review the results " +
      "every 90 days and change the parts that are not working.",
    activities: [
      "Track the calls, the forms and the visits",
      "Find where people give up and leave",
      "Adjust the message, the pages and the spend",
    ],
    deliverables: [
      "A monthly report you can read without a translator",
      "A review every 90 days of what is working",
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
    description: "The plan has to fit your team, your budget and how you already work, or nobody follows it.",
  },
  {
    title: "Everything Connected",
    description: "The website, the tracking, and the reporting all live in one place.",
  },
  {
    title: "Reports You Can Use",
    description: "A report is only worth reading if it tells you what to do next.",
  },
];
