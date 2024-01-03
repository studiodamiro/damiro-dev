import { allWorks } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';
import { useState } from 'react';

type WorkEmblemProps = {
  width: number;
  index?: number | undefined;
  empty?: boolean;
};

const getRandomRotate = (number: number) => {
  const positiveLimit = number;
  const negativeLimit = -number;
  return Math.floor(Math.random() * (positiveLimit - negativeLimit + 1)) + negativeLimit;
};

export default function WorkEmblem({ index, width, empty = false }: WorkEmblemProps) {
  const { setPath } = usePath();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {empty ? (
        <span
          style={{ width: `${width}px` }}
          className='flex items-center justify-center text-center aspect-square bg-transparent'
        />
      ) : (
        <span
          onClick={() => index !== undefined && setPath(allWorks[index].slug)}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          style={{ width: `${width}px`, scale: 0.75, rotate: isHovered ? '0deg' : `${getRandomRotate(10)}deg` }}
          className='cursor-pointer bg-red-400/30 flex items-center justify-center text-center aspect-square rounded-md overflow-hidden transition-all duration-300 ease-out'
        >
          {index !== undefined && allWorks[index].company}
        </span>
      )}
    </>
  );
}
