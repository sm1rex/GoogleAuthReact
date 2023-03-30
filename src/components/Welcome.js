import React from 'react';
import GoogleSignIn from "../img/photo_2023-03-26_09-44-27.jpg";
import {auth} from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    return (
        <main className='welcome'>
            <h2>Welcome to React Chat.</h2>
            <p>Sign in with Google to chat.</p>
            <button className="sign-in">
                    <img
                    onClick={googleSignIn}
                    src={GoogleSignIn}
                    type="button"
                    alt="button"
                    />
                </button>
        </main>
    )
}

export default Welcome;