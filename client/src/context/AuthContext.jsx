/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// auth provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // register user...
  const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // login user...
  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google...
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  // logout user...
  const logout = () => {
    return signOut(auth);
  };

  // manage user...
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
