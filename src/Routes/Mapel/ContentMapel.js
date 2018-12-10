import React, { Component } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Loading from "../../components/child/loading";
import { FormText } from "../../components/child/form";
import FormHeavy from "../../components/child/FormHeavy";
class MapelPlus extends Component {
  render() {
    return (
      <Formik
        initialValues={{ Mapel: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            this.props.plus(values.Mapel);
            setSubmitting(false);
          }, 100);
        }}
        validationSchema={Yup.object().shape({
          Mapel: Yup.string().required("Tidak Boleh Kosong")
        })}
      >
        {props => {
          const { isSubmitting, handleSubmit } = props;
          return isSubmitting ? (
            <Loading />
          ) : (
            <form
              className="uk-form-stacked uk-width-1-1 uk-padding-small animated fadeInUp "
              style={{ animationDuration: ".4s" }}
              onSubmit={handleSubmit}
            >
              <Field
                name="Mapel"
                component={FormText}
                width="uk-padding-remove"
                placeholder="Masukan Mapel"
                disabled={props.disabled}
              />
              <div className="uk-margin">
                <button className="uk-button uk-button-default " type="submit">
                  Tambah
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}
class MapelSection extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          PenilaianHarian: "",
          Praktik: "",
          KD_PH1: "",
          KD_PH2: "",
          KD_PH3: "",
          KD_PH4: "",
          KD_P1: "",
          KD_P2: "",
          KD_P3: "",
          KD_P4: ""
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            this.props.plus(values.Mapel);
            setSubmitting(false);
          }, 100);
        }}
        validationSchema={Yup.object().shape({
          PenilaianHarian: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          Praktik: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          KD_PH1: Yup.string().required("Tidak boleh kosong"),
          KD_PH2: Yup.string().required("Tidak boleh kosong"),
          KD_PH3: Yup.string().required("Tidak boleh kosong"),
          KD_PH4: Yup.string().required("Tidak boleh kosong"),
          KD_P1: Yup.string().required("Tidak boleh kosong"),
          KD_P2: Yup.string().required("Tidak boleh kosong"),
          KD_P3: Yup.string().required("Tidak boleh kosong"),
          KD_P4: Yup.string().required("Tidak boleh kosong")
        })}
      >
        {props => {
          const { isSubmitting, handleSubmit, values } = props;
          return isSubmitting ? (
            <Loading />
          ) : (
            <form
              className="uk-form-stacked uk-width-1-1 uk-padding-small uk-margin-remove"
              onSubmit={handleSubmit}
            >
              <div
                className="uk-flex animated fadeInUp"
                style={{ animationDuration: ".3s" }}
              >
                <div className="uk-width-1-2">
                  <label>PH</label>
                  <FormHeavy
                    name="PenilaianHarian"
                    value={values}
                    title="Jumlah"
                    placeholder="Penilaian Harian"
                  />
                  <label>KD</label>
                  <FormHeavy
                    name="KD_PH1"
                    value={values}
                    title="1"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_PH2"
                    value={values}
                    title="2"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_PH3"
                    value={values}
                    title="3"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_PH4"
                    value={values}
                    title="4"
                    placeholder="Deskripsi  "
                  />
                </div>
                <div className="uk-width-1-2">
                  <label>Praktik</label>
                  <FormHeavy
                    name="Praktik"
                    value={values}
                    title="Jumlah"
                    placeholder="Praktik"
                  />
                  <label>KD</label>
                  <FormHeavy
                    name="KD_P1"
                    value={values}
                    title="1"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_P2"
                    value={values}
                    title="2"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_P3"
                    value={values}
                    title="3"
                    placeholder="Deskripsi  "
                  />
                  <FormHeavy
                    name="KD_P4"
                    value={values}
                    title="4"
                    placeholder="Deskripsi  "
                  />
                </div>
              </div>

              <div className="uk-margin-small uk-text-right">
                <button className="uk-button uk-button-default " type="submit">
                  Simpan
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}
export default class ContentMapel extends Component {
  render() {
    return this.props.page.mapel.length + 1 === this.props.page.page ? (
      <MapelPlus plus={this.props.plus} />
    ) : (
      <MapelSection {...this.props} />
    );
  }
}
