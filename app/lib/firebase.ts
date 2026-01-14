import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXmORGXyHbN5s5C9YmSsyBbdMIjMx98D8",
  authDomain: "khmerlearning-y4s1.firebaseapp.com",
  projectId: "khmerlearning-y4s1",
  storageBucket: "khmerlearning-y4s1.firebasestorage.app",
  messagingSenderId: "721153410908",
  appId: "1:721153410908:web:8775e9a26db19144426399"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);