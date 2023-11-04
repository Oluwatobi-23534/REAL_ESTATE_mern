// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-b4ac2.firebaseapp.com",
  projectId: "realestate-b4ac2",
  storageBucket: "realestate-b4ac2.appspot.com",
  messagingSenderId: "785034866816",
  appId: "1:785034866816:web:00c6813930dce93c15b665",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
