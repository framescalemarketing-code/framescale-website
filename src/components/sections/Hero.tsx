import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { credentials, hero } from "@/content/home";
import { practice, principal, site } from "@/lib/site";

/**
 * Home hero. The credential strip sits inside this section rather than in a
 * band of its own, so the page is one section shorter and the proof sits next
 * to the claim it supports.
 */
export function HomeHero() {
  return (
    <section className="pt-10 pb-0 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="display-xl text-(--brand-deep)">{hero.headline}</h1>

            <p className="lead">{hero.lead}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.contactAnchor} size="lg" withArrow>
                {hero.primaryCta}
              </Button>
              <Button href="/services" size="lg" variant="outline">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border border-(--border)">
              <Image
                src="/photos/founder/jonathan-about.jpg"
                alt={`${principal.displayName}, ${principal.jobTitle} in San Diego`}
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-[center_15%]"
                priority
                fetchPriority="high"
              />
            </div>

            <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/25 bg-(--brand-deep)/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-headline text-lg leading-tight text-white">{principal.displayName}</p>
              <p className="mt-1 font-ui text-[10px] font-semibold tracking-[0.14em] text-white/60 uppercase">
                {practice.name}
              </p>
            </div>
          </div>
        </div>

        <dl className="rule mt-12 grid grid-cols-2 gap-x-8 gap-y-6 py-8 md:grid-cols-4">
          {credentials.map((item) => (
            <div key={item.value} className="flex flex-col gap-1">
              <dt className="font-headline text-lg leading-tight text-(--brand-deep)">{item.value}</dt>
              <dd className="font-ui text-[11px] font-medium tracking-[0.08em] text-(--text-muted) uppercase">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

type PageHeroProps = {
  headline: string;
  lead: string;
  /** Rendered inside the same section, so a related block does not become another band. */
  children?: ReactNode;
};

/** Shared hero for /services and /about. */
export function PageHero({ headline, lead, children }: PageHeroProps) {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-14">
      <Container>
        <div className="flex max-w-3xl flex-col gap-5">
          <h1 className="display-xl text-(--brand-deep)">{headline}</h1>
          <p className="lead">{lead}</p>
        </div>
        {children}
      </Container>
    </section>
  );
}
