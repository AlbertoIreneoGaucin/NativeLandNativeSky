
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

            {/*
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Meteorites from Native Lands USA</Card.Title>
          <Card.Text>
            See some meteorites from the USA
          </Card.Text>
          <Link href="/choose_location_or_nation">
              GO
            </Link>
        </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Educational Tools</Card.Title>
          <Card.Text>
            See and download educational tools
          </Card.Text>
          <Link href="/educational_tools">
              GO
            </Link>
        </Card.Body>
      </Card>
 */}

      <Card sx={{ minWidth: 500 }}>
      <CardContent>
      <Link href="/choose_location_or_nation">
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Find Meteorites in the USA
        </Typography>
    
        <Typography variant="body2">
        <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="A Map."
        src="https://i.etsystatic.com/12752990/r/il/a8b469/2399351139/il_fullxfull.2399351139_qzjq.jpg"
      />
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
        </Link>
      </CardContent>
      <CardActions>
        
        
        {/* <Button size="small">Learn More</Button> */}
            
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Link href="/educational_tools">
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
          Educational Resources
        </Typography>
    
        <Typography variant="body2">
          {/* picture goes here */}
          <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Books."
        src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200"
      />
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
        </Link>
      </CardContent>
      <CardActions>
        
        
        {/* <Button size="small">Learn More</Button> */}
            
      </CardActions>
    </Card>
        </div>

        {/* <div>
            Lorem ipsum text 
        </div> */}
      </div>
    );
  }

 export default HomePage
  
  
 
 

 