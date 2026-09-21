"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HeroScrollCue = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.65) {
        setHidden(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    document.getElementById("about")?.scrollIntoView({ behavior, block: "start" });
    setHidden(true);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to explore"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : 0}
      className={cn(
        "absolute bottom-7 left-1/2 z-10 -translate-x-1/2 transition-all duration-500",
        hidden ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <span
        aria-hidden="true"
        className="mx-auto flex h-9 w-5 flex-col items-center justify-start rounded-full border border-white/40 pt-2 sm:h-10 sm:w-6 sm:pt-2.5"
      >
        <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-brand-orange" />
      </span>
      <span className="sr-only">Scroll to the about section</span>
    </button>
  );
};

export default HeroScrollCue;