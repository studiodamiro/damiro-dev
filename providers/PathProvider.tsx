'use client';

import { usePathname } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface PathProps {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

const PathContext = createContext<PathProps | undefined>(undefined);

export const usePath = (): PathProps => {
  const context = useContext(PathContext);
  if (!context) throw new Error('usePath must be used within a PathProvider');
  return context;
};

interface PathProviderProps {
  children: ReactNode;
}

export default function PathProvider({ children }: PathProviderProps) {
  const url = usePathname();
  const [path, setPath] = useState<string>(url);
  return <PathContext.Provider value={{ path, setPath }}>{children}</PathContext.Provider>;
}
