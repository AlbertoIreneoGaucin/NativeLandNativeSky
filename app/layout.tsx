

import Link from 'next/link';
//import './globals.css';

import AppBar from './(appBar)'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <html>
      <body style={{margin:0}}>
        <main>
        
      
      
        
      
          <nav>
            
            <AppBar></AppBar>
              
            
            
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}