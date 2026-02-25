import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-teal text-white hover:bg-brand-tealDark focus-visible:outline-brand-teal",
  secondary:
    "bg-white text-brand-ink ring-1 ring-brand-ink/15 hover:bg-brand-sand focus-visible:outline-brand-teal",
  ghost:
    "text-brand-ink hover:bg-brand-sand focus-visible:outline-brand-teal",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
