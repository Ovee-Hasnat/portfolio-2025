export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="py-14 relative text-center select-none">
      <h2 className="text-4xl sm:text-5xl font-extralight tracking-[5px] md:tracking-[8px] uppercase bg-gradient-to-b from-zinc-800/80 to-black inline-block text-transparent bg-clip-text">
        {title}
      </h2>
      <h3 className="text-zinc-700 text-xl sm:text-2xl font-display -mt-8 lowercase">
        {title}
      </h3>
    </div>
  );
}
