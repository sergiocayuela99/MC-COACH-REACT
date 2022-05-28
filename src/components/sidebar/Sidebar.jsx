import "./sidebar.scss";

//ICONOS
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ForumIcon from '@mui/icons-material/Forum';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



//COLUMNA IZQUIERDA
const Sidebar = () => {

/*const navitage = useNavigate()

const handleSignOut = () => {
  auth
    .signOut()
    .then(() => {
      navitage("")
      
    })
    .catch(error => alert(error.message))
}*/



  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MC-GYM</span>

        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Pestaña Principal</span>
            </Link>
          </li>


          <p className="title">GESTIÓN GIMNASIO</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Usuarios</span>
            </li>
          </Link>

          <Link to="/ejercicios" style={{ textDecoration: "none" }}>
          <li>
            <FitnessCenterIcon className="icon" />
            <span>Ejercicios</span>
          </li>
          </Link>

          <Link to="/entrenamientos" style={{ textDecoration: "none" }}>
            <li>
              <SportsHandballIcon className="icon" />
              <span>Entrenamientos</span>
            </li>
          </Link>



          <Link to="/horario" style={{ textDecoration: "none" }}>
          <li>
            <ScheduleIcon className="icon" />
            <span>Horario</span>
          </li>
          </Link>

          <Link to="/chat" style={{ textDecoration: "none" }}>
          <li>
            <ForumIcon className="icon" />
            <span>Chat</span>
          </li>
          </Link>




          <p className="title">CUENTA</p>
          <Link to="/perfil" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          </Link>       

          <li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <ExitToAppIcon className="icon" />
            <span>Cerrar Sesion</span>
          </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
      <p className="title">Tema</p>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
      <br />
      <img 
          className="imagelogo"
          src="https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=a1c2bb77-6d22-4019-bbb6-9bd820240bd2"
          alt="new"
        />
    </div>
  );
};

export default Sidebar;
