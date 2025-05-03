import { caseStudies } from "@/constants/caseStudies";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../notFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const currentIndex = caseStudies.findIndex((study) => study.slug === slug);
  const currentStudy = caseStudies[currentIndex];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex, slug, currentStudy, nextStudy]);

  // Fallback to 404 if slug is invalid
  if (currentIndex < 0) {
    return <NotFound />;
  }

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 my-32">
        <div
          className="h-[50dvh] lg:h-[65dvh] w-full bg-fixed bg-center lg:bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(/images/projects/${currentStudy?.coverImage})`,
          }}
        >
          {/* <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent" /> */}
        </div>

        <div className="min-h-svh px-4">
          <h2 className="text-6xl lg:text-8xl text-zinc-200 font-display -mt-7 lg:-mt-12">
            {currentStudy?.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 my-8 lg:my-16 text-xl">
            <p>{currentStudy?.description}</p>

            <div className="space-y-4 text-end">
              <p>
                <span className="font-light">my contributions - </span>
                <span className="font-semibold">{currentStudy?.workScope}</span>
              </p>

              <ul className="flex justify-end gap-2 flex-wrap">
                {currentStudy?.tech.split(",").map((tech, index) => (
                  <li
                    className="py-1 px-3 bg-zinc-900/60 text-zinc-600 text-sm rounded-lg font-display"
                    key={index}
                  >
                    {tech.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-end lg:w-1/4 lg:ml-auto px-4">
          <Link
            className="font-display an-ease text-white/20 hover:text-white/70 w-fit text-lg"
            to={`/case-study/${nextStudy?.slug}`}
          >
            <span>next &#x279D;</span>
            <h2 className="text-4xl mt-2">{nextStudy?.title}</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
