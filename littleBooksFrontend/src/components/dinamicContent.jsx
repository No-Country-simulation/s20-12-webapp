import React from 'react';
import { SearchProvider } from '../hook/SearchContext';
import Navbar from './navbar'; 
import DinamicCards from './dinamicCards';

const DinamicContent = () => {
  return (
    <SearchProvider> 
      <Navbar /> 
      <DinamicCards />
    </SearchProvider>
  );
};

export default DinamicContent
