import React from "react";
import "./media.styles.css";

import PlayButton from "../playButton/playButton.component.jsx";

export default function Media({ cover_photo_url, media_type }) {
  return (
    <div className="mediaContainer">
      <img className="cover" src={cover_photo_url} alt="cover photo" />
      {media_type === "video" ? <PlayButton /> : ""}
    </div>
  );
}
