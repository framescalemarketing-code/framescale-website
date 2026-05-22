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
    title: "Understand The Market",
    description:
      "We look at the people you want to reach, the choices they already have, and the reasons they move forward or hesitate.",
    activities: [
      "Review direct and local competitors",
      "Study buyer expectations, objections, and decision points",
      "Compare positioning, offers, pricing cues, and proof",
      "Identify market conditions that could affect demand",
    ],
    deliverables: [
      "Market research summary",
      "Opportunity gaps worth acting on",
      "Recommendations before more budget is spent",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Clarify Your Business",
    description:
      "We learn how your business makes money, what your best customers value, and where the current experience is slowing growth.",
    activities: [
      "Talk through your goals, offer, sales process, and service model",
      "Review the current website, forms, follow-up, and reporting",
      "Define the customers you want more of and what they care about",
      "Find the moments where trust, clarity, or momentum drops",
    ],
    deliverables: [
      "Best-fit customer profile",
      "Clearer value and proof points",
      "Priority issues holding growth back",
    ],
  },
  {
    number: "03",
    icon: Target,
    title: "Shape The Strategy",
    description:
      "Once the facts are clear, we turn them into a practical plan for the message, site, tracking, and next growth moves.",
    activities: [
      "Create the message direction for the right buyer",
      "Decide which pages, channels, and follow-up need attention",
      "Connect budget, timing, and scope to the business goal",
      "Put the work in the order that creates the most leverage",
    ],
    deliverables: [
      "Strategy direction for the website and marketing",
      "Prioritized roadmap for the work",
      "Timeline with clear next steps",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Build The System",
    description:
      "Then we build the agreed pieces carefully so the website, tracking, profiles, and campaigns work together instead of feeling disconnected.",
    activities: [
      "Build or improve the website pages that matter most",
      "Set up forms, tracking, reporting, and conversion paths",
      "Prepare the agreed profiles, content, and campaigns",
      "Review the experience before anything goes live",
    ],
    deliverables: [
      "Live website improvements and launch assets",
      "Readable reporting tied to business outcomes",
      "Launch record with what changed and why",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Measure And Improve",
    description:
      "After launch, we watch what people do, keep what is working, and improve the parts that need a stronger response.",
    activities: [
      "Review performance on a steady schedule",
      "Test improvements based on real visitor behavior",
      "Move attention and budget toward what is working",
      "Adjust the message when the market response changes",
    ],
    deliverables: [
      "Regular performance updates",
      "Next improvements in priority order",
      "Updated plan based on what we learn",
    ],
  },
];

export const processPrinciples: ProcessPrinciple[] = [
  {
    title: "Research Before Recommendations",
    description:
      "The work starts with what buyers, competitors, and the business model show us. That keeps the plan grounded before money gets spent.",
  },
  {
    title: "Built Around How You Operate",
    description:
      "Your website, reporting, and follow-up should fit the way the business actually runs. The process should make growth easier to manage.",
  },
  {
    title: "Clear Numbers, Clear Decisions",
    description:
      "You should be able to see what changed, what it cost, and what happened next. Reporting is useful only when it helps you decide.",
  },
  {
    title: "One Owner For The Work",
    description:
      "Jonathan stays close to the work from the first conversation through the day-to-day changes. Nothing gets lost between handoffs.",
  },
];
