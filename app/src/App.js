import React from "react";
import "./App.css";

import Title from "./components/title/title.component.jsx";
import Campaigns from "./components/campaigns/campaigns.component.jsx";
import RetryButton from "./components/retryButton/retryButton.component.jsx";

class App extends React.Component {
  state = {
    campaigns: [],
    error: false,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://www.plugco.in/public/take_home_sample_feed")
      .then((response) => response.json())
      .then((data) =>
        this.setState({ campaigns: data.campaigns, error: false })
      )
      .catch((err) => {
        console.log(err.message);
        this.setState({ error: true });
      });
  };

  handleClick = () => {
    this.fetchData();
  };

  render() {
    const { campaigns, error } = this.state;
    return (
      <div>
        <Title />
        {error ? (
          <RetryButton handleClick={this.handleClick} />
        ) : (
          <Campaigns campaigns={campaigns} />
        )}
      </div>
    );
  }
}

export default App;
