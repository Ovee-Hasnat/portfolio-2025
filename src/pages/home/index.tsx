import CTAGlobal from "@/components/cta/cta_global";
import CTA_Home from "@/components/cta/cta_home";
import Experience from "@/components/experience/experience";
import Expertise from "@/components/home/Expertise";
import FeaturedProjects from "@/components/home/Featured";
import Hero from "@/components/home/hero";
import MeetDev from "@/components/home/MeetDev";

import Skillset from "@/components/home/skillset";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero />
      <div className="bg-gradient-to-l from-black to-zinc-600/20 space-y-16">
        <CTA_Home />
        <MeetDev />
        <Skillset />
        <FeaturedProjects />
        <Experience />
        <Expertise />
        <CTAGlobal />
      </div>
    </>
  );
}
