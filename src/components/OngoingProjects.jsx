"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { ONGOING_PROJECTS, ongoingProjectsSrc } from "@/lib/ongoingProjects";

/**
 * OngoingProjects — auto-advancing horizontal gallery for the homepage.
 *
 * Implementation notes:
 * - Pure React + CSS on the project's existing stack (no new dependencies).
 * - All images come from the /public/Ongoing manifest in @/lib/ongoingProjects.
 * - The slide list is duplicated once, so autoplay can glide from the last
 *   project into the first without a jump; a short timer snaps the scroll
 *   position back inside the original run (identical pixels, seamless).
 * - Autoplay ≈ every 4s, paused on hover of the gallery or focus of its
 *   controls, and disabled entirely under prefers-reduced-motion.
 * - Responsive: 1 card on mobile, 2 on tablet, 3 on desktop; sizing handled
 *   by .ongoing-slide / .ongoing-media in globals.css. The viewport is an
 *   overflow container, so the gallery can never widen the page horizontally.
 */
const AUTOPLAY_MS = 4000;

const OngoingProjects = () => {
  const viewportRef = useRef(null);
  const wrapTimerRef = useRef(null);
  const scrollRafRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);

  const count = ONGOING_PROJECTS.length;

  // Track prefers-reduced-motion, including changes made while open.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // One slide's scroll distance (width + gap), measured from real layout.
  const measureStep = useCallback(() => {
    const view = viewportRef.current;
    if (!view || view.children.length < 2) return 0;
    return view.children[1].offsetLeft - view.children[0].offsetLeft;
  }, []);

  /**
   * Scroll so `slide` (index in the duplicated list) is at the viewport edge.
   * Out-of-range targets are used intentionally (wrap slides past the set
   * edge), then AUTOPLAY wrap-snap timer brings scrollLeft back into the
   * original run — invisible because duplicated content is identical.
   */
  const goTo = useCallback(
    (slide) => {
      const view = viewportRef.current;
      const unit = measureStep();
      if (!view || !unit) return;

      const behavior = reduced ? "auto" : "smooth";
      const uniqueWidth = unit * count;
      let target = slide * unit;

      // Wrapping backwards: hop forward to the duplicated run first, then
      // ease back one step (avoids clamping at scrollLeft 0).
      if (target < 0) {
        view.scrollTo({ left: view.scrollLeft + uniqueWidth, behavior: "auto" });
        target += uniqueWidth;
      } else if (view.scrollLeft >= uniqueWidth) {
        // Already inside the duplicated run: normalise before easing.
        view.scrollTo({ left: view.scrollLeft - uniqueWidth, behavior: "auto" });
      }

      view.scrollTo({ left: target, behavior });

      // Return to the original run after the glide past its end.
      if (wrapTimerRef.current) clearTimeout(wrapTimerRef.current);
      if (target >= uniqueWidth) {
        wrapTimerRef.current = setTimeout(() => {
          const v = viewportRef.current;
          const u = measureStep();
          if (!v || !u) return;
          if (v.scrollLeft >= u * count) {
            v.scrollTo({ left: v.scrollLeft - u * count, behavior: "auto" });
          }
        }, 700);
      }
    },
    [count, reduced, measureStep],
  );

  const stepOne = useCallback(
    (direction) => {
      const view = viewportRef.current;
      if (!view) return;
      const unit = measureStep();
      if (!unit) return;
      const current = Math.round(view.scrollLeft / unit);
      goTo(current + direction);
    },
    [goTo, measureStep],
  );

  // Pause-safe autoplay loop. Re-created by paused/reduced state changes, and
  // cleared on unmount, so timers can never overlap or leak.
  useEffect(() => {
    if (paused || reduced || count < 2) return;
    const timer = setInterval(() => stepOne(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduced, count, stepOne]);

  // Keep the native scroll position (touch/drag included) driving indicators.
  useEffect(() => {
    const view = viewportRef.current;
    if (!view) return;
    const onScroll = () => {
      if (scrollRafRef.current) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        scrollRafRef.current = 0;
        const unit = measureStep();
        if (!unit) return;
        const idx = ((Math.round(view.scrollLeft / unit) % count) + count) % count;
        setActive(idx);
      });
    };
    view.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      view.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = 0;
      }
    };
  }, [count, measureStep]);

  // Clear any pending wrap-snap on unmount.
  useEffect(
    () => () => {
      if (wrapTimerRef.current) clearTimeout(wrapTimerRef.current);
    },
    [],
  );

  const slides = [...ONGOING_PROJECTS, ...ONGOING_PROJECTS];

  return (
    <section
      id="ongoing-projects"
      aria-labelledby="ongoing-projects-title"
      className="relative overflow-hidden bg-[#111820] py-16 md:py-20"
    >
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <SectionHeading
          dark
          eyebrow="In Progress"
          title="Ongoing Projects"
          description="Explore a selection of projects currently in progress."
          className="mx-auto"
        />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Ongoing projects gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => {
            if (viewportRef.current?.contains?.(document.activeElement)) return;
            setPaused(false);
          }}
        >
          <div
            ref={viewportRef}
            className="ongoing-view mt-2 flex gap-6 overflow-x-auto pb-2"
          >
            {slides.map((project, i) => (
              <figure
                key={`${project.file}-${i}`}
                aria-hidden={i >= count}
                aria-roledescription="slide"
                aria-label={`${project.label} (slide ${i + 1} of ${slides.length})`}
                className="ongoing-card ongoing-slide group relative m-0 shrink-0"
              >
                <div className="ongoing-media overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_-12px_rgba(15,31,46,0.55)] transition-colors duration-300 group-hover:border-emerald-400/40">
                  <img
                    src={ongoingProjectsSrc(project.file)}
                    alt={project.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300/80">
                  {project.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-row items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => stepOne(-1)}
              aria-label="Previous ongoing project"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-white/5 text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="flex items-center justify-center gap-2" aria-hidden="true">
              {ONGOING_PROJECTS.map((project, i) => (
                <span
                  key={project.file}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-6 bg-emerald-400" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => stepOne(1)}
              aria-label="Next ongoing project"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-white/5 text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
