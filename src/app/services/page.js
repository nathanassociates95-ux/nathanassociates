import Breadcrumb from "@/components/Breadcrumb";
import ServicesSection from "@/components/ServicesSection";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = {
  title: "Services | Nathan Associates",
  description:
    "Digital Survey & Marking, Approvals and Consultancy services from Nathan Associates - accurate, reliable and delivered right.",
  keywords: [
    "Digital Survey & Marking",
    "Topographical Survey",
    "Boundary Survey",
    "DGPS Survey",
    "Drone Survey",
    "Approvals",
    "DTCP Approval",
    "RERA Approval",
    "Building Plan Approval",
    "Commercial Approval",
    "Industrial Approval",
    "Panchayat Approval",
    "Corporation Approval",
    "NOC Certificate Approval",
    "Land Conversion",
    "Regularisation",
    "HACA Approval",
    "Single Plot Approval",
    "Unapproved Plot Regularisation",
    "Consultancy",
    "Soil Test",
    "Ground Water Survey",
    "Quantity Survey",
    "Land & Building Valuation",
    "2D / 3D Plan & Designing",
    "BIM Model & Design",
    "GIS Design & DTM Design",
    "Stability Certificate",
    "Project Management Consultancy",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          src="/images/banner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />

        <div className="container-site relative z-10 pb-16 pt-32 md:pt-40">
          <Breadcrumb current="Services" items={[{ label: "Home", href: "/" }]} className="mb-6 hidden sm:inline-flex" />
          <h1 className="max-w-3xl text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
            Our Services
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            Three core services - digital survey and marking, approvals and consultancy - delivered
            with accurate data and clear communication at every step.
          </p>
        </div>
      </section>

      <ServicesSection />

      <EnquiryCta
        title="Not sure which service you need?"
        description="Tell us about your land, building or project requirement and our team will point you in the right direction - no obligation."
        whatsapp="919787240999"
        waText="Hello, I would like to enquire about Nathan Associates services"
      />
    </>
  );
}