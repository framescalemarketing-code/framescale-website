import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** `wide` for full-bleed section furniture, `narrow` for long-form reading. */
  width?: "default" | "wide" | "narrow";
  className?: string;
};

const WIDTHS = {
  default: "max-w-5xl",
  wide: "max-w-6xl",
  narrow: "max-w-2xl",
} as const;

export function Container({ children, width = "default", className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full ${WIDTHS[width]} px-5 md:px-8 ${className}`}>{children}</div>;
}
