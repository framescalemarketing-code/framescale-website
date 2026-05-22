import type { Metadata } from "next";
import { ProcessPage } from "@/components/design-pages/ProcessPage";

const title = "How We Work";
const description =
  "See how FrameScale researches your market, builds around your business, and improves the website, tracking, and marketing pieces that help growth stay clear.";

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
