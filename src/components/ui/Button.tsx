import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "light" | "quiet";
type Size = "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-ui font-semibold " +
  "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-(--brand-primary) text-white hover:bg-(--brand-primary-hover) focus-visible:outline-(--brand-primary)",
  outline:
    "border border-(--brand-primary) text-(--brand-primary) hover:bg-(--brand-primary) hover:text-white " +
    "focus-visible:outline-(--brand-primary)",
  light:
    "bg-white text-(--brand-deep) hover:bg-(--muted) focus-visible:outline-white",
  quiet:
    "border border-white/35 text-white hover:bg-white/10 focus-visible:outline-white",
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
