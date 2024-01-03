'use client';

import { useEffect, useState } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { usePath } from '@/providers/PathProvider';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import AsideContact from './AsideContact';
import AsideWorks from './AsideWorks';
import AsideMusings from './AsideMusings';
import AsideAbout from './AsideAbout';
import { cn } from '@/lib/utils';
import useMeasure from 'react-use-measure';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  const { setCover } = usePath();
  const { color, setColor } = useColor();
  let [ref, { width }] = useMeasure();

  useEffect(() => {
    setColor && setColor('#71717a'); // Default primary color zinc-500

    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderAsideComponent = () => {
    switch (page.slugAsParams) {
      case 'hello':
        return (
          <SectionAside paddedTop={false}>
            <AsideWorks />
          </SectionAside>
        );
      case 'about':
        return (
          <SectionAside paddedTop>
            <AsideAbout />
          </SectionAside>
        );
      case 'works':
        return (
          <SectionAside paddedTop={false}>
            <AsideWorks />
          </SectionAside>
        );
      case 'musings':
        return (
          <SectionAside>
            <AsideMusings />
          </SectionAside>
        );
      case 'contact':
        return (
          <SectionAside paddedTop>
            <AsideContact />
          </SectionAside>
        );
      default:
        return <SectionAside />;
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 1024 && (page.slugAsParams === 'hello' || page.slugAsParams === 'works'));
  });

  return (
    <main ref={ref} className={cn(isMobile ? 'flex-col-reverse' : 'flex-col', 'w-full min-h-screen flex lg:flex-row')}>
      <SectionWriteup
        title={page.title}
        description={page.description}
        subText={page.subtext}
        preText={page.pretext}
        color={color}
        slug={page.slugAsParams}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
      {renderAsideComponent()}
    </main>
  );
}
