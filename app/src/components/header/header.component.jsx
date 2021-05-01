import React from "react";
import "./header.styles.css";

import Logo from "../logo/logo.component.jsx";
import Name from "../name/name.component.jsx";
import Pay from "../pay/pay.component.jsx";

export default function Header({
  campaign_icon_url,
  campaign_name,
  pay_per_install,
}) {
  return (
    <div className="headerContainer">
      <Logo campaign_icon_url={campaign_icon_url} />
      <div className="headerSubContainer">
        <Name campaign_name={campaign_name} />
        <Pay pay_per_install={pay_per_install} />
      </div>
    </div>
  );
}
