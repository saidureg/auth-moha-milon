// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_hFktE5x0E_gO8vsEajF0P4-Zh9u0m5M",
  authDomain: "auth-moha-milon-3821e.firebaseapp.com",
  projectId: "auth-moha-milon-3821e",
  storageBucket: "auth-moha-milon-3821e.appspot.com",
  messagingSenderId: "849067568060",
  appId: "1:849067568060:web:8099bbd1463390d3fdd9b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
