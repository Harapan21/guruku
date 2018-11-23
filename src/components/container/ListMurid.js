import React, { Component } from "react";
import { DbGuru } from "../../data";
import { NavLink, withRouter } from "react-router-dom";
class ListMurid extends Component {
  render() {
    return (
      <ul
        className="uk-list uk-width-1-1 uk-text-left"
        style={{
          height: "calc(100% - 54px)",
          overflowY: "scroll",
          maxWidth: "100vw",
          marginTop: "0px"
        }}
      >
        {this.props.murid.map((murid, i) => (
          <li
            style={{ margin: 0, animationDuration: ".1s" }}
            key={murid.id}
            className="animated slideInLeft"
          >
            <NavLink
              to={`${this.props.match.url}/id/${murid.id}`}
              activeStyle={{
                background: "#EBF5FF"
              }}
              style={{
                color: "unset",
                textDecoration: "none",
                display: "block",
                padding: "10px",
                textTransform: "capitalize"
              }}
            >
              {murid.nama}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
export default withRouter(ListMurid);
