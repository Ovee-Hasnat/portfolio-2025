"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/constants/process";

const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current && sectionRef.current) {
      const container = scrollContainerRef.current;
      setScrollWidth(container.scrollWidth - sectionRef.current.clientWidth);
    }
  }, []);

  // Track the vertical scroll within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform vertical scroll into horizontal movement
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh]">
      {/* Sticky Scroll Section */}
      <div className="sticky top-32">
        <div className="flex-center flex-col md:flex-row md:gap-6">
          <motion.h1
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="text-5xl md:text-[120px] font-display tracking-tight text-zinc-900/60"
          >
            Trust
          </motion.h1>
          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="text-5xl md:text-[120px] font-display tracking-tight text-zinc-900/35"
          >
            the process
          </motion.h1>
        </div>
        <div className="mt-20 flex items-center overflow-hidden">
          <motion.div
            ref={scrollContainerRef}
            className="flex space-x-0 px-[25dvw]"
            style={{ x: xTransform }}
          >
            {process.map((title, i) => (
              <div
                key={i}
                className="w-[70dvw] lg:w-[33dvw] h-[30dvh] flex items-center text-zinc-700"
              >
                <span className="h-4 w-4 bg-zinc-800 rounded-full"></span>
                <span className="h-[1px] bg-zinc-800 w-full relative">
                  <h2 className="absolute left-0 bottom-0 text-8xl font-display text-zinc-900/50">
                    {i + 1}
                  </h2>
                  <p className="absolute left-0 top-4 text-lg lg:text-xl font-display max-w-[80%]">
                    {title}
                  </p>
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
