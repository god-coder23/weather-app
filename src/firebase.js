// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbkBqoaC-05vsPd8eejaw1p-fxy7ePq14",
  authDomain: "weather-app-2a0af.firebaseapp.com",
  projectId: "weather-app-2a0af",
  storageBucket: "weather-app-2a0af.firebasestorage.app",
  messagingSenderId: "118487049528",
  appId: "1:118487049528:web:1cc50f0cb6a41819830dcd",
  measurementId: "G-LEN9ELDLW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)