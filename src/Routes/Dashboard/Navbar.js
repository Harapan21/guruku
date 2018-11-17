import React, { Component } from "react";
import Logo from "../../Style/logo.svg";
import Images from "../../components/child/Image";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="uk-navbar-container uk-margin uk-navbar-transparent uk-width-1-1 "
        uk-navbar="mode: click"
        style={this.props.style}
      >
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo" href="#">
            <Images src={Logo} width={100} />
          </a>
          <ul className="uk-navbar-nav">
            <li>
              <NavLink
                to={`${this.props.match.url}/home`}
                activeClassName="uk-text-bold animated pulse faster"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/murid`}
                activeClassName="uk-text-bold animated pulse faster"
              >
                Murid
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/mapel`}
                activeClassName="uk-text-bold animated pulse faster"
              >
                Mata Pelajaran
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/raport`}
                activeClassName="uk-text-bold animated pulse faster"
              >
                Raport
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${this.props.match.url}/pengaturan`}
                activeClassName="uk-text-bold animated pulse faster"
              >
                Pengaturan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="uk-text-bold animated pulse faster "
                className="uk-text-danger"
              >
                Keluar
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
