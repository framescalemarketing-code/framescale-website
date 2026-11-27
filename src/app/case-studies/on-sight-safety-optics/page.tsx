import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatRow } from "@/components/ui/Stat";
import {
  caseStudyBridge,
  caseStudyChanged,
  caseStudyCta,
  caseStudyHero,
  caseStudyMeta,
  caseStudyPath,
  caseStudyWho,
  caseStudyWork,
  figures,
  formatAsOf,
  onSightApproved,
  onSightFiguresApproved,
  sourceLabels,
  toMetric,
} from "@/content/onsight";
import { buildBreadcrumbGraph, buildCaseStudyGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { bookingHrefFor } from "@/lib/site";

/**
 * Empty when the page is switched off, so a 404 never carries the client's name
 * in its title or description.
 */
export const metadata: Metadata = onSightApproved
  ? buildPageMetadata({
      title: caseStudyMeta.title,
      absoluteTitle: true,
      description: caseStudyMeta.description,
      path: caseStudyPath,
      keywords: [
        "optical business website case study",
        "marketing case study",
        "prescription safety eyewear marketing",
      ],
    })
  : {};

/** Every number below comes from `figures`, so the page cannot say a number the table does not hold. */
function publishedFiguresSentence() {
  const { yearsInBusiness, activePrograms, endUsers, serviceRegions } = figures;
  return (
    `${caseStudyWho.publishedLead} ${yearsInBusiness.value} years in business, ${activePrograms.value} active ` +
    `programs, ${endUsers.value} end users and ${serviceRegions.value} service regions. ` +
    `${caseStudyWho.publishedTail} I read them on ${formatAsOf(yearsInBusiness.asOf)}.`
  );
}

const searchMetrics = [
  toMetric("organicGrowth"),
  {
    value: `${figures.organicShareBefore.value} to ${figures.organicShareAfter.value}`,
    label: "Organic search share of all visits",
    note: `July 2026 to October 2026. ${sourceLabels.ga4}, ${formatAsOf(figures.organicShareAfter.asOf)}.`,
  },
  {
    value: `${figures.totalLow.value} to ${figures.totalHigh.value}`,
    label: "Total visits each month",
    note: `Stayed in this range from July to October 2026. ${sourceLabels.ga4}, ${formatAsOf(figures.totalLow.asOf)}.`,
  },
];

const businessMetrics = [
  toMetric("googleReviews"),
  toMetric("yelpReviews"),
  toMetric("pricingRange"),
  toMetric("yearlyRevenue"),
];

export default function OnSightCaseStudyPage() {
  if (!onSightApproved) notFound();

  return (
    <>
      <script {...jsonLdProps(buildCaseStudyGraph())} />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: caseStudyMeta.breadcrumb, path: caseStudyPath },
          ]),
        )}
      />

      <PageHero headline={caseStudyHero.headline} subhead={caseStudyHero.subhead} lead={caseStudyHero.lead}>
        <div className="mt-8">
          <Button href={bookingHrefFor()} withArrow>
            {caseStudyCta.button}
          </Button>
        </div>
      </PageHero>

      <Section size="default">
        <SectionHeading title={caseStudyWho.title} className="max-w-3xl" />
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          <p className="measure text-(--text-muted)">{caseStudyWho.body[0]}</p>
          <p className="measure text-(--text-muted)">{publishedFiguresSentence()}</p>
          <p className="measure text-(--text-muted)">{caseStudyWho.body[1]}</p>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={caseStudyWork.title} lead={caseStudyWork.lead} className="max-w-3xl" />
        <Reveal group className="mt-10 flex flex-col">
          {caseStudyWork.items.map((item, index) => (
            <RevealItem
              key={item.title}
              className={`grid gap-4 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 ${index === 0 ? "" : "rule"}`}
            >
              <h3 className="display-sm text-(--brand-deep)">{item.title}</h3>
              <p className="measure text-(--text-muted)">{item.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Section>

      <Section>
        <SectionHeading title={caseStudyChanged.title} lead={caseStudyChanged.lead} className="max-w-3xl" />

        <div className="mt-10 flex flex-col gap-4">
          <h3 className="display-sm text-(--brand-deep)">{caseStudyChanged.searchTitle}</h3>
          <p className="measure text-(--text-muted)">{caseStudyChanged.searchBody}</p>
          <StatRow metrics={searchMetrics} disclaimer={caseStudyChanged.disclaimer} />
        </div>

        {onSightFiguresApproved ? (
          <div className="mt-12 flex flex-col gap-4">
            <h3 className="display-sm text-(--brand-deep)">{caseStudyChanged.businessTitle}</h3>
            <p className="measure text-(--text-muted)">{caseStudyChanged.businessBody}</p>
            <StatRow metrics={businessMetrics} disclaimer={caseStudyChanged.businessDisclaimer} />
          </div>
        ) : null}
      </Section>

      <Section tone="muted">
        <SectionHeading title={caseStudyBridge.title} className="max-w-3xl" />
        <p className="measure mt-6 text-(--text-muted)">
          {caseStudyBridge.body}{" "}
          <Link href="/method" className="link-quiet font-semibold text-(--brand-primary-hover)">
            {caseStudyBridge.methodLink}
          </Link>{" "}
          or{" "}
          <Link href="/services" className="link-quiet font-semibold text-(--brand-primary-hover)">
            {caseStudyBridge.servicesLink}
          </Link>
          .
        </p>
      </Section>

      <CtaBand title={caseStudyCta.title} lead={caseStudyCta.lead} />
    </>
  );
}
