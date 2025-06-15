import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { PiCodeLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function MeetDev() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Tracks this specific section
    offset: ["start end", "end start"], // Triggers animation when the section is in view
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 300]);

  return (
    <section
      ref={ref}
      className="relative text-zinc-800 max-w-screen-2xl mx-auto pt-12 pb-20 lg:pt-52 lg:pb-36 px-6 flex gap-24 md:gap-40 md:items-end justify-between flex-col lg:flex-row-reverse"
    >
      <motion.div className="text-5xl md:text-8xl font-thin md:text-right relative z-10">
        <PiCodeLight className="md:ml-auto text-zinc-500" />
        <h2 className="mt-6">
          Meet <br /> your dev
        </h2>
      </motion.div>
      <div className="flex-1 lg:max-w-2xl space-y-4 md:text-lg font-light text-zinc-700 md:text-zinc-600 text-justify relative z-10">
        <h4>
          Hi, I’m <span className="font-medium text-zinc-500">Ovee</span> 👋
        </h4>

        {/* <p>
          a web developer passionate about building seamless, high-performance
          websites and web apps. With expertise in{" "}
          <span className="font-medium text-zinc-500">React.js</span>,{" "}
          <span className="font-medium text-zinc-500">Next.js</span>, and{" "}
          <span className="font-medium text-zinc-500">Laravel</span>, I create
          dynamic, scalable solutions tailored to your business needs.
        </p> */}

        <p>
          I help businesses grow by turning ideas into fast, reliable, and
          user-friendly websites and web applications. My goal is simple—create
          digital solutions that help you reach more customers, work smarter,
          and stand out online.
        </p>

        <h4>
          Clear process, on-time delivery, and real results.
          <br />
          Let’s bring your vision to life. 🚀
        </h4>

        <span className="pt-10 block">
          <Link
            className="font-display hover:underline an-ease text-white/70 hover:text-white w-fit"
            to={"/about"}
          >
            Learn more
          </Link>{" "}
          &#x279D;
        </span>
      </div>

      <motion.h1
        style={{
          x,
        }}
        className="hidden lg:block text-[120px] font-display tracking-tighter text-black absolute left-0 z-0 top-28"
      >
        about
      </motion.h1>
    </section>
  );
}
