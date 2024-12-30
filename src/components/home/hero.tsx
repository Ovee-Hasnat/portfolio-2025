import Particles from "../common/particles";
import HeroText from "./heroText";
import NavForHero from "../navbar/navForHero";
import Scrambles from "../common/scrambles";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <NavForHero />

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={150}
        />

        <HeroText />

        <div className="my-4 text-center animate-fade-in">
          <h2 className="text-xs sm:text-sm text-zinc-700 ">
            Software Engineer | Photographer | Learner
          </h2>
        </div>

        <Scrambles />
      </div>
    </section>
  );
}
