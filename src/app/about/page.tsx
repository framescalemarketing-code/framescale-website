import type { Metadata } from "next";
import { AboutPage } from "@/components/design-pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how FrameScale combines research, strategy, and full-stack execution to drive measurable growth.",
};

export default function About() {
  return <AboutPage />;
}
