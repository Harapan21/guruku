import React, { Component } from "react";
import AddMurid from "../../components/container/AddMurid";
import ListMurid from "../../components/container/ListMurid";
import { DbGuru } from "../../data";
import shortid from "shortid";
import Images from "../../components/child/Image";
import Back from "../../Style/back.svg";
import { Link, Route } from "react-router-dom";
export default class MuridList extends Component {
  state = {
    murid: [
      { nama: "harapan", id: "1" },
      { nama: "tukijem", id: "3" },
      { nama: "harapans", id: "2" }
    ],
    search: [],
    focus: false
  };
  HandleFocus = () => {
    this.setState({ focus: true });
  };
  HandleBlur = () => {
    this.setState({ focus: false });
  };
  HandleChange = e => {
    const temp = this.state.murid;
    const data = temp.filter(data =>
      data.nama.includes(e.target.value.toLowerCase())
    );
    this.setState({ search: data });
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
            <div
              className="uk-width-1-1 uk-flex uk-flex-middle uk-flex-between "
              style={{
                background: "#eee",
                padding: "5px 10px"
              }}
            >
              {!this.state.focus && (
                <Link
                  to={this.props.match.url + "/home"}
                  className="animated slideInLeft"
                  style={{
                    color: "unset",
                    textDecoration: "none",
                    padding: "5px",
                    animationDuration: ".1s"
                  }}
                >
                  <Images
                    src={Back}
                    width={20}
                    style={{ marginRight: "5px" }}
                  />
                </Link>
              )}
              <input
                type="text"
                onFocus={this.HandleFocus}
                onBlur={this.HandleBlur}
                onChange={this.HandleChange}
                style={{ borderRadius: "5px" }}
                placeholder="Cari Murid"
                className="uk-input uk-width-expand uk-margin-remove"
              />
            </div>
            {this.state.murid.length ? (
              <ListMurid
                murid={
                  this.state.search.length > 0
                    ? this.state.search
                    : this.state.murid
                }
              />
            ) : (
              <Link to="/" style={{ color: "unset", textDecoration: "none" }}>
                <div className="uk-width-1-1 uk-padding-small">+</div>
              </Link>
            )}
          </div>
          <div
            className="uk-width-3-4 uk-text-center uk-height-1-1 uk-margin-remove animated slideInRight faster"
            style={{ padding: 0 }}
          >
            <Route
              path={`${this.props.match.url}/:murid`}
              render={({ match }) => (
                <Route
                  exact
                  path={`${match.url}/:id`}
                  render={({ match: { params } }) => {
                    const data = this.state.murid.find(
                      murid => murid.id === params.id
                    );
                    return (
                      <div
                        className="uk-text-bold "
                        style={{ height: "100vh" }}
                      >
                        <span>{data.nama}</span>
                      </div>
                    );
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
