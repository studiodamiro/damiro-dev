'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface SizeProps {
  w: number;
  h: number;
  setW: Dispatch<SetStateAction<number>>;
  setH: Dispatch<SetStateAction<number>>;
}

const SizeContext = createContext<SizeProps | undefined>(undefined);

export const useSize = (): SizeProps => {
  const context = useContext(SizeContext);
  if (!context) throw new Error('useColor must be used within a SizeProvider');
  return context;
};

interface SizeProviderProps {
  children: ReactNode;
}

export default function SizeProvider({ children }: SizeProviderProps) {
  const [w, setW] = useState<number>(0);
  const [h, setH] = useState<number>(0);

  return <SizeContext.Provider value={{ w, h, setW, setH }}>{children}</SizeContext.Provider>;
}
