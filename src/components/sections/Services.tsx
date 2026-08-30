import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";

/** Condensed overview for the home page. Each row deep-links to /services. */
export function ServiceOverview() {
  return (
    <Section size="default">
      <SectionHeading title="The Work" lead="Most owners need more than one of these." className="max-w-3xl" />

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
                <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums md:w-10">
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
    <Section tone="muted" size="default">
      <SectionHeading title="The Work" lead="Most owners need more than one of these." className="max-w-2xl" />

      <Reveal group className="mt-10 grid gap-5 lg:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem
              key={service.id}
              id={service.id}
              as="section"
              className="soft-card flex scroll-mt-28 flex-col gap-4 p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-(--brand-primary)/10">
                  <Icon className="size-5 text-(--brand-primary)" aria-hidden="true" />
                </span>
                <h2 className="display-sm text-(--brand-deep)">{service.title}</h2>
              </div>

              <p className="text-(--text-muted)">{service.body}</p>

              <ul className="flex flex-col gap-2.5">
                {service.included.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-(--brand-deep)">
                    <Check className="mt-1 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="rule mt-auto pt-4 text-sm text-(--text-muted)">
                <span className="font-ui font-semibold text-(--brand-deep)">For you if: </span>
                {service.bestFor}
              </p>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
