import React from "react";
import play from "../../assets/play.png";

export default function PlayButton({ handlePlay }) {
  return (
    <div onClick={handlePlay}>
      <img className="play" src={play} alt="playbutton" />
    </div>
  );
}
