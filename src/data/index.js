import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

// make DB in LocalStorage
const gurudb = new LocalStorage("guruku");
const muriddb = new LocalStorage("murid");
const authdb = new LocalStorage("auth");
const sekolahdb = new LocalStorage("sekolah");

// connect to lowDB
const GuruKu = low(gurudb);
const Auth = low(authdb);
const Murid = low(muriddb);
const Sekolah = low(sekolahdb);

const DbGuru = {
  declareDB: () => {
    GuruKu.defaults({ guru: [] }).write();
    Sekolah.defaults({ sekolah: [] }).write();
    Murid.defaults({ murid: [] }).write();
    Auth.defaults({ auth: { id: "", isAuth: false } }).write();
  },
  authId: () => Auth.get("auth.id").value(),
  allguru: () => GuruKu.get("guru").value(),
  allsekolah: () => Sekolah.get("sekolah").value(),
  guru: () =>
    GuruKu.get("guru")
      .find({ id: DbGuru.authId() })
      .value(),
  sekolah: () =>
    Sekolah.get("sekolah")
      .find({ id: DbGuru.guru().id_sekolah })
      .value(),
  murid: () =>
    Murid.get("murid")
      .find({ id_guru: DbGuru.authId() })
      .value()
};

export { GuruKu, Auth, Murid, Sekolah, DbGuru };