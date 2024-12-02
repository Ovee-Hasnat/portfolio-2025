import { useScroll, useTransform, motion } from "motion/react";
import SectionTitle from "../common/sectionTitle";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-gradient-to-l from-black to-zinc-600/20">
      <motion.div
        style={{ y }}
        className="min-h-screen bg-neutral-950 max-w-screen-2xl rounded-3xl mx-auto p-6"
      >
        <SectionTitle title={"Experience"} />
      </motion.div>
    </div>
  );
}
