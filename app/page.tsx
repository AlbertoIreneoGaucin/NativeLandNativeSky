
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
import { border, createTheme, ThemeProvider } from '@mui/system';


 const HomePage:NextPage = () => {
    return (
      
      <div >
        <Typography fontFamily={'Times'} align="center">
        <h1 >Meteorites from Native Lands</h1>
        <div style={{display:"flex"}}>

      <Card sx={{ width: '50%' }} 
      style={{border: '10rem'}}
      >
        
      <CardContent>
      <Link href="/choose_location_or_nation">

        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom >
          Find Meteorites in the USA
        </Typography>
    
        <Typography variant="body2" >
        <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
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

    <Card sx={{ width: '50%' }} >
      <CardContent>
        <Link href="/educational_tools">
        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom >
          Educational Resources
        </Typography>
    
        <Typography variant="body2" >
          {/* picture goes here */}
          <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
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
    
        <div>
          <h2 >About This Project</h2>
          <Typography textAlign={'justify'} 
          paragraph={true}
          variant={'body1'}>
            <p>
            Meteorites lend themselves well to place-based education, which connects student learning to their surroundings. Establishing learning as personally relevant increased engagement and strengthens ties within the local and global community. The meteorite story can serve as the foundation for understanding the entire history of the meteorite, including its formation, thus a concrete example of cultural relevance in planetary science and STEM.
          </p>
          <p>
            NaLa will develop free-choice STEM resources, including a website, that focuses on meteorites found on the lands of the three Oklahoma Native American nations participating in Native Earth | Native Sky. In addition, NaLa will produce supplemental resources for NENS that fit their developed curricula model and meet their culturally-relevant requirements.
          </p>
          </Typography>
        </div>
        </Typography> 

        <br/>
      </div>
    );
  }

 export default HomePage
  
  
 
 

 