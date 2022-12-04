'use client'
import { useEventHandlers } from '@react-leaflet/core';
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";

import { Map, Marker } from "pigeon-maps"
import Popup from './(popUp)';
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where, getDoc} from "@firebase/firestore";
import { firestore} from "../../firebase/initFirebase";

//import GoogleMapReact from 'google-map-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';

 //import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
 
 const MapPage:NextPage = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = () =>{
    setIsOpen(!isOpen);
  }
  const [meteorites, setMeteorites] = useState<any[]>([]);
  const newArray:any = []
  const getData = async () =>{
    //const docRef = doc(firestore, "Meteorites");
    //const docSnap =  await getDoc(docRef);
    //console.log('sdfsf',docSnap.data())
    const q = query(
      collection(firestore, "Meteorites"),
      
    );
    
    const productsDocsSnap = await getDocs(q);
    
    productsDocsSnap.forEach((doc) => {
      //console.log(doc.data()); // "doc1", "doc2" and "doc3"
      //setMeteorites( [...meteorites, doc.data()]);
      
      newArray.push(doc.data())
      
      
    });
    //setMeteorites([...meteorites, newArray])
    console.log(newArray)
    let random:any = [{ name:'sdfds', description:'sdsdsdsd'},{ name:'sdfds', description:'sdsdsdsd'} ]
    ///setMeteorites(newArray)
    console.log('dfdd',meteorites)
    }
    return (
      <div >
        <h1 style={{textAlign:'center'}}>Map</h1> 
        <div style={{margin:'auto', height:'75vh', width:'95%', border:'1px solid black'}}>
        <Map  defaultCenter={[35.46, -97.5]} defaultZoom={11}>
          <Marker width={50} anchor={[35, -97.5]} onClick={setOpen} />
         <button onClick={getData}>sdjd</button>
         {meteorites.map((data:any) => (
        <button>Hello, {data.name} from {data.description}!</button>
    ))}
          {isOpen && <Popup 
      content={<>
      <h4>Name: Lost City</h4>
      <p>Coordinates: [36.5° N, 95.15° W]</p>
      <p>Short Description: This was found....</p>
      </>} handleClose={setOpen}
      />}
        </Map>
       </div>
           
        </div>
    
    );
  }

 export default MapPage