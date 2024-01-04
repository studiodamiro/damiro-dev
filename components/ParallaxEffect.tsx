import { useState, useEffect, ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  intensity: number;
}

export default function ParallaxEffect({ children, intensity }: ParallaxEffectProps) {
  const [transform, setTransform] = useState('translate(-50%, -50%)');

  const handleMouseMove = (e: MouseEvent) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const percentX = (mouseX / windowWidth) * 100 * intensity;
    const percentY = (mouseY / windowHeight) * 100 * intensity;

    setTransform(`translate(-${percentX}%, -${percentY}%)`);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return (
    <div style={{ transform }} className='transition-transform duration-100 ease-linear'>
      {children}
    </div>
  );
}
