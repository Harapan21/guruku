import React from "react";
import { FormText } from "../../components/child/form";
import { Field } from "formik";
export default function FormAlamat(props) {
  return (
    <React.Fragment>
      <div className="uk-margin uk-margin uk-child-width-1-2 uk-flex">
        <Field
          name={`Alamat${props.alamat ? props.alamat : ""}`}
          placeholder="Alamat"
          component={FormText}
          disabled={props.disabled}
        />

        <Field
          name={`ZIP${props.alamat ? props.alamat : ""}`}
          placeholder="Kode Pos"
          component={FormText}
          disabled={props.disabled}
        />
      </div>
      <div className="uk-margin uk-margin uk-child-width-1-2 uk-flex">
        <Field
          name={`Kelurahan${props.alamat ? props.alamat : ""}`}
          placeholder="Kelurahan"
          component={FormText}
          disabled={props.disabled}
        />
        <Field
          name={`Kecamatan${props.alamat ? props.alamat : ""}`}
          placeholder="Kecamatan"
          component={FormText}
          disabled={props.disabled}
        />
      </div>
      <div className="uk-margin uk-child-width-1-2 uk-flex">
        <Field
          name={`Kota${props.alamat ? props.alamat : ""}`}
          placeholder="Kota"
          component={FormText}
          disabled={props.disabled}
        />
        <Field
          name={`Provinsi${props.alamat ? props.alamat : ""}`}
          placeholder="Provinsi"
          component={FormText}
          disabled={props.disabled}
        />
      </div>
    </React.Fragment>
  );
}
