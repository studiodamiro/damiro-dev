'use client';

import Logo from './Logo';
import { cn } from '@/lib/utils';
import { usePath } from '@/providers/PathProvider';

type CopyrightProps = {
  rotate?: boolean;
};

export default function Copyright({ rotate = false }: CopyrightProps) {
  const { setPath } = usePath();
  const year = new Date().getFullYear();

  return (
    <div className='fixed ml-0 bottom-0 p-4 md:p-8 z-30'>
      <div
        className={cn(
          'flex gap-6 min-w-full h-[116px] items-center justify-start text-4xl uppercase tracking-widest scale-[35%] origin-left absolute',
          rotate
            ? 'flex-row-reverse origin-bottom-right rotate-90 -translate-y-full -translate-x-full -bottom-20'
            : 'flex-row -bottom-8'
        )}
      >
        {/* TODO: CHECK LINKS */}
        <div onClick={() => setPath('/')} className={cn('opacity-80 cursor-pointer', rotate && 'rotate-180')}>
          Damiro
        </div>
        <Logo />
        <div
          onClick={() => setPath('/')}
          className={cn('opacity-80 whitespace-nowrap cursor-pointer', rotate && 'rotate-180')}
        >
          <span className='hidden md:inline'>All rights reserved </span>© 2003 - {year}
        </div>
      </div>
    </div>
  );
}
