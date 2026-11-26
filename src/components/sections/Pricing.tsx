import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pricingPoints, pricingSection } from "@/content/pricing";
import { bookingHrefFor } from "@/lib/site";

/**
 * Explains how a price gets arrived at rather than listing packages. Work is
 * scoped with each owner, so there is no honest number to publish. The section
 * stays because "what does it cost" is the question the page has to answer.
 * The four steps are a numbered sequence on hairlines, since they happen in
 * order.
 */
export function Pricing() {
  return (
    <Section id="pricing" tone="muted" size="default">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading title={pricingSection.title} lead={pricingSection.lead} />
          <p className="measure text-(--text-muted)">{pricingSection.intro}</p>
          <Button href={bookingHrefFor()} size="lg" withArrow className="mt-1 w-fit">
            {pricingSection.cta}
          </Button>
        </div>

        <Reveal group className="flex flex-col">
          {pricingPoints.map((point, index) => (
            <RevealItem key={point.title} className="rule grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
              <span className="font-headline text-sm font-semibold text-(--brand-primary-hover) tabular-nums">
                0{index + 1}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="display-sm text-(--brand-deep)">{point.title}</h3>
                <p className="measure text-(--text-muted)">{point.body}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
