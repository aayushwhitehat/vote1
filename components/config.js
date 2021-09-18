// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIM1aut6lS1ZMpXdBuWbQYJT_pTvicjsM",
  authDomain: "vote-d5658.firebaseapp.com",
  projectId: "vote-d5658",
  storageBucket: "vote-d5658.appspot.com",
  messagingSenderId: "862810910917",
  appId: "1:862810910917:web:f8425c6970724b4fc580ac",
  measurementId: "G-DHW6RL4WFW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);