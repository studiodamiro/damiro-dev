import { CSSProperties, useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated/types';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { usePath } from '@/providers/PathProvider';
import adjustHexColor from '@/lib/adjustHexColor';
import getRandomRotation from '@/lib/getRandomRotation';

type EmblemProps = {
  style?: CSSProperties;
  work: Work;
  width: number;
  position: { left: number; top: number };
};

export default function Emblem({ width, position, work }: EmblemProps) {
  const { setPath } = usePath();
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(0.5);

  const sm = 0.3;
  const md = 0.5;
  const lg = 0.8;

  useEffect(() => {
    if (!work) return;
    if (work.works.split(', ')[0] === "web dev't") {
      setScale(lg);
    } else if (work.works.split(', ')[0] === 'identity') {
      setScale(md);
    } else {
      setScale(sm);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const displacementX = ((e.clientX - centerX) / centerX) * width * scale;
      const displacementY = ((e.clientY - centerY) / centerY) * width * scale;

      setDisplacement({ x: -displacementX, y: -displacementY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [width]);

  return (
    <div
      onClick={() => setPath(work.slug)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        width: width,
        left: position.left + displacement.x,
        top: position.top + displacement.y,

        //
      }}
      className={cn('absolute cursor-pointer aspect-square rounded-lg', isHovered ? 'z-10' : 'z-0')}
    >
      <div
        style={{
          width: width,
          height: width,
          scale: isHovered ? 1 : scale,
          rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
          backgroundColor: isHovered
            ? adjustHexColor(`#${work.colors.split(', ')[0]}`, theme === 'dark' ? 'dark' : 'light', 50)
            : adjustHexColor('#71717a', theme === 'dark' ? 'dark' : 'light', 100 - scale * 100),
        }}
        className={cn(
          scale === sm && 'lg:blur-[6px]',
          scale === md && 'lg:blur-[2px]',
          scale === lg && 'lg:blur-none',
          'transition-all duration-300 ease-in-out hover:blur-none rounded-md'
        )}
      >
        {work.company}
      </div>
    </div>
  );
}
