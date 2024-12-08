const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function PrimaryNav() {
  return (
    <div className="max-w-screen-2xl mx-auto shadow-md px-8 py-4 bg-zinc-900/40 backdrop-blur-md rounded-2xl my-6 flex items-center justify-between">
      <a href="/" className="text-xs sm:text-sm font-display text-zinc-600">
        Ovee
      </a>
      <ul className="flex items-center justify-center gap-5">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-xs sm:text-sm duration-500 text-zinc-700 hover:text-zinc-500 ${
              location.pathname === item.href ? "text-zinc-500" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </ul>
    </div>
  );
}
