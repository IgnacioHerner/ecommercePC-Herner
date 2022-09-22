
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAeZyGwV6TvEukUJFDVx8xRMJGjxJYJ5Ww",
  authDomain: "ecommerce-hernerignacio.firebaseapp.com",
  projectId: "ecommerce-hernerignacio",
  storageBucket: "ecommerce-hernerignacio.appspot.com",
  messagingSenderId: "460103403634",
  appId: "1:460103403634:web:8d6842101616752276daeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// eslint-disable-next-line