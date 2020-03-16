import React, { useState, createContext } from "react";

const initialUserState = { isLoggedIn: false };

export const UserContext = createContext(initialUserState);

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
