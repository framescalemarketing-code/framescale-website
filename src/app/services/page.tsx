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
import { location } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Growth Marketing Services in ${location.city}`,
  description: `Growth strategy, websites that convert, local SEO and Google Business Profile, and analytics you can read. A fixed-price audit or a monthly partnership, with prices listed. I work across ${location.serviceArea}.`,
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
        headline={`How I help ${location.city} businesses`}
        lead="Four things, and they work together. I always start by finding the real problem."
      />

      <ServiceDetails />
      <ScaleDetail />
      <IndustryFocus />
      <Pricing />
      <FAQ
        items={servicesFaqs}
        eyebrow="Before You Ask"
        title="The practical questions"
        tone="muted"
      />
      <ContactSection
        eyebrow="Get Started"
        title="Not sure which one you need?"
        lead="That's normal, and it's what the call is for. Tell me what's going on and I'll tell you where I'd start."
      />
    </>
  );
}
