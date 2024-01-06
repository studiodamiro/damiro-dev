import { CSSProperties, useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated/types';

type EmblemProps = {
  style?: CSSProperties;
  work: Work;
  width: number;
  position: { left: number; top: number };
};

export default function Emblem({ width, position, work }: EmblemProps) {
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });
  const intensity = 0.1;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const displacementX = ((e.clientX - centerX) / centerX) * width * intensity;
      const displacementY = ((e.clientY - centerY) / centerY) * width * intensity;

      setDisplacement({ x: -displacementX, y: -displacementY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [width]);

  return (
    <div
      style={{ width: width, left: position.left + displacement.x, top: position.top + displacement.y }}
      className='absolute bg-red-500/30 aspect-square rounded-lg'
    >
      {work.company}
    </div>
  );
}
