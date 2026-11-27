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
  /** What I do in this phase, written as a couple of plain sentences. */
  whatIDo: string;
  /** What the client has in hand at the end of it, also plain sentences. */
  whatYouGet: string;
};

export const scaleIntro = {
  name: "The SCALE Method",
  /** The heading over the five-letter preview on the home page. */
  previewTitle: "How Working With Me Goes In Five Phases",
  lead:
    "Every practice I work with goes through the same five phases. I finish one, show you what I found, and " +
    "we agree before I start the next.",
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
      "First I find out who buys from practices like yours, what else they could pick instead of you, and what " +
      "tips them one way or the other.",
    whatIDo:
      "I look at what the competition charges and how it talks about itself. Then I work out what makes " +
      "someone pick one practice over another.",
    whatYouGet:
      "You get the gaps I found in your market and what I would do first given your budget.",
  },
  {
    letter: "C",
    number: "02",
    icon: Users,
    title: "Clarify The Client View",
    summary: "I look at your business the way a customer sees it.",
    description:
      "Before I change anything, I look at your practice the way a stranger would.",
    whatIDo:
      "I sit down with you and with whoever deals with your customers every day. Then I read your reviews, " +
      "the bad ones too, and see how the practices around you describe themselves.",
    whatYouGet:
      "You get a description of the customer you do best with, what sets you apart if anything does, " +
      "and the first changes I would make.",
  },
  {
    letter: "A",
    number: "03",
    icon: Target,
    title: "Align The Strategy",
    summary: "We agree what to say and where to say it.",
    description:
      "Now we turn what I found into a plan, and we decide it together.",
    whatIDo:
      "We settle what you are saying and who you are saying it to. Then we pick the handful of places worth " +
      "showing up, and match all of it to your goals and what you can spend.",
    whatYouGet:
      "You get a plan, a view of which pages and channels are worth it, and a short list of numbers worth " +
      "watching.",
  },
  {
    letter: "L",
    number: "04",
    icon: Rocket,
    title: "Launch The System",
    summary: "I build the website and the tracking the plan needs.",
    description:
      "Then I build it, including the website and the tracking if they do not exist yet.",
    whatIDo:
      "I build or fix the website and the pages that matter, and I put tracking in so we can see what " +
      "happens. Before anything goes live, I go through the whole thing.",
    whatYouGet:
      "You get a website built for the plan, tracking and reporting in one place, and a full check of both " +
      "before launch.",
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
    whatIDo:
      "I track the calls, the forms and the visits, and I look for where people give up and leave. Then I " +
      "adjust the message, the pages and the spend.",
    whatYouGet:
      "You get a monthly report, a review every 90 days of what is working, and a short list of what to do " +
      "next.",
  },
];

export type WorkingStandard = {
  title: string;
  description: string;
};

export const workingStandards: WorkingStandard[] = [
  {
    title: "Homework Comes First",
    description: "Before I suggest you spend anything, I look at your market and your customers.",
  },
  {
    title: "Built Around You",
    description: "The plan fits your team, your budget and how you already work.",
  },
  {
    title: "Everything Connected",
    description: "I keep the website, the tracking and the reporting together in one place.",
  },
  {
    title: "Reports You Can Use",
    description: "Each report ends with a short list of what to do next.",
  },
];
