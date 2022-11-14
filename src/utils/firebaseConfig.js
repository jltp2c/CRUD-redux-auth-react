import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-5c28d.firebaseapp.com",
  projectId: "react-firebase-redux-5c28d",
  storageBucket: "react-firebase-redux-5c28d.appspot.com",
  messagingSenderId: "434011965193",
  appId: "1:434011965193:web:1d9d787dd4f82a16f1f5d8"
})

export const auth = app.auth()
export const db = getFirestore();
export default app;