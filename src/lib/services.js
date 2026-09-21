export const SERVICES = [
  {
    slug: "digital-survey-marking",
    title: "Digital Survey & Marking",
    tagline: "Precise geo-spatial data for confident project planning",
    summary:
      "Digital Survey & Marking delivers accurate, technology-driven geo-spatial data using modern surveying instruments. We measure and map land, roads, layouts and structures so clients can plan with confidence, resolve boundary questions and execute projects on solid ground.",
    cardSummary:
      "Surveying and marking that gives you accurate, usable site data - from boundaries and levels to layouts and alignment.",
    overviewPoints: [
      "Topographical / Boundary Survey",
      "DGPS / GPS / Drone Survey",
      "Layout / Road / Site Marking",
    ],
    image: "/images/digital-survey.webp",
    heroImage: "/images/dgps.jpg",
    highlights: [
      "Accurate field data captured with modern instruments",
      "Clear, easy-to-read survey reports and drawings",
      "On-site marking for construction and layout work",
      "Support for land subdivision, roads and infrastructure",
    ],
    services: [
      "Topographical Survey",
      "Contour Survey",
      "FMB Survey",
      "Boundary Survey / Marking",
      "As-Built Survey",
      "DGPS and GPS Survey",
      "Drone / Aerial Survey",
      "Cadastral Survey",
      "Pipeline Survey / Marking",
      "Oil and Gas Survey",
      "Road Survey and Marking",
      "Layout Survey and Marking",
      "Sub Division Survey and Marking",
      "Construction Sector Marking",
      "Level Transfer / Marking",
      "Bed Bolt Alignment Marking",
      "Petrol Bunk Marking / Survey",
    ],
    whatsapp: "+917397733223",
    href: "/services/digital-survey-marking",
  },
  {
    slug: "approvals",
    title: "Approvals",
    tagline: "Land and building approvals handled the right way",
    summary:
      "Approvals helps clients move through land and building approval procedures with clear documentation and careful follow-up. We prepare the required paperwork and work with the relevant procedures step by step so projects can proceed without avoidable delays.",
    cardSummary:
      "Assistance with land and building approvals - clear documentation, the right route and focused follow-up.",
    overviewPoints: [
      "DTCP / RERA Approval",
      "Building / Commercial / Industrial Approval",
      "NOC / Land Conversion / Regularisation",
    ],
    image: "/images/approve.png",
    heroImage: "/images/home-approve.jpeg",
    highlights: [
      "End-to-end documentation support",
      "Focused follow-up with relevant authorities",
      "Guidance on the right approval route for your project",
      "Practical advice before you commit to site work",
    ],
    services: [
      "DTCP / RERA Approval",
      "Building Plan Approval",
      "Commercial Approval",
      "Industrial Approval",
      "Panchayat Approval",
      "Corporation Approval",
      "NOC Certificate Approval",
      "Land Conversion",
      "Regularisation",
      "HACA Approval",
    ],
    whatsapp: "+917397733223",
    href: "/services/approvals",
  },
  {
    slug: "consultancy",
    title: "Consultancy",
    tagline: "Technical guidance from design to project delivery",
    summary:
      "Consultancy brings practical technical support to every stage of a project. From soil testing and valuation to 2D/3D design, structural work, BIM modelling and project management, we help clients make informed decisions and keep delivery on track.",
    cardSummary:
      "Technical support across the project journey - from soil testing and valuation to design, BIM and project management.",
    overviewPoints: [
      "Soil / Ground Water / Quantity Survey",
      "Valuation / 2D / 3D / Structural / Architectural",
      "BIM / Stability / PMC",
    ],
    image: "/images/consulting.jpg",
    heroImage: "/images/consulting.png",
    highlights: [
      "Specialist inputs before construction begins",
      "Design and modelling support for better clarity",
      "Reliable quantity and valuation assistance",
      "Project management for coordinated delivery",
    ],
    services: [
      "Soil Test",
      "Ground Water Survey",
      "Quantity Survey",
      "Land & Building Valuation",
      "2D / 3D Plan & Designing",
      "Structural / Architectural Designing",
      "BIM Model & Design",
      "Stability Certificate",
      "Project Management Consultancy (PMC)",
    ],
    whatsapp: "+919787250999",
    href: "/services/consultancy",
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((service) => service.slug === slug);