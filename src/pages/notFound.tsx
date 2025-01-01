import Particles from "@/components/common/particles";
import PrimaryNav from "@/components/navbar/primaryNav";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen relative overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <PrimaryNav />

      <Particles className="absolute inset-0 -z-10" quantity={150} />

      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6 flex items-center justify-center flex-col h-[80%]">
        <h1
          className="font-display text-8xl md:text-[200px] opacity-35"
          style={{
            backgroundImage: 'url("/images/bg/bg_404.gif")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 27%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "rgb(136, 136, 136)",
            textAlign: "center",
            whiteSpace: "normal",
            lineHeight: 1,
            margin: 0,
            padding: 0,
          }}
        >
          404
        </h1>

        <h2 className="text-center text-sm md:text-base">
          Lost in cyberspace? Don’t worry, we’ll help you find your way{" "}
          <span>
            <Link to={"/"} className="underline">
              home.
            </Link>
          </span>
        </h2>
      </div>
    </div>
  );
}
