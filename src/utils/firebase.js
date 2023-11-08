// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVv58ddFnyQJAYkC_cvHAcKWEbyxd1Rww",
  authDomain: "movieworld-46a1c.firebaseapp.com",
  projectId: "movieworld-46a1c",
  storageBucket: "movieworld-46a1c.appspot.com",
  messagingSenderId: "658026536256",
  appId: "1:658026536256:web:c394c17de7d3d8a78b2ea5",
  measurementId: "G-NHTZ190J1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
