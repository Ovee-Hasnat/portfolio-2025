import { Card } from "@/components/common/card";
import ProjectCard from "@/components/common/project_card";
import { caseStudies } from "@/constants/caseStudies";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 my-32 px-4 2xl:px-0">
        <h2 className="text-7xl font-thin lowercase">Projects</h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-5">
          {caseStudies.map((project) => (
            <Card key={project.slug}>
              <ProjectCard project={project} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
