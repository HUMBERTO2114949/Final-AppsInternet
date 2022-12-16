import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjlyeiUmUrCApZjQTxnNHaEujsD-U7Zlw",
  authDomain: "final-3492d.firebaseapp.com",
  projectId: "final-3492d",
  storageBucket: "final-3492d.appspot.com",
  messagingSenderId: "919833016652",
  appId: "1:919833016652:web:5c3816c083ea402f3937e9",
  measurementId: "G-YW69WK05Q8"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const BD = getFirestore(FirebaseApp);