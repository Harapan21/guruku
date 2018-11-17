import React from "react";
import { FormText, FormSelect } from "../../components/child/form";
import { Field } from "formik";
export default function FormKepala(props) {
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
          name="Kapala_Sekolah"
          placeholder="Kepala Sekolah"
          component={FormText}
        />
      </div>
      <div className="uk-margin">
        <Field name="NIP2" placeholder="NIP" component={FormText} />
      </div>
    </React.Fragment>
  );
}
