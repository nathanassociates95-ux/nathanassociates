/*
 * Trusted Clients & Project Showcase - data manifest.
 *
 * Supplied project records (exact as provided: names, clients,
 * locations, service types, descriptions, statuses). No extra clients,
 * achievements or claims are invented. BPCL has been removed entirely
 * — no project was delivered for them.
 *
 * Logo assets: the six logos supplied via ndse.in were verified (HTTP 200,
 * correct image content types) and downloaded into /public/images/clients
 * so they cannot break at build or deploy time. Clients without a supplied
 * logo use `logo: null` and render as a typographic wordmark.
 *
 * The array below is the authoritative dataset for the homepage Trusted By
 * strip AND the /projects page.
 */

export const PROJECT_SHOWCASE = [
  {
    title: "Campus Topographical Mapping",
    anchor: "campus-topographical-mapping",
    client: "Isha Foundation",
    logo: null,
    location: "Coimbatore",
    type: "Topographical Survey",
    description:
      "Comprehensive high-precision topographical and contour survey of the entire foundation campus for future infrastructure development and master planning.",
    status: "Completed",
  },
  {
    title: "Highway Expansion Route Survey",
    anchor: "highway-expansion-route-survey",
    client: "L&T Construction",
    logo: "/images/clients/lt.png",
    location: "Tamil Nadu Highways",
    type: "Route Survey",
    description:
      "Extensive route alignment and DGPS control establishment for a 150km highway expansion project, ensuring accurate land acquisition data.",
    status: "Ongoing",
  },
  {
    title: "Commercial Plot Subdivisions",
    anchor: "commercial-plot-subdivisions",
    client: "YOGO Developers",
    logo: "/images/clients/yogo.svg",
    location: "Chennai",
    type: "Layout Survey",
    description:
      "Detailed subdivision survey and plotting out 500+ commercial and residential plots for a major real estate township development.",
    status: "Completed",
  },
  {
    title: "Industrial As-Built Mapping",
    anchor: "industrial-as-built-mapping",
    client: "IRCLASS",
    logo: "/images/clients/irclasses.png",
    location: "Industrial Estate",
    type: "As-Built Survey",
    description:
      "Post-construction as-built measurements of heavy industrial structural layouts to verify design compliance and certify safety standards.",
    status: "Completed",
  },
  {
    title: "Solar Farm Contour Mapping",
    anchor: "solar-farm-contour-mapping",
    client: "Viridis Energy",
    logo: "/images/clients/viridis.svg",
    location: "Tirunelveli",
    type: "Drone Survey",
    description:
      "Large-scale aerial drone photogrammetry to generate precise digital elevation models (DEM) for an upcoming 50MW solar power installation.",
    status: "Ongoing",
  },
  {
    title: "Solar Farm Contour Mapping",
    anchor: "solar-farm-contour-mapping-second",
    client: "Viridis Energy",
    logo: "/images/clients/viridis.svg",
    location: "Tirunelveli",
    type: "Drone Survey",
    description:
      "Large-scale aerial drone photogrammetry to generate precise digital elevation models (DEM) for an upcoming 50MW solar power installation.",
    status: "Ongoing",
  },
  {
    title: "Retail Chain Boundary Validation",
    anchor: "retail-chain-boundary-validation",
    client: "The Chennai Mobiles",
    logo: "/images/clients/chennai_mobiles.jpg",
    location: "Multiple Cities",
    type: "Property Survey",
    description:
      "Boundary verification and accurate property area surveys across multiple commercial retail locations to ensure correct leasing records.",
    status: "Completed",
  }
];
