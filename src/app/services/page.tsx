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
    "Optical marketing services for independent practices: strategy, a website that books appointments, " +
    "search and AI visibility, and reports you can read.",
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

      <PageHero
        headline="Four Ways I Help Optical Practices Grow"
        lead="These are the optical marketing services I offer. I always start by working out the real problem, because it usually is not the one you called about."
      >
        <p className="measure mt-6 text-(--text-muted)">
          Each service follows the same five phases, which I explain on the{" "}
          <Link href="/method" className="link-quiet font-semibold text-(--brand-primary)">
            method page
          </Link>
          . If you are in optical specifically, the{" "}
          <Link href="/optical-marketing" className="link-quiet font-semibold text-(--brand-primary)">
            optical marketing page
          </Link>{" "}
          covers what I already know about your side of the counter.
        </p>
      </PageHero>

      <ServiceDetails />
      <Pricing />
      <FAQ
        items={servicesFaqs}
        title="The Practical Questions"
        lead="The ones that come up once it gets real."
      />
      <CtaBand
        title="Not Sure Which One You Need?"
        lead="Most people are not, and that is what the call is for. Tell me what is going on and I will tell you where I would start."
      />
    </>
  );
}
