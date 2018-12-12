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
const Mapeldb = low(mapel);
import shortid from "shortid";
const DbGuru = {
  declareDB: () => {
    GuruKu.defaults({ guru: [] }).write();
    Sekolah.defaults({ sekolah: [] }).write();
    Mapeldb.defaults({
      mapel: [
        { id: shortid.generate(), name: "Agama" },
        { id: shortid.generate(), name: "PPKN" },
        { id: shortid.generate(), name: "BAHASA" },
        { id: shortid.generate(), name: "MTK" },
        { id: shortid.generate(), name: "IPA" },
        { id: shortid.generate(), name: "IPS" },
        { id: shortid.generate(), name: "SBDP" },
        { id: shortid.generate(), name: "PJOK" },
        { id: shortid.generate(), name: "B.Inggris" }
      ]
    }).write();
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
  mapel: function() {
    return Mapeldb.get("mapel").value();
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

export { GuruKu, Auth, Murid, Sekolah, Mapeldb, DbGuru };
