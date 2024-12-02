import GlitchedWriter, { presets } from "glitched-writer";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect } from "react";

export default function Scrambles() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useEffect(() => {
    const writer = new GlitchedWriter(".text", {
      ...presets.neo,
      letterize: true,
    });

    const phrases = [
      "building things for the web since 2023.",
      "always learning, open to critique.",
      "'改善.' kaizen. continual improvement.",
    ];
    writer.queueWrite(phrases, 3000, true);
  }, []);
  return (
    <motion.div
      style={{ y }}
      className="mt-24 text-center animate-fade-in select-none"
    >
      <p className="text text-xs sm:text-sm text-zinc-700 font-light"></p>
    </motion.div>
  );
}