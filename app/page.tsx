
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
 const HomePage:NextPage = () => {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Meteorites from native lands</h1> 
        <div style={{display:"flex", justifyContent:'space-evenly '}}>

        

        <Card sx={{ minWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://geology.com/world/usa-physical.jpg"
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
        image="https://www.jamcampus.com/wp-content/uploads/2018/12/online-teaching-tools-jamcampus-education.jpg"
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
        <Paper elevation={24} >
        <Typography variant="h5" component="div">
          About Us
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The NENS SciAct program at OSU is creating culturally-relevant curricula that interlink Native American stories and language with STEM principles. This allows students to better identify with the concepts taught, which increases the understanding and interest in STEM. However, while schools are traditionally considered the primary centers of learning, more than 50% of people attribute their scientific knowledge to free-choice learning experiences [3].
        	Over the 12 months of SCoPE funding, a website will be developed that utilizes the  culturally-relevant curricula insights from NENS to educate free-choice learners on meteorites that fell on the Native Lands of the three tribes involved in the NENS project. Long term, this goal will be expanded to include the Native Lands of more tribes as well as more free-choice learning mediums, including publications and a permanent exhibit at the Monnig Meteorite Gallery on the campus of Texas Christian University.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Most of us do not think about the land upon which we live and work; whereas, Indigenous communities have a deep-seated understanding of the importance and sacredness that their land has in their daily lives (native lands.ca); they have a deep sense of place. Planetary science “is a grand human enterprise that seeks to discover the nature and origin of the celestial bodies among which we live…” (Ref nasa doc). In other words, planetary science is rooted in a sense of place; it provides the context for all planetary science research. Meteorites are unique as they have two places: the place from which they came, and the place where they fell. All meteorites found within North America fell on Native Lands.
	The primary objective of Native Lands (NaLa) is to amplify the work of the Native Earth | Native Sky (NENS) program by recognizing the critical importance of free-choice learning in STEM education and providing a different lens through which STEM can be made culturally-relevant for students in Native American nations. This will be achieved in two major ways. Firstly, NaLa will add free-choice learning (i.e. beyond a traditional classroom) as a mechanism to bring Native American cultural perspectives into STEM education, both for the Native and non-Native American populace. Secondly, a focus on meteorites found on the lands of the three Oklahoma Native American tribes participating in NENS provides a concrete example of the cultural relevance of planetary science and STEM, utilizing concepts that are deeply rooted in a sense of place.
        </Typography>
       </Paper>
      </Box>
        </div>
        
       
      </div>
    );
  }

 export default HomePage
  
  
 
 

 