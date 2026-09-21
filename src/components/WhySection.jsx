import Link from "next/link";
import { ClipboardCheck, Compass, Network, Ruler } from "lucide-react";

const PILLARS = [
  {
    title: "Clearer Site Information",
    note: "Survey data that removes guesswork from planning and execution.",
    icon: Ruler,
  },
  {
    title: "Accurate Documentation",
    note: "Plans, records and reports that hold up through approvals and decisions.",
    icon: ClipboardCheck,
  },
  {
    title: "Project-Relevant Technical Support",
    note: "Help that matches the stage and need of your project, not a one-size-fits-all pitch.",
    icon: Compass,
  },
  {
    title: "Coordinated Service Delivery",
    note: "Survey, approvals and consultancy from one dependable team.",
    icon: Network,
  },
];

const WhySection = () => {
  return (
    <section id="why" className="bg-gray-50 py-16 md:py-20">
      <div className="container-site">
        <p className="eyebrow mb-3">Why Clients Engage Us</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-[2rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-[2.5rem]">
            Engineering-Grade Delivery, Built on Straight Answers
          </h2>
          <p className="max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
            We are measured by what we deliver on site and on paper - nothing more, nothing less.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => (
            <div key={pillar.title} className="card p-6">
              <span className="flex items-center justify-between">
                <span className="icon-chip-soft">
                  <pillar.icon size={18} aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-400">
                  0{idx + 1}
                </span>
              </span>
              <h3 className="mt-4 text-base font-bold leading-snug text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/#contact" className="btn btn-primary">
            Talk to Us About Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySection;