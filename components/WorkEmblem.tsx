import { useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';

type WorkEmblemProps = {
  work: Work;
  width: number;
  empty?: boolean;
};

const getRandomRotation = (range: number) => {
  const min = -range;
  const max = range;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function WorkEmblem({ work, width, empty = false }: WorkEmblemProps) {
  const { setPath } = usePath();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {empty ? (
        <div
          style={{ width: `${width}px` }}
          className='flex items-center justify-center text-center aspect-square bg-transparent'
        />
      ) : (
        <div
          onClick={() => setPath(work.slug)}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          style={{
            width: `${width}px`,
            scale: 0.75,
            backgroundColor: isHovered ? `#${work.colors.split(', ')[0]}` : '#71717a33',
            rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
          }}
          className='cursor-pointer flex items-center justify-center text-center aspect-square rounded-lg overflow-hidden transition-all duration-300 ease-out'
        >
          {work.company}
        </div>
      )}
    </>
  );
}
