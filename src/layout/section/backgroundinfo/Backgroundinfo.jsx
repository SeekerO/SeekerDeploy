import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { grad_pic } from "../../../images/images";
const Backgroundinfo = ({ home }) => {
  const [screenSize, SetScreenSize] = useState();
  const getDeviceType = () => {
    const width = window.innerWidth;
    if (width < 640) return "Mobile";
    else if (width >= 640 && width < 768) return "Tablet";
    else if (width >= 768 && width < 1024) return "Laptop";
    else return "Desktop";
  };

  useEffect(() => {
    const handleResize = () => {
      SetScreenSize(getDeviceType());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?id=1DfMrMYlN6DCL0E7qV7H8YkgPw3718waE";
    link.setAttribute("download", ""); // This attribute will make the file download when link is clicked
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className={` h-screen w-screen  lg:px-40 px-10`}>
        <div
          className={`flex-col flex  items-center  md:mt-[5rem] mt-[10rem] gap-5 justify-center`}
        >
          <img
            src={grad_pic}
            className="h-[250px] w-[250px] object-cover object-top  rounded-full bg-black border-[3px] border-[#FAF4D3]"
          />

          <div className={`  md:mt-0 mt-10 flex flex-col textColor items-center `}>
            <div className="flex md:text-[40px] text-[30px] pr-1 font-bold flex-wrap justify-center gap-x-1">
              Hello!
              <motion.span className="md:text-[40px] text-[30px] flex-shrink-0 pr-1">
                I'am John Albert Baisa
              </motion.span>
            </div>
            <div className="md:text-[25px] text-[20px]  tracking-widest">
              A Full-Stack Web Developer
            </div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ duration: 1, delay: 2 }}
              className=" h-[1px] bg-[#FAF4D3]"
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
              onClick={() => downloadFile()}
              className="w-fit flex items-center gap-2 px-5  py-2 rounded-md font-semibold bg-[#FAF4D3] text-[#0C1618] mt-5 
            cursor-pointer duration-300 hover:translate-y-1"
            >
              <AiOutlineDownload className="text-[20px]" />
              RESUME
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Backgroundinfo;
