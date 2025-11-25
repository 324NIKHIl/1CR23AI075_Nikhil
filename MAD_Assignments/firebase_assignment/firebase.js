// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbW7DDvKzohoQvOxXsb1IRhU3TAbNBsYc",
  authDomain: "auth-ceab0.firebaseapp.com",
  projectId: "auth-ceab0",
  storageBucket: "auth-ceab0.firebasestorage.app",
  messagingSenderId: "574570786276",
  appId: "1:574570786276:web:d7052f0b17c7a0d3a0abf1",
  measurementId: "G-C1EPGPYF2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);