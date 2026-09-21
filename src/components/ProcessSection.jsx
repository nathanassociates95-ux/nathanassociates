import { ClipboardList, DraftingCompass, HardHat, Headphones } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand",
    note: "We start from your project, site and objectives - so the work is defined before it begins.",
    icon: Headphones,
  },
  {
    step: "02",
    title: "Measure",
    note: "Field survey and documentation capture accurate information you can plan from.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Plan",
    note: "We structure the approach - marking, drawings, the approvals path or design direction.",
    icon: DraftingCompass,
  },
  {
    step: "04",
    title: "Deliver",
    note: "Clear outputs with dependable follow-through as your project moves ahead.",
    icon: HardHat,
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="tech-grid bg-brand-navy py-16 md:py-20">
      <div className="container-site">
        <p className="eyebrow mb-3">How We Work</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            A Clear Path from Enquiry to Delivery
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-300 md:text-lg">
            Every project follows the same disciplined sequence - understanding first, measurement,
            planning, then delivery.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {PROCESS_STEPS.map((item) => (
            <li key={item.step} className="relative border-t-2 border-brand-orange/80 pt-5">
              <span
                className="absolute -top-[7px] left-0 h-3 w-3 rounded-full border-2 border-brand-navy bg-brand-orange"
                aria-hidden="true"
              />
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Step {item.step}
              </p>
              <h3 className="mt-3 flex items-center gap-2 text-lg font-bold text-white">
                <item.icon size={18} className="text-brand-orange" aria-hidden="true" />
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;