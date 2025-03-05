import GlitchedWriter, { presets } from "glitched-writer";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Scrambles() {
  useEffect(() => {
    const writer = new GlitchedWriter(".text", {
      ...presets.neo,
      letterize: true,
    });

    const phrases = [
      "crafting seamless digital experiences since 2023.",
      "fueling your digital success.",
      "reliable. skilled. let’s Build Together.",
      "'改善.' kaizen. continual improvement.",
      "Let's build something amazing together.",
    ];
    writer.queueWrite(phrases, 3000, true);
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay: 1.4,
        },
      }}
      className="my-12 text-center select-none max-w-64 md:max-w-max mx-auto h-9"
    >
      <p className="text text-xs md:text-base text-zinc-700 font-light font-mono"></p>
    </motion.div>
  );
}
