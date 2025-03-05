import { useScroll, useTransform, motion } from "motion/react";
import SectionTitle from "../common/sectionTitle";

export default function FeaturedProjects() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.5, 1], [100, -1000]);

  return (
    <section className="pb-32 md:pb-52 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <SectionTitle title="Showcase" />
      </div>
      <motion.h1
        style={{
          x,
        }}
        className="hidden lg:block text-[120px] font-display tracking-tight text-zinc-900/40 absolute right-0 z-0 top-40"
      >
        Featured
      </motion.h1>
    </section>
  );
}
