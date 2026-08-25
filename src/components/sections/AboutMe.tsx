import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutStrip, differentiators, personalNote } from "@/content/home";

/**
 * One section doing the work of three. The short bio, the signed note, and the
 * reasons to hire me were separate bands and all said "here is who I am", so
 * they are merged. The portrait lives in the hero and appears once on the page,
 * so this band carries the heading in its place.
 */
export function AboutMe() {
  return (
    <Section tone="muted" size="default">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <SectionHeading title={aboutStrip.title} />

          {/* The story runs to a few paragraphs, so it uses body text rather
              than `section-lead`, which is sized for a one-line signpost. */}
          <div className="flex flex-col gap-4">
            {aboutStrip.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-(--text-muted)">
                {paragraph}
              </p>
            ))}
          </div>

          <Button href="/about" variant="outline" withArrow className="w-fit">
            {aboutStrip.cta}
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="soft-card flex flex-col gap-5 p-6 sm:p-8">
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
