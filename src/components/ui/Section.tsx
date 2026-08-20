import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** `dark` paints the deep-teal anchor band and adds the grain texture. */
  tone?: "default" | "muted" | "dark";
  /** Hairline above the section. The design separates with rules, not shadows. */
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

const SIZES = {
  compact: "py-10 md:py-14",
  default: "py-14 md:py-18",
  tall: "py-16 md:py-24",
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
      className={`${TONES[tone]} ${SIZES[size]} ${ruled ? "rule" : ""} ${className}`}
    >
      {tone === "dark" ? <div className="grain-overlay" /> : null}
      <Container width={width}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  tone?: "default" | "light";
  align?: "left" | "center";
  className?: string;
};

/** Eyebrow plus display heading plus optional lead. Consistent across all pages. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "default",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <p className={`eyebrow ${tone === "light" ? "eyebrow-light" : ""}`}>{eyebrow}</p> : null}
      <h2 className={`display-lg ${tone === "light" ? "text-white" : "text-(--brand-deep)"}`}>{title}</h2>
      {lead ? (
        <p className={`lead ${align === "center" ? "mx-auto" : ""} ${tone === "light" ? "text-white/72" : ""}`}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}
