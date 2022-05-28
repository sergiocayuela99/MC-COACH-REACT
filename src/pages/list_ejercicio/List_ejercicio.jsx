import "./list_ejercicio.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable_ejercicio from "../../components/datatable_ejercicio/Datatable_ejercicio"

const List_ejercicio = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable_ejercicio/>
      </div>
    </div>
  )
}

export default List_ejercicio