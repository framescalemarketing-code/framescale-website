import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonials, workItems, workSection } from "@/content/work";

type WorkProps = {
  /** `dark` paints it as a page's anchor band; the light tones sit between bands. */
  tone?: "default" | "muted" | "dark";
};

/**
 * The proof section: a real site, with a screenshot that links to it. It
 * appears once, on /optical, because the client is an optical company and
 * the sample lands hardest next to that page's pitch. One item for now; the
 * layout already handles more. Testimonials render only once there is one to
 * show.
 */
export function Work({ tone = "default" }: WorkProps) {
  const light = tone === "dark";
  const muted = light ? "text-white/65" : "text-(--text-muted)";
  const strong = light ? "text-white" : "text-(--brand-deep)";
  const accent = light ? "text-(--brand-secondary)" : "text-(--brand-primary)";
  const frame = light ? "border-white/20" : "border-(--border)";

  return (
    <Section id="work" tone={tone} size="default">
      <SectionHeading
        title={workSection.title}
        lead={workSection.lead}
        tone={light ? "light" : "default"}
        className="max-w-3xl"
      />

      <div className="mt-10 flex flex-col gap-14">
        {workItems.map((item) => (
          <Reveal key={item.id} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-14">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`focus-ring group block overflow-hidden rounded-(--radius-media) border ${frame} bg-white`}
              aria-label={`${workSection.cta}: ${item.name}`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </a>

            <div className="flex flex-col gap-5">
              <p className={`font-ui text-[11px] font-semibold tracking-[0.14em] uppercase ${muted}`}>
                {item.kind} · {item.industry}
              </p>
              <h3 className={`display-md ${strong}`}>{item.name}</h3>
              <p className={`measure ${muted}`}>{item.summary}</p>

              <ul className="flex flex-col gap-3">
                {item.points.map((point) => (
                  <li key={point.title} className="flex gap-3 text-sm">
                    <Check className={`mt-1 size-4 shrink-0 ${accent}`} aria-hidden="true" />
                    <span className={muted}>
                      <span className={`font-ui font-semibold ${strong}`}>{point.title}. </span>
                      {point.body}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-quiet inline-flex w-fit items-center gap-2 font-ui text-sm font-semibold ${accent}`}
              >
                {workSection.cta}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        ))}

        {testimonials.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((quote) => (
              <blockquote
                key={`${quote.name}-${quote.role}`}
                className={`flex flex-col gap-4 rounded-(--radius-card) border ${frame} p-6 sm:p-8 ${
                  light ? "bg-white/5" : "bg-(--card)"
                }`}
              >
                <p className={`font-headline text-lg leading-relaxed ${strong}`}>{quote.quote}</p>
                <footer className={`text-sm ${muted}`}>
                  <span className={`font-ui font-semibold ${strong}`}>{quote.name}</span>, {quote.role}
                  {quote.company ? `, ${quote.company}` : ""}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
