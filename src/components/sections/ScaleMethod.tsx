import { Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { scalePhases, workingStandards } from "@/content/scale";

/** Letter sizes climb like the logo's circles: each phase is a step up. */
const LETTER_SIZES = ["3.5rem", "4.25rem", "5rem", "5.75rem", "6.5rem"] as const;

/**
 * The five SCALE phases on /method, as ruled rows. Each row carries the anchor
 * (`#phase-s` and so on) that /services links to, so the ids are load-bearing.
 */
export function ScalePhases() {
  return (
    <Section size="default">
      <Reveal group className="flex flex-col">
        {scalePhases.map((phase, index) => (
          <RevealItem
            key={phase.letter}
            as="section"
            id={`phase-${phase.letter.toLowerCase()}`}
            className="rule grid scroll-mt-28 gap-6 py-12 first:border-t-0 first:pt-0 lg:grid-cols-[0.45fr_1.55fr] lg:gap-16"
          >
            <div className="flex items-end gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span
                className="font-headline leading-none font-semibold text-(--brand-primary)"
                style={{ fontSize: LETTER_SIZES[index] }}
                aria-hidden="true"
              >
                {phase.letter}
              </span>
              <span className="font-headline pb-1 text-sm font-semibold text-(--text-muted) tabular-nums lg:pb-0">
                Phase {phase.number}
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="display-md text-(--brand-deep)">
                  <span className="sr-only">{phase.letter}: </span>
                  {phase.title}
                </h2>
                <p className="measure text-(--text-muted)">{phase.description}</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <h3 className="font-ui text-sm font-semibold text-(--brand-deep)">What I Do</h3>
                  <ul className="flex flex-col gap-2.5">
                    {phase.activities.map((item) => (
                      <li key={item} className="flex gap-3 text-(--text-muted)">
                        <span
                          className="mt-2.5 block h-px w-3 shrink-0 bg-(--brand-primary)"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-ui text-sm font-semibold text-(--brand-deep)">What You Get</h3>
                  <ul className="flex flex-col gap-2.5">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-(--brand-deep)">
                        <Check className="mt-1 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}

/** The four working standards, on a muted band under the phases. */
export function WorkingStandards() {
  return (
    <Section tone="muted" size="default">
      <SectionHeading
        title="How I Work Throughout"
        lead="These hold in every phase, whichever service you hire me for."
        className="max-w-3xl"
      />
      <Reveal group className="mt-10 grid gap-x-16 md:grid-cols-2">
        {workingStandards.map((standard) => (
          <RevealItem key={standard.title} className="rule flex flex-col gap-2 py-7">
            <h3 className="display-sm text-(--brand-deep)">{standard.title}</h3>
            <p className="measure text-(--text-muted)">{standard.description}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
