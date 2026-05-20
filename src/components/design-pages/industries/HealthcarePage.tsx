"use client";

import { healthcareContent } from "@/lib/industry-content/healthcare";
import { ChallengeGrid } from "./_shared/ChallengeGrid";
import { IndustryCta } from "./_shared/IndustryCta";
import { IndustryFeatureImage } from "./_shared/IndustryFeatureImage";
import { IndustryHero } from "./_shared/IndustryHero";
import { IndustryHighlightGrid } from "./_shared/IndustryHighlightGrid";
import { SolutionGrid } from "./_shared/SolutionGrid";

export const HealthcarePage = () => (
  <div className="min-h-screen">
    <IndustryHero content={healthcareContent.hero} />
    <IndustryHighlightGrid
      header={healthcareContent.highlights.header}
      items={healthcareContent.highlights.items}
      iconGradient={healthcareContent.highlightIconGradient}
    />
    <ChallengeGrid header={healthcareContent.challenges.header} items={healthcareContent.challenges.items} />
    <IndustryFeatureImage
      label="Detail of a classic black optical frame"
      description="Wide editorial close-up of a black optical frame in soft light."
      variant="primary"
      src="/photos/healthcare/mg-2743.jpg"
      alt="Close-up of a black plastic Ray-Ban optical frame at a low angle, soft fabric texture in the background."
    />
    <SolutionGrid
      header={healthcareContent.solutions.header}
      items={healthcareContent.solutions.items}
      iconGradient={healthcareContent.highlightIconGradient}
    />
    <IndustryCta {...healthcareContent.cta} />
  </div>
);
