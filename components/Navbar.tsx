"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const navLinks = [
  { label: "Solution", href: "/solution" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal-100 bg-offwhite/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-sm font-semibold text-white">
            SA
          </span>
          <span className="text-sm font-semibold text-charcoal-900">
            SenseAgri AI
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-charcoal-600 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-charcoal-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Button href="/contact">Book a Pilot Call</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-charcoal-200 px-3 py-1 text-xs font-semibold text-charcoal-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-charcoal-100 bg-offwhite">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:px-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="w-full justify-center">
              Book a Pilot Call
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
