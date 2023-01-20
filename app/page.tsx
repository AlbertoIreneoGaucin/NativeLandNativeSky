
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
 import CardMedia from '@mui/material/CardMedia';

import  {Paper}  from '@mui/material';
 const HomePage = () => {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Meteorites from native lands</h1> 
        <div style={{display:"flex", justifyContent:'space-evenly '}}>

        

        <Card sx={{ minWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image="/earth.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Find Meteorites in the USA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Find and learn about meteorites in the USA
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link href="/choose_location_or_nation"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image="/bookimg.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Educational tools
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For teachers, tools for the classroom
        </Typography>
      </CardContent>
      <CardActions>
        
      <Link href="/educational_tools"><Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>

    
        </div>
        <div style={{display:"flex", justifyContent:'space-evenly ', margin:"10vh"}}>
        <Box >
        <Paper elevation={12} >
        <Typography variant="h5" component="div">
          About the Project
        </Typography>
        
<Typography variant="body2" color="text.secondary">
Meteorites lend themselves well to place-based education, which connects student learning to their surroundings. Establishing learning as personally relevant increased engagement and strengthens ties within the local and global community. The meteorite story can serve as the foundation for understanding the entire history of the meteorite, including its formation, thus a concrete example of cultural relevance in planetary science and STEM.
NaLa will develop free-choice STEM resources, including a website, that focuses on meteorites found on the lands of the three Oklahoma Native American nations participating in Native Earth | Native Sky. In addition, NaLa will produce supplemental resources for NENS that fit their developed curricula model and meet their culturally-relevant requirements.
</Typography>
<Typography variant="body2" color="text.secondary">
        The NENS SciAct program at OSU is creating culturally-relevant curricula that interlink Native American stories and language with STEM principles. This allows students to better identify with the concepts taught, which increases the understanding and interest in STEM. However, while schools are traditionally considered the primary centers of learning, more than 50% of people attribute their scientific knowledge to free-choice learning experiences [3].
        	Over the 12 months of SCoPE funding, a website will be developed that utilizes the  culturally-relevant curricula insights from NENS to educate free-choice learners on meteorites that fell on the Native Lands of the three tribes involved in the NENS project. Long term, this goal will be expanded to include the Native Lands of more tribes as well as more free-choice learning mediums, including publications and a permanent exhibit at the Monnig Meteorite Gallery on the campus of Texas Christian University.
        </Typography>
        

       </Paper>
      </Box>
        </div>
        
       
      </div>
    );
  }

 export default HomePage
  
  
 
 

 