"use client";

import { getServiceScope } from "@/lib/serviceScope";
import ServiceCardGrid from "@/components/ServiceCardGrid";

/**
 * SurveyServicesGrid — the visual "Digital Survey & Marking" section.
 *
 * Every survey & marking capability is one large dark card: full-width image
 * on top (~190-240px tall on desktop), then title, description, "What it
 * covers" bullets from the project's existing documented scope, "Typical use"
 * and a Details link — all inside the same card. Image fitting follows the
 * shared mapping in @/lib/serviceMedia. Source image files are untouched;
 * sizing is pure CSS (.svc-media in globals.css).
 */
const SurveyServicesGrid = () => {
  const groups = getServiceScope("digital-survey-marking");

  if (!groups.length) {
    return null;
  }

  return (
    <section
      id="survey-capabilities"
      aria-labelledby="survey-capabilities-title"
      className="relative overflow-hidden bg-[#111820] py-16 md:py-20"
    >
      {/* Subtle measuring-grid backdrop */}
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Our Services
          </p>
          <h2
            id="survey-capabilities-title"
            className="text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.5rem]"
          >
            Digital Survey &amp; Marking
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300 md:text-lg">
            Accurate, technology-driven geo-spatial data captured with modern instruments -
            from land, boundary and contour surveys to drone mapping, setting-out and
            on-site marking.
          </p>
        </div>

        <div className="mt-10 md:mt-12">
          <ServiceCardGrid slug="digital-survey-marking" />
        </div>
      </div>
    </section>
  );
};

export default SurveyServicesGrid;
