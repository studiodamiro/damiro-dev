import { allWorks } from '@/.contentlayer/generated';
import { projectEmblems } from '@/data/projectEmblems';
import { cn } from '@/lib/utils';
import { usePath } from '@/providers/PathProvider';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, buttonVariants } from './ui/button';

type PrevAndNextButtonsProps = {
  className?: string;
};

export default function PrevAndNextButtons({ className }: PrevAndNextButtonsProps) {
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
        <div className={cn('flex flex-col items-start md:items-end pt-10', className)}>
          <span className='allcap-span mb-1.5 pr-0.5'>MORE PROJECTS</span>
          <div className='flex flex-wrap md:flex-col lg:flex-row gap-2 md:items-end md:justify-end'>
            {allWorks[prevIndex] && (
              <div
                onClick={() => setPath(allWorks[prevIndex].slugAsParams)}
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'cursor-pointer flex flex-row md:flex-row-reverse gap-1.5 items-center py-6 pl-2 pr-4 md:pl-4 md:pr-2'
                )}
              >
                <div style={{ width: '40px' }} className='w-3 aspect-square'>
                  {RenderPrevEmblem && (
                    <RenderPrevEmblem
                      color={theme === 'light' ? '#09090b' : '#fafafa'}
                      secColor={theme === 'light' ? '#52525b' : '#a1a1aa'}
                    />
                  )}
                </div>
                <div className='flex flex-col items-start md:items-end justify-center gap-0'>
                  <span className='text-xs font-semibold tracking-widest uppercase'>PREVIOUS</span>
                  <span className='font-fauna text-sm'>{allWorks[prevIndex].company}</span>
                </div>
              </div>
            )}

            {allWorks[nextIndex] && (
              <div
                onClick={() => setPath(allWorks[nextIndex].slugAsParams)}
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'cursor-pointer flex flex-row md:flex-row-reverse gap-1.5 items-center py-6 pl-2 pr-4 md:pl-4 md:pr-2'
                )}
              >
                <div style={{ width: '40px' }} className='w-3 aspect-square'>
                  {RenderNextEmblem && (
                    <RenderNextEmblem
                      color={theme === 'light' ? '#09090b' : '#fafafa'}
                      secColor={theme === 'light' ? '#52525b' : '#a1a1aa'}
                    />
                  )}
                </div>
                <div className='flex flex-col items-start md:items-end justify-center gap-0'>
                  <span className='text-xs font-semibold tracking-widest uppercase'>NEXT</span>
                  <span className='font-fauna text-sm'>{allWorks[nextIndex].company}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
