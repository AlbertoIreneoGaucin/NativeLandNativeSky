'use client'
import { useEventHandlers } from '@react-leaflet/core';
//import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";
import Popup from './Popup';

import { Map, Marker } from "pigeon-maps"
import Typography from '@mui/material/Typography';
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
        <Typography fontFamily={'Times'} align="center">
        <h1>Meteorite Map</h1> 
       
        <Map height={700} defaultCenter={[36.084621, -96.921387]} defaultZoom={5}>
      <Marker width={50} anchor={[36.5, -95.15]} onClick={setOpen}/>
      {isOpen && <Popup 
      content={<>
      <h4>Name: Lost City</h4>
      <p>Coordinates: [36.5° N, 95.15° W]</p>
      <p>Short Description: This was found....</p>
      </>} handleClose={setOpen}
      />}
    </Map>
            {/* Lorem ipsum text  */}
            </Typography>
        </div>
    
    );
  };

 export default MapPage