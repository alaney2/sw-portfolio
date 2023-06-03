import React, { useState } from 'react';
import styles from '@/styles/CursorSelection.module.css';
import { useCursor } from '@/components/CursorProvider';
import { cursorToColor } from '@/components/helpers';

const CursorSelection = () => {
  const { cursor, setCursor } = useCursor();
  const [isCursorSelected, setIsCursorSelected] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  function handleCursorSelection(cursorFile) {
    setCursor(cursorFile);
    setIsCursorSelected(true);
  }

  return (
    <div
      className={`text-3xl text-white  flex flex-col h-screen w-screen bg-black bg-cover bg-center justify-center items-center`}
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <h1 className={`${styles.heading} mb-8 text-center`}>Choose your lightsaber</h1>
      <div className="flex flex-row mb-4">
        <button className={`${styles.customCursor} ${styles.blue} w-16 h-16 m-1 border-2 border-white rounded-md outline-none transition-colors duration-300 bg-blue-500 hover:border-blue-500`} onClick={() => handleCursorSelection('/blue-saber.cur')}></button>
        <button className={`${styles.customCursor} ${styles.red} w-16 h-16 m-1 border-2 border-white rounded-md outline-none transition-colors duration-300 bg-red-500 hover:border-red-500`} onClick={() => handleCursorSelection('/red-saber.cur')}></button>
        <button className={`${styles.customCursor} ${styles.green} w-16 h-16 m-1 border-2 border-white rounded-md outline-none transition-colors duration-300 bg-green-500 hover:border-green-500`} onClick={() => handleCursorSelection('/green-saber.cur')}></button>
        <button className={`${styles.customCursor} ${styles.purple} w-16 h-16 m-1 border-2 border-white rounded-md outline-none transition-colors duration-300 bg-purple-500 hover:border-purple-500`} onClick={() => handleCursorSelection('/purple-saber.cur')}></button>
      </div>
      <div style={{ visibility: isCursorSelected ? 'visible' : 'hidden' }}>
        <button
          className={`text-sm mt-8 border-2 border-white text-white px-2 py-1 rounded-md outline-none transition-all delay-100 duration-1000 ${isCursorSelected ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => console.log('Proceed')}
          style={{ color: isButtonHovered ? cursorToColor(cursor) : 'white' }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CursorSelection;
