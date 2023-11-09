// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrgywIOvU0UkT-bKzr57oACDczbWMrURM",
  authDomain: "gigrapid.firebaseapp.com",
  projectId: "gigrapid",
  storageBucket: "gigrapid.appspot.com",
  messagingSenderId: "875350272733",
  appId: "1:875350272733:web:53b58665f5333ac5f50934",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;