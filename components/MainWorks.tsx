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
          <ListTech page={page} />
          <div className='h-10 w-full' />
          <ListProject page={page} />
        </div>
      </SectionWriteup>
      <SectionAside fixed padded={false}>
        <div className='w-full aspect-[3/4] sm:aspect-square md:aspect-[4/3] lg:h-full'>
          <div className='block lg:hidden absolute bottom-9 pl-[70px] md:pl-[152px] pr-8 w-full sm:w-4/5 md:w-3/4'>
            {page.body.raw && <div className='h-4 w-full' />}
            <ListTech page={page} />
            <div className='h-8 md:h-10 w-full' />
            <ListProject page={page} />
          </div>
        </div>
      </SectionAside>
    </main>
  );
}
