import React from "react";
import "./logo.styles.css";

export default function Logo({ campaign_icon_url }) {
  return <img className="logo" src={campaign_icon_url} alt="logo" />;
}
