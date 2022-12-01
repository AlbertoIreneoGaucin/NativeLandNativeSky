'use client'
import React from "react";
import 'styles/popupStyles.css';
import Popover from '@mui/material'

interface props {
    handleClose: React.MouseEventHandler
    content: React.ReactElement;
}
const Popup = (props: props
    
    ) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
            </div>
            
        </div>
    );
};

export default Popup