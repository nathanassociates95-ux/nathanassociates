"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECT_SHOWCASE } from "@/lib/projectShowcase";

/**
 * ProjectsClientCarousel — auto-rotating logo carousel for the /projects page.
 *
 * One record per logical slide, ~5s interval, prev/next controls, dots,
 * hover/focus pause and reduced-motion support (translateX track + a single
 * interval cleared on unmount — no duplicated timers). Each logo chip links
 * to that entry's project anchor below on this same page. Duplicate client
 * entries (see the dataset comment in projectShowcase.js) appear as their own
 * slides, so the carousel faithfully mirrors the eight supplied records;
 * unique-client deduplication only happens on the homepage strip.
 */
const AUTOPLAY_MS = 5000;

const ProjectsClientCarousel = () => {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);
  const count = PROJECT_SHOWCASE.length;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goTo = useCallback(
    (i) => setActive(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || reduced || count < 2) return undefined;
    const timer = setInterval(() => setActive((c) => (c + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduced, count]);

  const slides = [...PROJECT_SHOWCASE, ...PROJECT_SHOWCASE];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client logo carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (e.currentTarget.contains(e.relatedTarget)) return;
        setPaused(false);
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div
          className="client-slide-track flex"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((p, i) => (
            <div
              key={`${p.anchor}-${i}`}
              aria-hidden={i >= count}
              aria-roledescription="slide"
              aria-label={`Client: ${p.client} (slide ${i + 1} of ${slides.length})`}
              className="w-full shrink-0"
            >
              <div className="flex flex-col items-center gap-3 px-6 py-6 md:py-8">
                <Link
                  href={`/projects#${p.anchor}`}
                  className="flex h-20 w-44 items-center justify-center rounded-xl bg-white p-3 md:h-24 md:w-52"
                  title={p.client}
                  aria-label={`${p.client} — go to the project details`}
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="select-none px-1 text-center text-sm font-bold uppercase tracking-widest text-brand-navy md:text-base">
                      {p.client}
                    </span>
                  )}
                </Link>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {p.client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: prev/next plus pagination dots, keyboard accessible. */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Previous client"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {PROJECT_SHOWCASE.map((p, i) => (
            <button
              key={p.anchor}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show client slide ${i + 1}: ${p.client}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy ${
                i === active ? "w-6 bg-brand-navy" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Next client"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsClientCarousel;
