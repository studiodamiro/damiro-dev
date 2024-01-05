'use client';

import { useEffect, useState } from 'react';
import { allWorks } from '@/.contentlayer/generated';
import useMeasure from 'react-use-measure';
import shuffleArray from '@/lib/shuffleArray';
import WorkEmblem from './WorkEmblem';

export default function AsideWorks() {
  let [ref, { width, height }] = useMeasure();
  const [gridRows, setGridRows] = useState(6);
  const [shuffledNumbers, setShuffledNumbers] = useState<number[]>([]);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  useEffect(() => {
    setShuffledNumbers(shuffleArray(16));
    setGridRows(width > height ? 6 : 5);
  }, [width, height]);

  useEffect(() => {
    console.log('ID', hoveredWork);
  }, [hoveredWork]);

  return (
    <section ref={ref} className='relative w-full h-auto lg:h-full flex flex-col justify-center '>
      <div className='flex flex-wrap z-0'>
        {shuffledNumbers.map((number) =>
          allWorks[number - 1] ? (
            <WorkEmblem
              key={number}
              work={allWorks[number - 1]}
              width={width / gridRows}
              enabled={window.innerWidth > 1024}
            />
          ) : (
            <WorkEmblem key={number} work={allWorks[number - 1]} width={width / gridRows} empty />
          )
        )}
      </div>
    </section>
  );
}
