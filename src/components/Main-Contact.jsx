import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import LocationMap from "./LocationMap";
import { SERVICES } from "@/lib/services";

const OFFICES = [
  {
    title: "Head Office",
    lines: ["6/51, Medukattupatti, Thottiapatty Village, Marungapuri", "Tiruchirapalli - 621 305, Tamilnadu"],
  },
  {
    title: "Pudukkottai Branch",
    lines: ["No.542 Lanchamodu Viraimalai (Tk), Pudukkottai (Dt)", "Tamilnadu - 621 316"],
  },
  {
    title: "Branch - Trichy",
    lines: ["No.4, Mani Tower, Ramalingam Street,", "Manapparai, Trichy", "Tamil Nadu - 621306"],
  },
  {
    title: "Branch - Coimbatore",
    lines: ["No.3, Shiruvani Main Road, Nanjamma Layout,", "Perur, Coimbatore", "Tamil Nadu - 641010"],
  },
];

/**
 * Google Maps destination, resolved from the supplied short link
 * https://maps.app.goo.gl/LSz2pnXGeN2otBkJ8 - Google redirects it to a place
 * map pinned at exactly these coordinates (10°31'08.5"N 78°29'12.8"E).
 * The link below is kept exactly as supplied for the marker click-through
 * and the visible "Open in Google Maps" destination.
 *
 * Why not a Google Maps embed: the location has no Google Business Profile,
 * so a name query is stripped to a bare coordinate pin, and Google's
 * place-info panel fails with "Place info couldn't load" in real browsers.
 * No Maps API key exists in this project, so LocationMap (Leaflet + OSM
 * tiles) renders the map with a red landmark marker labelled "Nathan
 * Associates" whose click opens MAP_OPEN_URL.
 */
const MAP_CENTER = [10.519023, 78.486884];
const MAP_OPEN_URL = "https://maps.app.goo.gl/LSz2pnXGeN2otBkJ8";

const ContactSection = ({ withHeading = true }) => {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="container-site">
        {withHeading && (
          <>
            <SectionHeading
              eyebrow="Project Enquiry"
              title="Start a Project Discussion"
              description="Tell us what you need - a survey, an approval, or technical consultancy - and we will point you in the right direction, without obligation."
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              I need ...
            </p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Information */}
          <div className="space-y-6 lg:col-span-3">
            <div className="card p-6 md:p-7">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <MapPin size={18} className="text-brand-orange" aria-hidden="true" />
                Office Locations
              </h3>
              <ul className="mt-4 space-y-4">
                {OFFICES.map((office) => (
                  <li key={office.title} className="flex gap-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-gray-900">{office.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                        {office.lines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx < office.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 md:p-7">
              <ul className="space-y-4">
                <li>
                  <a href="tel:+919787240999" className="group flex items-center gap-4">
                    <span className="icon-chip-soft">
                      <Phone size={17} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Telephone
                      </span>
                      <span className="phone-number font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                        +91 97872 40999
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+917397733223" className="group flex items-center gap-4">
                    <span className="icon-chip-soft">
                      <Phone size={17} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Telephone
                      </span>
                      <span className="phone-number font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                        +91 73977 33223
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nathanassociates.in" className="group flex items-center gap-4">
                    <span className="icon-chip-soft">
                      <Mail size={17} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Email
                      </span>
                      <span className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                        info@nathanassociates.in
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919787240999?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Nathan%20Associates%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="icon-chip-soft">
                      <MessageCircle size={17} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        WhatsApp
                      </span>
                      <span className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                        Enquire on WhatsApp
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="card h-full overflow-hidden">
              {/* Visible location name associated with the map below. The
                  place has no Google Business Profile, so Google's embed
                  cannot label the pin "Nathan Associates" natively and no
                  Maps API key is configured for a JavaScript marker — this
                  accessible label provides the required name instead. */}
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <MapPin size={16} className="shrink-0 text-brand-orange" aria-hidden="true" />
                <p className="text-sm font-bold text-gray-900">Nathan Associates</p>
                <span className="text-xs text-slate-500">Head Office</span>
              </div>
              {/* Self-hosted map: red landmark marker labelled "Nathan
                  Associates" (see LocationMap). The marker itself opens the
                  supplied Google Maps link, and the visible link below is a
                  second accessible way to reach the same destination. */}
              <LocationMap
                center={MAP_CENTER}
                openUrl={MAP_OPEN_URL}
                label="Nathan Associates"
                className="aspect-[4/3] h-auto w-full bg-slate-100 lg:aspect-auto lg:h-full lg:min-h-[420px]"
              />
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-50 px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-orange"
              >
                <MapPin size={16} aria-hidden="true" />
                Open in Google Maps
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;