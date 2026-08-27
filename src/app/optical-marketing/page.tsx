import type { Metadata } from "next";
import { PageHero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { opticalDifferences, opticalFaqs, opticalHero } from "@/content/optical";
import { framePhotos } from "@/content/photos";
import { buildBreadcrumbGraph, buildFaqGraph, buildOpticalServiceGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";

/**
 * The vertical hub, and the page that owns the head term. `/services` covers
 * what the work actually is and targets the service phrases, so the two do not
 * compete for the same query.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Optical Practice Marketing",
  description:
    "I worked in optical for years before I did this. I help independent practices and eyewear retailers fill " +
    "the schedule, fix the website, and bring patients back. Remote, and you work with me directly.",
  path: "/optical-marketing",
  keywords: [
    "optical practice marketing",
    "optometry practice marketing",
    "marketing for optometrists",
    "eyewear retail marketing",
    "independent optical practice growth",
    "optical practice SEO",
  ],
});

export default function OpticalMarketingPage() {
  return (
    <>
      <script {...jsonLdProps(buildOpticalServiceGraph())} />
      <script {...jsonLdProps(buildFaqGraph(opticalFaqs))} />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Optical", path: "/optical-marketing" },
          ]),
        )}
      />

      <PageHero headline={opticalHero.headline} lead={opticalHero.lead} />

      <Section size="compact" width="wide">
        <Photo
          {...framePhotos.opticalHero}
          aspect="aspect-16/9"
          sizes="(max-width: 768px) 92vw, 1100px"
          priority
        />
      </Section>

      <Section tone="muted">
        <SectionHeading
          title="Why Optical Is Not Like Other Retail"
          lead="These are the things you will not have to teach me."
        />
        <Reveal group className="mt-10 grid gap-5 md:grid-cols-2">
          {opticalDifferences.map((item) => (
            <RevealItem key={item.title} className="soft-card flex flex-col gap-3 p-6 sm:p-8">
              <h3 className="display-sm text-(--brand-deep)">{item.title}</h3>
              <p className="measure text-(--text-muted)">{item.body}</p>
            </RevealItem>
          ))}
        </Reveal>

        <Photo
          {...framePhotos.opticalDetail}
          className="mt-10"
          aspect="aspect-2/1"
          sizes="(max-width: 768px) 92vw, 1000px"
        />
      </Section>

      <FAQ
        items={opticalFaqs}
        title="Questions optical owners ask me"
        lead="The ones that come up before we ever talk about money."
      />

      <ContactSection
        title="Tell me about your practice"
        lead="Half an hour on the phone. I'll tell you where I'd start, and whether I'm the right person at all."
      />
    </>
  );
}
