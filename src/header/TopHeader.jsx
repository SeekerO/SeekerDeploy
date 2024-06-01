import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
const TopHeader = ({
  openSideBar,
  setopenSideBar,
  inViewHOME,
  inViewSKILLS,
  inViewPROJECTS,
  inViewABOUT,
  inViewCONTACTS,
}) => {
  const text = "SEEKERDEV";
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="textColor flex justify-center items-center flex-col  py-5 relative">
      <div className="gap-10 flex mt-2 items-center ">
        {!isSmallScreen && (
          <>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2, // Delay before the opacity animation starts
                duration: 1, // Duration of the opacity animation
                ease: "easeOut", // Easing function for the opacity animation
              }}
              onClick={() => handleScroll("home")}
              className={`${
                inViewHOME ? "font-normal" : "font-thin"
              } buttonHeader flex flex-col`}
            >
              HOME
              {inViewHOME && (
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white h-[1px]"
                />
              )}
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.4, // Delay before the opacity animation starts
                duration: 1, // Duration of the opacity animation
                ease: "easeOut", // Easing function for the opacity animation
              }}
              onClick={() => handleScroll("projects")}
              className={`${
                inViewPROJECTS || inViewSKILLS ? "font-normal" : "font-thin"
              } buttonHeader flex flex-col`}
            >
              PROJECTS
              {(inViewPROJECTS || inViewSKILLS) && (
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white h-[1px]"
                />
              )}
            </motion.a>
          </>
        )}

        <h1 className="bold text-[40px] mx-8 flex font-bold  tracking-[10px]">
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

        {!openSideBar && isSmallScreen && (
          <GiHamburgerMenu
            onClick={() => setopenSideBar(!openSideBar)}
            className="absolute right-3 text-[25px] cursor-pointer "
          />
        )}

        {!isSmallScreen && (
          <>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.6, // Delay before the opacity animation starts
                duration: 1, // Duration of the opacity animation
                ease: "easeOut", // Easing function for the opacity animation
              }}
              onClick={() => handleScroll("about")}
              className={`${
                inViewABOUT && !inViewCONTACTS ? "font-normal" : "font-thin"
              } buttonHeader flex flex-col`}
            >
              ABOUT{" "}
              {inViewABOUT && !inViewCONTACTS && (
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white h-[1px]"
                />
              )}
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.8, // Delay before the opacity animation starts
                duration: 1, // Duration of the opacity animation
                ease: "easeOut", // Easing function for the opacity animation
              }}
              onClick={() => handleScroll("contacts")}
              className={`${
                inViewCONTACTS ? "font-normal" : "font-thin"
              } buttonHeader flex flex-col`}
            >
              CONTACT ME{" "}
              {inViewCONTACTS && (
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white h-[1px]"
                />
              )}
            </motion.a>
          </>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
