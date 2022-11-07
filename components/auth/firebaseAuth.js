
/*
import { initFirebase } from '../../firebase/initFirebase'
import { useEffect, useState } from 'react'
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import  {getAuth,
    GoogleAuthProvider, EmailAuthProvider} from "firebase/auth";
import { setUserCookie } from '../../firebase/userCookies'
import { mapUserData } from '../../firebase/mapUserData'

initFirebase() // initialize firebase

const auth = getAuth()

const firebaseAuthConfig = {
    signInFlow: 'popup',
    
    signInOptions: [
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
        // add additional auth flows below
        //GoogleAuthProvider.PROVIDER_ID,
        
       
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        },
    },
}

const FirebaseAuth = () => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])
    return (
        <div>
            {renderAuth ? (
                <div>nice</div>
            ) : null}
        </div>
    )
}

export default FirebaseAuth

*/