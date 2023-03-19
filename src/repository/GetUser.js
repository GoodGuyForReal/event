import { doc, onSnapshot } from "firebase/firestore";

export const getUser = async (db, user, setCurrentUser) => {
    if (user) {
        const userRef = doc(db, 'users', user.uid)
        // const docSnap = await getDoc(userRef);
        const unSubscribe = onSnapshot(userRef, async (snapshot) => {
            //console.log(snapshot.data());
            setCurrentUser(snapshot.data())
        })
        return () => unSubscribe
    }
}