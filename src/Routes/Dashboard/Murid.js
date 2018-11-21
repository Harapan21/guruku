import React, { Component } from "react";
import AddMurid from "../../components/container/AddMurid";
import ListMurid from "../../components/container/ListMurid";
import { DbGuru } from "../../data";
import { Link } from "react-router-dom";
export default class MuridList extends Component {
  state = {
    murid: []
  };

  render() {
    return (
      <div className="uk-text-center uk-height-1-1 uk-padding-remove ">
        <div uk-grid="true" className="uk-flex uk-flex-center uk-margin-remove">
          <div
            className="uk-width-1-4 uk-height-1-1 uk-padding-remove"
            style={{
              borderRight: "1px solid #eee",
              height: "100vh"
            }}
          >
            <Link
              to={this.props.match.url + "/home"}
              style={{ color: "unset", textDecoration: "none" }}
            >
              <div
                className="uk-width-1-1 uk-padding-small"
                style={{
                  background: "#eee"
                }}
              >
                Kembali
              </div>
            </Link>
          </div>
          <div
            className="uk-width-3-4 uk-text-center uk-height-1-1 uk-margin-remove animated slideInRight faster"
            style={{ padding: 0 }}
          >
            {this.state.murid.length > 0 ? (
              <ListMurid murid={this.state.murid} />
            ) : (
              <div
                className="uk-flex uk-flex-center uk-flex-middle uk-text-bold"
                style={{ height: "100vh" }}
              >
                Murid
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
