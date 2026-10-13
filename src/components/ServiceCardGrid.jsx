"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getServiceScope } from "@/lib/serviceScope";
import {
  SERVICE_MEDIA,
  APPROVALS_MEDIA,
  CONSULTANCY_MEDIA,
  serviceMediaSrc,
} from "@/lib/serviceMedia";

/**
 * ServiceCardGrid — one large, dark, unified card per sub-service.
 *
 * Each card: large image area (top) → title → description → "What it covers"
 * → "Typical use" → Details link, all inside the SAME dark card. No white
 * detail boxes: the previous separate white sub-service lists are removed
 * from the three service pages, and this grid is the single detailed view.
 *
 * Image fitting comes straight from the media map: drawings/plans/documents
 * use object-contain (never cropped), photographs use object-cover. Sizing is
 * handled entirely by .svc-media in globals.css (full-width, 190-240px height
 * on desktop), so source image files are never altered.
 */

const MEDIA_BY_SLUG = {
  "digital-survey-marking": SERVICE_MEDIA,
  approvals: APPROVALS_MEDIA,
  consultancy: CONSULTANCY_MEDIA,
};

const ServiceCardGrid = ({ slug }) => {
  const reduced = useReducedMotion();
  const groups = getServiceScope(slug);
  const mediaMap = MEDIA_BY_SLUG[slug] || {};

  if (!groups.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, gIdx) =>
        group.items.map((item, iIdx) => {
          const media = mediaMap[item.name];
          const anchorId = iIdx === 0 ? group.id : undefined;

          return (
            <motion.div
              key={item.name}
              id={iIdx === 0 ? anchorId : undefined}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: Math.min(iIdx, 5) * 0.05,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <article
                className="svc-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141c26]"
              >
                {/* Large image area — full card width, ~190-240px on desktop.
                    Omitted when the sub-service has no matching image, so no
                    empty media box or unrelated filler image is rendered. */}
                {media ? (
                  <div className="svc-media">
                    <img
                      src={serviceMediaSrc(media.file, media.dir)}
                      alt={media.alt}
                      loading="lazy"
                      decoding="async"
                      className={`svc-media-img ${
                        media.fit === "cover"
                          ? "svc-media-img-cover object-cover object-center"
                          : "svc-media-img-contain object-contain object-center"
                      }`}
                    />
                    <span className="svc-sweep" aria-hidden="true" />
                  </div>
                ) : null}

                {/* Unified dark card body: title, explanation, details */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-snug tracking-tight text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {item.note}
                  </p>

                  {group.outputs?.length ? (
                    <div className="mt-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300/80">
                        What it covers
                      </p>
                      <ul className="mt-1.5 space-y-1">
                        {group.outputs.slice(0, 3).map((output) => (
                          <li
                            key={output}
                            className="flex items-start gap-1.5 text-[13px] leading-relaxed text-slate-400"
                          >
                            <span
                              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-emerald-400/70"
                              aria-hidden="true"
                            />
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <p className="mt-3.5 text-[13px] leading-relaxed text-slate-400">
                    <span className="font-semibold text-gray-200">Typical use: </span>
                    {item.use}
                  </p>

                  <Link
                    href={`#${group.id}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-emerald-300/90 transition-colors group-hover:text-emerald-300"
                  >
                    Details
                    <ArrowRight size={13} className="svc-arrow" aria-hidden="true" />
                    <span className="sr-only">for {item.name}</span>
                  </Link>
                </div>
              </article>
            </motion.div>
          );
        }),
      )}
    </div>
  );
};

export default ServiceCardGrid;
