// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK8Lg6VKLi-xziwfNVzr_Tt97lfa1zwbE",
  authDomain: "todo-list-9458c.firebaseapp.com",
  projectId: "todo-list-9458c",
  storageBucket: "todo-list-9458c.appspot.com",
  messagingSenderId: "447456128036",
  appId: "1:447456128036:web:996269faaa43d58b62fcb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;