import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { aboutStrip, differentiators, personalNote } from "@/content/home";
import { principal } from "@/lib/site";

/**
 * One section doing the work of three. The short bio, the signed note, and the
 * reasons to hire me were separate bands and all said "here is who I am", so
 * they are merged.
 */
export function AboutMe() {
  return (
    <Section tone="muted" size="default" ruled>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <div className="relative mx-auto aspect-4/5 w-full max-w-[15rem] overflow-hidden rounded-[2rem] border border-(--border) lg:mx-0 lg:max-w-none">
            <Image
              src="/photos/founder/jonathan-about.jpg"
              alt={`${principal.displayName}, ${principal.jobTitle}`}
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover object-[center_18%]"
            />
          </div>
          <Button href="/about" variant="outline" withArrow className="w-fit">
            {aboutStrip.cta}
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="display-lg text-(--brand-deep)">{aboutStrip.title}</h2>
          <p className="measure text-(--text-muted)">{aboutStrip.body}</p>

          <div className="soft-card mt-2 flex flex-col gap-5 p-6 sm:p-7">
            {personalNote.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-(--brand-deep)">
                {paragraph}
              </p>
            ))}
            <p className="signature">{personalNote.signOff}</p>
          </div>

          <ul className="mt-2 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <li key={item.title} className="flex flex-col gap-1">
                <span className="font-ui text-sm font-semibold text-(--brand-deep)">{item.title}</span>
                <span className="text-sm text-(--text-muted)">{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
