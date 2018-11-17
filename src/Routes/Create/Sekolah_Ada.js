import React from "react";
import { FormText, FormSelect } from "../../components/child/form";
import { Field } from "formik";
import { DbGuru } from "../../data";
import Images from "../../components/child/Image";
export default class FormKepala extends React.Component {
  state = {
    sekolah: DbGuru.allsekolah(),
    selected: this.props.values.id_sekolah
  };
  handlechoose(id) {
    this.props.setFieldValue("id_sekolah", id);
    this.setState({ selected: id });
  }
  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      setFieldValue
    } = this.props;
    return (
      <React.Fragment>
        <h1 className="uk-heading-line uk-text-small uk-text-bold">
          <span>Daftar Sekolah</span>
        </h1>
        <div className="uk-child-width-1-2@s uk-grid-match" uk-grid="true">
          {this.state.sekolah.map((n, i) => {
            let sekolah = n;
            return (
              <div key={i}>
                <div
                  className={`uk-card uk-card-default uk-card-hover uk-card-body uk-card-small animated zoomIn faster uk-flex uk-flex-center uk-flex-middle
                  ${this.state.selected === sekolah.id ? "uk-card-primary" : ""}
                  `}
                  style={{
                    animationDelay: `.${i + 1}s`,
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                  onClick={() => this.handlechoose(sekolah.id)}
                >
                  <h3 className="uk-card-title uk-text-small uk-text-bold ">
                    {sekolah.nama}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
