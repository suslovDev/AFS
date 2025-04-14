import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const calculateDynamicHeight = () => {
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener('load', calculateDynamicHeight);
    window.addEventListener('resize', calculateDynamicHeight);

    return () => {
      window.removeEventListener('load', calculateDynamicHeight);
      window.removeEventListener('resize', calculateDynamicHeight);
    };
  }, [window.innerWidth]);

  return windowWidth;
};
