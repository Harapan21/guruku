import React, { Component } from "react";
import Semester from "../Mapel/Semester";
import { DbGuru } from "../../data";
export default class ContentRaport extends Component {
  render() {
    return (
      <div>
        <table className="uk-table uk-table-middle uk-table-divider uk-width-1-1">
          <thead>
            <tr>
              <th className="uk-width-1-4">Murid</th>
              <th className="uk-width-2-4">
                <Semester
                  className="uk-padding-remove uk-margin-remove"
                  semester={this.props.semester}
                  CallBack={this.props.CallBack}
                  gaya={1}
                />
              </th>
              <th className="uk-width-1-4" />
            </tr>
          </thead>
          <tbody>
            {DbGuru.murid().map(murid => (
              <tr key={murid.id}>
                {console.log(murid)}
                <td>{murid.nama}</td>
                <td>
                  <div className="uk-card uk-card-default uk-card-body uk-width-auto">
                    <p>L</p>
                  </div>
                </td>
                <td>
                  <button className="uk-button uk-button-default" type="button">
                    Simpan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
