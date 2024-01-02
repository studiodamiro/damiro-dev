'use client';

import { usePath } from '@/providers/PathProvider';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

type NavigationProps = {
  className?: string;
  scrollY?: number;
};

export default function Navigation({ scrollY, className }: NavigationProps) {
  const { setPath } = usePath();

  return (
    <nav
      className={cn(
        'flex gap-2 items-center justify-center text-sm font-medium text-zinc-800 dark:text-zinc-200',
        className
      )}
    >
      {/* <span
        onClick={() => setPath('/about')}
        className={cn(
          'cursor-pointer bg-zinc-500/50 flex items-center justify-center rounded-full h-6 aspect-square opacity-100 transition-all duration-300 ease-out delay-150',
          scrollY! > 10 && 'translate-x-14 md:translate-x-0 opacity-100'
        )}
      >
        a
      </span>
      <span
        onClick={() => setPath('/works')}
        className={cn(
          'cursor-pointer bg-zinc-500/50 flex items-center justify-center rounded-full h-6 aspect-square opacity-100 transition-all duration-300 ease-out delay-300',
          scrollY! > 10 && 'translate-x-14 md:translate-x-0 opacity-100'
        )}
      >
        w
      </span>
      <span
        onClick={() => setPath('/contact')}
        className={cn(
          'cursor-pointer bg-zinc-500/50 flex items-center justify-center rounded-full h-6 aspect-square opacity-100 transition-all duration-300 ease-out delay-100',
          scrollY! > 10 && 'translate-x-14 md:translate-x-0 opacity-100'
        )}
      >
        c
      </span> */}
      <span
        className={cn(
          'transition-all duration-300 ease-out opacity-100',
          scrollY! > 10 && 'translate-x-14 md:translate-x-0 opacity-100'
        )}
      >
        <ThemeToggle />
      </span>
    </nav>
  );
}
