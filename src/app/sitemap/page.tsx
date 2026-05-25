import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { getSitemapPageSections } from "@/lib/sitemap-routes";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A full table of contents for the FrameScale website.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  const sections = getSitemapPageSections();

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[42vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
              Site Index
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              The Table Of Contents
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed max-w-3xl">
              Use this page like the opening index of a book. It lays out the core pages, industry pages, and legal notices so you can move through the site with a clear sense of where everything lives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[18rem_minmax(0,1fr)] gap-10 lg:gap-16">
            <aside className="lg:sticky lg:top-28 h-fit rounded-2xl border border-border bg-muted/40 p-6">
              <h2 className="font-headline text-2xl text-(--brand-deep) mb-4">Quick Index</h2>
              <ol className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block group"
                    >
                      <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-(--brand-primary)">
                        {section.indexLabel}
                      </span>
                      <div className="mt-1 font-headline text-lg text-(--brand-deep) group-hover:text-(--brand-primary) transition-colors">
                        {section.title}
                      </div>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-body text-sm text-(--brand-neutral) leading-relaxed mb-4">
                  Need the machine-readable version for search engines or reference?
                </p>
                <Link
                  href="/sitemap.xml"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-ui text-sm font-semibold text-white bg-(--brand-primary) hover:bg-(--brand-primary-hover) transition-colors"
                >
                  Open XML Sitemap
                </Link>
              </div>
            </aside>

            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-2xl border border-border bg-white p-6 lg:p-8"
                >
                  <div className="mb-8">
                    <span className="font-ui text-xs font-semibold tracking-[0.2em] uppercase text-(--brand-primary)">
                      {section.indexLabel}
                    </span>
                    <h2 className="font-headline text-3xl lg:text-4xl text-(--brand-deep) mt-2 mb-3">
                      {section.title}
                    </h2>
                    <p className="font-body text-(--brand-neutral) leading-relaxed max-w-3xl">
                      {section.description}
                    </p>
                  </div>

                  <ol className="space-y-5">
                    {section.links.map((link, index) => (
                      <li
                        key={link.href}
                        className="border-t border-border pt-5 first:border-t-0 first:pt-0"
                      >
                        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-ui text-xs font-semibold tracking-wide text-(--brand-primary)">
                                {section.indexLabel}.{String(index + 1).padStart(2, "0")}
                              </span>
                              <h3 className="font-headline text-xl text-(--brand-deep)">
                                {link.label}
                              </h3>
                            </div>
                            <p className="font-body text-(--brand-neutral) leading-relaxed">
                              {link.description}
                            </p>
                          </div>

                          <Link
                            href={link.href}
                            className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 font-ui text-sm font-semibold text-(--brand-primary) border border-(--brand-primary)/30 hover:bg-(--brand-primary)/8 transition-colors shrink-0"
                          >
                            Open Page
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
