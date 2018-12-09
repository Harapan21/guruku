import React from "react";
import FormHeavy from "../../components/child/FormHeavy";
import { Field } from "formik";
const Pengaturan_Guru = ({ values }) => (
  <div className="uk-width-1-1">
    <FormHeavy name="Nama" value={values} title="Nama" />
    <FormHeavy name="NIP" value={values} title="NIP" />
    <div className="uk-margin uk-flex uk-flex-left uk-flex-middle uk-flex-between">
      <label className="uk-form-label">Kelas</label>
      <div className="uk-form-controls " style={{ paddingRight: "15px" }}>
        <Field name="Kelas" component="select">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </Field>
      </div>
    </div>
  </div>
);
export default Pengaturan_Guru;
