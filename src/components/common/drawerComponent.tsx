import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoUpwork,
  BiMap,
} from "react-icons/bi";
import { TbBrandFiverr, TbBrandWhatsapp } from "react-icons/tb";

export default function DrawerComponent() {
  return (
    <DrawerContent>
      <div className="max-w-screen-2xl mx-auto mt-4 text-zinc-500">
        <DrawerHeader>
          <DrawerTitle className="font-light">Contact</DrawerTitle>
        </DrawerHeader>

        <div className="py-6">
          <div className="space-y-2">
            <span className="flex items-center gap-2">
              <BiLogoGmail size={20} />
              hasnat.ovee@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <TbBrandWhatsapp size={20} /> +880 1521 436302
            </span>
            <span className="flex items-center gap-2">
              <BiMap size={20} /> Dhaka, Bangladesh
            </span>
          </div>

          <div className="my-16">
            <h4 className="font-light text-muted-foreground">
              Other Socials -
            </h4>

            <ul className="mt-6 lg:mt-8 flex gap-8 lg:gap-16 items-center justify-between">
              <li className="text-4xl">
                <a
                  href="https://www.github.com/Ovee-Hasnat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoGithub />
                </a>
              </li>

              <li className="text-4xl">
                <a
                  href="https://www.linkedin.com/in/hasnat-ovee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoLinkedin />
                </a>
              </li>

              <li className="text-4xl">
                <a
                  href="https://www.upwork.com/freelancers/~0100349f45b74ac206"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLogoUpwork />
                </a>
              </li>

              <li className="text-4xl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <TbBrandFiverr />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DrawerContent>
  );
}
