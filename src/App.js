import TopHeader from "./header/TopHeader";
import Corner from "./lottie/CornerLottie";
import SideBar from "./header/sidebar/SideBar";
import Mainpage from "./mainpage/Mainpage";
import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { motion, useScroll } from "framer-motion";

function App() {
  const [isSticky, setSticky] = useState(false);
  const navbarRef = useRef(null); // Use useRef to reference the navbar element
  const navbarTopPosition = useRef(0); // To store the initial top position of the navbar
  const [openSideBar, setopenSideBar] = useState(false); // To open side bar

  const handleScroll = () => {
    if (navbarRef.current) {
      // Get the initial top position once when the component mounts
      if (navbarTopPosition.current === 0) {
        navbarTopPosition.current = navbarRef.current.offsetTop;
      }

      // Compare the current scroll position to the initial navbar position
      setSticky(window.scrollY > navbarTopPosition.current);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="maincolor overflow-y-auto overflow-x-hidden">
      <div id="home" className=" w-full justify-start flex">
        <Corner />
      </div>

      <main className=" z-10 relative">
        {/* <div className="w-full h-full  absolute" /> */}
        <nav
          ref={navbarRef}
          className={` fixed top-0 w-screen   ${
            isSticky
              ? " bg-[#192224] duration-500"
              : "bg-[#19222400] duration-500"
          } `}
        >
          <TopHeader
            openSideBar={openSideBar}
            setopenSideBar={setopenSideBar}
          />
        </nav>
        <Analytics />
        <SpeedInsights />
        <SideBar openSideBar={openSideBar} setopenSideBar={setopenSideBar} />
        <Mainpage />
      </main>

      <div className=" w-full justify-start flex rotate-180">
        <Corner />
      </div>
    </div>
  );
}

export default App;
