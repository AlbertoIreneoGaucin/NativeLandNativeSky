
'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Link from 'next/link';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
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
    <Box style={{margin:0}}sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
      <AppBar  position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
          <MenuIcon/>
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
      >
        <Link href="/"  style={{ textDecoration: "none", color: "white" }}><MenuItem onClick={handleClose}> Home</MenuItem></Link>
        <Link href="/educational_tools"  style={{ textDecoration: "none", color: "white" }}><MenuItem onClick={handleClose}>Educational Tools</MenuItem></Link>
        <Link href="/admin"  style={{ textDecoration: "none", color: "white" }}><MenuItem onClick={handleClose}>Admin</MenuItem></Link>
      </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NENS Interactive Map tool
          </Typography>
        
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}