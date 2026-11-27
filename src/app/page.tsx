import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/Hero";
import { MarketingScope } from "@/components/sections/MarketingScope";
import { ServiceOverview } from "@/components/sections/Services";
import { MethodPreview } from "@/components/sections/MethodPreview";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { AboutMe } from "@/components/sections/AboutMe";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeFaqs } from "@/content/faq";
import { closingCta } from "@/content/home";
import { buildFaqGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${principal.jobTitle} | ${principal.fullName}`,
  absoluteTitle: true,
  description:
    "Marketing for independent optical practices: strategy, website, search and AI visibility, and reporting " +
    `from ${principal.fullName}. Book a free call.`,
  path: "/",
});

/**
 * Eight sections, in the order a visitor decides: promise, what marketing
 * really covers, what I do, how I work, proof (while the case study is on),
 * who I am, objections, action.
 */
export default function HomePage() {
  return (
    <>
      <script {...jsonLdProps(buildFaqGraph(homeFaqs))} />

      <HomeHero />
      <MarketingScope />
      <ServiceOverview />
      <MethodPreview />
      <ProofStrip />
      <AboutMe />
      <FAQ items={homeFaqs} tone="muted" />
      <CtaBand title={closingCta.title} lead={closingCta.lead} cta={closingCta.cta} />
    </>
  );
}
