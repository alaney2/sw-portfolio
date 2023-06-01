import React, { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState('');

  const value = {
    cursor,
    setCursor,
  };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export default CursorProvider;
