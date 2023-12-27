'use client';

import { useEffect } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import PageContact from './PageContact';
import PageWorks from './PageWorks';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a'); // TODO: Change with page.color
  }, []);

  const renderAsideComponent = () => {
    switch (page.slugAsParams) {
      case 'contact':
        return (
          <SectionAside>
            <PageContact />
          </SectionAside>
        );
      case 'works':
        return (
          <SectionAside paddedTop={false}>
            <PageWorks />
          </SectionAside>
        );
      case 'hello':
        return (
          <SectionAside>
            <PageWorks />
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
