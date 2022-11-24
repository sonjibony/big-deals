import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

const  [user,setUser] = useState(null);  
const [loading, setLoading] = useState(true);

//google
const providerLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };


//sign up
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

//sign in
const signIn = (email,password) =>{
    setLoading(true)

    return signInWithEmailAndPassword(auth,email,password);
}

//update user
const updateUser = (userInfo) =>{
    return updateProfile(auth.currentUser, userInfo);
}

//sign out
const logOut = () => {
    setLoading(true)

    return signOut (auth);
}

//observer
useEffect( () =>{
const unsubscribe = onAuthStateChanged(auth, currentUser  =>{
console.log('user observing', currentUser);
setUser(currentUser);
setLoading(false);
 });
 return () => unsubscribe();
}, [])

 
const authInfo ={
    providerLogin,
createUser,
signIn,
updateUser,
logOut,
user,
loading
}

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;