import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { chapters, chaptersIntro, philosophy } from "@/content/about";

/** The founder story on /about, as a numbered editorial sequence. */
export function Chapters() {
  return (
    <Section tone="muted" size="default">
      <SectionHeading title={chaptersIntro.title} className="max-w-3xl" />

      <Reveal group className="mt-11 flex flex-col">
        {chapters.map((chapter, index) => (
          <RevealItem
            key={chapter.marker}
            className={`grid gap-4 py-10 md:grid-cols-[6rem_1fr] md:gap-10 ${index === 0 ? "" : "rule"}`}
          >
            <span className="font-headline text-3xl leading-none text-(--brand-primary) tabular-nums">
              {chapter.marker}
            </span>

            <div className="flex flex-col gap-3">
              <h3 className="display-md text-(--brand-deep)">{chapter.title}</h3>
              <p className="measure text-(--text-muted)">{chapter.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>

      {/* Closes the story: what the run through the shop and back to school was
          for. A ruled pull-out rather than a card, so it reads as the point of
          the page and not another box. */}
      <div className="mt-6 flex flex-col gap-3 border-l-2 border-(--brand-primary) pl-6 sm:pl-8">
        <h3 className="display-sm text-(--brand-deep)">{philosophy.title}</h3>
        <p className="measure text-(--text-muted)">{philosophy.body}</p>
      </div>
    </Section>
  );
}
