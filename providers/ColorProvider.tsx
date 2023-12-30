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
  const [color, setColor] = useState<string>('#71717a');
  const [lightColor, setLightColor] = useState<string>('#71717a');
  const [darkColor, setDarkColor] = useState<string>('#71717a');
  const [secColor, setSecColor] = useState<string>('#3f3f46');
  const [secLightColor, setSecLightColor] = useState<string>('#3f3f46');
  const [secDarkColor, setSecDarkColor] = useState<string>('#3f3f46');

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
