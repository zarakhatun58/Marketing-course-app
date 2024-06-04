import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleRegister = (email, password, name) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
              setUser({ ...user, displayName: name });
              resolve(user);
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error))
        .finally(() => setIsLoading(false));
    });
  };

  const handleEmailLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Google sign-in failed:", error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.error("Logout failed:", error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    handleRegister,
    handleEmailLogin,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
