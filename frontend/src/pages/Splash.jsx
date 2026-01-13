import React, { useState } from "react";
import SplashIcon from "../assets/splash.png";
import { SyncLoader } from "react-spinners";

const override = {
  display: "block",
  borderColor: "red",
};

const Splash = ({ loading, setLoading }) => {
  let [color, setColor] = useState("#9542E7");
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6">
        <img src={SplashIcon} alt="School Care" />
        <SyncLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={12}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Splash;
