import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Loading from "../child/loading";
import Personal from "./MuridPage/Personal";
export default class AddMurid extends Component {
  state = {
    page: 0
  };
  NextPage = () => {
    this.setState({
      page: this.state.page + 1
    });
  };
  PrevPage = () => {
    this.setState({
      page: this.state.page - 1
    });
  };
  render() {
    const Page = [<Personal />];
    const initValues = {
      NamaMurid: "",
      NISN: "",
      NIS: "",
      JenisKelamin: 0,
      Agama: 0,
      TempatLahir: "",
      TanggalLahir: "",
      Alamat: "",
      Kelurahan: "",
      Kecamatan: "",
      Kota: "",
      Provinsi: "",
      ZIP: "",
      NamaBapak: "",
      NamaIbu: "",
      PekerjaanBapak: "",
      PekerjaanIbu: "",
      Wali: "",
      PekerjaanWali: "",
      TinggiBadan: "",
      BeratBadan: "",
      Penglihatan: "",
      Pendengaran: "",
      Prestasi: ""
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
      PekerjaanIbu: Yup.string().required("Tidak boleh kosong"),
      Wali: Yup.string().required("Tidak boleh kosong"),
      PekerjaanWali: Yup.string().required("Tidak boleh kosong"),
      TinggiBadan: Yup.string().required("Tidak boleh kosong"),
      BeratBadan: Yup.string().required("Tidak boleh kosong"),
      Penglihatan: Yup.string().required("Tidak boleh kosong"),
      Pendengaran: Yup.string().required("Tidak boleh kosong"),
      Prestasi: Yup.string().required("Tidak boleh kosong")
    });
    return (
      <div className="animated zoomIn" style={{ animationDuration: ".2s" }}>
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // const id = shortid.generate();
              // const id_sekolah =
              //   values.id_sekolah !== "" && this.state.sekolah
              //     ? values.id_sekolah
              //     : shortid.generate();
              // GuruKu.get("guru")
              //   .push({
              //     id: id,
              //     id_sekolah: id_sekolah,
              //     nama: values.Nama_Guru,
              //     gender: values.JenisKelamin,
              //     kelas: values.Kelas,
              //     nip: values.NIP
              //   })
              //   .write();
              // this.props.history.push("/");
              console.log(values);
              actions.setSubmitting(false);
            }, 400);
          }}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              isValidating
            } = props;
            return isSubmitting ? (
              <Loading />
            ) : (
              <form
                className="uk-width-1-1 uk-flex-remove uk-padding-small"
                onSubmit={handleSubmit}
              >
                {console.log(values)}
                <h1 className="uk-heading-primary uk-text-small uk-text-bold ">
                  Silahkan isi dengan data yang benar
                </h1>
                {Page[this.state.page]}
                <div
                  className={`uk-margin uk-flex ${
                    this.state.page !== 0 ? "uk-flex-between" : "uk-flex-right"
                  }`}
                >
                  {this.state.page !== 0 && (
                    <a
                      className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                      onClick={this.PrevPage}
                      type="primary"
                    >
                      Sebelumnya
                    </a>
                  )}
                  {this.state.page === Page.length - 1 ? (
                    <button
                      className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                      type="submit"
                    >
                      Daftar
                    </button>
                  ) : (
                    <a
                      className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                      onClick={this.NextPage}
                      type="primary"
                    >
                      Lanjut
                    </a>
                  )}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}
