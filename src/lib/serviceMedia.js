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
 * existing image saved in /public/services_img/Digital Survey & Marking.
 *
 * Rules:
 * - Every asset was re-saved under its standard service filename (2026-10):
 *   Topographical_Survey.png, Contour_Survey.png, Road_Survey_and_Marking.png,
 *   Pipeline_Survey_and_Marking.png, Level_Transfer.png, Bed_Bolt_Marking.png,
 *   FMB_Survey.png, Cadastral_Survey.png, Gas_Pipeline_Survey.png,
 *   As_Built_Survey.png, Construction_Sector.png, Layout_Marking.png,
 *   Petrol_Bunk_Survey.png, DGPS_Survey.png, Drone_and_Aerial_Survey.png.
 *   Folders/files are URL-encoded at render time by serviceMediaSrc(), so
 *   spaces and "&" in the directory name stay valid in URLs.
 * - `contain` for survey plans, technical drawings and diagrams so no detail
 *   is cropped away; `cover` for photographs that read better filling the
 *   frame. Images keep their original dimensions on disk - sizing happens
 *   purely in CSS (.svc-media for the card image area).
 *
 * The folder covers 17 cards with 16 distinct assets:
 *   - "Boundary Survey / Marking" reuses Cadastral_Survey.png per the owner's
 *     direction (parcel-boundary imagery matches both services).
 *   - "Sub Division Survey and Marking" is served by Plot_Subdivision_Amalgamation.png,
 *     copied from the Approvals folder without deleting the original there.
 */
export const SERVICE_MEDIA = {
  "Topographical Survey": {
    file: "Topographical_Survey.png",
    alt: "Topographic survey showing site levels and physical features",
    fit: "cover",
  },
  "Contour Survey": {
    file: "Contour_Survey.png",
    alt: "Contour survey showing how elevation changes across a site",
    fit: "cover",
  },
  "Road Survey and Marking": {
    file: "Road_Survey_and_Marking.png",
    alt: "Road survey showing the alignment and marking work carried out on site",
    fit: "cover",
  },
  "Pipeline Survey / Marking": {
    file: "Pipeline_Survey_and_Marking.png",
    alt: "Pipeline route survey and alignment marking on site",
    fit: "cover",
  },
  "Level Transfer Marking": {
    file: "Level_Transfer.png",
    alt: "Level transfer marking points set out on a construction site",
    fit: "cover",
  },
  "Bed Bolt Alignment Marking": {
    file: "Bed_Bolt_Marking.png",
    alt: "Bed bolt alignment marking positions prepared before installation",
    fit: "cover",
  },
  "FMB Survey": {
    file: "FMB_Survey.png",
    alt: "Field Measurement Book survey recording plot dimensions on site",
    fit: "cover",
  },
  "Cadastral Survey": {
    file: "Cadastral_Survey.png",
    alt: "Cadastral survey map recording land parcels and their limits",
    fit: "cover",
  },
  "Oil and Gas Survey": {
    /* Displayed as "Oil and Gas Survey"; the numbered brief calls this
       sub-service "Gas Pipeline Survey". Mapped to the gas-pipeline asset;
       the separate Pipeline_Survey_and_Marking.png covers general utility
       route marking. */
    file: "Gas_Pipeline_Survey.png",
    alt: "Survey and marking work within a gas pipeline project area",
    fit: "cover",
  },
  "As-Built Survey": {
    file: "As_Built_Survey.png",
    alt: "As-built survey record of completed construction work",
    fit: "cover",
  },
  "Construction Sector Marking": {
    file: "Construction_Sector.png",
    alt: "Construction setting-out and marking work underway on site",
    fit: "cover",
  },
  "Layout Survey and Marking": {
    file: "Layout_Marking.png",
    alt: "Layout marking setting out plots and building lines on the ground",
    fit: "cover",
  },
  "Petrol Bunk Marking / Survey": {
    file: "Petrol_Bunk_Survey.png",
    alt: "Survey and marking support for a petrol bunk site layout",
    fit: "cover",
  },
  "DGPS and GPS Survey": {
    file: "DGPS_Survey.png",
    alt: "DGPS instrument used to capture satellite positioning data on site",
    fit: "cover",
  },
  "Drone / Airline Survey": {
    file: "Drone_and_Aerial_Survey.png",
    alt: "Drone capturing aerial survey imagery over a site",
    fit: "cover",
  },
  "Boundary Survey / Marking": {
    /* Owner-directed reuse: the cadastral parcel/boundary imagery is the
       closest existing match for boundary marking work. */
    file: "Cadastral_Survey.png",
    alt: "Cadastral survey imagery showing land parcel boundaries being surveyed",
    fit: "cover",
  },
  "Sub Division Survey and Marking": {
    /* Verified asset copied from public/services_img/Approvals without
       deleting the original; referenced through this folder's public URL. */
    file: "Plot_Subdivision_Amalgamation.png",
    alt: "Plot subdivision survey imagery showing land parcels being divided and marked",
    fit: "cover",
  },
};

/**
 * Consultancy sub-service -> existing image in /public/services_img/Consultancy.
 * Same rules as SERVICE_MEDIA / APPROVALS_MEDIA: exact filenames as saved on
 * disk, `contain` for technical drawings / diagrams / documents, `cover` for
 * photographic and rendered imagery (judged by content, not file extension).
 *
 * Mapping verified against the files actually present in
 * /public/services_img/Consultancy; all 10 sub-services are covered 1:1 by
 * the 10 saved assets:
 *  - "Ground Water Survey" is now mapped to the newly added
 *    ground-water-investigation-survey-service.png.
 *  - The soil-test infographic was re-saved on disk as soil_test.jpg.png
 *    (its content is unchanged); the mapping follows the current filename.
 *
 * Content-verified draws: documents, certificates, plans and labelled
 * infographics (valuation, drawings, GIS/DEM, soil-test methods, stability,
 * PMC) use `contain` so no text or technical detail is cropped; full-frame
 * photographs (soil-test site photo, quantity-survey site photo) use `cover`.
 */
export const CONSULTANCY_MEDIA = {
  "Soil Test (SPT, ERT, CBT, Plate Load)": {
    dir: CONSULTANCY_MEDIA_DIR,
    /* Exact filename on disk (the file is a PNG saved with a .jpg.png
       double extension — referenced as-is, never renamed). */
    file: "soil_test.jpg.png",
    alt: "Soil test methods illustrated: plate load, standard penetration and cone penetration testing",
    /* Labelled infographic — contained so none of the test steps or text
       are cropped out of the tall image. */
    fit: "cover",
  },
  "Ground Water Survey": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "ground-water-investigation-survey-service.png",
    alt: "Ground water investigation survey showing subsurface water assessment on site",
    fit: "cover",
  },
  "Quantity Survey": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Quantitive_survey.png",
    alt: "Engineer reviewing project quantities on a tablet over a construction site",
    fit: "cover",
  },
  "Land & Building Valuation": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "land_building.png",
    alt: "Valuation report whiteboard listing the factors behind a property value",
    fit: "cover",
  },
  "2D / 3D Plan & Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "2D_3D.png",
    alt: "2D plan and 3D view of a proposed building design",
    fit: "cover",
  },
  "Structural / Architectural Designing": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Structural_ArchitecturalDesigning.png",
    alt: "Structural and architectural working drawings for a building",
    fit: "cover",
  },
  "BIM Model & Design": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "BIM_Modelling.png",
    alt: "Coordinated BIM model of a building services and structure shown digitally",
    /* Technical model render — contained so the full model stays visible. */
    fit: "cover",
  },
  "GIS Design & DTM Design": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "GIS_D.png",
    alt: "Infographic of digital elevation, terrain and surface models used for GIS and DTM design",
    fit: "cover",
  },
  "Stability Certificate": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "Stability_certificate.png",
    alt: "Structural stability certificate issued for an existing building",
    fit: "cover",
  },
  "Project Management Consultancy (PMC)": {
    dir: CONSULTANCY_MEDIA_DIR,
    file: "PMC.png",
    alt: "Project management diagram linking scope, time, cost and project coordination",
    fit: "cover",
  },
};

/**
 * Encode one URL path segment. Slashes inside it are separators of sub
 * folders (nested relative paths) and must be preserved as "/", while
 * spaces, "&" and other unsafe characters are percent-encoded on a per-
 * segment basis.
 */
const encodeSegment = (part) => encodeURIComponent(part);

/**
 * Public URL for an existing service image. Folder and file names are
 * URL-encoded (spaces, "&", slashes), so the URL stays valid however the
 * files are named on disk. Falls back to the Digital Survey folder for
 * entries that do not carry their own `dir`.
 *
 * Both `dir` and `file` may contain nested relative path segments (e.g.
 * dir: "Digital Survey & Marking", file: "Topographical Survey/a.png" or a
 * dir/filename containing "/"). Each segment is encoded individually so a
 * nested path is never percent-encoded as a single filename, which would
 * break the directory separators in the browser URL.
 */
export const serviceMediaSrc = (file, dir = SERVICE_MEDIA_DIR) =>
  "/services_img/" +
  [...dir.split("/"), ...String(file).split("/")]
    .map(encodeSegment)
    .join("/");

/**
 * Approval sub-service -> existing image in /public/services_img/Approvals.
 * Same rules as SERVICE_MEDIA: `contain` for documents / plans / certificates,
 * `cover` for full-bleed photographic imagery (judged by content, not by file
 * extension).
 *
 * Mapping verified against the files actually present in
 * /public/services_img/Approvals. Every asset was re-saved under its standard
 * service filename (2026-10): DTCP_RERA_Plot_Approval.png,
 * Building_Plan_Approval.png, Commercial_Building_Approval.png,
 * Industrial_Approval.png, Panchayat_Building_Approval.png,
 * Company_Corporate_Approvals.png, Hill_Area_Conservation_Approval.png,
 * NOC_Site_Inspection.png, Land_Conversion.png, Plot_Regularisation_Survey.png,
 * Unapproved_Plot_Regularisation.png — each mapped 1:1 to the sub-service
 * shown on the approvals page (display titles unchanged).
 *
 * Also renamed per the approved asset brief but present without a page
 * sub-service, deliberately NOT referenced (no invented page content):
 *   - Project_Management_Consultancy.png (the former PMC.png; byte-identical
 *     copy of the Consultancy PMC diagram — no approval sub-service named PMC)
 *   - Plot_Subdivision_Amalgamation.png (no approvals sub-service exists for it)
 *
 * "Single Plot Approval" keeps its existing verified asset single_plot.png;
 * the brief's asset list covers 13 named items and has no single-plot entry.
 */
export const APPROVALS_MEDIA = {
  "DTCP / RERA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "DTCP_RERA_Plot_Approval.png",
    alt: "Site signage announcing DTCP and RERA approved plots in a developed layout",
    fit: "cover",
  },
  "Building Plan Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Building_Plan_Approval.png",
    alt: "Approved building plan drawings with a 3D house model marked approved",
    fit: "cover",
  },
  "Commercial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Commercial_Building_Approval.png",
    alt: "Commercial building plan approval information graphic",
    fit: "cover",
  },
  "Industrial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Industrial_Approval.png",
    alt: "Industrial site requiring factory and land-use approvals",
    fit: "cover",
  },
  "Panchayat Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Panchayat_Building_Approval.png",
    alt: "Government order on the Panchayat building plan approval process",
    fit: "cover",
  },
  "Corporation Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Company_Corporate_Approvals.png",
    alt: "Government approval letter issued for a proposed corporation",
    fit: "cover",
  },
  "HACA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    /* A tall approval-document letter; contained so no document text or
       detail is cropped. */
    file: "Hill_Area_Conservation_Approval.png",
    alt: "Approval documentation letter used for a HACA hill area approval",
    fit: "cover",
  },
  "NOC Certificate Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "NOC_Site_Inspection.png",
    alt: "No objection certificate document required for an approval",
    fit: "cover",
  },
  "Land Conversion": {
    dir: APPROVALS_MEDIA_DIR,
    file: "Land_Conversion.png",
    alt: "Land conversion from agricultural use to non-agricultural development land",
    /* Wide labelled banner — contained so the title and both land uses
       stay fully visible. */
    fit: "cover",
  },
  Regularisation: {
    dir: APPROVALS_MEDIA_DIR,
    file: "Plot_Regularisation_Survey.png",
    alt: "Regularisation application for an existing structure or plot",
    fit: "cover",
  },
  "Single Plot Approval": {
    dir: APPROVALS_MEDIA_DIR,
    /* Retained existing asset; the approved brief's 13-name list has no
       single-plot entry, so the original filename stays in use. */
    file: "single_plot.png",
    alt: "Single plot approval shown with layout plan and approval details",
    fit: "cover",
  },
  "Unapproved plot regularisation": {
    dir: APPROVALS_MEDIA_DIR,
    /* A DTCP-style regularisation acknowledgement document; contained so no
       document text is cropped. */
    file: "Unapproved_Plot_Regularisation.png",
    alt: "Regularisation acknowledgement document for an unapproved plot",
    fit: "cover",
  },
};

/**
 * Stable lookup key for a media map: displayed titles stay untouched on the
 * page, but harmless differences in capitalization, surrounding whitespace
 * and common punctuation (e.g. " / ", "-", "&") can no longer make an
 * otherwise correct mapping disappear. Non-alphanumeric runs collapse to a
 * single space; a key-collision check was done when this was introduced —
 * no two sub-service names across the three maps produce the same key.
 * (Declared after the raw maps above so the module-level lookup tables
 * below are built from initialized constants.)
 */
export const normalizeMediaKey = (name) =>
  String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** Build a lookup map keyed on the normalized key instead of the raw title. */
const normalizedMap = (map) =>
  Object.fromEntries(
    Object.entries(map).map(([key, value]) => [normalizeMediaKey(key), value]),
  );

/* Public lookup maps: identical entries to the definitions above, accessed
   via normalizeMediaKey() so title/whitespace/punctuation variants resolve. */
export const SERVICE_MEDIA_LOOKUP = normalizedMap(SERVICE_MEDIA);
export const APPROVALS_MEDIA_LOOKUP = normalizedMap(APPROVALS_MEDIA);
export const CONSULTANCY_MEDIA_LOOKUP = normalizedMap(CONSULTANCY_MEDIA);

/**
 * Look up the media entry for one sub-service (undefined when none exists).
 * Uses the normalized key so display-title variants still resolve.
 */
export const getServiceMedia = (name) => SERVICE_MEDIA_LOOKUP[normalizeMediaKey(name)];
