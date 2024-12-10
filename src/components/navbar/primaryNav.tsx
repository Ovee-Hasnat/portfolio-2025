import { Link } from "react-router-dom";

import logo_gif from "/images/logo/short_logo.gif";

const navigation = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function PrimaryNav() {
  return (
    <div className="max-w-screen-2xl mx-6 xl:mx-auto shadow-md px-4 md:px-8 py-2 bg-zinc-900/40 backdrop-blur-md rounded-2xl my-6 flex items-center justify-between">
      <a href="/" className="text-xs md:text-sm font-display text-zinc-600">
        <img
          src={logo_gif}
          alt="Logo"
          className="w-10 opacity-60 hover:opacity-90 duration-300 ease-linear"
        />
      </a>
      <ul className="flex items-center justify-center gap-5">
        {navigation.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`text-xs md:text-sm duration-500 ${
              location.pathname === item.href
                ? "text-zinc-500"
                : "text-zinc-700 hover:text-zinc-500"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
