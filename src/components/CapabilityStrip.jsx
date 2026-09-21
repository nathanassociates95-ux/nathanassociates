import Link from "next/link";
import { ArrowUpRight, DraftingCompass, Ruler, Stamp } from "lucide-react";
import { SERVICES } from "@/lib/services";

const CAPABILITY_ICONS = [Ruler, Stamp, DraftingCompass];

const CapabilityStrip = () => {
  return (
    <section className="bg-gray-50" aria-label="Core capabilities">
      <div className="container-site py-6 md:py-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = CAPABILITY_ICONS[idx];
            return (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-orange"
              >
                <span className="icon-chip transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    0{idx + 1}
                  </span>
                  <span className="mt-0.5 block font-bold leading-tight text-gray-900">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                    {service.tagline}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-slate-400 transition-colors group-hover:text-brand-orange"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilityStrip;