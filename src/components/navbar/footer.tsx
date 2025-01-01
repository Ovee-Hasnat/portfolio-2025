const socials = [
  {
    title: "LinkedIn",
    link: "http://www.linkedin.com",
  },
  {
    title: "GitHub",
    link: "http://www.github.com",
  },
  {
    title: "Fiverr",
    link: "http://www.fiverr.com",
  },
  {
    title: "Upwork",
    link: "http://www.upwork.com",
  },
];

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="bg-zinc-950 font-display">
      <div className="max-w-screen-2xl mx-auto py-14 lg:py-24 text-neutral-700 px-6">
        <p className="border-b border-zinc-800 text-neutral-800 pb-2 text-end text-sm tracking-wider">
          coded with 🤍
        </p>
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex-1 max-w-sm">
            <h4 className="text-lg tracking-widest">let's connect.</h4>

            <div className="flex gap-10 mt-8 justify-between flex-wrap">
              <ul className="space-y-3">
                {socials.map((social, i) => (
                  <li className="tracking-wide" key={i}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 hover:text-neutral-700 hover:underline"
                    >
                      {social.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <h4>email</h4>
                <p className="text-neutral-800">hasnat.ovee@gmail.com</p>
                <p className="text-neutral-800 opacity-0">
                  hasnat.ovee@gmail.com
                </p>

                <a
                  href={"#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-700 hover:underline mt-8 block"
                >
                  Resume &#x2197;
                </a>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-8xl bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-black inline-block text-transparent bg-clip-text">
            &#xa9; {year}
          </h1>
        </div>
      </div>
    </footer>
  );
}
