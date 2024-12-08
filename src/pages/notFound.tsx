import PrimaryNav from "@/components/navbar/primaryNav";

export default function NotFound() {
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <PrimaryNav />
      <div className="max-w-screen-2xl mx-auto text-zinc-700 px-6 flex items-center justify-center flex-col">
        <h1 className="font-display text-4xl md:text-6xl xl:text-8xl bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-black inline-block text-transparent bg-clip-text">
          404
        </h1>
      </div>
    </div>
  );
}
