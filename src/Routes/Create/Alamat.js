import React from "react";
import { FormText } from "../../components/child/form";
import { Field } from "formik";
export default function FormAlamat(props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <React.Fragment>
      <div className="uk-margin uk-margin uk-child-width-1-2 uk-flex">
        <Field name="Alamat" placeholder="Alamat" component={FormText} />

        <Field name="ZIP" placeholder="Kode Pos" component={FormText} />
      </div>
      <div className="uk-margin uk-margin uk-child-width-1-2 uk-flex">
        <Field name="Kelurahan" placeholder="Kelurahan" component={FormText} />
        <Field name="Kecamatan" placeholder="Kecamatan" component={FormText} />
      </div>
      <div className="uk-margin uk-child-width-1-2 uk-flex">
        <Field name="Kota" placeholder="Kota" component={FormText} />
        <Field name="Provinsi" placeholder="Provinsi" component={FormText} />
      </div>
    </React.Fragment>
  );
}
