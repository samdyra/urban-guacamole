import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();

export const firebaseConfig = {
  apiKey: "AIzaSyAAqXhaJfKtz18W5622ygZLPgY3MYxJhYQ",
  authDomain: "geolokauhi.firebaseapp.com",
  projectId: "geolokauhi",
  storageBucket: "geolokauhi.appspot.com",
  messagingSenderId: "986807203427",
  appId: "1:986807203427:web:448b811f25db272bd9ea56",
  measurementId: "G-6770DKGYDK"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
