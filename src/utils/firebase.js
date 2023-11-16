// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb63_57BVoK1AYHMFYmRjBw6IlstvPtcU",
  authDomain: "movieworld-e6e8e.firebaseapp.com",
  databaseURL: "https://movieworld-e6e8e-default-rtdb.firebaseio.com",
  projectId: "movieworld-e6e8e",
  storageBucket: "movieworld-e6e8e.appspot.com",
  messagingSenderId: "337029501014",
  appId: "1:337029501014:web:5236908d8d3497ecd72bf7",
  measurementId: "G-29WB5PFDXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
