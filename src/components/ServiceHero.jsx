import Link from "next/link";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

const ServiceHero = ({
  title,
  crumb,
  summary,
  image,
  alt,
  whatsapp,
  waText,
  phone,
  phoneDisplay,
  primaryHref = "/#contact",
}) => {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/70" />

      <div className="container-site relative z-10 flex min-h-[440px] flex-col justify-center pb-16 pt-32 md:min-h-[500px] md:pt-40">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-brand-orange"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Services
            </Link>
            <Breadcrumb
              current={crumb}
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
              ]}
              className="hidden sm:inline-flex"
            />
          </div>

          <div className="max-w-3xl">
            <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
              {summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryHref} className="btn btn-primary">
                <Phone size={17} aria-hidden="true" />
                Make an Enquiry
              </Link>
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Enquire on WhatsApp
              </a>
            </div>

            {phone && phoneDisplay && (
              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
                <Phone size={15} className="shrink-0 text-brand-orange" aria-hidden="true" />
                <span>or call</span>
                <a
                  href={`tel:${phone}`}
                  className="phone-number font-semibold text-white transition-colors hover:text-brand-orange"
                >
                  {phoneDisplay}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;