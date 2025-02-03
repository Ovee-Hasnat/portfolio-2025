import { useScroll, useTransform, motion, useInView } from "motion/react";
import SectionTitle from "../common/sectionTitle";
import ExpCard from "./expCard";
import { experience } from "@/constants/experience";
import { useRef } from "react";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{ y }}
      className="min-h-screen bg-zinc-950 max-w-screen-2xl rounded-3xl mx-auto p-6"
    >
      <SectionTitle title={"Experience"} />

      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="grid lg:grid-cols-2 gap-6 pt-4 lg:pt-14 max-w-screen-lg mx-auto"
      >
        <div className="lg:row-span-2">
          <ExpCard data={experience[0]} />
        </div>

        <ExpCard data={experience[1]} />

        <ExpCard data={experience[2]} />
      </div>
    </motion.div>
  );
}
