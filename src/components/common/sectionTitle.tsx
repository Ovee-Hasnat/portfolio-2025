export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="my-14 relative text-center select-none">
      <h2 className="text-4xl sm:text-5xl font-light tracking-[7px] md:tracking-[15px] uppercase bg-gradient-to-b from-zinc-900 to-black inline-block text-transparent bg-clip-text">
        {title}
      </h2>
      <h3 className="text-zinc-800/80 text-xl sm:text-2xl font-display -mt-8 uppercase tracking-widest">
        {title}
      </h3>
    </div>
  );
}
