import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { bookingHrefFor, site } from "@/lib/site";

type CtaBandProps = {
  title: string;
  lead: string;
  cta?: string;
};

/**
 * Closing band on every marketing page. It carries `id="contact"` so old
 * `/#contact` links from emails and ads still land on something, and sends the
 * visitor to the booking page (or to /contact until booking is live). The phone
 * and email details are the same strings the footer and the JSON-LD carry.
 */
export function CtaBand({ title, lead, cta = "Book A Free Call" }: CtaBandProps) {
  return (
    <Section id="contact" tone="dark" size="tall">
      <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2 className="display-lg max-w-2xl">{title}</h2>
          <p className="lead">{lead}</p>
          <div className="mt-2">
            <Button href={bookingHrefFor()} size="lg" variant="light" withArrow>
              {cta}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-(--ring-line)/40 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <a
            href={`tel:${site.phoneHref}`}
            className="link-quiet flex min-h-11 w-fit items-center gap-3 text-white hover:text-(--on-deep-muted)"
          >
            <Phone className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
            <span className="font-ui text-base font-semibold">{site.phone}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="link-quiet flex min-h-11 w-fit items-center gap-3 text-white hover:text-(--on-deep-muted)"
          >
            <Mail className="size-4 shrink-0 text-(--brand-secondary)" aria-hidden="true" />
            <span className="font-ui text-[15px] font-semibold wrap-anywhere">{site.email}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
