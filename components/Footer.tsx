import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Solution", href: "/solution" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-soft">
              <LogoMark className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold text-charcoal-900">
              SenseAgri AI
            </span>
          </div>
          <p className="mt-4 text-sm text-charcoal-600">
            IoT + AI decision support built for South African poultry farms. Practical, resilient, and focused on measurable outcomes.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">
            Explore
          </p>
          <div className="mt-4 grid gap-2 text-sm text-charcoal-600">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-charcoal-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-500">
            Contact
          </p>
          <div className="mt-4 grid gap-2 text-sm text-charcoal-600">
            <a href={`mailto:${siteConfig.links.email}`} className="hover:text-charcoal-900">
              {siteConfig.links.email}
            </a>
            <p>{siteConfig.links.phone}</p>
            <p>{siteConfig.links.address}</p>
          </div>
          <p className="mt-6 text-xs text-charcoal-400">
            Replace contact details with your own support information.
          </p>
        </div>
      </div>
    </footer>
  );
}
