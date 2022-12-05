'use client'
import React from "react";
//import 'styles/popupStyles.css';
import Popover from '@mui/material'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
import { database } from "firebase-admin";
import Link from 'next/link';
interface props {
    handleClose: React.MouseEventHandler
    content: React.ReactElement;
    info:any[];
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
const Popup = (props: props
    
    ) => {
        const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const learnMore = () => {
    window.open('https://www.metbase.org', '_blank', 'noopener,noreferrer');

  };
const data ={
    description: 'sdfsfdffdd'

}
  const url =' https://www.jamcampus.com/wp-content/uploads/2018/12/online-teaching-tools-jamcampus-education.jpg'
    return (
        <div className="popup-box">
            {//<Button variant="outlined" onClick={handleClickOpen}>
       // Open dialog
      //</Button>
    }
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Card sx={{ minWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        
      
      </CardActions>
    </Card>
        </DialogContent>
        <DialogActions>
            
          <Button  onClick={learnMore}>
            Learn More
          </Button>
        </DialogActions>
      </BootstrapDialog>
            
        </div>
    );
};

export default Popup