import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemList } from "@/components/sections/ProblemList";
import { ServiceOverview } from "@/components/sections/Services";
import { ScaleSummary } from "@/components/sections/ScaleMethod";
import { Differentiators } from "@/components/sections/Differentiators";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { homeFaqs } from "@/content/faq";
import { closingCta } from "@/content/home";
import { buildFaqGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
  absoluteTitle: true,
  description: `${principal.displayName} helps ${location.city} business owners find where growth is stalling and fix it. Market research, websites that convert, local SEO, and reporting you can read yourself.`,
  path: "/",
});

/**
 * Section order follows the conversion sequence: promise, trust, problem,
 * solution, method, differentiation, person, proof, objections, action.
 */
export default function HomePage() {
  return (
    <>
      <script {...jsonLdProps(buildFaqGraph(homeFaqs))} />

      <HomeHero />
      <TrustBar />
      <ProblemList />
      <ServiceOverview />
      <ScaleSummary />
      <Differentiators />
      <AboutStrip />
      <Testimonials />
      <FAQ
        items={homeFaqs}
        eyebrow="Questions"
        title="Straight answers, before you call"
        lead="The things owners usually want to know before booking time with someone."
      />
      <ContactSection eyebrow={closingCta.eyebrow} title={closingCta.title} lead={closingCta.lead} />
    </>
  );
}
