import TopHeader from "./header/TopHeader";
import Corner from "./lottie/CornerLottie";
import WaveAnimation from "./lottie/Wave";
import Mainpage from "./mainpage/Mainpage";
import React, { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isSticky, setSticky] = useState(false);
  const navbarRef = useRef(null); // Use useRef to reference the navbar element
  const navbarTopPosition = useRef(0); // To store the initial top position of the navbar

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

      <nav
        ref={navbarRef}
        className={` fixed top-0 w-screen z-10 ${
          isSticky
            ? " bg-[#192224] duration-500"
            : "bg-[#19222400] duration-500"
        } `}
      >
        <TopHeader />
      </nav>
      <main className="pt-40 z-10">
        <Analytics />
        <SpeedInsights />
        <Mainpage />
      </main>

      <div className=" w-full justify-start flex rotate-180">
        <Corner />
      </div>
    </div>
  );
}

export default App;
