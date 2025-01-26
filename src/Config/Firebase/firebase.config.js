// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmo_ZDQ9vGWf6vb5O7LPGTJ1hquhs0WYY",
  authDomain: "blood-donation-bb4dd.firebaseapp.com",
  projectId: "blood-donation-bb4dd",
  storageBucket: "blood-donation-bb4dd.firebasestorage.app",
  messagingSenderId: "335845457049",
  appId: "1:335845457049:web:45fb951da58abb2387cc08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
// const firestore = getFirestore(app);

// export { app, firestore };
export { app };
export const db = getFirestore(app);
