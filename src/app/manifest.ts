import type { MetadataRoute } from "next";
import { location, principal, site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${principal.displayName} | ${principal.jobTitle} in ${location.city}`,
    short_name: principal.fullName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    // Same paper tone as `--background` in globals.css and `themeColor` in
    // layout.tsx, so the installed app and the browser chrome match the page.
    background_color: "#fdfbf7",
    theme_color: "#fdfbf7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
