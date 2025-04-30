
import {AuthContext} from "./AuthContext.jsx";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {auth} from "../firebase.config.js";
import {useEffect, useState} from "react";

const googleAuthProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signIngoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         console.log('sign in', user)
//
//     }
//     else {
//         console.log('sign out')
//
//     }
// })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, userr => {
            console.log('inside useeffect', userr)
            setUser(userr)
            setLoading(false)

        })

        return () =>  unSubscribe()
    }, []);

const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
}

const userInfo = {
    createUser,
    signIn,
    signIngoogle,
    user,
    signOutUser,
    loading
}
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;