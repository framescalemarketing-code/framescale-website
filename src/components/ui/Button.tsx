import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/**
 * Four variants, two grounds.
 *   On paper: `primary` (teal fill, white text) and `outline`.
 *   On a deep band: `light` (aqua fill, deep text) and `quiet` (hairline).
 * Corners use the 8px radius that echoes the logo's rounded square. There are
 * no pill buttons.
 */
type Variant = "primary" | "outline" | "light" | "quiet";
type Size = "md" | "lg";

const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-(--radius) font-ui font-semibold " +
  "transition-[background-color,color,border-color,transform] duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-(--brand-primary) text-white hover:bg-(--brand-primary-hover) focus-visible:outline-(--brand-primary)",
  outline:
    "border border-(--brand-primary) text-(--brand-primary) hover:bg-(--brand-primary) hover:text-white " +
    "focus-visible:outline-(--brand-primary)",
  light:
    "bg-(--cta-deep-bg) text-(--cta-deep-fg) hover:bg-white focus-visible:outline-white",
  quiet:
    "border border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Trailing arrow. On by default for primary calls to action. */
  withArrow?: boolean;
  className?: string;
};

type ButtonAsLink = SharedProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type ButtonAsButton = SharedProps & { href?: never } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    withArrow = false,
    className = "",
    ...rest
  } = props;

  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow ? <ArrowRight className="size-4 shrink-0" aria-hidden="true" /> : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
