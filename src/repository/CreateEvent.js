import { addDoc, collection, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"


export const newEventHandler = async (user, eventObj) => {
    const { title, description, startDate, imgURL, endDate, startTime, endTime } = eventObj
    console.log(eventObj);

    const newEvent = {
        title: title,
        description: description,
        useruid: user.uid,
        startDate: startDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        imgURL: imgURL,
        attendance: []
    }

    const collectionRef = collection(db, 'events')
    const docRef = await addDoc(collectionRef, newEvent)
    await updateDoc(docRef, { id: docRef.id })

}