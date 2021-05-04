import React from "react";
import "./retryButton.styles.css";

export default function RetryButton({ handleClick }) {
  return (
    <div className="retryCont">
      <button className="retry" onClick={handleClick}>
        Retry
      </button>
    </div>
  );
}
