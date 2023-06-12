// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, push, set, get } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNmFkMll2o5ISRzDLwhsvgt4JFy8wm2OU",
  authDomain: "tracer-study-group12.firebaseapp.com",
  projectId: "tracer-study-group12",
  storageBucket: "tracer-study-group12.appspot.com",
  messagingSenderId: "656185530188",
  appId: "1:656185530188:web:26d857307fe0549731e1e9",
  measurementId: "G-WR4PPCM1Z3",
  databaseURL: "https://tracer-study-group12-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dbFirestore = getFirestore(app);

const storage = getStorage(app);

export { db, storage, ref, onValue, push, set, get };