import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { problemSection, problems } from "@/content/home";

/**
 * The "problem" beat in the conversion sequence. It comes before any solution
 * so the visitor recognizes themselves first.
 */
export function ProblemList() {
  return (
    <Section tone="muted" size="default" ruled>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          title={problemSection.title}
          lead={problemSection.lead}
          className="lg:sticky lg:top-24 lg:self-start"
        />

        <Reveal group className="flex flex-col gap-4">
          {problems.map((problem, index) => (
            <RevealItem key={problem.title} className="soft-card flex gap-5 p-6 sm:gap-6 sm:p-7">
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
  );
}
