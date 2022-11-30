



 
'use client'
 import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {  Form } from 'react-bootstrap'
import { Button, TextField, Card, CardContent, CardActions, CardHeader,  } from '@mui/material'


//import { useAuth } from './authContext'
import {auth} from '../../firebase/initFirebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { NextPage } from 'next'







const LoginPage:NextPage = () => {
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
  const isError = false

  return (
    <div style={{
      width: '40%',
      margin: 'auto',
      textAlign :'center',
      
    }}>
    <form  style={{
      width: '40%',
      margin: 'auto',
      marginTop: '25%',
      display: 'inline-block'
      
    }}noValidate autoComplete="off">
    <Card >
      <CardHeader  title="Admin Sign in, no signup available " />
      <CardContent>
        <div>
          <TextField
            error={isError}
            fullWidth
            id="username"
            type="email"
            label="Email"
            placeholder="Email"
            margin="normal"
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })}
            
          />
          <TextField
            error={isError}
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })}
            
          />
        </div>
      </CardContent>
      <CardActions>
      <Button
      style={{
        width: '40%',
        margin: 'auto',
        
      }}
            variant="contained"
            size="large"
            color="primary"
            
            onClick={handleLogin}
            disabled={false}>
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
      
    
     
           </div> 
          
  )
}

export default LoginPage