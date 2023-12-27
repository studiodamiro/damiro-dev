'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import SectionWriteup from './SectionWriteup';
import PageWorks from './PageWorks';
import SectionAside from './SectionAside';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor(`#${page.colors.split(', ')[0]}`);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.works.split(', ')[0]}
        description={page.description}
        subText={page.subtext}
        preText={page.company}
        color={color}
      >
        <span>TECHNOLOGIES:</span>
        {page.technologies.split(', ').map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </SectionWriteup>
      <SectionAside>
        <PageWorks />
      </SectionAside>
    </main>
  );
}
