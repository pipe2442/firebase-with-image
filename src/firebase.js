import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJgfM7i92ZIbdmxx9HUx1NA_vrI8i-b7E",
  authDomain: "imgcoleccion-959d0.firebaseapp.com",
  projectId: "imgcoleccion-959d0",
  storageBucket: "imgcoleccion-959d0.appspot.com",
  messagingSenderId: "323902711038",
  appId: "1:323902711038:web:f2839649f236990fe9f1af"
};

firebase.initializeApp(firebaseConfig);
export { firebase };
