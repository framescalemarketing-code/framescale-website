import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FrameScale to discuss marketing goals and next steps.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
