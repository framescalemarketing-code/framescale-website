import type { MetadataRoute } from "next";
import { principal, site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${principal.displayName} | ${principal.jobTitle}`,
    short_name: principal.fullName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#17788e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
