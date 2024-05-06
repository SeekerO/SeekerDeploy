import React from "react";
import Lottie from "react-lottie";
import animationData from "./D2NOAwZN2P.json";
const BackgroundLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute">
      <Lottie
        options={defaultOptions}
        width={200}
        className="w-screen h-screen bg-black"
      />
    </div>
  );
};

export default BackgroundLottie;
