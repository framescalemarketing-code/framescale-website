import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BookingForm } from "@/components/sections/BookingForm";
import { Section } from "@/components/ui/Section";
import { booking } from "@/content/booking";
import { contactSteps } from "@/content/contact";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { site } from "@/lib/site";

/**
 * The /book page body: the steps and direct contact on the left, the calendar
 * on the right. The page supplies the h1 through `PageHero`.
 */
export function BookingSection() {
  const turnstileSiteKey = getTurnstileSiteKeyForServer();

  return (
    <Section size="default">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
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
            <h2 className="display-sm text-(--brand-deep)">Or Reach Me Directly</h2>
            <p className="text-sm text-(--text-muted)">
              {booking.aside}{" "}
              <Link href={site.contactPath} className="link-quiet font-semibold text-(--brand-primary)">
                {booking.asideLink}
              </Link>
            </p>
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
          </div>
        </div>

        <div className="hairline-box p-6 sm:p-8">
          <BookingForm turnstileSiteKey={turnstileSiteKey} />
        </div>
      </div>
    </Section>
  );
}
