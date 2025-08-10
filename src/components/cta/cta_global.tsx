import "./cts_styles.css";
import { Link } from "react-router-dom";
import sjis from "/images/bg/sjis.webp";
import alljobs from "/images/bg/alljobs_fullpage.webp";
import decor from "/images/bg/decor_fullpage.webp";
import lwscart from "/images/bg/lwscart_fullpage.webp";
import bracnet from "/images/bg/bracnet_fullpage.webp";

export default function CTAGlobal() {
  return (
    <section className="max-w-screen-2xl mx-auto section-reveal grid grid-cols-2 md:grid-cols-3 gap-2 relative overflow-hidden py-2 px-2">
      <div className="marquee">
        <div className="marquee-cover"></div>
        <div className="track-vertical-alt">
          <div className="space-y-4">
            <img src={decor} alt="SJIS" loading="lazy" />
            <img src={alljobs} alt="SJIS" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-cover"></div>
        <div className="track-vertical">
          <div className="space-y-4">
            <img src={bracnet} alt="SJIS" loading="lazy" />
            <img src={lwscart} alt="SJIS" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="marquee hidden md:block">
        <div className="marquee-cover"></div>
        <div className="track-vertical-alt">
          <div className="space-y-4">
            <img src={sjis} alt="SJIS" loading="lazy" />
            <img src={decor} alt="SJIS" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="px-4 pt-20 lg:py-44 text-center absolute-center z-10 bg-black/80 w-full h-full">
        <h2 className="text-3xl md:text-5xl text-zinc-500 font-display max-w-screen-lg mx-auto">
          Ready to take your digital presence to the <br />
          <span className="text-zinc-200">next level?</span>
        </h2>
        <h5 className="mt-4 text-lg md:text-xl text-zinc-500">
          Reach out today and let's discuss how I can help you achieve your
          goals.
        </h5>

        <Link to={"/contact"}>
          <button className="mt-10 md:mt-16 text-zinc-200 md:text-lg py-2 px-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:tracking-wider hover:text-white an-ease font-medium shadow-md">
            Get in touch 🚀
          </button>
        </Link>
      </div>
    </section>
  );
}
