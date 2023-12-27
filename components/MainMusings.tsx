'use client';

import { Musing } from '@/.contentlayer/generated';
import { Mdx } from './Mdx';
import { useEffect } from 'react';
import { useColor } from '@/providers/ColorProvider';
import SectionWriteup from './SectionWriteup';

type MainProps = {
  page: Musing;
  color?: string;
};

export default function MainMusings({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor(`#${page.colors?.split(', ')[0]}`);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col gap-8 lg:gap-0 justify-center'>
      <span className='block w-full h-24 lg:h-[calc(100vh/5)]' />
      <SectionWriteup title={'musings'} description={page.title} color={color}>
        <Mdx code={page.body.code} />
      </SectionWriteup>
      <section className='relative flex flex-col grow-1 items-start w-full pl-[70px] md:pl-[152px] lg:pl-0' />
    </main>
  );
}
