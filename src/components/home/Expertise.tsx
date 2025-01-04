import { motion, useInView } from "motion/react";
import ParallaxText from "../common/ParallaxText";
import { useRef } from "react";

export default function Expertise() {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-gradient-to-l from-black to-zinc-600/20">
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
        viewport={{ amount: 0.8 }}
        className="text-zinc-800 lowercase italic font-light text-center text-xl animate-fade-in pt-12"
      >
        Driven by expertise in &#x2713;
      </motion.h2>

      <div className="pt-16 pb-24 text-xl md:text-2xl font-mono lowercase">
        <ParallaxText baseVelocity={-2}>
          <div className="flex gap-20">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>Redux</p>
            <p>Tailwind CSS</p>
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <div className="flex gap-20">
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
