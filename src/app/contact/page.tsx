import { Suspense } from "react";
import { ContactPage } from "@/components/design-pages/ContactPage";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";
import { buildPageMetadata } from "@/lib/metadata";

const title = "Contact FrameScale";
const description =
  "Book a free 30-minute call. Share goals and constraints, get candid feedback, and leave with an honest next step.";

export const metadata = buildPageMetadata({ title, description, path: "/contact" });

export default function Contact() {
  return (
    <Suspense>
      <ContactPage turnstileSiteKey={getTurnstileSiteKeyForServer()} />
    </Suspense>
  );
}
