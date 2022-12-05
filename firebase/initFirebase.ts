

// Modular Firebase v.9 Initialization.


import {initializeApp} from "firebase/app";

//import firebase from 'firebase/compat/app'
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

/*
const firebaseConfig = ({
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
});
*/

const firebaseConfig = {
    apiKey: "AIzaSyDdqBPPuHKo_hQMMyGVGVbaexj3-9nZpLM",
    authDomain: "next-js-todos-app-4782c.firebaseapp.com",
    projectId: "next-js-todos-app-4782c",
    storageBucket: "next-js-todos-app-4782c.appspot.com",
    messagingSenderId: "1087212220506",
    appId: "1:1087212220506:web:96d3ce2cf1ee5f62866863",
    measurementId: "G-C7KQCBJVN2"
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);
//export default firebase
export  {firestore , auth, app, getAuth, storage};