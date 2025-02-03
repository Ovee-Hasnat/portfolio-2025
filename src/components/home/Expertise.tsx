import { motion } from "motion/react";
import ParallaxText from "../common/ParallaxText";

export default function Expertise() {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.3,
            ease: "linear",
          },
        }}
        viewport={{ once: true }}
        className="text-zinc-500 lowercase italic font-light text-center text-lg sm:text-xl animate-fade-in"
      >
        Driven by expertise in &#x2713;
      </motion.h2>

      <div className="pt-16 pb-24 text-xl md:text-3xl font-mono lowercase">
        <ParallaxText baseVelocity={-2}>
          <div className="flex gap-12 md:gap-20">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>Redux</p>
            <p>Tailwind CSS</p>
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <div className="flex gap-12 md:gap-20">
            <p>Node.js</p>
            <p>PHP</p>
            <p>Laravel</p>
            <p>MySQL</p>
            <p>MongoDB</p>
          </div>
        </ParallaxText>
      </div>
    </section>
  );
}
