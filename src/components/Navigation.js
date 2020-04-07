import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ChannelImage from "../images/channels.png";
import VideoImage from "../images/videos.png";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.setActive = this.setActive.bind(this);
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="nav-elements">
        <Router>
          <div>
            <nav>
              <ul>
                <Link to="/videos">
                  <li
                    className={
                      isActive && "nav-highlight"
                        ? "nav-element"
                        : "nav-highlight"
                    }
                    onClick={this.setActive}
                  >
                    <img
                      className="nav-icon"
                      src={VideoImage}
                      height="24"
                      width="24 "
                    />
                    Videos
                  </li>
                </Link>
                <Link to="/channels">
                  <li
                    className={
                      isActive && "nav-highlight"
                        ? "nav-highlight"
                        : "nav-element"
                    }
                    onClick={this.setActive}
                  >
                    <img
                      className="nav-icon"
                      src={ChannelImage}
                      height="24"
                      width="24 "
                    />
                    Channels
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </Router>
      </div>
    );
  }

  setActive() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }
}

export default Navigation;
