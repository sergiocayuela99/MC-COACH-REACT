import "./new_entrenamiento.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
//import { createUserWithEmailAndPassword } from "firebase/auth";
//import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";



const New_entrenamiento = ({ inputs, title }) => {

  const [data, setData] = useState({});  
  const [per, setPerc] = useState(null);
  console.log(data);

  const [nombreCliente , setnombreCliente] = useState("");
  const [ejercicio1 , setejercicio1] = useState("");
  const [series1 , setseries1] = useState("");
  const [repeticiones1 , setrepeticiones1] = useState("");

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {


    await addDoc(collection(db, "entrenamientos"), {

      ...data,
      timeStamp: serverTimestamp(),

        /*nombreCliente: nombreCliente,
        ejercicio1: ejercicio1,
        series1: series1,
        repeticiones1: repeticiones1,*/
      });
      navigate(-1)
    } catch (err) {
      console.log(err);
    }
      /*.then(() => {
        setLoader(false);
        alert("Entrenamiento introducido de forma correcta👍");

      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

      setnombreCliente("");
      setejercicio1("");
      setseries1("");
      setrepeticiones1("");*/
  };


  return (
    <div className="new_entrenamiento">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="right">

          <form onSubmit={handleAdd}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Añadir entrenamiento
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default New_entrenamiento;

/*
<form onSubmit={handleAdd}>
              
              <label>Nombre del cliente</label>
              <input
                placeholder="Nombre"
                value={nombreCliente}
                onChange={(e) => setnombreCliente(e.target.value)}
              />

              <label>Ejercicio 1</label>
              <input
                placeholder="Ejercicio 1"
                value={ejercicio1}
                onChange={(e) => setejercicio1(e.target.value)}
              />

              <label>Serie Ej 1</label>
              <input
                placeholder="Serie Ej1"
                value={series1}
                onChange={(e) => setseries1(e.target.value)}
              />

              <label>Repeticiones Ej 1</label>
              <input
                placeholder="Repeticiones Ej1"
                value={repeticiones1}
                onChange={(e) => setrepeticiones1(e.target.value)}
              />

              <button
                type="submit"
                style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
              >
                Submit
              </button>

              <button type="submit">
                Añadir entrenamiento
              </button>

            </form>
*/
