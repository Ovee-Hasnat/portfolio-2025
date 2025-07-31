import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import {
  AiOutlineCrown,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlinePhone,
} from "react-icons/ai";

import logo_gif from "/images/logo/short_logo.gif";

const navigation = [
  { name: "home", href: "/", icon: <AiOutlineHome /> },
  { name: "about", href: "/about", icon: <AiOutlineCrown /> },
  { name: "projects", href: "/projects", icon: <AiOutlineLaptop /> },
  { name: "contact", href: "/contact", icon: <AiOutlinePhone /> },
];

export default function PrimaryNav() {
  const controls = useAnimation();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const startAnimation = async () => {
      // await controls.start({
      //   y: 0, // Drops from the top
      //   opacity: 1,
      //   transition: { duration: 0.3, ease: "easeOut" },
      // });

      // Wait before expanding
      setTimeout(() => {
        controls.start({
          width: "100%", // Expands to full width
          paddingLeft: "1rem",
          paddingRight: "1rem",
          transition: {
            duration: 0.5, // Smooth expansion
            ease: "easeInOut",
          },
        });

        setExpanded(true);
      }, 1500); // Delay before expanding
    };

    // controls.set({ y: "-100%", opacity: 0 }); // Start from above the screen
    startAnimation();
  }, [controls]);

  return (
    <motion.nav
      key="nav"
      initial={{ width: "7rem", paddingLeft: 0, paddingRight: 0 }} // Small pill
      animate={controls}
      className="h-12 w-full max-w-[95%] 2xl:max-w-screen-2xl px-4 md:px-8 py-1 bg-zinc-900/40 backdrop-blur-md rounded-2xl flex items-center justify-between gap-5 flex-wrap fixed top-3 left-1/2 -translate-x-1/2 z-50 shadow-md overflow-hidden"
    >
      {!expanded ? (
        <motion.span
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
              delay: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            y: -20, // Moves up while fading out
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="text-white font-semibold opacity-80 text-center w-full"
        >
          Hello 🙌
        </motion.span>
      ) : (
        <>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.7,
              },
            }}
          >
            <Link to="/">
              <img
                src={logo_gif}
                alt="Logo"
                className="w-10 opacity-60 hover:opacity-90 duration-300 ease-linear rounded-md"
              />
            </Link>
          </motion.div>

          <motion.ul
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.7,
              },
            }}
            className="flex-center gap-5"
          >
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm md:text-base duration-500 ${
                    location.pathname === item.href
                      ? "text-zinc-500"
                      : "text-zinc-600 hover:text-zinc-500"
                  }`}
                >
                  <span className="hidden md:block">{item.name}</span>
                  <span className="text-2xl md:hidden">{item.icon}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        </>
      )}
    </motion.nav>
  );
}
