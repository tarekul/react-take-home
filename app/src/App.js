import React from "react";
import "./App.css";

import Title from "./components/title/title.component.jsx";
import Campaigns from "./components/campaigns/campaigns.component.jsx";

class App extends React.Component {
  state = {
    campaigns: [],
    error: false,
  };
  componentDidMount() {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => response.json())
      .then((data) => this.setState({ campaigns: data.campaigns }))
      .catch((err) => {
        console.log(err.message);
        this.setState({ error: true });
      });
  }
  render() {
    const { campaigns, error } = this.state;
    return (
      <div>
        <Title />
        <Campaigns campaigns={campaigns} />
      </div>
    );
  }
}

export default App;
