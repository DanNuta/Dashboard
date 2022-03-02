import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD7JH2yPEkxFBJ_MOC4Bcoz8El8wXPyiVY",
    authDomain: "dashboard-8178f.firebaseapp.com",
    projectId: "dashboard-8178f",
    storageBucket: "dashboard-8178f.appspot.com",
    messagingSenderId: "291617933603",
    appId: "1:291617933603:web:84c566fd89d3b6bc53a496"
  };


  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services

  const authDashboard = firebase.auth();

  export {authDashboard}