import React, { Component } from "react";
export default class Raport extends Component {
  state = {
    page: 0,
    mapel: ["Agama", "PPKN", "BI", "MTK", "IPA", "IPS", "SBDB", "PJOK"]
  };
  setTabs = e => {
    this.setState({ page: e });
  };

  render() {
    return (
      <div className="uk-height-1-1 uk-padding">
        <h3 className="uk-heading-primary uk-text-bold uk-text-lead uk-padding-remove uk-margin-remove">
          Mata Pelajaran
        </h3>
        <ul
          class="uk-child-width-expand uk-padding-remove-top "
          uk-tab="true"
          style={{ marginTop: "10px" }}
        >
          {this.state.mapel.map((mapel, i) => (
            <li
              key={i}
              className={this.state.page === i + 1 ? "uk-active" : ""}
              onClick={() => this.setTabs(i + 1)}
            >
              <a href="#">{mapel}</a>
            </li>
          ))}
          <li onClick={() => this.setTabs(this.state.mapel.length + 1)}>
            <a href="#">+</a>
          </li>
        </ul>
      </div>
    );
  }
}
