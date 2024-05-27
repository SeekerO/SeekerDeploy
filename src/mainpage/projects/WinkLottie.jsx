import React from "react";
import animationData from "./Wink.json";
import Lottie from "react-lottie";
const Wink = () => {
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
      <Lottie options={defaultOptions} width={200} />
    </div>
  );
};

export default Wink;
