import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(null);


  
  return (
    <AuthContext.Provider value={{ Token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
