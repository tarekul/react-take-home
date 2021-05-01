import React from "react";
import "./pay.styles.css";

export default function Pay({ pay_per_install }) {
  return (
    <p className="pay">
      <span id="num">{pay_per_install}</span> per install
    </p>
  );
}
