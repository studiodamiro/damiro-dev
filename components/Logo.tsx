'use client';

import { cn } from '@/lib/utils';
import { useColor } from '@/providers/ColorProvider';
import { useTheme } from 'next-themes';
import { usePath } from '@/providers/PathProvider';

type LogoProps = {
  damiro?: boolean;
  className?: string;
};

export default function Logo({ damiro = false, className }: LogoProps) {
  const { theme } = useTheme();
  const { color, lightColor, darkColor } = useColor();
  const { setPath } = usePath();

  return (
    <div
      onClick={() => setPath('/')}
      className={cn(
        'relative w-[54px] aspect-square flex flex-row gap-4 items-center justify-center origin-left cursor-pointer',
        className
      )}
    >
      {/* CIRCLES */}
      <div className='absolute w-[54px] aspect-square'>
        <div
          style={{ borderColor: theme === 'dark' ? lightColor : darkColor }}
          className='absolute w-[54px] aspect-square rounded-full border-[2px] transition-colors duration-300 ease-out'
        />
        <div
          style={{ borderColor: theme === 'dark' ? lightColor : darkColor }}
          className='absolute w-[42px] aspect-square rounded-full border-[2px] left-0 top-1/2 -translate-y-1/2 transition-colors duration-300 ease-out'
        />
        <div
          style={{ borderColor: theme === 'dark' ? lightColor : darkColor }}
          className='absolute w-[30px] aspect-square rounded-full border-[2px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-colors duration-300 ease-out'
        />
      </div>

      {/* NAME DAMIRO */}
      <span
        style={{ color: theme === 'dark' ? lightColor : darkColor }}
        className={cn(
          !damiro && 'hidden',
          'relative text-3xl translate-x-full -ml-8 transition-colors duration-300 ease-out font-fauna'
        )}
      >
        Damiro
      </span>
    </div>
  );
}
