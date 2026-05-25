import type { Metadata } from "next";
import { site } from "@/lib/site";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
}: BuildPageMetadataOptions): Metadata {
  const socialImageAlt = `${title} | ${site.name}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: site.name,
      locale: site.locale,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: socialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: site.twitterImage,
          alt: socialImageAlt,
        },
      ],
    },
    ...(robots ? { robots } : {}),
  };
}