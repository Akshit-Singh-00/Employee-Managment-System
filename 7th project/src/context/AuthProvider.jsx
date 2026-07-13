import React, { createContext, useEffect, useState } from "react";
import { getLocalStorag, setLocalStorag } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorag();

    const { employees, admin } = getLocalStorag();

    setUserData({
      employees,
      admin,
    });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;