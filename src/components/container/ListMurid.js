import React, { Component } from "react";
import { DbGuru } from "../../data";
export default class ListMurid extends Component {
  render() {
    return (
      <ul
        className="uk-list uk-list-divider uk-width-1-1 uk-text-left"
        style={{
          maxHeight: "100vh",
          height: "100vh",
          overflowY: "scroll",
          maxWidth: "100vw",
          padding: "20px 0px"
        }}
      >
        <li>List item 1</li>
        <li>List item 1</li>
      </ul>
    );
  }
}
