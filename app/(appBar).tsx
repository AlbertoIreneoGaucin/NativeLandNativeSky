
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


  const lightTheme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: grey[500],
      },
      secondary:{
        main: '#000000',
      },
    },
  });

  
export default function ButtonAppBar() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={lightTheme}>
      <AppBar position="static">
        <Toolbar>
        
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        color="secondary"
      >

          <MenuItem  color='secondary' href='/' component={Link} onClick={handleClose} > Home</MenuItem>

          <MenuItem color="secondary"  href="/educational_tools" component={Link} onClick={handleClose}>Educational Tools</MenuItem>

          <MenuItem href="/admin" color="secondary" component={Link} onClick={handleClose}>Admin</MenuItem>

      </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Interactive Map tool
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}