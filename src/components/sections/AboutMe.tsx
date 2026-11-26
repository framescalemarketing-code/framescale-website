import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { aboutStrip, differentiators, personalNote } from "@/content/home";

/**
 * One section doing the work of three: the short bio, the signed note and the
 * reasons to hire me. The portrait lives in the hero and appears once on the
 * page, so this band carries the heading in its place. The note is a ruled
 * quote rather than a card, and the four reasons sit on hairlines.
 */
export function AboutMe() {
  return (
    <Section size="default">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading title={aboutStrip.title} />

          <div className="flex flex-col gap-4">
            {aboutStrip.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="measure text-(--text-muted)">
                {paragraph}
              </p>
            ))}
          </div>

          <Button href="/about" variant="outline" withArrow className="w-fit">
            {aboutStrip.cta}
          </Button>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 border-l-2 border-(--brand-primary) pl-6">
            {personalNote.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-(--brand-deep)">
                {paragraph}
              </p>
            ))}
            <p className="signature">{personalNote.signOff}</p>
          </div>

          <ul className="flex flex-col">
            {differentiators.map((item) => (
              <li key={item.title} className="rule grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
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
