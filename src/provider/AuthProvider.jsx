import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
const axiosPublic = useAxiosPublic()
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
            setLoading(false);
            const userInfo={
                email:currentUser?.email
            }
            
            axiosPublic.get(`/jwt`,{userInfo})
            .then(res=> {
                
                if(res.data.token){
                   
                    localStorage.setItem('access-token',res.data.token)  }})
            
          
           

            setTimeout(async() => {
              const {data} = await axiosPublic.post('/users',{
                    name:currentUser?.displayName,
                    email:currentUser?.email,
                })
              
            }, 1000);
        } else {
            setUser(null)
            localStorage.removeItem('access-token')
        }
        
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