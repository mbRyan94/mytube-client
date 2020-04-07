import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Test from "./components/Test";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <div className="navbar ">
        <nav className="navbar navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            <img
              src="./logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            MyTube
          </a>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 selection-bar">
            <Navigation />
          </div>
          <div className="col-10 content-area">
            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
