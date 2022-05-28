import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List_user from "./pages/list_user/List_user";
import List_entrenamiento from "./pages/list_entrenamiento/List_entrenamiento";
import List_ejercicio from "./pages/list_ejercicio/List_ejercicio";
import Single from "./pages/single/Single";
import New_user from "./pages/new_user/New_user";
import Perfil from "./pages/perfil/Perfil";
import New_entrenamiento from "./pages/new_entrenamiento/New_entrenamiento";
import New_ejercicio from "./pages/new_ejercicio/New_ejercicio";
import Horario from "./pages/horario/Horario";
import Chat from "./pages/chat/Chat";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { entrenamientoInputs, userInputs, ejercicioInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List_user />
                  </RequireAuth>
                }
              />
              <Route
                //path=":userId"
                path="single"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new_user"
                element={
                  <RequireAuth>
                    <New_user inputs={userInputs} title="Añadir nuevo usuario" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="ejercicios">
              <Route
                index
                element={
                  <RequireAuth>
                    <List_ejercicio />
                  </RequireAuth>
                }
              />
              <Route
                path=":ejercicioId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new_ejercicio"
                element={
                  <RequireAuth>
                    <New_ejercicio inputs={ejercicioInputs} title="Añadir nuevo ejercicio" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="entrenamientos">
              <Route
                index
                element={
                  <RequireAuth>
                    <List_entrenamiento />
                  </RequireAuth>
                }
              />
              <Route
                path=":entrenamientoId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new_entrenamiento"
                element={
                  <RequireAuth>
                    <New_entrenamiento inputs={entrenamientoInputs} title="Añadir nuevo entrenamiento" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="perfil">
              <Route
                index
                element={
                  <RequireAuth>
                    <Perfil />
                  </RequireAuth>
                }
              />
            </Route>
              <Route path="horario">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Horario />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="chat">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <Chat />
                    </RequireAuth>
                  }
                />
              </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
