import photo from "/images/profile/profile_1.webp";

import { useScroll, motion, useTransform } from "motion/react";
import { useEffect } from "react";

export default function About() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  console.log(y);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6 mt-32">
        <h2 className="text-7xl font-thin lowercase">
          Creative <br /> Developer
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-[370px] mt-4"
        >
          <img
            src={photo}
            alt="profile photo of Ovee"
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70"
          />
        </motion.div>
      </div>
    </div>
  );
}

// Creative & Strategy services for
// entrepreneurs, startups, & small businesses
// I help professionals & projects reach their goals with Design,
// Copywriting, Consultancy, & No-code Framer pages.

// Designer, developer, and tech enthusiast—creating
// exceptional web and app experiences.

// I am a full-stack developer with a passion for creating exceptional web and app experiences.
// I have a strong foundation in both front-end and back-end development, and I am always
// looking to learn new technologies and improve my skills. I am a creative problem solver who
// enjoys working on challenging projects and collaborating with others to create innovative
// solutions.
