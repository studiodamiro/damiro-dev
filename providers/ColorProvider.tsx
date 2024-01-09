'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { getLightestAndDarkest } from '@/lib/getLightestAndDarkest';

interface ColorProps {
  color: string;
  colorArray?: string[];
  lightColor?: string;
  darkColor?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  setColorArray?: Dispatch<SetStateAction<string[]>>;
  setLightColor?: Dispatch<SetStateAction<string>>;
  setDarkColor?: Dispatch<SetStateAction<string>>;
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
  const initialColor = '#52525b';
  const initialColorArray = ['52525b', 'd4d4d8', 'a1a1aa', '3f3f46'];

  const [color, setColor] = useState<string>(initialColor);
  const [colorArray, setColorArray] = useState<string[]>(initialColorArray);
  const [lightColor, setLightColor] = useState<string>(initialColor);
  const [darkColor, setDarkColor] = useState<string>(initialColor);

  useEffect(() => {
    const [lightestColor, darkestColor] = getLightestAndDarkest(colorArray);
    setLightColor(`#${lightestColor}`);
    setDarkColor(`#${darkestColor}`);
  }, [colorArray]);

  return (
    <ColorContext.Provider
      value={{
        color,
        colorArray,
        lightColor,
        darkColor,
        setColor,
        setColorArray,
        setLightColor,
        setDarkColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
