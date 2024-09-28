import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Correct Firestore import
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);  // Pass the app instance to get Firestore
const fileUpload = getStorage(app);

export { auth, db, fileUpload };
