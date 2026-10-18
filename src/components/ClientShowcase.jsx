"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PROJECT_SHOWCASE } from "@/lib/projectShowcase";
import { cn } from "@/lib/utils";

/**
 * ClientShowcase - "Trusted by Our Clients" homepage section.
 *
 * Two restrained pieces in one dark-navy section:
 * 1. A continuously scrolling client strip (CSS marquee, duplicated run,
 *    pauses on hover/focus, disabled under prefers-reduced-motion).
 * 2. An auto-advancing project carousel showing one of the eight supplied
 *    project records at a time (~6s), with prev/next buttons, pagination
 *    dots, hover/focus pause and reduced-motion support - same patterns as
 *    the OngoingProjects gallery, no new dependencies.
 */
const AUTOPLAY_MS = 6000;

const ClientWordmark = ({ client, className }) => (
  <span
    className={cn(
      "select-none px-2 text-center text-sm font-bold uppercase tracking-widest text-brand-navy",
      className,
    )}
  >
    {client}
  </span>
);

const ClientLogoChip = ({ client, logo }) => (
  <span
    className="client-logo-chip flex h-16 w-36 shrink-0 items-center justify-center rounded-lg bg-white p-3 shadow-sm md:h-20 md:w-44"
    title={client}
    aria-label={client}
    role="img"
  >
    {logo ? (
      <img
        src={logo}
        alt=""
        loading="lazy"
        decoding="async"
        draggable={false}
        className="max-h-full max-w-full object-contain"
      />
    ) : (
      <ClientWordmark client={client} />
    )}
  </span>
);

const ClientShowcase = () => {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [active, setActive] = useState(0);

  const count = PROJECT_SHOWCASE.length;

  // Track prefers-reduced-motion, including changes while the page is open.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Advance one slide, wrapping across either end of the set.
  const stepOne = useCallback(
    (direction) => {
      setActive((current) => (current + direction + count) % count);
    },
    [count],
  );

  const goTo = useCallback(
    (index) => {
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  // Pause-safe autoplay loop. Re-created by paused/reduced/count changes and
  // cleared on unmount, so timers can never overlap or leak.
  useEffect(() => {
    if (paused || reduced || count < 2) return undefined;
    const timer = setInterval(() => stepOne(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduced, count, stepOne]);

  const logoStrip = [...PROJECT_SHOWCASE, ...PROJECT_SHOWCASE];

  return (
    <section
      id="trusted-clients"
      aria-labelledby="trusted-clients-title"
      className="relative overflow-hidden bg-[#111820] py-16 md:py-20"
    >
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <SectionHeading
          dark
          eyebrow="Selected Project Experience"
          title="Trusted by Our Clients"
          description="A look at the organisations and projects we have served across survey, infrastructure and industrial work."
          className="mx-auto"
        />

        {/* Client strip - continuous marquee, run duplicated for a seamless loop. */}
        <div
          className="client-marquee mt-10 overflow-hidden md:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <ul className="client-marquee-track flex w-max gap-4 py-2">
            {logoStrip.map((client, i) => (
              <li key={`${client.client}-${i}`} aria-hidden={i >= count}>
                <ClientLogoChip client={client.client} logo={client.logo} />
              </li>
            ))}
          </ul>
        </div>

        {/* Project carousel - one record per slide, auto-advancing. */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client project showcase"
          className="mt-10 md:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (event.currentTarget.contains(event.relatedTarget)) return;
            setPaused(false);
          }}
        >
          <div className="client-slide-window overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_18px_40px_-20px_rgba(15,31,46,0.7)] transition-colors duration-300 hover:border-emerald-400/30">
            <div
              className="client-slide-track flex"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {PROJECT_SHOWCASE.map((item, i) => (
                <article
                  key={item.title}
                  aria-hidden={i !== active}
                  aria-roledescription="slide"
                  aria-label={`${item.title} - ${item.client} (slide ${i + 1} of ${count})`}
                  className="client-slide w-full shrink-0"
                >
                  <div className="flex h-full flex-col gap-6 p-6 md:p-8 lg:flex-row lg:gap-10 lg:p-10">
                    {/* Identity column: client logo / wordmark and meta. */}
                    <div className="flex shrink-0 flex-col items-start gap-4 lg:w-72">
                      <span className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-4 md:h-28">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.client} logo`}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <ClientWordmark client={item.client} className="text-base" />
                        )}
                      </span>

                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                          item.status === "Ongoing"
                            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                            : "border-brand-orange/40 bg-brand-orange/10 text-brand-orange",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            item.status === "Ongoing" ? "bg-emerald-400" : "bg-brand-orange",
                          )}
                          aria-hidden="true"
                        />
                        {item.status}
                      </span>

                      <dl className="grid grid-cols-1 gap-1.5 text-sm text-slate-300 lg:w-full">
                        <div className="flex items-start gap-2">
                          <dt className="sr-only">Location</dt>
                          <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-orange" />
                          <dd className="leading-snug">{item.location}</dd>
                        </div>
                        <div className="flex items-start gap-2">
                          <dt className="sr-only">Service type</dt>
                          <dd className="text-xs font-semibold uppercase leading-5 tracking-wide text-emerald-300/80">
                            {item.type}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Content column: title + full supplied description. */}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {item.client}
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls: prev/next plus pagination dots, keyboard accessible. */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => stepOne(-1)}
              aria-label="Previous project"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 bg-white/5 text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {PROJECT_SHOWCASE.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show project ${i + 1}: ${item.title}`}
                  aria-current={i === active}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300",
                    i === active ? "w-6 bg-emerald-400" : "w-2 bg-white/25 hover:bg-white/50",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => stepOne(1)}
              aria-label="Next project"
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

export default ClientShowcase;
