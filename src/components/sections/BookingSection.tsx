import { Mail, Phone } from "lucide-react";
import { BookingForm } from "@/components/sections/BookingForm";
import { Section } from "@/components/ui/Section";
import { booking } from "@/content/booking";
import { contactSteps } from "@/content/contact";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { site } from "@/lib/site";

/** The /book page body: the pitch and the steps on the left, the calendar on the right. */
export function BookingSection() {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section tone="muted" size="tall">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="display-xl text-(--brand-deep)">{booking.headline}</h1>
            <p className="lead">{booking.lead}</p>
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
            <p className="text-sm text-(--text-muted)">{booking.aside}</p>
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
          </div>
        </div>

        <div className="hairline-box p-6 sm:p-8">
          <BookingForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
