import React, { Component } from "react";

export default class Semester extends Component {
  render() {
    const { className, semester, CallBack } = this.props;
    switch (this.props.gaya) {
      case 1:
        return (
          <div uk-form-custom="target: true">
            <select value={semester} onChange={e => CallBack(e.target.value)}>
              <option value={1}>Semester 1</option>
              <option value={2}>Semester 2</option>
            </select>
            <span />
          </div>
        );

      default:
        return (
          <div className={className ? className : "uk-padding-small"}>
            <select
              className="uk-select"
              value={semester}
              onChange={e => CallBack(e.target.value)}
            >
              <option value={1}>Semester 1</option>
              <option value={2}>Semester 2</option>
            </select>
          </div>
        );
    }
  }
}
