import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** `dark` paints the deep-teal anchor band and adds the grain texture. */
  tone?: "default" | "muted" | "dark";
  /**
   * Hairline above the section. Only needed when this section and the one
   * above it share a `tone`: a tone change already reads as a boundary, and
   * drawing both separates the same edge twice.
   */
  ruled?: boolean;
  size?: "default" | "compact" | "tall";
  width?: "default" | "wide" | "narrow";
  className?: string;
};

const TONES = {
  default: "bg-background",
  muted: "bg-(--muted)",
  dark: "dark-section",
} as const;

/**
 * One rhythm, each step roughly 1.3x the last, so the difference between two
 * sizes is always visible. The old scale stepped 10/14/16 on mobile, where
 * `tall` was only 1.14x `default` and the two were hard to tell apart.
 */
const SIZES = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-22",
  tall: "py-20 md:py-28",
} as const;

export function Section({
  children,
  id,
  tone = "default",
  ruled = false,
  size = "default",
  width = "default",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[TONES[tone], SIZES[size], ruled ? "rule" : "", className].filter(Boolean).join(" ")}
    >
      {tone === "dark" ? <div className="grain-overlay" /> : null}
      <Container width={width}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  lead?: string;
  tone?: "default" | "light";
  align?: "left" | "center";
  className?: string;
};

/** Display heading with an optional one-line signpost under it. */
export function SectionHeading({
  title,
  lead,
  tone = "default",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      <h2 className={`display-lg ${tone === "light" ? "text-white" : "text-(--brand-deep)"}`}>{title}</h2>
      {lead ? (
        <p className={`section-lead ${align === "center" ? "mx-auto" : ""} ${tone === "light" ? "text-white/65" : ""}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
