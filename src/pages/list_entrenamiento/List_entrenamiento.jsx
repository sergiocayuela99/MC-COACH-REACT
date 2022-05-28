import "./list_entrenamiento.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable_entrenamiento from "../../components/datatable_entrenamiento/Datatable_entrenamiento"

const List_entrenamiento = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable_entrenamiento/>
      </div>
    </div>
  )
}

export default List_entrenamiento