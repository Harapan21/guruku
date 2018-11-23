import React from "react";
import FormAlamat from "../../../Routes/Create/Alamat";
import { FormText, FormSelect } from "../../child/form";
import { Field } from "formik";
export default function Personal() {
  return (
    <div className="uk-margin uk-text-left uk-text uk-text-small">
      <label>Personal</label>
      <div className="uk-margin  uk-margin uk-flex uk-flex-center">
        <Field
          name="NamaMurid"
          width="uk-width-1-3"
          placeholder="Nama Murid"
          component={FormText}
        />

        <Field name="Agama" component={FormSelect} width="uk-width-1-3">
          <option value={0}>Agama</option>
          <option value={1}>Islam</option>
          <option value={2}>Kristen</option>
          <option value={3}>Katolik</option>
          <option value={4}>Hindu</option>
          <option value={5}>Buddha</option>
          <option value={6}>Kong Hu Cu</option>
        </Field>
        <Field name="JenisKelamin" component={FormSelect} width="uk-width-1-3">
          <option value={0}>Jenis Kelamin</option>
          <option value={1}>Laki - Laki</option>
          <option value={2}>Perempuan</option>
        </Field>
      </div>
      <div className="uk-margin uk-margin  uk-flex">
        <Field
          name="NISN"
          width="uk-width-1-2"
          placeholder="NISN"
          component={FormText}
        />

        <Field
          name="NIS"
          width="uk-width-1-2"
          placeholder="NIS"
          component={FormText}
        />
      </div>
      <div className="uk-margin uk-margin  uk-flex">
        <Field
          name="TempatLahir"
          width="uk-width-1-2"
          placeholder="Tempat Lahir"
          component={FormText}
        />

        <Field
          type="date"
          name="TanggalLahir"
          width="uk-width-1-2"
          placeholder="Tanggal Lahir"
          component={FormText}
        />
      </div>

      <div className="uk-margin uk-text-left uk-text uk-text-small">
        <FormAlamat />
      </div>
    </div>
  );
}
