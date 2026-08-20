import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/Hero";
import { ProblemList } from "@/components/sections/ProblemList";
import { ServiceOverview } from "@/components/sections/Services";
import { AboutMe } from "@/components/sections/AboutMe";
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
  description: `I am ${principal.displayName}, a small business consultant in ${location.city}. I help local owners get found on Google, fix the website, and understand their own numbers.`,
  path: "/",
});

/**
 * Six sections, in the order a visitor decides: promise, problem, what I do,
 * who I am, objections, action.
 */
export default function HomePage() {
  return (
    <>
      <script {...jsonLdProps(buildFaqGraph(homeFaqs))} />

      <HomeHero />
      <ProblemList />
      <ServiceOverview />
      <AboutMe />
      <FAQ
        items={homeFaqs}
        eyebrow="Questions"
        title="Questions I get a lot"
      />
      <ContactSection eyebrow={closingCta.eyebrow} title={closingCta.title} lead={closingCta.lead} />
    </>
  );
}
