import React from "react";
import IconSorter from "./IconSorter";

const Skills = () => {
  const skills_meta_data = [
    { id:1, type: "JAVASCRIPT" },
    { id:3,type: "JAVA" },
    { id:4,type: "C Sharp" },
    { id:5,type: "CSS3" },
    { id:6,type: "HTML5" },
    { id:7,type: "REACTJS" },
    { id:8,type: "NODE.JS" },
    { id:9,type: "SVELTE" },
    { id:10,type: "TAILWIND CSS" },
    { id:11,type: "FIGMA" },
    { id:12,type: "WORDPRESS" },
    { id:13,type: "SUPABASE" },
  ];

  return (
    <div className="lg:px-40 px-10 mt-32">
      <div className="textColor mt-20 text-[25px] font-bold">TECH-STACKS</div>
      <div className="flex  flex-wrap sm:gap-4 gap-2 mt-3 justify-start">
        {skills_meta_data.map((meta_data, index) => (
          <div key={index} className=" flex flex-col items-center ">
            <div className="w-fit p-1 flex-shrink-0 rounded-full shadow-white items-center flex justify-center">
              {<IconSorter name={meta_data.type} />}
            </div>
            <label className=" textColor font-semibold mt-1 flex justify-center flex-wrap ">
              {meta_data.type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;