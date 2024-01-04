import { useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';
import getRandomRotation from '@/lib/getRandomRotation';
import ParallaxEffect from './ParallaxEffect';

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

  useEffect(() => {
    if (!work) return;
    if (work.works.split(', ')[0] === "web dev't") {
      setScale(0.9);
    } else if (work.works.split(', ')[0] === 'identity') {
      setScale(0.6);
    } else {
      setScale(0.4);
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
        <ParallaxEffect intensity={scale}>
          <div
            onClick={() => setPath(work.slug)}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            style={{
              width: `${width}px`,
              scale: scale,
              backgroundColor: isHovered ? `#${work.colors.split(', ')[0]}` : '#71717a33',
              rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
            }}
            className='cursor-pointer flex items-center justify-center text-center aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out'
          >
            {work.company}
          </div>
        </ParallaxEffect>
      )}
    </>
  );
}
