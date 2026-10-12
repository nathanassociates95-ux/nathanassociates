import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceVisual from "./ServiceVisual";

const ServiceCard = ({ service, detailed = false }) => {
  if (!service) {
    return null;
  }

  const capabilities = service.capabilities || [];
  const points = (service.overviewPoints || service.highlights || []).slice(0, 3);

  return (
    <Link
      href={service.href || "/services"}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy-deep">
        <ServiceVisual service={service} />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-sm font-semibold text-brand-orange">{service.tagline}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-brand-navy">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {service.cardSummary || service.summary}
        </p>

        {detailed ? (
          <ul className="mb-4 mt-4 space-y-3.5">
            {capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-gray-900">{item.name}</span>
                  {" — "}
                  {item.note}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mb-4 mt-4 space-y-3">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium leading-snug text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-orange">
          Explore Service
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;