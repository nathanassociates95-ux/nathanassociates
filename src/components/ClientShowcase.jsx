import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECT_SHOWCASE } from "@/lib/projectShowcase";

/**
 * ClientShowcase — compact "Trusted By Leading Organizations" homepage strip.
 *
 * Visually subordinate to the Services section above it: a single short band
 * with the section heading, one sentence of supporting text, a continuously
 * scrolling logo marquee (unique clients only, each chip links to that
 * client's project anchor on /projects), and the "Explore Our Projects"
 * call to action. Carousel timing, hover/focus pause and reduced-motion
 * handling live in the CSS marquee rules (globals.css) — same pattern as the
 * /projects page strip, so the two stay in sync.
 */

const marqueeClients = (() => {
  const seen = new Set();
  const unique = [];
  for (const p of PROJECT_SHOWCASE) {
    if (!seen.has(p.client)) {
      seen.add(p.client);
      unique.push(p);
    }
  }
  return unique;
})();

/* Each unique client's chip deep-links to its first project anchor. */
const logoStrip = [...marqueeClients, ...marqueeClients];

const ClientShowcase = () => (
  <section
    id="trusted-clients"
    aria-labelledby="trusted-clients-title"
    className="bg-gray-50 py-10 md:py-12"
  >
    <div className="container-site">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2
            id="trusted-clients-title"
            className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
          >
            Trusted By Leading Organizations
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
            Explore our project experience across surveying, infrastructure, and development.
          </p>
        </div>
        <Link
          href="/projects"
          className="btn btn-primary inline-flex shrink-0 items-center gap-2"
        >
          Explore Our Projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <div className="client-marquee mt-6 overflow-hidden">
        <ul className="client-marquee-track flex w-max gap-4 py-1">
          {logoStrip.map((p, i) => (
            <li key={`${p.client}-${i}`} aria-hidden={i >= marqueeClients.length}>
              <Link
                href={`/projects#${p.anchor}`}
                className="client-logo-chip flex h-14 w-32 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md md:h-14 md:w-36"
                title={p.client}
                aria-label={`${p.client} — view project on the Projects page`}
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
                  <span className="select-none px-1 text-center text-xs font-bold uppercase tracking-widest text-brand-navy">
                    {p.client}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ClientShowcase;
