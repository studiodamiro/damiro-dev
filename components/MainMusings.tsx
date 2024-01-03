'use client';

import { Musing } from '@/.contentlayer/generated';
import { Mdx } from './Mdx';
import { useEffect } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { usePath } from '@/providers/PathProvider';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import AsideMusings from './AsideMusings';

type MainProps = {
  page: Musing;
  color?: string;
};

export default function MainMusings({ page }: MainProps) {
  const { setCover } = usePath();
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor(`#${page.colors?.split(', ')[0]}`);

    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.tags?.split(', ')[0] === 'project' ? 'work' : 'musings'}
        preText={page.tags?.split(', ').join(' / ')}
        description={page.title}
        smallDesc={page.description}
        subText={page.subtext}
        slug={page.slugAsParams}
        color={color}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
      <SectionAside fixed padded={false}>
        <AsideMusings />
      </SectionAside>
    </main>
  );
}
