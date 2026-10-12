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
    file: "topographic-survey.png",
    alt: "Topographic survey drawing showing site levels and physical features",
    fit: "contain",
  },
  "Contour Survey": {
    file: "topographic-survey.png",
    alt: "Contour survey drawing showing how elevation changes across a site",
    fit: "contain",
  },
  "FMB Survey": {
    file: "fmb_survay.jpg",
    alt: "Field Measurement Book survey recording plot dimensions on site",
    fit: "contain",
  },
  "Boundary Survey / Marking": {
    file: "Screenshot 2026-10-07 154042.png",
    alt: "Site reference drawing used for boundary survey and marking",
    fit: "contain",
  },
  "Cadastral Survey": {
    file: "cadscaderaljpg.jpg",
    alt: "Cadastral survey map recording land parcels and their limits",
    fit: "contain",
  },
  "As-Built Survey": {
    file: "As-build.jpg",
    alt: "As-built survey record of completed construction work",
    fit: "contain",
  },
  "DGPS and GPS Survey": {
    file: "dps_gps.png",
    alt: "DGPS and GPS instrument used to capture satellite positioning data",
    fit: "contain",
  },
  "Drone / Airline Survey": {
    file: "drone_survey.png",
    alt: "Drone capturing aerial survey imagery over a site",
    fit: "cover",
  },
  "Level Transfer Marking": {
    file: "level_marking.png",
    alt: "Level transfer marking points set out on a construction site",
    fit: "contain",
  },
  "Pipeline Survey / Marking": {
    file: "pipeline_survay_marking.jpg",
    alt: "Pipeline route survey and alignment marking on site",
    fit: "contain",
  },
  "Oil and Gas Survey": {
    file: "oil_gas_survey.png",
    alt: "Survey and marking work inside an oil and gas project area",
    fit: "cover",
  },
  "Road Survey and Marking": {
    file: "roaad_sruvy.png",
    alt: "Road survey and marking of the planned alignment on site",
    fit: "contain",
  },
  "Construction Sector Marking": {
    file: "constrution_sector.png",
    alt: "Setting-out marking points, lines and levels for construction work",
    fit: "contain",
  },
  "Layout Survey and Marking": {
    file: "layout_marking.png",
    alt: "Layout marking of planned plots, roads and building lines",
    fit: "contain",
  },
  "Sub Division Survey and Marking": {
    file: "Sub Division Survey and Marking.png",
    alt: "Sub division survey marking individual plot boundaries on site",
    fit: "contain",
  },
  "Bed Bolt Alignment Marking": {
    file: "Bed Bolt Alignment Marking.jpg",
    alt: "Bed bolt alignment marking positions prepared before installation",
    fit: "cover",
  },
  "Petrol Bunk Marking / Survey": {
    file: "Petrol Bunk MarkingSurvey.jpeg",
    alt: "Survey and marking carried out at a petrol bunk site",
    fit: "cover",
  },
};

/**
 * Consultancy sub-service -> existing image in /public/services_img/Consultancy.
 * Same rules as SERVICE_MEDIA / APPROVALS_MEDIA: exact filenames as saved on
 * disk, `contain` for technical drawings / diagrams / documents, `cover` for
 * photographic and rendered imagery (judged by content, not file extension).
 *
 * All 10 consultancy sub-services are covered 1:1 by the 10 saved assets;
 * entries without a mapping render without a thumbnail rather than using an
 * unrelated image as filler.
 */
export const CONSULTANCY_MEDIA = {
  "Soil Test (SPT, ERT, CBT, Plate Load)": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "soil_test.jpg",
    alt: "Soil test conducted on site to assess bearing capacity",
    fit: "cover",
  },
  "Ground Water Survey": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "ground-water-investigation-survey-service.jpg",
    alt: "Ground water investigation survey equipment working at a site",
    fit: "cover",
  },
  "Quantity Survey": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Quantitive_survey.png",
    alt: "Quantity survey measurement sheet prepared from drawings",
    fit: "contain",
  },
  "Land & Building Valuation": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "land_building.png",
    alt: "Land and building valuation record with assessed property figures",
    fit: "contain",
  },
  "2D / 3D Plan & Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "2D_3D.ong.jpg",
    alt: "2D plan and 3D view of a proposed building design",
    fit: "contain",
  },
  "Structural / Architectural Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Structural_ArchitecturalDesigning.jpg",
    alt: "Structural and architectural working drawings for a building",
    fit: "contain",
  },
  "BIM Model & Design": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "BIM_Modelling.jpg",
    alt: "Coordinated BIM model of a building shown digitally",
    fit: "cover",
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
 * All 12 approval sub-services are covered; entries without a mapping render
 * without a thumbnail rather than using an unrelated image.
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
    file: "industrial_approval.jpg",
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
  "HACA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "haca.png",
    alt: "Hill area development authority approval certificate",
    fit: "contain",
  },
  "NOC Certificate Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "noc.png",
    alt: "No objection certificate document required for an approval",
    fit: "contain",
  },
  "Land Conversion": {
    dir: APPROVALS_MEDIA_DIR,
    file: "land_conversion.png",
    alt: "Land conversion record changing the classification of a plot",
    fit: "cover",
  },
  Regularisation: {
    dir: APPROVALS_MEDIA_DIR,
    file: "regularosation.png",
    alt: "Regularisation application for an existing structure or plot",
    fit: "cover",
  },
  "Single Plot Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "sigle_plot.png",
    alt: "Single plot within a layout being approved in its own right",
    fit: "cover",
  },
  "Unapproved plot regularisation": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Unapproved_plot_regularisation.png",
    alt: "Records compiled to regularise a previously unapproved plot",
    fit: "contain",
  },
};
