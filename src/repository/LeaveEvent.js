import { arrayRemove, doc, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"


export const LeaveEvent = async (user, eventId) => {

    const addAttendance = {
        attendance: arrayRemove({
            uid: user.uid
        })
    }

    const collectionRef = doc(db, 'events', eventId)
    await updateDoc(collectionRef, addAttendance)
}