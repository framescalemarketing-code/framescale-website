import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { contactSection, contactSteps } from "@/content/contact";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { bookingLive, ctaLabels, site } from "@/lib/site";

/**
 * The message form and the direct contact details, used on /contact only. The
 * NAP details here must match the footer and the JSON-LD exactly. Once booking
 * is live the left column also offers the calendar, and the form is the second
 * path. The form itself (ContactForm, its route and its Turnstile slot) is
 * untouched: this file only lays it out.
 */
export function ContactSection() {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section id="contact" size="default">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {bookingLive ? (
              <Button href={site.bookingPath} size="lg" withArrow className="w-fit">
                {ctaLabels.book}
              </Button>
            ) : null}
            <h2 className="display-sm text-(--brand-deep)">What Happens Next</h2>
            <ol className="flex flex-col">
              {contactSteps.map((step, index) => (
                <li
                  key={step}
                  className={`flex gap-4 py-3 text-(--text-muted) ${index === 0 ? "" : "rule"}`}
                >
                  <span className="font-headline text-sm font-semibold text-(--brand-primary) tabular-nums">
                    0{index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="display-sm text-(--brand-deep)">Call Or Email Me</h2>
            <a
              href={`tel:${site.phoneHref}`}
              className="link-quiet flex min-h-11 w-fit items-center gap-3 text-(--brand-deep) hover:text-(--brand-primary)"
            >
              <Phone className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              <span className="font-ui text-sm font-semibold">{site.phone}</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-quiet flex min-h-11 w-fit items-center gap-3 text-(--brand-deep) hover:text-(--brand-primary)"
            >
              <Mail className="size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              <span className="font-ui text-[13px] font-semibold wrap-anywhere">{site.email}</span>
            </a>
            <p className="flex items-start gap-3 text-sm text-(--text-muted)">
              <MapPin className="mt-0.5 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              {contactSection.locationLine}
            </p>
            <p className="flex items-start gap-3 text-sm text-(--text-muted)">
              <Clock className="mt-0.5 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              {contactSection.hours}
            </p>
          </div>
        </div>

        <div className="hairline-box p-6 sm:p-8">
          <h2 className="display-sm mb-7 text-(--brand-deep)">{contactSection.card.title}</h2>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
