import React, { Component } from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
import Loading from "../../components/child/loading";
import { FormText } from "../../components/child/form";
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
        initialValues={{ Praktik: [], PenilaianHarian: [] }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 100);
        }}
        // validationSchema={Yup.object().shape({
        //   PenilaianHarian: Yup.number()
        //     .typeError("Harus Nomor")
        //     .required("Tidak boleh kosong"),
        //   Praktik: Yup.number()
        //     .typeError("Harus Nomor")
        //     .required("Tidak boleh kosong"),
        //   KD_PH1: Yup.string().required("Tidak boleh kosong"),
        //   KD_PH2: Yup.string().required("Tidak boleh kosong"),
        //   KD_PH3: Yup.string().required("Tidak boleh kosong"),
        //   KD_PH4: Yup.string().required("Tidak boleh kosong"),
        //   KD_P1: Yup.string().required("Tidak boleh kosong"),
        //   KD_P2: Yup.string().required("Tidak boleh kosong"),
        //   KD_P3: Yup.string().required("Tidak boleh kosong"),
        //   KD_P4: Yup.string().required("Tidak boleh kosong")
        // })}
        validationSchema={Yup.object().shape({
          Praktik: Yup.array()
            .of(
              Yup.object().shape({
                deskripsi: Yup.string().required("Tidak boleh kosong")
              })
            )
            .required("Kosong"),
          PenilaianHarian: Yup.array()
            .of(
              Yup.object().shape({
                deskripsi: Yup.string().required("Tidak boleh kosong")
              })
            )
            .required("Kosong")
        })}
      >
        {props => {
          const { isSubmitting, handleSubmit, values } = props;
          return isSubmitting ? (
            <Loading />
          ) : (
            <form
              className="uk-form-stacked uk-width-1-1  uk-margin uk-card uk-card-default uk-card-body"
              onSubmit={handleSubmit}
            >
              <div
                className="uk-flex animated fadeInUp"
                style={{ animationDuration: ".3s" }}
              >
                <div className="uk-width-1-2  uk-padding-small">
                  <label>PH</label>
                  <FieldArray
                    name="PenilaianHarian"
                    render={arrayHelpers => (
                      <div>
                        {values.PenilaianHarian &&
                          values.PenilaianHarian.length > 0 &&
                          values.PenilaianHarian.map((PH, index) => (
                            <div key={index} className="uk-flex uk-margin">
                              <Field
                                name={`PenilaianHarian[${index}].deskripsi`}
                                width="uk-width-3-4 uk-padding-remove"
                                component={FormText}
                                placeholder={`KD ${index + 1}`}
                                style={{
                                  padding: 5
                                }}
                              />
                              <button
                                type="button"
                                className="uk-button uk-button-danger uk-width-1-4  uk-margin-remove"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                Hapus
                              </button>
                            </div>
                          ))}

                        <button
                          type="button"
                          onClick={() => arrayHelpers.push({ deskripsi: "" })} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    )}
                  />
                  {}
                </div>
                <div className="uk-width-1-2 uk-padding-small">
                  <label>Praktik</label>
                  <FieldArray
                    name="Praktik"
                    render={arrayHelpers => (
                      <div>
                        {values.Praktik &&
                          values.Praktik.length > 0 &&
                          values.Praktik.map((PH, index) => (
                            <div key={index} className="uk-flex uk-margin">
                              <Field
                                name={`Praktik[${index}].deskripsi`}
                                width="uk-width-3-4 uk-padding-remove"
                                component={FormText}
                                placeholder={`KD ${index + 1}`}
                                style={{
                                  padding: 5
                                }}
                              />
                              <button
                                type="button"
                                className="uk-button uk-button-danger uk-width-1-4  uk-margin-remove"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                Hapus
                              </button>
                            </div>
                          ))}

                        <button
                          type="button"
                          onClick={() => arrayHelpers.push({ name: "" })} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    )}
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
    let isLastPage = this.props.page.mapel.length + 1 === this.props.page.page;
    return isLastPage ? (
      <MapelPlus plus={this.props.plus} />
    ) : (
      <MapelSection {...this.props} />
    );
  }
}
