'use client'
import { useEventHandlers } from '@react-leaflet/core';
//import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";
import Popup from './Popup';

import { Map, Marker } from "pigeon-maps"
//import GoogleMapReact from 'google-map-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';

 //import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


 const MapPage:NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = () =>{
    setIsOpen(!isOpen);
  }
  
    return (
      <div >
        <h1>Map</h1> 
       
        <Map height={300} defaultCenter={[32.7555, -97.3308]} defaultZoom={11}>
      <Marker width={50} anchor={[32.7555, -97.3308]} onClick={setOpen}/>
      {isOpen && <Popup 
      content={<><p>Coordinates: [32.7555° N, 97.3308° W]</p></>} handleClose={setOpen}
      />}
    </Map>
            Lorem ipsum text 
        </div>
    
    );
  };

 export default MapPage