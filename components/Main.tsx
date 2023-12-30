'use client';

import { useEffect } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import AsideContact from './AsideContact';
import AsideWorks from './AsideWorks';
import AsideMusings from './AsideMusings';
import Curtain from './Curtain.1';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  const path = usePathname();
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a'); // Default primary color
  }, []);

  const renderAsideComponent = () => {
    switch (page.slugAsParams) {
      case 'contact':
        return (
          <SectionAside paddedTop>
            <AsideContact />
          </SectionAside>
        );
      case 'works':
        return (
          <SectionAside fixed paddedTop={false}>
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
          <SectionAside paddedTop={false}>
            <AsideWorks />
          </SectionAside>
        );
      default:
        return <SectionAside />;
    }
  };

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row'>
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
