'use client';

import { useEffect, useState } from 'react';
import { allWorks } from '@/.contentlayer/generated';
import useMeasure from 'react-use-measure';
import shuffleArray from '@/lib/shuffleArray';
import WorkEmblem from './WorkEmblem';

export default function AsideWorks() {
  const gridRows = 6;
  const gridCols = 3;

  const [shuffledNumbers, setShuffledNumbers] = useState<number[]>([]);
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    setShuffledNumbers(shuffleArray(gridRows * gridCols));
  }, []);

  return (
    <section ref={ref} className='relative w-full h-auto lg:h-full flex flex-col justify-center bg-red-500/5'>
      <div className='flex flex-wrap'>
        {shuffledNumbers.map((number) =>
          allWorks[number - 1] ? (
            <WorkEmblem key={number} index={number - 1} width={width / gridRows} />
          ) : (
            <WorkEmblem key={number} empty width={width / gridRows} />
          )
        )}
      </div>
    </section>
  );
}
