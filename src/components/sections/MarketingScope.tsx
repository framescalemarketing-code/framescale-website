import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { marketingParts, marketingScope } from "@/content/home";

/**
 * Corrects the assumption most owners arrive with, that marketing means social
 * media, by listing what it covers. Laid out as ruled rows with the title and
 * the explanation side by side, so it reads like a table of contents for the
 * rest of the page instead of a stack of equal cards.
 */
export function MarketingScope() {
  return (
    <Section size="default">
      <SectionHeading title={marketingScope.title} lead={marketingScope.lead} className="max-w-3xl" />

      <Reveal group className="mt-12 flex flex-col">
        {marketingParts.map((part, index) => (
          <RevealItem
            key={part.title}
            className="rule grid gap-2 py-6 md:grid-cols-[3.5rem_1fr_1.5fr] md:gap-8 md:py-7"
          >
            <span className="font-headline text-sm font-semibold text-(--brand-primary) tabular-nums">
              0{index + 1}
            </span>
            <h3 className="display-sm text-(--brand-deep)">{part.title}</h3>
            <p className="measure text-(--text-muted)">{part.body}</p>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
