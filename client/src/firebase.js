// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwmur8hKhUWaCtF_bAJyEH-eRH8mhlroo",
  authDomain: "hack-indore.firebaseapp.com",
  projectId: "hack-indore",
  storageBucket: "hack-indore.appspot.com",
  messagingSenderId: "450863286149",
  appId: "1:450863286149:web:1a5ca45d2d7a4babd526ec",
  measurementId: "G-0GF5CJVK1F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);