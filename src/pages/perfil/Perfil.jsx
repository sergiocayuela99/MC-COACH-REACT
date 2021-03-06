import "./perfil.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  res,
  ref,
  query,
  where
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { userInputs } from "../../formSource";
import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import * as firebase from "firebase/app";
import 'firebase/firestore';


const user = auth.currentUser




const Perfil = () => {


<<<<<<< HEAD
  const [perfiles, setPerfiles] = React.useState ([]);
  
  React.useEffect(() => {
    const collectionRef = collection(db, 'users');
    const q = query(collectionRef, where("email", "==", auth.currentUser.email))

    //const docSnap = await getDoc(collectionRef)


    const unsuscribe = onSnapshot(q, querySnapshot => {
      setPerfiles(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          nombreusuario: doc.data().nombreusuario,
          nombreapellido: doc.data().nombreapellido,
          email: doc.data().email,
          telefono: doc.data().telefono,
          
        })
        )
      )})
      return unsuscribe;
  }, [])
=======
>>>>>>> 167966a79513259654ed24485215d26b1f88e1e6




    

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />


        <div className="top">
          <div className="left">
            
            <h1 className="title">PERFIL</h1>

            <div className="item">
              
              <div className="details">
                <h1 className="itemTitle">
                  
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Nombre Usuario: </span>
                  <span className="itemValue">{}</span>
<<<<<<< HEAD
                </div>

                <div className="detailItem">
                  <span className="itemKey">Nombre y Apellidos: </span>
                  <span className="itemValue">{}</span>
                </div>

=======
                </div>

                <div className="detailItem">
                  <span className="itemKey">Nombre y Apellidos: </span>
                  <span className="itemValue">{}</span>
                </div>

>>>>>>> 167966a79513259654ed24485215d26b1f88e1e6
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{auth.currentUser?.email}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Telefono: </span>
                  <span className="itemValue">{}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Perfil;


