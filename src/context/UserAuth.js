import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../Firebase";
import { getUser } from "../repository/GetUser";


const AuthContext = createContext();

const headerBgUrl = 'https://images.unsplash.com/photo-1676968986443-7f47aad7d993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'

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
                    joindate: new Date().getTime(),
                    coverimgurl: headerBgUrl,
                    username: userName,
                    uid: res.user.uid
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

    return (
        <AuthContext.Provider value={{ SignUp, LogOut, SignIn, user, currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}