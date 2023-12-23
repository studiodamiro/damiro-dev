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
    <div className=''>
      <div
        className={cn(
          'flex gap-4 w-full items-center justify-start text-4xl scale-[35%] origin-left',
          rotate ? 'flex-row-reverse origin-bottom-right rotate-90 -translate-y-full -translate-x-full' : 'flex-row'
        )}
      >
        <Link href='/' className={cn('opacity-80 whitespace-nowrap', rotate && 'rotate-180')}>
          <span className='hidden md:inline'>Copyright </span>© 2023
        </Link>
        <Logo color={logoColor} />
        <Link href='/' className={cn('opacity-80', rotate && 'rotate-180')}>
          Damiro
        </Link>
      </div>
    </div>
  );
}
