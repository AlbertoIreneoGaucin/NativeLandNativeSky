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
//import { firestore } from '../../firebase/initFirebase'
//import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from "@firebase/firestore";
//import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from "react";

import { doc, getDoc} from "firebase/firestore"; 
import { firestore } from '../../firebase/initFirebase'


import { collection, getDocs } from "firebase/firestore";

//////----------------------------------------------------
//import { useState } from "react";
import { storage } from '../../firebase/initFirebase'
import {uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {getStorage, ref, uploadBytes, listAll} from "firebase/storage";

/*
uploadBytes(pdf1ref, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});

const uploadTask = uploadBytesResumable(pdf1ref, file);
*/

const Step3Landing:NextPage = () => {
  //const storage = getStorage();
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
      <button> PDF Sample 1 </button>
      <button> PDF Sample 2 </button>
      <h2>
          Middle School Materials
      </h2>
      <button> PDF Sample 3 </button>
      <button> PDF Sample 4 </button>
      <h2>
          Elementary School Materials
      </h2>
      <button> PDF Sample 5 </button>
      <button> PDF Sample 6 </button>
    </main>
  
    <footer >
    <Link href = {`/`}>
          Homepage
        </Link>
    </footer>
  </div>
    )
}

export default Step3Landing;
//////----------------------------------------------------

/*
const Step3Landing:NextPage = () => {

  async function getContents() {
    const querySnapshot = await getDocs(collection(firestore, "Meteorites"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    //then here make a new object and print it back out to the screen
  }


  function handleUpload() {
    if (!file) {
    alert("Please choose a file first!")
    }
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
    <button onClick={getContents} > PDF Sample 1 </button>
    <button> PDF Sample 2 </button>
    <h2>
        Middle School Materials
    </h2>
    <button> PDF Sample 3 </button>
    <button> PDF Sample 4 </button>
    <h2>
        Elementary School Materials
    </h2>
    <button> PDF Sample 5 </button>
    <button> PDF Sample 6 </button>
  </main>

  <footer >
  <Link href = {`/`}>
        Homepage
      </Link>
  </footer>
</div>
  )
};

export default Step3Landing;
*/

    /*
    const [meteorites,setEduTools] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect( () => {
        getEduTools();
        setTimeout( () => {
          setLoading(false);
        },2000)
        
      },[]);
    
    
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
*/