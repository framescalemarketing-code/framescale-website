"use client";

import { retailContent } from "@/lib/industry-content/retail";
import { ChallengeGrid } from "./_shared/ChallengeGrid";
import { IndustryCta } from "./_shared/IndustryCta";
import { IndustryFeatureImage } from "./_shared/IndustryFeatureImage";
import { IndustryHero } from "./_shared/IndustryHero";
import { IndustryHighlightGrid } from "./_shared/IndustryHighlightGrid";
import { SolutionGrid } from "./_shared/SolutionGrid";

export const RetailPage = () => (
  <div className="min-h-screen">
    <IndustryHero content={retailContent.hero} />
    <IndustryHighlightGrid
      header={retailContent.highlights.header}
      items={retailContent.highlights.items}
      iconGradient={retailContent.highlightIconGradient}
    />
    <ChallengeGrid header={retailContent.challenges.header} items={retailContent.challenges.items} />
    <IndustryFeatureImage
      label="Packing station or storefront window"
      description="Real packing station mid-task, or warm storefront at dusk. No models, no smiling staff facing the camera."
      variant="secondary"
      src="/photos/retail/packing-feature-v2.jpg"
      alt="Stacks of shipping boxes inside a warehouse with a blue metal ceiling overhead."
    />
    <SolutionGrid
      header={retailContent.solutions.header}
      items={retailContent.solutions.items}
      iconGradient={retailContent.highlightIconGradient}
    />
    <IndustryCta {...retailContent.cta} />
  </div>
);
