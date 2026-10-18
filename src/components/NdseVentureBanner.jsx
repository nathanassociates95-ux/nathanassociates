import { ArrowUpRight } from "lucide-react";

/**
 * NdseVentureBanner - compact cross-link to the NDSE venture website.
 *
 * Sits directly below the homepage Services section as a short editorial
 * callout (~100-140px content on desktop, stacked ~120-170px on mobile),
 * not a hero. NDSE is described only as another venture by the same team;
 * no legal relationship, subsidiary status, services or corporate claims
 * are made.
 */
const NdseVentureBanner = () => {
  return (
    <section
      aria-label="Another venture by Nathan Associates"
      className="relative overflow-hidden bg-brand-navy"
    >
      <div className="container-site">
        <a
          href="https://ndse.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="group my-2 flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-brand-navy-deep px-5 py-4 transition-colors duration-300 hover:border-brand-orange/40 md:my-3 md:flex-row md:items-center md:justify-between md:gap-6 lg:px-8"
        >
          <span className="flex min-w-0 flex-col gap-0.5 md:flex-row md:items-center md:gap-5">
            <span className="eyebrow shrink-0 text-[11px]">Another Venture</span>
            <span className="flex min-w-0 flex-col md:flex-row md:items-baseline md:gap-4">
              <span className="text-lg font-bold tracking-tight text-white md:text-xl">
                Discover NDSE
              </span>
              <span className="truncate text-sm leading-snug text-slate-300 md:text-base">
                Explore our associated venture and its website.
              </span>
            </span>
          </span>

          <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-brand-orange-dark">
            Visit NDSE
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default NdseVentureBanner;
