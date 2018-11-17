import React, { Component } from "react";
import Navbar from "./Dashboard/Navbar";
const electron = window.require("electron");
const { Notification } = electron;
import { Route } from "react-router-dom";
import Home from "./Dashboard/Home";
import MuridList from "./Dashboard/Murid";
import Mapel from "./Dashboard/Mapel";
import Raport from "./Dashboard/Raport";
import Pengaturan from "./Dashboard/Pengaturan";
import { DbGuru } from "../data";
export default class Dashboard extends Component {
  state = {
    guru: DbGuru.guru(),
    sekolah: DbGuru.sekolah()
  };

  render() {
    return (
      <Route
        path={`${this.props.match.url}/:dashboard`}
        render={({ match }) => (
          <div
            className="uk-section uk-section-default uk-height-1-1 uk-width-1-1"
            style={{
              position: "relative",
              background: "transparent",
              overflow: "hidden"
            }}
          >
            <Route
              exact
              path={`${this.props.match.url}/home`}
              render={() => <Home {...this.state} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/murid`}
              render={() => <MuridList />}
            />
            <Route
              exact
              path={`${this.props.match.url}/mapel`}
              render={() => <Mapel />}
            />
            <Route
              exact
              path={`${this.props.match.url}/raport`}
              render={() => <Raport />}
            />
            <Route
              exact
              path={`${this.props.match.url}/pengaturan`}
              render={() => <Pengaturan />}
            />
            <Navbar
              style={{ position: "fixed", bottom: "0" }}
              match={this.props.match}
            />
          </div>
        )}
      />
    );
  }
}
