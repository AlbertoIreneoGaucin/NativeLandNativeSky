/*export default function educational_tools() {
    return (
      <div>
        <h1>test Page</h1>
        <p>Some content</p>
      </div>
    );
  }
*/

'use client';
import type { NextPage } from 'next'
import Head from 'next/head'
import { firestore } from '../../firebase/initFirebase'
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from "@firebase/firestore";
//import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from "react";
import { display } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, ButtonGroup } from '@mui/material';

const Step3Landing:NextPage = () => {

    const [meteorites,setEduTools] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect( () => {
        getEduTools();
        setTimeout( () => {
          setLoading(false);
        },2000)
        
      },[]);
    
      const theme = createTheme({
        palette: {
          // mode: 'dark',
          primary: {
            main: grey[500],
          },
          secondary:{
            main: '#ffffff',
          },
        },
      });

      const meteoritesCollection = collection(firestore,'Meteorites');
      
      const getEduTools = async () => {
        const meteoritesQuery = query(meteoritesCollection,where('show','==',true),limit(10));
        const querySnapshot = await getDocs(meteoritesQuery);
        const result: QueryDocumentSnapshot<DocumentData>[] = [];
        querySnapshot.forEach((snapshot) => {
          result.push(snapshot);
        })
        setEduTools(result);
      };

      const updateEduTools = async (documentId: string) => {
        // create a pointer to the document id
        const _meteorites = doc(firestore,`Educational Resources/${documentId}`);
    
        // update the doc by setting done to true
        await updateDoc(_meteorites,{
          "show":true
        });
    
        // retrieve meteorites
        getEduTools();
      }

      const deleteEduTools = async (documentId:string) => {
        // create a pointer to the document id
        const _meteorites = doc(firestore,`Meteorites/${documentId}`);
   
        // delete the doc
        await deleteDoc(_meteorites);
    
        // retrieve todos
        getEduTools();
     }
        // Function will execute on click of button
        const onButtonClick = () => {
            // using Java Script method to get PDF file
            fetch('Sample.pdf').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'SamplePDF.pdf';
                    alink.click();
                })
            })
        }

    return(
        <div  >
        <Head>
            <title>Educational Resources</title>
            <meta name="description" content="Next.js firebase todos app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main >
          <ThemeProvider theme={theme}>
          <Typography >
        {/* <Link href={`/`}> Home Page </Link> */}
        <Typography align="inherit">

        <h1 >
        Educational Resources
        </h1>
        </Typography>

        <h2>
            High School Materials
        </h2>
        <Box sx={{px:2}}>
        <Button variant='contained' color='secondary' sx={{ border: 1, marginRight:'5px' }} onClick={onButtonClick} > PDF Sample 1 </Button>
        <Button variant='contained' color='secondary' sx={{ border: 1 }} onClick={onButtonClick}> PDF Sample 2 </Button>

        </Box>


        <h2>
            Middle School Materials
        </h2>

        <Box sx={{px:2}}>
        <Button variant='contained' color='secondary' sx={{ border: 1, marginRight:'5px' }}  onClick={onButtonClick}> PDF Sample 3 </Button>
        <Button variant='contained' color='secondary' sx={{ border: 1 }}  onClick={onButtonClick}> PDF Sample 4 </Button>
        </Box>


        <h2>
            Elementary School Materials
        </h2>
        <Box sx={{px:2}}>
        <Button variant='contained' color='secondary' sx={{ border: 1, marginRight:'5px' }}  onClick={onButtonClick}> PDF Sample 5 </Button>
        <Button variant='contained' color='secondary' sx={{ border: 1 }}  onClick={onButtonClick}> PDF Sample 6 </Button>
        </Box>

        </Typography>
        </ThemeProvider>
      </main>

      {/* <footer >
      <Link href = {`/`}>
            Homepage
          </Link>
      </footer> */}
    </div>)

}

export default Step3Landing