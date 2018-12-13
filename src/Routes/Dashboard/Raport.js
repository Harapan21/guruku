import React, { Component } from "react";
import NavbarMapel from "../Mapel/navbar";
import { DbGuru } from "../../data";
import { Link } from "react-router-dom";
import Back from "../../Style/back.svg";
import Images from "../../components/child/Image";
import ContentRaport from "../Raport/ContentRaport";
export default class Raport extends Component {
  state = {
    page: 1,
    semester: "1",
    mapel: DbGuru.mapel().filter(
      m => !m.id_guru || m.id_guru === DbGuru.authId()
    )
  };
  changeStateFromNavbar = e => {
    this.setState({ page: e });
  };

  changeStateSemester = e => {
    this.setState({ semester: e });
  };
  render() {
    return (
      <div className="uk-height-1-1 uk-padding">
        <h3 className="uk-heading-primary uk-text-bold uk-text-lead uk-padding-remove uk-margin-remove">
          <Link
            to={this.props.match.url + "/home"}
            className="animated fadeInLeft uk-button uk-button-text faster"
          >
            <Images src={Back} width={15} />
          </Link>
          <span style={{ marginLeft: "10px", fontSize: "13pt" }}>
            Raport {this.state.mapel[this.state.page - 1].name}
          </span>
        </h3>

        <NavbarMapel {...this.state} changePage={this.changeStateFromNavbar} />
        <ContentRaport
          semester={this.state.semester}
          CallBack={this.changeStateSemester}
        />
      </div>
    );
  }
}
