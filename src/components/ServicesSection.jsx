import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const ServicesSection = ({ singleLine = false }) => {
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

        <div
          className={cn(
            "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
            singleLine && "w-max min-w-full",
          )}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} singleLine={singleLine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;