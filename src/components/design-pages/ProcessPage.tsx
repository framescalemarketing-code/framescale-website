"use client";

import { ProcessCtaSection } from "./process/ProcessCtaSection";
import { ProcessHero } from "./process/ProcessHero";
import { ProcessPrinciplesSection } from "./process/ProcessPrinciplesSection";
import { ProcessStepsSection } from "./process/ProcessStepsSection";

export const ProcessPage = () => (
  <div className="min-h-screen">
    <ProcessHero />
    <ProcessStepsSection />
    <ProcessPrinciplesSection />
    <ProcessCtaSection />
  </div>
);
