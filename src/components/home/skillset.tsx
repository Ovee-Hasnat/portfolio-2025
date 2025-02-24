import React from "react";
import "./slider.css"; // Import CSS

// import ICONS
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
import SectionTitle from "../common/sectionTitle";

const Skillset: React.FC = () => {
  const sliderStyle: React.CSSProperties = {
    // Using CSS variables in TSX
    "--width": "100px",
    "--height": "80px",
    "--quantity": "10",
  } as React.CSSProperties;

  return (
    <section className="pb-32 md:pb-40">
      <SectionTitle title={"Skills"} />
      <div className="slider mt-10" style={sliderStyle}>
        <div className="list text-white/80 text-4xl md:text-5xl lg:text-6xl">
          <div
            className="item an-ease"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <SiJavascript />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <SiReact />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <SiTypescript />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <SiNextdotjs />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <SiPhp />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <SiLaravel />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <SiRedux />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <SiTailwindcss />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 9 } as React.CSSProperties}
          >
            {/* <SiNodedotjs /> */}
            <FaNode />
          </div>
          <div
            className="item an-ease"
            style={{ "--position": 10 } as React.CSSProperties}
          >
            <SiMysql />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
