import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { AuthContext } from "../context/authProvider";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

export default function useAuth () {
    const { auth, db, isLoggedin, setIsloggedin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [currentuseremail, setCurrentuseremail] = useState('');

    const [currentUser, setCurrentuser] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const redirect = useNavigate()

    const sing_up = async () => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        const userid = user.uid; 
        
        await addDoc(collection(db, 'users'), {
            _id : userid,
            username,
            email
        });
        if(user.uid.length !== 0) {
            toast.success('Account')
            setTimeout(() => toast.loading('Redirecting...'));
            setTimeout(() => redirect('/explore'), 3000);
            
        }         
    }

    const sign_out = async () =>{
        try {
            signOut(auth)
            .then(() => {
                redirect('/')
                setIsloggedin(false)
                toast.success('logged out');
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    const sign_in = async () => {
        try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        if(credentials.user.uid.length !== 0) {
            setIsloggedin(true);
            toast.success('logged in and redirecting')
            setTimeout(() => {
                redirect('/explore')
            }, 2000)
        }
        } catch (error) {
            toast.error('wrong credentials')
        }
        
    }

    const forgot_password = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success('Password reset email sent! Check your inbox');
        } catch (error) {
            console.log(error.message)
        }
     }


    return { sing_up, setEmail, setPassword, setUsername, sign_out, sign_in, forgot_password}
}