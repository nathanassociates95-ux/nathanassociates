const FLOW_NODES = [
  { step: "01", title: "Field", note: "Survey, measurement and site observation." },
  { step: "02", title: "Data", note: "Coordinates, drawings and documentation." },
  { step: "03", title: "Technical Review", note: "Analysis, planning and coordination." },
  { step: "04", title: "Decision", note: "Approval, design or execution support." },
];

const TechnicalFlow = () => {
  return (
    <section id="workflow" className="tech-grid overflow-hidden bg-brand-navy py-16 md:py-20">
      <div className="container-site">
        <p className="eyebrow mb-3">Field to Decision</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            From Field Data to Clear Project Decisions
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-300 md:text-lg">
            Every engagement funnels accurate field information through a defined technical
            sequence - so your decisions rest on measured, documented reality.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {FLOW_NODES.map((node) => (
            <li key={node.title} className="relative pl-6">
              <span className="absolute left-0 top-1 h-5 w-px bg-brand-orange/60" aria-hidden="true" />
              <span
                className="absolute left-0 top-0 -translate-x-1/2 rounded-full border-2 border-brand-navy bg-brand-orange p-1"
                aria-hidden="true"
              />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                {node.step}
              </p>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-white">{node.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{node.note}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500 lg:mt-16">
          <span aria-hidden="true">#</span>
          <span className="hidden h-px w-16 bg-white/10 sm:block" aria-hidden="true" />
          <span>Measured · Documented · Reviewed · Decided</span>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFlow;