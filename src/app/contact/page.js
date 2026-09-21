import ContactSection from "@/components/Main-Contact";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Contact | Nathan Associates",
  description: "Talk to Nathan Associates about Digital Survey & Marking, Approvals and Consultancy - accurate, reliable and delivered right.",
  keywords: [
    "Contact Nathan Associates",
    "Digital Survey & Marking",
    "Approvals",
    "Consultancy",
  ],
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          src="/images/home-approve.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/70" />

        <div className="container-site relative z-10 pb-16 pt-32 md:pt-40">
          <Breadcrumb current="Contact" items={[{ label: "Home", href: "/" }]} className="mb-6 hidden sm:inline-flex" />
          <h1 className="max-w-3xl text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
            Call, email or send an enquiry on WhatsApp - our team is ready to discuss your
            requirement.
          </p>
        </div>
      </section>

      <ContactSection withHeading={false} />
    </>
  );
}