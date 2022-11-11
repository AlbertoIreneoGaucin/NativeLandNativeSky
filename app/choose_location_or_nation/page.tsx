
'use client'
import Link from 'next/link'
import type { NextPage } from 'next'
 
 import Card from 'react-bootstrap/Card';
 //import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

 
 const Step2Page:NextPage = () => {
    return (
      <div >
        <h1>placeholder</h1> 
        <div style={{display:"flex"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Find By Location</Card.Title>
          <Card.Text>
            Choose a state
          </Card.Text>
          <Link href="/meteorite_map">
              GO
            </Link>
        </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Find By Nation</Card.Title>
          <Card.Text>
            find by nation
          </Card.Text>
          <Link href="/meteroite_map">
              GO
            </Link>
        </Card.Body>
      </Card>
        </div>

        <div>
            Lorem ipsum text 
        </div>
      </div>
    );
  }

 export default Step2Page
  
  
 
 

 