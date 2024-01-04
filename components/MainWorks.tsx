'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { Mdx } from './Mdx';
import { usePath } from '@/providers/PathProvider';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import ListTech from './ListTech';
import ListProject from './ListProject';
import ListTools from './ListTools';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  const { setCover } = usePath();
  const { color, setColor } = useColor();

  useEffect(() => {
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
        color={color}
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
