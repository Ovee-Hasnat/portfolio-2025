import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

type ProjectType = {
  title: string;
  description: string;
  image: string;
  slug: string;
  tech: string;
};

interface FeaturedProjectCardProps {
  project: ProjectType;
  reverse?: boolean;
}

export default function FeaturedProjectCard({
  project,
  reverse = false,
}: FeaturedProjectCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Tracks this specific section
    offset: ["start end", "end start"], // Triggers animation when the section is in view
  });

  const y = useTransform(scrollYProgress, [0.3, 1], [0, -160]);
  const yMobile = useTransform(scrollYProgress, [0.3, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.1]);

  return (
    <div
      ref={ref}
      className="lg:h-[50dvh] grid lg:grid-cols-5 gap-4 lg:gap-10"
      dir={reverse ? "rtl" : ""}
    >
      <div className="rounded-lg overflow-hidden lg:col-span-3">
        <motion.img
          style={{ scale }}
          // initial={{ opacity: 1 }}
          // whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={`/images/projects/${project?.image}`}
          alt={project?.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        style={{ y }}
        className="lg:col-span-2 place-content-end md:space-y-3 hidden lg:block"
        dir="ltr"
      >
        <h1 className="text-zinc-700 text-2xl md:text-4xl font-display">
          {project?.title}
        </h1>

        <p className="text-zinc-800 md:text-lg">{project?.description}</p>

        <ul className="pt-5 flex gap-2 flex-wrap">
          {project?.tech.split(",").map((tech, index) => (
            <li
              className="py-1 px-3 bg-zinc-900/60 text-zinc-600 text-sm rounded-lg font-display"
              key={index}
            >
              {tech.trim()}
            </li>
          ))}
        </ul>

        <span className="pt-10 block">
          <Link
            className="font-display an-ease text-white/50 hover:text-white w-fit text-lg"
            to={`/case-study/${project?.slug}`}
          >
            Explore this project &#x279D;
          </Link>
        </span>
      </motion.div>

      <motion.div
        style={{ y: yMobile }}
        className="pt-10 lg:col-span-2 place-content-end md:space-y-3 lg:hidden"
        dir="ltr"
      >
        <h1 className="text-zinc-600 text-2xl md:text-5xl font-display w-[90%]">
          {project?.title}
        </h1>

        <p className="text-zinc-700 md:text-lg">{project?.description}</p>

        <ul className="pt-5 flex gap-2 flex-wrap">
          {project?.tech.split(",").map((tech, index) => (
            <li
              className="py-1 px-3 bg-zinc-900/60 text-zinc-600 text-sm rounded-lg font-display"
              key={index}
            >
              {tech.trim()}
            </li>
          ))}
        </ul>

        <span className="pt-6 block">
          <Link
            className="font-display an-ease text-white/70 hover:text-white w-fit"
            to={"/about"}
          >
            Read more &#x279D;
          </Link>
        </span>
      </motion.div>
    </div>
  );
}
