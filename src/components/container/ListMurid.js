import React, { Component } from "react";
const { remote } = window.require("electron");
const { Menu, MenuItem } = remote;
import { NavLink, withRouter } from "react-router-dom";
import { Murid } from "../../data";
class ListMurid extends Component {
  handlemenu = (id, CallBack, history, path) => {
    const menu = new Menu();
    menu.append(
      new MenuItem({
        label: "Hapus",
        click() {
          Murid.get("murid")
            .remove({ id: id })
            .write();

          history.push(path);
          CallBack();
        }
      })
    );
    return e => {
      e.preventDefault();
      menu.popup({ window: remote.getCurrentWindow() });
    };
  };

  render() {
    const {
      CallBack,
      match: { path },
      history
    } = this.props;
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
        {this.props.murid.map(murid => (
          <li
            style={{
              margin: 0,
              animationDuration: ".1s",
              position: "relative"
            }}
            key={murid.id}
            onContextMenu={this.handlemenu(murid.id, CallBack, history, path)}
            className="animated slideInLeft "
          >
            <NavLink
              to={`${this.props.match.url}/id/${murid.id}`}
              activeStyle={{
                background: "#EBF5FF"
              }}
              className="uk-text-small"
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
