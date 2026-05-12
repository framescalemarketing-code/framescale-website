import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { BrandLockup } from "./Brand";
import { footerLinks, site } from "@/lib/site";

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
    { icon: null, href: site.social.fiverr, label: "Fiverr", badge: "fi" },
    { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-(--brand-deep) text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-[calc(6rem+env(safe-area-inset-bottom))] md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <BrandLockup size="md" tone="color" />
            </div>
            <p className="font-body text-sm text-white/70 mb-5 leading-relaxed max-w-sm">
              Research-led growth marketing and custom web for small to mid-size businesses. Direct, teaching-focused, and built to help you scale without the agency merry-go-round.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {social.icon ? (
                    <social.icon className="w-4 h-4" />
                  ) : (
                    <span className="font-ui text-xs font-semibold uppercase tracking-wide">
                      {social.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-ui text-sm font-semibold mb-3 text-white">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex items-start justify-start pr-28 sm:pr-44 md:pr-0">
          <p className="font-body text-sm leading-relaxed text-white/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
