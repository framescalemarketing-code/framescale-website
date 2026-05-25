import {
  Heart,
  TrendingUp,
  Target,
  Code,
  Stethoscope,
  Eye,
  Smile,
} from "lucide-react";

import type { IndustryPageContent } from "./types";

export const healthcareContent: IndustryPageContent = {
  hero: {
    icon: Heart,
    badge: "Healthcare",
    title: "Help More Patients Feel Ready To Book",
    description:
      "Patients usually hear your name before they visit your site. Then they decide if you feel credible enough to call or book. We build around trust, clear answers, and next steps that are easy on any device.",
    media: {
      label: "Editorial close-up of a designer optical frame",
      description:
        "Frames on display in soft daylight, a piece of the exam room visible. No staged people, no stock smiles.",
      src: "/photos/healthcare/mg-2639.jpg",
      alt: "Gold rimless eyeglass frame on a soft white surface, side view with shallow depth of field.",
    },
    heroGradient: "secondary",
    heroBlob: "top-right-primary",
    iconMarkGradient: "primary-secondary",
  },

  highlightIconGradient: "primary-secondary",

  highlights: {
    header: {
      badge: "Where It Fits",
      title: "Built For Patient-Facing Practices",
      description:
        "Jonathan has direct experience in optical, and this same approach works for practices that need stronger local visibility, clearer trust signals, and easier booking.",
    },
    items: [
      {
        icon: Eye,
        label: "Optical & Optometry",
        description: "Independent practices where the exam, the frame board, and the patient experience all need to feel connected.",
      },
      {
        icon: Smile,
        label: "Dental Practices",
        description: "Dental teams that want the website to make a new patient feel comfortable before they call.",
      },
      {
        icon: Stethoscope,
        label: "Medical Offices",
        description: "Small clinics and provider groups that need people to understand the care before they book.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "Why Patients Hesitate",
      description:
        "When someone gets referred and checks your site, these are the gaps that usually cost you the call.",
    },
    items: [
      {
        title: "The Site Looks Dated",
        description:
          "Your practice may feel calm, polished, and personal in person. The website needs to carry that same trust before anyone walks in.",
      },
      {
        title: "Local Visibility Is Weak",
        description:
          "Patients check Google, Maps, and reviews before they call. If you are hard to find or hard to trust there, they move on fast.",
      },
      {
        title: "Nobody Explains The Numbers",
        description:
          "You should not have to guess whether the website, search, or ads are helping people book.",
      },
      {
        title: "Booking Takes Work",
        description:
          "A patient should be able to find hours, services, insurance basics, and the next step without hunting around.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Improve First",
      description:
        "We map how patients find you, what they need to trust you, and what helps them take the next step.",
    },
    items: [
      {
        icon: Target,
        title: "Patient Research",
        items: [
          "Where patients hear your name and what they look up next",
          "The questions people need answered before they feel ready to call",
          "What nearby practices say, show, and leave unclear",
        ],
      },
      {
        icon: Code,
        title: "A Better Website",
        items: [
          "Pages that sound like your practice and answer real patient questions",
          "Mobile booking and contact paths that do not make people work",
          "A site that feels as thoughtful as the care people get in person",
        ],
      },
      {
        icon: TrendingUp,
        title: "Local Visibility",
        items: [
          "SEO built around the way patients actually search in your area",
          "Google Business Profile updates that keep the practice looking current",
          "Ads used only when there is a clear reason to spend",
        ],
      },
    ],
  },

  cta: {
    title: "Review The Patient Path",
    body: "We can look at the site, the search results, and the booking path together.",
    secondaryButtonLabel: "See Our 5-Step Process",
  },
};
