'use client';

import Link from 'next/link';
import Logo from './Logo';
import { cn } from '@/lib/utils';

type CopyrightProps = {
  logoColor?: string;
  rotate?: boolean;
};

export default function Copyright({ logoColor = '#fa8072', rotate = false }: CopyrightProps) {
  return (
    <div className='fixed w-[800px] ml-0 bottom-0 p-4 md:p-8'>
      <div
        className={cn(
          'flex gap-6 min-w-full h-[116px] items-center justify-start text-4xl uppercase tracking-widest scale-[35%] origin-left absolute ',
          rotate
            ? 'flex-row-reverse origin-bottom-right rotate-90 -translate-y-full -translate-x-full -bottom-20'
            : 'flex-row -bottom-8'
        )}
      >
        <Link href='/' className={cn('opacity-80', rotate && 'rotate-180')}>
          Damiro
        </Link>
        <Logo color={logoColor} />
        <Link href='/' className={cn('opacity-80 whitespace-nowrap', rotate && 'rotate-180')}>
          <span className='hidden md:inline'>All rights reserved </span>© 2023
        </Link>
      </div>
    </div>
  );
}
