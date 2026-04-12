import { caseStudies } from "@/constants/caseStudies";
import { useEffect, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import NotFound from "../notFound";
import { FaLink } from "react-icons/fa";
import { Card } from "@/components/common/card";
import { CaseStudyType } from "@/types/case-study";
import { motion } from "motion/react";

export default function CaseStudy() {
  const location = useLocation();
  const { slug } = useParams();
  const currentIndex = caseStudies.findIndex((study) => study.slug === slug);
  const hasValidSlug = currentIndex >= 0;
  const currentStudy: CaseStudyType | undefined = hasValidSlug
    ? caseStudies[currentIndex]
    : undefined;
  const nextStudy = hasValidSlug
    ? caseStudies[(currentIndex + 1) % caseStudies.length]
    : undefined;
  const isCaseStudyPath = location.pathname.startsWith("/case-study/");
  const lastValidStudyRef = useRef<CaseStudyType | null>(null);
  const lastNextStudyRef = useRef<CaseStudyType | null>(null);

  if (currentStudy) {
    lastValidStudyRef.current = currentStudy;
  }
  if (nextStudy) {
    lastNextStudyRef.current = nextStudy;
  }

  const resolvedStudy = currentStudy ?? lastValidStudyRef.current;
  const resolvedNextStudy = nextStudy ?? lastNextStudyRef.current;

  useEffect(() => {
    if (!isCaseStudyPath || !hasValidSlug) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hasValidSlug, isCaseStudyPath, slug]);

  // During exit animations, this route can remain mounted briefly while params
  // already changed. Keep the last valid content to preserve smooth transitions.
  // Show 404 only when user is actually on an invalid case-study URL.
  if (isCaseStudyPath && (!hasValidSlug || !slug) && !resolvedStudy) {
    return <NotFound />;
  }
  if (!resolvedStudy) {
    return null;
  }

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="max-w-screen-2xl mx-auto text-zinc-600 my-32">
        <div
          className="h-[50dvh] lg:h-[65dvh] w-full bg-cover lg:bg-contain bg-center bg-scroll lg:bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(/images/projects/${resolvedStudy?.coverImage})`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="min-h-svh px-4">
          <h2 className="text-6xl lg:text-8xl text-zinc-200 font-display -mt-7 lg:-mt-12">
            {resolvedStudy?.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 my-8 lg:my-16 lg:text-lg">
            <div className="space-y-4">
              <p>{resolvedStudy?.description}</p>
              {resolvedStudy?.url && (
                <a
                  href={resolvedStudy?.url}
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
                <span className="font-semibold">{resolvedStudy?.workScope}</span>
              </p>

              <ul className="flex justify-end gap-2 flex-wrap">
                {resolvedStudy.tech.split(",").map((tech, index) => (
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
            {resolvedStudy?.problems?.length > 0 ? (
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

          {resolvedStudy?.problems &&
            resolvedStudy.problems.length > 0 &&
            resolvedStudy.problems.map((problem, index) => (
              <motion.div
                key={index}
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
                className={`mb-14 grid lg:grid-cols-2 gap-5 place-items-center`}
              >
                {/* Conditionally render image/text order based on index */}
                {index % 2 === 0 ? (
                  <>
                    {/* Text on left */}
                    <div className="text-sm lg:text-lg self-center order-2 lg:order-1">
                      <h5 className="font-display mb-2 md:mb-4">
                        {problem?.problem}
                      </h5>
                      <p className="font-light text-justify md:w-4/5">
                        {problem?.solution}
                      </p>
                    </div>

                    {/* Image on right */}
                    <div className="order-1 lg:order-2">
                      <img
                        src={`/images/case-study/${problem?.image}`}
                        alt={problem?.problem}
                        loading="lazy"
                        decoding="async"
                        className="object-contain mx-auto lg:ml-auto"
                        width={600}
                        height={338}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image on left */}
                    <div className="order-1 lg:order-1">
                      <img
                        src={`/images/case-study/${problem?.image}`}
                        alt={problem?.problem}
                        loading="lazy"
                        decoding="async"
                        className="object-contain mx-auto lg:mr-auto"
                        width={600}
                        height={338}
                      />
                    </div>

                    {/* Text on right */}
                    <div className="text-sm lg:text-lg self-center order-2 lg:order-2 md:w-4/5 md:ml-auto">
                      <h5 className="font-display mb-2 md:mb-4">
                        {problem?.problem}
                      </h5>
                      <p className="font-light text-justify">
                        {problem?.solution}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
        </div>

        <div className="text-end lg:w-2/5 lg:ml-auto px-4 mt-40">
          {resolvedNextStudy && (
            <Link
              className="font-display an-ease text-white/20 hover:text-white/70 w-fit text-lg"
              to={`/case-study/${resolvedNextStudy.slug}`}
            >
              <span>next &#x279D;</span>
              <h2 className="text-4xl mt-2">{resolvedNextStudy.title}</h2>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
