import type { ReactNode } from "react";
import IntelligenceField from "@/components/IntelligenceField";

// Shared inner-page hero — petrol/navy background, blueprint grid, eyebrow + headline.
// `accent` drives the headline <span>, the eyebrow border, eyebrow text, and eyebrow tint.
// Default accent is active intelligence teal; pass aqua for brighter dark-surface signals.

const GOLD = "#13AAA5";

type PageHeroProps = {
  eyebrow: string;
  headline: ReactNode;
  accentLine: ReactNode;
  sub?: ReactNode;
  dark?: boolean;
  accent?: string;
};

export default function PageHero({
  eyebrow,
  headline,
  accentLine,
  sub,
  dark = false,
  accent = GOLD
}: PageHeroProps) {
  const bg = dark
    ? "radial-gradient(ellipse 58% 120% at 88% 42%, rgba(19,170,165,0.20) 0%, transparent 68%), linear-gradient(118deg, #0F172A 0%, #002E35 72%, #003F4A 100%)"
    : "radial-gradient(ellipse 58% 120% at 88% 42%, rgba(88,201,197,0.18) 0%, transparent 68%), linear-gradient(118deg, #002E35 0%, #003F4A 72%, #087C83 145%)";
  const tint =
    accent === GOLD ? "rgba(19,170,165,0.10)" : "rgba(88,201,197,0.12)";

  return (
    <section
      className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16"
      style={{ background: bg }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,124,131,0.07) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(8,124,131,0.07) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px"
        }}
      />
      <IntelligenceField dark className="pointer-events-none absolute inset-y-0 right-0 h-full w-[62%] opacity-[0.24]" />
      <div className="intelligence-mist intelligence-mist-dark pointer-events-none absolute -right-[8%] -top-[36%] h-[175%] w-[58%]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <span
          className="mb-5 inline-flex items-center gap-2 px-3 py-1"
          style={{ borderLeft: `2px solid ${accent}`, background: tint }}
        >
          <span
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            {eyebrow}
          </span>
        </span>

        <h1
          className="font-display font-bold text-white"
          style={{
            fontSize: "clamp(2.1rem, 5vw, 4rem)",
            lineHeight: "1.0",
            letterSpacing: "-0.025em",
            maxWidth: "18ch"
          }}
        >
          {headline}
          <br />
          <span className="intelligence-text-gradient" style={{ color: accent }}>{accentLine}</span>
        </h1>

        {sub ? (
          <p
            className="mt-5 font-sans text-white/70"
            style={{ fontSize: "0.9375rem", lineHeight: "1.6", maxWidth: 520 }}
          >
            {sub}
          </p>
        ) : null}
      </div>
    </section>
  );
}
