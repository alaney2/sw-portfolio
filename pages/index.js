import { useState, useEffect } from 'react';
import Head from 'next/head'
import CursorSelection from '@/components/CursorSelection';
import Content from '@/components/Content';
import { useCursor } from '@/components/CursorProvider';
import { CSSTransition } from 'react-transition-group';


export default function Home() {
  const { cursor, setCursor, isCursorSelected, setIsCursorSelected } = useCursor();
  const [playAnimation, setPlayAnimation] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedCursor = localStorage.getItem('cursor');
    const storedIsCursorSelected = localStorage.getItem('isCursorSelected');
    if (storedCursor) {
      setCursor(storedCursor);
    }
    if (storedIsCursorSelected === 'true') {
      setIsCursorSelected(true);
      setPlayAnimation(false);
    }
    setIsInitialized(true);
  }, [setCursor, setIsCursorSelected]);

  return (
    <div
      className={`text-gray-300`}
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <Head>
        <title>Alan Yao</title>
        <meta name="description" content="star wars portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-slate-950">
      {isInitialized && (
        <>
          {!isCursorSelected && playAnimation && (
            <CSSTransition
              in={!isCursorSelected}
              timeout={300}
              classNames="zoom"
              unmountOnExit
            >
              <CursorSelection />
            </CSSTransition>
          )}
          {isCursorSelected && (
            <CSSTransition
              in={isCursorSelected}
              timeout={300}
              classNames="zoom-content"
              unmountOnExit
            >
              <Content />
            </CSSTransition>
          )}
        </>
      )}
      </div>
    </div>
  );
};
