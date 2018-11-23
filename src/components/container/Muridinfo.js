import React, { Component } from "react";

export default class Muridinfo extends Component {
  render() {
    const { murid } = this.props;
    return (
      <div className="uk-text-bold" style={{ height: "100vh" }}>
        <span>{murid.nama}</span>
      </div>
    );
  }
}
