import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const CheckPanel = ({ title, note, items }) => {
  return (
    <div className="card p-6 md:p-7">
      {title && <h3 className="text-lg font-bold text-gray-900">{title}</h3>}
      {note && (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{note}</p>
      )}
      <ul className={cn("space-y-3", (title || note) && "mt-5")}>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
              aria-hidden="true"
            />
            <span className="text-sm font-medium leading-relaxed text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckPanel;