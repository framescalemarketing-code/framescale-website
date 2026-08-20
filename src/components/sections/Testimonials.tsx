import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { testimonialSection, testimonials } from "@/content/testimonials";

/**
 * Renders nothing while `testimonials` is empty, so the live site never shows a
 * placeholder or an empty shell. Add entries to src/content/testimonials.ts and
 * the section appears wherever it is mounted.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section size="tall" ruled>
      <SectionHeading
        eyebrow={testimonialSection.eyebrow}
        title={testimonialSection.title}
        className="max-w-3xl"
      />

      <Reveal group className="mt-10 grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <RevealItem
            key={testimonial.name}
            className="hairline-box flex flex-col gap-5 rounded-2xl p-8"
          >
            <blockquote className="font-headline text-xl leading-snug text-(--brand-deep)">
              {testimonial.quote}
            </blockquote>

            <div className="rule mt-auto flex flex-col gap-1 pt-5">
              <p className="font-ui text-sm font-semibold text-(--brand-deep)">{testimonial.name}</p>
              <p className="text-sm text-(--text-muted)">{testimonial.attribution}</p>
              {testimonial.result ? (
                <p className="mt-2 font-ui text-xs font-semibold tracking-[0.06em] text-(--brand-primary) uppercase">
                  {testimonial.result}
                </p>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
