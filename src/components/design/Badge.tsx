interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "neutral";
  size?: "sm" | "md";
}

export const Badge = ({ children, variant = "primary", size = "md" }: BadgeProps) => {
  const variantStyles = {
    primary: "bg-(--brand-primary)/10 text-(--brand-primary) border-(--brand-primary)/20",
    secondary: "bg-(--brand-secondary)/10 text-(--brand-secondary) border-(--brand-secondary)/20",
    neutral: "bg-(--brand-neutral)/10 text-(--brand-neutral) border-(--brand-neutral)/20",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-block font-ui font-semibold uppercase tracking-wider rounded-full border ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
};
