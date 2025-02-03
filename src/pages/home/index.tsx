import CTA_Home from "@/components/cta/cta_home";
import Experience from "@/components/experience/experience";
import Expertise from "@/components/home/Expertise";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-gradient-to-l from-black to-zinc-600/20 space-y-16">
        <CTA_Home />
        <Experience />
        <Expertise />
      </div>
    </main>
  );
}
