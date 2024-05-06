import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./Animation - 1714726111428 (1).json";

const Backgroundinfo = () => {
  const [screenSize, SetScreenSize] = useState();
  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 640) return "Mobile";
    else if (width >= 640 && width < 768) return "Tablet";
    else if (width >= 768 && width < 1024) return "Laptop";
    else return "Desktop";
  };
  // Effect to add and remove the resize event listener
  useEffect(() => {
    const handleResize = () => {
      SetScreenSize(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className={`h-screen w-screen  lg:px-40 px-10`}>
        <div
          className={`flex-col flex  items-center mt-[8%] gap-5 justify-center`}
        >
          <div className="h-[400px] w-[400px] md:h-[300px] md:w-[300px] rounded-full bg-gray-600 flex-shrink-0 " />

          <p
            className={`  md:mt-0 mt-10 flex flex-col textColor items-center text-center`}
          >
            <strong className="text-[40px] pr-1">
              Hello! I'am John Albert Baisa
            </strong>
            <div className="text-[25px] tracking-widest">
              A Full-Stack Web Developer
            </div>
            <div className="w-[60%] h-[1px] bg-[#FAF4D3]" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Backgroundinfo;
