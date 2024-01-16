import useMousePosition from '@/lib/useMousePosition';
import { cn } from '@/lib/utils';
import { useSize } from '@/providers/SizeProvider';
import { ReactNode, useEffect, useState } from 'react';

type ParallaxEffectProps = {
  scale: number;
  width: number;
  position: { left: number; top: number };
  children: ReactNode;
  className?: string;
};

export default function ParallaxEffect({ scale, width, position, children, className }: ParallaxEffectProps) {
  const mouse = useMousePosition();
  const { w, h } = useSize();
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });

  const handleMouseMove = () => {
    const centerX = w / 2;
    const centerY = h / 2;
    const displacementX = ((mouse.x - centerX) / centerX) * width * scale;
    const displacementY = ((mouse.y - centerY) / centerY) * width * scale;
    setDisplacement({ x: -displacementX, y: -displacementY });
  };

  useEffect(() => {
    handleMouseMove();
  }, [mouse]);

  return (
    <div
      style={{
        width: width,
        left: position.left + displacement.x,
        top: position.top + displacement.y,
      }}
      className={cn('absolute aspect-square', className)}
    >
      {children}
    </div>
  );
}
