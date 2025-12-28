import type { ReactNode } from "react";
import Link from "next/link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite";

const variants = {
  primary: "bg-forest-700 text-white hover:bg-forest-600",
  secondary: "bg-white text-forest-700 ring-1 ring-forest-200 hover:bg-forest-50",
  ghost: "text-forest-700 hover:bg-forest-50"
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  external
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a className={classes} href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
