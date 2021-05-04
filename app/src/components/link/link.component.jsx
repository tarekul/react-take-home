import React from "react";
import "./link.styles.css";

export default function LinkComp({ download_url, tracking_link }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(tracking_link);
  };
  return (
    <div className="linkContainer">
      <span className="link" onClick={(e) => handleCopy()}>
        <i className="fas fa-link"></i>
      </span>

      <span className="link">
        <a href={download_url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-download"></i>
        </a>
      </span>
    </div>
  );
}
