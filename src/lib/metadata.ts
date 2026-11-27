import type { Metadata } from "next";
import { practice, principal, site } from "@/lib/site";

type BuildPageMetadataOptions = {
  /** Page title. Runs through the root `%s | Name` template unless `absoluteTitle`. */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  /**
   * Bypass the root title template. Needed where the title already contains the
   * name, since the template would otherwise repeat it, and on the home page,
   * where Next does not apply the template at all because `app/page.tsx` sits in
   * the same route segment as the layout that defines it.
   */
  absoluteTitle?: boolean;
};

/**
 * Only `src/app/opengraph-image.tsx` exists, and Next attaches it to a page
 * only when that page sets no `openGraph` of its own. Every page here sets one,
 * so the shared card is named explicitly, for Open Graph and for Twitter, the
 * same way the root layout names it. The URL has no content hash, so a redesigned card may take a while to reach links
 * that were already shared.
 */
const SHARE_ALT = `${principal.displayName}, ${principal.jobTitle}`;
const OG_IMAGE = { url: site.ogImage, width: 1200, height: 630, alt: SHARE_ALT } as const;
const TWITTER_IMAGE = { url: site.twitterImage, alt: SHARE_ALT } as const;

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  absoluteTitle = false,
}: BuildPageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${principal.displayName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type: "website",
      siteName: practice.name,
      locale: site.locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [TWITTER_IMAGE],
    },
    ...(robots ? { robots } : {}),
  };
}
