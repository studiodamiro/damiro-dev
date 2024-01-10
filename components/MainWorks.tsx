'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { Mdx } from './Mdx';
import { useTheme } from 'next-themes';
import { usePath } from '@/providers/PathProvider';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import ListTech from './ListTech';
import ListProject from './ListProject';
import ListTools from './ListTools';
import PrevAndNextButtons from './PrevAndNextButtons';
import { cn } from '@/lib/utils';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  const { setCover } = usePath();
  const { theme } = useTheme();
  const { setColor, setColorArray, lightColor, darkColor } = useColor();

  useEffect(() => {
    setColorArray && setColorArray(page.colors.split(', '));
    setColor && setColor(`#${page.colors.split(', ')[0]}`);
    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row '>
      <SectionWriteup
        title={page.company}
        description={page.description}
        subText={page.subtext}
        preText={page.works.split(', ').join(' / ')}
        color={theme === 'light' ? darkColor : lightColor}
      >
        <Mdx code={page.body.code} />
        <div className='lg:block hidden'>
          {page.body.raw && <div className='h-4 w-full' />}
          {page.technologies && <ListTech page={page} />}
          {page.tools && <ListTools page={page} />}
          {(page.technologies || page.tools) && <div className='h-10 w-1/2' />}
          <ListProject page={page} />
        </div>
      </SectionWriteup>

      <span className='lg:block hidden'>
        <PrevAndNextButtons className='z-[1]' />
      </span>

      <SectionAside fixed padded>
        <div className={cn('w-full aspect-[4/3] bg-pink-500/20')} />
        <div className='block lg:hidden w-full pl-[70px] md:pl-[152px] my-8'>
          {page.technologies && <ListTech page={page} />}
          {page.tools && <ListTools page={page} />}
          {(page.technologies || page.tools) && <div className='h-8 md:h-10 w-full' />}
          <ListProject page={page} />
          <PrevAndNextButtons />
        </div>
      </SectionAside>
    </main>
  );
}
