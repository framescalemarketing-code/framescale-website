import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { opticalFaqs } from "@/content/faq";
import {
  opticalBackground,
  opticalClosing,
  opticalHero,
  opticalProblems,
  opticalSteps,
} from "@/content/optical";
import { buildBreadcrumbGraph, buildFaqGraph, jsonLdProps } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/metadata";
import { location } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: `Marketing For Optical Practices in ${location.city}`,
  description:
    `I spent my first career in optical, from the lab to store management, before the MBA. ` +
    `Marketing help for independent optical and optometry practices in ${location.city}.`,
  path: "/optical",
  keywords: [
    "optical practice marketing",
    `optometry marketing ${location.city}`,
    `optical marketing ${location.city}`,
    "eye care practice website",
    "optometrist local SEO",
    "independent optical practice growth",
  ],
});

export default function OpticalPage() {
  return (
    <>
      <script {...jsonLdProps(buildFaqGraph(opticalFaqs))} />
      <script
        {...jsonLdProps(
          buildBreadcrumbGraph([
            { name: "Home", path: "/" },
            { name: "Optical", path: "/optical" },
          ]),
        )}
      />

      <PageHero headline={opticalHero.headline} lead={opticalHero.lead} />

      {/* The credibility band. This is the whole reason the page exists, so it
          comes before any problem or service framing. */}
      <Section tone="muted" size="default">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-5">
            <SectionHeading title={opticalBackground.title} />
            {opticalBackground.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="measure text-(--text-muted)">
                {paragraph}
              </p>
            ))}
            <Link
              href="/about"
              className="font-ui text-sm font-semibold text-(--brand-primary) inline-flex items-center gap-2 hover:underline"
            >
              More About Me
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative aspect-3/2 w-full overflow-hidden rounded-(--radius-media) border border-(--border)">
            <Image
              src={opticalBackground.image.src}
              alt={opticalBackground.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <Section size="default">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <SectionHeading
            title="Areas Overlooked"
            lead="Most practices have two of these. Some have all four, and every one of them is fixable without starting over."
            className="lg:sticky lg:top-24 lg:self-start"
          />

          <Reveal group className="flex flex-col gap-4">
            {opticalProblems.map((problem, index) => (
              <RevealItem key={problem.title} className="soft-card flex gap-5 p-6 sm:gap-6 sm:p-8">
                <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums">
                  0{index + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="display-sm text-(--brand-deep)">{problem.title}</h3>
                  <p className="measure text-(--text-muted)">{problem.body}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" size="default">
        <SectionHeading
          title="How I Work"
          lead="The same four things I do for any small business, aimed at a practice. Most owners start with one and add the others once it is paying for itself."
          tone="light"
          className="max-w-3xl"
        />

        <Reveal group className="mt-11 grid gap-4 md:grid-cols-2">
          {opticalSteps.map((step) => (
            <RevealItem key={step.title}>
              <Link
                href={step.href}
                className="flex h-full flex-col gap-3 rounded-(--radius-card) border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/35 sm:p-8"
              >
                <step.icon className="h-5 w-5 text-white/70" aria-hidden="true" />
                <h3 className="display-sm text-white">{step.title}</h3>
                <p className="text-white/65">{step.body}</p>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </Section>

      <Section tone="muted" size="compact">
        <div className="soft-card flex flex-col gap-3 p-6 sm:p-8">
          <h2 className="display-sm text-(--brand-deep)">{opticalClosing.title}</h2>
          <p className="measure text-(--text-muted)">{opticalClosing.body}</p>
        </div>
      </Section>

      <FAQ
        items={opticalFaqs}
        title="Questions I get from practices"
        lead="The ones that come up before we talk. Anything not covered here, ask me on the call."
      />

      <ContactSection
        title="Tell me about the practice"
        lead="Half an hour on the phone. You won't have to explain optical to me."
      />
    </>
  );
}
