import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { chapters, philosophy, sanDiegoSection } from "@/content/about";

/** The founder story on /about, as a numbered editorial sequence. */
export function Chapters() {
  return (
    <Section size="tall" ruled>
      <SectionHeading
        eyebrow="The Path"
        title="How I got here"
        lead="Not a straight line, and that turns out to be the useful part."
        className="max-w-3xl"
      />

      <Reveal group className="mt-16 flex flex-col">
        {chapters.map((chapter, index) => (
          <RevealItem
            key={chapter.marker}
            className={`grid gap-6 py-10 md:grid-cols-[auto_1fr] md:gap-14 ${index === 0 ? "" : "rule"}`}
          >
            <div className="flex flex-row items-baseline gap-4 md:w-44 md:flex-col md:gap-2">
              <span className="font-headline text-3xl leading-none text-(--brand-primary)">
                {chapter.marker}
              </span>
              <span className="font-ui text-[11px] font-semibold tracking-[0.14em] text-(--text-muted) uppercase">
                {chapter.kicker}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="display-md text-(--brand-deep)">{chapter.title}</h3>
              <p className="measure text-(--text-muted)">{chapter.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}

/**
 * The local section. This is the page's unique local content, which is what
 * separates a genuine local page from a doorway page.
 */
export function SanDiegoSection() {
  return (
    <Section tone="muted" size="tall" ruled>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{sanDiegoSection.eyebrow}</p>
          <h2 className="display-lg text-(--brand-deep)">{sanDiegoSection.title}</h2>
        </div>

        <div className="flex flex-col gap-6">
          {sanDiegoSection.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="measure text-(--text-muted)">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Closing philosophy note on /about. */
export function Philosophy() {
  return (
    <Section size="default" ruled width="narrow">
      <div className="flex flex-col gap-5">
        <p className="eyebrow">{philosophy.eyebrow}</p>
        <h2 className="display-md text-(--brand-deep)">{philosophy.title}</h2>
        <p className="text-lg leading-relaxed text-(--text-muted)">{philosophy.body}</p>
      </div>
    </Section>
  );
}
