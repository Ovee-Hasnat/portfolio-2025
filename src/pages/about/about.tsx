import ParallaxText from "@/components/common/ParallaxText";
import SectionTitle from "@/components/common/sectionTitle";
import PrimaryNav from "@/components/navbar/primaryNav";

export default function About() {
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <PrimaryNav />
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6">
        <SectionTitle title={"About"} />
        About
      </div>

      <section className="my-20 text-8xl">
        <ParallaxText baseVelocity={-4}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={4}>Scroll velocity</ParallaxText>
      </section>
    </div>
  );
}
