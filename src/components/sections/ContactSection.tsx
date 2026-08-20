import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { location, site } from "@/lib/site";

type ContactSectionProps = {
  eyebrow?: string;
  title?: string;
  lead?: string;
};

const STEPS = [
  "I read it myself.",
  "We talk for thirty minutes.",
  "I tell you straight if I can help.",
  "You decide. No pressure.",
];

/**
 * The single conversion point on the site, repeated at the foot of all three
 * pages. The NAP details here must match the footer and the JSON-LD exactly.
 */
export function ContactSection({
  eyebrow = "Next Step",
  title = "Let's find out if this is a fit",
  lead = "Tell me what's going on. Thirty minutes is usually enough to see what to do first.",
}: ContactSectionProps) {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section id="contact" tone="muted" size="tall" ruled>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display-lg text-(--brand-deep)">{title}</h2>
            <p className="lead">{lead}</p>
          </div>

          <ol className="flex flex-col gap-3">
            {STEPS.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-(--text-muted)">
                <span className="font-ui text-xs font-bold text-(--brand-primary)">0{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <div className="rule flex flex-col gap-4 pt-8">
            <a
              href={`tel:${site.phoneHref}`}
              className="link-quiet flex w-fit items-center gap-3 text-(--brand-deep) hover:text-(--brand-primary)"
            >
              <Phone className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              <span className="font-ui text-sm font-semibold">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-quiet flex w-fit items-center gap-3 text-(--brand-deep) hover:text-(--brand-primary)"
            >
              <Mail className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              <span className="font-ui text-[13px] font-semibold wrap-anywhere">{site.email}</span>
            </a>
            <p className="flex items-center gap-3 text-sm text-(--text-muted)">
              <MapPin className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              {location.city}, {location.region}. Serving {location.serviceArea}.
            </p>
            <p className="flex items-center gap-3 text-sm text-(--text-muted)">
              <Clock className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              Monday to Friday, 9 to 5.
            </p>
          </div>
        </div>

        <div className="hairline-box rounded-2xl bg-background p-6 md:p-8">
          <h3 className="display-sm mb-2 text-(--brand-deep)">Tell me what's going on</h3>
          <p className="mb-7 text-sm text-(--text-muted)">
            Three boxes, that's it.
          </p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
