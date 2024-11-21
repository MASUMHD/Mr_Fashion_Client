/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ( { children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLoginProvider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   social login
  const googleLogin = () => {
    return signInWithPopup(auth, googleLoginProvider);
  };

  //   logout user
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        axios.post(`http://localhost:4000/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data?.data?.token);
              setLoading(false);
            }
        });
      }
      else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    login,
    googleLogin,
    logout,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
