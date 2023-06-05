import { useState, useEffect } from 'react';
import Head from 'next/head'
import CursorSelection from '@/components/CursorSelection';
import Content from '@/components/Content';
import { useCursor } from '@/components/CursorProvider';


export default function Home() {
  const { cursor, setCursor, isCursorSelected, setIsCursorSelected } = useCursor();
  const [isInitialized, setIsInitialized] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const storedCursor = localStorage.getItem('cursor');
    const storedIsCursorSelected = localStorage.getItem('isCursorSelected');
    if (storedCursor) {
      setCursor(storedCursor);
    }
    if (storedIsCursorSelected === 'true') {
      setIsCursorSelected(true);
    }
    setIsInitialized(true);
  }, [setCursor, setIsCursorSelected]);

  useEffect(() => {
    if (isCursorSelected) {
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }
  }, [isCursorSelected]);

  return (
    <div
      className={`text-gray-300 bg-slate-900 min-h-screen w-screen bg-cover`}
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <Head>
        <title>Alan Yao</title>
        <meta name="description" content="star wars portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isInitialized && (
        <>
          {!isCursorSelected && (
            <CursorSelection />
          )}
          {showContent ? (
            <div className={`transition-opacity duration-1000 opacity-100`}>
              <Content />
            </div>
          ) : (
            <div className={`transition-opacity duration-1000 opacity-0`}>
              <Content />
            </div>
          )}
        </>
      )}
    </div>
  );
};
