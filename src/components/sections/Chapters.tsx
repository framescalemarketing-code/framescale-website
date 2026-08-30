import Image from "next/image";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { chapters, philosophy } from "@/content/about";

/** The founder story on /about, as a numbered editorial sequence. */
export function Chapters() {
  return (
    <Section tone="muted" size="default">
      <SectionHeading title="How I got here" lead="Not a straight line, which turns out to be useful." className="max-w-3xl" />

      <Reveal group className="mt-11 flex flex-col">
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
              {chapter.image ? (
                <div className="relative mt-2 aspect-16/9 w-full max-w-xl overflow-hidden rounded-(--radius-media) border border-(--border)">
                  <Image
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 36rem"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </Reveal>

      {/* Closes the story: what the whole run through the shop and back to
          school was actually for. It used to sit in the San Diego band, which
          has been removed. */}
      <div className="soft-card mt-10 grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_16rem] md:items-center md:gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="display-sm text-(--brand-deep)">{philosophy.title}</h3>
          <p className="measure text-(--text-muted)">{philosophy.body}</p>
        </div>
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-(--radius-media) border border-(--border)">
          <Image
            src="/photos/story/cartier-rimless.webp"
            alt="A gold rimless Cartier frame on a white surface, the panther detail on the temple in focus."
            fill
            sizes="(max-width: 768px) 100vw, 16rem"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
