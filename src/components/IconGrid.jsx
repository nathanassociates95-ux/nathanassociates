import { cn } from "@/lib/utils";

const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const IconGrid = ({ items, lgCols = 3, className }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-6", COLS[lgCols] || COLS[3], className)}>
      {items.map((item, idx) => (
        <div key={idx} className="card p-6 md:p-7">
          <span className="icon-chip-soft mb-3">
            <item.icon size={19} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <h3 className="font-bold text-gray-900">{item.title}</h3>
          {item.note && (
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.note}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconGrid;