// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1AH8leT49HQvlj_iDwJZhsdCTpOHAhtE",
  authDomain: "weather-app-28488.firebaseapp.com",
  projectId: "weather-app-28488",
  storageBucket: "weather-app-28488.appspot.com",
  messagingSenderId: "773978987632",
  appId: "1:773978987632:web:9bc43e21d010c03bfd68b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;