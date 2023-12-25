'use client';

import adjustHexColor from '@/lib/adjustHexColor';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

interface ColorProps {
  color: string;
  secColor?: string;
  priLightColor?: string;
  secLightColor?: string;
  priDarkColor?: string;
  secDarkColor?: string;
  setColor?: Dispatch<SetStateAction<string>>;
  setSecColor?: Dispatch<SetStateAction<string>>;
  setPriLightColor?: Dispatch<SetStateAction<string>>;
  setSecLightColor?: Dispatch<SetStateAction<string>>;
  setPriDarkColor?: Dispatch<SetStateAction<string>>;
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

export const ColorProvider = ({ children }: ColorProviderProps) => {
  const [color, setColor] = useState<string>('#ffffff');
  const [secColor, setSecColor] = useState<string>('#cccccc');

  const [priLightColor, setPriLightColor] = useState<string>('#ffffff');
  const [secLightColor, setSecLightColor] = useState<string>('#cccccc');
  const [priDarkColor, setPriDarkColor] = useState<string>('#ffffff');
  const [secDarkColor, setSecDarkColor] = useState<string>('#cccccc');

  useEffect(() => {
    setPriLightColor(adjustHexColor(color, 'light', 20));
    setSecLightColor(adjustHexColor(secColor, 'light', 20));
    setPriDarkColor(adjustHexColor(color, 'dark', 20));
    setSecDarkColor(adjustHexColor(secColor, 'dark', 20));
  }, [color, secColor]);

  return (
    <ColorContext.Provider
      value={{
        color,
        secColor,
        priLightColor,
        secLightColor,
        priDarkColor,
        secDarkColor,
        setColor,
        setSecColor,
        setPriLightColor,
        setSecLightColor,
        setPriDarkColor,
        setSecDarkColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
