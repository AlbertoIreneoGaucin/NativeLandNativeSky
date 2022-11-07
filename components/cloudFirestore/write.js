/*
import firebase from 'firebase/app'
import 'firebase/firestore'
import { doc, setDoc, Timestamp, GeoPoint } from "firebase/firestore"
import { db } from '../../firebase/initFirebase'
import { useUser } from '../../firebase/useUser.js'
const WriteToCloudFirestore = () => {
    


const sendData = async () => {
    try {
        //const userDoc = doc(db, "myCollection", user.id)
        firebase
        .firestore().collection('test').doc('test').set({
            string_data: 'Benjamin Carlson',
            number_data: 2,
            boolean_data: true,
            map_data: { stringInMap: 'Hi', numberInMap: 7 },
            array_data: ['text', 4],
            null_data: null,
            time_stamp: Timestamp.fromDate(new Date('December 17, 1995 03:24:00')),
            geo_point: new GeoPoint(34.714322, -131.468435)
        })
        .then(alert('Data was successfully sent to cloud firestore!'))
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

    return (
        <div style={{ margin: '5px 0' }}>
            <button onClick={sendData} style={{ width: '100%' }}>Send Data To Cloud Firestore</button>
        </div>
    )
}

export default WriteToCloudFirestore

*/