"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { PROJECT_SHOWCASE } from "@/lib/projectShowcase";
import { cn } from "@/lib/utils";

/**
 * ProjectsGrid — filterable portfolio grid for the /projects page.
 *
 *renders ALL eight supplied entries; filters (All Projects / Ongoing /
 * Completed) use the supplied statuses exactly and are plain buttons so the
 * full list stays crawlable and every card keeps its anchor id for deep
 * links from the homepage logo strip.
 */
const FILTERS = ["All Projects", "Ongoing", "Completed"];

const StatusBadge = ({ status }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
      status === "Ongoing"
        ? "border-emerald-500/50 bg-emerald-50 text-emerald-700"
        : "border-brand-orange/50 bg-[#fdf2e2] text-brand-orange-dark",
    )}
  >
    <span
      className={cn(
        "h-1.5 w-1.5 rounded-full",
        status === "Ongoing" ? "bg-emerald-500" : "bg-brand-orange",
      )}
      aria-hidden="true"
    />
    {status}
  </span>
);

const ProjectCard = ({ project }) => (
  <article
    id={project.anchor}
    className="card h-full scroll-mt-28 p-6"
    aria-labelledby={`${project.anchor}-title`}
  >
    <div className="flex items-start justify-between gap-4">
      <span className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white p-2.5">
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.client} logo`}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="select-none px-1 text-center text-xs font-bold uppercase tracking-widest text-brand-navy">
            {project.client}
          </span>
        )}
      </span>
      <StatusBadge status={project.status} />
    </div>

    <h2
      id={`${project.anchor}-title`}
      className="mt-4 text-lg font-bold leading-snug tracking-tight text-gray-900"
    >
      {project.title}
    </h2>
    <p className="mt-1 text-sm font-semibold text-brand-navy">{project.client}</p>

    <dl className="mt-3 space-y-1.5 text-sm text-slate-600">
      <div className="flex items-start gap-2">
        <dt className="sr-only">Location</dt>
        <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-orange" />
        <dd>{project.location}</dd>
      </div>
      <div className="flex items-start gap-2">
        <dt className="sr-only">Service type</dt>
        <dd>
          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-brand-navy">
            {project.type}
          </span>
        </dd>
      </div>
    </dl>

    <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.description}</p>
  </article>
);

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("All Projects");

  const visible =
    filter === "All Projects"
      ? PROJECT_SHOWCASE
      : PROJECT_SHOWCASE.filter((p) => p.status === filter);

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter projects by status"
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange",
              filter === f
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-slate-200 bg-white text-brand-navy hover:border-brand-navy",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.anchor} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsGrid;
