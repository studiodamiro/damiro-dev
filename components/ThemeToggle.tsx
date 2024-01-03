'use client';

import { useTheme } from 'next-themes';
import { useColor } from '@/providers/ColorProvider';
import { Hydrate } from './Hydrate';
import { cn } from '@/lib/utils';
import SunRays from './assets/theme/SunRays';
import Star from './assets/theme/Star';
import Commet from './assets/theme/Commet';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { lightColor, darkColor } = useColor();
  const themeColor = theme === 'light' ? lightColor : darkColor;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='transition-all duration-500 ease-in relative w-6 h-10 rounded-full bg-zinc-700 dark:bg-zinc-300 overflow-hidden'
    >
      <span className='sr-only'>Toggle Theme Button</span>

      {/* SUN RAYS */}
      <Hydrate>
        <SunRays
          color={themeColor!}
          className={cn(
            'transition-all duration-500 ease-in absolute left-1/2 -translate-x-1/2 w-5 h-5',
            theme === 'light' ? 'top-12' : 'top-0.5'
          )}
        />
      </Hydrate>

      {/* SUN / MOON */}
      <Hydrate>
        <span
          style={{ backgroundColor: themeColor }}
          className={cn(
            'transition-all duration-500 delay-300 ease-in absolute left-1/2 -translate-x-1/2 rounded-full opacity-100',
            theme === 'light' ? 'w-4 h-4 top-5' : 'w-3 h-3 top-1.5'
          )}
        />
      </Hydrate>

      {/* EARTH */}
      <Hydrate>
        <span
          className={cn(
            'transition-all duration-500 ease-in absolute w-3 h-3 rounded-full top-5 bg-zinc-700 dark:bg-zinc-300',
            theme === 'light' ? 'right-0.5' : 'right-3'
          )}
        />
      </Hydrate>

      {/* MOUNTAINS */}
      <Hydrate>
        <span
          style={{ backgroundColor: themeColor }}
          className={cn(
            'transition-all duration-500 ease-in absolute w-6 h-6 -rotate-45 opacity-50 -left-1.5',
            theme === 'light' ? '-bottom-7' : '-bottom-4'
          )}
        />
      </Hydrate>

      <Hydrate>
        <span
          style={{ backgroundColor: themeColor }}
          className={cn(
            'transition-all duration-500 delay-300 ease-in absolute w-6 h-6 -rotate-45 -right-1.5',
            theme === 'light' ? '-bottom-7' : '-bottom-3'
          )}
        />
      </Hydrate>

      {/* STARS */}
      <Hydrate>
        <Star
          color={themeColor}
          className={cn(
            'transition-all duration-300 ease-in absolute top-0.5 left-1.5 w-1.5',
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          )}
        />
      </Hydrate>
      <Hydrate>
        <Star
          color={themeColor}
          className={cn(
            'transition-all duration-300 ease-in absolute top-3 right-1 w-1',
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          )}
        />
      </Hydrate>

      {/* COMET */}
      <Hydrate>
        <Commet
          color={themeColor}
          className={cn(
            'transition-all duration-500 delay-700 ease-in absolute w-3',
            theme === 'light' ? 'opacity-100 left-2 top-0' : 'opacity-0 left-6 -top-3'
          )}
        />
      </Hydrate>
    </button>
  );
}
