import React, { Component } from "react";
import Semester from "../Mapel/Semester";

export default class ContentRaport extends Component {
  render() {
    return (
      <table className="uk-table uk-table-justify uk-table-divider">
        <thead>
          <tr>
            <th className="uk-width-small">Nama Murid </th>
            <th className="uk-padding-remove uk-width-small">
              <Semester
                className="uk-padding-remove uk-margin-remove"
                semester={this.props.semester}
                CallBack={this.props.CallBack}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table Data</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
            <td>
              <button className="uk-button uk-button-text">Text</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
