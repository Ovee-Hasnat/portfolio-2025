import { motion } from "framer-motion";

import { Card } from "@/components/common/card";
import PrimaryNav from "@/components/navbar/primaryNav";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/hasnat-ovee/",
    label: "Linkedin",
    handle: "Md. Abu Hasnat Ovee",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:hasnat.ovee@gmail.com",
    label: "Email",
    handle: "hasnat.ovee@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Ovee-Hasnat",
    label: "Github",
    handle: "Ovee-Hasnat",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <PrimaryNav />
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6 h-full mt-14 xl:mt-32 mb-10">
        <motion.div
          className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16"
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {socials.map((s) => (
            <Card>
              <a
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-700 via-zinc-700/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 border-zinc-700 bg-zinc-900 group-hover:border-zinc-500">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-zinc-100 font-display text-center">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </a>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
