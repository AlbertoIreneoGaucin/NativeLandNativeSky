'use client'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation';

import {auth} from '../../firebase/initFirebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import React, { useState } from "react";
import { Button, TextField, Card, CardContent, CardActions, CardHeader,  } from '@mui/material'
import { GeoPoint } from "firebase/firestore";
import { firestore} from "../../firebase/initFirebase";
import {
    addDoc,
    collection,
    getFirestore,
  } from "firebase/firestore";
  import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'
interface NewMeteoriteType {
    coordinates?: GeoPoint;
    name?:string;
    description?: string;
    visible?:string;
    picture?:string;
  }
  
  interface AddMeteoriteType {
    coordinates?: GeoPoint;
    name?:string;
    description?: string;
    visible?:string;
    picture?:string;
  }

 const AdminDashBoard = () => {
    const router = useRouter()
   
    const[user, loading] = useAuthState(auth)
    const logout = async () => {
        //setUser(null)
        await signOut(auth)
        router.push('/')
      }

    const [coordinates, setCoordinates] = useState<GeoPoint>(new GeoPoint(35, Math.floor(Math.random() * (-99 - -94 + 1)) + -94));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [picture, setPicture] = useState("https://www.nhm.ac.uk/content/dam/nhmwww/discover/three-types-of-meteorites/iron-meteorite-dark-fusion-crust-two-column.jpg.thumb.768.768.jpg");
  //convert lat and long to number
  //and then set coordinates to (lat, long)
  const addNewMeteorite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCoordinates(new GeoPoint(parseInt(latitude), parseInt(longitude)))
    console.log(coordinates)
    addMeteorite({
        coordinates,
        
        name,
        description,
        visible,
        picture
    });
    //console.log("successfully added a new Meteorite");
    alert("successfully added a new Meteorite")
  };
  const meteoriteCollection = collection(firestore, "Meteorites");
  
  // ADD A NEW DOCUMENT TO YOUR COLLECTION
   const addMeteorite = async (meteoriteData: AddMeteoriteType) => {
    const newMeteorite = await addDoc(meteoriteCollection, { ...meteoriteData });
    console.log(`The new meteorite was created at ${newMeteorite.path}`);
  };

    if(loading){
        return <div>Loading...</div>
    }
    console.log(user)
    if(!user){
        router.push('/')
        return <div>Please sign in to continue </div>
    }
    return (
        <div className="create" style={{
            width: '50%',
            margin: 'auto',
            marginTop: '10%',
            textAlign :'center',
            
          }}>
        
        <form onSubmit={(e) => addNewMeteorite(e)} style={{
     // width: '50%',
      margin: 'auto',
      
      display: 'inline-block'
      
    }}>
        <Card >
      <CardHeader  title="Add a new Meteorite: " />
      <CardContent>
        <div>
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            fullWidth
            id="lat"
            type="latitude"
            label="latitude"
            
            margin="normal"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            
          />
          <TextField
           
            fullWidth
            id="lat"
            type="longitude"
            label="longitude"
            
            margin="normal"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            
          />
          <TextField
           
           fullWidth
           id="name"
           type="name"
           label="name"
           
           margin="normal"
           value={name}
           onChange={(e) => setName(e.target.value)}
           
         />
         <TextField
           
           fullWidth
           id="desc"
           type="desc"
           label="description"
           
           margin="normal"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
           
         />
         <label>Visible</label>
          <select value={visible} onChange={(e) => setVisible(e.target.value)}>
            <option value=""> </option>
            <option value="True">True</option>
            <option value="False">False</option>
            </select>
        
        </div>
      </CardContent>
      <CardActions>
      
        </CardActions>
      </Card>

{/*
          <label>Meteorite latitude:</label>
          <input
            type="text"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <label>Meteorite longitude:</label>
          <input
            type="text"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <label>Meteorite name:</label>
          <textarea
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></textarea>
          
          <label>Meteorite description:</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
  
          <label>Visible</label>
          <select value={visible} onChange={(e) => setVisible(e.target.value)}>
            <option value=""> </option>
            <option value="True">True</option>
            <option value="False">False</option>
            </select>
  
          <button >Add Meteorite</button>
          */
}
    <button >Add Meteorite</button>
        </form>
        <button onClick={logout}>Sign Out</button>
      </div>
    );
  }

 export default AdminDashBoard

 

