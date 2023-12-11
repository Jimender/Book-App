import { useState, createContext, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const login = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);  
    });
    return () => {
      return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    createUser,
    loginWithGoogle,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authInfo}>
     {children} 
    </AuthContext.Provider>
  )
}

export default AuthProvider