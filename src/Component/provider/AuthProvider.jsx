import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';




export const AuthContext = createContext();



const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , eamil , password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    const handleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error => console.log(error))
    }

useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser);
        console.log('current user', currentUser);
        setLoading(false)
    });
    return ()=>{
        return unsubscribe();
    }

}, [])


const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    handleGoogleSignIn,
    handleSignOut

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;