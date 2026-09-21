import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import HeroScrollCue from "./HeroScrollCue";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy">
      <img
        src="/images/banner.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/60 to-brand-navy/25 lg:via-brand-navy/40 lg:to-brand-navy/5" />

      <div className="container-site relative z-10 flex min-h-[480px] flex-col justify-center pb-16 pt-32 md:min-h-[100dvh] md:pt-32">
        <div className="max-w-3xl">
          <span className="hero-content-rise mb-5 inline-flex items-center rounded-sm border-l-2 border-brand-orange bg-black/30 px-3 py-1 backdrop-blur-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange md:text-sm">
              Trusted by Construction Leaders
            </span>
          </span>
          <h1 className="hero-content-rise text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.5rem] lg:text-6xl" style={{ animationDelay: "100ms" }}>
            Precision Surveying &amp;
            <br />
            Project Services,
            <br />
            Delivered Right
          </h1>
          <p className="hero-content-rise mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg" style={{ animationDelay: "200ms" }}>
            From precise site measurement to approvals and technical consultancy, Nathan Associates
            turns accurate information into clearer project decisions - in Tamil Nadu and across
            India.
          </p>

          <div className="hero-content-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "300ms" }}>
            <Link href="/#contact" className="btn btn-primary">
              <Phone size={17} aria-hidden="true" />
              Make an Enquiry
            </Link>
            <Link href="/#services" className="btn btn-outline-light">
              Explore Services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <HeroScrollCue />
    </section>
  );
};