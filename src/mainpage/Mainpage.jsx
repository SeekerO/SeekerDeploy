import React from "react";
import Backgroundinfo from "./backgroundinfo/Backgroundinfo";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import AboutMe from "./about/AboutMe";
import ContactMe from "./contact/ContactMe";

const Mainpage = () => {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-screen mb-56 flex flex-col">
      <div className="">
        <Backgroundinfo />
      </div>
      <div id="tech-stacks">
        <Skills />
      </div>
      <div id="projects" className="mt-20" />
      <div className=" w-full">
        <Projects />
      </div>
      <div id="about" className="">
        <AboutMe />
      </div>
      <div id="contacts">
        <ContactMe />
      </div>
    </div>
  );
};

export default Mainpage;
