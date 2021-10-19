import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
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

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = event => {
        event.preventDefault()
        signInUsingEmail(email, password)

    }
    const handleSignIn = event => {
        event.preventDefault()
        processLogin(email, password)

    }
    const signInUsingEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUsers(user)
                setUserName()
                setError('');
                window.location.reload()

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
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
        handleRegistration,
        handlePassword,
        handleEmail,
        handleSignIn,
        handleNameChange,
        logOut,
        setUserName,
        error
    }
}

export default useFirebase;