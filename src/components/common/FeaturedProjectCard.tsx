import alljobs from "/images/projects/alljobs.png";

export default function FeaturedProjectCard() {
  return (
    <div className="min-h-[80dvh] bg-gradient-to-tl from-emerald-950 via-emerald-900 to-emerald-800 px-6 pt-12 pb-2 rounded-lg text-zinc-200 flex flex-col justify-between">
      <div>
        <h2 className="text-5xl font-display">Alljobs by teletalk</h2>
        <p></p>
      </div>

      <img src={alljobs} className="w-[85%] mt-20 ml-auto" />
    </div>
  );
}
