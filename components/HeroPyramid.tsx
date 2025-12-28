"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

type StyleWithVar = CSSProperties & {
  "--shift"?: string;
  "--lift"?: string;
};

export default function HeroPyramid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      container.style.setProperty("--pyramid-progress", "1");
      return;
    }

    let rafId = 0;

    const update = () => {
      rafId = 0;
      const windowHeight = Math.max(window.innerHeight, 1);
      const maxDistance = windowHeight * 0.45;
      const progress = Math.min(
        Math.max(1 - window.scrollY / maxDistance, 0),
        1
      );
      container.style.setProperty("--pyramid-progress", progress.toFixed(3));
    };

    const requestUpdate = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(update);
    };

    container.style.setProperty("--pyramid-progress", "1");
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="pyramid-stack" aria-hidden="true">
      <div
        className="pyramid-block pyramid-top"
        style={{ "--shift": "-140px", "--lift": "-4px" } as StyleWithVar}
      >
        <span className="pyramid-block-content">
          <ChartIcon className="h-3.5 w-3.5" />
          Intelligence
        </span>
      </div>
      <div
        className="pyramid-block pyramid-middle"
        style={{ "--shift": "40px", "--lift": "6px" } as StyleWithVar}
      >
        <span className="pyramid-block-content">
          <SignalIcon className="h-3.5 w-3.5" />
          Telemetry
        </span>
      </div>
      <div
        className="pyramid-block pyramid-bottom"
        style={{ "--shift": "160px", "--lift": "10px" } as StyleWithVar}
      >
        <span className="pyramid-block-content">
          <LeafIcon className="h-3.5 w-3.5" />
          Sensing
        </span>
      </div>
    </div>
  );
}
import { ChartIcon, SignalIcon, LeafIcon } from "@/components/Icons";
