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
import { projectFigures } from '@/data/projectFigures';

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

  const RenderFigure = page && projectFigures[page.slugAsParams as keyof typeof projectFigures];

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
          {page.body.raw && <div className='hidden md:block h-4 w-full' />}
          <ListProject page={page} />
        </div>
      </SectionWriteup>

      <span className='z-[5] fixed bottom-8 right-8 flex flex-col items-end w-full md:w-1/3 lg:w-1/3'>
        {page.technologies && <ListTech page={page} className='hidden lg:flex flex-col items-end w-full' />}
        {page.tools && <ListTools page={page} className='hidden lg:flex flex-col items-end w-full' />}
        <PrevAndNextButtons className='hidden md:flex flex-col items-end bottom-8 right-8' />
      </span>

      <SectionAside fixed className='lg:h-screen lg:flex items-center'>
        {RenderFigure && <RenderFigure />}
        <div className='block lg:hidden w-full pl-[70px] md:pl-[152px] my-8'>
          {page.technologies && <ListTech page={page} className='w-2/3' />}
          {page.tools && <ListTools page={page} />}
          {(page.technologies || page.tools) && <div className='h-8 md:h-10 w-full' />}
          <ListProject page={page} />
          <PrevAndNextButtons className='md:hidden pr-4' />
        </div>
      </SectionAside>
    </main>
  );
}
