import { BookPage } from "@/components/design-pages/BookPage";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Schedule A Call";
const description =
  "Schedule a free 30-minute call with FrameScale. Share goals and constraints, and leave with a clear next step.";

export const metadata = buildPageMetadata({ title, description, path: "/book" });

export default function Book() {
  return <BookPage turnstileSiteKey={getTurnstileSiteKeyForServer()} />;
}
