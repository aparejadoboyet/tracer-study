import React, { useState } from 'react'
import { auth, googleProvider } from '../../../firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const Auth = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err);
        }
    };

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            
        }
    }

  return (
    <>
        <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />

        <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        
        <button onClick={signIn}>Sign In</button>

        <button onClick={googleSignIn}>SignIn with Google</button>

        <button onClick={logOut}>Logout</button>
        
    </>
  )
}