import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../Firebase";
import { getUser } from "../repository/GetUser";


const AuthContext = createContext();
export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState([])

    const auth = getAuth()

    const [user, setUser] = useState(null)

    function SignUp(email, password, userName) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                console.log(res.user)
                const ref = doc(db, 'users', res.user.uid)

                const userData = {
                    email: email,
                    username: userName,
                    uid: res.user.uid,
                    isAdmin: true
                }

                await setDoc(ref, userData)
            })
    }

    function SignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => onAuthStateChanged(auth, (currentuser) => setUser(currentuser)))


    const LogOut = () => signOut(auth)


    useEffect(() => { getUser(db, user, setCurrentUser) }, [user])
    console.log(currentUser);

    return (
        <AuthContext.Provider value={{ SignUp, LogOut, SignIn, user, currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}