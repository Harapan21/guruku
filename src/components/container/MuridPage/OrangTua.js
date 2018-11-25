import React from "react";
import FormAlamat from "../../../Routes/Create/Alamat";
import { FormText, FormSelect } from "../../child/form";
import { Field } from "formik";
export default class OrangTua extends React.Component {
  state = {
    checked: false
  };
  handleChecked = e => {
    const value = e.target.checked;
    this.setState({
      checked: value
    });
    this.props.CallBack();
  };
  render() {
    return (
      <div className="uk-margin uk-text-left uk-text uk-text-small">
        <label>OrangTua</label>
        <div className="uk-margin  uk-margin uk-flex uk-flex-center">
          <Field
            name="NamaBapak"
            width="uk-width-1-2"
            placeholder="Nama Bapak"
            component={FormText}
          />
          <Field
            name="NamaIbu"
            width="uk-width-1-2"
            placeholder="Nama Ibu"
            component={FormText}
          />
        </div>
        <div className="uk-margin  uk-margin uk-flex uk-flex-center">
          <Field
            name="PekerjaanBapak"
            width="uk-width-1-2"
            placeholder="Pekerjaan Bapak"
            component={FormText}
          />
          <Field
            name="PekerjaanIbu"
            width="uk-width-1-2"
            placeholder="Pekerjaan Ibu"
            component={FormText}
          />
        </div>
        <label style={{ textTransform: "uppercase" }} className="uk-text-small">
          <input
            className="uk-checkbox"
            type="checkbox"
            onChange={this.handleChecked}
            checked={this.state.checked}
          />{" "}
          sama seperti murid
        </label>
        <FormAlamat alamat="OrangTua" disabled={this.state.checked} />
      </div>
    );
  }
}
