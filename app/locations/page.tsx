'use client'
import { useEventHandlers } from '@react-leaflet/core';
//import Link from 'next/link'
import type { NextPage } from 'next'
import React, { useCallback, useMemo, useState } from "react";
import Box from '@mui/material/Box';
import Link from 'next/link';

const Step2Page:NextPage = () => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      return (
        <div>
        <div >
          <h1>Meteorites From Native Lands</h1> 
          </div>
          <div>
            <h2>Native American Nations</h2>
          </div>
          <div>
          <Link href="/meteorite_map">
            <p>Cherokee Nation</p>
          </Link>

          </div>
          </div>
          );
        }
      
       export default Step2Page