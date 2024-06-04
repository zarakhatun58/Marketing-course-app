import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useFirebase();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};
