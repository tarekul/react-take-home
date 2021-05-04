import React from "react";
import "./media.styles.css";

import ReactPlayer from "react-player/lazy";

import PlayButton from "../playButton/playButton.component.jsx";

export default class Media extends React.Component {
  state = {
    playVideo: false,
  };

  handlePlay = () => {
    this.setState({ playVideo: true });
  };

  renderPhoto = () => {
    const { cover_photo_url, media_type } = this.props;
    return (
      <>
        <img className="cover" src={cover_photo_url} alt="cover" />
        {media_type === "video" ? (
          <PlayButton handlePlay={this.handlePlay} />
        ) : (
          ""
        )}
      </>
    );
  };

  renderVideo = () => {
    const { download_url } = this.props;
    const cover = document.getElementsByClassName("cover");
    console.log(cover[0].height);
    return (
      <ReactPlayer
        width={cover[0].width}
        height={cover[0].height}
        url={download_url}
        controls
      />
    );
  };
  render() {
    const { playVideo } = this.state;
    return (
      <div className="mediaContainer">
        {playVideo ? this.renderVideo() : this.renderPhoto()}
      </div>
    );
  }
}
