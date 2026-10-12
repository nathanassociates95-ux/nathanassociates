import {
  Boxes,
  Building2,
  Calculator,
  ClipboardList,
  Compass,
  DraftingCompass,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { getServiceScope } from "@/lib/serviceScope";
import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import IconGrid from "@/components/IconGrid";
import NumberedSteps from "@/components/NumberedSteps";
import CheckPanel from "@/components/CheckPanel";
import ServiceCardGrid from "@/components/ServiceCardGrid";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = {
  title: "Consultancy | Nathan Associates",
  description:
    "Consultancy by Nathan Associates - soil testing (SPT, ERT, CBT, Plate Load), ground water survey, quantity survey, land & building valuation, 2D/3D design, structural & architectural design, BIM modelling, GIS & DTM design, stability certificates and project management consultancy (PMC).",
  keywords: [
    "Consultancy",
    "Soil Test",
    "SPT",
    "ERT",
    "CBT",
    "Plate Load Test",
    "Ground Water Survey",
    "Quantity Survey",
    "Land & Building Valuation",
    "2D / 3D Plan & Designing",
    "Structural & Architectural Designing",
    "BIM Model & Design",
    "GIS Design & DTM Design",
    "Stability Certificate",
    "Project Management Consultancy",
    "PMC",
    "Design Consultancy",
    "Site Assessment",
  ],
};

const service = getServiceBySlug("consultancy");
const scope = getServiceScope("consultancy");

const applicability = [
  {
    title: "New Construction",
    note: "Site assessments, soil tests and design support before a project begins.",
    icon: Building2,
  },
  {
    title: "Property Purchase or Sale",
    note: "Valuation support that gives you a clearer picture of a property's value.",
    icon: Calculator,
  },
  {
    title: "Existing Structures",
    note: "Stability assessment before reuse, extension or renovation of what is already built.",
    icon: ShieldCheck,
  },
  {
    title: "Design & Coordination",
    note: "2D/3D planning, BIM, GIS and PMC support for projects needing structured delivery.",
    icon: DraftingCompass,
  },
];

const engagementNotes = [
  {
    title: "Advice Matched to Stage",
    note: "The depth of support matches where your project actually is - an idea, a design stage or a site in progress.",
    icon: Compass,
  },
  {
    title: "Aligned With Survey Work",
    note: "Where a project needs survey data alongside technical input, both can be coordinated within the same engagement.",
    icon: Boxes,
  },
  {
    title: "Documentation That Carries Forward",
    note: "Outputs are prepared so they stay useful for approvals, execution and later stages of the project.",
    icon: ClipboardList,
  },
  {
    title: "One Point of Contact",
    note: "A single, dependable contact for your assessment, design and project coordination needs.",
    icon: Search,
  },
];

const lifecycleStages = [
  {
    step: "01",
    title: "Planning & Assessment",
    note: "Surveys and assessments that inform your decisions before heavy commitments.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design & Documentation",
    note: "Plans, drawings and models that make the project clear and buildable.",
    icon: DraftingCompass,
  },
  {
    step: "03",
    title: "Estimation & Valuation",
    note: "Quantity and valuation support for budgeting and decision-making.",
    icon: Calculator,
  },
  {
    step: "04",
    title: "Coordination & Execution",
    note: "Project management support that keeps planning and delivery aligned.",
    icon: Workflow,
  },
];

const expectations = [
  "A clear understanding of your site, project and objectives",
  "Practical technical input from assessment through design",
  "Honest guidance on the right approach for your situation",
  "Well-organised documentation and coordination support",
  "A single, dependable point of contact for your project needs",
];

export default function ConsultancyPage() {
  return (
    <>
      <ServiceHero
        title={service.title}
        crumb="Consultancy"
        summary={service.summary}
        image={service.heroImage}
        alt="Consultancy and technical work"
        whatsapp="919787248999"
        waText="Hello, I would like to enquire about Consultancy"
        phone="+919787248999"
        phoneDisplay="+91 97872 48999"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Consultancy Overview"
              title="Technical Support Across the Project Journey"
              description="A good project depends on good information. Consultancy at NATHAN ASSOCIATES covers the practical and technical aspects around construction - understanding the ground, valuing property, preparing plans and designs, and coordinating the work from planning through to execution."
            />
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Whether you are at the very beginning of an idea or already mid-project, our
              consultancy support helps clarify what is needed and keeps the different parts of your
              project working together. The scope below covers all {service.services.length}{" "}
              consultancy services, grouped by the stage of the project they support.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden p-0">
              <img
                src="/img/consulting.png"
                alt="Consultancy and design work in progress"
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
            title="Consultancy Service Scope"
            description="Grouped by the stage of the project each service supports. Every service below is explained in plain language, with the typical reason a client needs it."
          />
          <ServiceCardGrid slug="consultancy" />
        </div>
      </section>

      {/* Applicability */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="When You Need Consultancy"
            title="Where Consultancy Helps Most"
            description="These are the situations where consultancy support brings the most value to a project."
          />
          <IconGrid items={applicability} lgCols={2} />
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Project Lifecycle Support"
            title="Support at Every Stage"
            description="Consultancy can step in at different points in a project's journey - from the first assessment to final coordination."
          />
          <NumberedSteps steps={lifecycleStages} lgCols={4} />
        </div>
      </section>

      {/* Engagement + expectations */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How We Engage"
              title="Support That Fits Your Project"
              description="Consultancy is not a fixed package. The engagement is shaped around the stage your project has reached."
            />
            <IconGrid items={engagementNotes} lgCols={2} />
          </div>
          <div className="lg:pt-12">
            <CheckPanel title="What You Can Expect as a Client" items={expectations} />
          </div>
        </div>
      </section>

      <EnquiryCta
        title="Let's discuss your project"
        description="Whether you need a soil test, a valuation, a design or full project coordination - tell us what you are planning and we will advise on the right first step."
        primaryLabel="Start a Conversation"
        whatsapp="919787248999"
        waText="Hello, I would like to enquire about Consultancy"
      />
    </>
  );
}
