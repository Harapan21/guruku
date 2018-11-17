import React, { Component } from "react";
import guru from "../../Style/guru.svg";
import rounded from "../../Style/rounded-orange.svg";
import { Link } from "react-router-dom";
import Images from "../../components/child/Image";
export default class None extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="uk-section uk-section-default uk-height-1-1 uk-flex uk-flex-middle uk-flex-around"
          style={{
            position: "relative",
            background: "transparent",
            overflow: "hidden"
          }}
        >
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

            <Link
              className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
              to="/create"
            >
              Daftar
            </Link>
          </div>
          <Images
            src={guru}
            className="svg-guru animated fadeInRight fast"
            alt="guruku"
            style={{ zIndex: 2, animationDelay: "1s" }}
          />
          <Images
            src={rounded}
            className="animated zoomIn fast"
            style={{
              position: "absolute",
              zIndex: 1,
              right: "-100px",
              top: "80px",
              maxWidth: "500px",
              animationDelay: ".5"
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
