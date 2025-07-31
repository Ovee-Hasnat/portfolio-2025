import { motion } from "framer-motion";

import { Card } from "@/components/common/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/hasnat-ovee/",
    label: "Linkedin",
    handle: "Md. Abu Hasnat Ovee",
    tap: false,
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:hasnat.ovee@gmail.com",
    label: "Email",
    handle: "hasnat.ovee@gmail.com",
    tap: true,
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Ovee-Hasnat",
    label: "Github",
    handle: "Ovee-Hasnat",
    tap: false,
  },
];

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopyClick = async () => {
    try {
      await window.navigator.clipboard.writeText("hasnat.ovee@gmail.com");
      toast({
        description: "Email address has been copied.",
        duration: 3000,
        variant: "dark",
      });
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-4 my-32">
        <h2 className="text-7xl font-thin lowercase">Contact</h2>

        <motion.div
          className="mt-10 grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16"
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
          {socials.map((s) => {
            if (!s.tap)
              return (
                <Card key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    className="p-10 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-700 via-zinc-700/50 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 border-zinc-700 bg-zinc-900 group-hover:border-zinc-500">
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
              );
            else
              return (
                <Card>
                  <div
                    className="p-10 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 cursor-pointer h-full"
                    onClick={handleCopyClick}
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-700 via-zinc-700/50 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 border-zinc-700 bg-zinc-900 group-hover:border-zinc-500">
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
                  </div>
                </Card>
              );
          })}
        </motion.div>

        <p className="mt-10 font-light tracking-wide lg:text-lg text-zinc-500 text-center animate-fade-in">
          <b>Let's discuss</b> the next big idea. 💡
        </p>
      </div>
    </section>
  );
}
