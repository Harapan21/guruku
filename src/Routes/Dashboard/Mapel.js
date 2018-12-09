import React, { Component } from "react";
import NavbarMapel from "../Mapel/navbar";
import ContentMapel from "../Mapel/ContentMapel";
import Images from "../../components/child/Image";
import Back from "../../Style/back.svg";
import { Link } from "react-router-dom";
class Mapel extends Component {
  state = {
    page: 1,
    mapel: [
      "Agama",
      "PPKN",
      "BAHASA",
      "MTK",
      "IPA",
      "IPS",
      "SBDB",
      "PJOK",
      "B.Inggris"
    ]
  };
  pluspage = e => {
    const mapel = this.state.mapel;
    mapel.push(e);
    this.setState({ mapel });
  };
  changeStateFromNavbar = e => {
    this.setState({ page: e });
  };
  render() {
    return (
      <div className="uk-height-1-1 ">
        <h3
          className="uk-heading-primary uk-text-bold uk-text-lead uk-margin-remove uk-flex uk-flex-middle"
          style={{
            padding: "20px 0px 0px 10px"
          }}
        >
          <Link
            to={this.props.match.url + "/home"}
            className="animated fadeInLeft uk-button uk-button-text faster"
          >
            <Images src={Back} width={15} />
          </Link>
          <span style={{ marginLeft: "10px", fontSize: "13pt" }}>
            {this.state.mapel.length + 1 === this.state.page
              ? "Menambahkan Mapel"
              : this.state.mapel[this.state.page - 1]}
          </span>
        </h3>
        <NavbarMapel {...this.state} changePage={this.changeStateFromNavbar} />
        <ContentMapel page={this.state} plus={this.pluspage} />
      </div>
    );
  }
}

export default Mapel;
