import { createContext, useState, useContext } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState('');
  const [isCursorSelected, setIsCursorSelected] = useState(false);

  const value = {
    cursor,
    setCursor,
    isCursorSelected,
    setIsCursorSelected,
  };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export default CursorProvider;
