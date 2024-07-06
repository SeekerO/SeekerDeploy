import React, { useRef } from "react";
import Backgroundinfo from "./backgroundinfo/Backgroundinfo";
import Skills from "../section/skills/Skills";
import Projects from "../section/project/Projects";
import AboutMe from "../section/about/AboutMe";
import ContactMe from "../section/contact/ContactMe";

export default function Mainpage({ home, skills, projects, about, contacts }) {
  return (
    <div className="overflow-x-auto overflow-y-hidden w-screen mb-56 flex flex-col">
      <div ref={home} className="pt-20">
        <Backgroundinfo />
      </div>
      <div ref={skills} id="tech-stacks">
        <Skills />
      </div>
      <div id="projects" className="" />
      <div ref={projects} className=" w-full mt-20">
        <Projects />
      </div>
      <div ref={about} id="about" className="mb-10">
        <AboutMe />
      </div>
      <div ref={contacts} id="contacts">
        <ContactMe />
      </div>
    </div>
  );
}
