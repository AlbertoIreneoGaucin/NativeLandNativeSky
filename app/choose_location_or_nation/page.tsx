
'use client'
import Link from 'next/link'
import type { NextPage } from 'next'
 
 
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import * as React from 'react';
 import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
 
 
 const Step2Page:NextPage = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return (
      <div>
         <Typography align="center">
      <div >
        <h1>Meteorites From Native Lands</h1> 
        <div style={{display:"flex"}}>
    
      <Card sx={{ minWidth: '50%' }}>
      {/* <CardMedia image="https://images.ctfassets.net/cnu0m8re1exe/1rGhxqBLxILKk2D4SzxQ2N/c84142594e0249cee9ec6b172b487a93/shutterstock_296869262.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 }
          }}> */}
      <CardContent>
        
          <br/>
        <Link href="/meteorite_map">
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom >
        
          Find Meteorites by Location
        </Typography>
     
        <Typography variant="body2">
          <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="Meteorite Falling"
        src="https://images.ctfassets.net/cnu0m8re1exe/1rGhxqBLxILKk2D4SzxQ2N/c84142594e0249cee9ec6b172b487a93/shutterstock_296869262.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill"
      />
          <br />

        </Typography>
        </Link>
        
      </CardContent>
      {/* </CardMedia> */}
      <CardActions>
      </CardActions>
      
    </Card>

    <Card sx={{ minWidth: '50%' }}>
      <CardContent>
      <Link href="/meteorite_map">
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Find Meteorites by Nation
        </Typography>
    
        <Typography variant="body2">
          {/* picture goes here */}
          <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="A Map"
        src="https://i.etsystatic.com/12752990/r/il/a8b469/2399351139/il_fullxfull.2399351139_qzjq.jpg"
      />
          <br />

        </Typography>
        </Link>
      </CardContent>
      <CardActions>
            
      </CardActions>
    </Card>
        </div>
      </div>
      </Typography>
      </div>
    );
  }

 export default Step2Page
  
  
 
 

 