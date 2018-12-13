import React, { Component } from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
import Loading from "../../components/child/loading";
import { FormText } from "../../components/child/form";
import { GuruKu, DbGuru } from "../../data";
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
    const { semester, mapel, page } = this.props.page;
    let logic =
      GuruKu.get("guru")
        .find({ id: DbGuru.authId() })
        .get("semester")
        .find({ id: semester })
        .get("values")
        .find({ id: mapel[page - 1].id })
        .value() === undefined;
    let initValues = !logic
      ? GuruKu.get("guru")
          .find({ id: DbGuru.authId() })
          .get("semester")
          .find({ id: semester })
          .get("values")
          .find({ id: mapel[page - 1].id })
          .value()
      : { id: mapel[page - 1].id, Praktik: [], PenilaianHarian: [] };
    return (
      <Formik
        enableReinitialize={true}
        initialValues={initValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            logic
              ? GuruKu.get("guru")
                  .find({ id: DbGuru.authId() })
                  .get("semester")
                  .find({ id: semester })
                  .get("values")
                  .push({ ...values })
                  .write()
              : GuruKu.get("guru")
                  .find({ id: DbGuru.authId() })
                  .get("semester")
                  .find({ id: semester })
                  .get("values")
                  .find({ id: mapel[page - 1].id })
                  .assign({ ...values })
                  .write();
            setSubmitting(false);
          }, 100);
        }}
        validationSchema={Yup.object().shape({
          Praktik: Yup.array().of(
            Yup.object().shape({
              deskripsi: Yup.string().required("Tidak boleh kosong")
            })
          ),
          PenilaianHarian: Yup.array().of(
            Yup.object().shape({
              deskripsi: Yup.string().required("Tidak boleh kosong")
            })
          )
        })}
      >
        {props => {
          const { isSubmitting, handleSubmit, values } = props;
          return isSubmitting ? (
            <Loading />
          ) : (
            <form
              className="uk-form-stacked uk-width-1-1 uk-card uk-card-default uk-card-body uk-margin-remove uk-padding-remove"
              onSubmit={handleSubmit}
            >
              <div
                className="uk-flex animated fadeInUp uk-margin-remove uk-padding-remove"
                style={{ animationDuration: ".3s" }}
              >
                <div className="uk-width-1-2 uk-padding-small">
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
                <div className="uk-width-1-2  uk-padding-small">
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
                          onClick={() => arrayHelpers.push({ deskripsi: "" })} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="uk-margin uk-text-right  uk-padding-small">
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
