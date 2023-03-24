import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"


export const JoinEvent = async (user, eventId) => {

    const addAttendance = {
        attendance: arrayUnion({
            uid: user.uid
        })
    }

    const collectionRef = doc(db, 'events', eventId)
    await updateDoc(collectionRef, addAttendance)
}