import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for using the FrameScale website and working with FrameScale on marketing, website, SEO, analytics, and related services.",
};

const lastUpdated = "May 20, 2026";

const serviceExamples = [
  "Website planning, design, development, and related updates.",
  "SEO, Google Business Profile support, analytics setup, reporting, and marketing review.",
  "Paid search, paid social, email, follow-up, and other marketing services when included in a written scope.",
  "Research, recommendations, copy, creative direction, and related project work.",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative flex min-h-[36vh] items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
              Legal
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              Terms of Service
            </h1>
            <p className="font-body text-lg sm:text-xl text-(--brand-neutral) leading-relaxed">
              These terms explain how this website may be used and how FrameScale services are handled unless a signed agreement says otherwise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-10">
            <p className="font-body text-sm text-(--brand-neutral) leading-relaxed">
              Last updated: {lastUpdated}
            </p>

            <Section title="Who These Terms Cover">
              <p>
                These Terms of Service apply to the FrameScale website at{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href={site.url}>
                  {site.hostname}
                </Link>
                , any contact or booking forms on the site, and services provided by FrameScale Inc.
              </p>
              <p>
                If you sign a separate proposal, statement of work, master services agreement, or similar written agreement with FrameScale, that written agreement controls the paid services covered by it.
              </p>
            </Section>

            <Section title="Using This Website">
              <p>
                You may use this website to learn about FrameScale, contact us, book a call, and review public information about our services.
              </p>
              <p>
                You agree not to misuse the site, interfere with its operation, attempt unauthorized access, submit false information, scrape the site in a way that burdens the service, or use the site for unlawful activity.
              </p>
            </Section>

            <Section title="Services">
              <p>
                FrameScale provides marketing and website services for business clients. Services may include:
              </p>
              <ul className="space-y-3">
                {serviceExamples.map((item) => (
                  <li key={item} className="font-body text-(--brand-neutral) leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Specific deliverables, timelines, fees, revision limits, communication expectations, and included tools are defined in the written scope for the project.
              </p>
            </Section>

            <Section title="Calls">
              <p>
                Calls are used to understand your business, your goals, and whether FrameScale is the right fit. Booking a call does not create a paid service relationship by itself.
              </p>
              <p>
                We may decline, reschedule, or cancel a call when needed.
              </p>
            </Section>

            <Section title="Client Responsibilities">
              <p>
                To keep work moving, clients are responsible for providing accurate information, timely feedback, access to required accounts, brand assets, approvals, and any legal or regulated-industry requirements that apply to their business.
              </p>
              <p>
                You are responsible for making sure materials you provide to FrameScale are accurate, lawful, and that you have the right to use them.
              </p>
            </Section>

            <Section title="Payments">
              <p>
                Fees, deposits, billing schedules, late payment rules, and payment methods are defined in the written scope or invoice. Work may pause if payments are late or required information is missing.
              </p>
              <p>
                Unless the written agreement says otherwise, fees already paid for completed work, reserved time, or delivered work are not refundable.
              </p>
            </Section>

            <Section title="Results">
              <p>
                FrameScale works carefully, researches before recommending spend, and explains what is being done. Marketing results still depend on market conditions, competition, customer behavior, budgets, platform changes, client operations, and other factors outside FrameScale's control.
              </p>
              <p>
                FrameScale does not guarantee specific rankings, revenue, leads, bookings, ad performance, or business outcomes.
              </p>
            </Section>

            <Section title="Content And Approvals">
              <p>
                You are responsible for reviewing and approving content, claims, pricing, offers, industry-specific language, legal requirements, privacy requirements, accessibility requirements, and regulated-business obligations before publication.
              </p>
              <p>
                FrameScale may suggest wording, structure, or marketing direction, but final responsibility for business claims and compliance remains with the client.
              </p>
            </Section>

            <Section title="Ownership">
              <p>
                Unless a written agreement says otherwise, clients own final paid deliverables after full payment is received. FrameScale retains ownership of pre-existing tools, methods, know-how, reusable code, templates, internal systems, and working files.
              </p>
              <p>
                Third-party tools, fonts, images, software, plugins, platforms, stock assets, and services may be subject to their own licenses and terms.
              </p>
            </Section>

            <Section title="Third-Party Platforms">
              <p>
                Services may involve platforms such as Google, website hosting providers, analytics tools, email tools, ad platforms, scheduling tools, payment processors, and other third-party services.
              </p>
              <p>
                FrameScale is not responsible for outages, pricing changes, policy changes, account restrictions, data loss, or decisions made by third-party platforms.
              </p>
            </Section>

            <Section title="Confidentiality">
              <p>
                FrameScale treats non-public client information as confidential and uses it only to provide services, manage the relationship, or meet legal and business obligations.
              </p>
              <p>
                Confidentiality does not apply to information that is already public, independently developed, lawfully received from someone else, or required to be disclosed by law.
              </p>
            </Section>

            <Section title="Portfolio Use">
              <p>
                Unless a written agreement says otherwise, FrameScale may identify a client by name and describe completed work in general portfolio, sales, or case-study materials after launch or project completion.
              </p>
              <p>
                Sensitive business information, private numbers, and non-public details will not be shared without permission.
              </p>
            </Section>

            <Section title="Privacy">
              <p>
                Use of this site is also covered by our{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href="/privacy">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href="/cookie-policy">
                  Cookie Policy
                </Link>
                , and, where applicable,{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href="/california-privacy">
                  California Privacy Notice
                </Link>
                .
              </p>
            </Section>

            <Section title="No Professional Advice">
              <p>
                Information on this website and in general conversations with FrameScale is for business and marketing discussion. It is not legal, financial, medical, tax, or compliance advice.
              </p>
              <p>
                You should consult qualified professionals for advice specific to legal, financial, medical, regulated-industry, tax, or compliance matters.
              </p>
            </Section>

            <Section title="Disclaimers">
              <p>
                This website and the information on it are provided on an as-is and as-available basis. FrameScale makes reasonable efforts to keep information accurate, but we do not promise the site will be error-free, uninterrupted, or available at all times.
              </p>
            </Section>

            <Section title="Limitation Of Liability">
              <p>
                To the fullest extent allowed by law, FrameScale will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, lost revenue, lost data, or business interruption related to use of this website or services.
              </p>
              <p>
                Any liability for paid services is limited by the written agreement that applies to those services.
              </p>
            </Section>

            <Section title="Changes">
              <p>
                FrameScale may update these terms from time to time. The updated version will be posted on this page with a new last updated date.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these terms can be sent to{" "}
                <Link className="text-(--brand-primary) font-semibold hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
}

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-t border-border pt-8">
    <h2 className="font-headline text-2xl sm:text-3xl text-(--brand-deep) mb-4">{title}</h2>
    <div className="space-y-4 font-body text-(--brand-neutral) leading-relaxed">{children}</div>
  </section>
);
