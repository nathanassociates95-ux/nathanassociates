"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer className="relative bg-brand-navy-deep text-white">
      <div className="border-b border-white/10">
        <div className="container-site flex flex-wrap items-center justify-between gap-2 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
          <span>Nathan Associates</span>
          <span className="hidden sm:inline">Survey · Approvals · Consultancy</span>
          <span>Tamil Nadu · India</span>
        </div>
      </div>
      <div className="container-site grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:py-16 lg:grid-cols-4 lg:gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Nathan Associates - Home">
            <img src="/images/logo-01.svg" alt="" className="h-10 w-10 object-contain" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight">Nathan Associates</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-orange">
                Survey · Approvals · Consultancy
              </span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Survey, approvals and consultancy services built on accurate field data, clear
            documentation and practical technical guidance.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://www.facebook.com/NathanAssociatesOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-brand-orange"
              aria-label="Nathan Associates on Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/nathanassociates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-brand-orange"
              aria-label="Nathan Associates on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="text-gray-300 transition-colors hover:text-brand-orange">Home</Link></li>
            <li><Link href="/#about" className="text-gray-300 transition-colors hover:text-brand-orange">About Us</Link></li>
            <li><Link href="/#services" className="text-gray-300 transition-colors hover:text-brand-orange">Services</Link></li>
            <li><Link href="/#contact" className="text-gray-300 transition-colors hover:text-brand-orange">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-gray-300 transition-colors hover:text-brand-orange"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="tel:+919787240999" className="flex items-center gap-2.5 transition-colors hover:text-brand-orange">
                <Phone size={15} className="text-brand-orange shrink-0" aria-hidden="true" />
                +91 97872 40999
              </a>
            </li>
            <li>
              <a href="tel:+919787250999" className="flex items-center gap-2.5 transition-colors hover:text-brand-orange">
                <Phone size={15} className="text-brand-orange shrink-0" aria-hidden="true" />
                +91 97872 50999
              </a>
            </li>
            <li>
              <a href="mailto:info@nathanassociates.in" className="flex items-center gap-2.5 transition-colors hover:text-brand-orange">
                <Mail size={15} className="text-brand-orange shrink-0" aria-hidden="true" />
                info@nathanassociates.in
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 text-brand-orange shrink-0" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                6/51, Medukattupatti, Thottiapatty Village, Marungapuri
                <br />
                Tiruchirapalli - 621 305, Tamilnadu
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg transition-all duration-200 hover:bg-brand-orange-dark"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </button>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Nathan Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;