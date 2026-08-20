import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { aboutStrip } from "@/content/home";
import { principal } from "@/lib/site";

/** Short bio block on the home page. The full story lives on /about. */
export function AboutStrip() {
  return (
    <Section tone="muted" size="tall" ruled>
      <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="relative mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-4xl lg:max-w-none">
          <Image
            src="/photos/founder/jonathan-about.jpg"
            alt={`${principal.displayName}, ${principal.jobTitle}`}
            fill
            sizes="(max-width: 1024px) 60vw, 30vw"
            className="object-cover object-[center_18%]"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="eyebrow">{aboutStrip.eyebrow}</p>
          <h2 className="display-lg text-(--brand-deep)">{aboutStrip.title}</h2>
          <p className="measure text-(--text-muted)">{aboutStrip.body}</p>
          <Button href="/about" variant="outline" size="lg" withArrow className="w-fit">
            {aboutStrip.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
