import {
  Boxes,
  Building2,
  Calculator,
  ClipboardList,
  DraftingCompass,
  Droplets,
  FlaskConical,
  Lightbulb,
  Scale,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import IconGrid from "@/components/IconGrid";
import NumberedSteps from "@/components/NumberedSteps";
import CheckPanel from "@/components/CheckPanel";
import EnquiryCta from "@/components/EnquiryCta";

export const metadata = {
  title: "Consultancy | Nathan Associates",
  description:
    "Consultancy by Nathan Associates - soil testing, groundwater survey, quantity survey, land & building valuation, 2D/3D design, structural & architectural design, BIM modelling, stability certificates and project management consultancy (PMC).",
  keywords: [
    "Consultancy",
    "Soil Test",
    "Ground Water Survey",
    "Quantity Survey",
    "Land & Building Valuation",
    "2D / 3D Plan & Designing",
    "Structural & Architectural Designing",
    "BIM Model & Design",
    "Stability Certificate",
    "Project Management Consultancy",
    "PMC",
    "Design Consultancy",
    "Site Assessment",
  ],
};

const service = getServiceBySlug("consultancy");

const capabilities = [
  { title: "Soil Test", note: "Assessment of ground conditions to support safe, well-planned construction.", icon: FlaskConical },
  { title: "Ground Water Survey", note: "Investigation of water availability and site conditions below the surface.", icon: Droplets },
  { title: "Quantity Survey", note: "Estimation and measurement support for planning project quantities and costs.", icon: Calculator },
  { title: "Land & Building Valuation", note: "Valuation support for land and buildings to assist informed decisions.", icon: Scale },
  { title: "2D / 3D Plan & Designing", note: "Two and three dimensional planning and design for clearer project visualisation.", icon: DraftingCompass },
  { title: "Structural / Architectural Designing", note: "Design support covering structural and architectural aspects of a project.", icon: Building2 },
  { title: "BIM Model & Design", note: "Building Information Modelling to coordinate design data in a structured way.", icon: Boxes },
  { title: "Stability Certificate", note: "Assessment on the stability of structures to support ongoing use or work.", icon: ShieldCheck },
  { title: "Project Management Consultancy (PMC)", note: "Coordination and management support through project planning and execution.", icon: ClipboardList },
];

const detailedServices = [
  { title: "Soil Test", note: "Before construction begins, soil testing gives you information about the ground your structure will sit on - supporting safer, more realistic design and planning decisions.", icon: FlaskConical },
  { title: "Ground Water Survey", note: "Ground water surveys investigate water availability and characteristics below the surface, supporting water sourcing, drainage and site development decisions.", icon: Droplets },
  { title: "Quantity Survey", note: "Quantity surveying helps quantify materials, works and costs, giving you a clearer picture of quantities and estimates before work begins.", icon: Calculator },
  { title: "Land & Building Valuation", note: "Valuation provides an assessment of value for properties, supporting decisions around buying, selling, financing and development planning.", icon: Scale },
  { title: "2D / 3D Plan & Designing", note: "From two dimensional layouts to three dimensional visualisation, planning helps you see what is proposed before it is built.", icon: DraftingCompass },
  { title: "Structural / Architectural Designing", note: "Design support that balances appearance, function and the structural considerations of a building or facility.", icon: Building2 },
  { title: "BIM Model & Design", note: "Building Information Modelling organises design information into coordinated digital models for better collaboration.", icon: Boxes },
  { title: "Stability Certificate", note: "An assessment of a structure's stability, often relevant before reuse, extension or other work.", icon: ShieldCheck },
  { title: "Project Management Consultancy (PMC)", note: "PM consultancy brings coordination across planning, scheduling and follow-through so project pieces stay aligned.", icon: ClipboardList },
];

const lifecycleStages = [
  { step: "01", title: "Planning & Assessment", note: "Surveys and assessments that inform your decisions before heavy commitments.", icon: Search },
  { step: "02", title: "Design & Documentation", note: "Plans, drawings and models that make the project clear and buildable.", icon: DraftingCompass },
  { step: "03", title: "Estimation & Valuation", note: "Quantity and valuation support for budgeting and decision-making.", icon: Calculator },
  { step: "04", title: "Coordination & Execution", note: "Project management support that keeps planning and delivery aligned.", icon: Workflow },
];

const applicability = [
  { title: "New Construction", note: "Site assessments, soil tests and design support before a project begins.", icon: Building2 },
  { title: "Property Purchase or Sale", note: "Valuation support that gives you a clearer picture of a property's value.", icon: Scale },
  { title: "Existing Structures", note: "Stability assessment and condition review before reuse or renovation.", icon: ShieldCheck },
  { title: "Design & Coordination", note: "2D/3D planning, BIM and PMC support for projects needing structured delivery.", icon: Lightbulb },
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
        whatsapp="919787250999"
        waText="Hello, I would like to enquire about Consultancy"
      />

      {/* Overview */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Consultancy Overview"
              title="Technical Support Across the Project Journey"
              description="A good project depends on good information. Consultancy at Nathan Associates covers the practical and technical aspects around construction - understanding the ground, valuing property, preparing plans and designs, and coordinating the work from planning through to execution."
            />
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Whether you are at the very beginning of an idea or already mid-project, our
              consultancy support helps clarify what is needed and keeps the different parts of
              your project working together.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="card overflow-hidden p-0">
              <img
                src="/images/consulting.jpg"
                alt="Consultancy and design work in progress"
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
            eyebrow="Consultancy Capabilities"
            title="What We Offer"
            description="Nine specialised consulting services, each delivered with clear and honest guidance."
          />
          <IconGrid items={capabilities} lgCols={3} />
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Detailed Services"
            title="What Each Service Involves"
            description="A closer look at how each consultancy service helps you."
          />
          <IconGrid items={detailedServices} lgCols={3} />
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

      {/* Applicability + expectations */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who This Is For"
              title="Where Consultancy Helps Most"
              description="These are the situations where consultancy support brings the most value."
            />
            <IconGrid items={applicability} lgCols={2} />
          </div>
          <div className="lg:pt-12">
            <CheckPanel
              title="What You Can Expect as a Client"
              items={expectations}
            />
          </div>
        </div>
      </section>

      <EnquiryCta
        title="Let's discuss your project"
        description="Whether you need a soil test, a valuation, a design or full project coordination - tell us what you are planning and we will advise on the right first step."
        primaryLabel="Start a Conversation"
        whatsapp="919787250999"
        waText="Hello, I would like to enquire about Consultancy"
      />
    </>
  );
}