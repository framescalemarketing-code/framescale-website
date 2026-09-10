import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/Hero";
import { ProblemList } from "@/components/sections/ProblemList";
import { ServiceOverview } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { AboutMe } from "@/components/sections/AboutMe";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { ShareBar } from "@/components/sections/ShareBar";
import { homeFaqs } from "@/content/faq";
import { closingCta } from "@/content/home";
import { buildFaqGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
  absoluteTitle: true,
  description:
    "I find out what's holding your small business back, then fix it with you: the numbers, the plan, the " +
    `website, and Google. ${principal.displayName}, ${location.city}.`,
  path: "/",
});

/**
 * Seven sections, in the order a visitor decides: promise, problem, what I do,
 * proof, who I am, objections, action. Then one line for whoever wants to pass
 * the page on.
 */
export default function HomePage() {
  return (
    <>
      <script {...jsonLdProps(buildFaqGraph(homeFaqs))} />

      <HomeHero />
      <ProblemList />
      <ServiceOverview />
      <Work tone="dark" />
      <AboutMe />
      <FAQ items={homeFaqs} />
      <ContactSection title={closingCta.title} lead={closingCta.lead} />
      <ShareBar />
    </>
  );
}
