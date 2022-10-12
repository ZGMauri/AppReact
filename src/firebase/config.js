// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0SEgdaQUON_LY-Q-jVWVerNgPA_-tDIw",
  authDomain: "coderhouse-ecommercereac-63548.firebaseapp.com",
  projectId: "coderhouse-ecommercereac-63548",
  storageBucket: "coderhouse-ecommercereac-63548.appspot.com",
  messagingSenderId: "873483252463",
  appId: "1:873483252463:web:387ad447a519c5478c211a",
  measurementId: "G-GW79MDDZZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);