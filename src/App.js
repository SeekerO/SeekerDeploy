import TopHeader from "./header/TopHeader";
import Corner from "./lottie/CornerLottie";
import SideBar from "./header/sidebar/SideBar";
import Mainpage from "./mainpage/Mainpage";
import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useInView } from "react-intersection-observer";

function App() {
  const [isSticky, setSticky] = useState(false);
  const navbarRef = useRef(null); // Use useRef to reference the navbar element
  const navbarTopPosition = useRef(0); // To store the initial top position of the navbar
  const [openSideBar, setopenSideBar] = useState(false); // To open side bar

  const [home, inViewHOME] = useInView({
    threshold: 0.8,
  });
  const [skills, inViewSKILLS] = useInView({
    threshold: 0.1,
  });

  const [projects, inViewPROJECTS] = useInView({
    threshold: 0.4,
  });

  const [about, inViewABOUT] = useInView({
    threshold: 0.8,
  });

  const [contacts, inViewCONTACTS] = useInView({
    threshold: 0.8,
  });

  useEffect(() => {
    if (inViewHOME) window.history.pushState(null, "/", "home");
    if (inViewPROJECTS || inViewSKILLS)
      window.history.pushState(null, "/", "projects");
    if (inViewABOUT) window.history.pushState(null, "/", "about");
    if (inViewCONTACTS) window.history.pushState(null, "/", "contacts");
  }, [inViewHOME, inViewSKILLS, inViewPROJECTS, inViewABOUT, inViewCONTACTS]);

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
    <div className="maincolor overflow-hidden">
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
          } z-50`}
        >
          <TopHeader
            openSideBar={openSideBar}
            setopenSideBar={setopenSideBar}
            inViewHOME={inViewHOME}
            inViewSKILLS={inViewSKILLS}
            inViewPROJECTS={inViewPROJECTS}
            inViewABOUT={inViewABOUT}
            inViewCONTACTS={inViewCONTACTS}
          />
        </nav>
        <Analytics />
        <SpeedInsights />
        <SideBar openSideBar={openSideBar} setopenSideBar={setopenSideBar} />
        <div className="z-0">
          <Mainpage
            home={home}
            projects={projects}
            skills={skills}
            about={about}
            contacts={contacts}
          />
        </div>
      </main>

      <div className=" w-full justify-start flex rotate-180">
        <Corner />
      </div>
    </div>
  );
}

export default App;
