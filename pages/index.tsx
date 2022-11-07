import type { NextPage } from 'next'
import Head from 'next/head'
import { firestore } from '../firebase/initFirebase'
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from "@firebase/firestore";
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {

  const [meteorites,setMeteorites] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [loading,setLoading] = useState<boolean>(true);

  useEffect( () => {
    getMeteorites();
    setTimeout( () => {
      setLoading(false);
    },2000)
    
  },[]);


  const meteoritesCollection = collection(firestore,'Meteorites');

  
  const getMeteorites = async () => {
    const meteoritesQuery = query(meteoritesCollection,where('show','==',true),limit(10));
    const querySnapshot = await getDocs(meteoritesQuery);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    })
    setMeteorites(result);
  };
  

  const updateMeteorite = async (documentId: string) => {
    // create a pointer to the document id
    const _meteorites = doc(firestore,`Meteorites/${documentId}`);

    // update the doc by setting done to true
    await updateDoc(_meteorites,{
      "show":true
    });

    // retrieve meteorites
    getMeteorites();
  }

  const deleteMeteorite = async (documentId:string) => {
     // create a pointer to the document id
     const _meteorites = doc(firestore,`Meteorites/${documentId}`);

     // delete the doc
     await deleteDoc(_meteorites);
 
     // retrieve todos
     getMeteorites();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meteorites app</title>
        <meta name="description" content="Next.js firebase todos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          I am the one
        </h1>

        <div className={styles.grid}>
          {
            loading ? (
              <div className={styles.card}>
                <h2>Loading</h2>
              </div>
            ): 
            meteorites.length === 0 ? (
              <div className={styles.card}>
                <h2>No undone todos</h2>
                <p>Consider adding a todo from <a href="/meteorite-from-native-lands">here</a></p>
              </div>
            ) : (
              meteorites.map((meteorite,index) => {
                return (
                  <div className={styles.card} key={index}> 

                    <h2>{meteorite.data().name}</h2>
                    <p>{meteorite.data().region}</p>

                    <div className={styles.cardActions}>

                    <button type="button" onClick={() => updateMeteorite(meteorite.id)}>Edit</button>

                    <button type="button" onClick={() => deleteMeteorite(meteorite.id)}>Delete</button>

                    <Link href={`/meteorite-from-native-lands`}> Copyright  </Link>

                    </div>
                    
                  </div>
                )
              })
            )
          }
        </div>

      </main>

      <footer className={styles.footer}>
      <Link href={`#`}>
            Copyright
          </Link>
      </footer>
    </div>
  )
}

export default Home


