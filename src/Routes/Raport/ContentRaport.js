import React, { Component } from "react";

export default class ContentRaport extends Component {
  render() {
    return (
      <table class="uk-table uk-table-justify uk-table-divider">
        <thead>
          <tr>
            <th class="uk-width-small">Nama Murid </th>
            <th>Table Heading</th>
            <th>Table Heading</th>
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
              <button class="uk-button uk-button-default" type="button">
                Button
              </button>
            </td>
          </tr>
          <tr>
            <td>Table Data</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </td>
            <td>
              <button class="uk-button uk-button-default" type="button">
                Button
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
