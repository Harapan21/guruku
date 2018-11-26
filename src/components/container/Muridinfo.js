import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { FormText, FormSelect } from "../child/form";
import Loading from "../child/loading";
import { Murid } from "../../data";
const electron = window.require("electron");
var screenElectron = electron.remote;
const MuridInfoForm = props => {
  const { name, title, value } = props;
  return (
    <div className="uk-margin uk-flex uk-flex-left uk-flex-middle  uk-flex-between">
      <label className="uk-form-label">{props.title}</label>
      <div className="uk-form-controls">
        <Field
          name={name}
          style={{ width: value[name].length + 2 + "ch" }}
          placeholder={title}
          className="uk-form-blank uk-text-right"
          component={FormText}
        />
      </div>
    </div>
  );
};

class Muridinfo extends Component {
  state = { height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ height: window.innerHeight });
  };
  render() {
    const { murid, history } = this.props;
    const initValues = {
      NamaMurid: murid.nama,
      NISN: murid.nisn,
      NIS: murid.nis,
      JenisKelamin: murid.gender,
      Agama: murid.agama,
      TempatLahir: murid.tempatLahir,
      TanggalLahir: murid.tanggalLahir,
      Alamat: murid.alamat.addr,
      Kelurahan: murid.alamat.kel,
      Kecamatan: murid.alamat.kec,
      Kota: murid.alamat.kota,
      Provinsi: murid.alamat.provinsi,
      ZIP: murid.alamat.zip,
      AlamatOrangTua: murid.ortu.alamat.addr,
      KelurahanOrangTua: murid.ortu.alamat.kel,
      KecamatanOrangTua: murid.ortu.alamat.kec,
      KotaOrangTua: murid.ortu.alamat.kota,
      ProvinsiOrangTua: murid.ortu.alamat.provinsi,
      ZIPOrangTua: murid.ortu.alamat.zip,
      NamaBapak: murid.ortu.bapak,
      NamaIbu: murid.ortu.ibu,
      PekerjaanBapak: murid.ortu.pekerjaan_bapak,
      PekerjaanIbu: murid.ortu.pekerjaan_ibu
    };
    const validationSchema = Yup.object().shape({
      NamaMurid: Yup.string().required("Tidak boleh kosong"),
      NISN: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      NIS: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      JenisKelamin: Yup.number().min(1, "Pilih Salah Satu"),
      AlamatOrangTua: Yup.string().required("Tidak boleh kosong"),
      KelurahanOrangTua: Yup.string().required("Tidak boleh kosong"),
      KecamatanOrangTua: Yup.string().required("Tidak boleh kosong"),
      KotaOrangTua: Yup.string().required("Tidak boleh kosong"),
      ProvinsiOrangTua: Yup.string().required("Tidak boleh kosong"),
      ZIPOrangTua: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      Agama: Yup.number().min(1, "Pilih Salah Satu"),
      TempatLahir: Yup.string().required("Tidak boleh kosong"),
      TanggalLahir: Yup.string().required("Tidak boleh kosong"),
      Alamat: Yup.string().required("Tidak boleh kosong"),
      Kelurahan: Yup.string().required("Tidak boleh kosong"),
      Kecamatan: Yup.string().required("Tidak boleh kosong"),
      Kota: Yup.string().required("Tidak boleh kosong"),
      Provinsi: Yup.string().required("Tidak boleh kosong"),
      ZIP: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      NamaBapak: Yup.string().required("Tidak boleh kosong"),
      NamaIbu: Yup.string().required("Tidak boleh kosong"),
      PekerjaanBapak: Yup.string().required("Tidak boleh kosong"),
      PekerjaanIbu: Yup.string().required("Tidak boleh kosong")
    });
    return murid === undefined ? (
      history.goForward()
    ) : (
      <div className="animated zoomIn" style={{ animationDuration: ".2s" }}>
        <Formik
          enableReinitialize={true}
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              Murid.get("murid")
                .find({ id: murid.id })
                .assign({
                  nama: values.NamaMurid,
                  gender: values.JenisKelamin,
                  nis: values.NIS,
                  nisn: values.NISN,
                  agama: values.Agama,
                  tempatLahir: values.TempatLahir,
                  tanggalLahir: values.TanggalLahir,
                  alamat: {
                    addr: values.Alamat,
                    kec: values.Kecamatan,
                    kel: values.Kelurahan,
                    kota: values.Kota,
                    provinsi: values.Provinsi,
                    zip: values.ZIP
                  },
                  ortu: {
                    bapak: values.NamaBapak,
                    ibu: values.NamaIbu,
                    pekerjaan_bapak: values.PekerjaanBapak,
                    pekerjaan_ibu: values.PekerjaanIbu,
                    alamat: {
                      addr: values.AlamatOrangTua,
                      kec: values.KecamatanOrangTua,
                      kel: values.KelurahanOrangTua,
                      kota: values.KotaOrangTua,
                      provinsi: values.ProvinsiOrangTua,
                      zip: values.ZIPOrangTua
                    }
                  }
                })
                .write();
              this.props.CallBack();
              setSubmitting(false);
            }, 400);
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit, values } = props;
            return isSubmitting ? (
              <Loading />
            ) : (
              <form
                className=" uk-flex-remove uk-padding-small"
                onSubmit={handleSubmit}
              >
                <div
                  className="uk-margin"
                  style={{
                    maxHeight: this.state.height - 110 + "px",
                    overflowY: "scroll"
                  }}
                >
                  <label className="uk-form-label">Personal</label>
                  <MuridInfoForm
                    name="NamaMurid"
                    value={values}
                    title="Nama Murid"
                  />
                  <MuridInfoForm name="NISN" value={values} title="NISN" />
                  <div className="uk-margin uk-flex uk-flex-left uk-flex-middle uk-flex-between">
                    <label className="uk-form-label">Agama</label>
                    <div
                      className="uk-form-controls "
                      style={{ paddingRight: "15px" }}
                    >
                      <Field name="JenisKelamin" component="select">
                        <option value={0}>Jenis Kelamin</option>
                        <option value={1}>Laki - Laki</option>
                        <option value={2}>Perempuan</option>
                      </Field>
                    </div>
                  </div>
                  <div className="uk-margin uk-flex uk-flex-left uk-flex-middle uk-flex-between">
                    <label className="uk-form-label">JenisKelamin</label>
                    <div
                      className="uk-form-controls"
                      style={{ paddingRight: "15px" }}
                    >
                      <Field name="Agama" component="select">
                        <option value={0}>Agama</option>
                        <option value={1}>Islam</option>
                        <option value={2}>Kristen</option>
                        <option value={3}>Katolik</option>
                        <option value={4}>Hindu</option>
                        <option value={5}>Buddha</option>
                        <option value={6}>Kong Hu Cu</option>
                      </Field>
                    </div>
                  </div>
                  <MuridInfoForm
                    name="TempatLahir"
                    value={values}
                    title="Tempat Lahir"
                  />
                  <div className="uk-margin uk-flex uk-flex-left uk-flex-middle uk-flex-between">
                    <label className="uk-form-label">Tanggal Lahir</label>
                    <div className="uk-form-controls uk-flex uk-flex-middle">
                      <Field
                        type="date"
                        name="TanggalLahir"
                        placeholder="Tanggal Lahir"
                        className="uk-text-right"
                        component={FormText}
                      />
                    </div>
                  </div>
                  <MuridInfoForm name="Alamat" value={values} title="Alamat" />
                  <MuridInfoForm
                    name="Kelurahan"
                    value={values}
                    title="Kelurahan"
                  />
                  <MuridInfoForm
                    name="Kecamatan"
                    value={values}
                    title="Kecamatan"
                  />
                  <MuridInfoForm name="Kota" value={values} title="Kota" />
                  <MuridInfoForm name="ZIP" value={values} title="Kode Pos" />
                  <label className="uk-form-label">Orang Tua</label>
                  <MuridInfoForm
                    name="NamaBapak"
                    value={values}
                    title="Nama Bapak"
                  />
                  <MuridInfoForm
                    name="NamaIbu"
                    value={values}
                    title="Nama Ibu"
                  />
                  <MuridInfoForm
                    name="PekerjaanBapak"
                    value={values}
                    title="Pekerjaan Bapak"
                  />
                  <MuridInfoForm
                    name="PekerjaanIbu"
                    value={values}
                    title="Pekerjaan Ibu"
                  />
                  <MuridInfoForm
                    name="AlamatOrangTua"
                    value={values}
                    title="Alamat"
                  />
                  <MuridInfoForm
                    name="KelurahanOrangTua"
                    value={values}
                    title="Kelurahan"
                  />
                  <MuridInfoForm
                    name="KecamatanOrangTua"
                    value={values}
                    title="Kecamatan"
                  />
                  <MuridInfoForm
                    name="KotaOrangTua"
                    value={values}
                    title="Kota"
                  />
                  <MuridInfoForm
                    name="ZIPOrangTua"
                    value={values}
                    title="Kode Pos"
                  />
                </div>
                <div className="uk-margin uk-flex uk-flex-right">
                  <button
                    className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                    type="submit"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
export default withRouter(Muridinfo);
