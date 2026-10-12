"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * ServiceVisual — dedicated technical/blueprint illustration area for each
 * service card. Pure inline SVG + framer-motion, no external assets.
 *
 * Each illustration is decorative (aria-hidden); the service title and
 * description remain available as real text in the card.
 */

const Path = ({ d, delay = 0, duration = 1, reduced, ...rest }) => (
  <motion.path
    d={d}
    fill="none"
    initial={reduced ? false : { pathLength: 0, opacity: 0 }}
    whileInView={
      reduced
        ? undefined
        : { pathLength: 1, opacity: 1, transition: { duration, delay, ease: "easeOut" } }
    }
    viewport={{ once: true, amount: 0.4 }}
    {...rest}
  />
);

const Dot = ({ cx, cy, r = 3.5, delay = 0, reduced, ...rest }) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r={r}
    initial={reduced ? false : { opacity: 0 }}
    whileInView={
      reduced
        ? undefined
        : { opacity: 1, transition: { delay, duration: 0.4, ease: "easeOut" } }
    }
    viewport={{ once: true, amount: 0.4 }}
    {...rest}
  />
);

const Fade = ({ delay = 0, reduced, children, ...rest }) => (
  <motion.g
    initial={reduced ? false : { opacity: 0 }}
    whileInView={reduced ? undefined : { opacity: 1, transition: { delay, duration: 0.7 } }}
    viewport={{ once: true, amount: 0.4 }}
    {...rest}
  >
    {children}
  </motion.g>
);

/* Shared blueprint backdrop: dark navy + fine survey grid */
const Backdrop = () => (
  <>
    <rect width="640" height="360" className="fill-[#0a1628]" />
    <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
      {Array.from({ length: 17 }, (_, i) => (
        <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="360" />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 40} x2="640" y2={i * 40} />
      ))}
    </g>
    <rect x="1" y="1" width="638" height="358" fill="none" stroke="#e89224" strokeOpacity="0.25" strokeWidth="1" />
  </>
);

/* Digital Survey & Marking — contour map + boundary polygon + DGPS points */
const SurveyVisual = ({ reduced }) => (
  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
    <Backdrop />
    {/* contour lines */}
    <g stroke="#38bdf8" strokeOpacity="0.55" strokeWidth="1.4">
      <Path reduced={reduced} delay={0.1} d="M-20 300 C 90 260, 150 320, 250 280 S 430 220, 660 260" />
      <Path reduced={reduced} delay={0.25} d="M-20 260 C 100 220, 160 280, 260 240 S 440 180, 660 220" />
      <Path reduced={reduced} delay={0.4} d="M-20 220 C 110 180, 170 240, 270 200 S 450 140, 660 180" />
      <Path reduced={reduced} delay={0.55} d="M-20 180 C 120 140, 180 200, 280 160 S 460 100, 660 140" />
      <Path reduced={reduced} delay={0.7} d="M-20 140 C 130 100, 190 160, 290 120 S 470 60, 660 100" />
    </g>
    {/* boundary polygon */}
    <Path
      reduced={reduced}
      delay={0.5}
      duration={1.2}
      d="M150 90 L360 60 L480 130 L430 260 L210 300 L120 200 Z"
      stroke="#e89224"
      strokeWidth="1.8"
      strokeDasharray="6 4"
    />
    {/* boundary corner markers */}
    {[[150, 90], [360, 60], [480, 130], [430, 260], [210, 300], [120, 200]].map(([x, y], i) => (
      <Dot key={i} cx={x} cy={y} r={4} delay={0.9 + i * 0.12} reduced={reduced} fill="#e89224" />
    ))}
    {/* DGPS points with crosshair */}
    {[[250, 170], [380, 180], [290, 235]].map(([x, y], i) => (
      <Fade key={i} delay={1.2 + i * 0.15} reduced={reduced}>
        <circle cx={x} cy={y} r="9" fill="none" stroke="#34d399" strokeWidth="1.4" />
        <Dot cx={x} cy={y} r={3} delay={1.2 + i * 0.15} reduced={reduced} fill="#34d399" />
        <line x1={x - 14} y1={y} x2={x - 9} y2={y} stroke="#34d399" strokeWidth="1.4" />
        <line x1={x + 9} y1={y} x2={x + 14} y2={y} stroke="#34d399" strokeWidth="1.4" />
        <line x1={x} y1={y - 14} x2={x} y2={y - 9} stroke="#34d399" strokeWidth="1.4" />
        <line x1={x} y1={y + 9} x2={x} y2={y + 14} stroke="#34d399" strokeWidth="1.4" />
      </Fade>
    ))}
    {/* elevation label */}
    <Fade delay={1.6} reduced={reduced}>
      <text x="505" y="330" fill="#94a3b8" fontSize="11" fontFamily="monospace">EL. +128.40</text>
    </Fade>
  </svg>
);

/* Approvals — checklist document with stamp and seal */
const ApprovalsVisual = ({ reduced }) => (
  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
    <Backdrop />
    <Fade delay={0.1} reduced={reduced}>
      <rect x="215" y="40" width="210" height="285" rx="8" fill="#101f31" stroke="#33465c" strokeWidth="1.4" />
      <rect x="215" y="40" width="210" height="34" rx="8" fill="#16283d" />
    </Fade>
    <Path reduced={reduced} delay={0.3} d="M240 57 h80" stroke="#e89224" strokeWidth="3" strokeLinecap="round" />
    {/* document rows with checkbox ticks */}
    {[110, 150, 190, 230].map((y, i) => (
      <g key={i}>
        <Path reduced={reduced} delay={0.4 + i * 0.15} d={`M240 ${y} l7 7 l12 -14`} stroke="#34d399" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <Path reduced={reduced} delay={0.45 + i * 0.15} d={`M268 ${y + 4} h${120 - i * 14}`} stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      </g>
    ))}
    {/* stamp */}
    <motion.g
      initial={reduced ? false : { opacity: 0, scale: 1.6 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1, transition: { delay: 1.1, duration: 0.45, ease: "easeOut" } }}
      viewport={{ once: true, amount: 0.4 }}
      style={{ transformBox: "fill-box", transformOrigin: "center" }}
    >
      <circle cx="360" cy="290" r="34" fill="none" stroke="#e89224" strokeWidth="2.4" />
      <circle cx="360" cy="290" r="27" fill="none" stroke="#e89224" strokeWidth="1" strokeDasharray="3 3" />
      <text x="360" y="294" textAnchor="middle" fill="#e89224" fontSize="12" fontWeight="700" fontFamily="monospace">NOC</text>
    </motion.g>
    {/* seal ribbon */}
    <Fade delay={1.4} reduced={reduced}>
      <path d="M120 300 l18 -18 l14 10 l-4 22 z" fill="#16283d" stroke="#33465c" strokeWidth="1" />
      <circle cx="140" cy="275" r="16" fill="none" stroke="#e89224" strokeWidth="1.6" strokeDasharray="4 3" />
    </Fade>
    <Fade delay={1.5} reduced={reduced}>
      <text x="470" y="60" fill="#94a3b8" fontSize="11" fontFamily="monospace">DTCP / RERA</text>
    </Fade>
  </svg>
);

/* Consultancy — building elevation + plan + dimension lines */
const ConsultancyVisual = ({ reduced }) => (
  <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
    <Backdrop />
    {/* building elevation */}
    <Path reduced={reduced} delay={0.15} d="M90 300 V120 H250 V300" stroke="#38bdf8" strokeWidth="1.8" />
    <Path reduced={reduced} delay={0.35} d="M90 120 H250" stroke="#38bdf8" strokeWidth="1.8" />
    <Path reduced={reduced} delay={0.5} d="M90 300 H250" stroke="#38bdf8" strokeWidth="1.8" />
    <Path reduced={reduced} delay={0.55} d="M120 300 V180 H150 V300 M190 300 V180 H220 V300" stroke="#38bdf8" strokeOpacity="0.7" strokeWidth="1.4" />
    <Path reduced={reduced} delay={0.7} d="M120 210 H150 M190 210 H220" stroke="#38bdf8" strokeOpacity="0.5" strokeWidth="1.2" />
    {/* floor plan block */}
    <Path reduced={reduced} delay={0.6} d="M330 90 H560 V300 H330 Z" stroke="#e89224" strokeWidth="1.8" />
    <Path reduced={reduced} delay={0.8} d="M330 180 H470 V300 M470 140 H560" stroke="#e89224" strokeWidth="1.4" strokeOpacity="0.8" />
    <Path reduced={reduced} delay={0.95} d="M330 250 H420" stroke="#e89224" strokeWidth="1.4" strokeOpacity="0.8" />
    {/* dimension lines */}
    <Path reduced={reduced} delay={1.1} d="M90 325 H560" stroke="#34d399" strokeWidth="1.2" />
    <Path reduced={reduced} delay={1.2} d="M90 318 v14 M560 318 v14" stroke="#34d399" strokeWidth="1.2" />
    <Path reduced={reduced} delay={1.25} d="M300 70 v250" stroke="#34d399" strokeWidth="1" strokeDasharray="4 4" />
    <Fade delay={1.4} reduced={reduced}>
      <text x="305" y="345" fill="#34d399" fontSize="11" fontFamily="monospace">24.50 M</text>
      <text x="60" y="70" fill="#94a3b8" fontSize="11" fontFamily="monospace">+12.00</text>
    </Fade>
  </svg>
);

const VISUALS = {
  "digital-survey-marking": SurveyVisual,
  approvals: ApprovalsVisual,
  consultancy: ConsultancyVisual,
};

const ServiceVisual = ({ service }) => {
  const reduced = useReducedMotion();
  const Visual = VISUALS[service?.slug];

  if (!Visual) {
    // Accessible fallback: keep the existing photographic asset
    return (
      <>
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" aria-hidden="true" />
      </>
    );
  }

  return (
    <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
      <Visual reduced={reduced} />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" aria-hidden="true" />
    </div>
  );
};

export default ServiceVisual;
