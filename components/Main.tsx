'use client';

import { useEffect } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import AsideContact from './AsideContact';
import AsideWorks from './AsideWorks';
import AsideMusings from './AsideMusings';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a');
  }, []);

  const renderAsideComponent = () => {
    switch (page.slugAsParams) {
      case 'contact':
        return (
          <SectionAside>
            <AsideContact />
          </SectionAside>
        );
      case 'works':
        return (
          <SectionAside>
            <AsideWorks />
          </SectionAside>
        );
      case 'musings':
        return (
          <SectionAside>
            <AsideMusings />
          </SectionAside>
        );
      case 'hello':
        return (
          <SectionAside>
            <AsideWorks />
          </SectionAside>
        );
      default:
        return <SectionAside />;
    }
  };

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.title}
        description={page.description}
        subText={page.subtext}
        preText={page.pretext}
        color={color}
      >
        <Mdx code={page.body.code} />
      </SectionWriteup>
      {renderAsideComponent()}
    </main>
  );
}
