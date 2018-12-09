import React, { Component } from "react";
import Back from "../../Style/back.svg";
import { DbGuru, GuruKu, Sekolah } from "../../data";
import { Formik } from "formik";
import * as Yup from "yup";
import Loading from "../../components/child/loading";
import Pengaturan_Guru from "../Pengaturan/Guru";
import Pengaturan_Sekolah from "../Pengaturan/Sekolah";
import Images from "../../components/child/Image";
import { Link } from "react-router-dom";
export default class Pengaturan extends Component {
  state = { page: 0 };
  setTabs = e => {
    this.setState({ page: e });
  };
  render() {
    const guru = DbGuru.guru();
    const sekolah = DbGuru.sekolah();
    const initValues = {
      Nama: guru.nama,
      NIP: guru.nip,
      Kelas: guru.kelas,
      NamaSekolah: sekolah.nama,
      NPSN: sekolah.npsn,
      KepalaSekolah: sekolah.kepala,
      NIPKepala: sekolah.nip_kepala,
      Alamat: sekolah.alamat,
      Kelurahan: sekolah.kelurahan,
      Kecamatan: sekolah.kecamatan,
      Kota: sekolah.kota,
      Provinsi: sekolah.provinsi,
      Telepon: sekolah.telp,
      Email: sekolah.email,
      ZIP: sekolah.zip
    };
    const validationSchema = Yup.object().shape({
      Nama: Yup.string().required("Tidak boleh kosong"),
      NIP: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      Kelas: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      NamaSekolah: Yup.string().required("Tidak boleh kosong"),
      NPSN: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      KepalaSekolah: Yup.string().required("Tidak boleh kosong"),
      NIPKepala: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      Alamat: Yup.string().required("Tidak boleh kosong"),
      Kelurahan: Yup.string().required("Tidak boleh kosong"),
      Kecamatan: Yup.string().required("Tidak boleh kosong"),
      Kota: Yup.string().required("Tidak boleh kosong"),
      Provinsi: Yup.string().required("Tidak boleh kosong"),
      Telepon: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong"),
      Email: Yup.string()
        .email("masukan email dengan benar")
        .required("Tidak boleh kosong"),
      ZIP: Yup.number()
        .typeError("Harus Nomor")
        .required("Tidak boleh kosong")
    });
    return (
      <Formik
        enableReinitialize={true}
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            GuruKu.get("guru")
              .find({ id: guru.id })
              .assign({
                nama: values.Nama,
                kelas: values.Kelas,
                nip: values.NIP
              })
              .write();
            Sekolah.get("sekolah")
              .find({ id: guru.id_sekolah })
              .assign({
                nama: values.NamaSekolah,
                npsn: values.NPSN,
                alamat: values.Alamat,
                kelurahan: values.Kelurahan,
                kecamatan: values.Kecamatan,
                kota: values.Kota,
                provinsi: values.Provinsi,
                kepala: values.KepalaSekolah,
                nip_kepala: values.NIPKepala,
                telp: values.Telepon,
                email: values.Email,
                zip: values.ZIP
              })
              .write();
            setSubmitting(false);
          }, 400);
        }}
      >
        {props => {
          const { isSubmitting, handleSubmit, values } = props;

          const Tabs = [
            <Pengaturan_Guru values={values} />,
            <Pengaturan_Sekolah values={values} />
          ];

          return (
            <div className="uk-width-1-1 uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column">
              {isSubmitting ? (
                <Loading />
              ) : (
                <form
                  className="uk-card uk-card-default uk-width-expand uk-card-small"
                  onSubmit={handleSubmit}
                  style={{ marginTop: "20px" }}
                >
                  <div className="uk-card-header">
                    <div
                      className="uk-grid-small uk-flex-middle"
                      uk-grid="true"
                    >
                      <Link
                        to={this.props.match.url + "/home"}
                        className="animated fadeInLeft uk-button uk-button-text faster"
                      >
                        <Images src={Back} width={15} />
                      </Link>
                      <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">
                          {values.Nama.length > 0 ? values.Nama : "Kosong"}
                        </h3>
                        <p className="uk-text-meta uk-margin-remove-top">
                          {values.NIP.length > 0 ? values.NIP : "Kosong"}
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="uk-button uk-button-text uk-padding-remove"
                      >
                        Simpan
                      </button>
                    </div>
                  </div>
                  <ul
                    className="uk-child-width-expand uk-padding-remove uk-margin-remove"
                    uk-tab="true"
                  >
                    <li className="uk-active" onClick={() => this.setTabs(0)}>
                      <a href="#">Guru</a>
                    </li>
                    <li onClick={() => this.setTabs(1)}>
                      <a href="#">Sekolah</a>
                    </li>
                  </ul>
                  <div className="uk-card-body uk-flex uk-padding-small uk-text-small">
                    {Tabs[this.state.page]}
                  </div>
                </form>
              )}
            </div>
          );
        }}
      </Formik>
    );
  }
}
