import { motion } from "motion/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
      className="py-14 relative text-center select-none"
    >
      <h2 className="text-4xl sm:text-5xl font-extralight tracking-[5px] md:tracking-[8px] uppercase bg-gradient-to-b from-zinc-800/80 to-black inline-block text-transparent bg-clip-text">
        {title}
      </h2>
      <h3 className="text-zinc-600 text-xl sm:text-2xl font-display -mt-8 lowercase">
        {title}
      </h3>
    </motion.div>
  );
}
