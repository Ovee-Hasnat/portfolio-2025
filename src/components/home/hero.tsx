import { motion } from "framer-motion";

import Particles from "../common/particles";
import HeroText from "./heroText";
import Scrambles from "../common/scrambles";
import NumberCard from "../common/NumberCard";

const cards = [
  { title: "Years of Experience", number: 2, plus: true },
  { title: "Projects Delivered with Excellence", number: 20, plus: true },
  { title: "Possibilities for Your Business", number: "∞" },
  { title: "Goal – Turning Ideas into Reality", number: 1 },
];

export default function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex-center flex-col h-screen container mx-auto">
        <Scrambles />

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />

        <HeroText />

        <div className="my-4 text-center animate-fade-in">
          <h2 className="text-sm md:text-base text-zinc-700 lowercase italic">
            &#x5b; `Software Engineer`, `Photographer`, `Learner` &#x5d;
            {/* &#x7c; */}
          </h2>
        </div>

        <div className="mt-28 max-w-80 md:max-w-screen-md px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index === 0 ? 2 : 2 + index * 0.2, // Adds a delay for each card
              }}
            >
              <NumberCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
