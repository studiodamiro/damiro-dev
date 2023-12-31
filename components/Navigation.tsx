'use client';

import { usePath } from '@/providers/PathProvider';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export default function Navigation({ className }: { className?: string }) {
  const { setPath } = usePath();

  return (
    <nav
      className={cn(
        'flex gap-2 md:gap-4 items-center justify-center text-sm font-medium text-zinc-800 dark:text-zinc-200',
        className
      )}
    >
      <span
        onClick={() => setPath('/about')}
        className='cursor-pointer bg-red-500 flex items-center justify-center h-6 aspect-square'
      >
        a
      </span>
      <span
        onClick={() => setPath('/works')}
        className='cursor-pointer bg-red-500 flex items-center justify-center h-6 aspect-square'
      >
        w
      </span>
      <span
        onClick={() => setPath('/contact')}
        className='cursor-pointer bg-red-500 flex items-center justify-center h-6 aspect-square'
      >
        c
      </span>
      <ThemeToggle />
    </nav>
  );
}
