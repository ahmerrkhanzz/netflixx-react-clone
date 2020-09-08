import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBEQ_CIEQrceYlonBlLB0GsH5bTRBwZ1hw",
  authDomain: "netflixx-react-clone.firebaseapp.com",
  databaseURL: "https://netflixx-react-clone.firebaseio.com",
  projectId: "netflixx-react-clone",
  storageBucket: "netflixx-react-clone.appspot.com",
  messagingSenderId: "725435273187",
  appId: "1:725435273187:web:3dd163a36de5657e3f5ad6",
  measurementId: "G-QWQP2GYV5E",
});

const db = firebaseApp.fireStore();
const auth = firebaseApp.auth();
