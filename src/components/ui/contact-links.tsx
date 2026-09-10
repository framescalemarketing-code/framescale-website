import type { ReactNode } from "react";
import { site } from "@/lib/site";

/**
 * Turns `{phone}` and `{email}` in a content string into working links, so the
 * fallback lines in the forms can be written as sentences in the content
 * files rather than assembled in JSX.
 */
export function withContactLinks(text: string): ReactNode[] {
  return text.split(/(\{phone\}|\{email\})/).map((part, index) => {
    if (part === "{phone}") {
      return (
        <a key={index} href={`tel:${site.phoneHref}`} className="link-quiet font-semibold text-(--brand-primary)">
          {site.phone}
        </a>
      );
    }
    if (part === "{email}") {
      return (
        <a
          key={index}
          href={`mailto:${site.email}`}
          className="link-quiet font-semibold wrap-anywhere text-(--brand-primary)"
        >
          {site.email}
        </a>
      );
    }
    return part;
  });
}
