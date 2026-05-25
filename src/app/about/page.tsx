import { AboutPage } from "@/components/design-pages/AboutPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "About FrameScale";
const description =
  "Meet Jonathan and see how FrameScale works: research before spend, clear reporting, custom websites, and one point person from start to finish.";

export const metadata = buildPageMetadata({ title, description, path: "/about" });

export default function About() {
  return <AboutPage />;
}
