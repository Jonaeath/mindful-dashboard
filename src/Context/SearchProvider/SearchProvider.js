import React, { createContext, useState } from "react";

export const searchContext = createContext();

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    result: [],
  });

  const authInfo = {
    auth,
    setAuth,
  };

  return (
    <searchContext.Provider value={authInfo}>
        {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;

