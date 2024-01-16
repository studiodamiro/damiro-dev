'use client';

import { useEffect, useState } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { usePath } from '@/providers/PathProvider';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import AsideContact from './AsideContact';
import AsideWorks from './AsideWorks';
import AsideMusings from './AsideMusings';
import AsideAbout from './AsideAbout';
import useMeasure from 'react-use-measure';
import { useSize } from '@/providers/SizeProvider';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  let [ref, { width, height }] = useMeasure();

  const { theme } = useTheme();
  const { setColor, setColorArray, lightColor, darkColor } = useColor();
  const { setW, setH } = useSize();
  const { setCover } = usePath();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setColorArray && setColorArray(['52525b', 'd4d4d8', 'a1a1aa', '3f3f46']);
    setColor && setColor('#52525b');
    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setW(width);
    setH(height);
    setIsMobile(width < 1024 && (page.slugAsParams === 'hello' || page.slugAsParams === 'works'));
  }, [width, height]);

  return (
    <main ref={ref} className={cn(isMobile ? 'flex-col-reverse' : 'flex-col', 'w-full min-h-screen flex lg:flex-row')}>
      <SectionWriteup
        title={page.title}
        description={page.description}
        subText={page.subtext}
        preText={page.pretext}
        color={theme === 'light' ? darkColor : lightColor}
        slug={page.slugAsParams}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
      {renderAsideComponent(page.slugAsParams, width)}
    </main>
  );
}

const renderAsideComponent = (slug: string, width: number) => {
  switch (slug) {
    case 'hello':
      return (
        <SectionAside margined={width > 1024}>
          <AsideWorks />
        </SectionAside>
      );
    case 'about':
      return (
        <SectionAside padded margined>
          <AsideAbout />
        </SectionAside>
      );
    case 'works':
      return (
        <SectionAside margined={width > 1024}>
          <AsideWorks />
        </SectionAside>
      );
    case 'musings':
      return (
        <SectionAside padded margined>
          <AsideMusings />
        </SectionAside>
      );
    case 'contact':
      return (
        <SectionAside padded margined>
          <AsideContact />
        </SectionAside>
      );
    default:
      return <SectionAside />;
  }
};
