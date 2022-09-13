// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjsHYRXObju0ywQ97Ry_DwmkChT0y5AKs",
  authDomain: "dashboard-83c10.firebaseapp.com",
  projectId: "dashboard-83c10",
  storageBucket: "dashboard-83c10.appspot.com",
  messagingSenderId: "212704285073",
  appId: "1:212704285073:web:119c39523eb123dede0a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;