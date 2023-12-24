'use client';

import adjustHexColor from '@/lib/adjustHexColor';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

interface ColorProps {
  priColor: string;
  secColor?: string;
  priLightColor?: string;
  secLightColor?: string;
  priDarkColor?: string;
  secDarkColor?: string;
  setPriColor?: Dispatch<SetStateAction<string>>;
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
  priColor: string;
  secColor?: string;
  priLightColor?: string;
  secLightColor?: string;
  priDarkColor?: string;
  secDarkColor?: string;
  setPriColor?: Dispatch<SetStateAction<string>>;
  setSecColor?: Dispatch<SetStateAction<string>>;
  setPriLightColor?: Dispatch<SetStateAction<string>>;
  setSecLightColor?: Dispatch<SetStateAction<string>>;
  setPriDarkColor?: Dispatch<SetStateAction<string>>;
  setSecDarkColor?: Dispatch<SetStateAction<string>>;
  children: ReactNode;
}

export const ColorProvider = ({ children, priColor = '#fa8072cc', secColor = '#fa8072' }: ColorProviderProps) => {
  const [priColors, setPriColor] = useState<string>(priColor);
  const [secColors, setSecColor] = useState<string>(secColor);

  const [priLightColor, setPriLightColor] = useState<string>(priColor);
  const [secLightColor, setSecLightColor] = useState<string>(secColor);
  const [priDarkColor, setPriDarkColor] = useState<string>(priColor);
  const [secDarkColor, setSecDarkColor] = useState<string>(secColor);

  useEffect(() => {}, []);

  useEffect(() => {
    setPriLightColor(adjustHexColor(priColor, 'light', 20));
    setSecLightColor(adjustHexColor(secColor, 'light', 20));
    setPriDarkColor(adjustHexColor(priColor, 'dark', 20));
    setSecDarkColor(adjustHexColor(secColor, 'dark', 20));
  }, [priColor, secColor]);

  return (
    <ColorContext.Provider
      value={{
        priColor,
        secColor,
        priLightColor,
        secLightColor,
        priDarkColor,
        secDarkColor,
        setPriColor,
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
