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
 *   CSS (.svc-media for the card image area).
 *
 * A sub-service without an entry here simply renders without a thumbnail, so
 * unrelated images are never used as filler.
 *
 * Mapping verified against the files actually present on disk in
 * /public/services_img/Digital Survey & Marking (2026-10). Several previous
 * mappings referenced files that no longer exist in that folder
 * (surveyor-boundary-marker-line-aerial-farmland-medium.jpg,
 * road_safety.png, Construction_sector.png, "Layout_marking (2).png",
 * petrol_bunk.png, "Sub Division Survey and Marking.png"); those entries have
 * been removed so no broken image is rendered, and the affected sub-services
 * are reported as missing assets rather than filled with unrelated images:
 *   - Road Survey and Marking is now mapped to the newly added
 *     Road_surbvey.png (exact filename on disk — saved with a "surbvey" typo
 *     in the name and referenced as-is, never renamed).
 * The remaining sub-services below still have no matching image in the
 * folder and are reported as missing assets rather than filled with
 * unrelated images:
 *   - Construction Sector Marking      — no matching image in the folder
 *   - Layout Survey and Marking        — no matching image in the folder
 *   - Petrol Bunk Marking / Survey     — no matching image in the folder
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
  /* "Boundary Survey / Marking": no image in the folder shows boundary
     marking (the previously mapped surveyor photograph was removed from the
     folder) — no entry, so no unrelated filler is used. */
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
  "Level Transfer Marking": {    /* Exact filename on disk — corrected from the stale level_transfe.png. */
    file: "level_transfer.png",
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
    /* Exact filename on disk (saved with a "surbvey" typo in the name;
       referenced as-is, never renamed). */
    file: "Road_surbvey.png",
    alt: "Road survey showing the alignment and marking work carried out on site",
    fit: "contain",
  },
  /* "Construction Sector Marking": Construction_sector.png no longer exists
     in the folder — no entry, so no unrelated filler is used. */
  /* "Layout Survey and Marking": "Layout_marking (2).png" no longer exists
     in the folder — no entry, so no unrelated filler is used. */
  "Bed Bolt Alignment Marking": {
    file: "Bed_bold_marking.png",
    alt: "Bed bolt alignment marking positions prepared before installation",
    fit: "cover",
  },
  /* "Petrol Bunk Marking / Survey": petrol_bunk.png no longer exists in the
     folder — no entry, so no unrelated filler is used. */
  /* "Sub Division Survey and Marking": the previously mapped
     "Sub Division Survey and Marking.png" no longer exists in the folder —
     no entry, so no unrelated filler is used. */
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
    fit: "contain",
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
    alt: "Infographic of digital elevation, terrain and surface models used for GIS and DTM design",
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
    alt: "Project management diagram linking scope, time, cost and project coordination",
    fit: "contain",
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
 * Same rules as SERVICE_MEDIA: exact filenames as saved on disk, `contain`
 * for documents / plans / certificates, `cover` for full-bleed photographic
 * or rendered imagery (judged by content, not by file extension).
 *
 * Mapping verified against the files actually present in
 * /public/services_img/Approvals (updated after the approval assets were
 * re-saved under new filenames). Land Conversion, Single Plot Approval and
 * Unapproved Plot Regularisation are now mapped to their newly re-saved
 * assets (land_conversion.png, single_plot.png,
 * unapprovedplot_regularisation.png), and HACA Approval is mapped to
 * HACA.png. The file industrial_approval.png was re-saved as
 * industrial_approval.jpg.png (referenced as-is under its current name).
 *
 * The folder also contains PMC.png, which is a byte-identical copy of the
 * Consultancy "PMC" project-management diagram (verified by hash) — it shows
 * no approval subject matter, so it is deliberately NOT assigned to any
 * approval sub-service. No approval sub-service named PMC exists.
 */
export const APPROVALS_MEDIA = {
  "DTCP / RERA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "dtcp.png",
    alt: "Site signage announcing DTCP and RERA approved plots in a developed layout",
    fit: "cover",
  },
  "Building Plan Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "building-plan-approval.png",
    alt: "Approved building plan drawings with a 3D house model marked approved",
    fit: "contain",
  },
  "Commercial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "commercial_approval.png",
    alt: "Commercial building plan approval information graphic",
    fit: "contain",
  },
  "Industrial Approval": {
    dir: APPROVALS_MEDIA_DIR,
    /* Exact filename on disk — corrected from the stale
       industrial_approval.png; the asset is a PNG saved with a .jpg.png
       double extension and is referenced as-is, never renamed. */
    file: "industrial_approval.jpg.png",
    alt: "Industrial site requiring factory and land-use approvals",
    fit: "cover",
  },
  "Panchayat Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "panchayat_approval.png",
    alt: "Government order on the Panchayat building plan approval process",
    fit: "contain",
  },
  "Corporation Approval": {
    dir: APPROVALS_MEDIA_DIR,
    file: "corporation_approvals.png",
    alt: "Government approval letter issued for a proposed corporation",
    fit: "contain",
  },

  "HACA Approval": {
    dir: APPROVALS_MEDIA_DIR,
    /* The folder's HACA.png asset (a tall approval-document letter); a
       dedicated unapprovedplot_regularisation.png now exists for regularisation.
       Contained so no document text or detail is cropped. */
    file: "HACA.png",
    alt: "Approval documentation letter used for a HACA hill area approval",
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
    file: "single_plot.png",
    alt: "Single plot approval shown with layout plan and approval details",
    fit: "contain",
  },
  "Unapproved plot regularisation": {
    dir: APPROVALS_MEDIA_DIR,
    /* Exact filename on disk — a DTCP-style regularisation acknowledgement
       document; contained so no document text is cropped. */
    file: "unapprovedplot_regularisation.png",
    alt: "Regularisation acknowledgement document for an unapproved plot",
    fit: "contain",
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
