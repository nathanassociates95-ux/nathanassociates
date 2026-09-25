import {
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  FolderCheck,
  Landmark,
  MapPin,
  Scale,
  Search,
  Stamp,
  Workflow,
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
  title: "Approvals | Nathan Associates",
  description:
    "Approval support by Nathan Associates - DTCP, RERA, building plan, commercial, industrial, Panchayat, Corporation and HACA approvals, NOC certificates, land conversion, regularisation, single plot approval and unapproved plot regularisation.",
  keywords: [
    "Approvals",
    "DTCP Approval",
    "RERA Approval",
    "Building Plan Approval",
    "Commercial Approval",
    "Industrial Approval",
    "Panchayat Approval",
    "Corporation Approval",
    "NOC Certificate Approval",
    "Land Conversion",
    "Regularisation",
    "HACA Approval",
    "Single Plot Approval",
    "Unapproved Plot Regularisation",
    "Approval Assistance",
    "Approval Documentation",
  ],
};

const service = getServiceBySlug("approvals");
const scope = getServiceScope("approvals");

const situations = [
  {
    title: "Starting a New Building",
    note: "A house, apartment or commercial building that needs a sanctioned plan before construction starts.",
    icon: Building2,
  },
  {
    title: "Changing the Use of Land",
    note: "Land that must be converted before it can be built on, sold or developed as planned.",
    icon: Scale,
  },
  {
    title: "Layouts & Plot Sales",
    note: "Layout and single-plot approvals needed before plots are marketed or sold.",
    icon: MapPin,
  },
  {
    title: "Unapproved or Disputed Plots",
    note: "Plots without completed paperwork, including inherited or purchased land.",
    icon: FolderCheck,
  },
  {
    title: "Industrial & Facility Projects",
    note: "Industrial land, factories and facilities with additional departmental clearances.",
    icon: Workflow,
  },
  {
    title: "NOC From Another Department",
    note: "Plots or projects that cannot proceed without a no-objection certificate.",
    icon: Stamp,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand the Requirement",
    note: "We start by listening to your project, land and what you are trying to achieve.",
    icon: Search,
  },
  {
    step: "02",
    title: "Identify Applicable Approval",
    note: "We help you understand which approval category likely applies to your situation.",
    icon: Landmark,
  },
  {
    step: "03",
    title: "Prepare / Review Information",
    note: "We guide you on the information and documents your application may need.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Submission & Coordination",
    note: "We help prepare the application and coordinate with the relevant process.",
    icon: ClipboardList,
  },
  {
    step: "05",
    title: "Follow-Up & Status Assistance",
    note: "We stay engaged, tracking the status and helping you respond to requirements.",
    icon: CheckCircle2,
  },
];

const whoFor = [
  {
    title: "Individual Property Owners",
    note: "Homeowners and land owners planning construction, conversion or regularisation.",
    icon: Building2,
  },
  {
    title: "Developers & Builders",
    note: "Those developing layouts, commercial or industrial projects that need approvals.",
    icon: FolderCheck,
  },
  {
    title: "Businesses & Institutions",
    note: "Organisations establishing facilities that require applicable approvals.",
    icon: Stamp,
  },
  {
    title: "Anyone Facing Hold-Ups",
    note: "Clients dealing with documentation questions who want clear, practical guidance.",
    icon: FileText,
  },
];

const deliverables = [
  "A clear explanation of the approval path relevant to your project",
  "Guidance on the information and documents to arrange",
  "Assistance with preparing applications and submissions",
  "Coordination and follow-up through the process",
  "Honest, practical advice at every step of your journey",
];

export default function ApprovalsPage() {
  return (
    <>
      <ServiceHero
        title={service.title}
        crumb="Approvals"
        summary={service.summary}
        image={service.heroImage}
        alt="Approval process and documentation"
        whatsapp="919787240999"
        waText="Hello, I would like to enquire about Approvals"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Understanding Approvals"
              title="Why Approval Processes Matter"
              description="For any development - a home, a commercial building, a layout or an industrial site - approvals help ensure the work fits within the rules that apply to the location."
            />
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              The right approval depends on the type of project, where the land is located and the
              records that already exist. Nathan Associates helps you understand what is actually
              needed, prepare the correct information, and move through the process with clear
              guidance at every step. Our approvals scope covers {service.services.length} service
              categories, from statutory sanction through to plot regularisation.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden p-0">
              <img
                src="/images/approve.png"
                alt="Approval documents prepared for submission"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approval scope */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Approval &amp; Service Categories"
            title="What We Cover"
            description="Every category below is a service we support. Each one explains what it concerns and when a client typically needs it."
          />
          <ServiceScope groups={scope} />
        </div>
      </section>

      {/* Situations */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="When To Call Us"
            title="Situations That Need Approval Support"
            description="If any of the following sounds like your project, the relevant approval is likely part of what you need to resolve."
          />
          <IconGrid items={situations} lgCols={3} />
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How We Work With You"
            title="How We Support You Through Approval"
            description="Approval journeys differ by project and location - this is the way we work with you through yours."
          />
          <NumberedSteps steps={processSteps} lgCols={5} />
        </div>
      </section>

      {/* Who + expectations */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who This Service Is For"
              title="Anyone Moving a Property or Project Forward"
              description="If you are building, converting, regularising or developing, our approval support can help you understand and manage the paperwork."
            />
            <IconGrid items={whoFor} lgCols={2} />
          </div>
          <div className="lg:pt-12">
            <CheckPanel title="What You Can Expect as a Client" items={deliverables} />
          </div>
        </div>
      </section>

      <EnquiryCta
        title="Not sure which approval applies to you?"
        description="Tell us what you are building, converting or regularising - we will explain the likely path and what to prepare, without any obligation."
        primaryLabel="Discuss Your Approval"
        whatsapp="919787240999"
        waText="Hello, I would like to enquire about Approvals"
      />
    </>
  );
}
