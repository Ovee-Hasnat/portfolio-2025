import { useScroll, useTransform, motion } from "motion/react";
import SectionTitle from "../common/sectionTitle";

export default function FeaturedProjects() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.3, 1], [100, -1000]);

  return (
    <section className="pb-32 md:pb-52 relative overflow-hidden" id="showcase">
      <div className="max-w-screen-2xl mx-auto px-6 relative">
        <SectionTitle title="Showcase" />

        {/* <div className="md:mt-36 grid md:grid-cols-2 gap-6">
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
          <FeaturedProjectCard />
        </div> */}
      </div>

      {/* Grid Layout */}
      {/* <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-zinc-800/50 p-8 rounded-xl min-w-[320px] flex items-center justify-center shadow-md"
          >
            <p className="text-white">Item {i + 1}</p>
          </div>
        ))}
      </div> */}

      <motion.h1
        style={{
          x,
        }}
        className="hidden lg:block text-[120px] font-display tracking-tight text-zinc-900/40 absolute right-0 z-10 top-40"
      >
        Featured
      </motion.h1>
    </section>
  );
}
