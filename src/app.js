import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Style/all.scss";
import "../public/dist/js/uikit";
import "../public/dist/css/uikit.css";
import Routes from "./Routes";
import { DbGuru } from "./data";
import "animate.css";

DbGuru.declareDB();

class App extends Component {
  render() {
    return <Routes />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
