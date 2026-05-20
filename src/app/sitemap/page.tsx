import type { Metadata } from "next";
import Link from "next/link";
import { PageBackLink } from "@/components/design/PageBackLink";
import { getSitemapPageSections } from "@/lib/sitemap-routes";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Browse all key pages on the FrameScale website.",
  alternates: { canonical: "/sitemap" },
};

export default function SitemapPage() {
  const sections = getSitemapPageSections();

  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-linear-to-br from-white via-(--brand-secondary)/5 to-white pt-28 pb-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-80 h-80 bg-linear-to-br from-(--brand-primary)/10 to-(--brand-secondary)/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <PageBackLink className="mb-8 lg:mb-10" />
            <span className="inline-block px-3 py-1.5 rounded-full bg-linear-to-r from-(--brand-primary)/10 to-(--brand-secondary)/10 border border-(--brand-primary)/20 font-ui text-xs font-semibold uppercase tracking-wide text-(--brand-primary) mb-6">
              Sitemap
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl mb-6 leading-tight text-(--brand-deep)">
              Website directory
            </h1>
            <p className="font-body text-xl text-(--brand-neutral) leading-relaxed">
              Use this page as a table of contents for the site. If you need the machine-readable version, download the XML sitemap below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-border p-6">
                <h2 className="font-headline text-2xl text-(--brand-deep) mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-(--brand-neutral) hover:text-(--brand-primary) transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border p-6 lg:p-8 bg-muted/40">
            <h2 className="font-headline text-2xl text-(--brand-deep) mb-3">XML sitemap</h2>
            <p className="font-body text-(--brand-neutral) leading-relaxed mb-5">
              Search engines use the XML version. You can open it in the browser or download it directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sitemap.xml"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-white bg-(--brand-primary) hover:bg-(--brand-primary-hover) transition-colors"
              >
                Open XML sitemap
              </Link>
              <a
                href="/sitemap.xml"
                download="framescale-sitemap.xml"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-ui text-sm font-semibold text-(--brand-primary) border border-(--brand-primary)/40 hover:bg-(--brand-primary)/8 transition-colors"
              >
                Download XML sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
