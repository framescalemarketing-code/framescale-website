import type { Metadata } from "next";
import { HomePage } from "@/components/design-pages/HomePage";

const title = "Full-Stack Growth Marketing";
const description =
  "Strategy and execution under one roof. FrameScale builds research-driven growth systems for healthcare, retail, and professional services businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return <HomePage />;
}
