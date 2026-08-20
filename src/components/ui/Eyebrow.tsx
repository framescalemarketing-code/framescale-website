import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "primary" | "muted" | "light";
  as?: "p" | "span" | "h2";
  className?: string;
};

const TONES = {
  primary: "",
  muted: "eyebrow-muted",
  light: "eyebrow-light",
} as const;

/**
 * Montserrat small-caps label. Used as the hanging left-rail marker on
 * editorial two-column blocks and above section headings.
 */
export function Eyebrow({ children, tone = "primary", as: Tag = "p", className = "" }: EyebrowProps) {
  return <Tag className={`eyebrow ${TONES[tone]} ${className}`}>{children}</Tag>;
}
