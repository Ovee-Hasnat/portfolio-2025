import Particles from "../common/particles";
import HeroText from "./heroText";
import NavForHero from "../navbar/navForHero";
import Scrambles from "../common/scrambles";

export default function Hero() {
  return (
    <section className="h-screen relative overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col items-center justify-center h-screen container mx-auto">
        <NavForHero />

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={150}
        />

        <HeroText />

        <div className="my-4 text-center animate-fade-in">
          <h2 className="text-sm md:text-base text-zinc-700 lowercase">
            &#x5b; `Software Engineer`, `Photographer`, `Learner` &#x5d;
            {/* &#x7c; */}
          </h2>
        </div>

        {/* <Link to="/contact" className={buttonVariants({ variant: "outline" })}>
          open to work - let's talk
        </Link> */}

        <Scrambles />
      </div>
    </section>
  );
}
