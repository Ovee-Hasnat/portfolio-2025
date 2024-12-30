import Experience from "@/components/experience/experience";
import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Experience />
      <Expertise />
    </main>
  );
}
