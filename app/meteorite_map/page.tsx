'use client'
import { useEventHandlers } from '@react-leaflet/core';
//import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";
import Popup from './Popup';
import { Dialog, Popover } from '@mui/material';
import { Map, Marker } from "pigeon-maps"
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


//import GoogleMapReact from 'google-map-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';

 //import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 


 const MapPage:NextPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // const setOpen =() =>{
    
  //   setIsOpen(!isOpen);
  // }
const getMeteorites1 = ([
  {id:'1', title: 'Lost City', Geolocation:'36.5° N, 95.15° W', des: 'This was found....'},
  {id:'2', title: 'Tishomingo', Geolocation:'36.5° N, 95.15° W', des: 'This was found....'}
])


const handleClickOpen1 = () => {
  setIsOpen1(true);
};

const handleClose1 = () => {
  setIsOpen1(false);
};

const handleClickOpen2 = () => {
  setIsOpen2(true);
};

const handleClose2 = () => {
  setIsOpen2(false);
};

const handleClickOpen3 = () => {
  setIsOpen3(true);
};

const handleClose3 = () => {
  setIsOpen3(false);
};



    return (
      <div >
        <Typography align="center">
        <h1>Meteorite Map</h1> 
       
        <Map height={700} defaultCenter={[36.084621, -96.921387]} defaultZoom={5}>
      <Marker  width={50} anchor={[36.5, -95.15]} onClick={handleClickOpen1} color={' #4a4e69'}/>
      <Dialog
        open={isOpen1}
        onClose={handleClose1}
      >
        <DialogContent>
          <DialogContentText>
          <h4>Name: Lost City</h4>
          <p>Coordinates: [36.5° N, 95.15° W]</p>
          <p>Short Description: This was found....</p>
          </DialogContentText>
          </DialogContent>
      </Dialog>


    <Marker width={50} anchor={[34.25, -96.68]} onClick={handleClickOpen2} color={'#000000'}/>

    <Dialog
        open={isOpen2}
        onClose={handleClose2}
      >
        <DialogContent>
          <DialogContentText>
          <h4>Name: Tishomingo</h4>
          <p>Coordinates: [36.5° N, 95.15° W]</p>
          <p>Short Description: This was found....</p>
          </DialogContentText>
          </DialogContent>
      </Dialog>

      <Marker width={50} anchor={[34.31, -96.15]} onClick={handleClickOpen3} color={'#14213d'}/>
      <Dialog
        open={isOpen3}
        onClose={handleClose3}
      >
        <DialogContent>
          <DialogContentText>
          <h4>Name: Akota</h4>
      <p>Coordinates: [34.31° N, 96.15° W]</p>
      <p>Short Description: This was found....</p>
          </DialogContentText>
          </DialogContent>
      </Dialog>

      {/* {isOpen && <Popup 
      content={<>
      <h4>Name: Tishomingo</h4>
      <p>Coordinates: [34.25° N, 96.68° W]</p>
      <p>Short Description: This was found....</p>
      </>} handleClose={setOpen}
      />} */}

      {/* <Marker width={50} anchor={[34.31, -96.15]} onClick={setOpen}/>
      {isOpen && <Popup 
      content={<>
      <h4>Name: Akota</h4>
      <p>Coordinates: [34.31° N, 96.15° W]</p>
      <p>Short Description: This was found....</p>
      </>} handleClose={setOpen}
      />} */}

      {/* (34° 19'N, 96° 9'W)
 */}
    </Map>
            {/* Lorem ipsum text  */}
            </Typography>
        </div>
    
    );
  };

 export default MapPage