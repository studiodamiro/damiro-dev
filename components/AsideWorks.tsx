'use client';

import { useEffect, useState } from 'react';
import { allWorks } from '@/.contentlayer/generated';
import useMeasure from 'react-use-measure';
import Emblem from './Emblem';

export default function AsideWorks() {
  let [ref, { width, height }] = useMeasure();
  const [gridRows, setGridRows] = useState(6);

  const [positions, setPositions] = useState<{ left: number; top: number }[]>([]);

  useEffect(() => {
    // setGridRows(width > height ? 7 : 5);
    setPositions(generatePositions(allWorks.length));
  }, [width, height, allWorks.length]);

  const getRandomPosition = (): { left: number; top: number } => ({
    left: Math.random() * (width - width / gridRows),
    top: Math.random() * (height - width / gridRows),
  });

  const doesOverlap = (pos1: { left: number; top: number }, pos2: { left: number; top: number }): boolean => {
    const emblemSize = width / gridRows;
    const horizontalOverlap = pos1.left < pos2.left + emblemSize && pos1.left + emblemSize > pos2.left;
    const verticalOverlap = pos1.top < pos2.top + emblemSize && pos1.top + emblemSize > pos2.top;
    return horizontalOverlap && verticalOverlap;
  };

  const generatePositions = (count: number): { left: number; top: number }[] => {
    const maxAttempts = 50;
    const positions: { left: number; top: number }[] = [];

    for (let i = 0; i < count; i++) {
      let newPosition = getRandomPosition();
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        if (!positions.some((pos) => doesOverlap(newPosition, pos))) {
          positions.push(newPosition);
          break;
        }
        newPosition = getRandomPosition();
      }
    }
    return positions;
  };

  return (
    <section ref={ref} className='relative w-full aspect-[4/3] lg:h-full bg-red-500/0 '>
      {allWorks.map((work, index) => {
        const position = positions[index];
        if (!position) return null;

        return (
          <Emblem
            key={index}
            work={work}
            width={width / gridRows}
            position={{ left: position.left, top: position.top }}
          />
        );
      })}
    </section>
  );
}
