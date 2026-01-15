import React, { useState } from "react";
import SplashIcon from "../assets/splash.png";
import { BarLoader } from "react-spinners";

const Splash = ({ loading, setLoading }) => {
  let [color, setColor] = useState("#9542E7");
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-3">
        <img src={SplashIcon} alt="School Care" />
      </div>
    </div>
  );
};

export default Splash;
