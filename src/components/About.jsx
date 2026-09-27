import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

const ABOUT_POINTS = [
  {
    title: "Digital Survey & Marking",
    note: "Accurate geo-spatial data for planning, boundaries and execution.",
  },
  {
    title: "Approvals",
    note: "Clear documentation and follow-up through the right approval path.",
  },
  {
    title: "Consultancy",
    note: "Technical guidance from soil testing to design and delivery.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Imagery */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/img/whoweare.png"
              alt="Nathan Associates at work"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 overflow-hidden rounded-xl border-4 border-white shadow-xl w-[46%] sm:-right-6">
            <img
              src="/images/about2.png"
              alt="Surveying team discussing plans on site"
              className="aspect-square w-full object-cover"
            />
          </div>

          <div className="absolute -top-5 left-4 rounded-xl bg-brand-navy px-4 py-3 shadow-lg sm:left-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              Survey · Approvals
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
              · Consultancy
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="eyebrow mb-3">About Us</p>
          <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-4xl md:text-[2.5rem]">
            Who We Are
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            Nathan Associates was established in Tamil Nadu with a clear vision - to bridge the
            growing gap in surveying services within the construction industry. What began as a
            focused initiative has grown into a surveying and project services provider, working
            across India with a team of qualified professionals.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-600 md:text-lg">
            We pair a technology-driven approach with disciplined field work to deliver accurate,
            reliable services - from survey and marking to approvals and consultancy.
          </p>

          <ul className="mt-6 space-y-3">
            {ABOUT_POINTS.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-gray-900">{point.title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{point.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link href="/#contact" className="btn btn-primary">
              Make an Enquiry
            </Link>
            <a
              href="tel:+917397733223"
              className="inline-flex items-center gap-3 text-left"
            >
              <span className="icon-chip h-11 w-11">
                <Phone size={17} aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-slate-500">Call us anytime</span>
                <span className="font-bold text-gray-900">+91 73977 33223</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;