import { useScroll, useTransform, motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function CTA_Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [60, -200]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{ y }}
      className="text-zinc-800 bg-zinc-950 max-w-screen-2xl rounded-3xl mx-auto p-6 md:py-24 md:px-16 cursor-default select-none"
    >
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className=""
      >
        <h2 className="text-5xl lg:text-8xl font-sans font-thin tracking-tight">
          the next{" "}
          <HoverCard openDelay={100}>
            <HoverCardTrigger>
              <i className="text-white/80 cursor-pointer leading-none">MVP</i>
            </HoverCardTrigger>
            <HoverCardContent className="text-lg font-normal tracking-normal bg-zinc-900 text-zinc-600 border-none font-mono">
              Most Valuable Player.
            </HoverCardContent>
          </HoverCard>{" "}
          of <br /> your team.
        </h2>
      </div>
    </motion.div>
  );
}
