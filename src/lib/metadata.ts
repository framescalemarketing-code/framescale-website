import type { Metadata } from "next";
import { principal, site } from "@/lib/site";

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
      siteName: principal.displayName,
      locale: site.locale,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: site.twitterImage,
          alt: socialTitle,
        },
      ],
    },
    ...(robots ? { robots } : {}),
  };
}
