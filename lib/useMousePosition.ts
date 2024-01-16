import { useEffect, useState } from 'react';

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') window.addEventListener('mousemove', updateMousePosition);
    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
}
