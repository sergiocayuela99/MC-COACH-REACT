import "./navbar.scss";
//ICONOS
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

import { auth } from '../../firebase'


//BARRA SUPERIOR
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const user = auth.currentUser

  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            Español
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />Claro/Oscuro
          </div>
          <div>Bienvenido: {auth.currentUser?.email}</div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
