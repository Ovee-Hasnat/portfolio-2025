import SectionTitle from "@/components/common/sectionTitle";
import PrimaryNav from "@/components/navbar/primaryNav";

export default function About() {
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <PrimaryNav />
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6">
        <SectionTitle title={"About"} />
        About
      </div>
    </div>
  );
}
