// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK0Wmn5YmTMFpMHuzLE3qbZc_aVBnIHQg",
  authDomain: "react-chat-94c68.firebaseapp.com",
  projectId: "react-chat-94c68",
  storageBucket: "react-chat-94c68.appspot.com",
  messagingSenderId: "39628209177",
  appId: "1:39628209177:web:5c7b830229d188d442be88"
};
// ENV - DOBAVITB!

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize f auth and get firestore
export const auth = getAuth(app);
export const db = getFirestore(app);