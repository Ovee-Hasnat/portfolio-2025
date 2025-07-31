import photo from "/images/profile/profile_1.webp";
import Timeline from "@/components/common/timeline";

import { useEffect } from "react";
import { timelineData } from "@/constants/timeline";
import SkillsetCard from "@/components/about/skillsetCard";
import { Link } from "react-router-dom";
import GitGraph from "@/components/about/gitGraph";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-4 my-32">
        <h2 className="text-7xl font-thin lowercase">About me</h2>
        {/* Bento Grid Container */}
        <div className="mt-10 grid gap-3 lg:grid-cols-4">
          {/* Image */}
          <div className="border border-zinc-900 hover:border-zinc-800 rounded-xl overflow-hidden">
            <div className="w-full h-full xl:aspect-square">
              <img
                loading="lazy"
                src={photo}
                alt="profile photo of Ovee"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 opacity-80"
              />
            </div>
          </div>
          {/* About Div */}
          <div className="lg:col-span-2 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 lg:p-6 flex items-center justify-center">
            <div className="space-y-4 text-zinc-600 text-base">
              <h3 className="text-xl font-display text-zinc-500 mb-6">
                Hi 🙌 I'm Ovee
              </h3>

              <p>
                a full-stack web developer from Dhaka, Bangladesh 🇧🇩 with over 2
                years of experience. I build clean, responsive websites and web
                apps that look good and work well.
              </p>
              <p>
                I bring expertise in both frontend and backend development and
                always try to learn and improve. I enjoy solving problems,
                working on new ideas, and teaming up with others to create
                useful digital products.
              </p>
              <p>
                Whether it’s a website, admin panel, or app — I focus on making
                things that are simple, smooth, and user-friendly.
              </p>
            </div>
          </div>

          {/* How I Work */}
          <div className="lg:row-span-2 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 lg:p-6 ">
            <h3 className="text-xl font-display text-zinc-500 mb-6">
              🤝 How I Work
            </h3>

            <p className="text-zinc-600 mb-8">
              I’m friendly, detail-oriented, and committed to making your life
              easier as a client.
            </p>

            <ul className="space-y-3 text-zinc-600 list-disc list-inside">
              <span>You can expect —</span>
              <li>Fast & clear communication</li>
              <li>A solution-driven mindset</li>
              <li>Pixel-perfect frontend, reliable backend</li>
              <li>Focus on real-world performance & usability</li>
              <li>Deadline respect and milestone clarity</li>
            </ul>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-3 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 lg:p-6 flex-center">
            <Timeline items={timelineData} />
          </div>

          {/* Skillset */}
          <div className="lg:col-span-2 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 lg:p-6 flex flex-col h-full gap-14 lg:gap-0 overflow-hidden">
            <h3 className="text-xl font-display text-zinc-500 mb-6 px-4 lg:px-6">
              🔦 Tech Stack
            </h3>
            <div className="flex-grow flex-center">
              <SkillsetCard />
            </div>
          </div>

          {/*  */}
          <div className="lg:col-span-1 border border-zinc-900 hover:border-zinc-800 rounded-xl py-4 lg:py-6">
            <h3 className="text-xl font-display text-zinc-500 mb-6 px-4 lg:px-6">
              ✔️ Contributions
            </h3>
            <GitGraph />
          </div>

          {/* Work together */}
          <div className="lg:col-span-1 border border-zinc-900 hover:border-zinc-800 rounded-xl p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-display text-zinc-500 mb-6">
                🏆 Let’s Work Together
              </h3>

              <p className="text-zinc-800 leading-relaxed mb-6">
                Whether it’s a new build, bug fix, or a design handoff — let’s
                get it done, fast and right.
              </p>
            </div>

            <Link
              to={"/contact"}
              className="text-zinc-700 font-display hover:text-zinc-600 text-lg"
            >
              Reach out, right now ➝
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

// Creative & Strategy services for
// entrepreneurs, startups, & small businesses
// I help professionals & projects reach their goals with Design,
// Copywriting, Consultancy, & No-code Framer pages.

// Designer, developer, and tech enthusiast—creating
// exceptional web and app experiences.

// I am a full-stack developer with a passion for creating exceptional web and app experiences.
// I have a strong foundation in both front-end and back-end development, and I am always
// looking to learn new technologies and improve my skills. I am a creative problem solver who
// enjoys working on challenging projects and collaborating with others to create innovative
// solutions.
