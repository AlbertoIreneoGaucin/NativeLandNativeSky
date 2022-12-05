'use client'
import { useEventHandlers } from '@react-leaflet/core';
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";

import { Map, Marker } from "pigeon-maps"
import Popup from './(popUp)';
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where, getDoc} from "@firebase/firestore";
import { firestore} from "../../firebase/initFirebase";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
 import Button from '@mui/material/Button';
//import GoogleMapReact from 'google-map-react';
//import { GoogleMap, LoadScript } from '@react-google-maps/api';

 //import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 
 
 const MapPage:NextPage = () => {
    
  const [isOpen, setIsOpen] = useState(false);
  
  const [meteorites, setMeteorites] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [description, setDescription] = useState('');

  const setOpen = (e:any) =>{
    setIsOpen(!isOpen);
    setName(e.name)
    setDescription(e.description)
    setPicture(e.picture)
  }
  //const [meteorites,setEduTools] = useState<any[]>([]);
  let newArray:any = []

  const getMeteorites = async () => {
    //const meteoritesQuery = query(meteoritesCollection,where('show','==',true),limit(10));
    //const querySnapshot = await getDocs(meteoritesQuery);
    //const result: QueryDocumentSnapshot<DocumentData>[] = [];
    //querySnapshot.forEach((snapshot) => {
    //  result.push(snapshot);
    //})
    //setEduTools(result);
    const q = query(
      collection(firestore, "Meteorites"),
      
    );
    const productsDocsSnap = await getDocs(q);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    productsDocsSnap.forEach((snapshot) => {
       result.push(snapshot);
    })
    //setEduTools(result);
    console.log(meteorites)
  };
  React.useEffect(() => {
    getData();
  }, []);
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
      //setMeteorites(  [...meteorites, doc.data()]);
      
      console.log(doc.data())
      
      newArray.push(doc.data())
      let newData = doc.data()
      setMeteorites(meteorites => [...meteorites, newData]);
      console.log('dsfsdf', meteorites)
      
      
    });
    //setMeteorites([...meteorites, newArray])
    console.log(newArray)
    const  newList:any = [{ name:'sdfds', description:'sdsdsdsd'},{ name:'sdfds', description:'sdsdsdsd'} ]
    ///setMeteorites(newArray)
    //setMeteorites([...meteorites, newArray])
    console.log('dfdd',meteorites)
    //random.map((data:any)=>{ console.log(data.name)})
    }
    const handleClose = () => {
      setIsOpen(!isOpen);
    };
    const learnMore = () => {
      window.open('https://www.metbase.org', '_blank', 'noopener,noreferrer');
  
    };
    return (
      <div >
        <h1 style={{textAlign:'center'}}>Map of Meteorites</h1>
        {/*
            meteorites.map((data:any) => (
              <div>
              <p>{data.name}</p>
              <p>{data.coordinates.latitude}</p><p>{ data.coordinates.longitude}</p></div>
            ))
            */
        }
        <div style={{margin:'auto', height:'75vh', width:'95%', border:'1px solid black'}}>
        <Map  defaultCenter={[35.46, -97.5]} defaultZoom={11}>
          
        
         {
            meteorites.map((data:any) => (
              
              <Marker width={50} anchor={[data.coordinates.latitude, data.coordinates.longitude]} onClick={() => setOpen(data)} />
              
      
            ))
        }
          {/*isOpen && <Popup 
      content={<>
      <h4>Name: Lost City</h4>
      <p>Coordinates: [36.5° N, 95.15° W]</p>
      <p>Short Description: This was found....</p>
      </>} handleClose={setOpen} info={meteorites}
      />*/
    }
      {
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Card sx={{ minWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={picture}
        alt="meteorite"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        
      
      </CardActions>
    </Card>
        </DialogContent>
        <DialogActions>
            
          <Button  onClick={learnMore}>
            Learn More
          </Button>
        </DialogActions>
      </BootstrapDialog>
      }
        </Map>
       </div>
           
        </div>
    
    );
  }

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

 export default MapPage