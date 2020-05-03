import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState();
  const provider = {
    login,
  };
  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
