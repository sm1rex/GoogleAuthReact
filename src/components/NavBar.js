import React, {useState} from "react";
import GoogleSignin from "../img/photo_2023-03-26_09-44-27.jpg";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";


const NavBar = () => {
    // Variant 1
    // const [user, setUser] = useState(false);
    
    // const GoogleSignIn = () => {
    //     setUser(true);
    // };

    // const signOut = () => {
    //     setUser(false);
    // };

    //Variant 2
    const [user] = useAuthState(auth);
    
    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const signOut = () => {
        auth.signOut();
    };

    return(
        <nav className="nav-bar">
            <h1>React Chat</h1>
            {user ? (
                <button onClick={signOut} className="sign-out" type="button">
                    Sign Out
                </button>
            ) : (
                <button className="sign-in">
                    <img
                    onClick={GoogleSignIn}
                    src={GoogleSignin}
                    type="button"
                    alt="button"
                    />
                </button>
            )}
        </nav>
    )
}

export default NavBar;