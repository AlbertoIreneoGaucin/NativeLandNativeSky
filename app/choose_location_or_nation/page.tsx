
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
 import InputLabel from '@mui/material/InputLabel';
 import MenuItem from '@mui/material/MenuItem';
 import FormControl from '@mui/material/FormControl';
 import Select, { SelectChangeEvent } from '@mui/material/Select';
 import CardMedia from '@mui/material/CardMedia';

import  {Paper}  from '@mui/material';
 const Step2Page:NextPage = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

  const [nation, setNation] = React.useState('');
  const [state, setState] = React.useState('');
  const handleNationChange = (event: SelectChangeEvent) => {
    setNation(event.target.value);
  };
  const handleStateChange = (event: SelectChangeEvent) => {
    setState(event.target.value);
  };
    return (
      <div>
      <h1 style={{textAlign:'center'}}>Meteorites from native lands</h1> 
      <div style={{display:"flex", justifyContent:'space-evenly '}}>

      

      <Card sx={{ minWidth: 500 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://www.nationsonline.org/maps/US-states-Abbreviation-map.jpg"
      alt="states"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Choose By State
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Find Meteorites in a specific state
      </Typography>
    </CardContent>
    <CardActions>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">State</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={state}
        label="Age"
        onChange={handleStateChange}
      >
        
        <MenuItem value={10}>Alaska</MenuItem>
        <MenuItem value={20}>Texas</MenuItem>
        <MenuItem value={30}>Oklahoma</MenuItem>
        <MenuItem value={40}>New York</MenuItem>
      </Select>
    </FormControl>
      
    <Link href="/meteorite_map"><Button size="small">See Map</Button></Link>
    </CardActions>
  </Card>

  <Card sx={{ minWidth: 500 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oklahoma_Tribal_Statistical_Area.svg/1200px-Oklahoma_Tribal_Statistical_Area.svg.png"
      alt="Native Nation map"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Choose By Nation
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Find Meteorites within an indigenous Nation
      </Typography>
    </CardContent>
    <CardActions>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Nation</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={nation}
        label="Age"
        onChange={handleNationChange}
      >
        
        <MenuItem value={10}>Cherokee</MenuItem>
        <MenuItem value={20}>Chickasaw</MenuItem>
        <MenuItem value={30}>Choctaw</MenuItem>
      </Select>
    </FormControl>
    <Link href="/meteorite_map"><Button size="small">See map</Button></Link>
    </CardActions>
  </Card>

  
      </div>
      <div style={{display:"flex", justifyContent:'space-evenly ', margin:"10vh"}}>
      <Box >
      <Paper elevation={12} >
      <Typography variant="h5" component="div">
        Description of Data
      </Typography>
      <Typography variant="body2" color="text.secondary">
        She wanted a description of why there is only 3 meteorites so far
      </Typography>
     
     </Paper>
    </Box>
      </div>
      
     
    </div>
     
    );
  }

 export default Step2Page
  
  
 
 

 