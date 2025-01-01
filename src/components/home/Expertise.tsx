import SectionTitle from "../common/sectionTitle";
import ParallaxText from "../common/ParallaxText";

export default function Expertise() {
  return (
    <section className="bg-gradient-to-l from-black to-zinc-600/20">
      <SectionTitle title={"Expertise"} />

      <div className="md:pt-10 pb-24 text-xl md:text-2xl font-mono lowercase">
        <ParallaxText baseVelocity={-2}>
          <div className="flex gap-20">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>Redux</p>
            <p>Tailwind CSS</p>
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <div className="flex gap-20">
            <p>Node.js</p>
            <p>PHP</p>
            <p>Laravel</p>
            <p>MySQL</p>
            <p>MongoDB</p>
          </div>
        </ParallaxText>
      </div>
    </section>
  );
}
