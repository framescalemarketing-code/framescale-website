import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { industryFocus } from "@/content/services";

/**
 * Replaces the three former industry landing pages. Near-duplicate vertical
 * pages are the pattern search engines treat as doorway content, so the three
 * verticals live here as one section instead.
 */
export function IndustryFocus() {
  return (
    <Section id="industries" tone="muted" size="tall" ruled>
      <SectionHeading
        eyebrow="Who I Work With"
        title="Where I already know the terrain"
        lead="I take work outside these three, but this is where the background pays off fastest."
        className="max-w-3xl"
      />

      <Reveal group className="mt-14 grid gap-8 md:grid-cols-3">
        {industryFocus.map((industry) => (
          <RevealItem key={industry.title} className="rule flex flex-col gap-3 pt-7">
            <h3 className="display-sm text-(--brand-deep)">{industry.title}</h3>
            <p className="text-(--text-muted)">{industry.body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
