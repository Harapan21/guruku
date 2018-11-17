import React from "react";
import { FormText, FormSelect } from "../../components/child/form";
import { Field } from "formik";
export default function FormSekolah(props) {
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
      <div className="uk-margin">
        <Field
          name="NamaSekolah"
          placeholder="Nama Sekolah"
          component={FormText}
        />
      </div>
      <div className="uk-margin">
        <Field name="NPSN" placeholder="NPSN" component={FormText} />
      </div>
      <div className="uk-margin uk-margin uk-child-width-1-2 uk-flex">
        <Field
          name="AlamatSekolah"
          placeholder="Alamat Sekolah"
          component={FormText}
        />

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
