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
  caseStudyChallenge,
  caseStudyChanged,
  caseStudyCta,
  caseStudyGlance,
  caseStudyHero,
  caseStudyLimitations,
  caseStudyMeta,
  caseStudyMethod,
  caseStudyPath,
  caseStudyQuote,
  caseStudyWho,
  caseStudyWork,
  clientQuote,
  figures,
  formatAsOf,
  onSightApproved,
  onSightFiguresApproved,
  showQuotePlaceholder,
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
    `${caseStudyWho.publishedTail} ${formatAsOf(yearsInBusiness.asOf)}.`
  );
}

/** The documented baseline: July 2026 is the earliest month of analytics data. */
function baselineSentence() {
  const { totalBefore, organicBefore, organicShareBefore } = figures;
  return (
    `In July 2026, the earliest month for which analytics data exists, the On-Sight website received ` +
    `${totalBefore.value} visits, of which ${organicBefore.value} (${organicShareBefore.value}) arrived from ` +
    `organic search. ${sourceLabels.ga4}, ${formatAsOf(totalBefore.asOf)}.`
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

const businessMetrics = [toMetric("googleReviews"), toMetric("yelpReviews"), toMetric("pricingPercent")];

const limitations = caseStudyLimitations.items.filter((item) => onSightFiguresApproved || !item.reported);
const challengeItems = onSightFiguresApproved
  ? [...caseStudyChallenge.items, caseStudyChallenge.pricingItem]
  : caseStudyChallenge.items;

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
        <SectionHeading title={caseStudyGlance.title} className="max-w-3xl" />
        <div className="mt-8 flex flex-col gap-4">
          <h3 className="display-sm text-(--brand-deep)">{caseStudyGlance.documentedTitle}</h3>
          <StatRow metrics={searchMetrics} disclaimer={caseStudyChanged.disclaimer} />
        </div>
        {onSightFiguresApproved ? (
          <div className="mt-10 flex flex-col gap-4">
            <h3 className="display-sm text-(--brand-deep)">{caseStudyGlance.reportedTitle}</h3>
            <StatRow metrics={businessMetrics} disclaimer={caseStudyChanged.businessDisclaimer} />
          </div>
        ) : null}
      </Section>

      <Section tone="muted">
        <SectionHeading title={caseStudyWho.title} className="max-w-3xl" />
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          <p className="measure text-(--text-muted)">{caseStudyWho.body[0]}</p>
          <p className="measure text-(--text-muted)">{publishedFiguresSentence()}</p>
          <p className="measure text-(--text-muted)">{caseStudyWho.body[1]}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title={caseStudyChallenge.title} className="max-w-3xl" />
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          <p className="measure text-(--text-muted)">{baselineSentence()}</p>
          <p className="measure text-(--text-muted)">{caseStudyChallenge.reportedLead}</p>
          <ul className="measure flex list-disc flex-col gap-2 pl-6 text-(--text-muted)">
            {challengeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
        <SectionHeading title={caseStudyMethod.title} className="max-w-3xl" />
        <div className="mt-6 flex max-w-3xl flex-col gap-4">
          <p className="measure text-(--text-muted)">{caseStudyMethod.search}</p>
          <p className="measure text-(--text-muted)">{caseStudyMethod.published}</p>
          {onSightFiguresApproved ? (
            <p className="measure text-(--text-muted)">{caseStudyMethod.reported}</p>
          ) : null}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={caseStudyChanged.title} lead={caseStudyChanged.lead} className="max-w-3xl" />
        <div className="mt-10 flex max-w-3xl flex-col gap-4">
          <h3 className="display-sm text-(--brand-deep)">{caseStudyChanged.searchTitle}</h3>
          <p className="measure text-(--text-muted)">{caseStudyChanged.searchBody}</p>
        </div>
        {onSightFiguresApproved ? (
          <div className="mt-12 flex max-w-3xl flex-col gap-4">
            <h3 className="display-sm text-(--brand-deep)">{caseStudyChanged.businessTitle}</h3>
            <p className="measure text-(--text-muted)">{caseStudyChanged.businessBody}</p>
          </div>
        ) : null}
      </Section>

      <Section>
        <SectionHeading title={caseStudyLimitations.title} lead={caseStudyLimitations.lead} className="max-w-3xl" />
        <ul className="measure mt-6 flex max-w-3xl list-disc flex-col gap-2 pl-6 text-(--text-muted)">
          {limitations.map((item) => (
            <li key={item.text}>{item.text}</li>
          ))}
        </ul>
      </Section>

      {clientQuote ? (
        <Section tone="muted">
          <SectionHeading title={caseStudyQuote.title} className="max-w-3xl" />
          <figure className="mt-6 max-w-3xl">
            <blockquote className="measure text-(--brand-deep)">{clientQuote.text}</blockquote>
            <figcaption className="mt-3 font-ui text-sm text-(--text-muted)">
              {clientQuote.name}, {clientQuote.role}, On-Sight Safety Optics
            </figcaption>
          </figure>
        </Section>
      ) : showQuotePlaceholder ? (
        <Section tone="muted">
          <SectionHeading title={caseStudyQuote.title} className="max-w-3xl" />
          <p className="measure mt-6 text-(--text-muted)">{caseStudyQuote.placeholder}</p>
        </Section>
      ) : null}

      <Section tone={clientQuote || showQuotePlaceholder ? "default" : "muted"}>
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
