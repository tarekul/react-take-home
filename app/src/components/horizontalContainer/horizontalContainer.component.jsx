import React from "react";
import "./horizontalContainer.styles.css";

import Media from "../media/media.component.jsx";
import LinkComp from "../link/link.component.jsx";

export default function HorizontalContainer({ medias }) {
  console.log(medias);
  return (
    <div className="container">
      {medias.map((m, i) => {
        const { cover_photo_url, download_url, media_type, tracking_link } = m;
        return (
          <div className="subContainer">
            <Media
              key={i}
              cover_photo_url={cover_photo_url}
              media_type={media_type}
            />
            <LinkComp
              download_url={download_url}
              tracking_link={tracking_link}
            />
          </div>
        );
      })}
    </div>
  );
}

/*
cover_photo_url
download_url
media_type
tracking_link
*/
