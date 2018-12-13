import React, { Component } from "react";
export default class NavbarMapel extends Component {
  render() {
    return (
      <ul
        className="uk-child-width-expand uk-padding-remove-top uk-tab-bottom uk-margin-top"
        uk-tab="true"
      >
        {this.props.mapel.map((mapel, i) => (
          <li
            key={i}
            onClick={() => this.props.changePage(i + 1)}
            className={this.props.page === i + 1 ? "uk-active" : ""}
          >
            <a href="#">{mapel.name}</a>
          </li>
        ))}
        {this.props.plus && (
          <li
            onClick={() => this.props.changePage(this.props.mapel.length + 1)}
          >
            <a href="#">+</a>
          </li>
        )}
      </ul>
    );
  }
}
