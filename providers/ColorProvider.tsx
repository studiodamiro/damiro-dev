'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import adjustHexColor from '@/lib/adjustHexColor';

interface ColorProps {
  color: string;
  secColor?: string;
  lightColor?: string;
  secLightColor?: string;
  darkColor?: string;
  secDarkColor?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  setSecColor?: Dispatch<SetStateAction<string>>;
  setLightColor?: Dispatch<SetStateAction<string>>;
  setSecLightColor?: Dispatch<SetStateAction<string>>;
  setDarkColor?: Dispatch<SetStateAction<string>>;
  setSecDarkColor?: Dispatch<SetStateAction<string>>;
}

const ColorContext = createContext<ColorProps | undefined>(undefined);

export const useColor = (): ColorProps => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColor must be used within a ColorProvider');
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export function ColorProvider({ children }: ColorProviderProps) {
  const initialColor = '#71717a'; // zinc-500
  const initialSecColor = '#27272a'; // zinc-800

  const [color, setColor] = useState<string>(initialColor);
  const [lightColor, setLightColor] = useState<string>(initialColor);
  const [darkColor, setDarkColor] = useState<string>(initialColor);
  const [secColor, setSecColor] = useState<string>(initialSecColor);
  const [secLightColor, setSecLightColor] = useState<string>(initialSecColor);
  const [secDarkColor, setSecDarkColor] = useState<string>(initialSecColor);

  useEffect(() => {
    setLightColor(adjustHexColor(color, 'light', 70));
    setDarkColor(adjustHexColor(color, 'dark', 30));
    setSecLightColor(adjustHexColor(secColor, 'light', 20));
    setSecDarkColor(adjustHexColor(secColor, 'dark', 20));
  }, [color, secColor]);

  return (
    <ColorContext.Provider
      value={{
        color,
        lightColor,
        darkColor,
        secLightColor,
        secColor,
        secDarkColor,
        setColor,
        setLightColor,
        setDarkColor,
        setSecColor,
        setSecLightColor,
        setSecDarkColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
