import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MATRIX = [
  { need: "Measure a site, boundary or plot", service: "Digital Survey & Marking", href: "/services/digital-survey-marking" },
  { need: "Lay out site, road or building marking", service: "Digital Survey & Marking", href: "/services/digital-survey-marking" },
  { need: "Record terrain or elevation for planning", service: "Digital Survey & Marking", href: "/services/digital-survey-marking" },
  { need: "Get a building or commercial plan approved", service: "Approvals", href: "/services/approvals" },
  { need: "DTCP / RERA registration or compliance", service: "Approvals", href: "/services/approvals" },
  { need: "NOC, land conversion or regularisation", service: "Approvals", href: "/services/approvals" },
  { need: "Understand ground conditions before building", service: "Consultancy", href: "/services/consultancy" },
  { need: "Value land or property for a decision", service: "Consultancy", href: "/services/consultancy" },
  { need: "Design work in 2D / 3D or structural", service: "Consultancy", href: "/services/consultancy" },
  { need: "Coordinate a project from plan to delivery", service: "Consultancy", href: "/services/consultancy" },
];

const CapabilityMatrix = () => {
  return (
    <section id="capabilities" className="tech-grid-light bg-white py-16 md:py-20">
      <div className="container-site">
        <p className="eyebrow mb-3">Capability Matrix</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-[2rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-[2.5rem]">
            Match Your Project to the Right Service
          </h2>
          <p className="max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
            A quick reference list - find what you need and where it sits within our three service
            lines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-14">
          {MATRIX.map((row, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-400">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="font-medium leading-snug text-gray-900">{row.need}</p>
              </div>
              <Link
                href={row.href}
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white"
              >
                {row.service}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;