import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Rings } from "@/components/design/Rings";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { credentials, hero } from "@/content/home";
import { principal, bookingHrefFor } from "@/lib/site";

/**
 * Home hero: the one full-bleed deep band at the top of the site. The ring
 * motif draws itself around the portrait like a lens, and the credential line
 * sits on a ruler-tick hairline at the foot so the proof is read next to the
 * claim it supports.
 */
export function HomeHero() {
  return (
    <section className="dark-section">
      <div className="grain-overlay" />
      <Container width="wide">
        <div className="flex flex-col lg:min-h-[min(44rem,calc(100svh-4.5rem))]">
          <div className="grid flex-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3">
                <h1 className="display-xl max-w-[16ch] text-[clamp(2.4rem,5.2vw,4.5rem)]">{hero.headline}</h1>
                <p className="display-sm text-(--brand-secondary)">{hero.subhead}</p>
              </div>

              <p className="lead">{hero.lead}</p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                <Button href={bookingHrefFor()} size="lg" variant="light" withArrow>
                  {hero.primaryCta}
                </Button>
                <Link
                  href="/method"
                  className="link-quiet w-fit font-ui text-base font-semibold text-white hover:text-(--on-deep-muted)"
                >
                  {hero.secondaryCta}
                </Link>
              </div>
            </div>

            <Rings className="mx-auto max-w-sm lg:max-w-none">
              <Image
                src="/photos/founder/jonathan-about.jpg"
                alt={`${principal.displayName}, ${principal.jobTitle}`}
                fill
                sizes="(max-width: 1024px) 190px, 260px"
                className="object-cover object-[center_18%]"
                priority
                fetchPriority="high"
              />
            </Rings>
          </div>

          <div>
            <div className="tick-rule text-(--ring-line)" aria-hidden="true" />
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 md:grid-cols-4">
              {credentials.map((item) => (
                <li key={item.value} className="flex flex-col gap-0.5">
                  <span className="font-headline text-lg leading-tight font-semibold text-white">{item.value}</span>
                  <span className="font-ui text-sm text-(--on-deep-muted)">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PageHeroProps = {
  headline: string;
  /** A short line under the headline, in the brand color. */
  subhead?: string;
  lead?: string;
  /** Rendered inside the same section, so a related block does not become another band. */
  children?: ReactNode;
};

/**
 * Shared hero for the inner pages. Paper ground under the deep masthead, with a
 * short ruler-tick hairline at the foot so the page opens on the same measuring
 * motif as the home hero.
 */
export function PageHero({ headline, subhead, lead, children }: PageHeroProps) {
  return (
    <section className="pt-14 pb-12 md:pt-20 md:pb-16">
      <Container>
        <div className="flex max-w-4xl flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="display-xl text-[clamp(2.2rem,4.8vw,4rem)] text-(--brand-deep)">{headline}</h1>
            {subhead ? <p className="display-sm text-(--brand-primary)">{subhead}</p> : null}
          </div>
          {lead ? <p className="lead">{lead}</p> : null}
        </div>
        {children}
        <div className="tick-rule mt-12 max-w-xs text-(--brand-primary)" aria-hidden="true" />
      </Container>
    </section>
  );
}
