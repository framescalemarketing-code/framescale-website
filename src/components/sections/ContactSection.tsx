import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contactSection, contactSteps } from "@/content/contact";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { bookingLive, ctaLabels, site } from "@/lib/site";

type ContactSectionProps = {
  title?: string;
  lead?: string;
};

/**
 * The single conversion point on the site, repeated at the foot of the four
 * marketing pages. The NAP details here must match the footer and the JSON-LD
 * exactly. Once booking is live the left column also offers the calendar, and
 * the form becomes the second path.
 */
export function ContactSection({
  title = contactSection.title,
  lead = contactSection.lead,
}: ContactSectionProps) {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section id="contact" tone="muted" size="tall">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="display-lg text-(--brand-deep)">{title}</h2>
            <p className="lead">{lead}</p>
            {bookingLive ? (
              <Button href={site.bookingPath} size="lg" withArrow className="mt-2 w-fit">
                {ctaLabels.book}
              </Button>
            ) : null}
          </div>

          <ol className="flex flex-col gap-3">
            {contactSteps.map((step, index) => (
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
              {contactSection.locationLine}
            </p>
            <p className="flex items-center gap-3 text-sm text-(--text-muted)">
              <Clock className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              {contactSection.hours}
            </p>
          </div>
        </div>

        <div className="hairline-box p-6 sm:p-8">
          <h3 className="display-sm mb-2 text-(--brand-deep)">{contactSection.card.title}</h3>
          <p className="mb-7 text-sm text-(--text-muted)">{contactSection.card.lead}</p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
