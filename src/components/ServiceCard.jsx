import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ServiceCard = ({ service }) => {
  if (!service) {
    return null;
  }

  const points = (service.overviewPoints || service.highlights || []).slice(0, 3);

  return (
    <Link
      href={service.href || "/services"}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-sm font-semibold text-brand-orange">{service.tagline}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-brand-navy">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {service.cardSummary || service.summary}
        </p>

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