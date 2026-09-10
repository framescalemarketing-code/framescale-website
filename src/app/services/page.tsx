import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { ServiceDetails } from "@/components/sections/Services";
import { ScaleDetail } from "@/components/sections/ScaleMethod";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { ShareBar } from "@/components/sections/ShareBar";
import { servicesFaqs } from "@/content/faq";
import { servicesPage } from "@/content/services";
import { buildBreadcrumbGraph, buildFaqGraph, buildServicesGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Small Business Marketing Help in ${location.city}`,
  description:
    "Four things I fix for small businesses: what's actually wrong, the website, getting found on Google, and " +
    "reports you can read. No packages. We talk, then I quote.",
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

      <PageHero headline={servicesPage.hero.headline} lead={servicesPage.hero.lead} />

      <ServiceDetails />
      <ScaleDetail />
      <Pricing />
      <FAQ items={servicesFaqs} title={servicesPage.faq.title} lead={servicesPage.faq.lead} />
      <ContactSection title={servicesPage.contact.title} lead={servicesPage.contact.lead} />
      <ShareBar />
    </>
  );
}
