import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgqW-RRLAF62SEYc2rjqq2wmYhVwtBfKU",
  authDomain: "campusconnect-e49ef.firebaseapp.com",
  projectId: "campusconnect-e49ef",
  storageBucket: "campusconnect-e49ef.appspot.com",
  messagingSenderId: "147866143951",
  appId: "1:147866143951:web:a48acf5d3dc3b695607bba",
  measurementId: "G-HNBVLL5X0Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
