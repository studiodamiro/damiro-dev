'use client';

import { usePathname } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface PathProps {
  path: string;
  cover: boolean;
  setPath: Dispatch<SetStateAction<string>>;
  setCover: Dispatch<SetStateAction<boolean>>;
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
  const [cover, setCover] = useState<boolean>(true);
  return <PathContext.Provider value={{ path, cover, setPath, setCover }}>{children}</PathContext.Provider>;
}
