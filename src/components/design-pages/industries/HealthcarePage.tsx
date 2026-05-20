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
      label="Frame board, three-quarter angle"
      description="Top-down or angled shot of real frames on display in daylight, no people in frame."
      variant="primary"
    />
    <SolutionGrid
      header={healthcareContent.solutions.header}
      items={healthcareContent.solutions.items}
      iconGradient={healthcareContent.highlightIconGradient}
    />
    <IndustryCta {...healthcareContent.cta} />
  </div>
);
