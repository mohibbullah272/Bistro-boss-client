import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const provider = new GoogleAuthProvider()
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
    return signOut(auth)
}
const updateUserProfile=(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name, photoURL:photo
    })
}
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser?.email) {
            setUser(currentUser);
        } else {
            setUser(null); 
        }
        setLoading(false); 
    });

    return () => {
        unsubscribe(); 
    };
}, []);

const authInfo={
user,
loading,
logOut,
createUser,
googleLogin,
updateUserProfile,
login,
setUser
}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;