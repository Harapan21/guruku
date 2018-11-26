import React, { Component } from "react";
import Navbar from "./Navbar";
import { DbGuru } from "../../data";
export default class Home extends Component {
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
    const { guru, sekolah } = this.props;
    return (
      <div className="uk-width-1-1 uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column ">
        <h3
          className="uk-text-small uk-margin-remove-bottom "
          style={{ animationDelay: "0.5s" }}
        >
          Selamat {this.state.salam}
        </h3>
        <h1 className="uk-text-bold uk-margin-remove-top uk-text-lead ">
          {guru.nama}
        </h1>
        <div className="grid-container uk-width-1-2 animated zoomIn faster">
          <div className="sekolah uk-card uk-card-default uk-card-body uk-card-small">
            <h3 className="uk-text-small uk-text-bold">Sekolah</h3>
            <h1 className="uk-text-bold uk-text-large">{sekolah.nama}</h1>
          </div>
          <div className="Murid uk-card uk-card-default uk-card-body uk-card-small">
            <h3 className=" uk-text-small uk-text-bold uk-margin-remove-bottom">
              Murid
            </h3>

            <h1
              className="uk-text-bold uk-text-large uk-margin-remove"
              style={{ fontSize: "2.5rem" }}
            >
              {DbGuru.murid().length}
            </h1>
          </div>
          <div className="KKm uk-card uk-card-default uk-card-body uk-card-small">
            <h3 className=" uk-text-small uk-text-bold uk-margin-remove-bottom">
              KKm
            </h3>

            <h1
              className="uk-text-bold uk-text-large uk-margin-remove"
              style={{ fontSize: "2.5rem" }}
            >
              65
            </h1>
          </div>
          <div className="Mata-Pelajaran uk-card uk-card-default uk-card-body uk-card-small">
            <h3 className="uk-text-small uk-text-bold uk-margin-remove-bottom">
              Mata Pelajaran
            </h3>

            <h1
              className="uk-text-bold uk-text-large uk-margin-remove"
              style={{ fontSize: "2.5rem" }}
            >
              8
            </h1>
          </div>
        </div>

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
