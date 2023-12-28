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
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.title}
        preText={page.pretext}
        description={page.description}
        subText={page.subtext}
        color={color}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
    </main>
  );
}
