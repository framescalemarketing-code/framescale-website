import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/home";
import { practice, principal, site } from "@/lib/site";

/**
 * Home hero. Text left, portrait right, no parallax. The previous hero animated
 * a background image on scroll, which pushed LCP well past the 2.5s target for
 * no real benefit.
 */
export function HomeHero() {
  return (
    <section className="pt-10 pb-14 md:pt-16 md:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">{hero.eyebrow}</p>

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

            <p className="font-ui text-sm text-(--text-muted)">{hero.reassurance}</p>
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
                {principal.jobTitle} · {practice.name}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  headline: string;
  lead: string;
};

/** Shared hero for /services and /about. Type only, no image. */
export function PageHero({ eyebrow, headline, lead }: PageHeroProps) {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-14">
      <Container>
        <div className="flex max-w-4xl flex-col gap-6">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl text-(--brand-deep)">{headline}</h1>
          <p className="lead">{lead}</p>
        </div>
      </Container>
    </section>
  );
}
