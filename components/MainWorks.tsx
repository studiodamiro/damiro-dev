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
    <main className='w-full min-h-screen flex flex-col lg:flex-row'>
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
          {(page.technologies || page.tools) && <div className='h-10 w-full' />}
          <ListProject page={page} />
        </div>
      </SectionWriteup>

      <PrevAndNextButtons />

      <SectionAside fixed>
        <div className='block lg:hidden absolute bottom-9 w-full pl-[68px] md:pl-[152px] bg-red-500/40'>
          {page.technologies && <ListTech page={page} />}
          {page.tools && <ListTools page={page} />}
          {(page.technologies || page.tools) && <div className='h-8 md:h-10 w-full' />}
          <ListProject page={page} />
        </div>
      </SectionAside>
    </main>
  );
}
