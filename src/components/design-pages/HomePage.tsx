"use client";

import { CapabilitiesSection } from "./home/CapabilitiesSection";
import { HomeCtaSection } from "./home/HomeCtaSection";
import { HomeHero } from "./home/HomeHero";
import { IndustriesSection } from "./home/IndustriesSection";
import { WhyFrameScaleSection } from "./home/WhyFrameScaleSection";

export const HomePage = () => (
  <div className="min-h-screen">
    <HomeHero />
    <IndustriesSection />
    <WhyFrameScaleSection />
    <CapabilitiesSection />
    <HomeCtaSection />
  </div>
);
