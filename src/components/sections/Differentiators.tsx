import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { differentiatorSection, differentiators } from "@/content/home";

export function Differentiators() {
  return (
    <Section size="tall" ruled>
      <SectionHeading
        eyebrow={differentiatorSection.eyebrow}
        title={differentiatorSection.title}
        lead={differentiatorSection.lead}
        className="max-w-3xl"
      />

      <Reveal group className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <RevealItem key={item.title} className="flex gap-6">
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
