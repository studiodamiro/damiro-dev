'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { useTheme } from 'next-themes';
import { usePath } from '@/providers/PathProvider';
import { projectFigures } from '@/data/projectFigures';
import { projectBackgrounds } from '@/data/projectBackgrounds';
import { Mdx } from './Mdx';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import ListTech from './ListTech';
import ListProject from './ListProject';
import ListTools from './ListTools';
import PrevAndNextButtons from './PrevAndNextButtons';
import { useSize } from '@/providers/SizeProvider';
import useMeasure from 'react-use-measure';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  let [ref, { width, height }] = useMeasure();
  const { setW, setH } = useSize();
  const { setCover } = usePath();
  const { theme } = useTheme();
  const { setColor, setColorArray, lightColor, darkColor } = useColor();

  useEffect(() => {
    setColorArray && setColorArray(page.colors.split(', '));
    setColor && setColor(`#${page.colors.split(', ')[0]}`);
    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setW(width);
    setH(height);
  }, [width, height]);

  const RenderFigure = projectFigures[page.slugAsParams as keyof typeof projectFigures];
  const RenderBackground = projectBackgrounds[page.slugAsParams as keyof typeof projectBackgrounds];

  return (
    <main ref={ref} className='w-full min-h-screen flex flex-col lg:flex-row overflow-x-hidden overflow-y-scroll'>
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

      <SectionAside fixed className='lg:h-screen lg:flex items-center lg:pointer-events-none'>
        {RenderFigure && <RenderFigure />}
        <div className='block lg:hidden w-full pl-[70px] md:pl-[152px] my-8'>
          {page.technologies && <ListTech page={page} className='w-full md:w-2/3' />}
          {page.tools && <ListTools page={page} className='w-full md:w-2/3' />}
          {(page.technologies || page.tools) && <div className='h-8 md:h-10 w-full' />}
          <ListProject page={page} />
          <PrevAndNextButtons className='md:hidden pr-4' />
        </div>
      </SectionAside>

      {RenderBackground && <RenderBackground />}
    </main>
  );
}
