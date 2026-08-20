import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { personalNote } from "@/content/home";
import { principal } from "@/lib/site";

/**
 * A short signed note. This is the most personal moment on the site and the
 * main thing that keeps it from reading like a firm.
 */
export function PersonalNote() {
  return (
    <Section tone="muted" size="default" width="narrow">
      <div className="flex flex-col items-start gap-7">
        <div className="flex items-center gap-4">
          <span className="relative size-16 shrink-0 overflow-hidden rounded-full border border-(--border)">
            <Image
              src="/photos/founder/jonathan-about.jpg"
              alt={principal.fullName}
              fill
              sizes="64px"
              className="object-cover object-[center_12%]"
            />
          </span>
          <p className="eyebrow">{personalNote.eyebrow}</p>
        </div>

        <div className="flex flex-col gap-5">
          {personalNote.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-lg leading-relaxed text-(--brand-deep)">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="signature">{personalNote.signOff}</p>
      </div>
    </Section>
  );
}
