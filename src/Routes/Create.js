import React, { Component } from "react";
import bus from "../Style/bus.svg";
import { Link } from "react-router-dom";
import Images from "../components/child/Image";
import Back from "../Style/back.svg";
import * as Yup from "yup";
import FormGuru from "./Create/Guru";
import { Formik, Field } from "formik";
import FormSekolah from "./Create/Sekolah";
import FormKepala from "./Create/KepalaSekolah";
import shortid from "shortid";
import { GuruKu, Auth, Sekolah, DbGuru } from "../data";
import Loading from "../components/child/loading";
import Sekolah_Ada from "./Create/Sekolah_Ada";
import FormSekolah2 from "./Create/Sekolah2";
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayPage: [
        <FormGuru {...this.props} />,
        <FormKepala {...this.props} />,
        <FormSekolah {...this.props} />,
        <FormSekolah2 {...this.props} />
      ],
      sekolah: DbGuru.allsekolah().length > 0
    };
  }

  componentDidUpdate(preProps, PrevState) {
    if (PrevState.sekolah !== DbGuru.allsekolah().length > 0) {
      this.setState({ sekolah: DbGuru.allsekolah().length > 0 });
    }
  }
  get getArray() {
    return this.state.sekolah ? 2 : this.state.ArrayPage.length;
  }
  componentDidMount() {
    if (this.state.sekolah) {
      let upArray = this.state.ArrayPage;
      upArray = upArray.slice(0, 1);
      upArray.push(<Sekolah_Ada {...this.props} />);
      this.setState({ ArrayPage: [...upArray] });
    }
  }
  render() {
    return this.state.ArrayPage[this.props.number];
  }
}
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      sekolah: DbGuru.allsekolah().length > 0
    };
  }

  componentDidUpdate(preProps, PrevState) {
    if (PrevState.sekolah !== DbGuru.allsekolah().length > 0) {
      this.setState({ sekolah: DbGuru.allsekolah().length > 0 });
    }
  }
  NextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }
  PrevPage() {
    this.setState({
      page: this.state.page - 1
    });
  }
  render() {
    var PageGet = new Page();
    const initialValues = this.state.sekolah
      ? {
          Nama_Guru: "",
          NIP: "",
          Kelas: 0,
          id_sekolah: ""
        }
      : {
          Nama_Guru: "",
          NIP: "",
          Kelas: 0,
          JenisKelamin: 0,
          Kapala_Sekolah: "",
          NIP2: "",
          id_sekolah: "",
          NamaSekolah: "",
          NPSN: "",
          Telp: "",
          Email: "",
          AlamatSekolah: "",
          Kelurahan: "",
          Kecamatan: "",
          Kota: "",
          Provinsi: "",
          ZIP: ""
        };
    const validationSchema = this.state.sekolah
      ? Yup.object().shape({
          Nama_Guru: Yup.string().required("Tidak boleh kosong"),
          NIP: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          Kelas: Yup.number().min(1, "Pilih Salah Satu")
        })
      : Yup.object().shape({
          Telp: Yup.string().required("Tidak boleh kosong"),
          Email: Yup.string()
            .email("masukan email dengan benar")
            .required("Tidak boleh kosong"),
          Nama_Guru: Yup.string().required("Tidak boleh kosong"),
          NIP: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          Kelas: Yup.number().min(1, "Pilih Salah Satu"),
          JenisKelamin: Yup.number().min(1, "Pilih Salah Satu"),
          Kapala_Sekolah: Yup.string().required("Tidak boleh kosong"),
          NIP2: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          NamaSekolah: Yup.string().required("Tidak boleh kosong"),
          NPSN: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong"),
          AlamatSekolah: Yup.string().required("Tidak boleh kosong"),
          Kelurahan: Yup.string().required("Tidak boleh kosong"),
          Kecamatan: Yup.string().required("Tidak boleh kosong"),
          Kota: Yup.string().required("Tidak boleh kosong"),
          Provinsi: Yup.string().required("Tidak boleh kosong"),
          ZIP: Yup.number()
            .typeError("Harus Nomor")
            .required("Tidak boleh kosong")
        });
    return (
      <div
        className="uk-flex uk-height-1-1 uk-flex uk-flex-between uk-flex-stretch"
        uk-grid="true"
      >
        <div
          className="uk-width-1-2 uk-height-1-1 uk-flex uk-flex-middle uk-flex-center"
          style={{ background: "#FFE5CF" }}
        >
          <Link
            to="/"
            className="uk-flex uk-flex-middle animated slideInLeft faster"
            style={{
              position: "absolute",
              left: "20px",
              top: "40px",
              textDecoration: "none",
              color: "unset"
            }}
          >
            <Images src={Back} width={20} style={{ marginRight: "5px" }} />{" "}
            Kembali
          </Link>
          <Images src={bus} width={400} animation={true} />
        </div>
        <div
          className="uk-margin-auto uk-width-1-2 uk-height-1-1 uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-padding-remove-left"
          style={{ maxHeight: "100vh", overflowY: "hidden" }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                const id = shortid.generate();
                const id_sekolah =
                  values.id_sekolah !== "" && this.state.sekolah
                    ? values.id_sekolah
                    : shortid.generate();
                GuruKu.get("guru")
                  .push({
                    id: id,
                    id_sekolah: id_sekolah,
                    nama: values.Nama_Guru,
                    gender: values.JenisKelamin,
                    kelas: values.Kelas,
                    nip: values.NIP
                  })
                  .write();
                !this.state.sekolah &&
                  Sekolah.get("sekolah")
                    .push({
                      id: id_sekolah,
                      nama: values.NamaSekolah,
                      npsn: values.NPSN,
                      alamat: values.AlamatSekolah,
                      kelurahan: values.Kelurahan,
                      kecamatan: values.Kecamatan,
                      kota: values.Kota,
                      provinsi: values.Provinsi,
                      kapala: values.Kapala_Sekolah,
                      nip_kepala: values.NIP2,
                      telp: values.Telp,
                      email: values.Email
                    })
                    .write();
                Auth.set("auth", { id: id, isAuth: true }).write();
                this.props.history.push("/");
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
                  className="uk-form-stacked uk-width-large"
                  onSubmit={handleSubmit}
                >
                  {console.log(values)}
                  <h1 className="uk-heading-primary uk-text-lead uk-text-bold uk-text-center">
                    Silahkan isi dengan data yang benar
                  </h1>
                  {<Page number={this.state.page} {...props} />}
                  <div
                    className={`uk-margin uk-flex ${
                      this.state.page !== 0
                        ? "uk-flex-between"
                        : "uk-flex-right"
                    }`}
                  >
                    {this.state.page !== 0 && (
                      <a
                        className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                        onClick={this.PrevPage.bind(this)}
                        type="primary"
                      >
                        Sebelumnya
                      </a>
                    )}
                    {this.state.page === PageGet.getArray - 1 ? (
                      <button
                        className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                        type="submit"
                      >
                        Daftar
                      </button>
                    ) : (
                      <a
                        className="btn uk-button uk-button-default uk-child-width-1-2  box-shadow-lg radius"
                        onClick={this.NextPage.bind(this)}
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
      </div>
    );
  }
}
