import { useState, useEffect, ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  intensity: number;
  enabled?: boolean;
}

export default function ParallaxEffect({ children, intensity, enabled = true }: ParallaxEffectProps) {
  const [transform, setTransform] = useState('translate(-50%, -50%)');

  const handleMouseMove = (e: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const percentX = (mouseX / windowWidth) * 100 * intensity;
    const percentY = (mouseY / windowHeight) * 100 * intensity;

    setTransform(`translate(-${percentX}%, -${percentY}%)`);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <>
      {enabled ? (
        <div style={{ transform }} className='transition-transform duration-100 ease-linear'>
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
