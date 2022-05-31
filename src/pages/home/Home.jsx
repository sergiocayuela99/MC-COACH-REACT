import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";
import Datatable_user from "../../components/datatable_user/Datatable_user";
import Datatable_entrenamiento from "../../components/datatable_entrenamiento/Datatable_entrenamiento";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
         </div>
        
        <div className="listContainer">
          <div className="listTitle">Visión Global MC-GYM</div>
          <Datatable_entrenamiento />
        </div>
        <div className="listContainer">
          <div className="listTitle">Usuarios de MC-GYM</div>
          <Datatable_user />
        </div>
        <img 
          className="imagelogo"
          src="https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=a1c2bb77-6d22-4019-bbb6-9bd820240bd2"
          alt="new"
        />
      </div>
    </div>
  );
};

export default Home;
