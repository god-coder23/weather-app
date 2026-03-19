// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbkBqoaC-05vsPd8eejaw1p-fxy7ePq14",
  authDomain: "weather-app-2a0af.firebaseapp.com",
  projectId: "weather-app-2a0af",
  storageBucket: "weather-app-2a0af.firebasestorage.app",
  messagingSenderId: "118487049528",
  appId: "1:118487049528:web:1cc50f0cb6a41819830dcd",
  measurementId: "G-LEN9ELDLW1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);