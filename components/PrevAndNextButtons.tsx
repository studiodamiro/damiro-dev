import { allWorks } from '@/.contentlayer/generated';
import { projectEmblems } from '@/data/projectEmblems';
import { cn } from '@/lib/utils';
import { usePath } from '@/providers/PathProvider';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PrevAndNextButtons() {
  const url = usePathname().split('/');
  const [pagename, setPagename] = useState('');
  const [category, setCategory] = useState('');
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  const { theme } = useTheme();
  const { setPath } = usePath();

  const RenderPrevEmblem =
    allWorks[prevIndex] && projectEmblems[allWorks[prevIndex].slugAsParams as keyof typeof projectEmblems];
  const RenderNextEmblem =
    allWorks[nextIndex] && projectEmblems[allWorks[nextIndex].slugAsParams as keyof typeof projectEmblems];

  useEffect(() => {
    setPagename(url[url.length - 1]);
    setCategory(url[url.length - 2]);
    setIndex(allWorks.findIndex((work) => work.slugAsParams === pagename));
    setPrevIndex(index - 1 === -1 ? allWorks.length - 1 : index - 1);
    setNextIndex(index + 1 === allWorks.length ? 0 : index + 1);
  }, [url]);

  return (
    <>
      {category === 'works' && (
        <div className='z-[1] absolute bottom-8 right-4 md:right-8 flex flex-col gap-2 items-end'>
          {allWorks[prevIndex] && (
            <div
              onClick={() => setPath(allWorks[prevIndex].slugAsParams)}
              className={cn(
                'cursor-pointer flex flex-row gap-1.5 items-center justify-end py-1.5 pl-4 pr-2 rounded-sm',
                'bg-white/30 hover:bg-white/80 dark:bg-black/30 dark:hover:bg-black/80 transition-colors duration-300 ease-out'
              )}
            >
              <div className='flex flex-col items-end justify-center gap-0'>
                <span className='text-xs font-semibold tracking-widest uppercase'>Previous</span>
                <span className='font-fauna text-sm'>{allWorks[prevIndex].company}</span>
              </div>
              <div style={{ width: '40px' }} className='w-3 aspect-square'>
                {RenderPrevEmblem && (
                  <RenderPrevEmblem
                    color={theme === 'light' ? '#09090b' : '#fafafa'}
                    secColor={theme === 'light' ? '#52525b' : '#a1a1aa'}
                  />
                )}
              </div>
            </div>
          )}

          {allWorks[nextIndex] && (
            <div
              onClick={() => setPath(allWorks[nextIndex].slugAsParams)}
              className={cn(
                'cursor-pointer flex flex-row gap-1.5 items-center justify-end py-1.5 pl-4 pr-2 rounded-sm',
                'bg-white/30 hover:bg-white/80 dark:bg-black/30 dark:hover:bg-black/80 transition-colors duration-300 ease-out'
              )}
            >
              <div className='flex flex-col items-end justify-center gap-0'>
                <span className='text-xs font-semibold tracking-widest uppercase'>Next</span>
                <span className='font-fauna text-sm'>{allWorks[nextIndex].company}</span>
              </div>
              <div style={{ width: '40px' }} className='w-3 aspect-square'>
                {RenderNextEmblem && (
                  <RenderNextEmblem
                    color={theme === 'light' ? '#09090b' : '#fafafa'}
                    secColor={theme === 'light' ? '#52525b' : '#a1a1aa'}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
