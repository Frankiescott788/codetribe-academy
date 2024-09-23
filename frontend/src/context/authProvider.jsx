import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getFirestore as Database, getDocs, query, where } from 'firebase/firestore'
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = Database();
  const [currentuser, setCurrentuser] = useState([]);
  const [isLoggedin, setIsloggedin] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const getCurrentUser = async () => {
    onAuthStateChanged(auth, async user => {
      try {
        if (user) {
          const queryuser = query(collection(db, "users"), where("email", "==", user.email));
          const queried_user = await getDocs(queryuser);
          queried_user.forEach(user => {
            setCurrentuser(user.data());
            setIsloggedin(true)
          })
  
        } else {
          setIsloggedin(false)
        }
      } catch (error) {
        
      }
      finally {
        setIsLoading(false)
      }
    })
  }
  
  useEffect(() => {
    getCurrentUser()
  }, [])


  return (
    <AuthContext.Provider value={{ auth, db, currentuser, isLoggedin, setIsloggedin, isLoading}}>
      {children}
    </AuthContext.Provider>
  )
}