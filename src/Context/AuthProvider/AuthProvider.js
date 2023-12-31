import React,{ createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';



export const authContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password) 
        .catch((err) => {
            console.error(err);
            alert("Invalid Email and Password. Please Registration/SignUp for Logins.");
        });   
    } 

    const logOut =() =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            return unsubscribe();
        }
    },[])
    

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;