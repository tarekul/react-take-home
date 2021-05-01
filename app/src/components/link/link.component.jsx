import React from "react";
import "./link.styles.css";

export default function LinkComp() {
  return (
    <div class="linkContainer">
      <span className="link">
        <i class="fas fa-link"></i>
      </span>
      <span className="link">
        <i class="fas fa-download"></i>
      </span>
    </div>
  );
}
