import React, { Component } from "react";
import { connect } from "react-redux";
import VideoPlayer from "./VideoPlayer";
import VideoContainer from "../components/VideoContainer";
import { getVideosFromYouTube } from "../redux/actions/actions";

class VideoScreen extends Component {
  componentDidMount() {
    this.props.getVideosFromYouTube();
  }

  render() {
    if (this.props.videos) {
      console.log("props: ", this.props.videos);
    }

    return (
      <div>
        {this.props.error ? (
          <div className="alert alert-primary" role="alert">
            An error occured!
          </div>
        ) : null}
        <div>
          {this.props.videos
            ? this.props.videos.map((video) => {
                return (
                  <VideoContainer
                    channelTitle={video.channelTitle}
                    videos={video.videos}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videoReducer.videos.data,
    error: state.videoReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getVideosFromYouTube: () => dispatch(getVideosFromYouTube()),
});

VideoScreen = connect(mapStateToProps, mapDispatchToProps)(VideoScreen);
export default VideoScreen;
