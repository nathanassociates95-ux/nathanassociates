"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact Us", href: "/#contact" },
];

const SECTION_IDS = ["top", "about", "services", "contact"];

const HREF_TO_SECTION = {
  "/": "top",
  "/#about": "about",
  "/#services": "services",
  "/#contact": "contact",
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const pathname = usePathname();

  const isHomePage = pathname === "/" || pathname === "/home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(null);
      return;
    }
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(SECTION_IDS.includes(hash) ? hash : "top");
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [isHomePage]);

  useEffect(() => {
    if (!isHomePage) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const inView = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        }
        const current = sections.find((section) => inView.has(section.id));
        if (current) setActiveSection(current.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  const isActive = (href) => {
    if (!isHomePage) {
      return (
        href === "/#services" &&
        (pathname === "/services" || pathname.startsWith("/services/"))
      );
    }
    return activeSection === HREF_TO_SECTION[href];
  };

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleAnchorClick = (e, href) => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    if (isHomePage && href === "/") {
      e.preventDefault();
      setActiveSection("top");
      window.scrollTo({ top: 0, behavior });
      window.history.replaceState(null, "", "/");
      return;
    }
    if (!href.includes("#")) return;
    const [targetPath, hash] = href.split("#");
    const targetIsHome = targetPath === "" || targetPath === "/" || targetPath === "/home";
    if (isHomePage && targetIsHome && hash) {
      e.preventDefault();
      setActiveSection(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior, block: "start" });
      window.history.replaceState(null, "", `/#${hash}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/15 bg-brand-navy shadow-[0_12px_32px_-16px_rgba(15,31,46,0.6)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between gap-4 transition-[height] duration-300",
          scrolled ? "h-14 md:h-[60px]" : "h-16 md:h-[72px]",
        )}
      >
        {/* Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="NATHAN ASSOCIATES - Home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-sm md:h-14 md:w-14">
            <img
              src="/images/logo-dark.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="nav-micro-shadow text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
              NATHAN ASSOCIATES
            </span>
            <span className="nav-micro-shadow text-[11px] font-semibold uppercase tracking-[0.16em] break-words text-brand-orange">
              Survey · Approvals · Consultancy
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "nav-micro-shadow text-[15px] font-semibold transition-colors",
                isActive(link.href) ? "text-brand-orange" : "text-white/95 hover:text-brand-orange",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Phone CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2.5 rounded-lg border border-white/40 bg-brand-navy/60 py-1.5 pl-1.5 pr-3.5 transition-colors hover:border-brand-orange md:flex">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-orange text-white">
              <Phone size={15} aria-hidden="true" />
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="nav-micro-shadow text-[10px] font-semibold uppercase tracking-wider text-white/90">
                Call Us
              </span>
              <span className="flex items-center gap-1.5">
                <a
                  href="tel:+919787240999"
                  className="phone-number nav-micro-shadow text-[13px] font-bold text-white transition-colors hover:text-brand-orange"
                >
                  +91 97872 40999
                </a>
                <span
                  aria-hidden="true"
                  className="phone-number nav-micro-shadow text-[13px] font-bold text-white"
                >
                  /
                </span>
                <a
                  href="tel:+917397733223"
                  className="phone-number nav-micro-shadow text-[13px] font-bold text-white transition-colors hover:text-brand-orange"
                >
                  +91 73977 33223
                </a>
              </span>
            </span>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "border-t border-white/10 bg-brand-navy transition-all duration-300 lg:hidden",
          open ? "max-h-[420px] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden border-t-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={(e) => {
                handleAnchorClick(e, link.href);
                setOpen(false);
              }}
              className={cn(
                "border-b border-white/10 py-3.5 text-base font-medium transition-colors hover:text-brand-orange",
                isActive(link.href) ? "text-brand-orange" : "text-gray-200",
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919787240999"
            className="phone-number mt-4 inline-flex items-center gap-2 text-base font-semibold text-brand-orange"
          >
            <Phone size={16} aria-hidden="true" />
            +91 97872 40999
          </a>
          <a
            href="tel:+917397733223"
            className="phone-number mt-2 inline-flex items-center gap-2 text-base font-semibold text-brand-orange"
          >
            <Phone size={16} aria-hidden="true" />
            +91 73977 33223
          </a>
        </nav>
      </div>
    </header>
  );
};