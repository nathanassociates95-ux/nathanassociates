import { cn } from "@/lib/utils";

const COLS = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
};

const NumberedSteps = ({ steps, lgCols = 4, className }) => {
  return (
    <ol className={cn("grid grid-cols-1 gap-6", COLS[lgCols] || COLS[4], className)}>
      {steps.map((step) => (
        <li key={step.step} className="card relative p-6">
          <span className="text-2xl font-bold tracking-tight text-brand-orange" aria-hidden="true">
            {step.step}
          </span>
          <span className="icon-chip mt-3 h-10 w-10">
            <step.icon size={18} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <h3 className="mt-3 text-base font-semibold leading-snug text-gray-900">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.note}</p>
        </li>
      ))}
    </ol>
  );
};

export default NumberedSteps;