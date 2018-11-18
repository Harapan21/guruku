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
      <div className="uk-margin">
        <Field name="Telp" placeholder="Nomor Telepon" component={FormText} />
      </div>
      <div className="uk-margin">
        <Field
          name="Email"
          placeholder="Email"
          type="email"
          component={FormText}
        />
      </div>
    </React.Fragment>
  );
}
