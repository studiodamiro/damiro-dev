'use client';

import { useEffect } from 'react';
import { Mdx } from '@/components/Mdx';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import PageWorks from './PageWorks';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a'); // TODO: Change with page.color
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center'>
      <span className='block lg:hidden w-full h-24' />
      <SectionWriteup title={page.title} description={page.description} color={color} />
      <section className='relative flex flex-col grow-1 items-start w-full pl-[70px] md:pl-[152px] lg:pl-0'>
        <div className='w-full md:w-4/5 lg:w-full xl:w-2/3 pl-0 lg:pl-8 pr-4 md:pr-8 pb-8 flex flex-col gap-4'>
          <PageWorks />
        </div>
      </section>
    </main>
  );
}
