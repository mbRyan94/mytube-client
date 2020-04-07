import React, { Component } from "react";

export default VideoPreview = (props) => {
  const { videoId, title, channelImage, videoThumbnail } = props;
  const videoParams = {
    height: 144,
    width: 257,
    baseURL: "https://www.youtube.com/embed/",
  };

  return (
    <div className="video-container">
      <div className="video">
        <iframe
          width={videoParams.width}
          height={videoParams.height}
          src={`${videoParams.baseURL} + ${videoId}`}
        ></iframe>
      </div>
      <div className="video-description"></div>
      <div className="row">
        <div className="col-3">test </div>
        <div className="col-9">test test test</div>
      </div>

      <h3>{title}</h3>
    </div>
  );
};
