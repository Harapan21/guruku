import React from "react";
import low from "lowdb";

import LocalStorage from "lowdb/adapters/LocalStorage";

// make DB in LocalStorage
const gurudb = new LocalStorage("guruku");
const muriddb = new LocalStorage("murid");
const authdb = new LocalStorage("auth");
const sekolahdb = new LocalStorage("sekolah");
const mapel = new LocalStorage("mapel");

// connect to lowDB
const GuruKu = low(gurudb);
const Auth = low(authdb);
const Murid = low(muriddb);
const Sekolah = low(sekolahdb);
const Mapel = low(mapel);

const DbGuru = {
  declareDB: () => {
    GuruKu.defaults({ guru: [] }).write();
    Sekolah.defaults({ sekolah: [] }).write();
    Mapel.defaults({ mapel: [] }).write();
    Murid.defaults({ murid: [] }).write();
    Auth.defaults({ auth: { id: "", isAuth: false } }).write();
  },
  authId: function() {
    return Auth.get("auth.id").value();
  },
  allguru: function() {
    return GuruKu.get("guru").value();
  },
  allsekolah: function() {
    return Sekolah.get("sekolah").value();
  },
  guru: function() {
    return GuruKu.get("guru")
      .find({ id: this.authId() })
      .value();
  },
  sekolah: function() {
    return Sekolah.get("sekolah")
      .find({ id: this.guru().id_sekolah })
      .value();
  },
  murid: function() {
    return Murid.get("murid")
      .filter({ guru: this.authId() })
      .value();
  }
};

export { GuruKu, Auth, Murid, Sekolah, DbGuru };
