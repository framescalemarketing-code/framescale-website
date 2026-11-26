import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { location, site } from "@/lib/site";

const STEPS = [
  "I read it myself.",
  "We talk for half an hour.",
  "I tell you whether I can help.",
  "You decide. I will not chase you.",
];

/**
 * The booking form and the direct contact details, used on /contact only. The
 * NAP details here must match the footer and the JSON-LD exactly. The form
 * itself (ContactForm, its route and its Turnstile slot) is untouched: this
 * file only lays it out.
 */
export function ContactSection() {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section id="contact" size="default">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="display-sm text-(--brand-deep)">What Happens Next</h2>
            <ol className="flex flex-col">
              {STEPS.map((step, index) => (
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
            <h2 className="display-sm text-(--brand-deep)">Or Reach Me Directly</h2>
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
            <p className="flex items-start gap-3 text-sm text-(--text-muted)">
              <MapPin className="mt-0.5 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              Based in {location.regionName}. Working remotely across {location.serviceArea}.
            </p>
            <p className="flex items-start gap-3 text-sm text-(--text-muted)">
              <Clock className="mt-0.5 size-4 shrink-0 text-(--brand-primary)" aria-hidden="true" />
              Monday to Friday, 9 to 5.
            </p>
          </div>
        </div>

        <div className="hairline-box p-6 sm:p-8">
          <h2 className="display-sm mb-2 text-(--brand-deep)">Tell Me What Is Going On</h2>
          <p className="mb-7 text-sm text-(--text-muted)">Three boxes. It does not need to be long.</p>
          <ContactForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
