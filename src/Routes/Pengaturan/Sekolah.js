import React from "react";
import FormHeavy from "../../components/child/FormHeavy";
const Pengaturan_Sekolah = ({ values }) => {
  return (
    <div className="uk-width-1-1 uk-child-width-1-2 uk-flex">
      <div>
        <FormHeavy name="KepalaSekolah" value={values} title="Kepala Sekolah" />
        <FormHeavy name="NIPKepala" value={values} title="NIP" />
        <FormHeavy name="NamaSekolah" value={values} title="Nama Sekolah" />
        <FormHeavy name="NPSN" value={values} title="NPSN" />
        <FormHeavy name="Email" value={values} title="Email" />
        <FormHeavy name="Telepon" value={values} title="Telepon" />
      </div>
      <div>
        <FormHeavy name="Alamat" value={values} title="Alamat" />
        <FormHeavy name="Kelurahan" value={values} title="Kelurahan" />
        <FormHeavy name="Kecamatan" value={values} title="Kecamatan" />
        <FormHeavy name="Kota" value={values} title="Kota" />
        <FormHeavy name="Provinsi" value={values} title="Provinsi" />
        <FormHeavy name="ZIP" value={values} title="Kode Pos" />
      </div>
    </div>
  );
};

export default Pengaturan_Sekolah;
