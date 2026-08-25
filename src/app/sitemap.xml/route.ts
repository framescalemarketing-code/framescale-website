import { site } from "@/lib/site";
import { SITEMAP_ENTRIES } from "@/lib/sitemap-routes";

/**
 * No `<lastmod>`. It used to carry the build timestamp, which meant every page
 * claimed to have changed on every deploy whether it had or not. Google only
 * trusts lastmod when it is consistently accurate and discards the whole
 * sitemap's values when it is not, so omitting it beats publishing a date that
 * is wrong for seven of the eight URLs.
 */
export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_ENTRIES.map(
  ({ path, changeFrequency, priority }) => `  <url>
    <loc>${site.url}${path}</loc>
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
