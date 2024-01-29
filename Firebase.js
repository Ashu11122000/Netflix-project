// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1Bzikiyn4q9aZ4UEKuPAidcF58HQ6WY",
  authDomain: "netflix-8a322.firebaseapp.com",
  projectId: "netflix-8a322",
  storageBucket: "netflix-8a322.appspot.com",
  messagingSenderId: "447885576653",
  appId: "1:447885576653:web:76d9cdf7658dbcb7d79c84",
  measurementId: "G-DRFJNFX52D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
