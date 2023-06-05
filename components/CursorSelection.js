import { useState } from 'react';
import { useCursor } from '@/components/CursorProvider';
import { cursorToColor, borderColors } from '@/components/helpers';
import Image from 'next/image';


export default function CursorSelection() {
  const { cursor, setCursor, setIsCursorSelected } = useCursor();
  const [isCursorClicked, setIsCursorClicked] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  function handleCursorSelection(cursorFile) {
    setCursor(cursorFile);
    setIsCursorClicked(true);
  }
  
  return (
    <div
      className={`text-3xl text-gray-100 flex flex-col h-screen w-screen bg-slate-900 justify-center items-center`}
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <div className="flex flex-row mb-4">
        <button 
          className={`w-[64px] h-[64px] border-2 m-2 rounded-md flex items-center justify-center hover:bg-green-saber hover:bg-opacity-30 transition-colors duration-300 hover:border-green-500`}
          onClick={() => handleCursorSelection('/green-saber.cur')}
        >
          <div className="transform rotate-[-7deg]">
            <Image
              draggable={false}
              src="/luke.png"
              alt="Luke Skywalker's Lightsaber"
              width={38}
              height={38}
            />
          </div>
        </button>

        <button 
          className={`w-[64px] h-[64px] border-2 m-2 rounded-md flex items-center justify-center hover:bg-blue-saber hover:bg-opacity-30 transition-colors duration-300 hover:border-blue-500`}
          onClick={() => handleCursorSelection('/blue-saber.cur')}
        >
          <div className="transform rotate-[-7deg]">
            <Image
              draggable={false}
              src="/anakin.png"
              alt="Anakin Skywalker's Lightsaber"
              width={38}
              height={38}
            />
          </div>
        </button>

        <button 
          className={`w-[64px] h-[64px] border-2 m-2 rounded-md flex items-center justify-center hover:bg-red-saber hover:bg-opacity-30 transition-colors duration-300 hover:border-red-500`}
          onClick={() => handleCursorSelection('/red-saber.cur')}
        >
          <div className="transform rotate-[-7deg]">
            <Image
              draggable={false}
              src="/vader.png"
              alt="Darth Vader's Lightsaber"
              width={38}
              height={38}
            />
          </div>
        </button>
        <button 
          className={`w-[64px] h-[64px] border-2 m-2 rounded-md flex items-center justify-center hover:bg-purple-saber hover:bg-opacity-30 transition-colors duration-300 hover:border-purple-500`}
          onClick={() => handleCursorSelection('/purple-saber.cur')}
        >
          <div className="transform rotate-[-7deg]">
            <Image
              draggable={false}
              src="/mace.png"
              alt="Mace Windu's Lightsaber"
              width={38}
              height={38}
            />
          </div>
        </button>
      </div>
      <div style={{ visibility: isCursorClicked ? 'visible' : 'hidden' }}>
        <button
          className={`text-md mt-8 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 text-gray-100 px-4 py-2 rounded-xl outline-none transition-all delay-50 duration-1000 ${isCursorClicked ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => {
            setIsCursorSelected(true);
            localStorage.setItem('cursor', cursor);
            localStorage.setItem('isCursorSelected', 'true');
          }}
          style={{ color: isButtonHovered ? cursorToColor(cursor) : 'white' }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Continue
        </button>
      </div>
      <div className="mb-20"></div>
    </div>
  );
};
