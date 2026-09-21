import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "@/lib/services";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 py-16 md:py-20">
      <div className="container-site">
        <SectionHeading
          align="left"
          margin="mb-6 md:mb-8"
          eyebrow="Our Services"
          title="Three Core Services, Delivered with Precision"
          description="Digital Survey &amp; Marking, Approvals and Consultancy - accurate data, clear processes and dependable support for every project."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;