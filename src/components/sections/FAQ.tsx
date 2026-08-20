import { Section, SectionHeading } from "@/components/ui/Section";
import type { FaqItem } from "@/content/faq";

type FaqProps = {
  items: FaqItem[];
  title?: string;
  lead?: string;
  tone?: "default" | "muted";
};

/**
 * Native <details> rather than a JS accordion: it works without hydration, is
 * keyboard accessible for free, and leaves the answers in the DOM where search
 * engines and AI crawlers can read them. The same items feed FAQPage JSON-LD.
 */
export function FAQ({
  items,
  title = "Questions I get a lot",
  lead = "The things people ask me before we talk.",
  tone = "default",
}: FaqProps) {
  return (
    <Section tone={tone} size="tall" ruled>
      <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading title={title} lead={lead} className="lg:sticky lg:top-24 lg:self-start" />

        <div className="flex flex-col">
          {items.map((item, index) => (
            <details key={item.question} className={`group py-6 ${index === 0 ? "" : "rule"}`}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="display-sm text-(--brand-deep) transition-colors group-hover:text-(--brand-primary)">
                  {item.question}
                </h3>
                <span
                  className="relative mt-2 size-4 shrink-0 text-(--brand-primary)"
                  aria-hidden="true"
                >
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 rotate-90 bg-current transition-transform duration-200 group-open:rotate-0" />
                </span>
              </summary>
              <p className="measure mt-4 text-(--text-muted)">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
