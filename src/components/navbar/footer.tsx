const socials = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/hasnat-ovee/",
  },
  {
    title: "GitHub",
    link: "http://www.github.com/Ovee-Hasnat",
  },
  {
    title: "Upwork",
    link: "https://www.upwork.com/freelancers/~0100349f45b74ac206?",
  },
  {
    title: "Fiverr",
    link: "http://www.fiverr.com",
  },
];

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="bg-zinc-950">
      <div className="max-w-screen-2xl mx-auto py-14 lg:py-24 text-zinc-700 px-6">
        <p className="border-b border-zinc-800 text-zinc-700 pb-2 text-end text-sm tracking-wider">
          coded with 🤍
        </p>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex-1 max-w-sm">
            <h4 className="text-xl">let's connect.</h4>

            <div className="flex gap-10 mt-8 justify-between flex-wrap">
              <ul className="space-y-3">
                {socials.map((social, i) => (
                  <li className="tracking-wide" key={i}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 hover:text-zinc-700 hover:underline"
                    >
                      {social.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <p className="text-zinc-700">+880 1521 436 302</p>
                <p className="text-zinc-700">hasnat.ovee@gmail.com</p>
                <p className="text-zinc-700 opacity-0">hasnat.ovee@gmail.com</p>

                <a
                  href="https://drive.google.com/drive/folders/1wDOqZSD2qcZ1mM0XfEYGVbjYRI65ryUw?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 hover:text-zinc-700 hover:underline mt-8 block"
                >
                  Resume &#x2197;
                </a>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-8xl bg-gradient-to-b from-zinc-900/80 via-zinc-900/60 to-black inline-block text-transparent bg-clip-text font-display">
            &#xa9; {year}
          </h1>
        </div>
      </div>
    </footer>
  );
}
