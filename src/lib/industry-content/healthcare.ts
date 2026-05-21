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
    title: "Trust On Sight",
    description:
      "Most practices I help already get referrals. Then a patient looks you up. The website should make that next step easy. We build around trust, clear answers, and booking that works on a phone.",
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
      title: "Who This Helps",
      description:
        "Optical is where Jonathan has direct experience. The same approach also fits practices that need local visibility, clear trust signals, and easy booking.",
    },
    items: [
      {
        icon: Eye,
        label: "Optical & Optometry",
        description: "Independent practices that fit, sell, and care for patients in house.",
      },
      {
        icon: Smile,
        label: "Dental Practices",
        description: "Practices that need stronger local trust and easier booking.",
      },
      {
        icon: Stethoscope,
        label: "Medical Offices",
        description: "Specialty clinics and small provider groups.",
      },
    ],
  },

  challenges: {
    header: {
      badge: "Common Challenges",
      title: "What Patients See",
      description:
        "These are the gaps that show up when someone hears your name and looks you up.",
    },
    items: [
      {
        title: "The site looks dated",
        description:
          "The practice feels warm and professional in person. The website does not.",
      },
      {
        title: "Local visibility is weak",
        description:
          "Patients search Google, maps, and reviews before they call. You need to show up clearly in all three.",
      },
      {
        title: "Nobody explains the numbers",
        description:
          "Money goes out every month and no one can tell you what is working.",
      },
      {
        title: "Booking takes work",
        description:
          "A patient should be able to find answers and take the next step without digging.",
      },
    ],
  },

  solutions: {
    header: {
      badge: "What You Get",
      title: "What We Fix",
      description:
        "We look at how patients find you, what they see, and what helps them book with confidence.",
    },
    items: [
      {
        icon: Target,
        title: "Patient Research",
        items: [
          "How patients hear about you and what they search next",
          "What matters most when they compare practices",
          "How nearby practices present themselves",
        ],
      },
      {
        icon: Code,
        title: "A Better Website",
        items: [
          "Pages that answer the questions patients ask first",
          "Mobile booking and contact paths that are easy to use",
          "A website that reflects the care people get in person",
        ],
      },
      {
        icon: TrendingUp,
        title: "Local Visibility",
        items: [
          "SEO built around how patients actually search",
          "Google Business Profile management and updates",
          "Ads only when the numbers make sense",
        ],
      },
    ],
  },

  cta: {
    title: "Talk It Through",
    body: "We can look at what patients see now, where the site falls short, and whether I am the right person to help.",
    secondaryButtonLabel: "See our 5-step process",
  },
};
