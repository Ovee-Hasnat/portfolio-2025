import { motion, useScroll, useTransform } from "motion/react";
import { PiCodeLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function MeetDev() {
  const { scrollYProgress } = useScroll();

  // x moves from -400 to 100, but stops once the div goes out of view
  const x = useTransform(scrollYProgress, [0, 0.5], [-600, 400]);

  return (
    <section className="relative text-zinc-800 max-w-screen-2xl mx-auto pt-12 pb-24 lg:pt-52 lg:pb-52 px-6 flex gap-24 md:gap-40 md:items-end justify-between flex-col lg:flex-row-reverse">
      <motion.div className="text-5xl md:text-8xl font-thin md:text-right relative z-10">
        <PiCodeLight className="md:ml-auto text-zinc-500" />
        <h2 className="mt-6">
          Meet <br /> your dev
        </h2>
      </motion.div>
      <div className="flex-1 lg:max-w-2xl space-y-4 text-lg font-light text-zinc-700 md:text-zinc-600 text-justify relative z-10">
        <h4>Hi, I’m Md. Abu Hasnat Ovee 👋</h4>

        <p>
          a web developer passionate about building seamless, high-performance
          websites and web apps. With expertise in{" "}
          <span className="font-medium text-zinc-500">React.js</span>,{" "}
          <span className="font-medium text-zinc-500">Next.js</span>, and{" "}
          <span className="font-medium text-zinc-500">Laravel</span>, I create
          dynamic, scalable solutions tailored to your business needs.
        </p>

        <h4>
          Need a fast, secure, and user-friendly web solution? Let’s make it
          happen! 🚀
        </h4>

        <span className="pt-10 block">
          <Link
            className="font-display hover:underline an-ease text-white/70 w-fit"
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
        className="hidden lg:block text-[200px] font-display tracking-tight text-black absolute left-0 z-0 top-20 whitespace-pre"
      >
        ABOUT
      </motion.h1>
    </section>
  );
}
