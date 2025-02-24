import { Link } from "react-router-dom";

import logo_gif from "/images/logo/short_logo.gif";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function PrimaryNav() {
  return (
    <nav className="w-full max-w-[95%] 2xl:max-w-screen-2xl px-4 md:px-8 py-2 bg-zinc-900/40 backdrop-blur-md rounded-2xl flex items-center justify-between gap-5 flex-wrap fixed top-5 left-1/2 -translate-x-1/2 z-50 shadow-md">
      <Link to="/">
        <img
          src={logo_gif}
          alt="Logo"
          className="w-10 opacity-60 hover:opacity-90 duration-300 ease-linear rounded-md"
        />
      </Link>
      <ul className="flex items-center justify-center gap-2 md:gap-5">
        {navigation.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`text-sm md:text-base duration-500 ${
              location.pathname === item.href
                ? "text-zinc-500"
                : "text-zinc-700 hover:text-zinc-500"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
