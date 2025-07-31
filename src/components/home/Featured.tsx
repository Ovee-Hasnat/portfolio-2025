import { useScroll, useTransform, motion } from "motion/react";
import SectionTitle from "../common/sectionTitle";
import FeaturedProjectCard from "../common/FeaturedProjectCard";

import { featuredProjects } from "@/constants/featured";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "../common/card";

export default function FeaturedProjects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Tracks this specific section
    offset: ["start end", "end start"], // Triggers animation when the section is in view
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1600]);

  return (
    <section
      className="pb-24 md:pb-48 relative overflow-hidden"
      id="showcase"
      ref={ref}
    >
      <div className="max-w-screen-2xl mx-auto px-4 relative">
        <SectionTitle title="Showcase" />

        <div className="mt-20 md:mt-40 space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={index}
              project={project}
              reverse={index % 2 !== 0 ? true : false}
            />
          ))}
        </div>

        <div className="pt-10 block group">
          <Card>
            <Link
              className="font-display an-ease text-white/50 group-hover:text-white md:text-lg text-center py-6 block w-full"
              to="/projects"
            >
              See all projects 🛠️
            </Link>
          </Card>
        </div>
      </div>

      <motion.h1
        style={{
          x,
        }}
        className="hidden lg:block text-[120px] font-display tracking-tight text-zinc-900/50 absolute right-0 z-10 top-40"
      >
        featured
      </motion.h1>
    </section>
  );
}
