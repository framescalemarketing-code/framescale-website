import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";

/** Condensed overview for the home page. Each row deep-links to /services. */
export function ServiceOverview() {
  return (
    <Section tone="muted" size="tall" ruled>
      <SectionHeading
        eyebrow="What I Do"
        title="Four ways I help"
        lead="They work together. That is the point."
        className="max-w-3xl"
      />

      <Reveal group className="mt-10 flex flex-col">
        {services.map((service, index) => (
          <RevealItem key={service.id} className={index === 0 ? "" : "rule"}>
            <Link
              href={`/services#${service.id}`}
              className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-10"
            >
              <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums md:w-10">
                {service.number}
              </span>

              <div className="flex flex-1 flex-col gap-2">
                <h3 className="display-sm text-(--brand-deep) transition-colors group-hover:text-(--brand-primary)">
                  {service.title}
                </h3>
                <p className="measure text-(--text-muted)">{service.summary}</p>
              </div>

              <ArrowRight
                className="size-5 shrink-0 text-(--brand-primary) transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}

/**
 * Full detail for /services. Each service is an anchor target, so these ids are
 * linked from the home page and the footer and should stay stable.
 */
export function ServiceDetails() {
  return (
    <>
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Section
            key={service.id}
            id={service.id}
            tone={index % 2 === 1 ? "muted" : "default"}
            ruled
            size="default"
          >
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-(--brand-primary)/10">
                    <Icon className="size-6 text-(--brand-primary)" aria-hidden="true" />
                  </span>
                  <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums">
                    {service.number}
                  </span>
                </div>
                <h2 className="display-md text-(--brand-deep)">{service.title}</h2>
                <p className="text-(--text-muted)">{service.body}</p>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="eyebrow eyebrow-muted mb-5">What You Get</p>
                  <ul className="flex flex-col gap-3">
                    {service.included.map((item) => (
                      <li key={item} className="flex gap-3 text-(--brand-deep)">
                        <Check className="mt-1 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
                        <span className="measure">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rule pt-6">
                  <p className="eyebrow eyebrow-muted mb-3">This Is For You If</p>
                  <p className="measure text-(--text-muted)">{service.bestFor}</p>
                </div>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
}
