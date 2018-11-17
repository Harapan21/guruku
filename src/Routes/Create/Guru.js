import React from "react";
import { FormText, FormSelect, FormRadio } from "../../components/child/form";
import { Field } from "formik";
export default function FormGuru(props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;
  return (
    <React.Fragment>
      <div className="uk-margin">
        <Field name="Nama_Guru" placeholder="Nama" component={FormText} />
      </div>
      <div className="uk-margin">
        <Field name="NIP" placeholder="NIP" component={FormText} />
      </div>
      <div className="uk-margin uk-flex uk-flex-around">
        <Field name="JenisKelamin" component={FormSelect}>
          <option value={0}>Kelamin</option>
          <option value={1}>Laki-Laki</option>
          <option value={2}>Perempuan</option>
        </Field>
        <Field name="Kelas" component={FormSelect}>
          <option value={0}>Kelas</option>
          <option value={1}>Kelas 1</option>
          <option value={2}>Kelas 2</option>
          <option value={3}>Kelas 3</option>
          <option value={4}>Kelas 4</option>
          <option value={5}>Kelas 5</option>
          <option value={6}>Kelas 6</option>
        </Field>
      </div>
    </React.Fragment>
  );
}
