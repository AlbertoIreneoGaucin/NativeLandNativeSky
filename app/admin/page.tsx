
/*
'use client'
import type { NextPage } from "next";
import { getAuth } from "../../firebase/initFirebase";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Admin: NextPage = () => {
  //initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push("/admin/dashboard");
    
    return <div>Loading...</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <button onClick={signIn}>
        <div className="bg-blue-600 text-white rounded-md p-2 w-48">
          Sign In
        </div>
      </button>
    </div>
  );
};

export default Admin;

*/


 //import React from "react";

 /*
 import type { NextPage } from 'next'
 import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
 import firebase from "../../firebase/initFirebase";
 
 
 
 const SignInScreen:NextPage = () => {
   // Configure FirebaseUI.
 const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/admin/dashboard",
  // We will display GitHub as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};
   return (
     <div
       style={{
         maxWidth: "320px",
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
       }}
     >
       <h1>Pineapple Login</h1>
       <p>Please sign-in:</p>
       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
     </div>
   );
 }
 
 export default SignInScreen;

 

 import type { NextPage } from 'next'


 
 const AdminDashBoard:NextPage = () => {

    return (
      <div >
        <h1>Admin</h1> 
        

     
       

        <div>
            Lorem ipsum text 
        </div>
      </div>
    );
  }

 export default AdminDashBoard

 */
'use client'
 import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
//import { useAuth } from './authContext'
import {auth} from '../../firebase/initFirebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
const Login = () => {
  const router = useRouter()
  //const { user, login } = useAuth()
  //console.log('user is', user, 'login is',login)
  
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const handleLogin = async (e: any) => {
    e.preventDefault()

    //console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/admin/dashboard')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login