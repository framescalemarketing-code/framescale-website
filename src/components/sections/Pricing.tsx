import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { formatPrice, pricingSection, pricingTiers } from "@/content/pricing";
import { site } from "@/lib/site";

/**
 * Two tiers with visible prices. Listing them filters out bad-fit inquiries
 * before the call, which is the main reason to show pricing at all.
 */
export function Pricing() {
  return (
    <Section id="pricing" size="tall" ruled>
      <SectionHeading
        eyebrow={pricingSection.eyebrow}
        title={pricingSection.title}
        lead={pricingSection.lead}
        className="max-w-3xl"
      />

      <Reveal group className="mt-14 grid gap-6 lg:grid-cols-2">
        {pricingTiers.map((tier) => (
          <RevealItem
            key={tier.id}
            className={`flex flex-col gap-7 rounded-2xl p-8 md:p-10 ${
              tier.featured
                ? "dark-section overflow-hidden"
                : "hairline-box"
            }`}
          >
            {tier.featured ? <div className="grain-overlay" /> : null}

            <div className="flex flex-col gap-3">
              <p className={`eyebrow ${tier.featured ? "eyebrow-light" : ""}`}>{tier.tagline}</p>
              <h3 className={`display-md ${tier.featured ? "text-white" : "text-(--brand-deep)"}`}>
                {tier.name}
              </h3>
              <p className="flex items-baseline gap-2">
                <span
                  className={`font-headline text-4xl ${tier.featured ? "text-white" : "text-(--brand-deep)"}`}
                >
                  {formatPrice(tier.price)}
                </span>
                <span
                  className={`font-ui text-sm ${tier.featured ? "text-white/55" : "text-(--text-muted)"}`}
                >
                  {tier.cadence}
                </span>
              </p>
              <p className={tier.featured ? "text-white/65" : "text-(--text-muted)"}>{tier.description}</p>
            </div>

            <ul className="flex flex-1 flex-col gap-3">
              {tier.includes.map((item) => (
                <li
                  key={item}
                  className={`flex gap-3 text-sm leading-relaxed ${
                    tier.featured ? "text-white/75" : "text-(--brand-deep)"
                  }`}
                >
                  <Check
                    className={`mt-1 size-4 shrink-0 ${
                      tier.featured ? "text-(--brand-secondary)" : "text-(--brand-primary)"
                    }`}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href={site.contactAnchor}
              size="lg"
              variant={tier.featured ? "light" : "primary"}
              withArrow
              className="w-full"
            >
              {tier.cta}
            </Button>
          </RevealItem>
        ))}
      </Reveal>

      <p className="mt-10 max-w-2xl text-sm text-(--text-muted)">{pricingSection.footnote}</p>
    </Section>
  );
}
