import React, { Component } from "react";
import NavbarMapel from "../Mapel/navbar";
import ContentMapel from "../Mapel/ContentMapel";
import Images from "../../components/child/Image";
import Back from "../../Style/back.svg";
import { Link } from "react-router-dom";
import { DbGuru, Mapeldb } from "../../data";
import shortid from "shortid";
class Mapel extends Component {
  state = {
    page: 1,
    semester: "1",
    mapel: DbGuru.mapel().filter(
      m => !m.id_guru || m.id_guru === DbGuru.authId()
    )
  };
  pluspage = e => {
    let mapel = this.state.mapel;
    let data = { id: shortid.generate(), name: e, id_guru: DbGuru.authId() };
    mapel.push(data);
    this.setState({ mapel });
    Mapeldb.get("mapel")
      .push(data)
      .write();
  };
  removeMapel = id => {
    Mapeldb.get("mapel")
      .remove({ id: id })
      .write();
    this.setState({
      page: this.state.page - 1,
      mapel: DbGuru.mapel().filter(
        m => !m.id_guru || m.id_guru === DbGuru.authId()
      )
    });
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
              : this.state.mapel[this.state.page - 1].name}
          </span>
          {this.state.page - 1 !== this.state.mapel.length &&
            (this.state.mapel[this.state.page - 1].id_guru && (
              <span
                className="animated fadeInUp"
                onClick={() =>
                  this.removeMapel(this.state.mapel[this.state.page - 1].id)
                }
                style={{
                  fontSize: "9pt",
                  color: "#ff5e62",
                  marginLeft: "10px",
                  cursor: "pointer",
                  animationDuration: ".1s"
                }}
              >
                Hapus
              </span>
            ))}
        </h3>
        <NavbarMapel
          {...this.state}
          changePage={this.changeStateFromNavbar}
          plus={true}
        />

        {this.state.page - 1 !== this.state.mapel.length && (
          <div className="uk-padding-small">
            <select
              className="uk-select"
              value={this.state.semester}
              onChange={e => this.setState({ semester: e.target.value })}
            >
              <option value={1}>Semester 1</option>
              <option value={2}>Semester 2</option>
            </select>
          </div>
        )}
        <ContentMapel page={this.state} plus={this.pluspage} />
      </div>
    );
  }
}

export default Mapel;
