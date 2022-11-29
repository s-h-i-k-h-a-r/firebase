import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVtAlQRNNzZq5gkqdykUaVr6wSOdT4MWI",
  authDomain: "antibug-720e1.firebaseapp.com",
  projectId: "antibug-720e1",
  storageBucket: "antibug-720e1.appspot.com",
  messagingSenderId: "1055048748195",
  appId: "1:1055048748195:web:d580c4972e7d8c2877c316",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore();
export default { app, firestore };
