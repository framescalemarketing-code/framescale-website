import type { Metadata } from "next";
import { ProcessPage } from "@/components/design-pages/ProcessPage";

const title = "How We Work";
const description =
  "See how FrameScale researches first, builds around your business, and keeps you informed from the first call through launch and follow-up.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { title, description, url: "/process", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Process() {
  return <ProcessPage />;
}
