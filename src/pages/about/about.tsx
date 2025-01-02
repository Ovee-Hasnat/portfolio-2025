import SectionTitle from "@/components/common/sectionTitle";
import PrimaryNav from "@/components/navbar/primaryNav";
import photo from "/images/profile/profile_1.webp";

import { useScroll, motion, useTransform } from "motion/react";

export default function About() {
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <PrimaryNav />
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6 relative">
        <SectionTitle title={"About"} />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="mt-4 w-[600px] h-[600px] rounded-full shadow-lg overflow-hidden absolute left-0 right-0 m-auto"
        >
          <img
            src={photo}
            alt="profile photo of Ovee"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
  );
}
