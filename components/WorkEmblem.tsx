import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';
import { cn } from '@/lib/utils';
import getRandomRotation from '@/lib/getRandomRotation';
import ParallaxEffect from './ParallaxEffect';
import adjustHexColor from '@/lib/adjustHexColor';
import { useTheme } from 'next-themes';

type WorkEmblemProps = {
  work: Work;
  width: number;
  empty?: boolean;
  enabled?: boolean;
  className?: string;
};

export default function WorkEmblem({ work, width, empty = false, enabled = false, className }: WorkEmblemProps) {
  const { setPath } = usePath();
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

  return (
    <>
      {empty ? (
        <div
          style={{ width: `${width}px` }}
          className='flex items-center justify-center text-center aspect-square bg-transparent'
        />
      ) : (
        <div style={{ zIndex: isHovered ? 1 : 0 }}>
          <ParallaxEffect intensity={scale * (scale / 2)} enabled={enabled}>
            <div
              onClick={() => setPath(work.slug)}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              style={{
                width: `${width}px`,
                scale: isHovered ? 1 : scale,
                backgroundColor: isHovered
                  ? adjustHexColor(`#${work.colors.split(', ')[0]}`, theme === 'dark' ? 'dark' : 'light', 50)
                  : adjustHexColor('#71717a', theme === 'dark' ? 'dark' : 'light', 100 - scale * 100),
                rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
              }}
              className={cn(
                scale === sm && 'lg:blur-[6px]',
                scale === md && 'lg:blur-[2px]',
                scale === lg && 'lg:blur-none',
                'cursor-pointer flex items-center justify-center text-center aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out hover:blur-none p-4',
                className
              )}
            >
              {work.company}
            </div>
          </ParallaxEffect>
        </div>
      )}
    </>
  );
}
