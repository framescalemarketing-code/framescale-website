import { HealthcarePage } from "@/components/design-pages/industries/HealthcarePage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Healthcare Websites That Build Trust";
const description =
  "For practices that rely on referrals and need the website to make booking easier, build trust faster, and show up clearly in local search.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/industries/healthcare",
  keywords: [
    "healthcare marketing",
    "medical practice marketing",
    "dental marketing",
    "optical practice marketing",
    "patient acquisition",
    "healthcare SEO",
    "HIPAA marketing",
  ],
});

export default function Healthcare() {
  return <HealthcarePage />;
}
