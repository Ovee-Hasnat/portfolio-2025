export default function NumberCard({
  title,
  number,
  plus,
}: {
  title: string;
  number: number | string;
  plus?: boolean;
}) {
  return (
    <div className="h-full py-6 px-3 rounded-lg flex flex-col items-center gap-3 bg-zinc-800/10 backdrop-blur-[2px] shadow-md group select-none cursor-default hover:scale-105 an-ease">
      <span className="relative font-display md:leading-[40px] text-3xl md:text-[40px] text-zinc-600 group-hover:text-zinc-300 an-ease">
        {number}
        <span className="text-xl absolute -top-2 -right-3">{plus && "+"}</span>
      </span>
      <p className="text-sm font-light md:text-base text-center text-zinc-600 group-hover:text-zinc-500 an-ease lowercase">
        {title}
      </p>
    </div>
  );
}
