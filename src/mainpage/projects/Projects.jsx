import React, { useState } from "react";
import iMonitor from "../images/iMonitor.png";
import Send_here from "../images/Send_here.png";
import Akira from "../images/Akira.png";
import Seekerdev from "../images/SEEKERDEV.png";
import Todo from "../images/Todo.png";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Wink from "./WinkLottie";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [openLottie, setopenLottie] = useState(false);

  const projects_meta_data = [
    {
      id: 1,
      title: "-STI iMonitor (Web-App)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #SUPABASE",
      src: iMonitor,
      href: "https://imonitor.site/",
      discrp:
        "A monitoring and management system with built in messaging system for OJT student in STI Santa Maria College",
      status: "maintenance",
    },
    {
      id: 2,
      title: "-Send-Here (Web-App)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #SUPABASE",
      src: Send_here,
      href: "https://seekero.github.io/Send_Here/",
      discrp: "A mock up Messenger",
      status: "offline",
    },
    {
      id: 3,
      title: "-SEEKERDEV (Website)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Seekerdev,
      href: "#",
      discrp: "My personal portoflio where it shows my previous projects",
      status: "online",
    },
    {
      id: 4,
      title: "-Akira Moving System (Website)",
      subtitle: "#WORDPRESS #PHP #CSS",
      src: Akira,
      href: "https://akiramovingsystems.com/",
      discrp: "A showcase website for Akira Moving System",
      status: "online",
    },
    {
      id: 5,
      title: "-TODO (Web-App)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Todo,
      href: "https://to-do-list-ten-theta.vercel.app/",
      discrp: "To-Do and Scheduler Application",
      status: "online",
    },
  ];

  function openLink(url, id) {
    if (id === id) {
      setopenLottie(true);
    }
    setTimeout(() => {
      window.open(url, "_blank");
      setopenLottie(false);
    }, 1600);
  }

  return (
    <div className="w-fit  textColor lg:px-40 px-10 grid gap-y-5 mb-40  ">
      <label className="font-bold text-[25px] flex gap-1">
        PROJECTS{" "}
        <span className="bg-slate-700 items-center justify-center flex px-2 rounded-md ">
          {projects_meta_data.length}
        </span>
      </label>

      {projects_meta_data.map((projects_data, index) => (
        <div key={projects_data.id}>
          <motion.div
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
            className="flex flex-wrap items-center gap-3 text-[25px]  "
          >
            <div
              onClick={() => openLink(projects_data.href, projects_data.id)}
              className="relative group cursor-pointer h-50 w-96 "
            >
              <div className="absolute w-full h-full bg-black border-gray-700 border-2 rounded-md duration-300  flex flex-col items-center justify-center text-white font-semibold group-hover:opacity-100 opacity-0 group-active:opacity-100">
                {openLottie ? (
                  <Wink />
                ) : (
                  <div className="flex flex-col gap-1 w-full items-center">
                    GO TO SITE <div className="w-[40%] h-[1px] bg-white" />
                  </div>
                )}
              </div>
              <img
                src={projects_data.src}
                alt={projects_data.title}
                className=" w-full h-full rounded-md hover:shadow-md duration-300 border-gray-700 border-2 hover:w-[400px] cursor-pointer "
              />
            </div>

            <div className="font-semibold font-sans grid gap-2 md:w-[50%] z-10">
              <div
                className={`${
                  projects_data.status === "online"
                    ? "text-green-500"
                    : `${
                        projects_data.status === "maintenance"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`
                } uppercase text-[10px] font-normal bg-slate-700 w-fit px-1 rounded-md flex gap-1 text-center`}
              >
                <span> {projects_data.status}</span>
                {/* <span>{projects_data.status === "offline" && "DATABASE"}</span> */}
              </div>
              <div className="hover:cursor-pointer group flex gap-2 items-center">
                <span className="hover:underline hover:underline-offset-8 ">
                  {projects_data.title}
                </span>
                <div className="flex items-center opacity-0 group-hover:opacity-100 duration-300 -translate-x-10 group-hover:translate-x-0 text-[15px]">
                  <MdKeyboardDoubleArrowRight className="text-[20px]" />{" "}
                  <span className="delay-700 transition-opacity ">
                    {" "}
                    LEARN MORE
                  </span>
                </div>
              </div>
              <label className="text-[15px] font-normal pl-3 ">
                {projects_data.discrp}
              </label>
              <label className="text-[15px] font-thin pl-3">
                {projects_data.subtitle}
              </label>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
