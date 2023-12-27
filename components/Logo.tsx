'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useColor } from '@/providers/ColorProvider';

type LogoProps = {
  damiro?: boolean;
  className?: string;
};

export default function Logo({ damiro = false, className }: LogoProps) {
  const { color } = useColor();

  return (
    <Link
      href='/'
      className={cn(
        'relative w-[54px] aspect-square flex flex-row gap-4 items-center justify-center origin-left',
        className
      )}
    >
      <div className='absolute w-[54px] aspect-square'>
        <div
          style={{ borderColor: color }}
          className='absolute w-[54px] aspect-square rounded-full border-[2px] transition-colors duration-300 ease-out'
        />
        <div
          style={{ borderColor: color }}
          className='absolute w-[42px] aspect-square rounded-full border-[2px] left-0 top-1/2 -translate-y-1/2 transition-colors duration-300 ease-out'
        />
        <div
          style={{ borderColor: color }}
          className='absolute w-[30px] aspect-square rounded-full border-[2px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-colors duration-300 ease-out'
        />
      </div>
      <span
        style={{ color: color }}
        className={cn(
          !damiro && 'hidden',
          'relative text-3xl translate-x-full -ml-8 transition-colors duration-300 ease-out font-fauna'
        )}
      >
        Damiro
      </span>
    </Link>
  );
}
