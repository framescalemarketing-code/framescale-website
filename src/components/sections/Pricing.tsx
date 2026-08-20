import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { pricingPoints, pricingSection } from "@/content/pricing";
import { site } from "@/lib/site";

/**
 * Explains how a price gets arrived at rather than listing packages. Work is
 * scoped with each owner, so there is no honest number to publish. The section
 * stays because "what does it cost" is the question the page has to answer.
 */
export function Pricing() {
  return (
    <Section id="pricing" tone="muted" size="default" ruled>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading title={pricingSection.title} lead={pricingSection.lead} />
          <p className="measure text-(--text-muted)">{pricingSection.intro}</p>
          <Button href={site.contactAnchor} size="lg" withArrow className="mt-1 w-fit">
            {pricingSection.cta}
          </Button>
        </div>

        <Reveal group className="grid gap-4 sm:grid-cols-2">
          {pricingPoints.map((point, index) => (
            <RevealItem key={point.title} className="soft-card flex flex-col gap-2 p-6">
              <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums">
                0{index + 1}
              </span>
              <h3 className="display-sm text-(--brand-deep)">{point.title}</h3>
              <p className="text-sm leading-relaxed text-(--text-muted)">{point.body}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
