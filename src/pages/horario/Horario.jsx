import "./horario.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ApiCalendar from "../../ApiCalendar"

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
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
import React, {Component } from "react";
import * as firebase from "firebase/app";
import 'firebase/firestore';



const user = auth.currentUser


const Horario = () => {



  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <ApiCalendar/>

      </div>
    </div>
  );
}
export default Horario;