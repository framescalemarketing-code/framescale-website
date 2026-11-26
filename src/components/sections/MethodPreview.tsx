import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { scaleIntro, scalePhases } from "@/content/scale";

/** Letter heights climb like the logo's circles: each phase is a step up. */
const LETTER_SIZES = ["3rem", "3.75rem", "4.5rem", "5.25rem", "6rem"] as const;

/**
 * Method preview on a deep band. The five SCALE letters grow left to right on
 * a shared baseline, which is the "Frame, then Scale" idea from the logo drawn
 * as type. Full detail lives on /method.
 */
export function MethodPreview() {
  return (
    <Section tone="dark" size="default">
      <div className="flex flex-col gap-4">
        <h2 className="display-lg max-w-3xl">The SCALE Method: Five Phases, Each One Shown Before The Next</h2>
        <p className="section-lead">{scaleIntro.lead}</p>
      </div>

      <Reveal group className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {scalePhases.map((phase, index) => (
          <RevealItem key={phase.letter} className="flex flex-col gap-3 border-t border-(--ring-line)/40 pt-5">
            <span className="flex lg:h-28 lg:items-end" aria-hidden="true">
              <span
                className="font-headline leading-none font-semibold text-(--brand-secondary)"
                style={{ fontSize: LETTER_SIZES[index] }}
              >
                {phase.letter}
              </span>
            </span>
            <h3 className="display-sm">
              <span className="sr-only">{phase.letter}: </span>
              {phase.title}
            </h3>
            <p className="text-[15px] text-(--on-deep-muted)">{phase.summary}</p>
          </RevealItem>
        ))}
      </Reveal>

      <div className="mt-12">
        <Button href="/method" variant="quiet" size="lg" withArrow>
          See The Full Method
        </Button>
      </div>
    </Section>
  );
}
