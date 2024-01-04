import { useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';
import getRandomRotation from '@/lib/getRandomRotation';
import ParallaxEffect from './ParallaxEffect';
import { cn } from '@/lib/utils';

type WorkEmblemProps = {
  index?: number;
  work: Work;
  width: number;
  empty?: boolean;
};

export default function WorkEmblem({ index, work, width, empty = false }: WorkEmblemProps) {
  const { setPath } = usePath();
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(0.5);

  const sm = 0.4;
  const md = 0.6;
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
        <ParallaxEffect intensity={scale * (scale / 2)} enabled={width > 1024}>
          <div
            onClick={() => setPath(work.slug)}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{
              width: `${width}px`,
              scale: isHovered ? 1 : scale,
              backgroundColor: isHovered ? `#${work.colors.split(', ')[0]}` : `#71717a33`,
              rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
            }}
            className={cn(
              'cursor-pointer flex items-center justify-center text-center aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out hover:blur-none p-4',
              scale === sm && 'lg:blur-[6px]',
              scale === md && 'lg:blur-[2px]',
              scale === lg && 'lg:blur-none',
              isHovered ? 'z-[5]' : 'z-[1]'
            )}
          >
            {work.company}
          </div>
        </ParallaxEffect>
      )}
    </>
  );
}
