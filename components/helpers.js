import { useState, useEffect } from 'react';


export function cursorToColor(cursorFile) {
  if (cursorFile === '/blue-saber.cur') {
    return '#0077FF';
  } else if (cursorFile === '/red-saber.cur') {
    return '#FF0000';
  } else if (cursorFile === '/green-saber.cur') {
    return '#01EB14';
  } else if (cursorFile === '/purple-saber.cur') {
    return '#D000FF';
  }
}

export function cursorToRGBA(cursorFile) {
  if (cursorFile === '/blue-saber.cur') {
    return 'rgba(0, 119, 255, 0.5)';
  } else if (cursorFile === '/red-saber.cur') {
    return 'rgba(255, 0, 0, 0.6)';
  } else if (cursorFile === '/green-saber.cur') {
    return 'rgba(1, 235, 20, 0.5)';
  } else if (cursorFile === '/purple-saber.cur') {
    return 'rgba(208, 0, 255, 0.5)';
  }
}

export function jediOrSith(cursorFile) {
  if (cursorFile === '/blue-saber.cur' || cursorFile === '/green-saber.cur' || cursorFile === '/purple-saber.cur') {
    return 'Jedi';
  } else if (cursorFile === '/red-saber.cur') {
    return 'Sith';
  }
}

export const borderColors = {
  '/blue-saber.cur': 'md:hover:border-blue-saber',
  '/red-saber.cur': 'md:hover:border-red-saber',
  '/green-saber.cur': 'md:hover:border-green-saber',
  '/purple-saber.cur': 'md:hover:border-purple-saber',
}

export const borderColorsAlways = {
  '/blue-saber.cur': 'hover:border-blue-saber',
  '/red-saber.cur': 'hover:border-red-saber',
  '/green-saber.cur': 'hover:border-green-saber',
  '/purple-saber.cur': 'hover:border-purple-saber',
}

export const borderColorsDefault = {
  '/blue-saber.cur': 'border-blue-saber',
  '/red-saber.cur': 'border-red-saber',
  '/green-saber.cur': 'border-green-saber',
  '/purple-saber.cur': 'border-purple-saber',
}

export const bgColors = {
  '/blue-saber.cur': 'bg-blue-saber',
  '/red-saber.cur': 'bg-red-saber',
  '/green-saber.cur': 'bg-green-saber',
  '/purple-saber.cur': 'bg-purple-saber',
}

export const textColors = {
  '/blue-saber.cur': 'hover:text-blue-saber',
  '/red-saber.cur': 'hover:text-red-saber',
  '/green-saber.cur': 'hover:text-green-saber',
  '/purple-saber.cur': 'hover:text-purple-saber',
}

export const textColorsDefault = {
  '/blue-saber.cur': 'text-blue-saber',
  '/red-saber.cur': 'text-red-saber',
  '/green-saber.cur': 'text-green-saber',
  '/purple-saber.cur': 'text-purple-saber',
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
