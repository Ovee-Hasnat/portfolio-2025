import { useScroll, useTransform, motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import DrawerComponent from "../common/drawerComponent";

export default function CTA_Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [60, -200]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{ y }}
      className="text-zinc-800 bg-zinc-950 max-w-screen-2xl rounded-3xl mx-auto px-6 py-12 md:py-24 md:px-16 cursor-default select-none flex flex-wrap gap-20 items-center justify-between section-reveal"
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
        <h2 className="text-5xl md:text-8xl font-sans font-thin tracking-tight">
          the next{" "}
          <HoverCard openDelay={100}>
            <HoverCardTrigger>
              <i className="text-white/80 cursor-pointer leading-none">MVP</i>
            </HoverCardTrigger>
            <HoverCardContent className="text-base md:text-lg font-normal tracking-normal bg-zinc-900 text-zinc-600 border-none font-mono">
              Most Valuable Player.
            </HoverCardContent>
          </HoverCard>{" "}
          of <br /> your team.
        </h2>
      </div>

      <div
        className="w-full xl:w-auto"
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
        }}
      >
        <Drawer>
          <h4 className="md:text-xl text-zinc-600 text-right font-light">
            Ready to Grow?{" "}
            <DrawerTrigger>
              <span className="text-white/70 hover:text-white an-ease cursor-pointer underline decoration-zinc-700 font-display">
                Let's connect
              </span>{" "}
              🙌
            </DrawerTrigger>
          </h4>

          {/* DRAWER Component */}
          <DrawerComponent />
        </Drawer>
      </div>
    </motion.div>
  );
}
