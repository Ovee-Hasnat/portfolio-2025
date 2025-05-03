import { useScroll, motion, useTransform } from "motion/react";

export default function HeroText() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <motion.div style={{ y }}>
      <div className="hidden mt-10 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-700 bg-white cursor-default animate-title font-display sm:text-7xl md:text-8xl whitespace-nowrap bg-clip-text text-center">
        OveeHasnat
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </motion.div>
  );
}
