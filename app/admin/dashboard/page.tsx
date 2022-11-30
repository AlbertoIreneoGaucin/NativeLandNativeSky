
'use client'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation';

import {auth} from '../../../firebase/initFirebase'
import {useAuthState} from 'react-firebase-hooks/auth'
 
 const AdminDashBoard:NextPage = () => {
    const router = useRouter()
   
    const[user, loading] = useAuthState(auth)
    

    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
        router.push('/admin')
        return <div>Please sign in to continue </div>
    }
    return (
      <div >
        <h1>Admin</h1> 
        

     
       

        <div>
            Lorem ipsum text 
        </div>
      </div>
    );
  }

 export default AdminDashBoard