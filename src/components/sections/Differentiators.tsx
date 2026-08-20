import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { differentiatorSection, differentiators } from "@/content/home";

export function Differentiators() {
  return (
    <Section size="tall" ruled>
      <SectionHeading
        eyebrow={differentiatorSection.eyebrow}
        title={differentiatorSection.title}
        className="max-w-3xl"
      />

      <Reveal group className="mt-10 grid gap-5 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <RevealItem key={item.title} className="soft-card flex gap-5 p-6 sm:p-7">
            <span className="font-ui text-xs font-bold text-(--brand-primary) tabular-nums">
              0{index + 1}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="display-sm text-(--brand-deep)">{item.title}</h3>
              <p className="text-(--text-muted)">{item.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
