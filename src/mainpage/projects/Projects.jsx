import React, { useState } from "react";
import iMonitor from "../images/iMonitor.png";
import Send_here from "../images/Send_here.png";
import Akira from "../images/Akira.png";
import Seekerdev from "../images/SEEKERDEV.png";
import Todo from "../images/Todo.png";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects_meta_data = [
    {
      id: 1,
      title: "-STI iMonitor (Web-App)",
      subtitle: "#CSS #HTML #JAVASCRIPT #NODE.JS #REACT #SUPABASE",
      src: iMonitor,
      href: "https://imonitor.site/",
      discrp:
        "A monitoring and management system with built in messaging system for OJT student in STI Santa Maria College",
    },
    {
      id: 2,
      title: "-Send-Here (Web-App)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Send_here,
      href: "https://seekero.github.io/Send_Here/",
      discrp: "A mock up Messenger",
    },
    {
      id: 3,
      title: "-SEEKERDEV (Website)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Seekerdev,
      href: "#",
      discrp: "My personal portoflio where it shows my previous projects",
    },
    {
      id: 4,
      title: "-Akira Moving System (Website)",
      subtitle: "#WORDPRESS #PHP #CSS",
      src: Akira,
      href: "https://akiramovingsystems.com/",
      discrp: "A showcase website for Akira Moving System",
    },
    {
      id: 5,
      title: "-TODO (Web-App)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Todo,
      href: "https://to-do-list-ten-theta.vercel.app/",
      discrp: "To-Do and Scheduler Application",
    },
  ];

  function openLink(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="w-fit  textColor lg:px-40 px-10 grid gap-y-5  ">
      <label className="font-bold text-[25px] flex gap-1">
        PROJECTS <span className="bg-slate-700 items-center justify-center flex px-2 rounded-md ">{projects_meta_data.length}</span>
      </label>

      {projects_meta_data.map((projects_data, index) => (
        <motion.div
          key={projects_data.id}
          onClick={() => setSelectedId(projects_data.id)}
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: index % 2 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 text-[25px] "
        >
          <img
            src={projects_data.src}
            alt={projects_data.title}
            onClick={() => openLink(projects_data.href)}
            className="h-50 w-96 rounded-md hover:-translate-y-3 hover:shadow-md duration-300 border-gray-700 border-2"
          />
          <div className="font-semibold font-sans grid gap-2">
            <label className="hover:underline hover:cursor-pointer">
              {projects_data.title}
            </label>
            <label className="text-[15px] font-normal pl-3">
              {projects_data.discrp}
            </label>
            <label className="text-[15px] font-thin pl-3">
              {projects_data.subtitle}
            </label>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
