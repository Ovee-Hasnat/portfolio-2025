import React from "react";
import "../home/slider.css";

// ICONS
import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";

const SkillsetCard: React.FC = () => {
  const sliderStyle: React.CSSProperties = {
    "--width": "100px",
    "--height": "60px",
    "--quantity": "10",
  } as React.CSSProperties;

  return (
    <div className="slider mt-4 w-full" style={sliderStyle}>
      <div className="list text-white/60 text-5xl">
        {[
          <SiJavascript />,
          <SiReact />,
          <SiTypescript />,
          <SiNextdotjs />,
          <SiPhp />,
          <SiLaravel />,
          <SiRedux />,
          <SiTailwindcss />,
          <FaNode />,
          <SiMysql />,
        ].map((Icon, index) => (
          <div
            key={index}
            className="item an-ease"
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            {Icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsetCard;
