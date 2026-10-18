import SectionHeading from "@/components/SectionHeading";
import ProjectsClientCarousel from "@/components/ProjectsClientCarousel";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects | Nathan Associates",
  description:
    "Project experience across surveying, infrastructure, and development - selected survey, mapping and marking engagements delivered by Nathan Associates.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Introduction */}
      <section className="bg-white pb-10 pt-28 md:pb-12 md:pt-32">
        <div className="container-site">
          <SectionHeading
            align="center"
            margin="mb-6 md:mb-8"
            eyebrow="PORTFOLIO"
            title="Our Projects"
            description="A showcase of precision and excellence across various engineering sectors."
            className="mx-auto"
          />
        </div>
      </section>

      {/* Trusted By Leading Organizations + auto-rotating logo carousel */}
      <section aria-labelledby="projects-trusted-title" className="bg-white pb-16 md:pb-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="projects-trusted-title"
              className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl"
            >
              Trusted By Leading Organizations
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              We proudly provide professional survey solutions for infrastructure, real estate
              development, industrial projects, and property surveying.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ProjectsClientCarousel />
          </div>
        </div>
      </section>

      {/* Portfolio grid — all eight supplied entries, filterable by status */}
      <section id="portfolio" aria-labelledby="portfolio-title" className="bg-gray-50 py-16 md:py-20">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Project Experience"
            title="Selected Project Portfolio"
            description="Every card below is one supplied project record — with its client, location, service type, full description and current status."
            className="mx-auto"
          />

          <div className="mt-10">
            <ProjectsGrid />
          </div>
        </div>
      </section>
    </>
  );
}
