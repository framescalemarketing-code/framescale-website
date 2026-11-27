import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { ServiceDetails } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { servicesFaqs } from "@/content/faq";
import { buildBreadcrumbGraph, buildFaqGraph, buildServicesGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Optical Marketing Services: Websites, Search, Reports",
  absoluteTitle: true,
  description:
    "Optical marketing services for independent practices: strategy, websites, search and AI visibility, " +
    "and reports.",
  path: "/services",
  keywords: [
    "optical marketing services",
    "optical practice website design",
    "optical practice SEO",
    "optical practice marketing",
    "eyewear retail marketing",
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

      <PageHero headline="Optical Marketing Services">
        <p className="measure mt-6 text-(--text-muted)">
          Each service follows the same five phases, listed on the{" "}
          <Link href="/method" className="link-quiet font-semibold text-(--brand-primary)">
            method page
          </Link>
          .
        </p>
      </PageHero>

      <ServiceDetails />
      <Pricing />
      <FAQ items={servicesFaqs} title="Practical Questions" />
      <CtaBand
        title="Not Sure Which One You Need?"
        lead="Tell me what is going on and we will pick a place to start on a free call."
      />
    </>
  );
}
