// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgqW-RRLAF62SEYc2rjqq2wmYhVwtBfKU",
  authDomain: "campusconnect-e49ef.firebaseapp.com",
  projectId: "campusconnect-e49ef",
  storageBucket: "campusconnect-e49ef.firebasestorage.app",
  messagingSenderId: "147866143951",
  appId: "1:147866143951:web:a48acf5d3dc3b695607bba",
  measurementId: "G-HNBVLL5X0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
