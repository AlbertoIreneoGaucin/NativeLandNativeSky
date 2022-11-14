'use client'
import { useEventHandlers } from '@react-leaflet/core';
//import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";

import { Map, Marker } from "pigeon-maps"
//import GoogleMapReact from 'google-map-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';

 //import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
 
 const MapPage:NextPage = () => {
    
  
    return (
      <div >
        <h1>Map</h1> 
       
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
            Lorem ipsum text 
        </div>
    
    );
  }

 export default MapPage