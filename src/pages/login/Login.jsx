import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <img src="https://firebasestorage.googleapis.com/v0/b/gym-mc-51f29.appspot.com/o/logo.png?alt=media&token=a1c2bb77-6d22-4019-bbb6-9bd820240bd2"
        style={{
            height: 500,
            width: 500}}/>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email/Nombre usuario"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Email o Contraseña incorrecta</span>}
      </form>
    </div>
  );
};

export default Login;
