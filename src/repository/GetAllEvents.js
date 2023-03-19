import { collection, onSnapshot, query } from "firebase/firestore";

export const getAllEvents = async (db, setAllEvents) => {
    const q = query(collection(db, 'events'));
    const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const listItems = [];
        querySnapshot.forEach((doc) => {
            listItems.push({ ...doc.data() });
        });
        setAllEvents(listItems)
    });

    return () => unSubscribe

}