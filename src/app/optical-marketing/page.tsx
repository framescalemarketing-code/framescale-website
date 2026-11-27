import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import {
  opticalDifferences,
  opticalDifferencesIntro,
  opticalFaqIntro,
  opticalFaqs,
  opticalHero,
} from "@/content/optical";
import { caseStudyPath, onSightApproved, proofLinks } from "@/content/onsight";
import { framePhotos } from "@/content/photos";
import { buildBreadcrumbGraph, buildWebPageGraph, buildFaqGraph, buildOpticalServiceGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { hasPublishedInsights } from "@/lib/site";

/**
 * The vertical hub, and the page that owns the head term. `/services` covers
 * what the work actually is and targets the service phrases, so the two do not
 * compete for the same query.
 */
export const metadata: Metadata = buildPageMetadata({
  title: "Optical Marketing For Independent Practices | Jonathan Mejia",
  absoluteTitle: true,
  description:
    "From the lab to the sales floor, I know optical. I help independent practices fix the website, " +
    "show up in search and AI answers, and bring patients back.",
  path: "/optical-marketing",
  keywords: [
    "optical marketing",
    "optical practice marketing",
    "optometry practice marketing",
    "marketing for optometrists",
    "eyewear retail marketing",
    "independent optical practice growth",
  ],
});

export default function OpticalMarketingPage() {
  return (
    <>
      <script {...jsonLdProps(buildOpticalServiceGraph())} />
      <script {...jsonLdProps(buildFaqGraph(opticalFaqs))} />
      <script
        {...jsonLdProps(
          buildWebPageGraph({
            type: "WebPage",
            path: "/optical-marketing",
            name: "Optical Marketing For Independent Practices",
            description: String(metadata.description),
          }),
        )}
      />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Optical", path: "/optical-marketing" },
          ]),
        )}
      />

      <PageHero headline={opticalHero.headline} subhead={opticalHero.subhead} lead={opticalHero.lead}>
        <p className="measure mt-6 text-(--text-muted)">
          The four things I do are on the{" "}
          <Link href="/services" className="link-quiet font-semibold text-(--brand-primary)">
            services page
          </Link>
          , and the five phases I follow are on the{" "}
          <Link href="/method" className="link-quiet font-semibold text-(--brand-primary)">
            method page
          </Link>
          .
        </p>
      </PageHero>

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
          title={opticalDifferencesIntro.title}
          lead={opticalDifferencesIntro.lead}
          className="max-w-3xl"
        />
        <Reveal group className="mt-10 flex flex-col">
          {opticalDifferences.map((item, index) => (
            <RevealItem
              key={item.title}
              className={`grid gap-4 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 ${index === 0 ? "" : "rule"}`}
            >
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

        <p className="measure mt-8 text-(--text-muted)">
          Want to see how I think before you call?{" "}
          {hasPublishedInsights ? (
            <>
              I write it down on the{" "}
              <Link href="/insights" className="link-quiet font-semibold text-(--brand-primary-hover)">
                insights page
              </Link>
              , and{" "}
            </>
          ) : null}
          <Link href="/about" className="link-quiet font-semibold text-(--brand-primary-hover)">
            {hasPublishedInsights ? "my story" : "My story"}
          </Link>{" "}
          explains how I got from the lab bench to marketing.
        </p>
        {onSightApproved ? (
          <p className="measure mt-4 text-(--text-muted)">
            {proofLinks.optical}{" "}
            <Link href={caseStudyPath} className="link-quiet font-semibold text-(--brand-primary-hover)">
              {proofLinks.opticalLink}
            </Link>
            .
          </p>
        ) : null}
      </Section>

      <FAQ items={opticalFaqs} title={opticalFaqIntro.title} lead={opticalFaqIntro.lead} />

      <CtaBand
        title="Tell Me About Your Practice"
        lead="Half an hour on the phone. I will tell you where I would start, and whether I am the right person at all."
      />
    </>
  );
}
