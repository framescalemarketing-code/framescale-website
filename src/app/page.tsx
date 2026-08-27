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
import { principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${principal.displayName} | ${principal.jobTitle}`,
  absoluteTitle: true,
  description: `I am ${principal.displayName}. I spent years in optical, from the back of the shop to managing stores. Now I help independent practices and eyewear retailers get found, fill the schedule, and understand their own numbers.`,
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
      <FAQ items={homeFaqs} />
      <ContactSection title={closingCta.title} lead={closingCta.lead} />
    </>
  );
}
