'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { Mdx } from './Mdx';
import { usePath } from '@/providers/PathProvider';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import AsideWorks from './AsideWorks';
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
    setCover(false);
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
        <div className='h-4 w-full' />
        <ListTech page={page} />
        <div className='h-10 w-full' />
        <ListProject page={page} />
      </SectionWriteup>
      <SectionAside fixed paddedTop={false}>
        <AsideWorks />
      </SectionAside>
    </main>
  );
}
