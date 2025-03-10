import { Link } from "react-router-dom";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavForHero() {
  return (
    <nav className="mb-20 animate-fade-in">
      <ul className="flex-center gap-5">
        {navigation.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm md:text-base duration-500 text-zinc-700 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
