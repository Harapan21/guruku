import React, { Component } from "react";
import minimaze from "../../Style/minimaze.svg";
import fullScreen from "../../Style/fullScreen.svg";
import Exit from "../../Style/Exit.svg";
const remote = window.require("electron").remote;
const win = remote.getCurrentWindow();
const os = window.require("os");

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.minimazeWindow = this.minimazeWindow.bind(this);
    this.fullScreenWindow = this.fullScreenWindow.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }
  minimazeWindow() {
    win.minimize();
  }
  fullScreenWindow() {
    win.setFullScreen(!win.isFullScreen());
  }
  closeWindow() {
    win.close();
  }
  render() {
    return (
      <div className="topbar uk-flex uk-flex-right uk-text-small uk-width-1-1">
        {os.platform() === "darwin" ? (
          <div style={{ width: "100vw", height: "15px" }} />
        ) : (
          <ul
            className="iconTop uk-flex uk-flex-around"
            style={{ width: "100px", margin: "0" }}
          >
            <li>
              <button
                href=""
                onClick={this.minimazeWindow}
                className="uk-button uk-button-text"
              >
                <img src={minimaze} height={10} width={10} />
              </button>
            </li>
            <li>
              <button
                href=""
                onClick={this.fullScreenWindow}
                className="uk-button uk-button-text"
              >
                <img src={fullScreen} height={10} width={10} />
              </button>
            </li>
            <li>
              <button
                href=""
                onClick={this.closeWindow}
                className="uk-button uk-button-text"
              >
                <img src={Exit} height={10} width={10} />
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
