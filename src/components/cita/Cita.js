import './cita.css';
import { DataGrid } from "@mui/x-data-grid";
import { citaColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

const Datatable_entrenamiento = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
// LISTEN (REALTIME)
const unsub = onSnapshot(
    collection(db, "citas"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    }
  );

  return () => {
    unsub();
  };
}, []);

const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "citas", id));
    setData(data.filter((item) => item.id !== id));
  } catch (err) {
    console.log(err);
  }
};

const actionColumn = [
  {
    field: "action",
    headerName: "Eliminar Cita",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            Eliminar
          </div>
        </div>
      );
    },
  },
];
return (
  <div className="datatable">
    <div className="datatableTitle">
      Lista de Citas
    </div>
    <DataGrid
      className="datagrid"
      rows={data}
      columns={citaColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      //checkboxSelection
    />
  </div>
);
};

export default Datatable_entrenamiento;
