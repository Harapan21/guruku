import React, { Component } from "react";
import AddMurid from "../../components/container/AddMurid";
import ListMurid from "../../components/container/ListMurid";
import { DbGuru } from "../../data";
export default class MuridList extends Component {
  state = {
    murid: []
  };
  render() {
    return (
      <div className="uk-flex uk-flex-center uk-flex-column">
        <h1 className="uk-text-center uk-text-lead uk-text-bold">Murid</h1>
        <ListMurid murid={this.state.murid} />
      </div>
    );
  }
}
