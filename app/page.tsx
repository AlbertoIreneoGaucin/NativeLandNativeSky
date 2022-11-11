
'use client';
import Link from 'next/link'
import type { NextPage } from 'next'
 //import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 const HomePage:NextPage = () => {
    return (
      <div >
        <h1>Meteorites from native lands</h1> 
        <div style={{display:"flex"}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Meteorites from Native Lands USA</Card.Title>
          <Card.Text>
            See some meteorites from the USA
          </Card.Text>
          <Link href="/choose_location_or_nation">
              GO
            </Link>
        </Card.Body>
      </Card>


      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Educational Tools</Card.Title>
          <Card.Text>
            See and download educational tools
          </Card.Text>
          <Link href="/educational_tools">
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

 export default HomePage
  
  
 
 

 