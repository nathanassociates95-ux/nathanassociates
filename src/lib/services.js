import { getServiceNames } from "@/lib/serviceScope";

export const SERVICES = [
  {
    slug: "digital-survey-marking",
    title: "Digital Survey & Marking",
    tagline: "Precise geo-spatial data for confident project planning",
    summary:
      "Digital Survey & Marking delivers accurate, technology-driven geo-spatial data using modern surveying instruments. We measure and map land, roads, layouts and structures so clients can plan with confidence, resolve boundary questions and execute projects on solid ground.",
    cardSummary:
      "Surveying and marking for land, infrastructure and construction - from boundaries and levels to layouts and alignment.",
    overviewPoints: [
      "Topographical, Contour, FMB & Cadastral",
      "Boundary, Layout & Sub Division Marking",
      "DGPS, Drone / Airline, Road & Pipeline Survey",
    ],
    image: "/img/surbey.png",
    heroImage: "/images/dgps.jpg",
    highlights: [
      "Accurate field data captured with modern instruments",
      "Clear, easy-to-read survey reports and drawings",
      "On-site marking for construction and layout work",
      "Support for land subdivision, roads and infrastructure",
    ],
    whatsapp: "+917397133223",
    href: "/services/digital-survey-marking",
  },
  {
    slug: "approvals",
    title: "Approvals",
    tagline: "Land and building approvals handled the right way",
    summary:
      "Approvals helps clients move through land and building approval procedures with clear documentation and careful follow-up. We prepare the required paperwork and work with the relevant procedures step by step so projects can proceed without avoidable delays.",
    cardSummary:
      "Approval support for land, building and development projects - from understanding the route to preparing documentation and following up.",
    overviewPoints: [
      "DTCP / RERA & Building Plan Approval",
      "Commercial, Industrial & Local Body Approvals",
      "NOC, Land Conversion & Regularisation",
    ],
    image: "/images/approve.png",
    heroImage: "/images/home-approve.jpeg",
    highlights: [
      "Documentation and process support",
      "Guidance on the applicable approval route",
      "Help preparing information and submissions",
      "Practical support for project planning",
    ],
    whatsapp: "+919787240999",
    href: "/services/approvals",
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    tagline: "Technical guidance from design to project delivery",
    summary:
      "Consultancy brings practical technical support to every stage of a project. From soil testing and valuation to 2D/3D design, structural work, BIM modelling and project management, we help clients make informed decisions and keep delivery on track.",
    cardSummary:
      "Technical support across the project journey - from soil and ground assessment to design, BIM, GIS and project management.",
    overviewPoints: [
      "Soil Test (SPT, ERT, CBT, Plate Load)",
      "Quantity Survey, Valuation & 2D / 3D Design",
      "Structural, BIM, GIS / DTM & PMC",
    ],
    image: "/img/consulting.png",
    heroImage: "/images/consulting.png",
    highlights: [
      "Specialist inputs before construction begins",
      "Design and modelling support for better clarity",
      "Reliable quantity and valuation assistance",
      "Project management for coordinated delivery",
    ],
    whatsapp: "+919787248999",
    href: "/services/consultancy",
  },
].map((service) => ({
  ...service,
  services: getServiceNames(service.slug),
}));

export const getServiceBySlug = (slug) =>
  SERVICES.find((service) => service.slug === slug);
