'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface WidthProps {
  windowWidth: number;
  breakpoint: string;
}

const WidthContext = createContext<WidthProps | undefined>(undefined);

export const useWidth = (): WidthProps => {
  const context = useContext(WidthContext);
  if (!context) {
    throw new Error('useWidth must be used within a WidthProvider');
  }
  return context;
};

interface WidthProviderProps {
  children: ReactNode;
}

export function WidthProvider({ children }: WidthProviderProps) {
  const [windowWidth, setWindowWidth] = useState<number>(1200);
  const [breakpoint, setBreakpoint] = useState<string>('md');

  const handleWindowResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);

    let newBreakpoint = '3xl';

    if (newWindowWidth < 480) {
      newBreakpoint = 'xs';
    } else if (newWindowWidth < 640) {
      newBreakpoint = 'sm';
    } else if (newWindowWidth < 768) {
      newBreakpoint = 'md';
    } else if (newWindowWidth < 1024) {
      newBreakpoint = 'lg';
    } else if (newWindowWidth < 1280) {
      newBreakpoint = 'xl';
    } else if (newWindowWidth < 1536) {
      newBreakpoint = '2xl';
    }

    setBreakpoint(newBreakpoint);
  };

  useEffect(() => {
    handleWindowResize(); // Calculate on initial render

    const debouncedHandleResize = debounce(handleWindowResize, 200);
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <WidthContext.Provider
      value={{
        windowWidth,
        breakpoint,
      }}
    >
      {children}
    </WidthContext.Provider>
  );
}

// Debounce utility function
const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
      timeoutId = null;
    }, delay);
  };
};
