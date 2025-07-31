import { motion } from "framer-motion";

import Particles from "../common/particles";
import HeroText from "./heroText";
import Scrambles from "../common/scrambles";
import NumberCard from "../common/NumberCard";
import ScrollDown from "../common/scroll_down";

const cards = [
  { title: "Years of Experience", number: 2, plus: true },
  { title: "Projects Delivered with Excellence", number: 15, plus: true },
  { title: "Possibilities for Your Business", number: "∞" },
  { title: "Goal – Turning Ideas into Reality", number: 1 },
];

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex-center flex-col h-screen container mx-auto">
        <Scrambles />

        <p className="md:hidden my-12 select-none text-sm text-zinc-600 font-light text-center">
          crafting seamless digital experiences <br /> since 2023.
        </p>

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        <HeroText />

        <div className="md:mb-4 text-center animate-fade-in">
          <h2 className="text-sm md:text-base text-zinc-600 lowercase italic">
            &#x5b; `Software Engineer`, `Photographer`, `Learner` &#x5d;
            {/* &#x7c; */}
          </h2>
        </div>

        <div className="mt-24 md:mt-32 max-w-[95%] md:max-w-screen-md px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }} // Drops further for more impact
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: index === 0 ? 2 : 2 + index * 0.25, // Staggered effect
              }}
            >
              <NumberCard {...card} />
            </motion.div>
          ))}
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}
