import { CheckCircle2 } from "lucide-react";

/**
 * Renders the full service scope as grouped, progressively disclosed cards.
 * Uses only the existing design-system classes (card, icon-chip-soft, eyebrow).
 */
const ServiceScope = ({ groups, className }) => {
  if (!groups?.length) {
    return null;
  }

  return (
    <div className={className}>
      <nav
        aria-label="Service scope sections"
        className="mb-8 flex flex-wrap justify-center gap-2 md:mb-10"
      >
        {groups.map((group) => (
          <a
            key={group.id}
            href={`#${group.id}`}
            className="inline-flex items-center rounded-full border border-brand-navy/15 bg-brand-navy/5 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            {group.title}
          </a>
        ))}
      </nav>

      <div className="columns-1 gap-6 lg:columns-2">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-title`}
            className="card mb-6 break-inside-avoid p-6 md:p-7"
          >
            <div className="flex items-start gap-3">
              <span className="icon-chip-soft">
                <group.icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h3
                  id={`${group.id}-title`}
                  className="text-lg font-bold leading-snug text-gray-900"
                >
                  {group.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{group.intro}</p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-slate-200 bg-gray-50 p-4"
                >
                  <h4 className="text-sm font-bold leading-snug text-gray-900">{item.name}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.note}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-gray-800">Typical use: </span>
                    {item.use}
                  </p>
                </li>
              ))}
            </ul>

            {group.outputs?.length ? (
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  Key Outputs
                </p>
                <ul className="mt-2.5 space-y-2">
                  {group.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-gray-800">{output}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServiceScope;
