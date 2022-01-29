// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2WvgCVcU9cCijA5CVolpn7Agj6Kghsiw",
  authDomain: "rose-n-videos.firebaseapp.com",
  projectId: "rose-n-videos",
  storageBucket: "rose-n-videos.appspot.com",
  messagingSenderId: "379766112496",
  appId: "1:379766112496:web:71422f22ce42f795410235",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
