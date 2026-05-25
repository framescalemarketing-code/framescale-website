import type { Metadata } from "next";
import { BookPage } from "@/components/design-pages/BookPage";
import { getTurnstileSiteKeyForServer } from "@/lib/cloudflare-turnstile";

const title = "Schedule A Call";
const description =
  "Schedule a free 30-minute call with FrameScale. Share goals and constraints, and leave with a clear next step.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: "/book", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Book() {
  return <BookPage turnstileSiteKey={getTurnstileSiteKeyForServer()} />;
}
