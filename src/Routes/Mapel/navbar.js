import React, { Component } from "react";
export default class NavbarMapel extends Component {
  render() {
    return (
      <ul
        className="uk-child-width-expand uk-padding-remove-top "
        uk-tab="true"
        style={{ marginTop: "10px" }}
      >
        {this.props.mapel.map((mapel, i) => (
          <li
            key={i}
            onClick={() => this.props.changePage(i + 1)}
            className={this.props.page === i + 1 ? "uk-active" : ""}
          >
            <a href="#">{mapel}</a>
          </li>
        ))}
        <li onClick={() => this.props.changePage(this.props.mapel.length + 1)}>
          <a href="#">+</a>
        </li>
      </ul>
    );
  }
}
