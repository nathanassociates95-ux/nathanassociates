import {
  CheckCircle2,
  ClipboardList,
  Compass,
  FileText,
  Layers,
  Map,
  MapPin,
  Ruler,
  Search,
  Target,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { getServiceScope } from "@/lib/serviceScope";
import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import IconGrid from "@/components/IconGrid";
import NumberedSteps from "@/components/NumberedSteps";
import CheckPanel from "@/components/CheckPanel";
import ServiceScope from "@/components/ServiceScope";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = {
  title: "Digital Survey & Marking | Nathan Associates",
  description:
    "Digital Survey & Marking by Nathan Associates - topographical, contour, FMB, cadastral, boundary, as-built, DGPS and GPS, drone or airline, road, pipeline, oil and gas, layout, sub division and specialised marking surveys.",
  keywords: [
    "Digital Survey & Marking",
    "Topographical Survey",
    "Contour Survey",
    "FMB Survey",
    "Boundary Survey / Marking",
    "As-Built Survey",
    "DGPS and GPS Survey",
    "Drone / Airline Survey",
    "Cadastral Survey",
    "Pipeline Survey / Marking",
    "Oil and Gas Survey",
    "Road Survey and Marking",
    "Layout Survey and Marking",
    "Sub Division Survey and Marking",
    "Construction Sector Marking",
    "Level Transfer Marking",
    "Bed Bolt Alignment Marking",
    "Petrol Bunk Marking / Survey",
    "Survey Marking",
  ],
};

const service = getServiceBySlug("digital-survey-marking");
const scope = getServiceScope("digital-survey-marking");

const applications = [
  {
    title: "Plot & Land Buying",
    note: "Check boundaries, parcel information and site features before a land transaction or development decision.",
    icon: MapPin,
  },
  {
    title: "Layout Development",
    note: "Survey and mark planned plots, roads and subdivision lines for a layout project.",
    icon: Layers,
  },
  {
    title: "New Construction Planning",
    note: "Start planning with site levels, physical features and boundary information.",
    icon: Compass,
  },
  {
    title: "Road & Infrastructure Works",
    note: "Survey and mark roads, pipelines and other utility alignments.",
    icon: Map,
  },
  {
    title: "On-Site Execution",
    note: "Use marking and level information to guide construction against the planned arrangement.",
    icon: Target,
  },
  {
    title: "Post-Construction Records",
    note: "Record completed work with an as-built survey for review and future reference.",
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
    icon: Map,
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
        whatsapp="919787133223"
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
              description="Surveying is the foundation of good planning. Before a site is designed, subdivided, built on or sold, the important questions include where the boundaries lie, how the land slopes and what physical features are present."
            />
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Nathan Associates captures that information using modern instruments and careful field
              work, then turns it into measurements, marked points, drawings and reports that can be
              used for planning, design and construction. Our scope covers {service.services.length}{" "}
              survey and marking capabilities across land, infrastructure and built environments.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden p-0">
              <img
                src="/img/surbey.png"
                alt="Digital surveying equipment being set up in the field"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service scope */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="What We Provide"
            title="Service Scope &amp; Survey Capabilities"
            description="Each capability below is explained in plain language - what it is, and the kind of project it is normally needed for."
          />
          <ServiceScope groups={scope} />
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Typical Applications"
            title="When You Need This Service"
            description="These are the common situations where accurate surveying and marking makes a real difference to the outcome."
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
        whatsapp="919787133223"
        waText="Hello, I would like to enquire about Digital Survey & Marking"
      />
    </>
  );
}
