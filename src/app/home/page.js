import AboutSection from "@/components/About";
import { Hero } from "@/components/Hero";
import CapabilityStrip from "@/components/CapabilityStrip";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TechnicalFlow from "@/components/TechnicalFlow";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/Main-Contact";

export const metadata = {
  title: "Nathan Associates - Digital Survey, Approvals & Consultancy",
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
};

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <TechnicalFlow />
      <WhySection />
      <ContactSection />
    </>
  );
}