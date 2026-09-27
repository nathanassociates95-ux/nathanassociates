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

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/" || pathname === "/home";

  const isActive = (href) => href === "/" && isHomePage;

  const prefersReducedMotion = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleAnchorClick = (e, href) => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    if (isHomePage && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior });
      window.history.replaceState(null, "", "/");
      return;
    }
    if (!href.includes("#")) return;
    const [targetPath, hash] = href.split("#");
    const targetIsHome = targetPath === "" || targetPath === "/" || targetPath === "/home";
    if (isHomePage && targetIsHome && hash) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior, block: "start" });
      window.history.replaceState(null, "", `/#${hash}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/15 bg-[linear-gradient(90deg,rgba(10,27,42,0.98),rgba(10,27,42,0.96),rgba(10,27,42,0.93))] shadow-[0_12px_32px_-16px_rgba(15,31,46,0.6)] backdrop-blur-[10px]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[72px]">
        {/* Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Nathan Associates - Home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-sm md:h-14 md:w-14">
            <img
              src="/images/logo-dark.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="nav-micro-shadow text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
              Nathan Associates
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
          <a
            href="tel:+919787240999"
            className="hidden items-center gap-2.5 rounded-lg border border-white/40 bg-brand-navy/40 py-1.5 pl-1.5 pr-3.5 backdrop-blur-sm transition-colors hover:border-brand-orange md:inline-flex lg:flex"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-orange text-white">
              <Phone size={15} aria-hidden="true" />
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="nav-micro-shadow text-[11px] font-semibold uppercase tracking-wider text-white">
                Call Us
              </span>
              <span className="nav-micro-shadow text-sm font-bold text-white">+91 97872 40999</span>
            </span>
          </a>

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
              onClick={(e) => {
                handleAnchorClick(e, link.href);
                setOpen(false);
              }}
              className="border-b border-white/10 py-3.5 text-base font-medium text-gray-200 transition-colors hover:text-brand-orange"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919787240999"
            className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-brand-orange"
          >
            <Phone size={16} aria-hidden="true" />
            +91 97872 40999
          </a>
        </nav>
      </div>
    </header>
  );
};