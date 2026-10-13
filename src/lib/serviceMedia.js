/**
 * Sub-folders of /public/services_img holding each service's image assets.
 * Images are grouped per service on disk; these constants are the only place
 * that knows the folder names. Declared before the media maps that use them.
 */
export const SERVICE_MEDIA_DIR = "Digital Survey & Marking";
export const APPROVALS_MEDIA_DIR = "Approvals";
export const CONSULTANCY_MEDIA_DIR = "Consultancy";

/**
 * Semantic mapping between each Digital Survey & Marking sub-service and an
 * existing image already saved in /public/services_img/Digital Survey & Marking.
 *
 * Rules:
 * - Only exact filenames already present on disk are used. Nothing is renamed,
 *   moved, duplicated or generated.
 * - `contain` for survey plans, technical drawings and diagrams so no detail is
 *   cropped away; `cover` for photographs that read better filling the frame.
 * - Images keep their original dimensions on disk — sizing happens purely in
 *   CSS (.svc-media for cards, .svc-thumb for the detailed list).
 *
 * A sub-service without an entry here simply renders without a thumbnail, so
 * unrelated images are never used as filler.
 */
export const SERVICE_MEDIA = {
  "Topographical Survey": {
    file: "topograhical.png",
    alt: "Topographic survey drawing showing site levels and physical features",
    fit: "contain",
  },
  "Contour Survey": {
    file: "Contuour_survey.png",
    alt: "Contour survey drawing showing how elevation changes across a site",
    fit: "contain",
  },
  "FMB Survey": {
    file: "FMB_survey.png",
    alt: "Field Measurement Book survey recording plot dimensions on site",
    fit: "contain",
  },
  "Boundary Survey / Marking": {
    file: "surveyor-boundary-marker-line-aerial-farmland-medium.jpg",
    alt: "Surveyor with an instrument marking a plot boundary across farmland",
    fit: "cover",
  },
  "Cadastral Survey": {
    file: "cadastral.png",
    alt: "Cadastral survey map recording land parcels and their limits",
    fit: "contain",
  },
  "As-Built Survey": {
    file: "AS_build.png",
    alt: "As-built survey record of completed construction work",
    fit: "contain",
  },
  "DGPS and GPS Survey": {
    file: "DGPS.png",
    alt: "DGPS and GPS instrument used to capture satellite positioning data",
    fit: "contain",
  },
  "Drone / Airline Survey": {
    file: "Drone_arilen.png",
    alt: "Drone capturing aerial survey imagery over a site",
    fit: "cover",
  },
  "Level Transfer Marking": {
    file: "level_transfe.png",
    alt: "Level transfer marking points set out on a construction site",
    fit: "contain",
  },
  "Pipeline Survey / Marking": {
    file: "pipeline_surveuy.png",
    alt: "Pipeline route survey and alignment marking on site",
    fit: "contain",
  },
  "Oil and Gas Survey": {
    file: "gas_pipeline.png",
    alt: "Survey and marking work inside an oil and gas project area",
    fit: "cover",
  },
  "Road Survey and Marking": {
    file: "road_safety.png",
    alt: "Road survey and marking of the planned alignment on site",
    fit: "contain",
  },
  "Construction Sector Marking": {
    file: "Construction_sector.png",
    alt: "Setting-out marking points, lines and levels for construction work",
    fit: "contain",
  },
  "Layout Survey and Marking": {
    file: "Layout_marking (2).png",
    alt: "Layout marking of planned plots, roads and building lines",
    fit: "contain",
  },
  "Bed Bolt Alignment Marking": {
    file: "Bed_bold_marking.png",
    alt: "Bed bolt alignment marking positions prepared before installation",
    fit: "cover",
  },
  "Petrol Bunk Marking / Survey": {
    file: "petrol_bunk.png",
    alt: "Survey and marking carried out at a petrol bunk site",
    fit: "cover",
  },
  "Sub Division Survey and Marking": {
    file: "Sub Division Survey and Marking.png",
    alt: "Sub division layout plan marking numbered plots, blocks and open spaces",
    fit: "contain",
  },
};

/**
 * Consultancy sub-service -> existing image in /public/services_img/Consultancy.
 * Same rules as SERVICE_MEDIA / APPROVALS_MEDIA: exact filenames as saved on
 * disk, `contain` for technical drawings / diagrams / documents, `cover` for
 * photographic and rendered imagery (judged by content, not file extension).
 *
 * Mapping verified against the files actually present in
 * /public/services_img/Consultancy; 9 of the 10 sub-services covered 1:1 by
 * the 9 saved assets. "Ground Water Survey" has no image in the folder, so it
 * has no entry and renders without a thumbnail rather than using an unrelated
 * image as filler.
 *
 * Content-verified draws: documents, certificates, plans and labelled
 * infographics (valuation, drawings, GIS/DEM, soil-test methods, stability,
 * PMC) use `contain` so no text or technical detail is cropped; full-frame
 * photographs (soil-test site photo, quantity-survey site photo) use `cover`.
 */
export const CONSULTANCY_MEDIA = {
  "Soil Test (SPT, ERT, CBT, Plate Load)": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "soil_test.png",
    alt: "Soil test methods illustrated: plate load, standard penetration and cone penetration testing",
    /* Labelled infographic — contained so none of the test steps or text
       are cropped out of the tall image. */
    fit: "contain",
  },
  /* No image currently in /public/services_img/Consultancy for
     "Ground Water Survey" — no filler is used, so no entry. */
  "Quantity Survey": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Quantitive_survey.png",
    alt: "Quantity survey measurement work carried out against project drawings",
    fit: "cover",
  },
  "Land & Building Valuation": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "land_building.png",
    alt: "Land and building valuation record with assessed property figures",
    fit: "contain",
  },
  "2D / 3D Plan & Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "2D_3D.png",
    alt: "2D plan and 3D view of a proposed building design",
    fit: "contain",
  },
  "Structural / Architectural Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Structural_ArchitecturalDesigning.png",
    alt: "Structural and architectural working drawings for a building",
    fit: "contain",
  },
  "BIM Model & Design": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "BIM_Modelling.png",
    alt: "Coordinated BIM model of a building services and structure shown digitally",
    /* Technical model render — contained so the full model stays visible. */
    fit: "contain",
  },
  "GIS Design & DTM Design": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "GIS_D.png",
    alt: "GIS map layer with terrain data used for DTM design",
    fit: "contain",
  },
  "Stability Certificate": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Stability_certificate.png",
    alt: "Structural stability certificate issued for an existing building",
    fit: "contain",
  },
  "Project Management Consultancy (PMC)": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "PMC.png",
    alt: "Project management consultancy schedule and coordination chart",
    fit: "contain",
  },
};

/** Look up the media entry for one sub-service (undefined when none exists). */
export const getServiceMedia = (name) => SERVICE_MEDIA[name];

/**
 * Public URL for an existing service image. Folder and file names are
 * URL-encoded (spaces, "&", slashes), so the URL stays valid however the
 * files are named on disk. Falls back to the Digital Survey folder for
 * entries that do not carry their own `dir`.
 */
export const serviceMediaSrc = (file, dir = SERVICE_MEDIA_DIR) =>
  `/services_img/${encodeURIComponent(dir)}/${encodeURIComponent(file)}`;

/**
 * Approval sub-service -> existing image in /public/services_img/Approvals.
 * Same rules as SERVICE_MEDIA: exact filenames as saved on disk, `contain`
 * for documents / plans / certificates, `cover` for full-bleed photographic
 * or rendered imagery (judged by content, not by file extension).
 *
 * Mapping verified against the files actually present in
 * /public/services_img/Approvals (every file inspected by content, not just
 * filename); 11 of the 12 approval sub-services are covered 1:1 by the 11
 * applicable saved assets. "HACA Approval" has no matching image in the
 * folder, so it has no entry and renders without a thumbnail rather than
 * using an unrelated image as filler. The file named HACA.png in that folder
 * actually contains a DTCP "Regularisation of Unapproved Plots"
 * acknowledgement letter, so — by content — it is assigned to "Unapproved
 * plot regularisation" where it belongs, and deliberately NOT to HACA.
 * (Note: Stability_certificate.png also sits in that folder but is a copy of
 * the Consultancy "Stability Certificate" image, so it is deliberately NOT
 * assigned to any approval sub-service.)
 *
 * Content-verified draws: certificate/document/plan-sheet and labelled
 * infographic images use `contain` so no text or measurement detail is
 * cropped; full-frame photographs (dtcp, industrial, regularisation) use
 * `cover`.
 */
export const APPROVALS_MEDIA = {
  "DTCP / RERA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "dtcp.png",
    alt: "DTCP and RERA approval documentation for a planning project",
    fit: "cover",
  },
  "Building Plan Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "building-plan-approval.png",
    alt: "Sanctioned building plan drawing prepared for approval submission",
    fit: "contain",
  },
  "Commercial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "commercial_approval.png",
    alt: "Approval paperwork for a commercial building project",
    fit: "contain",
  },
  "Industrial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "industrial_approval.png",
    alt: "Industrial site requiring factory and land-use approvals",
    fit: "cover",
  },
  "Panchayat Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "panchayat_approval.png",
    alt: "Panchayat-level approval process for a rural property",
    fit: "contain",
  },
  "Corporation Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "corporation_approvals.png",
    alt: "Municipal corporation approval application for urban property",
    fit: "contain",
  },
  /* "HACA Approval": no image in the folder shows hill-area / HACA content
     (the file named HACA.png is a DTCP unapproved-plot regularisation letter,
     mapped below) — no entry, so no unrelated filler is used. */
  "NOC Certificate Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "noc.png",
    alt: "No objection certificate document required for an approval",
    fit: "contain",
  },
  "Land Conversion": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Land_Conversion.png",
    alt: "Land conversion from agricultural use to non-agricultural development land",
    /* Wide labelled banner — contained so the title and both land uses
       stay fully visible. */
    fit: "contain",
  },
  Regularisation: {
    dir: APPROVALS_MEDIA_DIR,
    file: "regularosation.png",
    alt: "Regularisation application for an existing structure or plot",
    fit: "cover",
  },
  "Single Plot Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "SinglePlotApproval.png",
    alt: "Plot sub-division and amalgamation shown with an approved DTCP layout plan",
    fit: "contain",
  },
  "Unapproved plot regularisation": {
    dir: APPROVALS_MEDIA_DIR,
    /* Exact filename on disk (content is a DTCP "Regularisation of
       Unapproved Plots" acknowledgement letter — verified by inspection). */
    file: "HACA.png",
    alt: "DTCP acknowledgement letter for regularisation of an unapproved plot",
    fit: "contain",
  },
};
