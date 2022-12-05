/*export default function educational_tools() {
    return (
      <div>
        <h1>test Page</h1>
        <p>Some content</p>
      </div>
    );
  }
*/


/*
'use client';
import type { NextPage } from 'next'
import Head from 'next/head'
//import { firebase.firestore as firestore } from '../../firebase/initFirebase'
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from "@firebase/firestore";
//import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from "react";

const Step3Landing:NextPage = () => {

    const [meteorites,setEduTools] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect( () => {
        getEduTools();
        setTimeout( () => {
          setLoading(false);
        },2000)
        
      },[]);
    
    
      //const meteoritesCollection = collection(firestore,'Meteorites');
      
      const getEduTools = async () => {
        //const meteoritesQuery = query(meteoritesCollection,where('show','==',true),limit(10));
        //const querySnapshot = await getDocs(meteoritesQuery);
        //const result: QueryDocumentSnapshot<DocumentData>[] = [];
        //querySnapshot.forEach((snapshot) => {
        //  result.push(snapshot);
        //})
        //setEduTools(result);
      };

      const updateEduTools = async (documentId: string) => {
        // create a pointer to the document id
        //const _meteorites = doc(firestore,`Educational Resources/${documentId}`);
    
        // update the doc by setting done to true
        //await updateDoc(_meteorites,{
        //  "show":true
        //});
    
        // retrieve meteorites
        getEduTools();
      }

      const deleteEduTools = async (documentId:string) => {
        // create a pointer to the document id
        //const _meteorites = doc(firestore,`Meteorites/${documentId}`);
   
        // delete the doc
        //await deleteDoc(_meteorites);
    
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
        <Link href={`/`}> Home Page </Link>
        <h1 >
        Educational Resources
        </h1>
        <h2>
            High School Materials
        </h2>
        <button onClick={onButtonClick}> PDF Sample 1 </button>
        <button onClick={onButtonClick}> PDF Sample 2 </button>
        <h2>
            Middle School Materials
        </h2>
        <button onClick={onButtonClick}> PDF Sample 3 </button>
        <button onClick={onButtonClick}> PDF Sample 4 </button>
        <h2>
            Elementary School Materials
        </h2>
        <button onClick={onButtonClick}> PDF Sample 5 </button>
        <button onClick={onButtonClick}> PDF Sample 6 </button>
      </main>

      <footer >
      <Link href = {`/`}>
            Homepage
          </Link>
      </footer>
    </div>)

}

export default Step3Landing

*/
'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';
import { NextPage } from 'next';
//import {firestore as db} from "../../firebase/initFirebase";
import { firestore} from "../../firebase/initFirebase";
import { storage } from '../../firebase/initFirebase'
import {uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {getStorage, ref, uploadBytes, listAll} from "firebase/storage";
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where, getDoc} from "@firebase/firestore";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Step3Landing =  () => {
  
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const meteoritesCollection = collection(firestore,'Meteorites');
  //const [todos, setTodos] = useState([]);

  /*
  const listRef = ref(storage, 'files/uid');
  const pdf1ref = ref(storage);

  listAll(pdf1ref)
    .then((res) => {
      //console.log ("HELLO")
      console.log(res.prefixes);
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        //console.log("HELLO");
      });
      console.log(res.items);
      console.log ("HI THERE")
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        console.log(itemRef);
        console.log ("HELLO")
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  */
  const [meteorites,setEduTools] = React.useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  const getEduTools = async () => {
    const meteoritesQuery = query(meteoritesCollection,where('Visible','==',true),limit(10));
    const querySnapshot = await getDocs(meteoritesQuery);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
      //console.log('dsfs', snapshot.data)
    })
    setEduTools(result);
  };

  const getData = async () =>{
  const docRef = doc(firestore, "Meteorites", "Lost City");
  const docSnap =  await getDoc(docRef);
  console.log('sdfsf',docSnap.data())
  
  }
  
  
  //console.log(meteorites)

  /*
  const addTodo = async (e:any) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(firestore, "todos"), {
          todo: "asasa",    
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
*/
 


  

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };


    function createData(
      name: string,
      description: string,
      
    ) {
      return { name, description};
    }
    
    const middleSchool = [
      createData('Middle School Example 1', 'Example pdf for middle school'),
      createData('Middle School Example 2', 'Example pdf for middle school'),
      
    ];
    const elementarySchool = [
      createData('Elementary School Example 1', 'Example pdf for elementary school'),
      createData('Elementary School Example 2', 'Example pdf for elementary school'),
      
    ];
    const highSchool = [
      createData('High School Example 1', 'Example pdf for high school'),
      
    ];

  
  const download = () =>
  {
    //console.log('download clicked')
    //openInNewTab('https://google.com')
    window.open('https://firebasestorage.googleapis.com/v0/b/nativelandnativesky.appspot.com/o/CSF_syllabus.pdf?alt=media&token=bdaa5d5e-1141-4c1f-abfa-c50b14f15eab', '_blank', 'noopener,noreferrer');
  }
  const previewPdf = () =>
  {
    console.log('preview clicked')
  }
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Elementary School Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align="right">Actions</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {elementarySchool.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='left' component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">
              <IconButton aria-label="download" onClick={download}>
                 <GetAppIcon />
              </IconButton>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Middle School Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align="right">Actions</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {middleSchool.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='left' component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">
              <IconButton aria-label="download" onClick={download}>
                 <GetAppIcon />
              </IconButton>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>High School Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align="right">Actions</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {highSchool.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align='left' component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">
              <IconButton aria-label="download" onClick={download}>
                 <GetAppIcon />
              </IconButton>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>

  );
}
export default Step3Landing