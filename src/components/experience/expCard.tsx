export default function ExpCard({ data }) {
  return (
    <div className="border border-zinc-900 p-6 rounded-2xl text-zinc-700 h-full">
      {/* Title & Date */}
      <div className="flex gap-5 justify-between">
        <h3 className="text-4xl md:text-5xl font-display uppercase bg-gradient-to-b from-zinc-800 via-zinc-900/70 to-black inline-block text-transparent bg-clip-text">
          {data?.period}
        </h3>
        {/* Logo */}
        <img
          src={data?.logo}
          alt="SSL"
          className="h-7 md:h-9 filter grayscale opacity-20 hover:opacity-40 object-contain"
        />
      </div>
      <h4 className="font-semibold mt-2">{data?.company}</h4>
      <h5 className="text-sm font-light">
        {data?.title} / <span className="italic lowercase">{data?.type}</span>
      </h5>

      {/* Description */}
      <div></div>
    </div>
  );
}