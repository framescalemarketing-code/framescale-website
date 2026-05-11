"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "outline-light";
  size?: "sm" | "md" | "lg";
  icon?: "arrow" | "external" | "none";
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  onClick,
  className = "",
  href,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 font-ui font-medium tracking-wide relative overflow-hidden group whitespace-nowrap";

  const variantStyles = {
    primary:
      "bg-(--brand-primary) text-white hover:bg-[#145F71] shadow-[0_8px_24px_-12px_rgba(23,120,142,0.55)] hover:shadow-[0_12px_32px_-12px_rgba(23,120,142,0.7)]",
    secondary:
      "bg-(--brand-secondary) text-white hover:bg-[#56A1A3] shadow-[0_8px_24px_-14px_rgba(104,179,181,0.7)]",
    ghost:
      "bg-transparent text-(--brand-primary) hover:bg-(--brand-primary)/8 border border-(--brand-primary)/30 hover:border-(--brand-primary)",
    inverse:
      "bg-white text-(--brand-deep) hover:bg-white/95 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)]",
    "outline-light":
      "bg-transparent text-white hover:bg-white hover:text-(--brand-deep) border-2 border-white/70 hover:border-white backdrop-blur-sm font-semibold",
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  };

  const iconComponents = {
    arrow: ArrowRight,
    external: ArrowUpRight,
    none: null,
  };

  const IconComponent = iconComponents[icon];

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {IconComponent && (
        <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
      )}
      <motion.span
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </>
  );

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("#");
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
