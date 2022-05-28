import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  res,
  ref,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { userInputs } from "../../formSource";
import { auth } from '../../firebase'
import { useState } from "react";


/*const infUI = (user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
      
      
    })
  }
}*/



const Single = () => {

  const [info , setInfo] = useState([]);
  
  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("users").get().then((querySnapshot) => {
           
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setInfo(arr => [...arr , data]);
                
          });
      })
  }
    
  // Display the result on the page

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />


        <div className="top">
          <div className="left">
            
            <h1 className="title">Información de contacto</h1>
            <div className="item">
              
              <div className="details">
                <h1 className="itemTitle">
                  
                </h1>


                <div className="detailItem">
                  <span className="itemKey">Nombre y apellidos: </span>
                  <span className="itemValue">{}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Nombre usuario: </span>
                  <span className="itemValue">{}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{auth.currentUser?.email}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Teléfono: </span>
                  <span className="itemValue">{}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default Single;
