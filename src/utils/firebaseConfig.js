import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {getFirestore} from "@firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyACosHwdpFzifjJwmwWrOAe6VxT35icqxk",
  authDomain: "redux-create-react.firebaseapp.com",
  projectId: "redux-create-react",
  storageBucket: "redux-create-react.appspot.com",
  messagingSenderId: "868335462617",
  appId: "1:868335462617:web:234f7c4985e0a1fc97b6c8"
});

export const auth = app.auth();

export const db = getFirestore();
