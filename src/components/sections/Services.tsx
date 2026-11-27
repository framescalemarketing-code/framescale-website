import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { scalePhases } from "@/content/scale";
import { services } from "@/content/services";

/** Condensed overview for the home page. Each row deep-links to /services. */
export function ServiceOverview() {
  return (
    <Section tone="muted" size="default">
      <SectionHeading
        title="Four Ways I Help Optical Practices"
        className="max-w-3xl"
      />

      <Reveal group className="mt-10 flex flex-col">
        {services.map((service, index) => (
          <RevealItem key={service.id} className={index === 0 ? "" : "rule"}>
            <Link
              href={`/services#${service.id}`}
              className="focus-ring group flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10"
            >
              {/* On phones the number and the arrow share one line above the
                  text, so the arrow is not left stranded below it. `contents`
                  dissolves this wrapper from md up, where the row is a single
                  flex line again. */}
              <div className="flex items-center justify-between md:contents">
                <span className="font-ui text-xs font-bold text-(--brand-primary-hover) tabular-nums md:w-10">
                  {service.number}
                </span>

                <ArrowRight
                  className="size-5 shrink-0 text-(--brand-primary) transition-transform group-hover:translate-x-1 md:order-last"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <h3 className="display-sm text-(--brand-deep) transition-colors group-hover:text-(--brand-primary)">
                  {service.title}
                </h3>
                <p className="measure text-(--text-muted)">{service.summary}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}

/**
 * Full detail for /services, as one section rather than four stacked bands.
 * The ids stay anchor targets, linked from the home page and the footer.
 */
export function ServiceDetails() {
  return (
    <Section size="default">
      <Reveal group className="flex flex-col">
        {services.map((service) => {
          const phase = scalePhases.find((item) => item.letter === service.phase);
          return (
            <RevealItem
              key={service.id}
              id={service.id}
              as="section"
              className="rule grid scroll-mt-28 gap-6 py-12 first:border-t-0 first:pt-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            >
              <div className="flex flex-col gap-3">
                <span className="font-headline text-sm font-semibold text-(--brand-primary-hover) tabular-nums">
                  {service.number}
                </span>
                <h2 className="display-md text-(--brand-deep)">{service.title}</h2>
                <p className="measure text-(--text-muted)">{service.body}</p>
              </div>

              <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3 text-(--brand-deep)">
                      <Check className="mt-1 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-(--text-muted)">
                  <span className="font-ui font-semibold text-(--brand-deep)">For you if: </span>
                  {service.bestFor}
                </p>

                {phase ? (
                  <Link
                    href={`/method#phase-${phase.letter.toLowerCase()}`}
                    className="link-quiet inline-flex min-h-11 w-fit items-center gap-2 font-ui text-sm font-semibold text-(--brand-primary-hover)"
                  >
                    Method phase: {phase.title}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
