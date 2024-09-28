import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Correct Firestore import
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlCjVjIoy_VvIdZnb-tq-P9t9_kvswp6A",
    authDomain: "firbase9-f2585.firebaseapp.com",
    projectId: "firbase9-f2585",
    storageBucket: "firbase9-f2585.appspot.com",
    messagingSenderId: "744545554038",
    appId: "1:744545554038:web:1c0fb2f29e5cd99f0e5957"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);  // Pass the app instance to get Firestore
const fileUpload = getStorage(app);

export { auth, db, fileUpload };
