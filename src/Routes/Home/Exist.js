import React, { Component } from "react";
import gurusvg from "../../Style/guru.svg";
import { Link } from "react-router-dom";
import Images from "../../components/child/Image";
import accounIcon from "../../Style/account.svg";
import { Auth } from "../../data";
export default class Exist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
    this.handleExapand = this.handleExapand.bind(this);
  }
  handleExapand() {
    this.setState({ expand: !this.state.expand });
  }
  handleAuth(id) {
    Auth.set("auth", {
      id: id,
      isAuth: true
    }).write();
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div
          className="uk-section uk-section-default uk-height-1-1 uk-flex uk-flex-middle uk-flex-center"
          style={{
            position: "relative",
            background: "transparent",
            overflow: "hidden"
          }}
        >
          <Images
            src={gurusvg}
            className="svg-guru exist animated fadeInLeft fast"
            alt="guruku"
            style={{ zIndex: 2, animationDelay: "1s" }}
          />
          <div
            className="uk-container uk-margin-remove "
            style={{ zIndex: 2, animationDelay: "2s" }}
          >
            <h3 className="uk-heading-primary uk-text-bold uk-padding-remove uk-margin-remove">
              Guruku
            </h3>
            <p className="uk-padding-remove-top uk-margin-small-top">
              Aplikasi Management Nilai
            </p>
            {this.state.expand ? (
              <ul className="uk-list uk-list-divider">
                {this.props.guru.map((n, i) => (
                  <li key={i}>
                    <Link
                      className="btn uk-button uk-button-default box-shadow-lg radius uk-flex uk-flex-center"
                      to={`/dashboard/${n.id}/home`}
                      onClick={() => this.handleAuth(n.id)}
                    >
                      <span>
                        <img
                          src={accounIcon}
                          style={{ width: "10px", marginRight: "10px" }}
                        />
                      </span>
                      {n.nama}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Link
                className="btn uk-button uk-button-default box-shadow-lg radius uk-flex uk-flex-center"
                to={`/dashboard/${this.props.guru[0].id}/home`}
                onClick={() => this.handleAuth(this.props.guru[0].id)}
              >
                <span>
                  <img
                    src={accounIcon}
                    style={{ width: "10px", marginRight: "10px" }}
                  />
                </span>
                {this.props.guru[0].nama}
              </Link>
            )}
            <div
              className={`uk-flex ${
                this.props.guru.length > 1
                  ? "uk-flex-between"
                  : "uk-flex-center"
              } uk-margin uk-flex-`}
            >
              <Link
                className="uk-link-reset uk-text-bold uk-text-uppercase "
                style={{ fontSize: ".8rem" }}
                to="/create"
              >
                +
              </Link>
              {this.props.guru.length > 1 && (
                <a
                  className="uk-link-reset uk-text-bold uk-text-uppercase"
                  onClick={this.handleExapand}
                  style={{ fontSize: ".8rem" }}
                >
                  {this.state.expand ? "Kecilkan" : "List"}
                </a>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
