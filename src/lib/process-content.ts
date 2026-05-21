import { Search, Users, Target, Rocket, BarChart3, type LucideIcon } from "lucide-react";

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
};

export type ProcessPrinciple = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Learn The Market",
    description:
      "Before we change anything, we look at your market, your competitors, and how buyers compare options.",
    activities: [
      "Who else is competing for the same customer",
      "How people choose in your market",
      "What competitors say, offer, and charge",
      "What outside factors shape demand right now",
    ],
    deliverables: [
      "What we found",
      "Where the real opportunity is",
      "What this means before you spend more",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Learn Your Business",
    description:
      "Next we learn how your business works, who you want more of, and what makes people choose you.",
    activities: [
      "Calls or meetings to learn the business",
      "Review of your offer, sales process, and current site",
      "Who your best customers are and what they care about",
      "Where the current experience breaks down",
    ],
    deliverables: [
      "Clear picture of your best-fit customer",
      "What makes you easier to choose",
      "What needs to change first",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Make The Plan",
    description:
      "Once the facts are clear, we map out what to say, what to fix, and where to focus first.",
    activities: [
      "Clear message for the right buyer",
      "Which pages, channels, and follow-up matter most",
      "Budget and timing tied to your goals",
      "Priority order for the work",
    ],
    deliverables: [
      "Clear message and offer direction",
      "Priority list for website, content, and ads",
      "Timeline with next steps",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Build It",
    description:
      "Then we build the pieces we agreed on and put them live carefully. That can include the website, tracking, profiles, and campaigns.",
    activities: [
      "Build or update the website",
      "Set up forms, tracking, and reporting",
      "Prepare and launch the agreed channels",
      "Check every part before it goes live",
    ],
    deliverables: [
      "Live website and launch assets",
      "Reporting you can actually read",
      "Clear record of what launched",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Watch And Improve",
    description:
      "After launch, we keep what is working and fix what is not. You always know what changed and why.",
    activities: [
      "Review the numbers on a steady schedule",
      "Test improvements based on real behavior",
      "Move budget toward what is working",
      "Adjust the message when the response changes",
    ],
    deliverables: [
      "Regular performance updates",
      "Next fixes in priority order",
      "Updated plan based on what we learn",
    ],
  },
];

export const processPrinciples: ProcessPrinciple[] = [
  {
    title: "Know Before Spend",
    description:
      "Research comes first so the work starts from what is true, not what sounds good in a meeting.",
  },
  {
    title: "Built Around You",
    description:
      "The website, reporting, and follow-up should fit the way your business actually runs.",
  },
  {
    title: "Always Informed",
    description:
      "You should be able to see what changed, what it cost, and what happened next.",
  },
  {
    title: "One Point Person",
    description:
      "Jonathan stays with the work from the first call through the day to day changes.",
  },
];
