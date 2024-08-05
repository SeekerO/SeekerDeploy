import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wink from "./winkAnimation/WinkLottie";
import {
  iMonitor,
  Send_here,
  Akira,
  Seekerdev,
  Todo,
  trackit,
  foodsearchy,
  uptomovie,
} from "../../../images/images";

const Projects = () => {
  const [openLottie, setopenLottie] = useState(false);

  const projects_meta_data = [
    {
      id: 1,
      title: "-V2 iMonitor (Web-App)",
      subtitle: "#TAILWINDCSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #VITE",
      src: iMonitor,
      href: "https://imonitor.site/",
      discrp:
        "A monitoring and management system with built in messaging system for OJT student in STI Santa Maria College",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 2,
      title: "-Send-Here (Web-App)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #SUPABASE",
      src: Send_here,
      href: "https://seekero.github.io/Send_Here/",
      discrp: "A mock up Messenger",
      status: "offline database",
      allowToOpenSite: true,
    },
    {
      id: 3,
      title: "-SEEKERDEV (Website)",
      subtitle: "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT",
      src: Seekerdev,
      href: "#",
      discrp: "My personal portoflio where it shows my previous projects",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 4,
      title: "-Akira Moving System (Website)",
      subtitle: "#WORDPRESS #PHP #CSS",
      src: Akira,
      href: "https://akiramovingsystems.com/",
      discrp: "A showcase website for Akira Moving System",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 5,
      title: "-TODO (Web-App)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #VITE #LOCALSTORAGE",
      src: Todo,
      href: "https://to-do-list-ten-theta.vercel.app/",
      discrp: "To-Do and Scheduler Application",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 6,
      title: "-TrackITpos (Web-App)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT  #VITE #FIREBASE",
      src: trackit,
      href: "https://track-it-pos.vercel.app",
      discrp: "A mini POS system using firebase",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 7,
      title: "-FoodSearchy (Website)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #VITE #API",
      src: foodsearchy,
      href: "https://foodsearch-khaki.vercel.app",
      discrp: "A simple webiste food reciper searcher using API in theMealDB.",
      status: "online",
      allowToOpenSite: true,
    },
    {
      id: 8,
      title: "-UptoMovie (Website)",
      subtitle:
        "#TAILWIND CSS #CSS #HTML #JAVASCRIPT #NODE.JS #REACT #VITE #TMDB_API",
      src: uptomovie,
      href: "https://uptomovie.vercel.app",
      discrp: "A movie and trailers information fetch in TMDB api.",
      status: "Under Development",
      allowToOpenSite: false,
    },
  ];

  function openLink(url, id, allow) {
    const width = window.innerWidth;
    if (allow) {
      if (width <= 768) {
        window.open(url, "_blank");
      } else if (id === id) {
        setopenLottie(true);

        setTimeout(() => {
          window.open(url, "_blank");
          setopenLottie(false);
        }, 1600);
      }
    }
  }

  return (
    <div className="w-fit  textColor lg:px-40 px-10 grid gap-y-5 mb-40  ">
      <label className="font-bold text-[25px] flex gap-1">
        PROJECTS{" "}
        <span className="bg-slate-700 items-center justify-center flex px-2 rounded-md ">
          {projects_meta_data.length}
        </span>
      </label>

      {projects_meta_data
        .sort((a, b) => (b.status === "online") - (a.status === "online"))
        .map((projects_data, index) => (
          <div key={projects_data.id}>
            <motion.div
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
                onClick={() =>
                  openLink(
                    projects_data.href,
                    projects_data.id,
                    projects_data.allowToOpenSite
                  )
                }
                className="relative group h-50 w-96 "
              >
                {projects_data.allowToOpenSite && (
                  <div className="absolute w-full h-full cursor-pointer bg-black border-gray-700 border-2 rounded-md duration-300  flex flex-col items-center justify-center text-white font-semibold group-hover:opacity-100 opacity-0 group-active:opacity-100">
                    {openLottie ? (
                      <Wink />
                    ) : (
                      <div className="flex flex-col gap-1 w-full items-center">
                        GO TO SITE <div className="w-[40%] h-[1px] bg-white" />
                      </div>
                    )}
                  </div>
                )}
                <img
                  src={projects_data.src}
                  alt={projects_data.title}
                  className=" w-full h-full rounded-md hover:shadow-md duration-300 border-gray-700 border-2 hover:w-[400px]"
                />
              </div>

              <div className="font-semibold font-sans grid gap-2 md:w-[50%] z-10">
                <div
                  className={`${
                    projects_data.status.includes("online")
                      ? "text-green-500"
                      : `${
                          projects_data.status.includes("maintenance")
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`
                  } uppercase text-[10px] font-normal bg-slate-700 w-fit px-1 rounded-md flex gap-1 text-center`}
                >
                  <span> {projects_data.status}</span>
                </div>
                <div
                  onClick={() =>
                    projects_data.allowToOpenSite &&
                    window.open(projects_data.href, "")
                  }
                  className="hover:cursor-pointer group flex gap-2 items-center"
                >
                  <span className="hover:underline hover:underline-offset-8 ">
                    {projects_data.title}
                  </span>
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
