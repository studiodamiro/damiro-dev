'use client';

import { useEffect, useState } from 'react';
import { allWorks } from '@/.contentlayer/generated';
import useMeasure from 'react-use-measure';
import shuffleArray from '@/lib/shuffleArray';
import WorkEmblem from './WorkEmblem';

export default function AsideWorks() {
  const gridRows = 6;
  const gridCols = 3;

  let [ref, { width }] = useMeasure();
  const [shuffledNumbers, setShuffledNumbers] = useState<number[]>([]);

  useEffect(() => {
    setShuffledNumbers(shuffleArray(gridRows * gridCols));
  }, []);

  return (
    <section ref={ref} className='relative w-full h-auto lg:h-full flex flex-col justify-center'>
      <div className='flex flex-wrap'>
        {shuffledNumbers.map((number) =>
          allWorks[number - 1] ? (
            <WorkEmblem key={number} work={allWorks[number - 1]} width={width / gridRows} />
          ) : (
            <WorkEmblem key={number} work={allWorks[number - 1]} width={width / gridRows} empty />
          )
        )}
      </div>
    </section>
  );
}
