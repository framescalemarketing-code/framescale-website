import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageBackLinkProps = {
  href?: string;
  label?: string;
  className?: string;
};

export const PageBackLink = ({
  href = "/",
  label = "Back to Home",
  className = "",
}: PageBackLinkProps) => {
  return (
    <Link
      href={href}
      className={`flex w-fit items-center gap-2 font-ui text-sm text-(--brand-primary) hover:gap-3 transition-all ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
};
