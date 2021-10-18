import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        users,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;