import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { scaleIntro, scalePhases, workingStandards } from "@/content/scale";

/**
 * The dark anchor section on the home page. Condensed to letter, title, and one
 * line per phase; the full treatment lives on /services.
 */
export function ScaleSummary() {
  return (
    <Section tone="dark" size="tall">
      <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow eyebrow-light">{scaleIntro.name}</p>
          <h2 className="display-lg text-white">{scaleIntro.headline}</h2>
          <p className="lead text-white/65">{scaleIntro.lead}</p>
          <Link
            href="/services#method"
            className="group mt-2 inline-flex w-fit items-center gap-2 font-ui text-sm font-semibold text-(--brand-secondary)"
          >
            See The Full Method
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <Reveal group className="flex flex-col">
          {scalePhases.map((phase, index) => (
            <RevealItem
              key={phase.letter}
              className={`flex items-baseline gap-6 py-7 ${index === 0 ? "" : "border-t border-white/12"}`}
            >
              <span
                className="w-8 shrink-0 font-headline text-4xl leading-none text-(--brand-secondary)"
                aria-hidden="true"
              >
                {phase.letter}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-headline text-xl text-white">{phase.title}</h3>
                <p className="measure text-sm text-white/60">{phase.summary}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

/** Full five-phase treatment for /services. Absorbs the old /process page. */
export function ScaleDetail() {
  return (
    <>
      <Section id="method" tone="dark" size="tall">
        <SectionHeading
          eyebrow={scaleIntro.name}
          title={scaleIntro.headline}
          lead={scaleIntro.lead}
          tone="light"
          className="max-w-3xl"
        />

        <div className="mt-11 flex flex-col gap-12">
          {scalePhases.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.letter}
                className="grid gap-8 border-t border-white/12 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className="w-12 shrink-0 font-headline text-6xl leading-none text-(--brand-secondary)"
                      aria-hidden="true"
                    >
                      {phase.letter}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white/8">
                      <Icon className="size-5 text-white/70" aria-hidden="true" />
                    </span>
                  </div>
                  <p className="font-ui text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                    Phase {phase.number}
                  </p>
                  <h3 className="display-md text-white">{phase.title}</h3>
                  <p className="text-white/65">{phase.description}</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow eyebrow-light mb-4">What I Do</p>
                    <ul className="flex flex-col gap-3">
                      {phase.activities.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-white/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow eyebrow-light mb-4">What You Get</p>
                    <ul className="flex flex-col gap-3">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white/70">
                          <Check
                            className="mt-1 size-3.5 shrink-0 text-(--brand-secondary)"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section ruled>
        <SectionHeading
          eyebrow="Working Standards"
          title="How I work"
          className="max-w-3xl"
        />
        <Reveal group className="mt-9 grid gap-x-9 gap-y-8 md:grid-cols-2">
          {workingStandards.map((standard) => (
            <RevealItem key={standard.title} className="rule flex flex-col gap-2 pt-6">
              <h3 className="display-sm text-(--brand-deep)">{standard.title}</h3>
              <p className="text-(--text-muted)">{standard.description}</p>
            </RevealItem>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
