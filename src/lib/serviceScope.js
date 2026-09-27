import {
  Boxes,
  Building2,
  Calculator,
  ClipboardList,
  Crosshair,
  DraftingCompass,
  FlaskConical,
  FolderCheck,
  Landmark,
  Layers,
  Map,
  MapPin,
  Scale,
  ScrollText,
  ShieldCheck,
  Stamp,
} from "lucide-react";

/**
 * Full service scope, grouped for progressive disclosure on the service pages.
 * Service names follow the Nathan Associates service poster wording exactly.
 */
export const SERVICE_SCOPE = {
  "digital-survey-marking": [
    {
      id: "land-boundary-records",
      title: "Land, Boundary & Records",
      intro:
        "Understand the land itself - its limits, its shape, how it slopes and what is physically on it.",
      icon: Map,
      outputs: [
        "Site measurement data with reduced levels",
        "Sketch or plan of the surveyed area",
        "Boundary and corner point records, where applicable",
      ],
      items: [
        {
          name: "Topographical Survey",
          note: "Captures the existing ground levels and physical features of a site - roads, drains, structures, vegetation and services - as they are today.",
          use: "Starting a layout, planning a building or preparing a design, where the design has to respond to the real condition of the land.",
        },
        {
          name: "Contour Survey",
          note: "Maps how elevation changes across a site, producing contour lines that show the slope, high points and low points.",
          use: "Working out cut-and-fill volumes, drainage fall and building placement on uneven land.",
        },
        {
          name: "FMB Survey",
          note: "Field Measurement Book survey records the dimensions and details of a plot so the site can be compared against the available land records.",
          use: "Checking an existing record against the actual condition of the plot before a transaction or development decision.",
        },
        {
          name: "Boundary Survey / Marking",
          note: "Establishes the site boundary from the applicable survey information and marks the limit on the ground with visible points.",
          use: "Settling a boundary question, or giving a builder a clear reference of how far the site extends.",
        },
        {
          name: "Cadastral Survey",
          note: "Records land parcels and their defined limits for land-management, revenue and planning purposes.",
          use: "Comparing parcel boundaries and supporting land documentation or administrative work.",
        },
        {
          name: "As-Built Survey",
          note: "Records the position, levels and dimensions of work after it has been completed, showing what was actually built against what was planned.",
          use: "Closing out a project, handing over records or capturing a baseline before further addition or alteration.",
        },
      ],
    },
    {
      id: "positioning-aerial-levels",
      title: "Positioning, Aerial Capture & Levels",
      intro:
        "Satellite positioning, aerial observation and level transfer - the data behind accurate setting-out.",
      icon: Crosshair,
      outputs: [
        "Control and coordinate data for the site",
        "Aerial imagery where an aerial survey is carried out",
        "Marked level points referenced to a known benchmark",
      ],
      items: [
        {
          name: "DGPS and GPS Survey",
          note: "Uses satellite-based positioning to establish site coordinates and support control and mapping work over large or open areas.",
          use: "Feeding accurate position data into site plans, layouts and setting-out work.",
        },
        {
          name: "Drone / Airline Survey",
          note: "Collects aerial images and survey information using drone or aircraft coverage over open, large or difficult-to-access sites.",
          use: "Mapping a site quickly, monitoring progress across a site, or reaching areas that are impractical to walk.",
        },
        {
          name: "Level Transfer Marking",
          note: "Transfers a known reference level from a benchmark to working points across the site, and marks those levels on the ground.",
          use: "Keeping heights consistent between structures, roads and services during construction.",
        },
      ],
    },
    {
      id: "infrastructure-utilities-marking",
      title: "Infrastructure, Utilities & Site Marking",
      intro:
        "Alignment and marking support where a line, route or working area has to be located accurately on the ground.",
      icon: MapPin,
      outputs: [
        "Route or alignment survey data",
        "Marked alignment points on site",
        "Set-out references for the executing team",
      ],
      items: [
        {
          name: "Pipeline Survey / Marking",
          note: "Maps the route and position of pipelines and marks the alignment on site so it can be followed during excavation and laying work.",
          use: "Planning and coordinating pipeline construction, and avoiding clashes with other services.",
        },
        {
          name: "Oil and Gas Survey",
          note: "Provides site survey and marking support for oil and gas project areas, plant locations and working layouts.",
          use: "Locating planned features and coordinating site work within an operating or developing facility.",
        },
        {
          name: "Road Survey and Marking",
          note: "Surveys the existing road alignment and marks the planned road or site line on the ground.",
          use: "Route planning, setting out for road construction and coordination between design and site.",
        },
        {
          name: "Construction Sector Marking",
          note: "Marks setting-out points, lines and levels that allow the execution team to follow the planned works on site.",
          use: "Keeping construction aligned with the approved plan once work has started.",
        },
      ],
    },
    {
      id: "layout-alignment-specialised",
      title: "Layout, Sub Division & Specialised Marking",
      intro:
        "Setting out new plots and alignment work for machines, structures and fuel stations.",
      icon: Layers,
      outputs: [
        "Layout marking for plots, roads and building lines",
        "Plot-wise survey data where land is being divided",
        "Alignment references for installation work",
      ],
      items: [
        {
          name: "Layout Survey and Marking",
          note: "Sets out planned plots, roads and building lines on the ground from the relevant layout information.",
          use: "Giving a layout or construction team a clear on-ground reference to build against.",
        },
        {
          name: "Sub Division Survey and Marking",
          note: "Helps divide a larger land area into individual plots and marks each sub-division boundary on site.",
          use: "Layout development, plot sale planning and handing over clearly defined plots.",
        },
        {
          name: "Bed Bolt Alignment Marking",
          note: "Marks the locations and alignment of bed bolts and related machine foundations before installation takes place.",
          use: "Positioning equipment consistently with the planned arrangement during installation.",
        },
        {
          name: "Petrol Bunk Marking / Survey",
          note: "Provides survey and marking support for petrol-bunk sites and planned fuel-related layouts.",
          use: "Coordinating the proposed site arrangement and the construction requirements that go with it.",
        },
      ],
    },
  ],
  approvals: [
    {
      id: "statutory-development-authorities",
      title: "Statutory & Development Authority Approvals",
      intro:
        "Approvals handled through town planning, real estate regulation and building sanction frameworks.",
      icon: Landmark,
      outputs: [
        "An outline of the approval route that applies to your project",
        "A list of information and documents to be arranged",
        "Support in preparing the application for submission",
      ],
      items: [
        {
          name: "DTCP / RERA Approval",
          note: "Assistance with the approvals that fall under town and country planning and real estate regulatory requirements, including the registration and compliance steps that may apply to a project.",
          use: "Before you market, sell or commit to a layout or residential project, and wherever the applicable regulation needs to be addressed.",
        },
        {
          name: "Building Plan Approval",
          note: "Assistance with the documentation and process involved in getting a building drawing sanctioned by the relevant authority.",
          use: "Before starting construction on a house, apartment or any other building.",
        },
        {
          name: "Commercial Approval",
          note: "Support for the approvals connected with commercial buildings and commercial projects, including the drawings and statements such projects typically require.",
          use: "When converting or designing land for shops, offices, showrooms or mixed commercial use.",
        },
        {
          name: "Industrial Approval",
          note: "Support for the approvals connected with industrial buildings, factories and industrial land use.",
          use: "When acquiring or developing land for industrial purposes.",
        },
      ],
    },
    {
      id: "local-authority-approvals",
      title: "Local Authority Approvals",
      intro:
        "Approvals processed through the local body that actually has jurisdiction over your location.",
      icon: Building2,
      outputs: [
        "Guidance on which local authority is applicable",
        "Document checklist for that authority's process",
        "Help preparing and following up on the submission",
      ],
      items: [
        {
          name: "Panchayat Approval",
          note: "Help navigating approval procedures handled at the Panchayat level, which commonly apply to rural and semi-urban property.",
          use: "Where your land or building falls within a Panchayat area rather than a municipal corporation.",
        },
        {
          name: "Corporation Approval",
          note: "Assistance with approvals processed through the municipal corporation for urban property, including the plan and use-related submissions it handles.",
          use: "For any city or municipal property where corporation sanction is needed before work begins.",
        },
        {
          name: "HACA Approval",
          note: "Support for approvals under hill area development authority requirements, which add conditions for construction in notified hill areas.",
          use: "For any property in a hill region where hill area clearances and rules apply.",
        },
      ],
    },
    {
      id: "noc-conversion-regularisation",
      title: "NOC, Land Conversion & Regularisation",
      intro:
        "Documentation-based services for land that needs a change of use, a no-objection or formal acceptance of an existing plot.",
      icon: Stamp,
      outputs: [
        "A clear picture of the records that exist for your land",
        "Preparation and submission support for the applicable application",
        "Follow-up and status assistance once the file is in process",
      ],
      items: [
        {
          name: "NOC Certificate Approval",
          note: "Guidance in preparing for and following up on no-objection certificates, which are commonly required when a plot falls near or under the influence of a facility, waterway or other restricted zone.",
          use: "When a plot, layout or building proposal cannot proceed without a NOC from a department.",
        },
        {
          name: "Land Conversion",
          note: "Documentation and process support when the classification or use of land needs to be changed, for example from agricultural to non-agricultural or to a development use.",
          use: "Before you design, sell or build on land whose current use does not match your proposal.",
        },
        {
          name: "Regularisation",
          note: "Help structuring an application for regularisation of an existing structure or plot where the applicable procedure exists for it.",
          use: "When construction has already taken place and the property needs to be brought within the approved process.",
        },
        {
          name: "Single Plot Approval",
          note: "Approval support for an individual plot within a layout, where the plot is being regularised or sanctioned in its own right rather than as part of a full layout.",
          use: "Buying or building on one plot in a layout where the wider layout paperwork is still incomplete.",
        },
        {
          name: "Unapproved plot regularisation",
          note: "Assistance in working through regularisation for a plot that has not been approved, including compiling the available records and preparing the case for the applicable process.",
          use: "When you have inherited, purchased or been allotted a plot without completed approval and need to regularise it.",
        },
      ],
    },
  ],
  consultancy: [
    {
      id: "site-ground-assessment",
      title: "A. Site & Ground Assessment",
      intro: "Understanding what is below and beneath the site before anything is designed or built on it.",
      icon: FlaskConical,
      outputs: [
        "Test or investigation results with an interpretation",
        "Inputs that can be used for design and planning",
        "A record of what was assessed and where",
      ],
      items: [
        {
          name: "Soil Test (SPT, ERT, CBT, Plate Load)",
          note: "Soil testing establishes the condition of the ground your structure will sit on, using the listed methods - Standard Penetration Test, Electrical Resistivity Tomography, Cross Borehole Test and Plate Load Test - as appropriate to the site and the structure.",
          use: "Before construction begins, and whenever the soil type or bearing capacity affects the foundation, the depth of excavation or the design itself.",
        },
        {
          name: "Ground Water Survey",
          note: "Investigates water availability and the subsurface water conditions at a site, including the water table and the quality indications relevant to the project.",
          use: "Water sourcing decisions, drainage and basement planning, and assessing how water will affect excavation and construction.",
        },
      ],
    },
    {
      id: "measurement-quantity-valuation",
      title: "B. Measurement, Quantity & Valuation",
      intro: "Turning drawings and properties into numbers you can budget, compare and decide on.",
      icon: Calculator,
      outputs: [
        "Measured quantities for the works described",
        "Valuation figures with the basis explained",
        "Documentation you can share with a financier, buyer or contractor",
      ],
      items: [
        {
          name: "Quantity Survey",
          note: "Measures and estimates the materials, works and quantities involved in a project from drawings and site information.",
          use: "Comparing budgets, planning procurement and checking that billed quantities match the work done.",
        },
        {
          name: "Land & Building Valuation",
          note: "Provides an assessment of the value of land or a building, with the basis of the valuation explained so the figure can be used with confidence.",
          use: "Buying or selling property, taking a loan against it, or deciding whether a project is financially workable.",
        },
      ],
    },
    {
      id: "design-engineering",
      title: "C. Design & Engineering",
      intro: "Turning an idea on paper into a design that is buildable, efficient and clear to execute.",
      icon: DraftingCompass,
      outputs: [
        "Drawings and plans for the agreed scope",
        "Design documentation for submission and execution",
        "Design decisions explained in plain language",
      ],
      items: [
        {
          name: "2D / 3D Plan & Designing",
          note: "Prepares two-dimensional layouts and three-dimensional views so the proposal can be understood before it is built, including space arrangement, circulation and appearance.",
          use: "Deciding between design options, showing a client or authority what is proposed, and coordinating the layout across floors and levels.",
        },
        {
          name: "Structural / Architectural Designing",
          note: "Design support covering the structural behaviour and the architectural form of a building or facility, so appearance and performance are developed together.",
          use: "Preparing drawings for a new building, an extension or a renovation that has to be built safely and used well.",
        },
      ],
    },
    {
      id: "digital-bim-gis",
      title: "D. Digital, BIM & GIS",
      intro: "Coordinating design, survey and site data in structured digital models rather than scattered drawings.",
      icon: Boxes,
      outputs: [
        "A coordinated model or map that others can work from",
        "Consistent data across drawings, schedules and site",
        "A clearer basis for review, approval and execution",
      ],
      items: [
        {
          name: "BIM Model & Design",
          note: "Building Information Modelling organises design information into a coordinated digital model, so architectural, structural and service information can be reviewed together instead of in isolation.",
          use: "Projects where several teams need to work from the same design data, and clash review before construction starts.",
        },
        {
          name: "GIS Design & DTM Design",
          note: "Geographic Information System design and Digital Terrain Model design place survey and site data in a mapped, spatial format - useful for understanding a site, its surroundings and its levels across an area rather than a single plot.",
          use: "Area-level planning, large sites and layouts, feasibility studies and any work where terrain and location need to be reviewed together.",
        },
      ],
    },
    {
      id: "project-certification-support",
      title: "E. Project & Certification Support",
      intro: "Ongoing input that keeps a project coordinated, and formal assessment of an existing structure.",
      icon: ShieldCheck,
      outputs: [
        "Coordinated project documentation and reporting",
        "A stability assessment record for an existing structure",
        "Regular review points through the project",
      ],
      items: [
        {
          name: "Stability Certificate",
          note: "An assessment of the stability of an existing structure, based on its present condition, for the purpose the assessment is required.",
          use: "Before extending, altering or converting an existing building, and where a stability record is called for.",
        },
        {
          name: "Project Management Consultancy (PMC)",
          note: "Brings coordination across planning, sequencing, documentation and follow-through so the different parts of a project stay aligned with each other.",
          use: "Ongoing projects that need a single team coordinating design, site execution, approvals and reporting.",
        },
      ],
    },
  ],
};

export const getServiceScope = (slug) => SERVICE_SCOPE[slug] || [];

export const getServiceNames = (slug) =>
  getServiceScope(slug).flatMap((group) => group.items.map((item) => item.name));

export const getServiceCapabilities = (slug) =>
  getServiceScope(slug).flatMap((group) =>
    group.items.map((item) => ({ name: item.name, note: item.note })),
  );
