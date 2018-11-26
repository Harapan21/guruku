import React, { Component } from "react";
import Navbar from "./Navbar";
export default class Pengaturan extends Component {
  state = {
    salam: ""
  };
  componentDidMount() {
    const getwaktu = new Date();
    const waktu = getwaktu.getHours();
    if (waktu >= 19) {
      return this.setState({ salam: "Malam" });
    } else if (waktu >= 12 && waktu <= 15) {
      return this.setState({ salam: "Siang" });
    } else if (waktu >= 15 && waktu <= 18) {
      return this.setState({ salam: "Sore" });
    } else {
      return this.setState({ salam: "Pagi" });
    }
  }
  render() {
    return (
      <div className="uk-width-1-1 uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column">
        <h3
          className="uk-text-small uk-margin-remove-bottom "
          style={{ animationDelay: "0.5s" }}
        >
          Selamat {this.state.salam}
        </h3>
        <Navbar
          style={{
            background: "#fff",
            position: "absolute",
            bottom: "0",
            left: "0"
          }}
          match={this.props.match}
        />
      </div>
    );
  }
}
