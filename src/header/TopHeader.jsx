import React from "react";
import { motion } from "framer-motion";
const TopHeader = () => {
  const text = "SEEKERDEV";

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="textColor flex justify-center items-center flex-col  py-5">
      <h1 className="bold text-[40px] flex font-bold  tracking-[10px]">
        <motion.div className="text">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </h1>
      <div className="gap-10 flex mt-2  ">
        <a onClick={() => handleScroll("home")} className="buttonHeader">
          HOME
        </a>
        <a onClick={() => handleScroll("projects")} className="buttonHeader">
          PROJECTS
        </a>
        <a onClick={() => handleScroll("about")} className="buttonHeader">
        ABOUT
        </a>
        <a onClick={() => handleScroll("contacts")} className="buttonHeader">
          CONTACT ME
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
