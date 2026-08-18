import {
  Scale,
  TrendingUp,
  Target,
  Code,
  Briefcase,
  FileText,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const professionalServicesContent: IndustryPageContent = {
  hero: {
    icon: Scale,
    badge: "Professional Services",
    title: "Help The People Who Need You Find You",
    description:
      "Most small firms and independent consultants live on referrals, and inbound leads are often nonexistent. Today, a website is crucial for building a proper funnel.",
    media: {
      label: "Workspace detail or bookshelf",
      description:
        "Open notebook with handwritten notes, a pen, a coffee, daylight. Or a shallow-focus bookshelf with relevant titles. No models, no glass-conference-room stock.",
      src: "/photos/professional-services/workspace-hero-v2.jpg",
      alt: "Top-down workspace with a laptop, blank phone, open notebook, and pen on a wooden desk.",
    },
    heroGradient: "deep",
    heroBlob: "bottom-right-deep",
    iconMarkGradient: "deep-primary",
  },

  highlightIconGradient: "deep-primary",

  highlights: {
    header: {
      badge: "Where I Help",
      title: "Modernizing Your Inbound Leads",
      description:
        "Your referrals may already be strong, but when they slow down, you are left doing outreach and taking on too many sales calls. A stronger inbound system with the right website, search visibility, and intake experience can take unnecessary work off your plate.",
    },
    items: [
      {
        icon: Briefcase,
        label: "Consulting & Advisory",
        description: "Consultants and advisors who need a clearer website and intake path so more of the right prospects reach out.",
      },
      {
        icon: Scale,
        label: "Legal Services",
        description: "Firms that need search, credibility, and next steps to help serious prospects take action.",
      },
      {
        icon: FileText,
        label: "Accounting & Finance",
        description: "Practices that want inbound leads to arrive with more trust, more context, and a better fit.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Where Inbound Leads Get Lost",
      description:
        "There is room for you in any industry, and leads exist in every market. They often get lost in saturation, but you can still stand out among the many options.",
    },
    items: [
      {
        title: "The Site Feels Thin",
        description:
          "A serious prospect lands on the site and looks for enough substance to trust the next step. If the pages feel thin, inbound leads drop before the conversation starts.",
      },
      {
        title: "The Proof Needs To Be Visible",
        description:
          "Clients need to see proof early. Clear examples, outcomes, and signals of trust help them feel confident enough to move forward.",
      },
      {
        title: "Your Message Doesn't Show What You Do Differently",
        description:
          "If your message doesn't make your difference clear, people compare you to the next best alternative and move on. Your value has to feel specific and easy to understand.",
      },
      {
        title: "Your Complexity Needs To Feel Simple",
        description:
          "Professional services can be complex, but your website and process should feel easy to follow. People come to you for help, not for more work before they can get started.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "I Make It Clear",
      description:
        "I clarify what makes you different, bring the proof forward, and make the website and intake path easier for the right clients to trust.",
    },
    items: [
      {
        icon: Target,
        title: "Your Difference",
        items: [
          "What makes your firm different from the next best alternative",
          "What the right client needs to hear before they reach out",
          "Messaging that makes your value easier to understand",
        ],
      },
      {
        icon: Code,
        title: "Your Proof",
        items: [
          "Proof that shows up early instead of staying in your head",
          "Case studies, examples, and outcomes that build trust faster",
          "Signals that help serious prospects feel confident moving forward",
        ],
      },
      {
        icon: TrendingUp,
        title: "Your Website And Intake",
        items: [
          "Pages that make complex work feel simple to understand",
          "A website and intake path that feel easy to follow",
          "Search and tracking that show where better inquiries come from",
        ],
      },
    ],
  },

  cta: {
    title: "Review The Client Path",
    body: "We can look at what a prospect sees now, where confidence drops, and what proof should be doing more work for you.",
    secondaryButtonLabel: "See the SCALE Method",
  },
};
