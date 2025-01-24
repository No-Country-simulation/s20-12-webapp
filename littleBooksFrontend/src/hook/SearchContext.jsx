import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]); 

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children} 
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
