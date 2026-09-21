import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"], // You can also add "latin-ext" or others if needed
  weight: ["400", "500", "600", "700"], // Choose the weights you’ll use
  variable: "--font-raleway", // Optional: for using in Tailwind
});

export const metadata = {
  title: "Nathan Associates",
  description: "Digital Survey & Marking, Approvals and Consultancy - accurate, reliable and delivered right.",
  keywords: [
    "Digital Survey & Marking",
    "Topographical Survey",
    "Contour Survey",
    "FMB Survey",
    "Boundary Survey",
    "DGPS Survey",
    "Drone Survey",
    "Road Survey and Marking",
    "Layout Survey and Marking",
    "Sub Division Survey",
    "Approvals",
    "DTCP Approval",
    "RERA Approval",
    "Building Plan Approval",
    "Commercial Approval",
    "Industrial Approval",
    "Panchayat Approval",
    "Corporation Approval",
    "NOC Certificate Approval",
    "Land Conversion",
    "Regularisation",
    "HACA Approval",
    "Consultancy",
    "Soil Test",
    "Ground Water Survey",
    "Quantity Survey",
    "Land & Building Valuation",
    "2D / 3D Plan & Designing",
    "Structural Designing",
    "Architectural Designing",
    "BIM Model & Design",
    "Stability Certificate",
    "Project Management Consultancy",
  ],
  alternates: {
    canonical: "https://nathanassociates.in/", // ✅ ADD YOUR DOMAIN
  },
  verification: {
    google: "pkEvFQoO5rUr0D13JdyKGCeqjv6skva988gluNNEjhg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon-01.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

          {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nathan Associates India",
              url: "https://nathanassociates.in/", // ✅ Replace
              logo: "https://nathanassociates.in/images/logo.svg", // ✅ Replace
              description:
                "Digital Survey & Marking, Approvals and Consultancy - accurate, reliable and delivered right.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9787240999", // ✅ Replace
                contactType: "services",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.instagram.com/nathanassociates/", // ✅ Replace
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
