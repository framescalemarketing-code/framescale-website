import { ProcessPage } from "@/components/design-pages/ProcessPage";
import { buildPageMetadata } from "@/lib/metadata";

const title = "How We Work";
const description =
  "See how FrameScale researches your market, builds around your business, and improves the website, tracking, and marketing pieces that help growth stay clear.";

export const metadata = buildPageMetadata({ title, description, path: "/process" });

export default function Process() {
  return <ProcessPage />;
}
