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
        title="Who I usually work with"
        lead="I take other work too, but these are where I am most useful."
        className="max-w-3xl"
      />

      <Reveal group className="mt-10 grid gap-5 md:grid-cols-3">
        {industryFocus.map((industry) => (
          <RevealItem key={industry.title} className="soft-card flex flex-col gap-3 p-7">
            <h3 className="display-sm text-(--brand-deep)">{industry.title}</h3>
            <p className="text-(--text-muted)">{industry.body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
