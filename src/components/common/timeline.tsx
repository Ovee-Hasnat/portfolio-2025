import React from "react";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ol className="border-s border-zinc-800 md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t mt-2">
      {items.map((item, index) => (
        <li key={index}>
          <div className="flex-start flex items-center pt-2 md:block md:pt-0">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-zinc-800 md:-mt-[5px] md:me-0 md:ms-0"></div>
            <h4 className="mt-2 mb-1 text-lg text-zinc-700 font-display">
              {item.date}
            </h4>
          </div>
          <div className="ms-4 pb-4 md:ms-0">
            <h4 className="mb-1 font-medium text-zinc-600">{item.title}</h4>
            <p className="mb-3 text-zinc-700/80 text-">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
