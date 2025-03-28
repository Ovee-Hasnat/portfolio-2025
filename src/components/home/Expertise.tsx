import ParallaxText from "../common/ParallaxText";
import SectionTitle from "../common/sectionTitle";

export default function Expertise() {
  return (
    <section className="py-20 md:py-32">
      <SectionTitle title="Expertise" />

      <div className="mt-16 text-4xl md:text-7xl font-display lowercase tracking-tight">
        <ParallaxText baseVelocity={-2}>
          <div className="flex gap-12 md:gap-20">
            <p>JavaScript</p>
            <p>React.js</p>
            <p>Next.js</p>
            <p>TypeScript</p>
            <p>Redux</p>
            <p>Tailwind CSS</p>
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={2}>
          <div className="flex gap-12 md:gap-20">
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
