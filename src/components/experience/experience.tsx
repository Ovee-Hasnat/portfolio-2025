import { useScroll, useTransform, motion, useInView } from "motion/react";
import SectionTitle from "../common/sectionTitle";
import ExpCard from "./expCard";
import { experience } from "@/constants/experience";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{ y }}
      className="bg-zinc-950 max-w-screen-2xl rounded-3xl mx-auto p-6"
    >
      <SectionTitle title={"Experience"} />

      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="grid lg:grid-cols-2 gap-6 pt-4 lg:pt-10 max-w-screen-lg mx-auto pb-10"
        // className="columns-1 lg:columns-2 gap-6 p-4"
      >
        <div className="row-span-2">
          <ExpCard data={experience[0]} />
          <Link
            to={"/projects"}
            className="block group text-center mt-6 border border-zinc-900/40 py-16 rounded-2xl text-zinc-700 hover:text-zinc-600 hover:border-zinc-900 an-ease"
          >
            <span className="text-white opacity-30 group-hover:opacity-100 an-ease">
              Learn more about the projects
            </span>{" "}
            🚀
          </Link>
        </div>

        <ExpCard data={experience[1]} />

        <ExpCard data={experience[2]} />
      </div>
    </motion.div>
  );
}
