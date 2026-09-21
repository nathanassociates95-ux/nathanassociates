import {
  CheckCircle2,
  ClipboardList,
  Compass,
  Crosshair,
  FileText,
  Layers,
  Map,
  MapPin,
  Ruler,
  Search,
  Target,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import IconGrid from "@/components/IconGrid";
import NumberedSteps from "@/components/NumberedSteps";
import CheckPanel from "@/components/CheckPanel";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = {
  title: "Digital Survey & Marking | Nathan Associates",
  description:
    "Digital Survey & Marking by Nathan Associates - topographical, contour, FMB, boundary, DGPS, drone, road, layout, sub division surveys and on-site marking for planning and construction projects.",
  keywords: [
    "Digital Survey & Marking",
    "Topographical Survey",
    "Contour Survey",
    "FMB Survey",
    "Boundary Survey",
    "As-Built Survey",
    "DGPS Survey",
    "GPS Survey",
    "Drone Survey",
    "Cadastral Survey",
    "Pipeline Survey",
    "Road Survey and Marking",
    "Layout Survey and Marking",
    "Sub Division Survey",
    "Level Transfer",
    "Petrol Bunk Marking",
    "Survey Marking",
  ],
};

const service = getServiceBySlug("digital-survey-marking");

const capabilityGroups = [
  {
    title: "Land, Boundary & Documentation",
    intro: "Surveys that establish what a site really is - its shape, size, boundaries and features.",
    icon: Map,
    items: [
      { name: "Topographical Survey", note: "Captures ground features and natural levels of a site." },
      { name: "Contour Survey", note: "Maps the site's slope and elevation changes." },
      { name: "FMB Survey", note: "Field measurement book survey for land records." },
      { name: "Boundary Survey / Marking", note: "Establishes and marks property boundary lines." },
      { name: "Cadastral Survey", note: "Identifies land parcels and their official limits." },
    ],
  },
  {
    title: "Positioning, Aerial & Leveling",
    intro: "Technology-backed surveys that deliver precise coordinates, aerial views and level data.",
    icon: Crosshair,
    items: [
      { name: "DGPS and GPS Survey", note: "Satellite positioning for accurate site coordinates." },
      { name: "Drone / Aerial Survey", note: "Aerial mapping for large or difficult to reach sites." },
      { name: "As-Built Survey", note: "Records the actual position of completed structures." },
      { name: "Level Transfer / Marking", note: "Transfers reference levels across a site for execution." },
    ],
  },
  {
    title: "Infrastructure & Utilities",
    intro: "Alignment and marking support for roads, pipelines and working sites.",
    icon: MapPin,
    items: [
      { name: "Pipeline Survey / Marking", note: "Route surveys and marking for pipeline works." },
      { name: "Oil and Gas Survey", note: "Site surveys and marking for oil and gas installations." },
      { name: "Road Survey and Marking", note: "Survey, alignment and marking for road projects." },
      { name: "Construction Sector Marking", note: "On-site marking that guides construction execution." },
    ],
  },
  {
    title: "Layouts, Alignment & Specialised Marking",
    intro: "Precise layout and alignment marking for plots, machines and fuel stations.",
    icon: Layers,
    items: [
      { name: "Layout Survey and Marking", note: "Sets out plot layouts on the ground as per plan." },
      { name: "Sub Division Survey and Marking", note: "Divides land into individual plots with clear marks." },
      { name: "Bed Bolt Alignment Marking", note: "Precise alignment marking for machine bed bolts." },
      { name: "Petrol Bunk Marking / Survey", note: "Layout and marking surveys for petrol bunk sites." },
    ],
  },
];

const applications = [
  {
    title: "Plot & Land Buying",
    note: "Verify boundaries, area and records before you buy or sell land.",
    icon: MapPin,
  },
  {
    title: "Layout Development",
    note: "Divide land into marketable plots with accurate layout marking.",
    icon: Layers,
  },
  {
    title: "New Construction Planning",
    note: "Start from accurate site levels, features and boundaries.",
    icon: Compass,
  },
  {
    title: "Road & Infrastructure Works",
    note: "Survey and marking for roads, pipelines and service lines.",
    icon: Map,
  },
  {
    title: "On-Site Execution",
    note: "Keep construction aligned with the approved plan and levels.",
    icon: Target,
  },
  {
    title: "Post-Construction Records",
    note: "As-built surveys that document what was actually built.",
    icon: FileText,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    note: "We listen to your site, its purpose and what you need to know, measure or achieve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Survey Planning",
    note: "We decide the right survey type, instruments and approach for your project.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Field Data Collection",
    note: "Our team captures accurate measurements and site data on the ground.",
    icon: Ruler,
  },
  {
    step: "04",
    title: "Processing & Analysis",
    note: "Field data is processed, checked and prepared into clear, usable results.",
    icon: Compass,
  },
  {
    step: "05",
    title: "Deliverables & Support",
    note: "You receive clear outputs, and we stay available as your project moves ahead.",
    icon: CheckCircle2,
  },
];

const whyClients = [
  {
    title: "Accuracy You Can Rely On",
    note: "Measurements taken with modern instruments and careful on-site work.",
    icon: Target,
  },
  {
    title: "Clarity for Planning",
    note: "Clear site data that makes decisions and designs easier to make.",
    icon: Compass,
  },
  {
    title: "Documentation That Supports You",
    note: "Survey results and records that support purchases, approvals and records.",
    icon: FileText,
  },
  {
    title: "Support Beyond the Survey",
    note: "Ongoing marking and guidance through planning and execution.",
    icon: Crosshair,
  },
];

const deliverables = [
  "Field measurements and marked points on your site",
  "Survey notes and sketches of the measured area",
  "A clear summary of the site's features, boundaries and levels",
  "Marking that guides layout, boundary and construction work",
  "Regular coordination as your project progresses",
];

export default function DigitalSurveyMarkingPage() {
  return (
    <>
      <ServiceHero
        title={service.title}
        crumb="Digital Survey & Marking"
        summary={service.summary}
        image={service.heroImage}
        alt="Surveyor working with a GPS instrument on site"
        whatsapp="919787240999"
        waText="Hello, I would like to enquire about Digital Survey & Marking"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Service Overview"
              title="Accurate Measurements, Clear Decisions"
              description="Surveying is the foundation of good planning. Before a site is designed, subdivided, built on or sold, someone has to know exactly what is on the ground - where the boundaries are, how the land slopes, and what features it holds."
            />
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Nathan Associates captures that information using modern instruments and careful
              field work, then translates it into measurements, markings and reports you can
              plan, design and build from - with confidence.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden p-0">
              <img
                src="/images/digital-survey.webp"
                alt="Digital surveying equipment being set up in the field"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Service Capabilities"
            title="What We Cover"
            description="Every capability below is a supported part of our Digital Survey &amp; Marking service."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {capabilityGroups.map((group) => (
              <div key={group.title} className="card p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="icon-chip">
                    <group.icon size={19} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{group.intro}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-gray-800">
                        <span className="font-semibold text-gray-900">{item.name}</span>{" "}
                        <span className="text-slate-600">- {item.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Typical Applications"
            title="Where This Service Helps"
            description="These are common situations where accurate surveying and marking makes a real difference."
          />
          <IconGrid items={applications} lgCols={3} />
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple, Clear Process"
            description="From first conversation to final deliverable, you always know where your project stands."
          />
          <NumberedSteps steps={processSteps} lgCols={5} />
        </div>
      </section>

      {/* Why + Deliverables */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Clients Work With Us"
              title="Surveying You Can Build On"
            />
            <IconGrid items={whyClients} lgCols={2} />
          </div>
          <div className="lg:pt-12">
            <CheckPanel title="What You Receive" items={deliverables} />
          </div>
        </div>
      </section>

      <EnquiryCta
        title="Need a survey or marking done right?"
        description="Tell us about your site and what you need - our team will come back with a clear scope and a practical plan."
        primaryLabel="Request a Survey"
        whatsapp="919787240999"
        waText="Hello, I would like to enquire about Digital Survey & Marking"
      />
    </>
  );
}