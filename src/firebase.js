import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-tutorial-33d5f.firebaseapp.com",
  projectId: "admin-tutorial-33d5f",
  storageBucket: "admin-tutorial-33d5f.appspot.com",
  messagingSenderId: "233235130145",
  appId: "1:233235130145:web:bc6b42ec7099634f3e8060",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
