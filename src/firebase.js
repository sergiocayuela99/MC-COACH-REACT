//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gym-mc-51f29.firebaseapp.com",
  projectId: "gym-mc-51f29",
  storageBucket: "gym-mc-51f29.appspot.com",
  messagingSenderId: "140082710615",
  appId: "1:140082710615:web:d4f169cd0aec1b87027b12"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const database = getDatabase(app);