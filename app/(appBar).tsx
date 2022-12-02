
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

//import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
import { grey } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


type Anchor = 'left';
  const lightTheme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: '#10002b',
      },
      secondary:{
        main: '#000000',
      },
    },
  });

  
export default function ButtonAppBar() {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
            setState({ ...state, [anchor]: open });
    };

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
        {(['left'] as const).map((anchor) => ( 
          <React.Fragment key={anchor}>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={toggleDrawer(anchor, true)}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
      {/* <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        color="secondary"
      > */}

          <List color='secondary'> 
              <ListItem href='/' component={Link} onClick={handleClose}>Home</ListItem>
              <Divider />

            <ListItem color="secondary"  href="/educational_tools" component={Link} onClick={handleClose}>Educational Tools</ListItem>
            <Divider />
            <ListItem href="/admin" color="secondary" component={Link} onClick={handleClose}>Admin</ListItem>
            </List>
      {/* </Menu> */}
      </SwipeableDrawer>
          </React.Fragment>
          ))}
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