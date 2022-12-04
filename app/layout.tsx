



import AppBar from './(appBar)'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
  return (
    <html>
      {//<body style={{margin:0, backgroundImage: 'url(https://steamuserimages-a.akamaihd.net/ugc/271724616138984267/FD78FE7C4AC9EC2941BACBB457D311B908EA9CCD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false)'}}>

      //<body style={{margin:0, backgroundImage: 'url(https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2UlMjBzdGFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)'}}>
      }
      <body style={{margin:0, height:'100vh', background: 'linear-gradient(to  bottom, white,white)'}}>
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