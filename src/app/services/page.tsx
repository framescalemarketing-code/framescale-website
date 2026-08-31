import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ServiceDetails } from "@/components/sections/Services";
import { ScaleDetail } from "@/components/sections/ScaleMethod";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { servicesFaqs } from "@/content/faq";
import { buildBreadcrumbGraph, buildFaqGraph, buildServicesGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Small Business Marketing Help in ${location.city}`,
  description: `Help for ${location.city} small businesses: getting found on Google, a website that works, and reports you can read. No set packages, so we talk first and I quote from there.`,
  path: "/services",
  keywords: [
    `small business consultant ${location.city}`,
    `small business marketing ${location.city}`,
    `local SEO ${location.city}`,
    "Google Business Profile management",
    "small business website design",
    "small business marketing help",
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
        headline={`How I help ${location.city} small businesses`}
        lead="There are four things I do, and most owners need more than one of them. I start by working out what the real problem is, because owners usually call me about one thing and it turns out to be something else. Once we know that, we only spend money on the part that matters."
      />

      <ServiceDetails />
      <ScaleDetail />
      <Pricing />
      <FAQ
        items={servicesFaqs}
        title="The practical questions"
        lead="The ones that come up when somebody's close to deciding. Anything not covered here, ask me on the call."
      />
      <ContactSection
        title="Not sure which one you need?"
        lead="Most people aren't, and that's what the call is for. Tell me what's going on and I'll tell you where I'd start."
      />
    </>
  );
}
