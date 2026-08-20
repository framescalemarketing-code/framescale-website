import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { scaleIntro, scalePhases, workingStandards } from "@/content/scale";

/** Full five-phase treatment for /services, as a single band. */
export function ScaleDetail() {
  return (
    <Section id="method" tone="dark" size="default">
      <SectionHeading
        eyebrow={scaleIntro.name}
        title={scaleIntro.headline}
        lead={scaleIntro.lead}
        tone="light"
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {scalePhases.map((phase) => (
          <article
            key={phase.letter}
            className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-headline text-3xl leading-none text-(--brand-secondary)" aria-hidden="true">
                {phase.letter}
              </span>
              <h3 className="font-headline text-lg text-white">{phase.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{phase.description}</p>
            <ul className="mt-1 flex flex-col gap-2 border-t border-white/12 pt-4">
              {phase.deliverables.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-white/70">
                  <Check className="mt-1 size-3.5 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* The working standards used to be their own band. They fit here as a
            sixth tile, which keeps the page a section shorter. */}
        <article className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6">
          <h3 className="font-headline text-lg text-white">How I work</h3>
          <ul className="flex flex-col gap-3">
            {workingStandards.map((standard) => (
              <li key={standard.title} className="flex flex-col gap-0.5">
                <span className="font-ui text-sm font-semibold text-white">{standard.title}</span>
                <span className="text-sm leading-relaxed text-white/65">{standard.description}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
