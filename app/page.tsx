
'use client';
import Link from 'next/link'
import type { NextPage } from 'next'
 //import Button from 'react-bootstrap/Button';
 //import Card from 'react-bootstrap/Card';
 //import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import * as React from 'react';
 import Box from '@mui/material/Box';
 import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import Button from '@mui/material/Button';
 import Typography from '@mui/material/Typography';


 const HomePage:NextPage = () => {
    return (
      <div >
        <h1>Meteorites from native lands</h1> 
        <div style={{display:"flex"}}>

        

      <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Find Meteorites in the USA
        </Typography>
    
        <Typography variant="body2">
          picture goes here
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link href="/choose_location_or_nation">
        <Button size="small">Learn More</Button>
            </Link>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Educational Resources
        </Typography>
    
        <Typography variant="body2">
          
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Link href="/educational_tools">
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

 export default HomePage
  
  
 
 

 