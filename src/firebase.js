import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFVUbY-7sbSZiOlw43YSoxwuNdXWpet9M",
  authDomain: "img-demo-82479.firebaseapp.com",
  projectId: "img-demo-82479",
  storageBucket: "img-demo-82479.appspot.com",
  messagingSenderId: "310075940051",
  appId: "1:310075940051:web:8e4fb514048544099bc826"
};

firebase.initializeApp(firebaseConfig);
export { firebase };
