// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-531c8.firebaseapp.com",
  projectId: "mern-blog-531c8",
  storageBucket: "mern-blog-531c8.appspot.com",
  messagingSenderId: "644711131563",
  appId: "1:644711131563:web:766289b65ebf8358c74aee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);