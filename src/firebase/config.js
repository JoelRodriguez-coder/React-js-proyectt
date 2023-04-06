// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OJqlLPo7EM7xInmw7cQ-N0IfYoypq-E",
  authDomain: "proyecto-reactjs-2023.firebaseapp.com",
  projectId: "proyecto-reactjs-2023",
  storageBucket: "proyecto-reactjs-2023.appspot.com",
  messagingSenderId: "294231908106",
  appId: "1:294231908106:web:f4f3d375ad6b0e4f5da4f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)