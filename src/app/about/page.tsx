import type { Metadata } from "next";
import { AboutPage } from "@/components/design-pages/AboutPage";

const title = "About FrameScale";
const description =
  "FrameScale Inc is a full-stack growth marketing firm. Strategy, design, and engineering work as one team across healthcare, retail, and professional services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function About() {
  return <AboutPage />;
}
