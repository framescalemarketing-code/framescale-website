import { HomePage } from "@/components/design-pages/HomePage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Growth marketing that teaches you to scale";
const description =
  "Research-led strategy, custom sites, and channels that earn their keep for healthcare, retail, and professional services owners who want direct access to the principal.";

export const metadata = buildPageMetadata({ title, description, path: "/" });

export default function Home() {
  return <HomePage />;
}
