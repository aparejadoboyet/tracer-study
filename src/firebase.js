// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7MhN2d_Zsc-uwt_NpROL3-9auM67IJiI",
  authDomain: "tracer-study-f295d.firebaseapp.com",
  databaseURL: "https://tracer-study-f295d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tracer-study-f295d",
  storageBucket: "tracer-study-f295d.appspot.com",
  messagingSenderId: "862798252145",
  appId: "1:862798252145:web:2a3d09480a4ec6c7e773d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dbFirestore = getFirestore(app);

export { db, ref, onValue, push, set };