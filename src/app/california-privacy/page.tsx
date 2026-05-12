import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "California Privacy Notice",
  description:
    "California Consumer Privacy Act (CCPA/CPRA) notice for FrameScale website visitors.",
};

export default function CaliforniaPrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
              California Privacy
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              California Privacy Notice
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              This notice describes privacy rights available to California residents under the CCPA/CPRA.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 bg-white rounded-2xl border border-border depth-card p-8 lg:p-10">
            <p className="font-body text-(--brand-neutral) leading-relaxed">
              Last updated: May 11, 2026. This page is a pre-Iubenda compliance structure and will be replaced
              or synchronized once your final policy documents are published.
            </p>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Notice at Collection</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                We collect identifiers and contact information submitted through forms (for example name,
                email, company, and message content), along with limited technical data used for website
                security and performance.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">How Information Is Used</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                Information is used to respond to inquiries, provide requested services, and improve site
                operations and reporting.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">California Privacy Rights</h2>
              <ul className="list-disc pl-5 space-y-2 font-body text-(--brand-neutral)">
                <li>Right to know what personal information is collected, used, and disclosed.</li>
                <li>Right to request deletion of personal information, subject to legal exceptions.</li>
                <li>Right to request correction of inaccurate personal information.</li>
                <li>Right to non-discrimination for exercising your privacy rights.</li>
                <li>Right to opt out of sale or sharing of personal information, where applicable.</li>
              </ul>
            </div>

            <div id="privacy-choices">
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Your Privacy Choices</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                To submit a California privacy rights request, email
                {" "}
                <Link className="text-(--brand-primary) hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </Link>
                {" "}
                with the subject line “California Privacy Request.”
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="iubenda-cs-preferences-link inline-flex items-center gap-2 rounded-xl border border-(--brand-primary)/30 px-4 py-2 font-ui text-sm font-semibold text-(--brand-primary) hover:bg-(--brand-primary)/8 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- Iubenda provides this exact CCPA icon snippet */}
                  <img
                    style={{ width: "2rem" }}
                    src="data:image/svg+xml;charset=UTF-8,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 14' style='enable-background:new 0 0 30 14;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill-rule:evenodd;clip-rule:evenodd;fill:%23FFFFFF;%7d .st1%7bfill-rule:evenodd;clip-rule:evenodd;fill:%230066FF;%7d .st2%7bfill:%23FFFFFF;%7d .st3%7bfill:%230066FF;%7d %3c/style%3e%3cg%3e%3cg id='final---dec.11-2020_1_'%3e%3cg id='_x30_208-our-toggle_2_' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2_2_' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st0' d='M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg id='final---dec.11-2020'%3e%3cg id='_x30_208-our-toggle' transform='translate(-1275.000000, -200.000000)'%3e%3cg id='Final-Copy-2' transform='translate(1275.000000, 200.000000)'%3e%3cpath class='st1' d='M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z'/%3e%3cpath id='x' class='st2' d='M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z'/%3e%3cpath id='y' class='st3' d='M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                    alt="California Consumer Privacy Act (CCPA) Opt-Out Icon"
                  />
                  Your Privacy Choices
                </a>

                <a
                  href="#"
                  className="iubenda-cs-uspr-link inline-flex items-center rounded-xl border border-(--brand-primary)/30 px-4 py-2 font-ui text-sm font-semibold text-(--brand-primary) hover:bg-(--brand-primary)/8 transition-colors"
                >
                  Notice at Collection
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">Authorized Agent Requests</h2>
              <p className="font-body text-(--brand-neutral) leading-relaxed">
                California residents may designate an authorized agent to submit requests on their behalf.
                Verification requirements may apply before processing the request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
