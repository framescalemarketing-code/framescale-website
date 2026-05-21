"use client";

import { professionalServicesContent } from "@/lib/industry-content/professional-services";
import { ChallengeGrid } from "./_shared/ChallengeGrid";
import { IndustryCta } from "./_shared/IndustryCta";
import { IndustryFeatureImage } from "./_shared/IndustryFeatureImage";
import { IndustryHero } from "./_shared/IndustryHero";
import { IndustryHighlightGrid } from "./_shared/IndustryHighlightGrid";
import { SolutionGrid } from "./_shared/SolutionGrid";

export const ProfessionalServicesPage = () => (
  <div className="min-h-screen">
    <IndustryHero content={professionalServicesContent.hero} />
    <IndustryHighlightGrid
      header={professionalServicesContent.highlights.header}
      items={professionalServicesContent.highlights.items}
      iconGradient={professionalServicesContent.highlightIconGradient}
    />
    <ChallengeGrid
      header={professionalServicesContent.challenges.header}
      items={professionalServicesContent.challenges.items}
    />
    <IndustryFeatureImage
      label="Open notebook, top-down workspace"
      description="Handwritten notes on paper, a pen, a coffee, daylight on a wooden desk. No people, no stock conference rooms."
      variant="deep"
      src="/photos/professional-services/workspace-feature-v2.jpg"
      alt="Workspace with a laptop, coffee, notebook, and pens in soft window light."
    />
    <SolutionGrid
      header={professionalServicesContent.solutions.header}
      items={professionalServicesContent.solutions.items}
      iconGradient={professionalServicesContent.highlightIconGradient}
    />
    <IndustryCta {...professionalServicesContent.cta} />
  </div>
);
