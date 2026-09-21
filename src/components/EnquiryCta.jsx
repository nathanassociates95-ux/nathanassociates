import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const EnquiryCta = ({
  title,
  description,
  whatsapp,
  waText,
  primaryLabel = "Make an Enquiry",
  primaryHref = "/#contact",
}) => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-2xl bg-brand-navy px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            {description}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn btn-primary">
              <Phone size={17} aria-hidden="true" />
              {primaryLabel}
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
        </div>
      </div>
    </section>
  );
};

export default EnquiryCta;