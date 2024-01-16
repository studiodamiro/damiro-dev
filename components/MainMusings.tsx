'use client';

import { Musing } from '@/.contentlayer/generated';
import { Mdx } from './Mdx';
import { useEffect } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { usePath } from '@/providers/PathProvider';
import { useTheme } from 'next-themes';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import AsideMusings from './AsideMusings';
import useMeasure from 'react-use-measure';
import { useSize } from '@/providers/SizeProvider';

type MainProps = {
  page: Musing;
  color?: string;
};

export default function MainMusings({ page }: MainProps) {
  let [ref, { width, height }] = useMeasure();
  const { setW, setH } = useSize();
  const { setCover } = usePath();
  const { theme } = useTheme();
  const { lightColor, darkColor } = useColor();

  useEffect(() => {
    setW(width);
    setH(height);
  }, [width, height]);

  useEffect(() => {
    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main ref={ref} className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.tags?.split(', ')[0] === 'project' ? 'work' : 'musings'}
        preText={page.tags?.split(', ').join(' / ')}
        description={page.title}
        smallDesc={page.description}
        subText={page.subtext}
        slug={page.slugAsParams}
        color={theme === 'light' ? darkColor : lightColor}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
      <SectionAside fixed padded>
        {/* <AsideMusings /> */}
      </SectionAside>
    </main>
  );
}
