
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
      <div >
        <h1>placeholder</h1> 
        <div style={{display:"flex"}}>
     {/*
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Find By Location</Card.Title>
          <Card.Text>
            Choose a state
          </Card.Text>
          <Link href="/meteorite_map">
              GO
            </Link>
        </Card.Body>
      </Card>
    

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Find By Nation</Card.Title>
          <Card.Text>
            find by nation
          </Card.Text>
          <Link href="/meteorite_map">
              GO
            </Link>
        </Card.Body>
      </Card>
    */}
      <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Find Meteorites by Location
        </Typography>
    
        <Typography variant="body2">
          picture goes here
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link href="/meteorite_map">
        <Button size="small">Learn More</Button>
            </Link>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Find Meteorites by Nation
        </Typography>
    
        <Typography variant="body2">
          picture goes here
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link href="/meteorite_map">
        <Button size="small">Learn More</Button>
            </Link>
      </CardActions>
    </Card>
        </div>

        <div>
            Lorem ipsum text 
        </div>
      </div>
    );
  }

 export default Step2Page
  
  
 
 

 