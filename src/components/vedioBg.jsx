// VideoBackground.jsx

import React from "react";
import BGVEDIO from "../assets/bgVedio.mp4";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="myVideo">
        <source src={BGVEDIO} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
