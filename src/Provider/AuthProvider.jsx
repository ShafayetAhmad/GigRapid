/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleAuthProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const registerUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    } 
  };

  const googleLogin = async() => {
    try {
      return await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.log(error.message)
    }
  }

  const userLogin = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user on auth changed: ", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        user,
        logout,
        userLogin,
        googleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
