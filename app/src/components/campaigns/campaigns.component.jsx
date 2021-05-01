import React from "react";
import Header from "../header/header.component.jsx";
import HorizontalContainer from "../horizontalContainer/horizontalContainer.component.jsx";

function Campaigns({ campaigns }) {
  return (
    <div>
      {campaigns.map((campaign) => {
        const {
          id,
          campaign_icon_url,
          campaign_name,
          pay_per_install,
          medias,
        } = campaign;
        return (
          <div key={id}>
            <Header
              campaign_icon_url={campaign_icon_url}
              campaign_name={campaign_name}
              pay_per_install={pay_per_install}
            />
            <HorizontalContainer medias={medias} />
          </div>
        );
      })}
    </div>
  );
}

export default Campaigns;
