import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading, setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const SingIn = (email,password) =>{
      return  signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
     useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setLoading(false);
        setUser(currentUser)
        if(currentUser){
            axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
              
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
        setLoading(false);
            console.log(currentUser);
        })
        return () => {
            return unsubscribe();
        }
     },[])


    const authInfo = {
        user, 
        createUser,
        SingIn,
        googleSignIn,
        logOut,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;