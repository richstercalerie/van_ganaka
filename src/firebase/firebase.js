// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdb7VeV1QSLPi4RemxyiMkSmDL90XCoqU",
  authDomain: "powerbi-9dfc4.firebaseapp.com",
  projectId: "powerbi-9dfc4",
  storageBucket: "powerbi-9dfc4.appspot.com",
  messagingSenderId: "1058079234341",
  appId: "1:1058079234341:web:d71e1b51d321aa876262cc",
  measurementId: "G-753PLF1V54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };