import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Loading from "../child/loading";
import Personal from "./MuridPage/Personal";
import OrangTua from "./MuridPage/OrangTua";
import { Murid, DbGuru } from "../../data";
import shortid from "shortid";
import { withRouter } from "react-router-dom";
class AddMurid extends Component {
  state = {
    page: 0,
    checked: false
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
  handleAddress = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const Page = [<Personal />, <OrangTua CallBack={this.handleAddress} />];

    const initValues = this.state.checked
      ? {
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
          PekerjaanIbu: ""
        }
      : {
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
          AlamatOrangTua: "",
          KelurahanOrangTua: "",
          KecamatanOrangTua: "",
          KotaOrangTua: "",
          ProvinsiOrangTua: "",
          ZIPOrangTua: "",
          NamaBapak: "",
          NamaIbu: "",
          PekerjaanBapak: "",
          PekerjaanIbu: ""
        };
    const validationSchema = this.state.checked
      ? Yup.object().shape({
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
          PekerjaanIbu: Yup.string().required("Tidak boleh kosong")
        })
      : Yup.object().shape({
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
    return (
      <div className="animated zoomIn" style={{ animationDuration: ".2s" }}>
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              const id = shortid.generate();
              let date = values.TanggalLahir.split("-")
                .reverse()
                .join("/");
              Murid.get("murid")
                .push({
                  id: id,
                  guru: DbGuru.authId(),
                  nama: values.NamaMurid,
                  gender: values.JenisKelamin,
                  nis: values.NIS,
                  nisn: values.NISN,
                  agama: values.Agama,
                  tempatLahir: values.TempatLahir,
                  tanggalLahir: date,
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
                    alamat: this.state.checked
                      ? {
                          addr: values.Alamat,
                          kec: values.Kecamatan,
                          kel: values.Kelurahan,
                          kota: values.Kota,
                          provinsi: values.Provinsi,
                          zip: values.ZIP
                        }
                      : {
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
              resetForm();
              this.setState({ page: 0 });
            }, 400);
          }}
        >
          {props => {
            const { isSubmitting, handleSubmit } = props;
            return isSubmitting ? (
              <Loading />
            ) : (
              <form
                className="uk-width-1-1 uk-flex-remove uk-padding-small"
                onSubmit={handleSubmit}
              >
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

export default withRouter(AddMurid);
