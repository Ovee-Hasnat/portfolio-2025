import { caseStudies } from "@/constants/caseStudies";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "../notFound";
import { FaLink } from "react-icons/fa";
import { Card } from "@/components/common/card";
import { CaseStudyType } from "@/types/case-study";
import { motion } from "motion/react";

export default function CaseStudy() {
  const { slug } = useParams();
  const currentIndex = caseStudies.findIndex((study) => study.slug === slug);
  const currentStudy: CaseStudyType | undefined = caseStudies[currentIndex];
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex, slug, currentStudy, nextStudy]);

  // Fallback to 404 if slug is invalid
  if (currentIndex < 0) {
    return <NotFound />;
  }

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 my-32">
        <div
          className="h-[50dvh] lg:h-[65dvh] w-full lg:bg-contain bg-center bg-fixed bg-no-repeat"
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

          <div className="grid lg:grid-cols-2 gap-10 my-8 lg:my-16 lg:text-lg">
            <div className="space-y-4">
              <p>{currentStudy?.description}</p>
              {currentStudy?.url && (
                <a
                  href={currentStudy?.url}
                  target="_blank"
                  className="block w-fit font-display text-base shadow-md"
                >
                  <Card>
                    <span className="py-1.5 px-8 flex-center gap-2">
                      <FaLink size={14} /> <span>Live link</span>
                    </span>
                  </Card>
                </a>
              )}
            </div>

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

          {/* Problems and solves */}
          <h3 className="text-3xl md:text-5xl font-thin py-12">
            {currentStudy?.problems?.length > 0 ? (
              <>
                the challenges
                <br />
                &amp; my contributions -
              </>
            ) : (
              <>
                the case study is being written
                <br />
                &amp; not published yet!
              </>
            )}
          </h3>

          {currentStudy?.problems &&
            currentStudy?.problems?.length > 0 &&
            currentStudy?.problems?.map((problem, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.5,
                  },
                }}
                viewport={{ once: true }}
                key={index}
                className="mb-14 grid lg:grid-cols-2 gap-5"
              >
                <div className="text-sm lg:text-lg self-center">
                  <h5 className="font-display mb-2 md:mb-4">
                    {problem?.problem}
                  </h5>
                  <p className="font-light text-justify">{problem?.solution}</p>
                </div>

                <img
                  src={`/images/projects/${problem?.image}`}
                  alt={problem?.problem}
                  loading="lazy"
                  className="object-contain ml-auto shadow"
                  width="430px"
                />
              </motion.div>
            ))}
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
