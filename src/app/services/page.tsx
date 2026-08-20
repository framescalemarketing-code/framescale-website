import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ServiceDetails } from "@/components/sections/Services";
import { ScaleDetail } from "@/components/sections/ScaleMethod";
import { IndustryFocus } from "@/components/sections/IndustryFocus";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { servicesFaqs } from "@/content/faq";
import { buildBreadcrumbGraph, buildFaqGraph, buildServicesGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location, principal } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Growth Marketing Services in ${location.city}`,
  description: `Growth strategy, websites that convert, local SEO and Google Business Profile, and analytics you can read. Fixed-price audit or monthly partnership, prices listed. Serving ${location.serviceArea}.`,
  path: "/services",
  keywords: [
    `marketing consultant ${location.city}`,
    `local SEO ${location.city}`,
    "Google Business Profile management",
    "website design and conversion optimization",
    "GA4 analytics setup",
    "growth strategy consulting",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <script {...jsonLdProps(buildServicesGraph())} />
      <script {...jsonLdProps(buildFaqGraph(servicesFaqs))} />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        )}
      />

      <PageHero
        eyebrow="Services"
        headline={`Growth marketing services in ${location.city}`}
        lead={`Four connected areas of work. ${principal.firstName} does the research first, builds what the strategy needs, and gives you reporting you can read without a translator.`}
      />

      <ServiceDetails />
      <ScaleDetail />
      <IndustryFocus />
      <Pricing />
      <FAQ
        items={servicesFaqs}
        eyebrow="Before You Ask"
        title="Scope, ownership, and fit"
        lead="The practical questions that usually come up once the work gets real."
        tone="muted"
      />
      <ContactSection
        eyebrow="Get Started"
        title="Not sure which one you need?"
        lead="That is a normal place to be, and it is exactly what the first call is for. Describe the situation and I will tell you where I would start."
      />
    </>
  );
}
