import { useState, useEffect, useContext, createContext } from "react";
import { auth } from '../service/getFirebase';

const authenticationContext = createContext();

export const useAuth = () => useContext(authenticationContext);


export const AuthenticationProvider = (props) => {

    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(()=> {
    auth.onAuthStateChanged((user) => 
        setCurrentUser(user)
    )}, []);

    const singup = (email, password) => {   
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () =>{
        return auth.signOut();
    }

    const value = { singup, login, logout, currentUser, setCurrentUser};

    return(
        <authenticationContext.Provider value={value}>
            {props.children}
        </authenticationContext.Provider>
    )
}